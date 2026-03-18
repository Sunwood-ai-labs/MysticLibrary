#!/usr/bin/env node
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_ARCHIVE_DIR =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/data';
const CURRENT_DATE = '2026-03-19';
const CURRENT_ISO = '2026-03-19T00:00:00+09:00';
const MARKER = 'ーーー📒プロンプトーーー';
const SCREEN_NAME = 'hAru_mAki_ch';
const TIME_ZONE = 'Asia/Tokyo';
const SIMILARITY_THRESHOLD = 0.98;
const PROMPT_BODY_ANCHOR = /^##\s+(?:プロンプト本文|Prompt Body)\s*$/m;
const FIRST_SECTION_ANCHOR = /^##\s+/m;
const JP_DOCS_ROOT = 'docs/prompt-catalog';
const EN_DOCS_ROOT = 'docs/en/prompt-catalog';
const JP_ARCHIVE_CATEGORY_ROOT = 'docs/prompt-catalog/archive';
const JP_ARCHIVE_X_ROOT = 'docs/prompt-catalog/archive/x';

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const archiveDir = path.resolve(cwd, options.archiveDir);
  const manifestPath = path.resolve(path.dirname(archiveDir), 'prompt-import-manifest.json');

  const rawItems = await loadArchiveItems(archiveDir);
  const rawExactGroupCount = groupBy(rawItems, (item) => item.rawTimestamp).size;
  const timestampGroups = groupBy(rawItems, (item) => item.createdAtIso);
  const records = buildRecords(timestampGroups);
  const accountedRawItems = records.reduce((sum, record) => sum + record.clusterItems.length, 0);

  if (accountedRawItems !== rawItems.length) {
    throw new Error(`Accounted raw items mismatch: expected ${rawItems.length}, got ${accountedRawItems}`);
  }

  const jpDocs = await collectDocs(path.resolve(cwd, JP_DOCS_ROOT), {
    excludeRoots: [path.resolve(cwd, JP_ARCHIVE_CATEGORY_ROOT)],
  });
  const matchResult = matchRecordsToExisting(records, jpDocs);
  const existingDocWrites = await buildExistingDocWrites(matchResult.matchedRecords, cwd);
  const archiveWrites = buildArchiveWrites(matchResult.unmatchedRecords, cwd);
  const manifestWrite = {
    absPath: manifestPath,
    content: `${JSON.stringify(buildManifest({
      archiveDir,
      rawItems,
      rawExactGroupCount,
      timestampGroups,
      records,
      matchResult,
      existingDocWrites,
      archiveWrites,
      cwd,
    }), null, 2)}\n`,
  };

  const writeTargets = dedupeByPath([...existingDocWrites, ...archiveWrites, manifestWrite]);
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

  console.log(`Archive dir: ${relativePath(archiveDir, cwd)}`);
  console.log(`Raw items with marker: ${rawItems.length}`);
  console.log(`Raw exact timestamp groups: ${rawExactGroupCount}`);
  console.log(`Normalized timestamp groups: ${timestampGroups.size}`);
  console.log(`Canonical records: ${records.length}`);
  console.log(`Matched existing docs: ${matchResult.matchedRecords.length}`);
  console.log(`New archive docs: ${matchResult.unmatchedRecords.length}`);
  console.log(`Collision groups: ${collectCollisionGroups(timestampGroups, records).length}`);
  console.log(`Note-only records: ${records.filter((record) => record.sourceKinds === 'note only').length}`);
  console.log(`Files prepared: ${writeTargets.length}`);
  console.log(`Files changed: ${changed}`);

  if (!options.write) {
    console.log('\nDry run only. Re-run with --write to persist files.');
  }
}

function parseArgs(argv) {
  const options = {
    archiveDir: DEFAULT_ARCHIVE_DIR,
    write: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--write') {
      options.write = true;
      continue;
    }
    if (arg === '--archive-dir') {
      const value = argv[index + 1];
      if (!value) {
        throw new Error('--archive-dir requires a value');
      }
      options.archiveDir = value;
      index += 1;
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
    'Usage: node script/import-x-prompt-archive.mjs [--write] [--archive-dir <relative-path>]',
    '',
    'Imports every X archive post containing the marker',
    `\`${MARKER}\` into \`${JP_ARCHIVE_X_ROOT}\`,`,
    'updates matched existing docs with X embeds, and writes a manifest for auditability.',
  ].join('\n'));
}

