#!/usr/bin/env node
import { access, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_REVIEW_FILE =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-review.jsonl';
const DEFAULT_SOURCE_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/prompt-import-manifest.json';
const DEFAULT_OUTPUT_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-promotion-manifest.json';
const CURRENT_DATE = '2026-03-19';
const CURRENT_ISO = '2026-03-19T00:00:00+09:00';
const SCREEN_NAME = 'hAru_mAki_ch';
const TIME_ZONE = 'Asia/Tokyo';

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const reviewFile = path.resolve(cwd, options.reviewFile);
  const sourceManifestFile = path.resolve(cwd, options.sourceManifest);
  const outputManifestFile = path.resolve(cwd, options.outputManifest);
  if (options.write && options.cleanPrevious) {
    await cleanupPreviousCategorizedBranches(outputManifestFile, cwd);
  }
  const reviewDecisions = await loadJsonl(reviewFile);
  const sourceManifest = JSON.parse(await readFile(sourceManifestFile, 'utf8'));
  const archiveRecordMap = new Map(
    (sourceManifest.generated_archive_docs ?? []).map((record) => [record.primary_id, record]),
  );
  const docRoot = path.resolve(cwd, 'docs/prompt-catalog');
  const pathCache = new Map();
  const categorizedEntries = [];
  const archiveOnlyEntries = [];
  const writes = [];

  for (const decision of reviewDecisions) {
    const archiveRecord = archiveRecordMap.get(decision.primary_id);
    if (!archiveRecord) {
      continue;
    }

    const archiveAbsPath = path.resolve(cwd, archiveRecord.doc_path);
    const archiveDoc = await readArchiveDoc(archiveAbsPath);

    if (shouldStayArchiveOnly(decision)) {
      const archiveNext = removeCategorizedEntrySection(archiveDoc.raw);
      if (archiveNext !== archiveDoc.raw) {
        writes.push({
          absPath: archiveAbsPath,
          content: archiveNext,
        });
      }
      archiveOnlyEntries.push(buildArchiveOnlyEntry(decision, archiveRecord));
      continue;
    }

    const categoryLocation = await resolveCategoryLocation({
      cwd,
      docRoot,
      archiveRecord,
      decision,
      pathCache,
    });
    const categoryAbsPath = path.resolve(cwd, categoryLocation.docPath);
    const categoryContent = buildCategorizedPage({
      archiveDoc,
      archiveRecord,
      decision,
      categoryLocation,
      categoryAbsPath,
      archiveAbsPath,
    });
    writes.push({
      absPath: categoryAbsPath,
      content: categoryContent,
    });

    const archiveRelativeLink = ensureDotSlash(
      normalizeSlash(path.relative(path.dirname(archiveAbsPath), categoryAbsPath)),
    );
    const archiveNext = upsertCategorizedEntrySection(archiveDoc.raw, {
      categoryLabel: categoryLocation.categoryLabel,
      categoryRelativeLink: archiveRelativeLink,
      reviewStatus: decision.review_status,
      confidence: decision.confidence,
      reviewer: decision.reviewer,
    });
    if (archiveNext !== archiveDoc.raw) {
      writes.push({
        absPath: archiveAbsPath,
        content: archiveNext,
      });
    }

    categorizedEntries.push({
      primary_id: decision.primary_id,
      archive_doc_path: archiveRecord.doc_path,
      categorized_doc_path: categoryLocation.docPath,
      top_category: categoryLocation.topCategory,
      subpath: categoryLocation.subpath,
      title: archiveDoc.title,
      summary: archiveDoc.summary,
      review_status: decision.review_status,
      confidence: decision.confidence,
      reviewer: decision.reviewer,
      source_url: archiveDoc.sourceUrl || decision.source_url || '',
      source_published_at: archiveDoc.sourcePublishedAt || archiveRecord.created_at_iso,
      archive_bucket: archiveRecord.archive_bucket,
    });
  }

  writes.push(...buildCategorizedIndexWrites({ cwd, categorizedEntries }));
  const outputManifest = buildPromotionManifest({
    reviewFile,
    sourceManifestFile,
    sourceManifest,
    reviewDecisions,
    categorizedEntries,
    archiveOnlyEntries,
    cwd,
  });
  writes.push({
    absPath: outputManifestFile,
    content: `${JSON.stringify(outputManifest, null, 2)}\n`,
  });

  const writeTargets = dedupeByPath(writes);
  let changed = 0;
  if (options.write) {
    for (const item of writeTargets) {
      const previous = await readIfExists(item.absPath);
      if (previous === item.content) {
        continue;
      }
      await mkdir(path.dirname(item.absPath), { recursive: true });
      await writeFile(item.absPath, item.content, 'utf8');
      changed += 1;
    }
  }

  console.log(`Review decisions: ${reviewDecisions.length}`);
  console.log(`Generated categorized docs: ${categorizedEntries.length}`);
  console.log(`Archive-only records: ${archiveOnlyEntries.length}`);
  console.log(`Write targets: ${writeTargets.length}`);
  console.log(`Files changed: ${changed}`);
  if (!options.write) {
    console.log('Dry run only. Re-run with --write to persist files.');
  }
}

