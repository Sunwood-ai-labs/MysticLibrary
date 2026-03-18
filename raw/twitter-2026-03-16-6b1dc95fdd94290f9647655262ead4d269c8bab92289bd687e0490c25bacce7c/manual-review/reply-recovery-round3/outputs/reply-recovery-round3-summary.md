# Reply Recovery Round 3

second_pass_status=pending

## Scope

- Re-check `2003311586979778745` with parent post `2003311584161280147` and follow-up reply `2003311590603653389`
- Re-check `1983821127324705111` with linked context post `1983797955791614199` and reply `1983821129669341495`

## Decisions

- `2003311586979778745`: `categorize_existing` -> `dev/agent-prompts`
- `1983821127324705111`: `categorize_existing` -> `creative/video`

## Notes

- `2003311586979778745` was mis-kept as `archive_only` because the parent demo tweet and follow-up scheduling reply were not considered together with the marker reply.
- `1983821127324705111` already contained the prompt body in the parent tweet; the linked tweet and child reply only strengthen the Sora/video classification.
