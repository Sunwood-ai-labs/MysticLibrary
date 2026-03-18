#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/prompt-import-manifest.json';
const DEFAULT_OUTPUT =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/docs-verification-report.json';

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const manifestPath = path.resolve(cwd, options.manifest);
  const outputPath = path.resolve(cwd, options.output);
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

  const generatedResults = [];
  for (const [index, record] of manifest.generated_archive_docs.entries()) {
    generatedResults.push(await verifyGeneratedRecord({ cwd, record, index }));
  }

  const matchedResults = [];
  for (const [index, record] of manifest.matched_existing_docs.entries()) {
    matchedResults.push(await verifyMatchedRecord({ cwd, record, index }));
  }

  const allResults = [...generatedResults, ...matchedResults];
  const failures = allResults.filter((item) => !item.pass);

  const report = {
    generated_at: new Date().toISOString(),
    manifest_path: normalizeForJson(path.relative(cwd, manifestPath)),
    scope: {
      docs_only: true,
      prompts_excluded: true,
      note: 'Verifies docs landing paths and embedded source evidence per manifest entry. Does not verify prompts/docs-first backup mirrors.',
    },
    limits: {
      canonical_audit_note:
        'docs:canonical-audit verifies canonical mapping and prompt source references, not per-record imported post evidence.',
    },
    summary: {
      generated_archive_docs_checked: generatedResults.length,
      generated_archive_docs_passed: generatedResults.filter((item) => item.pass).length,
      matched_existing_docs_checked: matchedResults.length,
      matched_existing_docs_passed: matchedResults.filter((item) => item.pass).length,
      total_checked: allResults.length,
      total_failed: failures.length,
    },
    failures,
    generated_archive_docs: generatedResults,
    matched_existing_docs: matchedResults,
  };

  if (options.write) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
  }

  console.log(JSON.stringify(report.summary, null, 2));
  if (failures.length > 0) {
    console.log(JSON.stringify(failures.slice(0, 20), null, 2));
    process.exitCode = 1;
    return;
  }

  console.log(`Failures: 0`);
  console.log(`Output: ${normalizeForJson(path.relative(cwd, outputPath))}`);
}

function parseArgs(argv) {
  const options = {
    manifest: DEFAULT_MANIFEST,
    output: DEFAULT_OUTPUT,
    write: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--manifest') {
      options.manifest = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === '--output') {
      options.output = argv[index + 1];
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

function printHelp() {
  console.log([
    'Usage: node script/verify-x-prompt-archive-docs.mjs [--write]',
    '',
    'Verifies every manifest record against docs-only destinations.',
    'Outputs a JSON verification report when --write is provided.',
  ].join('\n'));
}

async function verifyGeneratedRecord({ cwd, record, index }) {
  const raw = await readMaybe(path.resolve(cwd, record.doc_path));
  const checks = [];

  checks.push(checkBoolean(raw !== null, 'doc_exists'));
  if (raw !== null) {
    checks.push(checkBoolean(raw.includes('category: archive'), 'has_archive_category'));
    checks.push(checkBoolean(raw.includes('intent: x-marker-archive'), 'has_archive_intent'));
    checks.push(
      checkBoolean(
        includesYamlScalar(raw, 'source_post_id', record.primary_id),
        'source_post_id_matches_primary_id',
      ),
    );
    checks.push(checkBoolean(includesYamlScalar(raw, 'archive_bucket', record.archive_bucket), 'archive_bucket_matches'));
    checks.push(
      checkBoolean(includesYamlScalar(raw, 'source_published_at', record.created_at_iso), 'source_published_at_matches'),
    );

    if ((record.tweet_ids ?? []).length > 0) {
      checks.push(checkBoolean(raw.includes('<XPostEmbed'), 'has_x_embed'));
      checks.push(
        checkBoolean(record.tweet_ids.some((id) => raw.includes(`status/${id}`) || raw.includes(id)), 'has_tweet_id_evidence'),
      );
    } else {
      checks.push(checkBoolean(/note[- ]only/i.test(raw), 'has_note_only_evidence'));
    }

    if ((record.note_ids ?? []).length > 0) {
      checks.push(checkBoolean(record.note_ids.some((id) => raw.includes(id)), 'has_note_id_evidence'));
    }
  }

  return {
    type: 'generated_archive_doc',
    index,
    primary_id: record.primary_id,
    doc_path: normalizeForJson(record.doc_path),
    pass: checks.every((item) => item.pass),
    checks,
  };
}

async function verifyMatchedRecord({ cwd, record, index }) {
  const raw = await readMaybe(path.resolve(cwd, record.doc_path));
  const checks = [];

  checks.push(checkBoolean(raw !== null, 'doc_exists'));
  if (raw !== null) {
    checks.push(
      checkBoolean(
        (record.tweet_ids ?? []).length === 0 || raw.includes('<XPostEmbed'),
        'has_x_embed_when_tweet_ids_present',
      ),
    );
    checks.push(
      checkBoolean(
        (record.tweet_ids ?? []).length === 0
          || record.tweet_ids.some((id) => raw.includes(`status/${id}`) || raw.includes(id)),
        'has_tweet_id_evidence',
      ),
    );
  }

  return {
    type: 'matched_existing_doc',
    index,
    primary_id: record.primary_id,
    doc_path: normalizeForJson(record.doc_path),
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

function normalizeForJson(value) {
  return value.replace(/\\/g, '/');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
