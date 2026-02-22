# Operation Rules

These are the minimum operating rules to keep Mystic Library (the prompt library) continuously usable.

## Registration Rules

- Place each individual prompt under a category.
- Include all required frontmatter fields in each individual prompt.
- Make `intent` unique and easy to process programmatically.
- Use `draft` / `active` / `deprecated` for `status`.
- Write `last_reviewed` in `YYYY-MM-DD` format.

## Quality Rules

- Write not only the prompt body, but also usage instructions, input examples, output examples, and notes.
- Keep output examples realistic and avoid exaggerated quality.
- For high-risk use cases (legal, medical, financial decisions), clearly state that the prompt is for assistive use only.
- Anonymize input examples that include personal or confidential information.

## Update Rules

- When changing an existing prompt, append the key points to `docs/log/update.md`.
- For breaking changes (input format changes, output requirement changes), document the reason.
- If marking a prompt as `deprecated`, provide an alternative prompt.

## Review Operations

- For initial registration, at least one reviewer is recommended.
- Regularly update `last_reviewed` for `active` prompts.
- If there are failure cases in actual operations, reflect them in the notes.
