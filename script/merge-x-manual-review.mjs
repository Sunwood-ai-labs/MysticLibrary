#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_DIR = 'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c';
const DEFAULT_BASE_REVIEW = `${BASE_DIR}/x-category-review.jsonl`;
const DEFAULT_MANUAL_DIR = `${BASE_DIR}/manual-review/outputs`;
const DEFAULT_OUTPUT = `${BASE_DIR}/x-category-final-review.jsonl`;

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const baseReviewPath = path.resolve(cwd, options.baseReview);
  const manualDirPath = path.resolve(cwd, options.manualDir);
  const outputPath = path.resolve(cwd, options.output);

  const baseRows = await loadJsonl(baseReviewPath);
  const manualFiles = (await readdir(manualDirPath))
    .filter((entry) => entry.endsWith('.jsonl'))
    .sort();

  const manualById = new Map();
  for (const fileName of manualFiles) {
    const filePath = path.resolve(manualDirPath, fileName);
    const rows = await loadJsonl(filePath);
    for (const row of rows) {
      if (!row.primary_id) {
        throw new Error(`Missing primary_id in ${filePath}`);
      }
      if (manualById.has(row.primary_id)) {
        throw new Error(`Duplicate manual review for ${row.primary_id}`);
      }
      manualById.set(row.primary_id, {
        ...row,
        __source_file: fileName,
      });
    }
  }

  const outputRows = [];
  const missing = [];
  for (const row of baseRows) {
    if (row.review_status !== 'needs_review') {
      outputRows.push(row);
      continue;
    }

    const manual = manualById.get(row.primary_id);
    if (!manual) {
      missing.push(row.primary_id);
      continue;
    }

    outputRows.push(mergeRow(row, manual));
  }

  if (missing.length > 0 && !options.allowMissing) {
    throw new Error(`Missing manual decisions for ${missing.length} record(s): ${missing.slice(0, 10).join(', ')}`);
  }

  const output = outputRows.map((row) => JSON.stringify(row)).join('\n');
  if (options.write) {
    await writeFile(outputPath, `${output}\n`, 'utf8');
  }

  console.log(JSON.stringify({
    base_rows: baseRows.length,
    manual_files: manualFiles.length,
    manual_rows: manualById.size,
    output_rows: outputRows.length,
    missing_manual_rows: missing.length,
    output: normalizeSlash(path.relative(cwd, outputPath)),
  }, null, 2));

  if (missing.length > 0) {
    process.exitCode = 1;
  }
}

function parseArgs(argv) {
  const options = {
    baseReview: DEFAULT_BASE_REVIEW,
    manualDir: DEFAULT_MANUAL_DIR,
    output: DEFAULT_OUTPUT,
    write: false,
    allowMissing: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--base-review') {
      options.baseReview = requireValue(argv[index + 1], '--base-review');
      index += 1;
      continue;
    }
    if (arg === '--manual-dir') {
      options.manualDir = requireValue(argv[index + 1], '--manual-dir');
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
    if (arg === '--allow-missing') {
      options.allowMissing = true;
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
    'Usage: node script/merge-x-manual-review.mjs [--write]',
    '',
    'Merges manual one-by-one review ledgers into a final review JSONL',
    'that can drive the categorized X promotion pipeline.',
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

function mergeRow(baseRow, manual) {
  const finalDecision = String(manual.final_decision ?? '').trim() || 'categorize_existing';
  const finalCategoryPath = resolveFinalCategoryPath(manual, finalDecision);
  const [topCategory, ...subSegments] = finalCategoryPath.split('/').filter(Boolean);

  const merged = {
    ...baseRow,
    review_status: 'classified',
    confidence: manual.confidence ?? baseRow.confidence ?? 'medium',
    rationale: manual.rationale ?? baseRow.rationale ?? '',
    evidence: Array.isArray(manual.evidence_checked) && manual.evidence_checked.length > 0
      ? manual.evidence_checked
      : baseRow.evidence,
    reviewer: manual.reviewer ?? reviewerFromFile(manual.__source_file),
    final_decision: finalDecision,
    final_category_path: finalDecision === 'archive_only' ? '' : finalCategoryPath,
    final_top_category: finalDecision === 'archive_only' ? 'archive_only' : topCategory,
    final_subpath: finalDecision === 'archive_only' ? '' : subSegments.join('/'),
    requires_new_category:
      manual.requires_new_category === true
      || String(manual.requires_new_category ?? '').trim() === 'true'
      || finalDecision === 'categorize_new',
    new_category_path:
      finalDecision === 'categorize_new'
        ? (String(manual.new_category_path ?? '').trim() || finalCategoryPath)
        : '',
    fallback_action: finalDecision === 'archive_only' ? 'archive_only' : 'none',
  };

  merged.proposed_top_category = finalDecision === 'archive_only' ? 'archive_only' : topCategory;
  merged.proposed_subpath = finalDecision === 'archive_only' ? '' : subSegments.join('/');
  merged.proposed_canonical_path = '';
  return merged;
}

function resolveFinalCategoryPath(manual, finalDecision) {
  if (finalDecision === 'archive_only') {
    return '';
  }

  const preferred = [
    finalDecision === 'categorize_new' ? manual.new_category_path : '',
    manual.final_category_path,
    buildCategoryPath(manual.final_top_category, manual.final_subpath),
  ]
    .map((value) => String(value ?? '').trim())
    .find(Boolean);

  if (!preferred) {
    throw new Error(`Missing final category path for ${manual.primary_id}`);
  }
  return normalizeCategoryPath(preferred);
}

function buildCategoryPath(topCategory, subpath) {
  const top = String(topCategory ?? '').trim();
  if (!top) {
    return '';
  }
  const tail = String(subpath ?? '')
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean)
    .join('/');
  return tail ? `${top}/${tail}` : top;
}

function normalizeCategoryPath(value) {
  const segments = String(value ?? '')
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);
  if (segments.at(-1) === 'x') {
    segments.pop();
  }
  return segments.join('/');
}

function reviewerFromFile(fileName) {
  const stem = String(fileName ?? '').replace(/-reviewed\.jsonl$/i, '').replace(/\.jsonl$/i, '');
  return stem ? `manual:${stem}` : 'manual-review';
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
