# Peer Verify Batch D

Target: `D:\Prj\MysticLibrary\raw\twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c\manual-review\outputs\batch-d-dev-docs-archive-reviewed.jsonl`

## Summary

- Total records: 74
- Sample size: 18
- Sampling rule: prioritize all rows where `final_category_path == archive`
- Archive sample result: 18 pass / 0 fail
- Overall `second_pass_status`: `pass`
- Disagreements: none

## Sampled IDs

`2020133745521742334`, `2020133739452592430`, `2020133736352993363`, `2019480701746528425`, `2017491933627830483`, `2017491929743925325`, `2005656448462917950`, `2005649023022289224`, `2003365922413920716`, `2003311586979778745`, `2000171284492427559`, `1996571144523288846`, `1996209737830998236`, `1995854577779048757`, `1995374749476913558`, `1994453895163343161`, `1994357206574125060`, `1936324800647250245`

## Findings

| primary_id | checked_doc_path | verdict | note |
| --- | --- | --- | --- |
| 2020133745521742334 | `docs/prompt-catalog/archive/x/2026/02/2020133745521742334.md` | pass | frontmatter `category: archive`, `intent: x-marker-archive`, `status: archived` |
| 2020133739452592430 | `docs/prompt-catalog/archive/x/2026/02/2020133739452592430.md` | pass | same archive markers present |
| 2020133736352993363 | `docs/prompt-catalog/archive/x/2026/02/2020133736352993363.md` | pass | same archive markers present |
| 2019480701746528425 | `docs/prompt-catalog/archive/x/2026/02/2019480701746528425.md` | pass | same archive markers present |
| 2017491933627830483 | `docs/prompt-catalog/archive/x/2026/01/2017491933627830483.md` | pass | same archive markers present |
| 2017491929743925325 | `docs/prompt-catalog/archive/x/2026/01/2017491929743925325.md` | pass | same archive markers present |
| 2005656448462917950 | `docs/prompt-catalog/archive/x/2025/12/2005656448462917950.md` | pass | same archive markers present |
| 2005649023022289224 | `docs/prompt-catalog/archive/x/2025/12/2005649023022289224.md` | pass | same archive markers present |
| 2003365922413920716 | `docs/prompt-catalog/archive/x/2025/12/2003365922413920716.md` | pass | same archive markers present |
| 2003311586979778745 | `docs/prompt-catalog/archive/x/2025/12/2003311586979778745.md` | pass | same archive markers present |
| 2000171284492427559 | `docs/prompt-catalog/archive/x/2025/12/2000171284492427559.md` | pass | same archive markers present |
| 1996571144523288846 | `docs/prompt-catalog/archive/x/2025/12/1996571144523288846.md` | pass | same archive markers present |
| 1996209737830998236 | `docs/prompt-catalog/archive/x/2025/12/1996209737830998236.md` | pass | same archive markers present |
| 1995854577779048757 | `docs/prompt-catalog/archive/x/2025/12/1995854577779048757.md` | pass | same archive markers present |
| 1995374749476913558 | `docs/prompt-catalog/archive/x/2025/12/1995374749476913558.md` | pass | same archive markers present |
| 1994453895163343161 | `docs/prompt-catalog/archive/x/2025/11/1994453895163343161.md` | pass | same archive markers present |
| 1994357206574125060 | `docs/prompt-catalog/archive/x/2025/11/1994357206574125060.md` | pass | same archive markers present |
| 1936324800647250245 | `docs/prompt-catalog/archive/x/2025/06/1936324800647250245.md` | pass | same archive markers present |

## Disagreements

- None

## Notes

- The JSONL did not include a `current_doc_path` field, so only the `checked_doc_path` documents were reviewed.
- All 18 sampled rows lived under `archive` and matched `category: archive` plus `intent: x-marker-archive` in frontmatter.