async function loadArchiveItems(archiveDir) {
  const tweets = await loadArchivePart(path.join(archiveDir, 'tweets.js'), 'window.YTD.tweets.part0');
  const notes = await loadArchivePart(path.join(archiveDir, 'note-tweet.js'), 'window.YTD.note_tweet.part0');
  const communityTweets =
    (await loadOptionalArchivePart(path.join(archiveDir, 'community-tweet.js'), 'window.YTD.community_tweet.part0')) ?? [];
  const items = [];

  for (const entry of tweets) {
    const tweet = entry.tweet;
    const text = tweet.full_text ?? '';
    if (!text.includes(MARKER)) {
      continue;
    }
    const resolvedText = resolveTweetText(tweet);
    items.push({
      kind: 'tweet',
      id: tweet.id_str,
      rawTimestamp: tweet.created_at,
      createdAtIso: new Date(tweet.created_at).toISOString(),
      prompt: normalizeText(extractPromptText(resolvedText)),
      head: normalizeText(extractHeadText(resolvedText)),
      fullText: text,
    });
  }

  for (const entry of notes) {
    const note = entry.noteTweet;
    const text = note.core?.text ?? '';
    if (!text.includes(MARKER)) {
      continue;
    }
    items.push({
      kind: 'note',
      id: note.noteTweetId,
      rawTimestamp: note.createdAt,
      createdAtIso: new Date(note.createdAt).toISOString(),
      prompt: normalizeText(extractPromptText(text)),
      head: normalizeText(extractHeadText(text)),
      fullText: text,
    });
  }

  for (const entry of communityTweets) {
    const tweet = entry.tweet;
    const text = tweet.full_text ?? '';
    if (!text.includes(MARKER)) {
      continue;
    }
    const resolvedText = resolveTweetText(tweet);
    items.push({
      kind: 'tweet',
      id: tweet.id_str,
      rawTimestamp: tweet.created_at,
      createdAtIso: new Date(tweet.created_at).toISOString(),
      prompt: normalizeText(extractPromptText(resolvedText)),
      head: normalizeText(extractHeadText(resolvedText)),
      fullText: text,
    });
  }

  return items.sort((left, right) => right.createdAtIso.localeCompare(left.createdAtIso));
}

async function loadArchivePart(filePath, returnExpression) {
  const source = await readFile(filePath, 'utf8');
  const window = { YTD: { tweets: {}, note_tweet: {} } };
  const loader = new Function('window', `${source}; return ${returnExpression};`);
  return loader(window);
}

async function loadOptionalArchivePart(filePath, returnExpression) {
  const source = await readIfExists(filePath);
  if (source == null) {
    return null;
  }
  const window = { YTD: { community_tweet: {}, tweets: {}, note_tweet: {} } };
  const loader = new Function('window', `${source}; return ${returnExpression};`);
  return loader(window);
}

function buildRecords(timestampGroups) {
  const records = [];

  for (const [createdAtIso, items] of timestampGroups.entries()) {
    const clusters = clusterTimestampGroup(items);
    const jst = formatJstParts(createdAtIso);

    for (const cluster of clusters) {
      const notes = cluster.filter((item) => item.kind === 'note');
      const tweets = cluster.filter((item) => item.kind === 'tweet');
      const notePreferred = [...notes].sort((left, right) => right.prompt.length - left.prompt.length)[0] ?? null;
      const tweetPreferred = [...tweets].sort((left, right) => right.prompt.length - left.prompt.length)[0] ?? null;
      const canonical = notePreferred ?? tweetPreferred ?? cluster[0];
      const longest = [...cluster].sort((left, right) => right.prompt.length - left.prompt.length)[0] ?? canonical;
      const prompt = canonical.prompt || longest.prompt;
      const primaryId = tweetPreferred?.id ?? notePreferred?.id ?? canonical.id;

      records.push({
        primaryId,
        title: deriveTitle(canonical, cluster),
        summary: deriveSummary(canonical, prompt),
        createdAtIso,
        createdAtJst: `${jst.year}-${jst.month}-${jst.day} ${jst.time} JST`,
        year: jst.year,
        month: jst.month,
        archiveBucket: `${jst.year}-${jst.month}`,
        prompt,
        head: canonical.head || tweetPreferred?.head || notePreferred?.head || '',
        tweetIds: tweets.map((item) => item.id),
        noteIds: notes.map((item) => item.id),
        clusterItems: cluster.map((item) => `${item.kind}:${item.id}`),
        clusterSize: cluster.length,
        canonicalBodySource: notePreferred ? 'note' : 'tweet',
        sourceKinds: summarizeSourceKinds(tweets.length, notes.length),
      });
    }
  }

  return records.sort((left, right) => {
    if (left.createdAtIso !== right.createdAtIso) {
      return right.createdAtIso.localeCompare(left.createdAtIso);
    }
    return left.primaryId.localeCompare(right.primaryId);
  });
}

