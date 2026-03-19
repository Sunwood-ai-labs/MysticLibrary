#!/usr/bin/env node
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_PROMOTION_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-promotion-manifest.json';
const DEFAULT_OUTPUT =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-canonical-verification-report.json';

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

  const globalChecks = await verifyGlobalState({ cwd });
  const allResults = [...categorizedResults, ...archiveOnlyResults];
  const failures = [
    ...allResults.filter((item) => !item.pass),
    ...globalChecks.filter((item) => !item.pass),
  ];

  const report = {
    generated_at: new Date().toISOString(),
    promotion_manifest: normalizeSlash(path.relative(cwd, promotionManifestPath)),
    summary: {
      categorized_docs_checked: categorizedResults.length,
      categorized_docs_passed: categorizedResults.filter((item) => item.pass).length,
      archive_only_checked: archiveOnlyResults.length,
      archive_only_passed: archiveOnlyResults.filter((item) => item.pass).length,
      global_checks: globalChecks.length,
      global_checks_passed: globalChecks.filter((item) => item.pass).length,
      total_checked: allResults.length + globalChecks.length,
      total_failed: failures.length,
    },
    failures,
    global_checks: globalChecks,
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
  if (!value) throw new Error(`${flag} requires a value`);
  return value;
}

function printHelp() {
  console.log([
    'Usage: node script/verify-x-canonical-docs.mjs [--write]',
    '',
    'Verifies canonical X prompt promotion outputs, prompt mirrors,',
    'archive backlinks, and locale navigation state.',
  ].join('\n'));
}

async function verifyCategorizedRecord({ cwd, record, index }) {
  const categorizedAbsPath = path.resolve(cwd, record.categorized_doc_path);
  const archiveAbsPath = path.resolve(cwd, record.archive_doc_path);
  const categorizedRaw = await readMaybe(categorizedAbsPath);
  const archiveRaw = await readMaybe(archiveAbsPath);
  const checks = [];
  const slug = record.slug || path.basename(record.categorized_doc_path, '.md');

  checks.push(checkBoolean(categorizedRaw !== null, 'categorized_doc_exists'));
  checks.push(checkBoolean(archiveRaw !== null, 'archive_doc_exists'));
  checks.push(checkBoolean(!record.categorized_doc_path.includes('/x/'), 'canonical_path_not_x_branch'));

  if (categorizedRaw !== null) {
    const frontmatter = parseFrontmatter(categorizedRaw);
    const promptSource = String(frontmatter.prompt_source ?? '').trim();
    checks.push(checkBoolean(includesYamlScalar(categorizedRaw, 'canonical_id', record.canonical_id), 'canonical_id_matches'));
    checks.push(checkBoolean(frontmatter.intent && frontmatter.intent !== 'x-import', 'intent_is_canonical'));
    checks.push(checkBoolean(Boolean(promptSource), 'has_prompt_source'));
    if (promptSource) checks.push(checkBoolean(await exists(path.resolve(cwd, promptSource)), 'prompt_source_exists'));
    if (record.generated_doc !== false) {
      const primarySourceId = String(frontmatter.source_post_id ?? '').trim();
      const isPrimarySource = primarySourceId === String(record.primary_id);
      checks.push(checkBoolean(
        isPrimarySource || includesYamlListItem(categorizedRaw, 'source_related_post_ids', record.primary_id),
        'source_post_id_matches',
      ));
      checks.push(checkBoolean(
        includesYamlScalar(categorizedRaw, 'source_archive_path', normalizeSlash(record.archive_doc_path))
          || includesYamlListItem(categorizedRaw, 'source_related_archive_paths', normalizeSlash(record.archive_doc_path)),
        'archive_path_matches',
      ));
      checks.push(checkBoolean(categorizedRaw.includes('## ソース文脈'), 'has_source_context_section'));
      if (record.source_url && isPrimarySource) {
        checks.push(checkBoolean(categorizedRaw.includes('<XPostEmbed'), 'has_x_embed'));
        checks.push(checkBoolean(categorizedRaw.includes(record.source_url), 'source_url_present'));
      }
    }
  }

  if (archiveRaw !== null) {
    const relativeLink = normalizeSlash(path.relative(path.dirname(archiveAbsPath), categorizedAbsPath));
    checks.push(checkBoolean(archiveRaw.includes('## Categorized Entry'), 'archive_has_categorized_entry_section'));
    checks.push(checkBoolean(archiveRaw.includes(relativeLink), 'archive_links_to_canonical_doc'));
  }

  checks.push(checkBoolean(!hasUrlArtifact(slug), 'slug_avoids_url_artifacts'));
  checks.push(checkBoolean(!hasCoordinateArtifact(slug), 'slug_avoids_raw_coordinates'));
  checks.push(checkBoolean(!hasRepeatedFamilyArtifact(slug), 'slug_avoids_repeated_family_tokens'));
  checks.push(checkBoolean(!/unlmited/.test(slug), 'slug_avoids_known_typos'));
  if (/-alt-\d+$/.test(slug)) {
    const baseAbsPath = categorizedAbsPath.replace(/-alt-\d+\.md$/, '.md');
    checks.push(checkBoolean(await exists(baseAbsPath), 'alt_slug_has_base_doc'));
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
  const checks = [checkBoolean(archiveRaw !== null, 'archive_doc_exists')];

  return {
    type: 'archive_only_record',
    index,
    primary_id: record.primary_id,
    archive_doc_path: normalizeSlash(record.archive_doc_path),
    pass: checks.every((item) => item.pass),
    checks,
  };
}

async function verifyGlobalState({ cwd }) {
  const checks = [];
  const categoryXDirs = await findCategoryXDirs(path.resolve(cwd, 'docs/prompt-catalog'));
  checks.push({
    name: 'category_local_x_dirs_removed',
    pass: categoryXDirs.length === 0,
    details: categoryXDirs,
  });

  const enMarkdownFiles = await listMarkdownFiles(path.resolve(cwd, 'docs/en/prompt-catalog'));
  const brokenXRefs = [];
  for (const file of enMarkdownFiles) {
    const raw = await readFile(file, 'utf8');
    const matches = raw.match(/\/prompt-catalog\/(?!archive\/x\/)[^)'"`\s]+\/x\/?/g) ?? [];
    if (matches.length > 0) brokenXRefs.push({ file: normalizeSlash(path.relative(cwd, file)), matches });
    if (raw.includes('x-categorized-imports:start')) brokenXRefs.push({ file: normalizeSlash(path.relative(cwd, file)), matches: ['legacy-x-categorized-imports-marker'] });
  }
  checks.push({
    name: 'english_indexes_no_category_x_refs',
    pass: brokenXRefs.length === 0,
    details: brokenXRefs,
  });
  return checks;
}

async function findCategoryXDirs(rootAbsPath) {
  const matches = [];
  const stack = [rootAbsPath];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const fullPath = path.join(current, entry.name);
      const relative = normalizeSlash(path.relative(rootAbsPath, fullPath));
      if (relative === 'archive' || relative.startsWith('archive/')) {
        stack.push(fullPath);
        continue;
      }
      if (entry.name === 'x') matches.push(relative);
      stack.push(fullPath);
    }
  }
  return matches;
}

