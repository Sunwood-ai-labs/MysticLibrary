# Material Taxonomy Audit

## surface_scope
- Scope target: docs/prompt-catalog structure and information architecture.
- Inputs reviewed:
  - raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-review-summary.md
  - raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-review.jsonl
  - docs/.vitepress/config.mts
- Scope boundary: audit only. No docs edits and no file moves were performed.

## material_design_status
requires_adjustment

## component guidance
- Current state: 802 records were reviewed; 377 are needs_review and 309 are ambiguous.
- Main ambiguity clusters:
  - creative/video vs creative/visual: 248 (127 video-first, 121 visual-first)
  - dev/templates vs dev/agent-prompts: 27
  - docs/graphic-recording vs creative/visual: 7
- Need-load by category:
  - creative: 303 needs_review
  - dev: 44 needs_review
  - docs: 8 needs_review
  - writing: 2 needs_review
  - presentation: 1 needs_review
- Config-content mismatch to correct:
  - Existing folders not declared in directoryOrderMap:
    - creative/multimodal
    - dev/git, dev/workflow
    - docs/comic, docs/methodology, docs/quarkdown
    - writing/deep-research, writing/slide
    - agent/minecraft, agent/phidata
  - These currently fall back to lexical order and reduce navigation predictability.
- Recommended new lanes:
  - creative/video/animation (sprite / motion-first prompts)
  - creative/video/static-storyboard (scene-framed prompts with minimal motion)
  - creative/visual/still-art (image-first output)
  - creative/visual/prototype-visuals (visual planning, concept textures, art direction)
  - dev/templates/code and dev/templates/ops (or enforce clearer boundary to dev/agent-prompts)
  - docs/visualization if docs/comic, docs/diagram, docs/graphic-recording, docs/quarkdown keep growing
- Sidebar / IA guidance:
  - Update directoryOrderMap first, then add/keep index entries in the same ordered hierarchy.
  - Keep high-conflict categories visible with explicit decision wording (for example: motion output vs static art).
  - Keep x as review space only, with leaf files hidden from primary nav as implemented.

## accessibility notes
- Use output-shape labels at node level: "motion video", "still image", "workflow prompt", "system prompt".
- Clarify decision criteria in index pages for ambiguous edges in plain terms.
- Prefer unique and specific slugs, avoid near-duplicate sibling labels.
- Expose "needs_review", "classified", and "archive_only" state in list context for discoverability.

## required_action
- Align IA map with actual folders, then rerun sidebar order checks.
- Define explicit boundary rules for the top 3 overlap clusters before moving files.
- Resolve ambiguous records first, with reason notes that are reproducible from source text.
- Add explicit archive-only rationale for each of the 18 archive-only items.
- Re-audit after each batch and append updated counts to this file.
