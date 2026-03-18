---
title: "Roo-Cline Japanese Release Notes Task"
description: "Task prompt for drafting Japanese release notes from git diffs and a release header image while following issue-based execution workflow."
canonical_id: "dev/workflow/roo-cline-ja-release-notes-task"
canonical_doc: "docs/en/prompt-catalog/dev/workflow/roo-cline-ja-release-notes-task.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/workflow/roo-cline-ja-release-notes-task.md. Edit docs/ instead. -->

To execute the following command, first identify tasks and register them as issues,

When changing files, commit with the issue number,

Also, report progress via comments,

## Command

Create Japanese release notes for v0.1.0 using the following commands:

git diff --name-only --diff-filter=AMCRD tag1 tag2 > ./tmp/list.txt
git diff --diff-filter=AMCRD tag1 tag2 > ./tmp/diff.txt

Repository is below:
https://github.com/Sunwood-ai-labs/command-executor-mcp-server

Use the following SVG for header image:
![](https://raw.githubusercontent.com/Sunwood-ai-labs/command-executor-mcp-server/refs/heads/master/assets/release-header-v0.1.0.svg)

## Release Note Template
