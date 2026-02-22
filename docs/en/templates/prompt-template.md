# Prompt Template

This is the base template for registering a new prompt. Be sure to set frontmatter on each individual prompt page.

## How to Use

1. Create a new `.md` file under the appropriate category.
2. Paste the template below.
3. Fill in the required frontmatter fields.
4. Write the input examples, output examples, and notes.
5. Add a link to the corresponding category's `index.md`.

## Template

````md
---
title: (Prompt Name)
description: (One sentence describing what the prompt does)
category: (writing / dev / ...)
intent: (Identifier that is easy for machine classification)
audience:
  - (Intended user)
input_requirements:
  - (Required input information)
tags:
  - (Search tag)
status: draft
owner: (Managing team name)
last_reviewed: YYYY-MM-DD
---

# (Prompt Name)

## Intended Use

- (Usage scenario)

## Prompt Body

```text
(Prompt body that can be used as-is)
```

## How to Use

1. (How to fill in the inputs)
2. (Review points)

## Input Example

```text
(Input example)
```

## Output Example

```text
(Expected output example)
```

## Notes

- (Misuse prevention)
- (Points requiring human review)
```
````

## Review Checklist

- Do `description` and `intent` match?
- Are `input_requirements` collectable in actual operations?
- Does the output example satisfy the requirements in the prompt body?
- Do the notes include risks (misinformation, personal information, privilege overreach)?
