#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_OPTIONS = {
  docsRoots: ['docs/prompt-catalog', 'docs/en/prompt-catalog'],
  promptsRoot: 'prompts',
  mode: 'check',
  localeSuffixMap: {
    '': 'JP',
    'en': 'EN',
  },
};

const SOURCE_KEYS = ['prompt_source', 'legacy_source', 'promptSource', 'source', 'source_path', 'sourcePath'];

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const options = {
    ...DEFAULT_OPTIONS,
    ...args,
  };

  const cwd = process.cwd();
  const resolvedPromptsRoot = path.resolve(cwd, options.promptsRoot);
  const docRoots = options.docsRoots.map((entry) => path.resolve(cwd, entry));
  const docs = await collectDocPages(docRoots);
  const promptFiles = await collectPromptFiles(resolvedPromptsRoot);
  const byPromptLocale = groupPromptFilesByNormalizedStem(promptFiles);
  const report = compareCanonicalState({
    docs,
    promptFiles: byPromptLocale,
    promptsRoot: resolvedPromptsRoot,
  });

  if (!options.json) {
    printSummary(report);
  }

  if (options.mode === 'sync' && options.write) {
    const applied = await syncCanonicalFields({
      docs,
      suggestions: report.actions.autoAttach,
      cwd,
    });
    console.log(`\nApplied canonical-field updates: ${applied}`);
  }

  if (options.mode === 'sync' && options.write && report.unresolved.length > 0) {
    console.log(
      `\nAuto-sync did not update ${report.unresolved.length} docs because they have no confident source match.`,
    );
  }

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  }

  const hasErrors = report.errors.length > 0;
  const strict = options.mode === 'check' || options.mode === 'sync';
  process.exitCode = strict && hasErrors ? 1 : 0;
}

function printSummary(report) {
  console.log(`\nCanonical Prompt Catalog Report`);
  console.log(`Docs pages: ${report.totalDocs}`);
  console.log(`Prompt files: ${report.totalPrompts}`);
  console.log(`Docs with canonical source: ${report.withCanonical}`);
  console.log(`Matched: ${report.matched}`);
  console.log(`Unmatched docs: ${report.unmatched.length}`);
  console.log(`Orphaned docs-first prompt mirrors: ${report.orphanedPrompts.length}`);
  console.log(`Legacy-only prompts: ${report.orphanedLegacyPrompts.length}`);

  if (report.errors.length > 0) {
    console.log(`\nErrors:`);
    for (const item of report.errors) {
      console.log(`- ${item.type}: ${item.detail}`);
    }
  }

  if (report.warnings.length > 0) {
    console.log(`\nWarnings:`);
    for (const item of report.warnings) {
      console.log(`- ${item.type}: ${item.detail}`);
    }
  }

  if (report.actions.autoAttach.length > 0) {
    console.log(`\nSuggested sync actions (confidence-ready): ${report.actions.autoAttach.length}`);
    for (const item of report.actions.autoAttach.slice(0, 20)) {
      const source = item.suggestedSource.replace(/\\/g, '/');
      console.log(`- ${item.relativeDoc}: ${source}`);
    }
    if (report.actions.autoAttach.length > 20) {
      console.log(`... and ${report.actions.autoAttach.length - 20} more`);
    }
  }

  if (report.unresolved.length > 0) {
    console.log(`\nUnresolved (no confident source match): ${report.unresolved.length}`);
    for (const item of report.unresolved.slice(0, 20)) {
      console.log(`- ${item.relativePath ?? item.relativeDoc}`);
    }
    if (report.unresolved.length > 20) {
      console.log(`... and ${report.unresolved.length - 20} more`);
    }
  }
}

async function syncCanonicalFields({ docs, suggestions, cwd }) {
  const updates = new Map();

  for (const entry of suggestions) {
    updates.set(entry.docPath, {
      source: entry.suggestedSource,
      replaceKey: entry.existingKey,
      confidence: entry.confidence,
    });
  }

  let count = 0;
  for (const [docPath, change] of updates.entries()) {
    if (change.confidence < 1) {
      continue;
    }
    const absDocPath = path.resolve(cwd, docPath);
    const raw = await readFile(absDocPath, 'utf8');
    const normalizedSource = change.source.replace(/\\/g, '/');
    const updated = applySourcePatch({
      content: raw,
      source: normalizedSource,
      replaceKey: change.replaceKey,
    });
    if (updated !== raw) {
      await mkdir(path.dirname(absDocPath), { recursive: true });
      await writeFile(absDocPath, updated, 'utf8');
      count += 1;
    }
  }
  return count;
}

