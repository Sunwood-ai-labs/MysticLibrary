#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const LOCALES = {
  ja: {
    sourceSuffixes: new Set(['JP', 'JA']),
    docsPrefix: '',
    rootLink: '/',
    labels: {
      rootTitle: 'Prompts',
      dirIndex: '一覧',
      directories: 'ディレクトリ',
      prompts: 'プロンプト',
      parent: '上へ',
      source: 'ソース',
      counterpart: '英語版',
      localeLink: 'English Top',
      generated: 'このページは prompts ソースツリーから自動生成されています。',
      emptyLocale: '_この言語ではまだコンテンツがありません。_',
      homeHeroText: 'Prompt Library for AI Workflows',
      homeTagline: 'MysticLibrary の prompts/ を VitePress 用に再構成した、日英対応のプロンプトカタログです。',
      homePrimaryAction: 'Coding から見る',
      homeSecondaryAction: 'Documentation を見る',
      homeFeaturesTitle1: 'カテゴリ別に探索',
      homeFeaturesBody1: 'coding / documentation / image などカテゴリ単位で大量の prompt を整理して参照できます。',
      homeFeaturesTitle2: '日英ロケール切替',
      homeFeaturesBody2: '対応ファイルは日本語・英語で切り替え可能。未翻訳分は日本語中心で掲載します。',
      homeFeaturesTitle3: 'prompts ソース直結',
      homeFeaturesBody3: '各ページに元ファイルのパスを表示し、GitHub 上の prompts/ との対応を追いやすくしています。',
      categoryCards: 'カテゴリ一覧',
      quickStart: 'おすすめ導線',
      statSubdirs: 'サブディレクトリ',
      statPages: 'ページ',
      statLocale: '言語',
      localeName: '日本語',
      rootHome: 'ホーム',
      rootHomeLinkText: 'ホームへ戻る',
      topLinkText: 'トップ',
      categoryOverview: 'カテゴリ概要',
      promptsCountLabel: 'プロンプト一覧',
      subdirCountLabel: 'サブディレクトリ一覧',
    },
  },
  en: {
    sourceSuffixes: new Set(['EN']),
    docsPrefix: 'en',
    rootLink: '/en/',
    labels: {
      rootTitle: 'Prompts',
      dirIndex: 'Index',
      directories: 'Directories',
      prompts: 'Prompts',
      parent: 'Up',
      source: 'Source',
      counterpart: 'Japanese',
      localeLink: 'Japanese Top',
      generated: 'This page is generated from the prompts source tree.',
      emptyLocale: '_No content in this locale yet._',
      homeHeroText: 'Prompt Library for AI Workflows',
      homeTagline: 'A bilingual VitePress catalog generated from MysticLibrary `prompts/`, organized by category and subdirectory.',
      homePrimaryAction: 'Start with Coding',
      homeSecondaryAction: 'Browse Documentation',
      homeFeaturesTitle1: 'Category-first browsing',
      homeFeaturesBody1: 'Navigate large prompt collections by category such as coding, documentation, image, and more.',
      homeFeaturesTitle2: 'Bilingual docs layout',
      homeFeaturesBody2: 'Switch between Japanese and English where both variants exist; Japanese pages remain available as the default set.',
      homeFeaturesTitle3: 'Source-linked pages',
      homeFeaturesBody3: 'Each generated page shows the original `prompts/` source path for easier maintenance.',
      categoryCards: 'Categories',
      quickStart: 'Suggested paths',
      statSubdirs: 'Subdirectories',
      statPages: 'Pages',
      statLocale: 'Locale',
      localeName: 'English',
      rootHome: 'Home',
      rootHomeLinkText: 'Back to Home',
      topLinkText: 'Top',
      categoryOverview: 'Category Overview',
      promptsCountLabel: 'Prompt List',
      subdirCountLabel: 'Subdirectories',
    },
  },
};

