#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DOC_ROOTS = [
  { root: 'docs/prompt-catalog', locale: 'JP' },
  { root: 'docs/en/prompt-catalog', locale: 'EN' },
];

const SOURCE_KEYS = ['prompt_source', 'legacy_source', 'promptSource', 'source', 'source_path', 'sourcePath'];
const DOCS_FIRST_PREFIX = 'prompts/docs-first/';

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const docs = await collectDocs(cwd);

  let updatedDocs = 0;
  let writtenMirrors = 0;

  for (const doc of docs) {
    const raw = await readFile(doc.absPath, 'utf8');
    const frontmatter = parseFrontmatter(raw);
    const canonicalId = doc.catalogPath;
    const promptSource = buildMirrorPromptPath(doc.catalogPath, doc.locale);
    const legacySource = pickLegacySource(frontmatter, promptSource);
    const promptBody = extractPromptBody(stripFrontmatter(raw));
    const nextDoc = updateDocFrontmatter(raw, {
      canonicalId,
      promptSource,
      legacySource,
    });

    if (nextDoc !== raw) {
      if (options.write) {
        await writeFile(doc.absPath, nextDoc, 'utf8');
      }
      updatedDocs += 1;
    }

    const mirrorAbsPath = path.resolve(cwd, promptSource);
    const mirrorContent = buildMirrorPrompt({
      title: frontmatter.title ?? path.posix.basename(doc.catalogPath),
      description: frontmatter.description ?? '',
      canonicalId,
      docRelativePath: doc.relativePath,
      locale: doc.locale,
      promptBody,
    });
    const existingMirror = await readIfExists(mirrorAbsPath);
    if (existingMirror !== mirrorContent) {
      if (options.write) {
        await mkdir(path.dirname(mirrorAbsPath), { recursive: true });
        await writeFile(mirrorAbsPath, mirrorContent, 'utf8');
      }
      writtenMirrors += 1;
    }
  }

  console.log(`Docs scanned: ${docs.length}`);
  console.log(`Docs updated: ${updatedDocs}`);
  console.log(`Prompt mirrors written: ${writtenMirrors}`);

  if (!options.write) {
    console.log('Dry run only. Re-run with --write to persist changes.');
  }
}

function parseArgs(argv) {
  const options = { write: false };
  for (const arg of argv) {
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
    'Usage: node script/sync-docs-first-prompts.mjs [--write]',
    '',
    'Synchronizes prompt mirrors from docs/ into prompts/docs-first/.',
    'The docs catalog remains the source of truth.',
  ].join('\n'));
}

async function collectDocs(cwd) {
  const docs = [];
  for (const entry of DOC_ROOTS) {
    const absRoot = path.resolve(cwd, entry.root);
    const files = await collectMarkdownFiles(absRoot);
    for (const file of files) {
      if (path.basename(file) === 'index.md') {
        continue;
      }
      const relWithinRoot = relativePath(file, absRoot);
      docs.push({
        absPath: file,
        relativePath: relativePath(file, cwd),
        locale: entry.locale,
        catalogPath: relWithinRoot.replace(/\.md$/i, ''),
      });
    }
  }
  return docs;
}

async function collectMarkdownFiles(dir) {
  const { readdir } = await import('node:fs/promises');
  const out = [];
  const stack = [dir];
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
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        out.push(fullPath);
      }
    }
  }
  return out;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return {};
  }

  const lines = match[1].split(/\r?\n/);
  const out = {};
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*:\s*(.+?)\s*$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function stripFrontmatter(raw) {
  const match = raw.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) {
    return raw;
  }
  return raw.slice(match[0].length);
}

function pickLegacySource(frontmatter, promptSource) {
  const existingLegacy = normalizeSlash(frontmatter.legacy_source ?? '');
  if (existingLegacy && existingLegacy !== promptSource) {
    return existingLegacy;
  }

  for (const key of SOURCE_KEYS) {
    const value = frontmatter[key];
    if (typeof value !== 'string' || !value.trim()) {
      continue;
    }
    const normalized = normalizeSlash(value.trim());
    if (normalized === promptSource) {
      continue;
    }
    if (normalized.startsWith(DOCS_FIRST_PREFIX)) {
      continue;
    }
    return normalized;
  }

  return null;
}

function buildMirrorPromptPath(catalogPath, locale) {
  return `${DOCS_FIRST_PREFIX}${catalogPath}_${locale}.md`;
}

function updateDocFrontmatter(raw, { canonicalId, promptSource, legacySource }) {
  const eol = detectEol(raw);
  const match = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const body = match ? raw.slice(match[0].length) : raw;
  const lines = match ? match[1].split(/\r?\n/) : [];

  const filtered = lines.filter((line) => {
    const trimmed = line.trimStart();
    return !/^(canonical_id|canonicalId|prompt_source|promptSource|legacy_source|source|source_path|sourcePath)\s*:/.test(
      trimmed,
    );
  });

  filtered.push(`canonical_id: ${yamlScalar(canonicalId)}`);
  if (legacySource) {
    filtered.push(`legacy_source: ${yamlScalar(legacySource)}`);
  }
  filtered.push(`prompt_source: ${yamlScalar(promptSource)}`);

  return `---${eol}${filtered.join(eol)}${eol}---${eol}${body}`;
}

function buildMirrorPrompt({ title, description, canonicalId, docRelativePath, locale, promptBody }) {
  const body = promptBody.trim() || `See ${docRelativePath} for the canonical prompt content.`;
  return [
    '---',
    `title: ${yamlScalar(title)}`,
    `description: ${yamlScalar(description)}`,
    `canonical_id: ${yamlScalar(canonicalId)}`,
    `canonical_doc: ${yamlScalar(docRelativePath)}`,
    `locale: ${locale}`,
    'docs_first: true',
    `last_synced: ${new Date().toISOString().slice(0, 10)}`,
    '---',
    '',
    `<!-- Generated from ${docRelativePath}. Edit docs/ instead. -->`,
    '',
    body,
    '',
  ].join('\n');
}

function extractPromptBody(body) {
  const normalized = body.replace(/\r\n/g, '\n');
  const sectionAnchors = [
    /^##\s+.*(?:プロンプト本文|Prompt(?: Body| Text| Content)?)/gim,
    /^###\s+.*(?:プロンプト本文|Prompt(?: Body| Text| Content)?)/gim,
  ];

  for (const pattern of sectionAnchors) {
    const match = pattern.exec(normalized);
    if (!match) {
      continue;
    }
    const candidate = extractFirstFence(normalized.slice(match.index + match[0].length));
    if (candidate) {
      return candidate;
    }
  }

  const firstFence = extractFirstFence(normalized);
  if (firstFence) {
    return firstFence;
  }

  return normalized.trim();
}

function extractFirstFence(text) {
  const match = text.match(/```[^\n]*\n([\s\S]*?)\n```/);
  return match ? match[1].trim() : null;
}

function yamlScalar(value) {
  return JSON.stringify(String(value ?? ''));
}

function normalizeSlash(value) {
  return String(value).replace(/\\/g, '/');
}

function relativePath(target, root) {
  return path.relative(root, target).replace(/\\/g, '/');
}

function detectEol(text) {
  return text.includes('\r\n') ? '\r\n' : '\n';
}

async function readIfExists(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

main().catch((error) => {
  console.error(error?.stack ?? error?.message ?? String(error));
  process.exit(1);
});