function clusterTimestampGroup(items) {
  const kinds = new Set(items.map((item) => item.kind));
  if (items.length === 2 && kinds.has('tweet') && kinds.has('note')) {
    return [items];
  }

  const clusters = [];

  outer: for (const item of items) {
    const itemHead = firstMeaningfulLine(item.head);
    const itemPrompt = firstMeaningfulLine(item.prompt) || item.prompt.slice(0, 140);

    for (const cluster of clusters) {
      const representative = cluster[0];
      const repHead = firstMeaningfulLine(representative.head);
      const repPrompt = firstMeaningfulLine(representative.prompt) || representative.prompt.slice(0, 140);
      const similarHead =
        itemHead &&
        repHead &&
        (itemHead === repHead || similarity(itemHead, repHead) >= 0.75);
      const similarPrompt =
        itemPrompt &&
        repPrompt &&
        (itemPrompt === repPrompt || similarity(itemPrompt, repPrompt) >= 0.82);
      if (similarHead || similarPrompt) {
        cluster.push(item);
        continue outer;
      }
    }

    clusters.push([item]);
  }

  return clusters;
}

async function collectDocs(rootDir, { excludeRoots = [] } = {}) {
  const files = await collectMarkdownFiles(rootDir);
  const docs = [];

  for (const filePath of files) {
    const normalizedPath = normalizeSlash(filePath);
    if (excludeRoots.some((root) => normalizedPath.startsWith(`${normalizeSlash(root)}/`))) {
      continue;
    }
    const raw = await readFile(filePath, 'utf8');
    docs.push({
      absPath: filePath,
      relativePath: relativePath(filePath, process.cwd()),
      prompt: normalizeText(extractDocPrompt(raw)),
      body: raw,
    });
  }

  return docs;
}

async function collectMarkdownFiles(rootDir) {
  const out = [];
  const stack = [rootDir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) {
        continue;
      }
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
        out.push(fullPath);
      }
    }
  }

  return out;
}

function extractDocPrompt(raw) {
  const body = stripFrontmatter(raw).replace(/\r\n/g, '\n');
  const fenceMatch = body.match(/```(?:[a-zA-Z0-9_-]+)?\n([\s\S]*?)\n```/);
  return fenceMatch ? fenceMatch[1].trim() : body.trim();
}

function matchRecordsToExisting(records, docs) {
  const exactPromptMap = new Map();
  for (const doc of docs) {
    if (doc.prompt) {
      exactPromptMap.set(doc.prompt, doc);
    }
  }

  const matchedRecords = [];
  const unmatchedRecords = [];

  for (const record of records) {
    let matchedDoc = exactPromptMap.get(record.prompt) ?? null;
    let method = matchedDoc ? 'exact' : null;
    let score = matchedDoc ? 1 : null;

    if (!matchedDoc && record.tweetIds.length > 0) {
      matchedDoc = docs.find((doc) => record.tweetIds.some((tweetId) => doc.body.includes(`/status/${tweetId}`))) ?? null;
      if (matchedDoc) {
        method = 'tweet-url';
        score = 1;
      }
    }

    if (!matchedDoc && record.prompt.length >= 80) {
      const candidate = findBestSimilarityMatch(record.prompt, docs);
      if (candidate && candidate.score >= SIMILARITY_THRESHOLD) {
        matchedDoc = candidate.doc;
        method = 'similarity';
        score = candidate.score;
      }
    }

    if (matchedDoc) {
      matchedRecords.push({ record, doc: matchedDoc, method, score });
    } else {
      unmatchedRecords.push(record);
    }
  }

  return { matchedRecords, unmatchedRecords };
}