const CATEGORY_DESCRIPTIONS = {
  ja: {
    agent: 'エージェント構築・運用系のプロンプト',
    audio: '歌詞・音楽生成向けプロンプト',
    coding: 'コーディング支援、レビュー、開発運用',
    documentation: '図解・資料・記録・ドキュメント生成',
    image: '画像生成・スタイル設計',
    presentation: 'プレゼン・自動発表向け',
    methodology: '問題解決・思考法テンプレート',
    'deep-research': '深掘り調査の説明・構成プロンプト',
    diagram: '図・構成図・Eraser/draw.io 向け',
    education: '教育・教材作成支援',
    game: 'ゲーム設計・ゲーム向け生成',
    meta: 'メタプロンプト・プロジェクト運用',
  },
  en: {
    agent: 'Prompts for agent building and operation',
    audio: 'Lyrics and music-generation prompts',
    coding: 'Coding assistance, reviews, and dev workflows',
    documentation: 'Diagramming, docs, and visual note-making prompts',
    image: 'Image generation and style design prompts',
    presentation: 'Presentation and auto-presenter prompts',
    methodology: 'Problem-solving and workflow templates',
    'deep-research': 'Deep-research explainers and composition prompts',
    diagram: 'Diagram generation for Eraser/draw.io and cloud architecture',
    education: 'Educational content and notebook creation prompts',
    game: 'Game design and game-related prompts',
    meta: 'Meta prompts and project setup helpers',
  },
};

class DirNode {
  constructor(name, relDir) {
    this.name = name;
    this.relDir = relDir; // relative from prompts root, '' for root
    this.dirs = new Map(); // name -> DirNode
    this.pages = new Map(); // stem -> PageGroup
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(scriptDir, '..', '..');
  const sourceRoot = path.resolve(opts.src ?? path.join(repoRoot, 'prompts'));
  const docsRoot = path.resolve(opts.out ?? path.join(scriptDir, '..', 'docs'));
  const manifestPath = path.join(docsRoot, '.generated', 'sidebar-manifest.json');

  await assertDirExists(sourceRoot, 'Source prompts directory');
  await fs.mkdir(docsRoot, { recursive: true });
  await cleanDocsOutput(docsRoot);

  const promptFiles = await collectPromptFiles(sourceRoot);
  const pageGroups = buildPageGroups(promptFiles, sourceRoot);
  const root = buildTree(pageGroups);
  assertNoRouteCollisions(root);

  const written = [];
  for (const locale of Object.keys(LOCALES)) {
    await generateLocaleDocs({ locale, root, docsRoot, sourceRoot, written });
  }

  const manifest = buildSidebarManifest({ root, docsRoot, sourceRoot });
  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  written.push(path.relative(docsRoot, manifestPath).replace(/\\/g, '/'));

  const summary = {
    sourceRoot,
    docsRoot,
    pageGroups: pageGroups.length,
    jaPages: countLocalePages(root, 'ja'),
    enPages: countLocalePages(root, 'en'),
    manifest: manifestPath,
    writtenFiles: written.length,
  };

  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
}

function parseArgs(argv) {
  const opts = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--src') {
      opts.src = argv[++i];
      continue;
    }
    if (arg === '--out') {
      opts.out = argv[++i];
      continue;
    }
    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
    throw new Error(`Unknown argument: ${arg}`);
  }
  return opts;
}

function printHelp() {
  process.stdout.write(
    [
      'Usage: node generate-prompts-docs.mjs [--src <promptsDir>] [--out <docsDir>]',
      '',
      'Generates VitePress-compatible markdown pages from a prompts tree:',
      '  - Japanese docs at docs root (/)',
      '  - English docs under /en/',
      '  - directory index pages',
      '  - sidebar manifest JSON at docs/.generated/sidebar-manifest.json',
      '',
    ].join('\n'),
  );
}

async function assertDirExists(dirPath, label) {
  let stats;
  try {
    stats = await fs.stat(dirPath);
  } catch {
    throw new Error(`${label} not found: ${dirPath}`);
  }
  if (!stats.isDirectory()) {
    throw new Error(`${label} is not a directory: ${dirPath}`);
  }
}

async function cleanDocsOutput(docsRoot) {
  const entries = await fs.readdir(docsRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.vitepress') continue;
    await fs.rm(path.join(docsRoot, entry.name), { recursive: true, force: true });
  }
}

