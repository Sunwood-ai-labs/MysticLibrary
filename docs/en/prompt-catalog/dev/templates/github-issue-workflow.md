---
title: GitHub Issue Workflow Template
description: Template for managing the complete flow from Git diffs to GitHub issue creation, progress reporting, commits, push, and closure
category: dev
intent: github-issue-workflow
audience:
  - Team development members
  - OSS developers
  - Project managers
input_requirements:
  - Access to Git repository
  - gh command authentication
  - Work diff information
tags:
  - github
  - issue-management
  - workflow
  - git
  - task-management
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issue Workflow Template

## 想定用途

- Automatically create GitHub issues from Git diffs
- Establish issue-based task management workflow
- Link progress reports with commit history

## プロンプト本文

```text
From Git diffs,

Create an issue using gh command,

Report progress to the issue, commit with the issue number, then push and close,

Make issue and commit content understandable for later reference,

Add emojis to improve readability,

Split commits frequently,
```

## 使い方

1. Check Git diffs
2. Create issue using `gh issue create`
3. Report progress via issue comments during work
4. Commit with commit message including issue number
5. Push and close the issue

## 入力例

```text
Please create an issue from the current Git diff and manage the work.
```

## 出力例

```text
## Confirmed Git diffs:
- src/utils.ts: Added new helper functions
- tests/utils.test.ts: Added tests

## Created issue:
#12 - ✨ Add utility functions and implement tests

## Progress report:
Completed implementation of helper functions. Next, implementing tests.

## Commits:
✨ Implement utility functions #12
📝 Add tests #12
```

## 注意点

- Write specific issue titles
- Always include issue numbers in commit messages
- Report progress frequently
- Use emojis to improve visibility
- Split commits logically
