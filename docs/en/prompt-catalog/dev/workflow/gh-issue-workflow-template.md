---
title: GitHub Issue Workflow Template
description: Workflow template for issue creation through closure using gh command
category: dev
intent: gh-issue-workflow-template
audience:
  - Developers
  - Team Development Members
input_requirements:
  - GitHub repository
  - gh command installation and authentication
tags:
  - github
  - issue
  - workflow
  - gh
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issue Workflow Template

A workflow template for issue creation through closure using gh command.

## Intended Use

- Development workflow using GitHub Issues
- Manage work content with issues and track progress
- Clearly associate commits with issue numbers

## Prompt Text

```text
After creating an issue with the gh command about the above:

Report a progress report to the issue, then commit with the issue number assigned, push, and close

Make the issue and commit content in Japanese so it's understandable when viewed later

Add emojis to improve readability

Split commits frequently and commit
```

## How to Use

1. Explain work content to AI
2. Issue is created with gh command
3. Progress report is reported to issue
4. Commit with issue number is created
5. Issue is closed after push

## Input Example

```
Implement user authentication feature
```

## Output Example

1. Issue is created with gh issue create
2. Progress report is reported as issue comment
3. Commit with #[ISSUE_NUMBER] is created
4. Issue is closed after push

## Notes

- gh command must be installed
- gh command must be authenticated
- Commits are split frequently