async function collectPromptFiles(rootDir) {
  const out = [];
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.sh'))) {
        out.push(fullPath);
      }
    }
  }
  await walk(rootDir);
  return out;
}

function buildPageGroups(files, sourceRoot) {
  const groups = new Map();
  for (const filePath of files) {
    const relPath = path.relative(sourceRoot, filePath).replace(/\\/g, '/');
    const parsed = parsePromptFile(relPath);
    if (!parsed) {
      continue;
    }

    const key = `${parsed.relDir}\u0000${parsed.stem}\u0000${parsed.kind}`;
    let group = groups.get(key);
    if (!group) {
      group = {
        relDir: parsed.relDir,
        stem: parsed.stem,
        kind: parsed.kind,
        variants: {},
      };
      groups.set(key, group);
    }
    group.variants[parsed.locale ?? 'neutral'] = {
      locale: parsed.locale ?? 'neutral',
      relSourcePath: relPath,
      sourceFileName: path.posix.basename(relPath),
      kind: parsed.kind,
    };
  }
  return [...groups.values()].sort(comparePageGroups);
}

function parsePromptFile(relPath) {
  const posix = relPath.replace(/\\/g, '/');
  const dir = path.posix.dirname(posix);
  const file = path.posix.basename(posix);
  const isShell = file.endsWith('.sh');

  if (isShell) {
    return {
      kind: 'script',
      locale: null,
      stem: file.replace(/\.sh$/, ''),
      relDir: dir === '.' ? '' : dir,
    };
  }

  const match = file.match(/^(.*)_([A-Za-z]{2})\.md$/);
  if (!match) {
    if (file.endsWith('.md')) {
      return {
        kind: 'markdown',
        locale: null,
        stem: file.replace(/\.md$/, ''),
        relDir: dir === '.' ? '' : dir,
      };
    }
    return null;
  }
  const stem = match[1];
  const suffix = match[2].toUpperCase();

  let locale = null;
  for (const [localeKey, cfg] of Object.entries(LOCALES)) {
    if (cfg.sourceSuffixes.has(suffix)) {
      locale = localeKey;
      break;
    }
  }
  if (!locale) {
    return null;
  }

  return {
    kind: 'markdown',
    locale,
    stem,
    relDir: dir === '.' ? '' : dir,
  };
}

function comparePageGroups(a, b) {
  const aKey = `${a.relDir}/${a.stem}`;
  const bKey = `${b.relDir}/${b.stem}`;
  return aKey.localeCompare(bKey, 'en', { sensitivity: 'base' });
}

function buildTree(pageGroups) {
  const root = new DirNode('', '');
  for (const group of pageGroups) {
    let node = root;
    if (group.relDir) {
      for (const segment of group.relDir.split('/')) {
        if (!node.dirs.has(segment)) {
          const childRelDir = node.relDir ? `${node.relDir}/${segment}` : segment;
          node.dirs.set(segment, new DirNode(segment, childRelDir));
        }
        node = node.dirs.get(segment);
      }
    }
    node.pages.set(group.stem, group);
  }
  return root;
}