function findBestSimilarityMatch(prompt, docs) {
  let best = null;
  for (const doc of docs) {
    if (!doc.prompt) {
      continue;
    }
    const score = similarity(prompt.slice(0, 1200), doc.prompt.slice(0, 1200));
    if (!best || score > best.score) {
      best = { doc, score };
    }
  }
  return best;
}

async function buildExistingDocWrites(matchedRecords, cwd) {
  const writes = [];

  for (const match of matchedRecords) {
    const tweetUrls = match.record.tweetIds.map(buildTweetUrl);
    if (tweetUrls.length === 0) {
      continue;
    }

    const jpRaw = await readIfExists(match.doc.absPath);
    if (jpRaw != null) {
      const jpNext = injectTweetSection(jpRaw, tweetUrls, 'JP');
      if (jpNext !== jpRaw) {
        writes.push({
          absPath: match.doc.absPath,
          content: jpNext,
        });
      }
    }

    const jpRelative = path.relative(path.resolve(cwd, JP_DOCS_ROOT), match.doc.absPath);
    const enPath = path.resolve(cwd, EN_DOCS_ROOT, jpRelative);
    const enRaw = await readIfExists(enPath);
    if (enRaw != null) {
      const enNext = injectTweetSection(enRaw, tweetUrls, 'EN');
      if (enNext !== enRaw) {
        writes.push({
          absPath: enPath,
          content: enNext,
        });
      }
    }
  }

  return writes;
}

function buildArchiveWrites(records, cwd) {
  const writes = [];
  for (const record of records) {
    writes.push({
      absPath: path.resolve(cwd, JP_ARCHIVE_X_ROOT, record.year, record.month, `${record.primaryId}.md`),
      content: buildArchivePage(record),
    });
  }
  writes.push(...buildArchiveIndexWrites(records, cwd));
  return writes;
}

function buildArchiveIndexWrites(records, cwd) {
  const writes = [];
  const groupedByYear = groupBy(records, (record) => record.year);

  writes.push({
    absPath: path.resolve(cwd, JP_ARCHIVE_X_ROOT, 'index.md'),
    content: buildArchiveRootIndex(records),
  });

  for (const [year, yearRecords] of sortGroupEntries(groupedByYear)) {
    writes.push({
      absPath: path.resolve(cwd, JP_ARCHIVE_X_ROOT, year, 'index.md'),
      content: buildYearIndex(year, yearRecords),
    });

    const groupedByMonth = groupBy(yearRecords, (record) => record.month);
    for (const [month, monthRecords] of sortGroupEntries(groupedByMonth)) {
      writes.push({
        absPath: path.resolve(cwd, JP_ARCHIVE_X_ROOT, year, month, 'index.md'),
        content: buildMonthIndex(year, month, monthRecords),
      });
    }
  }

  return writes;
}

function buildArchiveRootIndex(records) {
  const groupedByYear = groupBy(records, (record) => record.year);
  const latest = records.slice(0, 20);
  const lines = [
    '---',
    'title: X Prompt Archive',
    'description: X アーカイブから抽出した marker 付き prompt 投稿の保管場所',
    'category: archive',
    'intent: x-marker-archive',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    '# X Prompt Archive',
    '',
    'X アーカイブから `ーーー📒プロンプトーーー` を含む投稿を抽出したアーカイブです。',
    '',
    '## 概要',
    `- 収録件数: ${records.length}件`,
    `- 最終インポート日: ${CURRENT_DATE}`,
    `- note-only: ${records.filter((record) => record.sourceKinds === 'note only').length}件`,
    '',
    '## 最新 20 件',
  ];

  for (const record of latest) {
    lines.push(
      `- [${escapeDisplayText(record.title)}](./${record.year}/${record.month}/${record.primaryId}.md) - ${record.createdAtJst}`,
    );
  }

  lines.push('', '## 年別一覧');
  for (const [year, yearRecords] of sortGroupEntries(groupedByYear)) {
    lines.push(`- [${year}年](./${year}/index.md) - ${yearRecords.length}件`);
  }
  lines.push('');

  return lines.join('\n');
}

function buildYearIndex(year, records) {
  const groupedByMonth = groupBy(records, (record) => record.month);
  const lines = [
    '---',
    `title: X Prompt Archive ${year}`,
    `description: ${year} 年に投稿された X prompt archive エントリ`,
    'category: archive',
    'intent: x-marker-archive',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    `# X Prompt Archive ${year}`,
    '',
    '## 月別一覧',
  ];

  for (const [month, monthRecords] of sortGroupEntries(groupedByMonth)) {
    lines.push(`- [${year}-${month}](./${month}/index.md) - ${monthRecords.length}件`);
  }
  lines.push('');

  return lines.join('\n');
}

