# Peer Verify Round 2 B Report

Peer verifier B: ルカ・スイレン / 境界を裁つ白露の検札官

## Scope

Second-pass verification for all 10 producer rows across:

- `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/manual-review/archive-only-round2/outputs/archive-only-round2-batch-2-missing-capture-reviewed.jsonl`
- `raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/manual-review/archive-only-round2/outputs/archive-only-round2-batch-5-dev-game-web-reviewed.jsonl`

Checked against:

- archive docs under `docs/prompt-catalog/archive/x/**`
- taxonomy structure in `docs/.vitepress/config.mts`

## Summary

| Batch | Records | Pass | Fail | second_pass_status |
|---|---:|---:|---:|---|
| Batch 2: missing-capture | 5 | 0 | 5 | fail |
| Batch 5: dev/game/web | 5 | 0 | 5 | fail |
| Combined | 10 | 0 | 10 | fail |

### Sampled IDs Reviewed

Batch 2:

- `1989694289224352111`
- `1989623614854054146`
- `1989362672526299292`
- `1988974039097045311`
- `1986653928080232903`

Batch 5:

- `2019480701746528425`
- `2017491933627830483`
- `2017491929743925325`
- `2005656448462917950`
- `2005649023022289224`

## Taxonomy Check

The producer-targeted buckets do exist in taxonomy:

- `creative/video`
- `creative/visual`
- `creative/game`
- `dev/templates`

So the failure is not a missing category. The failure is that these archive docs are marker-only archive entries with no canonical entry section, so they should stay `archive_only` instead of being promoted.

## Batch 2 Findings

All 5 missing-capture rows were promoted too aggressively.

| ID | Producer decision | Second-pass decision | Result | Exact disagreement |
|---|---|---|---|---|
| `1989694289224352111` | `creative/video` | `archive_only` | fail | Archive doc shows `summary unavailable` and `[Prompt text was empty after extraction]`; there is no canonical entry to justify promotion. |
| `1989623614854054146` | `creative/video` | `archive_only` | fail | Same failure mode: empty extracted prompt text, marker-only archive doc. |
| `1989362672526299292` | `creative/video` | `archive_only` | fail | Same failure mode: empty extracted prompt text, marker-only archive doc. |
| `1988974039097045311` | `creative/video` | `archive_only` | fail | The title mentions header image/video, but the extracted prompt body is still empty and no canonical entry exists. |
| `1986653928080232903` | `creative/visual` | `archive_only` | fail | The archive doc has only memo text and `[Prompt text was empty after extraction]`; it is not promotable to a reusable visual prompt. |

### Batch 2 Verdict

`second_pass_status = fail`

The producer output over-promoted empty or missing-capture items into creative buckets. The archive docs themselves do not provide durable prompt content, so these should remain `archive_only`.

## Batch 5 Findings

All 5 dev/game/web rows were also rejected.

| ID | Producer decision | Second-pass decision | Result | Exact disagreement |
|---|---|---|---|---|
| `2019480701746528425` | `creative/game` | `archive_only` | fail | The prompt text does describe a game, but the archive doc is still a marker-only archive entry with no canonical entry section, so it is not eligible for promotion. |
| `2017491933627830483` | `dev/templates` | `archive_only` | fail | The prompt text is a setup/check instruction, but the archive doc has no canonical entry and remains archive-only. |
| `2017491929743925325` | `dev/templates` | `archive_only` | fail | Same issue: the prompt text is recoverable, but the archive doc is marker-only and should not be relocated. |
| `2005656448462917950` | `creative/game` | `archive_only` | fail | The prompt text clearly asks for a vertical scrolling hacking-screen game, but the archive record still lacks a canonical entry. |
| `2005649023022289224` | `dev/templates` | `archive_only` | fail | The prompt text is homepage/web oriented, but the archive doc is marker-only and not promotable. |

### Batch 5 Verdict

`second_pass_status = fail`

Even where the prompt text semantically fits `creative/game` or `dev/templates`, the archive docs do not provide a canonical entry section. Under the archive-only round2 rule, these stay `archive_only`.

## Overall Verdict

- Batch 2: `fail`
- Batch 5: `fail`
- Combined: `fail`

### Exact Disagreement Pattern

- Batch 2 is a classic missing-capture overpromotion: empty extracted prompt text was pushed into `creative/video` or `creative/visual`.
- Batch 5 is a semantic misroute under the archive-only rule: the prompts themselves look like `creative/game` or `dev/templates`, but the archive docs are still marker-only and must remain `archive_only`.

## Notes

- I did not find any pass records in either batch.
- The taxonomy itself is fine; the issue is the producer applying a content bucket where the archive doc only supports archival retention.
- The most important gate is the missing `Canonical Entry` / promotable archive content, not just the presence of a plausible topic.