function applySourcePatch({ content, source, replaceKey }) {
  const sourceLine = `prompt_source: ${source}`;
  const fmMatch = content.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!fmMatch) {
    return content;
  }

  const fmStart = fmMatch[0].length;
  const fmBody = fmMatch[1];
  const lines = fmBody.split(/\r?\n/);
  const keyRegex = new RegExp(`^\\s*(?:${SOURCE_KEYS.join('|')})\\s*:`);
  const existing = lines.findIndex((line) => keyRegex.test(line.trimStart()));

  if (existing >= 0) {
    lines[existing] = sourceLine;
  } else {
    lines.push(sourceLine);
  }
  const updatedFm = lines.join('\n');
  return `---\n${updatedFm}\n---\n${content.slice(fmStart)}`;
}

function compareCanonicalState({ docs, promptFiles, promptsRoot }) {
  const errors = [];
  const warnings = [];
  let withCanonical = 0;
  let matched = 0;
  const unmatched = [];
  const unresolved = [];
  const autoAttach = [];
  const promptUsage = new Map();

  for (const doc of docs) {
    const explicit = pickCanonicalSource(doc);
    const absoluteSource = explicit.source
      ? normalizeSourcePath(explicit.source, promptsRoot)
      : null;

    if (explicit.source) {
      withCanonical += 1;
      if (!promptFiles.byPath.has(absoluteSource)) {
        errors.push({
          type: 'MISSING_SOURCE_FILE',
          detail: `${doc.relativePath} -> ${explicit.source}`,
        });
        unmatched.push(doc);
        continue;
      }
      const key = absoluteSource.toLowerCase();
      promptUsage.set(key, (promptUsage.get(key) ?? 0) + 1);
      if ((promptUsage.get(key) ?? 0) > 1) {
        warnings.push({
          type: 'DUPLICATE_PROMPT_SOURCE',
          detail: `${doc.relativePath} and another page reference same source: ${explicit.source}`,
        });
      }
      matched += 1;
      continue;
    }

    const candidate = chooseSourceFromCandidates({
      doc,
      promptFiles,
    });
    if (candidate && candidate.confidence >= 0.95) {
      autoAttach.push({
        docPath: doc.path,
        relativeDoc: doc.relativePath,
        suggestedSource: candidate.source,
        confidence: candidate.confidence,
        existingKey: candidate.existingKey,
      });
    } else {
      unresolved.push(doc);
      warnings.push({
        type: 'NO_CANONICAL_SOURCE',
        detail: `${doc.relativePath} has no direct canonical field`,
      });
      unmatched.push(doc);
    }
  }

  const orphanedPrompts = [];
  const orphanedLegacyPrompts = [];
  for (const [absPath, promptFile] of promptFiles.byPath.entries()) {
    const count = promptUsage.get(absPath.toLowerCase()) ?? 0;
    if (count === 0) {
      const relPath = relativeFromRoot(absPath, process.cwd());
      if (promptFile.isDocsFirstMirror) {
        orphanedPrompts.push(relPath);
      } else {
        orphanedLegacyPrompts.push(relPath);
      }
    }
  }

  return {
    totalDocs: docs.length,
    totalPrompts: promptFiles.all.length,
    withCanonical,
    matched,
    unmatched,
    unmatchedCount: unmatched.length,
    orphanedPrompts,
    orphanedLegacyPrompts,
    unresolved,
    autoAttach,
    errors,
    warnings,
    actions: {
      autoAttach,
    },
  };
}