function buildMonthIndex(year, month, records) {
  const lines = [
    '---',
    `title: X Prompt Archive ${year}-${month}`,
    `description: ${year}-${month} に投稿された X prompt archive エントリ`,
    'category: archive',
    'intent: x-marker-archive',
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    '---',
    '',
    `# X Prompt Archive ${year}-${month}`,
    '',
    '## エントリ一覧',
  ];

  for (const record of records) {
    lines.push(
      `- [${escapeDisplayText(record.title)}](./${record.primaryId}.md) - ${record.createdAtJst} / ${escapeDisplayText(record.summary)}`,
    );
  }
  lines.push('');

  return lines.join('\n');
}

function buildArchivePage(record) {
  const tweetUrls = record.tweetIds.map(buildTweetUrl);
  const lines = [
    '---',
    `title: ${yamlScalar(record.title)}`,
    `description: ${yamlScalar(`Imported X marker post (${record.createdAtJst})`)}`,
    'category: archive',
    'intent: x-marker-archive',
    'tags:',
    '  - x',
    '  - marker',
    '  - archive',
    `  - ${record.archiveBucket}`,
    'status: archived',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    'source_platform: x',
    `source_author: ${yamlScalar(SCREEN_NAME)}`,
    `source_post_id: ${yamlScalar(record.primaryId)}`,
    `source_published_at: ${yamlScalar(record.createdAtIso)}`,
    `archive_bucket: ${yamlScalar(record.archiveBucket)}`,
    'marker: true',
    ...(tweetUrls[0] ? [`source_url: ${yamlScalar(tweetUrls[0])}`] : []),
    '---',
    '',
    `# ${escapeDisplayText(record.title)}`,
    '',
    '## 抽出サマリー',
    `- 投稿日時: ${record.createdAtJst}`,
    `- レコード種別: ${record.sourceKinds}`,
    `- canonical body: ${record.canonicalBodySource}`,
    `- summary: ${escapeDisplayText(record.summary)}`,
    '',
    '## Source Post',
  ];

  if (tweetUrls.length > 0) {
    lines.push(
      ...tweetUrls.flatMap((url) => ['<ClientOnly>', `  <XPostEmbed url="${url}" />`, '</ClientOnly>', '']).slice(0, -1),
    );
  } else {
    lines.push('- note-only record のため、tweet status embed はありません。');
  }

  if (record.head) {
    lines.push('', '## 投稿メモ', buildTextFence(record.head));
  }

  lines.push(
    '',
    '## プロンプト本文',
    buildTextFence(record.prompt || '[Prompt text was empty after extraction]'),
    '',
    '## 抽出ノート',
    `- tweet ids: ${record.tweetIds.length > 0 ? record.tweetIds.join(', ') : 'none'}`,
    `- note ids: ${record.noteIds.length > 0 ? record.noteIds.join(', ') : 'none'}`,
    `- cluster items: ${record.clusterItems.join(', ')}`,
    `- imported at: ${CURRENT_ISO}`,
    '',
  );

  return lines.join('\n');
}

function buildManifest({ archiveDir, rawItems, rawExactGroupCount, timestampGroups, records, matchResult, existingDocWrites, archiveWrites, cwd }) {
  const collisionGroups = collectCollisionGroups(timestampGroups, records);
  return {
    generated_at: CURRENT_ISO,
    archive_dir: relativePath(archiveDir, cwd),
    raw_item_count: rawItems.length,
    raw_exact_timestamp_groups: rawExactGroupCount,
    normalized_timestamp_groups: timestampGroups.size,
    canonical_record_count: records.length,
    accounted_raw_items: records.reduce((sum, record) => sum + record.clusterItems.length, 0),
    matched_existing_docs: matchResult.matchedRecords.map((match) => ({
      primary_id: match.record.primaryId,
      doc_path: match.doc.relativePath,
      method: match.method,
      score: match.score,
      tweet_ids: match.record.tweetIds,
      note_ids: match.record.noteIds,
    })),
    generated_archive_docs: matchResult.unmatchedRecords.map((record) => ({
      primary_id: record.primaryId,
      doc_path: `docs/prompt-catalog/archive/x/${record.year}/${record.month}/${record.primaryId}.md`,
      created_at_iso: record.createdAtIso,
      archive_bucket: record.archiveBucket,
      source_kinds: record.sourceKinds,
      canonical_body_source: record.canonicalBodySource,
      tweet_ids: record.tweetIds,
      note_ids: record.noteIds,
      cluster_items: record.clusterItems,
    })),
    note_only_records: records
      .filter((record) => record.sourceKinds === 'note only')
      .map((record) => ({
        primary_id: record.primaryId,
        created_at_iso: record.createdAtIso,
        note_ids: record.noteIds,
      })),
    collision_groups: collisionGroups,
    write_targets: writeTargetSummary([...existingDocWrites, ...archiveWrites], cwd),
  };
}

