# QA Inventory: X Archive Prompt Category Review

## Deliverables

1. **x-category-review.jsonl** - Per-record category decision ledger
   - Path: `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-review.jsonl`
   - One JSON object per reviewed record
   - Required keys: primary_id, current_doc_path, source_url, review_status, proposed_top_category, proposed_subpath, proposed_canonical_path, confidence, rationale, evidence, fallback_action, reviewer

2. **x-category-review-summary.md** - Aggregate analysis report
   - Path: `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-review-summary.md`
   - Totals by top category
   - Ambiguous count
   - Duplicate/slugs risk notes
   - Fallback policy
   - Teammate-by-teammate report

3. **x-devils-advocate-challenges.md** - Critical review findings
   - Path: `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-devils-advocate-challenges.md`

## Files to Read

### Primary inputs
- `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/prompt-import-manifest.json` (812 canonical records)
- `docs/.vitepress/config.mts` (taxonomy structure)
- `docs/prompt-catalog/**` (existing category tree)
- `docs/prompt-catalog/archive/x/**/*.md` (816 archive files to review)

### Taxonomy reference
Top categories from config.mts directoryOrderMap:
- `writing` (deep-research, slide)
- `presentation`
- `creative` (audio, video, visual, game, multimodal)
- `dev` (python, triage, review, checklists, templates, guidelines, agent-prompts, system-prompts, claude-hands, dev-agent, codex, openhands, workflow, git)
- `docs` (graphic-recording, diagram, education, markwhen, quarkdown, comic, methodology)
- `methodology` (abstract-prompting, mind-mapping, research, multi-agent, meta, agent)
- `agent` (minecraft, phidata)
- `meta`
- `archive/x` (current wrong location - to be reclassified)

## Files to Write

| File | Purpose | Writer |
|------|---------|--------|
| x-classifier-alpha.jsonl | First half classifications (~406 records) | classifier-alpha |
| x-classifier-beta.jsonl | Second half classifications (~406 records) | classifier-beta |
| x-category-review.jsonl | Final merged & normalized output | taxonomy-verifier |
| x-category-review-summary.md | Aggregate summary report | taxonomy-verifier |
| x-devils-advocate-challenges.md | Critical review findings | devils-advocate |
| QA-INVENTORY.md | This inventory | team-lead |

## Final Claims to Make

1. **Coverage claim**: Total reviewed records = manifest canonical_record_count (812) OR explain any intentional scope difference
2. **Validity claim**: Every output line is valid JSON
3. **Completeness claim**: Every record has proposed_canonical_path OR explicit archive-only fallback_action
4. **Reconciliation claim**: Summary counts reconcile to the JSONL
5. **Team mode claim**: True team mode verified from debug log

## Checks Required for Signoff

- [ ] Total reviewed records matches manifest `canonical_record_count` (812) or explained
- [ ] Every JSONL line is valid JSON (parseable)
- [ ] Every record has `proposed_canonical_path` or explicit `archive_only` fallback_action
- [ ] Summary counts (by category, ambiguous, etc.) reconcile to JSONL
- [ ] Devils-advocate findings addressed or explicitly accepted
- [ ] Taxonomy-verifier normalization complete
- [ ] Debug log confirms team mode ran

## Record Counts

| Source | Count | Notes |
|--------|-------|-------|
| manifest.raw_item_count | 1423 | Raw X archive items |
| manifest.canonical_record_count | 812 | Records to review |
| matched_existing_docs | 10 | Already matched to existing docs |
| generated_archive_docs | 802 | Placed in archive/x (needs reclassification) |
| archive/x/*.md files | 816 | Includes index files |

## Team Assignments

| Teammate | Responsibility | Record Range |
|----------|---------------|--------------|
| classifier-alpha | Classify first half | Records 1-406 from generated_archive_docs |
| classifier-beta | Classify second half | Records 407-812 from generated_archive_docs |
| taxonomy-verifier | Verify taxonomy, normalize schema, merge outputs | All records |
| devils-advocate | Challenge classifications, require fallback policy | All records |

## Decision Policy

1. Review every record **individually** - no bulk heuristics
2. Prefer existing category trees under `docs/prompt-catalog/`
3. Use evidence from real docs paths and frontmatter conventions
4. Low confidence = mark `review_status: needs_review`
5. Match existing canonical doc = reflect in `proposed_canonical_path`
6. Archive-only = require explicit `fallback_action` justification
7. Paths are docs-only; no reference to prompts/docs-first
