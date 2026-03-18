#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_DIR = 'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c';
const DEFAULT_BASE_REVIEW = `${BASE_DIR}/x-category-final-review.jsonl`;
const DEFAULT_OVERLAY_DIR = `${BASE_DIR}/manual-review/archive-only-round2/outputs`;
const DEFAULT_OUTPUT = `${BASE_DIR}/x-category-final-review.jsonl`;

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const baseReviewPath = path.resolve(cwd, options.baseReview);
  const overlayDirPath = path.resolve(cwd, options.overlayDir);
  const outputPath = path.resolve(cwd, options.output);

  const baseRows = await loadJsonl(baseReviewPath);
  const overlayFiles = (await readdir(overlayDirPath))
    .filter((entry) => entry.endsWith('.jsonl'))
    .sort();

  const overlayById = new Map();
  for (const fileName of overlayFiles) {
    const filePath = path.resolve(overlayDirPath, fileName);
    const rows = await loadJsonl(filePath);
    for (const row of rows) {
      if (!row.primary_id) {
        throw new Error(`Missing primary_id in ${filePath}`);
      }
      overlayById.set(row.primary_id, {
        ...row,
        __source_file: fileName,
      });
    }
  }

  let overlayApplied = 0;
  const outputRows = baseRows.map((row) => {
    const overlay = overlayById.get(row.primary_id);
    if (!overlay) {
      return row;
    }
    overlayApplied += 1;
    return mergeRow(row, overlay);
  });

  const output = outputRows.map((row) => JSON.stringify(row)).join('\n');
  if (options.write) {
    await writeFile(outputPath, `${output}\n`, 'utf8');
  }

  console.log(JSON.stringify({
    base_rows: baseRows.length,
    overlay_files: overlayFiles.length,
    overlay_rows: overlayById.size,
    overlay_applied: overlayApplied,
    output_rows: outputRows.length,
    output: normalizeSlash(path.relative(cwd, outputPath)),
  }, null, 2));
}

function parseArgs(argv) {
  const options = {
    baseReview: DEFAULT_BASE_REVIEW,
    overlayDir: DEFAULT_OVERLAY_DIR,
    output: DEFAULT_OUTPUT,
    write: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--base-review') {
      options.baseReview = requireValue(argv[index + 1], '--base-review');
      index += 1;
      continue;
    }
    if (arg === '--overlay-dir') {
      options.overlayDir = requireValue(argv[index + 1], '--overlay-dir');
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
    'Usage: node script/overlay-x-review-decisions.mjs [--write]',
    '',
    'Overlays later manual review decisions onto an existing final review JSONL.',
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
  const evidence = normalizeEvidence(manual.evidence_checked, baseRow.evidence);

  return {
    ...baseRow,
    review_status: 'classified',
    confidence: manual.confidence ?? baseRow.confidence ?? 'medium',
    rationale: manual.rationale ?? baseRow.rationale ?? '',
    evidence,
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
    proposed_top_category: finalDecision === 'archive_only' ? 'archive_only' : topCategory,
    proposed_subpath: finalDecision === 'archive_only' ? '' : subSegments.join('/'),
    proposed_canonical_path: '',
  };
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
  let normalized = String(value ?? '').trim().replace(/\\/g, '/');
  normalized = normalized.replace(/^docs\/en\/prompt-catalog\//, '');
  normalized = normalized.replace(/^docs\/prompt-catalog\//, '');
  normalized = normalized.replace(/^prompt-catalog\//, '');
  normalized = normalized.replace(/^\/+/, '');

  const segments = normalized
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
  return stem ? `manual:${stem}` : 'manual-overlay';
}

function normalizeEvidence(candidate, fallback) {
  if (Array.isArray(candidate) && candidate.length > 0) {
    return candidate;
  }
  if (typeof candidate === 'string' && candidate.trim()) {
    return [candidate.trim()];
  }
  return fallback;
}

function normalizeSlash(value) {
  return value.replace(/\\/g, '/');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