function parseArgs(argv) {
  const options = {
    reviewFile: DEFAULT_REVIEW_FILE,
    sourceManifest: DEFAULT_SOURCE_MANIFEST,
    outputManifest: DEFAULT_OUTPUT_MANIFEST,
    write: false,
    cleanPrevious: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--review-file') {
      options.reviewFile = requireValue(argv[index + 1], '--review-file');
      index += 1;
      continue;
    }
    if (arg === '--source-manifest') {
      options.sourceManifest = requireValue(argv[index + 1], '--source-manifest');
      index += 1;
      continue;
    }
    if (arg === '--output-manifest') {
      options.outputManifest = requireValue(argv[index + 1], '--output-manifest');
      index += 1;
      continue;
    }
    if (arg === '--write') {
      options.write = true;
      continue;
    }
    if (arg === '--clean-previous') {
      options.cleanPrevious = true;
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
    'Usage: node script/promote-x-categorized-docs.mjs [--write] [--clean-previous]',
    '',
    'Promotes X archive prompt records into categorized docs paths',
    'using the per-record review ledger in x-category-review.jsonl.',
  ].join('\n'));
}

async function loadJsonl(absPath) {
  const raw = await readFile(absPath, 'utf8');
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`Invalid JSONL at ${absPath}:${index + 1}: ${error.message}`);
      }
    });
}

async function cleanupPreviousCategorizedBranches(outputManifestFile, cwd) {
  const previousRaw = await readIfExists(outputManifestFile);
  if (!previousRaw) {
    return;
  }

  let previousManifest;
  try {
    previousManifest = JSON.parse(previousRaw);
  } catch {
    return;
  }

  const branchRoots = new Set();
  for (const entry of previousManifest.categorized_docs ?? []) {
    const relPath = normalizeSlash(String(entry.categorized_doc_path ?? ''));
    const segments = relPath.split('/');
    const xIndex = segments.lastIndexOf('x');
    if (xIndex <= 0) {
      continue;
    }
    branchRoots.add(path.resolve(cwd, ...segments.slice(0, xIndex + 1)));
  }

  for (const branchRoot of branchRoots) {
    await rm(branchRoot, { recursive: true, force: true });
  }
}

async function readArchiveDoc(absPath) {
  const raw = await readFile(absPath, 'utf8');
  const frontmatter = parseFrontmatter(raw);
  const textBlocks = [...raw.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1].trim());
  const promptBody = textBlocks.length > 0 ? textBlocks[textBlocks.length - 1] : '';
  const sourceNotes = textBlocks.length > 1 ? textBlocks[0] : '';
  return {
    absPath,
    raw,
    frontmatter,
    title: frontmatter.title ?? extractHeading(raw),
    summary: extractSummary(raw),
    promptBody,
    sourceNotes,
    sourceUrl: frontmatter.source_url ?? '',
    sourcePublishedAt: frontmatter.source_published_at ?? '',
  };
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return {};
  }

  const frontmatter = {};
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':');
    if (separator <= 0) {
      continue;
    }
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (!value) {
      continue;
    }
    frontmatter[key] = stripQuotes(value);
  }
  return frontmatter;
}