function collectCollisionGroups(timestampGroups, records) {
  const recordMap = groupBy(records, (record) => record.createdAtIso);
  const collisions = [];

  for (const [createdAtIso, items] of timestampGroups.entries()) {
    const groupRecords = recordMap.get(createdAtIso) ?? [];
    if (items.length <= 2 && groupRecords.length <= 1) {
      continue;
    }
    if (items.length === 2 && groupRecords.length === 1) {
      continue;
    }
    collisions.push({
      created_at_iso: createdAtIso,
      raw_item_count: items.length,
      canonical_record_count: groupRecords.length,
      raw_items: items.map((item) => `${item.kind}:${item.id}`),
      records: groupRecords.map((record) => ({
        primary_id: record.primaryId,
        source_kinds: record.sourceKinds,
        cluster_items: record.clusterItems,
      })),
    });
  }

  return collisions.sort((left, right) => right.created_at_iso.localeCompare(left.created_at_iso));
}

function injectTweetSection(raw, tweetUrls, localeKey) {
  const uniqueUrls = tweetUrls.filter((url, index) => tweetUrls.indexOf(url) === index);
  const missingUrls = uniqueUrls.filter((url) => !raw.includes(url));
  if (missingUrls.length === 0) {
    return raw.replace(/\r\n/g, '\n');
  }

  const section = localeKey === 'JP' ? buildJapaneseTweetSection(missingUrls) : buildEnglishTweetSection(missingUrls);
  const content = raw.replace(/\r\n/g, '\n');
  const anchorMatch = content.match(PROMPT_BODY_ANCHOR) ?? content.match(FIRST_SECTION_ANCHOR);

  if (!anchorMatch || anchorMatch.index == null) {
    return `${content.trimEnd()}\n\n${section}\n`;
  }

  return `${content.slice(0, anchorMatch.index).trimEnd()}\n\n${section}\n\n${content.slice(anchorMatch.index).trimStart()}`;
}

function buildJapaneseTweetSection(tweetUrls) {
  return [
    '## 参考ツイート',
    ...tweetUrls.flatMap((url) => ['<ClientOnly>', `  <XPostEmbed url="${url}" />`, '</ClientOnly>', '']).slice(0, -1),
  ].join('\n');
}

function buildEnglishTweetSection(tweetUrls) {
  return [
    '## Related X Posts',
    ...tweetUrls.flatMap((url) => ['<ClientOnly>', `  <XPostEmbed url="${url}" />`, '</ClientOnly>', '']).slice(0, -1),
  ].join('\n');
}

function deriveTitle(canonical, cluster) {
  const candidates = [canonical.head, canonical.prompt, ...cluster.map((item) => item.head), ...cluster.map((item) => item.prompt)];
  for (const candidate of candidates) {
    const title = pickTitleLine(candidate);
    if (title) {
      return truncate(title, 96);
    }
  }
  return `X prompt archive ${canonical.id}`;
}

function deriveSummary(canonical, prompt) {
  const summary = pickTitleLine(canonical.prompt) || pickTitleLine(prompt);
  return summary ? truncate(summary, 80) : 'summary unavailable';
}

function pickTitleLine(text) {
  if (!text) {
    return '';
  }
  for (const rawLine of text.split(/\n+/)) {
    const line = normalizeTitle(rawLine);
    if (!line || line === MARKER || line === 'ーーー' || line === '…') {
      continue;
    }
    if (/^#\s*コンテンツの指示$/i.test(line)) {
      continue;
    }
    if (/^入力画像はこちら/.test(line)) {
      continue;
    }
    return line;
  }
  return '';
}