async function listMarkdownFiles(rootAbsPath) {
  const files = [];
  const stack = [rootAbsPath];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.md')) files.push(fullPath);
    }
  }
  return files;
}

function hasUrlArtifact(slug) {
  return /(?:^|-)t-co(?:-|$)|(?:^|-)x-com(?:-|$)|(?:^|-)https?(?:-|$)|(?:^|-)www(?:-|$)|ai-template-\d{6,}/.test(slug);
}

function hasCoordinateArtifact(slug) {
  return /\d{2,}-\d{6,}-\d+/.test(slug) || /(?:^|-)location-(?:\d+-){3,}\d+/.test(slug);
}

function hasRepeatedFamilyArtifact(slug) {
  return [
    /nano-banana(?:-pro)?.*nano-banana(?:-pro)?/,
    /higgsfield.*higgsfield/,
    /sora2.*sora2/,
    /seedream.*seedream/,
    /gemini.*gemini/,
    /whisk.*whisk/,
    /hunyuanimage.*hunyuanimage/,
    /imagen4.*imagen4/,
  ].some((pattern) => pattern.test(slug));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator <= 0) continue;
    out[line.slice(0, separator).trim()] = stripQuotes(line.slice(separator + 1).trim());
  }
  return out;
}

async function readMaybe(absPath) {
  try {
    return await readFile(absPath, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') return null;
    throw error;
  }
}

async function exists(absPath) {
  try {
    await stat(absPath);
    return true;
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') return false;
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

function includesYamlListItem(raw, key, value) {
  const escaped = escapeRegExp(String(value));
  const blockMatch = raw.match(new RegExp(`^${key}:\\n([\\s\\S]*?)(?=^\\S|\\Z)`, 'm'));
  if (!blockMatch) return false;
  return new RegExp(`^\\s*-\\s*"?${escaped}"?$`, 'm').test(blockMatch[1]);
}

function stripQuotes(value) {
  const trimmed = String(value ?? '').trim();
  return (trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))
    ? trimmed.slice(1, -1)
    : trimmed;
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