async function generateLocaleDocs({ locale, root, docsRoot, sourceRoot, written }) {
  const visitedDirs = new Set();

  async function walk(node) {
    if (!dirHasLocaleContent(node, locale)) {
      return;
    }
    visitedDirs.add(node.relDir);

    for (const child of sortDirNodes(node.dirs.values())) {
      await walk(child);
    }

    for (const group of sortPageGroups(node.pages.values())) {
      const variant = selectVariantForLocale(group, locale);
      if (!variant) {
        continue;
      }
      const sourcePath = path.join(sourceRoot, variant.relSourcePath);
      const sourceContent = await fs.readFile(sourcePath, 'utf8');
      const sourceInfo = parseSourceContent({
        kind: group.kind,
        content: sourceContent,
        fallbackStem: group.stem,
      });
      const outPath = getPromptOutputPath({ docsRoot, locale, relDir: group.relDir, stem: group.stem });
      const counterpart = getCounterpart(group, locale);
      const docContent = renderPromptPage({
        locale,
        group,
        variant,
        sourceInfo,
        counterpart,
      });
      await writeTextFile(outPath, docContent);
      written.push(path.relative(docsRoot, outPath).replace(/\\/g, '/'));
    }

    const indexPath = getDirIndexOutputPath({ docsRoot, locale, relDir: node.relDir });
    const indexContent = renderDirIndexPage({ locale, node });
    await writeTextFile(indexPath, indexContent);
    written.push(path.relative(docsRoot, indexPath).replace(/\\/g, '/'));
  }

  await walk(root);

  // Ensure locale root exists even when there is no content for that locale.
  if (!visitedDirs.has('')) {
    const rootPath = getDirIndexOutputPath({ docsRoot, locale, relDir: '' });
    const content = renderDirIndexPage({ locale, node: root });
    await writeTextFile(rootPath, content);
    written.push(path.relative(docsRoot, rootPath).replace(/\\/g, '/'));
  }
}

function sortDirNodes(iterable) {
  return [...iterable].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
}

function sortPageGroups(iterable) {
  return [...iterable].sort(comparePageGroups);
}

function dirHasLocaleContent(node, locale) {
  for (const group of node.pages.values()) {
    if (selectVariantForLocale(group, locale)) {
      return true;
    }
  }
  for (const child of node.dirs.values()) {
    if (dirHasLocaleContent(child, locale)) {
      return true;
    }
  }
  return false;
}

function countLocalePages(root, locale) {
  let count = 0;
  function walk(node) {
    for (const group of node.pages.values()) {
      if (selectVariantForLocale(group, locale)) {
        count += 1;
      }
    }
    for (const child of node.dirs.values()) {
      walk(child);
    }
  }
  walk(root);
  return count;
}

function countPagesInNode(node, locale) {
  let count = 0;
  for (const group of node.pages.values()) {
    if (selectVariantForLocale(group, locale)) count += 1;
  }
  for (const child of node.dirs.values()) {
    count += countPagesInNode(child, locale);
  }
  return count;
}

function countSubdirsWithContent(node, locale) {
  let count = 0;
  for (const child of node.dirs.values()) {
    if (dirHasLocaleContent(child, locale)) count += 1;
  }
  return count;
}

function getCategoryDescription(categoryKey, locale) {
  return CATEGORY_DESCRIPTIONS[locale]?.[categoryKey] ?? humanizeStem(categoryKey);
}

function parseSourceContent({ kind, content, fallbackStem }) {
  if (kind === 'script') {
    const normalized = content.replace(/\r\n/g, '\n').trimEnd();
    const title = extractShellTitle(normalized) ?? humanizeStem(fallbackStem);
    return {
      body: ['```bash', normalized, '```'].join('\n'),
      title,
      frontmatter: null,
    };
  }

  return parseMarkdownSource(content, fallbackStem);
}

function parseMarkdownSource(content, fallbackStem) {
  const normalized = content.replace(/\r\n/g, '\n');
  const { body, frontmatter } = stripLeadingFrontmatter(normalized);
  const title = extractFirstHeading(body) ?? extractFirstTextLine(body) ?? humanizeStem(fallbackStem);
  return {
    body: sanitizeMarkdownForVitePress(body.trimEnd()),
    title,
    frontmatter,
  };
}

function stripLeadingFrontmatter(content) {
  if (!content.startsWith('---\n')) {
    return { frontmatter: null, body: content };
  }
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) {
    return { frontmatter: null, body: content };
  }
  return {
    frontmatter: content.slice(4, end),
    body: content.slice(end + 5),
  };
}

function extractFirstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+?)\s*#*\s*$/m);
  return match ? match[1].trim() : null;
}

