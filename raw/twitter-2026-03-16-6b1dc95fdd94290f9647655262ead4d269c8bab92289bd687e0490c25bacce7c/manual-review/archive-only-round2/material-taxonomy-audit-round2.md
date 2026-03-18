# Material Taxonomy Audit Round 2

## surface_scope
- Scope target: `docs/prompt-catalog` IA and round2 reclassification outputs.
- Inputs reviewed:
  - all 6 JSONL files under `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/manual-review/archive-only-round2/outputs`
  - `docs/.vitepress/config.mts`
  - the existing `docs/prompt-catalog` tree
  - the 3 remaining `archive_only` source docs under `docs/prompt-catalog/archive/x/...`
- Result summary:
  - 30 records reviewed
  - 27 records fit existing categories
  - 3 records correctly remain `archive_only`
- Overall IA verdict: the chosen taxonomy is broadly consistent with the current docs IA; the main defects are path normalization issues, not category invention.

## material_design_status
not_applicable

## component guidance
- No user-facing component or layout changed in this audit, so there is no Material Design defect to fix in the UI layer.
- If these results are later materialized in the sidebar or catalog index, keep category links directory-based and aligned to the existing VitePress tree.
- Do not treat page slugs as category nodes. A category should resolve to a directory index, not to a leaf content page.

## accessibility notes
- Keep category labels short and stable so the sidebar remains scannable and predictable for keyboard and screen-reader users.
- Avoid duplicate or prefixed paths in surfaced labels; they increase cognitive load and make navigation state harder to follow.
- Preserve a single canonical path per category so link text, breadcrumbs, and the sidebar all describe the same node.

## findings
### 1. Existing IA fit is strong, but 5 records need path normalization
- The following records are categorized correctly, but their `final_category_path` values include an unnormalized `docs/prompt-catalog/` prefix:
  - `1989694289224352111` -> `docs/prompt-catalog/creative/video`
  - `1989623614854054146` -> `docs/prompt-catalog/creative/video`
  - `1989362672526299292` -> `docs/prompt-catalog/creative/video`
  - `1988974039097045311` -> `docs/prompt-catalog/creative/video`
  - `1986653928080232903` -> `docs/prompt-catalog/creative/visual`
- These should normalize to the existing directory categories `creative/video` and `creative/visual`.
- Taxonomy impact: low, because the category choice is right, but the path shape is inconsistent with the rest of the catalog and with the VitePress sidebar generator.

### 2. One category points to a page slug instead of a directory
- `2003365922413920716` uses `creative/visual/surreal-vehicle-prompt-pack`.
- That path is a leaf page slug, not a category directory. The existing IA already has `creative/visual/` as the category shelf, with `surreal-vehicle-prompt-pack.md` as a page inside it.
- Required normalization: collapse the category path to `creative/visual` and keep the page slug as the content page, not the taxonomy node.

### 3. The 3 remaining `archive_only` items should still stay out
- `2003311586979778745` is an Amazon URL-only marker post with no recoverable prompt body.
- `1987914939064025265` explicitly shows `[Prompt text was empty after extraction]`.
- `1983821127324705111` is a short marker post with no actionable prompt structure beyond a reaction to Sora 2 character output.
- These three do not justify reclassification into an existing shelf, and no new category is warranted for them.

## required_action
- Normalize the five prefixed category paths to `creative/video` and `creative/visual`.
- Collapse `creative/visual/surreal-vehicle-prompt-pack` to the directory category `creative/visual`.
- Keep `2003311586979778745`, `1987914939064025265`, and `1983821127324705111` as `archive_only`.
- Rerun the round2 export check after normalization to confirm every `final_category_path` matches the directory-based IA used by `docs/.vitepress/config.mts`.