function chooseSourceFromCandidates({ doc, promptFiles }) {
  const keys = collectDocCandidateKeys(doc);
  const localeSuffix = doc.localeSuffix;
  let best = null;

  for (const candidate of keys) {
    const exact = promptFiles.byNormalized.get(candidate.normalize);
    if (exact && exact.length > 0) {
      const picked = pickPromptByLocale(exact, localeSuffix);
      if (picked && !best) {
        best = {
          source: relativeFromRoot(picked.absPath, process.cwd()),
          confidence: 1,
          existingKey: null,
        };
        break;
      }
    }

    const normalizedWithoutVersion = toCanonical(candidate.baseWithoutVersion);
    const alt = promptFiles.byNormalized.get(normalizedWithoutVersion);
    if (alt && alt.length > 0) {
      const picked = pickPromptByLocale(alt, localeSuffix);
      if (picked) {
        best = {
          source: relativeFromRoot(picked.absPath, process.cwd()),
          confidence: 0.96,
          existingKey: null,
        };
        continue;
      }
    }
  }

  if (best) {
    return best;
  }

  const allAliasMatches = [];
  for (const candidate of keys) {
    for (const [norm, candidates] of promptFiles.byNormalized.entries()) {
      if (norm.includes(candidate.normalize) || candidate.normalize.includes(norm)) {
        const picked = pickPromptByLocale(candidates, localeSuffix);
        if (picked) {
          allAliasMatches.push({
            source: relativeFromRoot(picked.absPath, process.cwd()),
            confidence: 0.75,
            existingKey: null,
          });
        }
      }
    }
  }

  if (allAliasMatches.length === 1) {
    return allAliasMatches[0];
  }
  if (allAliasMatches.length > 1) {
    return null;
  }

  return null;
}

function pickPromptByLocale(candidates, localeSuffix) {
  const matchingLocale = candidates.filter((entry) => entry.localeSuffix === localeSuffix);
  if (matchingLocale.length === 1) {
    return matchingLocale[0];
  }
  if (matchingLocale.length >= 1) {
    return matchingLocale.sort((a, b) => a.relPath.length - b.relPath.length)[0];
  }
  return candidates[0];
}

function collectDocCandidateKeys(doc) {
  const candidates = [];
  const stem = path.basename(doc.path, path.extname(doc.path));
  const fromFrontmatter = [
    doc.frontmatter.intent,
    doc.frontmatter.canonical_id,
    doc.frontmatter.canonicalId,
    doc.frontmatter.title,
  ].filter(Boolean);

  const base = toCanonical(stem);
  const baseWithoutVersion = stripVersionSuffix(base);
  candidates.push({
    normalize: base,
    baseWithoutVersion,
  });

  for (const value of fromFrontmatter) {
    const canonical = toCanonical(String(value));
    if (canonical) {
      candidates.push({
        normalize: canonical,
        baseWithoutVersion: stripVersionSuffix(canonical),
      });
    }
  }

  return dedupByMap(candidates, (entry) => entry.normalize);
}

function pickCanonicalSource(doc) {
  for (const key of SOURCE_KEYS) {
    const value = doc.frontmatter[key];
    if (typeof value === 'string' && value.trim()) {
      return { key, source: normalizeSlash(value.trim()) };
    }
  }
  return { key: null, source: null };
}

function buildPromptFilesIndex(files) {
  const byPath = new Map();
  const byNormalized = new Map();
  const all = [];

  for (const file of files) {
    byPath.set(file.absPath.toLowerCase(), file);
    const base = toCanonical(file.stem);
    if (!byNormalized.has(base)) {
      byNormalized.set(base, []);
    }
    byNormalized.get(base).push(file);

    const baseNoVersion = stripVersionSuffix(base);
    if (!byNormalized.has(baseNoVersion)) {
      byNormalized.set(baseNoVersion, []);
    }
    byNormalized.get(baseNoVersion).push(file);
  }

  return { all, byPath, byNormalized };
}

function groupPromptFilesByNormalizedStem(files) {
  const byPath = new Map();
  const byNormalized = new Map();
  for (const file of files) {
    byPath.set(file.absPath.toLowerCase(), file);
    const base = toCanonical(file.stem);
    const noVersion = stripVersionSuffix(base);
    addToMap(byNormalized, base, file);
    addToMap(byNormalized, noVersion, file);
  }

  return {
    all: files,
    byPath,
    byNormalized,
  };
}

function addToMap(map, key, value) {
  const existing = map.get(key);
  if (existing) {
    existing.push(value);
  } else {
    map.set(key, [value]);
  }
}