function extractFirstTextLine(markdown) {
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^[-*_`#>|]/.test(trimmed)) continue;
    return trimmed.slice(0, 120);
  }
  return null;
}

function extractShellTitle(source) {
  const lines = source.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const m = trimmed.match(/^#\s+(.+)$/);
    if (m) return m[1].trim();
    break;
  }
  return null;
}

function sanitizeMarkdownForVitePress(markdown) {
  const lines = markdown.split('\n');
  let inFence = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    let next = line
      .replace(/{{/g, '&#123;&#123;')
      .replace(/}}/g, '&#125;&#125;');

    const hasDangerousHtml =
      /<\s*\/?\s*[A-Za-z!]/.test(next) ||
      /<\s*script\b/i.test(next) ||
      /<\s*\/\s*script\s*>/i.test(next) ||
      /<\s*transition\b/i.test(next) ||
      /<[^>]+\s(?:v-[\w-]+|@[\w-]+)=/i.test(next);

    if (hasDangerousHtml) {
      next = next.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    lines[i] = next;
  }

  return lines.join('\n');
}

function humanizeStem(stem) {
  return stem
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function renderPromptPage({ locale, group, variant, sourceInfo, counterpart }) {
  const labels = LOCALES[locale].labels;
  const frontmatterLines = [
    '---',
    `title: ${yamlString(sourceInfo.title)}`,
    `sourcePath: ${yamlString(`prompts/${variant.relSourcePath}`)}`,
    `locale: ${yamlString(locale)}`,
    `contentKind: ${yamlString(group.kind)}`,
    '---',
    '',
  ];

  const metaLines = [
    `> ${labels.generated}`,
    `> ${labels.source}: \`prompts/${variant.relSourcePath}\``,
  ];

  if (counterpart) {
    metaLines.push(`> ${labels.counterpart}: [${counterpart.title}](${counterpart.url})`);
  }

  const body = sourceInfo.body.length > 0 ? sourceInfo.body : `# ${sourceInfo.title}\n`;
  return `${frontmatterLines.join('\n')}${metaLines.join('\n')}\n\n${body}\n`;
}

function getCounterpart(group, locale) {
  if (group.kind !== 'markdown') {
    return null;
  }
  const otherLocale = locale === 'ja' ? 'en' : 'ja';
  const other = group.variants[otherLocale];
  if (!other) {
    return null;
  }
  return {
    locale: otherLocale,
    title: otherLocale === 'en' ? 'EN' : 'JA',
    url: toDocUrl({ locale: otherLocale, relDir: group.relDir, stem: group.stem }),
  };
}

function renderDirIndexPage({ locale, node }) {
  if (!node.relDir) {
    return renderHomeIndexPage({ locale, node });
  }

  return renderDirectoryIndexPage({ locale, node });
}

