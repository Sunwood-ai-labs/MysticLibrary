# Devil's Advocate Taxonomy Risk Audit

**Generated:** 2026-03-19  
**Source:** `x-category-review.jsonl` (802 records)

## Risk Rubric for Final Acceptance

### Decision Threshold

- `PASS` only when:
  - `review_status = classified`
  - `fallback_action = relocate`
  - confidence is `high`
  - `evidence` has at least 2 clear category-specific keywords
  - `rationale` has no `Alternatives`
- `RE-REVIEW` when:
  - `review_status = needs_review`
  - confidence is `low` or `medium`
  - `Alternatives` appears in `rationale`
- `BLOCK` when:
  - `fallback_action = archive_only` but taxonomy gap is not explicitly justified
  - same record is required to move across inconsistent boundaries in different passes
  - evidence is insufficient for reproducible manual verification

### Current Aggregate Risk Snapshot

| Metric | Value |
|---|---:|
| High risk concentration | 49.0% classified as `needs_review` (377/802) |
| Low confidence burden | 31.0% (`low`: 249/802) |
| Ambiguous alternatives | 309 records |
| No duplicate slug risk | Reported LOW |

`creative` has the highest unresolved volume (303/618 needs_review, 49.0%), with `dev` next (44/119, 37.0%).  
`archive_only` is a hard 100% needs_review (18/18), which makes it a mandatory taxonomy-gap lane.

## Main Risk Patterns (Acceptance Gate)

| Risk Level | Missing Evidence | Owner | Required Action | Disposition |
|---|---|---|---|---|
| High | Multiple alternatives in `rationale` for same record; no primary-output framing from source text | Human reviewer / category owner | Manually inspect original prompt and choose final target by expected output type | RE-REVIEW |
| High | `low` confidence with single-signal matches (e.g. `Docker`, `PR`, `commit`, single platform tags) | Taxonomy-verifier + Devil's advocate | Require 2+ discriminating signals before moving out of `needs_review` | RE-REVIEW |
| High | `creative/video` vs `creative/visual` boundary (sprite sheets, animation, ad snippets, short-form motion) | dev/creative taxonomy owner | Add explicit boundary note and decide by primary deliverable (image vs motion) | RE-REVIEW |
| Medium | `dev/templates` vs `dev/agent-prompts` overlap (automation code + agent workflow intent) | dev-owner + reviewer | Keep as `dev/agent-prompts` when orchestration goal dominates; otherwise `dev/templates` | RE-REVIEW |
| Medium | `docs/graphic-recording` vs `creative/visual` overlap (process diagrams with visual style cues) | docs-owner | Check whether content explains process/knowledge or requests artwork generation | RE-REVIEW |

## Top 5 Rejection / Re-review Triggers

1. Any record with `review_status = needs_review` and `Alternatives` in rationale.
2. Any `low` confidence classification that has fewer than 2 meaningful keywords.
3. `archive_only` decisions made without a taxonomy-gap argument in the source record or manifest.
4. Cross-domain intent mismatch: animation prompts in `creative/video` lacking explicit temporal output, or UX/diagram prompts in `creative/visual`.
5. Any record whose evidence appears truncated or non-deterministic (ellipses / mojibake) and cannot be replayed from the original source.

## Final Acceptance Check List

- [ ] Every `archive_only` record receives explicit taxonomy-gap justification.
- [ ] Every `needs_review` record is manually classified before file relocation.
- [ ] Every `low` confidence item has full-context evidence check (not summary-only).
- [ ] Category boundaries above are documented as one-line policy for reviewer consistency.
- [ ] A second reviewer validates each disposition before execution.