function extractHeading(raw) {
  const match = raw.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Imported X Prompt';
}

function extractSummary(raw) {
  const match = raw.match(/^- summary: (.+)$/m);
  return match ? match[1].trim() : '';
}

async function resolveCategoryLocation({ cwd, docRoot, archiveRecord, decision, pathCache }) {
  const { topCategory, subSegments, isNewCategory } = extractDecisionCategory(decision);
  const resolvedSegments = [...subSegments];

  if (!isNewCategory) {
    while (resolvedSegments.length > 0) {
      const candidateDir = path.resolve(docRoot, topCategory, ...resolvedSegments);
      if (await pathExists(candidateDir, pathCache)) {
        break;
      }
      resolvedSegments.pop();
    }
  }

  const year = archiveRecord.created_at_iso.slice(0, 4);
  const month = archiveRecord.archive_bucket.slice(-2);
  const docPath = normalizeSlash(
    path.join('docs/prompt-catalog', topCategory, ...resolvedSegments, 'x', year, month, `${decision.primary_id}.md`),
  );
  return {
    topCategory,
    subpath: resolvedSegments.join('/'),
    categoryLabel: [topCategory, ...resolvedSegments].join('/'),
    canonicalId: normalizeSlash(path.join(topCategory, ...resolvedSegments, 'x', year, month, decision.primary_id)),
    docPath,
    year,
    month,
  };
}