function renderHomeIndexPage({ locale, node }) {
  const labels = LOCALES[locale].labels;
  const topCategories = sortDirNodes(node.dirs.values()).filter((child) => dirHasLocaleContent(child, locale));
  const totalPages = countPagesInNode(node, locale);
  const totalCategories = topCategories.length;

  const primaryCategory = topCategories.find((d) => d.name === 'coding') ?? topCategories[0];
  const secondaryCategory =
    topCategories.find((d) => d.name === 'documentation') ??
    topCategories.find((d) => d.name !== primaryCategory?.name) ??
    topCategories[0];

  const hero = [
    '---',
    'layout: home',
    `title: ${yamlString('Mystic Library Prompts')}`,
    '',
    'hero:',
    `  name: ${yamlString('Mystic Library Prompts')}`,
    `  text: ${yamlString(labels.homeHeroText)}`,
    `  tagline: ${yamlString(labels.homeTagline)}`,
    '  actions:',
  ];

  if (primaryCategory) {
    hero.push('    - theme: brand');
    hero.push(`      text: ${yamlString(labels.homePrimaryAction)}`);
    hero.push(`      link: ${toDocUrl({ locale, relDir: primaryCategory.relDir, isDirIndex: true })}`);
  }
  if (secondaryCategory) {
    hero.push('    - theme: alt');
    hero.push(`      text: ${yamlString(labels.homeSecondaryAction)}`);
    hero.push(`      link: ${toDocUrl({ locale, relDir: secondaryCategory.relDir, isDirIndex: true })}`);
  }

  hero.push('');
  hero.push('features:');
  hero.push(`  - title: ${yamlString(labels.homeFeaturesTitle1)}`);
  hero.push(`    details: ${yamlString(labels.homeFeaturesBody1)}`);
  hero.push(`  - title: ${yamlString(labels.homeFeaturesTitle2)}`);
  hero.push(`    details: ${yamlString(labels.homeFeaturesBody2)}`);
  hero.push(`  - title: ${yamlString(labels.homeFeaturesTitle3)}`);
  hero.push(`    details: ${yamlString(labels.homeFeaturesBody3)}`);
  hero.push('---');
  hero.push('');

  const lines = [...hero];

  lines.push(`## ${labels.categoryCards}`);
  lines.push('');
  lines.push('<div class="ml-chip-row">');
  lines.push(`  <span class="ml-chip">${escapeHtml(`${labels.statPages}: ${totalPages}`)}</span>`);
  lines.push(`  <span class="ml-chip">${escapeHtml(`${labels.categoryCards}: ${totalCategories}`)}</span>`);
  lines.push(`  <span class="ml-chip ml-chip--ok">${escapeHtml(`${labels.statLocale}: ${labels.localeName}`)}</span>`);
  lines.push('</div>');
  lines.push('');

  lines.push('<div class="ml-card-grid">');
  for (const child of topCategories) {
    const pages = countPagesInNode(child, locale);
    const subdirs = countSubdirsWithContent(child, locale);
    const link = toDocUrl({ locale, relDir: child.relDir, isDirIndex: true });
    const title = child.name;
    const desc = getCategoryDescription(child.name, locale);
    lines.push('  <div class="ml-card">');
    lines.push(`    <h3><a href="${link}">${escapeHtml(title)}</a></h3>`);
    lines.push(`    <p>${escapeHtml(desc)}</p>`);
    lines.push(
      `    <p class="ml-card-meta">${escapeHtml(`${labels.statPages}: ${pages} / ${labels.statSubdirs}: ${subdirs}`)}</p>`,
    );
    lines.push('  </div>');
  }
  lines.push('</div>');
  lines.push('');

  lines.push(`## ${labels.quickStart}`);
  lines.push('');
  lines.push('<ol class="ml-steps">');
  for (const child of topCategories.slice(0, 4)) {
    const link = toDocUrl({ locale, relDir: child.relDir, isDirIndex: true });
    lines.push(
      `  <li><a href="${link}">${escapeHtml(child.name)}</a> - ${escapeHtml(getCategoryDescription(child.name, locale))}</li>`,
    );
  }
  lines.push('</ol>');
  lines.push('');

  return `${lines.join('\n')}\n`;
}