function normalizeTitle(value) {
  return value
    .replace(/^#+\s*/, '')
    .replace(/^[-*•]+\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractPromptText(text) {
  const markerIndex = text.indexOf(MARKER);
  if (markerIndex < 0) {
    return '';
  }
  return stripTrailingXStatusUrls(text.slice(markerIndex + MARKER.length)).trim();
}

function extractHeadText(text) {
  const markerIndex = text.indexOf(MARKER);
  return markerIndex < 0 ? text.trim() : text.slice(0, markerIndex).trim();
}

function normalizeText(value) {
  return (value ?? '')
    .normalize('NFKC')
    .replace(/\r/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function resolveTweetText(tweet) {
  let text = tweet.full_text ?? '';
  const urlEntities = tweet.entities?.urls ?? [];
  const mediaEntities = tweet.entities?.media ?? [];

  for (const entity of urlEntities) {
    if (!entity?.url || !entity?.expanded_url) {
      continue;
    }
    text = text.split(entity.url).join(entity.expanded_url);
  }

  for (const entity of mediaEntities) {
    if (!entity?.url) {
      continue;
    }
    text = text.split(entity.url).join('');
  }

  return text;
}

function stripTrailingXStatusUrls(value) {
  return (value ?? '').replace(
    /(?:\s+https?:\/\/(?:x|twitter)\.com\/[^\s]+\/status\/\d+(?:\/[^\s]+)*)+\s*$/gi,
    '',
  );
}

function firstMeaningfulLine(text) {
  for (const line of (text ?? '').split(/\n+/)) {
    const normalized = normalizeTitle(line);
    if (normalized && normalized !== '…' && normalized !== 'ーーー') {
      return normalized;
    }
  }
  return '';
}

function summarizeSourceKinds(tweetCount, noteCount) {
  if (tweetCount > 0 && noteCount > 0) {
    return 'tweet + note';
  }
  if (tweetCount > 0) {
    return 'tweet only';
  }
  return 'note only';
}

function buildTweetUrl(tweetId) {
  return `https://x.com/${SCREEN_NAME}/status/${tweetId}`;
}

function similarity(left, right) {
  if (!left || !right) {
    return 0;
  }
  const leftSet = new Set(toBigrams(left));
  const rightSet = new Set(toBigrams(right));
  let intersection = 0;
  for (const token of leftSet) {
    if (rightSet.has(token)) {
      intersection += 1;
    }
  }
  return intersection / (leftSet.size + rightSet.size - intersection || 1);
}

function toBigrams(text) {
  const tokens = [];
  for (let index = 0; index < text.length - 1; index += 1) {
    tokens.push(text.slice(index, index + 2));
  }
  return tokens;
}

function formatJstParts(isoString) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const parts = Object.fromEntries(
    formatter.formatToParts(new Date(isoString)).map((part) => [part.type, part.value]),
  );
  return {
    year: parts.year,
    month: parts.month,
    day: parts.day,
    time: `${parts.hour}:${parts.minute}:${parts.second}`,
  };
}

function sortGroupEntries(groupMap) {
  return [...groupMap.entries()].sort((left, right) => right[0].localeCompare(left[0], 'en'));
}

function writeTargetSummary(items, cwd) {
  return dedupeByPath(items).map((item) => relativePath(item.absPath, cwd));
}

function groupBy(items, getKey) {
  const map = new Map();
  for (const item of items) {
    const key = getKey(item);
    const existing = map.get(key);
    if (existing) {
      existing.push(item);
    } else {
      map.set(key, [item]);
    }
  }
  return map;
}

function dedupeByPath(items) {
  const map = new Map();
  for (const item of items) {
    map.set(normalizeSlash(item.absPath), item);
  }
  return [...map.values()];
}

function yamlScalar(value) {
  return JSON.stringify(value ?? '');
}

function escapeDisplayText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function truncate(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function stripFrontmatter(raw) {
  const match = raw.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? raw.slice(match[0].length) : raw;
}

function buildTextFence(text) {
  const matches = [...String(text).matchAll(/`+/g)];
  const maxBackticks = matches.reduce((max, match) => Math.max(max, match[0].length), 2);
  const fence = '`'.repeat(Math.max(3, maxBackticks + 1));
  return `${fence}text\n${text}\n${fence}`;
}

async function readIfExists(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

function relativePath(target, cwd) {
  return normalizeSlash(path.relative(cwd, target));
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

await main();