function normalizeSegments(value) {
  return String(value ?? '')
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function extractDecisionCategory(decision) {
  const preferredPath = [
    String(decision.final_decision ?? '').trim() === 'categorize_new' ? decision.new_category_path : '',
    decision.final_category_path,
    buildCategoryPath(decision.final_top_category, decision.final_subpath),
    buildCategoryPath(decision.proposed_top_category, decision.proposed_subpath),
  ]
    .map((value) => String(value ?? '').trim())
    .find(Boolean);

  const segments = normalizeSegments(preferredPath);
  const topCategory = segments[0] ?? String(decision.final_top_category ?? decision.proposed_top_category ?? '').trim();
  const subSegments = segments.length > 0
    ? segments.slice(1)
    : normalizeSegments(decision.final_subpath ?? decision.proposed_subpath);

  return {
    topCategory,
    subSegments,
    isNewCategory:
      String(decision.final_decision ?? '').trim() === 'categorize_new'
      || decision.requires_new_category === true
      || String(decision.requires_new_category ?? '').trim() === 'true',
  };
}

function buildCategoryPath(topCategory, subpath) {
  const top = String(topCategory ?? '').trim();
  if (!top) {
    return '';
  }
  const tail = normalizeSegments(subpath).join('/');
  return tail ? `${top}/${tail}` : top;
}

async function pathExists(absPath, cache) {
  if (cache.has(absPath)) {
    return cache.get(absPath);
  }
  try {
    const info = await stat(absPath);
    const exists = info.isDirectory();
    cache.set(absPath, exists);
    return exists;
  } catch {
    cache.set(absPath, false);
    return false;
  }
}

function shouldStayArchiveOnly(decision) {
  return (
    String(decision.final_decision ?? '').trim() === 'archive_only'
    || String(decision.final_top_category ?? '').trim() === 'archive_only'
    || String(decision.proposed_top_category ?? '').trim() === 'archive_only'
    || String(decision.fallback_action ?? '').trim() === 'archive_only'
  );
}

function buildArchiveOnlyEntry(decision, archiveRecord) {
  return {
    primary_id: decision.primary_id,
    archive_doc_path: archiveRecord.doc_path,
    reason: decision.rationale ?? 'archive_only',
    fallback_action: decision.fallback_action ?? 'archive_only',
    reviewer: decision.reviewer ?? '',
  };
}

function buildCategorizedPage({
  archiveDoc,
  archiveRecord,
  decision,
  categoryLocation,
  categoryAbsPath,
  archiveAbsPath,
}) {
  const sourceUrl = archiveDoc.sourceUrl || decision.source_url || '';
  const archiveRelativeLink = ensureDotSlash(
    normalizeSlash(path.relative(path.dirname(categoryAbsPath), archiveAbsPath)),
  );
  const tags = [
    'x',
    'marker',
    'x-import',
    categoryLocation.topCategory,
    ...normalizeSegments(categoryLocation.subpath),
    archiveRecord.archive_bucket,
  ];
  if (decision.review_status === 'needs_review') {
    tags.push('needs-review');
  }

  const lines = [
    '---',
    `title: ${yamlScalar(archiveDoc.title)}`,
    `description: ${yamlScalar(buildCategorizedDescription(archiveDoc, categoryLocation))}`,
    `category: ${yamlScalar(frontmatterCategory(categoryLocation.topCategory))}`,
    'intent: x-import',
    'tags:',
    ...tags.map((tag) => `  - ${tag}`),
    `status: ${decision.review_status === 'classified' ? 'experimental' : 'draft'}`,
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    `canonical_id: ${yamlScalar(categoryLocation.canonicalId)}`,
    'source_platform: x',
    `source_author: ${yamlScalar(SCREEN_NAME)}`,
    `source_post_id: ${yamlScalar(decision.primary_id)}`,
    `source_published_at: ${yamlScalar(archiveDoc.sourcePublishedAt || archiveRecord.created_at_iso)}`,
    `archive_bucket: ${yamlScalar(archiveRecord.archive_bucket)}`,
    'marker: true',
    ...(sourceUrl ? [`source_url: ${yamlScalar(sourceUrl)}`] : []),
    `x_review_status: ${yamlScalar(decision.review_status)}`,
    `x_review_confidence: ${yamlScalar(decision.confidence)}`,
    `x_archive_path: ${yamlScalar(archiveRecord.doc_path)}`,
    '---',
    '',
    `# ${escapeDisplayText(archiveDoc.title)}`,
    '',
    '## Classification',
    `- category: ${categoryLocation.categoryLabel}`,
    `- review status: ${decision.review_status}`,
    `- confidence: ${decision.confidence}`,
    `- reviewer: ${decision.reviewer || 'unknown'}`,
    `- archive source: [${decision.primary_id}](${archiveRelativeLink})`,
    '',
  ];

  if (sourceUrl) {
    lines.push('## Source Post', '<ClientOnly>', `  <XPostEmbed url="${sourceUrl}" />`, '</ClientOnly>', '');
  } else {
    lines.push('## Source Post', '- note-only record without a tweet embed.', '');
  }

  if (archiveDoc.sourceNotes) {
    lines.push('## Source Notes', buildTextFence(archiveDoc.sourceNotes), '');
  }

  lines.push('## Prompt Body', buildTextFence(archiveDoc.promptBody || '[Prompt text was empty after extraction]'), '');

  const evidence = Array.isArray(decision.evidence) ? decision.evidence : [];
  if (evidence.length > 0 || decision.rationale) {
    lines.push('## Review Evidence');
    for (const item of evidence) {
      lines.push(`- ${escapeDisplayText(item)}`);
    }
    if (decision.rationale) {
      lines.push(`- rationale: ${escapeDisplayText(decision.rationale)}`);
    }
    lines.push(`- fallback action: ${escapeDisplayText(decision.fallback_action || 'none')}`, '');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function buildCategorizedDescription(archiveDoc, categoryLocation) {
  return archiveDoc.summary || `Imported X prompt entry routed to ${categoryLocation.categoryLabel}`;
}

function frontmatterCategory(topCategory) {
  return topCategory === 'presentation' ? 'writing' : topCategory;
}

function upsertCategorizedEntrySection(raw, entry) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const section = [
    '## Categorized Entry',
    `- canonical doc: [${entry.categoryLabel}](${entry.categoryRelativeLink})`,
    `- review status: ${entry.reviewStatus}`,
    `- confidence: ${entry.confidence}`,
    `- reviewer: ${entry.reviewer || 'unknown'}`,
  ].join('\n');
  const pattern = /\n## Categorized Entry\n[\s\S]*?(?=\n## [^\n]+|\n?$)/;
  if (pattern.test(normalized)) {
    return normalized.replace(pattern, `\n${section}`);
  }
  const anchor = '\n## Source Post';
  if (normalized.includes(anchor)) {
    return normalized.replace(anchor, `\n${section}\n${anchor}`);
  }
  return `${normalized.trimEnd()}\n\n${section}\n`;
}

function removeCategorizedEntrySection(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const pattern = /\n## Categorized Entry\n[\s\S]*?(?=\n## [^\n]+|\n?$)/;
  if (!pattern.test(normalized)) {
    return raw;
  }
  return normalized.replace(pattern, '');
}

function buildCategorizedIndexWrites({ cwd, categorizedEntries }) {
  const entriesByBase = groupBy(categorizedEntries, (entry) =>
    normalizeSlash(path.join('docs/prompt-catalog', entry.top_category, ...(entry.subpath ? entry.subpath.split('/') : []), 'x')),
  );
  const writes = [];

  for (const [baseDir, baseEntries] of entriesByBase.entries()) {
    const baseAbsDir = path.resolve(cwd, baseDir);
    const branchLabel = baseDir
      .replace(/^docs\/prompt-catalog\//, '')
      .replace(/\/x$/, '')
      .replace(/\//g, ' / ');
    const groupedByYear = groupBy(baseEntries, (entry) => entry.source_published_at.slice(0, 4));
    writes.push({
      absPath: path.resolve(baseAbsDir, 'index.md'),
      content: buildRootIndex({ branchLabel, baseDir, entries: baseEntries, groupedByYear }),
    });

    for (const [year, yearEntries] of sortGroupEntries(groupedByYear)) {
      writes.push({
        absPath: path.resolve(baseAbsDir, year, 'index.md'),
        content: buildYearIndex({ branchLabel, year, entries: yearEntries }),
      });

      const groupedByMonth = groupBy(yearEntries, (entry) => entry.archive_bucket.slice(-2));
      for (const [month, monthEntries] of sortGroupEntries(groupedByMonth)) {
        writes.push({
          absPath: path.resolve(baseAbsDir, year, month, 'index.md'),
          content: buildMonthIndex({ branchLabel, year, month, entries: monthEntries }),
        });
      }
    }
  }

  return writes;
}

function buildRootIndex({ branchLabel, entries, groupedByYear }) {
  const latest = [...entries].sort(compareEntriesDesc).slice(0, 20);
  const lines = [
    '---',
    'title: X Imports',
    `description: ${yamlScalar(`Categorized X prompt imports for ${branchLabel}`)}`,
    `category: ${yamlScalar(frontmatterCategory(entries[0]?.top_category ?? 'archive'))}`,
    'intent: x-import-index',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    '# X Imports',
    '',
    `- branch: ${branchLabel}`,
    `- items: ${entries.length}`,
    `- classified: ${entries.filter((entry) => entry.review_status === 'classified').length}`,
    `- needs review: ${entries.filter((entry) => entry.review_status === 'needs_review').length}`,
    '',
    '## Latest 20',
  ];

  for (const entry of latest) {
    lines.push(
      `- [${escapeDisplayText(entry.title || entry.primary_id)}](./${entry.source_published_at.slice(0, 4)}/${entry.archive_bucket.slice(-2)}/${entry.primary_id}.md) - ${formatJst(entry.source_published_at)} / ${entry.review_status} / ${entry.confidence}`,
    );
  }

  lines.push('', '## By Year');
  for (const [year, yearEntries] of sortGroupEntries(groupedByYear)) {
    lines.push(`- [${year}](./${year}/index.md) - ${yearEntries.length} items`);
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

function buildYearIndex({ branchLabel, year, entries }) {
  const groupedByMonth = groupBy(entries, (entry) => entry.archive_bucket.slice(-2));
  const lines = [
    '---',
    `title: ${yamlScalar(`X Imports ${year}`)}`,
    `description: ${yamlScalar(`Categorized X prompt imports for ${branchLabel} in ${year}`)}`,
    `category: ${yamlScalar(frontmatterCategory(entries[0]?.top_category ?? 'archive'))}`,
    'intent: x-import-index',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    `# X Imports ${year}`,
    '',
    `- branch: ${branchLabel}`,
    `- items: ${entries.length}`,
    '',
    '## By Month',
  ];

  for (const [month, monthEntries] of sortGroupEntries(groupedByMonth)) {
    lines.push(`- [${year}-${month}](./${month}/index.md) - ${monthEntries.length} items`);
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

function buildMonthIndex({ branchLabel, year, month, entries }) {
  const sorted = [...entries].sort(compareEntriesDesc);
  const lines = [
    '---',
    `title: ${yamlScalar(`X Imports ${year}-${month}`)}`,
    `description: ${yamlScalar(`Categorized X prompt imports for ${branchLabel} in ${year}-${month}`)}`,
    `category: ${yamlScalar(frontmatterCategory(entries[0]?.top_category ?? 'archive'))}`,
    'intent: x-import-index',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    `# X Imports ${year}-${month}`,
    '',
    `- branch: ${branchLabel}`,
    `- items: ${entries.length}`,
    '',
    '## Entries',
  ];

  for (const entry of sorted) {
    lines.push(
      `- [${escapeDisplayText(entry.title || entry.primary_id)}](./${entry.primary_id}.md) - ${formatJst(entry.source_published_at)} / ${entry.review_status} / ${entry.confidence}`,
    );
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

function buildPromotionManifest({
  reviewFile,
  sourceManifestFile,
  sourceManifest,
  reviewDecisions,
  categorizedEntries,
  archiveOnlyEntries,
  cwd,
}) {
  const countsByTopCategory = {};
  for (const entry of categorizedEntries) {
    countsByTopCategory[entry.top_category] = (countsByTopCategory[entry.top_category] ?? 0) + 1;
  }

  return {
    generated_at: CURRENT_ISO,
    review_file: relativePath(reviewFile, cwd),
    source_manifest: relativePath(sourceManifestFile, cwd),
    summary: {
      canonical_record_count: sourceManifest.canonical_record_count ?? null,
      review_decisions: reviewDecisions.length,
      categorized_docs: categorizedEntries.length,
      archive_only_records: archiveOnlyEntries.length,
      counts_by_top_category: countsByTopCategory,
    },
    categorized_docs: categorizedEntries.map((entry) => ({
      ...entry,
      archive_doc_path: normalizeSlash(entry.archive_doc_path),
      categorized_doc_path: normalizeSlash(entry.categorized_doc_path),
    })),
    archive_only_records: archiveOnlyEntries.map((entry) => ({
      ...entry,
      archive_doc_path: normalizeSlash(entry.archive_doc_path),
    })),
  };
}

function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    const bucket = map.get(key);
    if (bucket) {
      bucket.push(item);
      continue;
    }
    map.set(key, [item]);
  }
  return map;
}

function sortGroupEntries(map) {
  return [...map.entries()].sort((left, right) => right[0].localeCompare(left[0], 'en'));
}

function compareEntriesDesc(left, right) {
  if (left.source_published_at !== right.source_published_at) {
    return right.source_published_at.localeCompare(left.source_published_at);
  }
  return left.primary_id.localeCompare(right.primary_id);
}

function dedupeByPath(items) {
  const map = new Map();
  for (const item of items) {
    map.set(normalizeSlash(item.absPath), item);
  }
  return [...map.values()];
}

async function readIfExists(absPath) {
  try {
    await access(absPath);
    return await readFile(absPath, 'utf8');
  } catch {
    return null;
  }
}

function yamlScalar(value) {
  return JSON.stringify(String(value ?? ''));
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

function relativePath(absPath, cwd) {
  return normalizeSlash(path.relative(cwd, absPath));
}

function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"'))
    || (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function ensureDotSlash(value) {
  return value.startsWith('.') ? value : `./${value}`;
}

function buildTextFence(text) {
  const value = String(text ?? '').trimEnd();
  const matches = [...value.matchAll(/`+/g)];
  const maxBackticks = matches.reduce((max, match) => Math.max(max, match[0].length), 2);
  const fence = '`'.repeat(Math.max(3, maxBackticks + 1));
  return `${fence}text\n${value}\n${fence}`;
}

function escapeDisplayText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;')
    .replace(/\r?\n+/g, ' ')
    .trim();
}

function formatJst(isoString) {
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const parts = Object.fromEntries(formatter.formatToParts(new Date(isoString)).map((part) => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} JST`;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