function renderDirectoryIndexPage({ locale, node }) {
  const labels = LOCALES[locale].labels;
  const title = node.relDir ? node.name : labels.rootTitle;
  const subdirs = sortDirNodes(node.dirs.values()).filter((child) => dirHasLocaleContent(child, locale));
  const localizedPages = sortPageGroups(node.pages.values()).filter((group) => Boolean(selectVariantForLocale(group, locale)));
  const depth = node.relDir.split('/').filter(Boolean).length;
  const breadcrumbs = buildBreadcrumbs({ locale, node });
  const totalPages = countPagesInNode(node, locale);

  const lines = [
    '---',
    `title: ${yamlString(title)}`,
    '---',
    '',
    `<div class="ml-breadcrumb">${breadcrumbs
      .map((b, i) =>
        `${i > 0 ? '<span class="ml-breadcrumb-sep">/</span> ' : ''}<a href="${b.link}">${escapeHtml(b.text)}</a>`,
      )
      .join(' ')}</div>`,
    '',
    `# ${escapeMarkdownHeading(title)}`,
    '',
  ];

  const parentLink = depth > 0 ? '../' : null;
  const otherLocale = locale === 'ja' ? 'en' : 'ja';
  const localeSwitch = toDocUrl({ locale: otherLocale, relDir: node.relDir, isDirIndex: true });

  lines.push('<div class="ml-chip-row">');
  if (parentLink) {
    lines.push(`  <a class="ml-chip ml-chip--link" href="${parentLink}">${escapeHtml(labels.parent)}</a>`);
  }
  lines.push(`  <a class="ml-chip ml-chip--link" href="${localeSwitch}">${escapeHtml(labels.localeLink)}</a>`);
  lines.push(`  <span class="ml-chip">${escapeHtml(`${labels.statSubdirs}: ${subdirs.length}`)}</span>`);
  lines.push(`  <span class="ml-chip">${escapeHtml(`${labels.statPages}: ${totalPages}`)}</span>`);
  lines.push(`  <span class="ml-chip ml-chip--muted">${escapeHtml(`${labels.statLocale}: ${labels.localeName}`)}</span>`);
  lines.push('</div>');
  lines.push('');

  if (depth === 1) {
    lines.push(`## ${labels.categoryOverview}`);
    lines.push('');
    lines.push(`${getCategoryDescription(node.name, locale)}`);
    lines.push('');
  }

  if (subdirs.length > 0) {
    lines.push(`## ${labels.subdirCountLabel}`);
    lines.push('');
    lines.push('<div class="ml-card-grid ml-card-grid--compact">');
    for (const child of subdirs) {
      const pages = countPagesInNode(child, locale);
      lines.push('  <div class="ml-card">');
      lines.push(`    <h3><a href="./${encodePathSegment(child.name)}/">${escapeHtml(child.name)}</a></h3>`);
      lines.push(`    <p>${escapeHtml(getCategoryDescription(child.name, locale))}</p>`);
      lines.push(`    <p class="ml-card-meta">${escapeHtml(`${labels.statPages}: ${pages}`)}</p>`);
      lines.push('  </div>');
    }
    lines.push('</div>');
    lines.push('');
  }

  if (localizedPages.length > 0) {
    lines.push(`## ${labels.promptsCountLabel} (${localizedPages.length})`);
    lines.push('');
    if (localizedPages.length > 10) {
      lines.push(`<p class="ml-muted">${escapeHtml(labels.topLinkText)}: ${escapeHtml(title)}</p>`);
      lines.push('');
    }
    for (const group of localizedPages) {
      const label = humanizeStem(group.stem);
      lines.push(`- [${label}](./${encodePathSegment(group.stem)})`);
    }
    lines.push('');
  }

  if (subdirs.length === 0 && localizedPages.length === 0) {
    lines.push(labels.emptyLocale);
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function buildBreadcrumbs({ locale, node }) {
  const labels = LOCALES[locale].labels;
  const crumbs = [{ text: labels.rootHome, link: toDocUrl({ locale, relDir: '', isDirIndex: true }) }];
  if (!node.relDir) return crumbs;

  const segments = node.relDir.split('/').filter(Boolean);
  for (let i = 0; i < segments.length; i += 1) {
    const relDir = segments.slice(0, i + 1).join('/');
    crumbs.push({ text: segments[i], link: toDocUrl({ locale, relDir, isDirIndex: true }) });
  }
  return crumbs;
}

function buildSidebarManifest({ root, docsRoot, sourceRoot }) {
  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    sourceRoot: sourceRoot.replace(/\\/g, '/'),
    docsRoot: docsRoot.replace(/\\/g, '/'),
    locales: {
      ja: {
        base: '/',
        sidebar: buildSidebarForLocale(root, 'ja'),
      },
      en: {
        base: '/en/',
        sidebar: buildSidebarForLocale(root, 'en'),
      },
    },
  };
}

function buildSidebarForLocale(root, locale) {
  const topLevelGroups = [];

  const rootPages = sortPageGroups(root.pages.values())
    .filter((group) => Boolean(selectVariantForLocale(group, locale)))
    .map((group) => ({
      text: humanizeStem(group.stem),
      link: toDocUrl({ locale, relDir: group.relDir, stem: group.stem }),
    }));

  if (rootPages.length > 0) {
    topLevelGroups.push({
      text: LOCALES[locale].labels.rootTitle,
      collapsed: false,
      items: [
        { text: LOCALES[locale].labels.dirIndex, link: toDocUrl({ locale, relDir: '', isDirIndex: true }) },
        ...rootPages,
      ],
    });
  }

  for (const child of sortDirNodes(root.dirs.values())) {
    if (!dirHasLocaleContent(child, locale)) {
      continue;
    }
    topLevelGroups.push(buildSidebarDirGroup(child, locale));
  }

  if (topLevelGroups.length === 0) {
    topLevelGroups.push({
      text: LOCALES[locale].labels.rootTitle,
      collapsed: false,
      items: [{ text: LOCALES[locale].labels.dirIndex, link: toDocUrl({ locale, relDir: '', isDirIndex: true }) }],
    });
  }

  return topLevelGroups;
}

function buildSidebarDirGroup(node, locale) {
  const pageItems = sortPageGroups(node.pages.values())
    .filter((group) => Boolean(selectVariantForLocale(group, locale)))
    .map((group) => ({
      text: humanizeStem(group.stem),
      link: toDocUrl({ locale, relDir: node.relDir, stem: group.stem }),
    }));

  const childGroups = sortDirNodes(node.dirs.values())
    .filter((child) => dirHasLocaleContent(child, locale))
    .map((child) => buildSidebarDirGroup(child, locale));

  return {
    text: node.name,
    collapsed: true,
    items: [
      { text: LOCALES[locale].labels.dirIndex, link: toDocUrl({ locale, relDir: node.relDir, isDirIndex: true }) },
      ...pageItems,
      ...childGroups,
    ],
  };
}

function getPromptOutputPath({ docsRoot, locale, relDir, stem }) {
  const localePrefix = LOCALES[locale].docsPrefix;
  const dirParts = [docsRoot];
  if (localePrefix) {
    dirParts.push(localePrefix);
  }
  if (relDir) {
    dirParts.push(...relDir.split('/'));
  }
  return path.join(...dirParts, `${stem}.md`);
}

function selectVariantForLocale(group, locale) {
  if (group.kind === 'script') {
    return group.variants.neutral ?? null;
  }
  return group.variants[locale] ?? (locale === 'ja' ? group.variants.neutral ?? null : null);
}

function assertNoRouteCollisions(root) {
  for (const locale of ['ja', 'en']) {
    const seen = new Map();
    walkTree(root, (group) => {
      const variant = selectVariantForLocale(group, locale);
      if (!variant) return;
      const url = toDocUrl({ locale, relDir: group.relDir, stem: group.stem });
      const prev = seen.get(url);
      if (prev) {
        throw new Error(
          `Route collision for locale=${locale} url=${url}\n- ${prev}\n- ${group.kind}:${group.relDir}/${group.stem}`,
        );
      }
      seen.set(url, `${group.kind}:${group.relDir}/${group.stem}`);
    });
  }
}

function walkTree(node, visitPage) {
  for (const group of node.pages.values()) {
    visitPage(group);
  }
  for (const child of node.dirs.values()) {
    walkTree(child, visitPage);
  }
}

function getDirIndexOutputPath({ docsRoot, locale, relDir }) {
  const localePrefix = LOCALES[locale].docsPrefix;
  const dirParts = [docsRoot];
  if (localePrefix) {
    dirParts.push(localePrefix);
  }
  if (relDir) {
    dirParts.push(...relDir.split('/'));
  }
  return path.join(...dirParts, 'index.md');
}

function toDocUrl({ locale, relDir, stem, isDirIndex = false }) {
  const prefix = LOCALES[locale].rootLink.replace(/\/$/, '');
  const rel = relDir ? `/${splitAndEncode(relDir).join('/')}` : '';
  if (isDirIndex) {
    const withSlash = `${prefix}${rel}/`;
    return withSlash || '/';
  }
  return `${prefix}${rel}/${encodePathSegment(stem)}`;
}

function splitAndEncode(relDir) {
  return relDir.split('/').filter(Boolean).map(encodePathSegment);
}

function encodePathSegment(segment) {
  return encodeURIComponent(segment).replace(/%2F/g, '/');
}

async function writeTextFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

main().catch((error) => {
  process.stderr.write(`${error?.stack ?? error}\n`);
  process.exit(1);
});
