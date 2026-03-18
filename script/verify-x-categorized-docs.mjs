#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_PROMOTION_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-promotion-manifest.json';
const DEFAULT_OUTPUT =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-verification-report.json';

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const promotionManifestPath = path.resolve(cwd, options.promotionManifest);
  const outputPath = path.resolve(cwd, options.output);
  const manifest = JSON.parse(await readFile(promotionManifestPath, 'utf8'));

  const categorizedResults = [];
  for (const [index, record] of (manifest.categorized_docs ?? []).entries()) {
    categorizedResults.push(await verifyCategorizedRecord({ cwd, record, index }));
  }

  const archiveOnlyResults = [];
  for (const [index, record] of (manifest.archive_only_records ?? []).entries()) {
    archiveOnlyResults.push(await verifyArchiveOnlyRecord({ cwd, record, index }));
  }

  const allResults = [...categorizedResults, ...archiveOnlyResults];
  const failures = allResults.filter((item) => !item.pass);
  const report = {
    generated_at: new Date().toISOString(),
    promotion_manifest: normalizeSlash(path.relative(cwd, promotionManifestPath)),
    summary: {
      categorized_docs_checked: categorizedResults.length,
      categorized_docs_passed: categorizedResults.filter((item) => item.pass).length,
      archive_only_checked: archiveOnlyResults.length,
      archive_only_passed: archiveOnlyResults.filter((item) => item.pass).length,
      total_checked: allResults.length,
      total_failed: failures.length,
    },
    failures,
    categorized_docs: categorizedResults,
    archive_only_records: archiveOnlyResults,
  };

  if (options.write) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  }

  console.log(JSON.stringify(report.summary, null, 2));
  if (failures.length > 0) {
    process.exitCode = 1;
    return;
  }
  console.log('Failures: 0');
}

function parseArgs(argv) {
  const options = {
    promotionManifest: DEFAULT_PROMOTION_MANIFEST,
    output: DEFAULT_OUTPUT,
    write: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--promotion-manifest') {
      options.promotionManifest = requireValue(argv[index + 1], '--promotion-manifest');
      index += 1;
      continue;
    }
    if (arg === '--output') {
      options.output = requireValue(argv[index + 1], '--output');
      index += 1;
      continue;
    }
    if (arg === '--write') {
      options.write = true;
      continue;
    }
    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function requireValue(value, flag) {
  if (!value) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function printHelp() {
  console.log([
    'Usage: node script/verify-x-categorized-docs.mjs [--write]',
    '',
    'Verifies categorized X prompt docs and archive-only fallbacks',
    'from x-category-promotion-manifest.json.',
  ].join('\n'));
}

async function verifyCategorizedRecord({ cwd, record, index }) {
  const categorizedAbsPath = path.resolve(cwd, record.categorized_doc_path);
  const archiveAbsPath = path.resolve(cwd, record.archive_doc_path);
  const categorizedRaw = await readMaybe(categorizedAbsPath);
  const archiveRaw = await readMaybe(archiveAbsPath);
  const checks = [];

  checks.push(checkBoolean(categorizedRaw !== null, 'categorized_doc_exists'));
  checks.push(checkBoolean(archiveRaw !== null, 'archive_doc_exists'));

  if (categorizedRaw !== null) {
    checks.push(checkBoolean(includesYamlScalar(categorizedRaw, 'source_post_id', record.primary_id), 'source_post_id_matches'));
    checks.push(checkBoolean(includesYamlScalar(categorizedRaw, 'x_review_status', record.review_status), 'review_status_matches'));
    checks.push(checkBoolean(includesYamlScalar(categorizedRaw, 'x_archive_path', normalizeSlash(record.archive_doc_path)), 'archive_path_matches'));
    checks.push(checkBoolean(categorizedRaw.includes('## Source Post'), 'has_source_post_section'));
    if (record.source_url) {
      checks.push(checkBoolean(categorizedRaw.includes('<XPostEmbed'), 'has_x_embed'));
      checks.push(checkBoolean(categorizedRaw.includes(record.source_url), 'source_url_present'));
    }
  }

  if (archiveRaw !== null) {
    const relativeLink = normalizeSlash(path.relative(path.dirname(archiveAbsPath), categorizedAbsPath));
    checks.push(checkBoolean(archiveRaw.includes('## Categorized Entry'), 'archive_has_categorized_entry_section'));
    checks.push(checkBoolean(archiveRaw.includes(relativeLink), 'archive_links_to_categorized_doc'));
  }

  return {
    type: 'categorized_doc',
    index,
    primary_id: record.primary_id,
    categorized_doc_path: normalizeSlash(record.categorized_doc_path),
    archive_doc_path: normalizeSlash(record.archive_doc_path),
    pass: checks.every((item) => item.pass),
    checks,
  };
}

async function verifyArchiveOnlyRecord({ cwd, record, index }) {
  const archiveRaw = await readMaybe(path.resolve(cwd, record.archive_doc_path));
  const checks = [
    checkBoolean(archiveRaw !== null, 'archive_doc_exists'),
  ];

  return {
    type: 'archive_only_record',
    index,
    primary_id: record.primary_id,
    archive_doc_path: normalizeSlash(record.archive_doc_path),
    pass: checks.every((item) => item.pass),
    checks,
  };
}

async function readMaybe(absPath) {
  try {
    return await readFile(absPath, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

function checkBoolean(pass, name) {
  return { name, pass };
}

function includesYamlScalar(raw, key, value) {
  const escaped = escapeRegExp(String(value));
  const patterns = [
    new RegExp(`^${key}:\\s*"${escaped}"$`, 'm'),
    new RegExp(`^${key}:\\s*'${escaped}'$`, 'm'),
    new RegExp(`^${key}:\\s*${escaped}$`, 'm'),
  ];
  return patterns.some((pattern) => pattern.test(raw));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
