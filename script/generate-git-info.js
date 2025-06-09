// MysticLibrary: prompts配下のmdファイルのGit更新日時をJSONに出力するスクリプト

import { execSync } from 'child_process';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const PROMPTS_DIR = join(process.cwd(), 'prompts');
const OUTPUT_PATH = join(process.cwd(), 'src/assets/git-info.json');

function walkMdFiles(dir) {
  let results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkMdFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function getGitLastModified(filePath) {
  try {
    const out = execSync(
      `git log -1 --format="%ci" -- "${filePath}"`,
      { encoding: 'utf8' }
    ).trim();
    if (out) return new Date(out).toISOString();
  } catch (e) {
    // git管理外 or 失敗時はファイルのmtime
    try {
      const stats = statSync(filePath);
      return stats.mtime.toISOString();
    } catch {
      return null;
    }
  }
  return null;
}

function main() {
  const files = walkMdFiles(PROMPTS_DIR);
  const result = {};
  for (const absPath of files) {
    // Viteのimport.meta.globのキー形式に合わせる
    const relPath = '/' + relative(process.cwd(), absPath).replace(/\\/g, '/');
    result[relPath] = getGitLastModified(absPath);
  }
  writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`Wrote git info for ${files.length} files to ${OUTPUT_PATH}`);
}

main();