function dedupByMap(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

async function collectDocPages(roots) {
  const result = [];
  for (const root of roots) {
    const files = await collectMarkdownFiles(root);
    for (const absPath of files) {
      if (path.basename(absPath) === 'index.md') {
        continue;
      }
      const raw = await readFile(absPath, 'utf8');
      const frontmatter = parseFrontmatter(raw);
      const relPath = relativeFromRoot(absPath, process.cwd());
      const locale = path
        .relative(process.cwd(), absPath)
        .split(path.sep)
        .some((segment) => segment === 'en')
        ? 'EN'
        : 'JP';
      result.push({
        path: absPath,
        relativePath: relPath,
        frontmatter,
        localeSuffix: locale,
      });
    }
  }
  return result;
}

async function collectMarkdownFiles(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readDirEntries(current);
    for (const entry of entries) {
      if (entry.name.startsWith('.')) {
        continue;
      }
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        out.push(fullPath);
      }
    }
  }
  return out;
}

async function readDirEntries(dir) {
  const { readdir } = await import('node:fs/promises');
  return readdir(dir, { withFileTypes: true });
}

async function collectPromptFiles(root) {
  const out = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readDirEntries(current);
    for (const entry of entries) {
      if (entry.name.startsWith('.')) {
        continue;
      }
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (!entry.isFile()) {
        continue;
      }
      if (!fullPath.endsWith('.md') && !fullPath.endsWith('.sh')) {
        continue;
      }
      const stem = path.basename(fullPath).replace(/\.(md|sh)$/i, '');
      const localeSuffix = suffixLocaleFromPromptFile(path.basename(fullPath));
      out.push({
        absPath: fullPath,
        relPath: relativeFromRoot(fullPath, root),
        stem,
        localeSuffix,
        isDocsFirstMirror: relativeFromRoot(fullPath, root).startsWith('docs-first/'),
      });
    }
  }

  return out;
}

function suffixLocaleFromPromptFile(name) {
  if (/_EN(\.(md|sh))$/i.test(name)) return 'EN';
  if (/_JP(\.(md|sh))$/i.test(name)) return 'JP';
  return null;
}

function parseFrontmatter(rawText) {
  const match = rawText.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return {};
  }

  const lines = match[1].split(/\r?\n/);
  const result = {};
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*:\s*(.+)\s*$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function normalizeSourcePath(value) {
  if (!value) return '';
  const normalized = normalizeSlash(value.trim()).replace(/^\//, '');
  if (path.isAbsolute(normalized)) {
    return normalized.toLowerCase();
  }
  return path.resolve(process.cwd(), normalized).toLowerCase();
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

function toCanonical(value) {
  return String(value)
    .toLowerCase()
    .replace(/[_-]/g, '')
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '');
}

function stripVersionSuffix(value) {
  return value.replace(/(?:[_-]v\d+(?:\.\d+)*)?$/i, '');
}

function parseArgs(argv) {
  const out = { json: false, write: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
    if (arg === '--mode' || arg === '-m') {
      out.mode = argv[i + 1];
      i += 1;
      continue;
    }
    if (arg === '--write') {
      out.write = true;
      continue;
    }
    if (arg === '--json') {
      out.json = true;
      continue;
    }
    if (arg === '--prompts-root') {
      out.promptsRoot = argv[i + 1];
      i += 1;
      continue;
    }
    if (arg === '--docs-root') {
      out.docsRoots = [argv[i + 1]];
      i += 1;
      continue;
    }
    if (arg === '--docs-roots') {
      out.docsRoots = argv[i + 1].split(',').map((value) => value.trim()).filter(Boolean);
      i += 1;
      continue;
    }
    if (arg.startsWith('--')) {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return out;
}

function printHelp() {
  console.log([
    'Usage: node script/canonicalize-prompt-catalog.mjs --mode <check|sync> [options]',
    '',
    'Options:',
    '  --docs-root <path>         single docs catalog root (default: docs/prompt-catalog)',
    '  --docs-roots <a,b,c>       comma-separated docs catalog roots',
    '  --prompts-root <path>      prompts root directory (default: prompts)',
    '  --mode check|sync          check only or sync missing canonical source (default: check)',
    '  --write                    apply sync updates when mode=sync',
    '  --json                     print report as JSON',
    '  --help                     show help',
  ].join('\n'));
}

function relativeFromRoot(target, root) {
  return path.relative(root, target).replace(/\\/g, '/');
}

main().catch((error) => {
  console.error(error?.message ?? String(error));
  process.exit(1);
});
