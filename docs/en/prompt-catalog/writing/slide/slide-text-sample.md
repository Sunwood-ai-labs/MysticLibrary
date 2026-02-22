---
title: Slide Text Content Sample
description: Markdown text sample for conversion to reveal.js slides
category: writing
intent: slide-text-sample
audience:
  - Presentation creators
  - Slide content creators
input_requirements:
  - Documents or articles to be converted to slides
tags:
  - reveal.js
  - slides
  - content
  - sample
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# Slide Text Content Sample

## Intended Use

- Use as an input sample for slide conversion prompts
- Reference when converting Markdown documents to slide structure

## Prompt

```markdown
# Personal Guide to Software Development Using AI - Summary

## Introduction
- The author is a development manager and uses AI for coding in personal projects
- Opinions vary because people use AI differently

## Rules for AI-Assisted Development
1. Keep context low and have frequent new conversations
2. When reviewing code, say it was written by a different AI
3. Focus on saving time and mental energy
4. Don't rely entirely on AI; treat it like a junior developer
- Recommendation: Always use two AIs

## Phase 1: Architecture
- Document project requirements, completion state, classes/modules/packages, and methods
- Design your own architecture while referencing AI suggestions

## Phase 2: Coding
- Focus on quality, code understanding, and fitting developer style
- Step 1: Review architecture and select a feature
- Step 2: Present requirements and class/method overview to AI and ask for solutions
- Step 3: Ask another AI to critique and refactor the requirements and response
- Step 4: Ask another AI the same question with requirements and new response
- Step 5: Review the final response and make corrections if necessary
- Final step: Repeat from step 2 if needed

- This workflow saves time and effort while maintaining code quality and conserving developer mental energy
- However, it cannot be applied to all tasks
```

## How to Use

1. Specify as the `text` file for the slide conversion prompt
2. Heading structure (`##`) becomes slide sections
3. Bullet points (`-`) become list items

## Input Example

Use the Markdown content above as-is.

## Output Example

When converted to reveal.js format, each heading becomes a slide and bullet points are displayed as lists.

## Notes

- Be mindful of heading levels (`#` vs `##`)
- Adjust to avoid too much information on a single slide
- Code blocks may be excluded during conversion
- If text is long, split slides at appropriate positions
