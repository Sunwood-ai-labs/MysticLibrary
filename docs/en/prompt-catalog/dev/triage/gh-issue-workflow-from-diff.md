---
title: GitHub Issue Workflow (From Diff)
description: Complete workflow from git diff to issue creation, commit, push, and close
category: dev
intent: gh-issue-workflow-from-diff
audience:
  - Developers
  - Project managers
  - Team leaders
input_requirements:
  - Git diff information
tags:
  - GitHub
  - issue-management
  - workflow
  - Git
  - ticket-driven-development
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# GitHub Issue Workflow (From Diff)

## Intended Use

- Create issues from git diffs
- Progress management and issue reporting
- Commits with issue numbers
- Push and close issues

## Prompt Content

```text
From git diff,

Create an issue using the gh command,

Report progress to the issue, commit with the issue number, push, and close,

Make issue and commit content clear when viewed later,

Add emojis to improve readability,

Split commits frequently and commit,
```

## Usage

1. Check git diff
2. Input prompt to AI
3. Automatically execute from issue creation to closing

## Input Example

```
[Git diff output or changes]
```

## Notes

- Give issues appropriate titles and descriptions
- Include issue numbers in commit messages
- Report progress as issue comments
- Use emojis to improve readability
- Split commits into small units
