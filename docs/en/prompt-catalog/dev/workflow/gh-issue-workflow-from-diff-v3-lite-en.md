---
title: GitHub Issue Workflow from diff V3 Lite EN (English Commit Version)
description: Prompt for executing simple development workflow from Git diff (V3 Lite EN version with English commit messages)
category: dev
intent: gh-issue-workflow-from-diff-v3-lite-en
audience:
  - Developers
  - Team Development Members
input_requirements:
  - GitHub repository
tags:
  - github
  - workflow
  - git
  - english
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
canonical_id: "dev/workflow/gh-issue-workflow-from-diff-v3-lite-en"
prompt_source: "prompts/docs-first/dev/workflow/gh-issue-workflow-from-diff-v3-lite-en_EN.md"
---

# GitHub Issue Workflow from diff V3 Lite EN (English Commit Version)

A prompt for executing a simple development workflow from Git diff results (V3 Lite EN version). Supports English commit messages.

## Intended Use

- Execute a simple Git workflow
- Perform development based on develop branch
- Record work history with English commit messages
- Support international team development

## Prompt Text

```text
# Git Simple Development Workflow V3 Lite EN

Execute the following process:

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```
   git status
   git diff
   ```

2. 🔄 **Switch to develop branch**
   ```
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **Create a working branch** (suggest an appropriate English branch name based on the changes identified above)
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Commit in English based on changes**
   - Create commit messages based on changes confirmed with git status and git diff
   - Describe content in English so it's clear when viewed later
   - Add emojis to improve readability
   - Split frequently and commit
   - Use bullet points of about 3 lines to describe change content

   ```
   git add [changed files]
   git commit -m "✨ [change content in English]"
   ```

5. 🔍 **Check for missing commits**
   ```
   git status
   git diff
   ```

6. 🚀 **Push changes**
   ```
   git push origin feature/[feature-name]-[date]
   ```

7. 🔄 **Finally merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```
```

## How to Use

1. Paste the prompt to AI
2. Execute after work is completed in the Git repository
3. Automatically executes from branch creation to merge

## Input Example

No special input required. Simply execute in a Git repository with changes, and the workflow will be automatically executed.

## Output Example

- Branch creation with appropriate branch name
- English commit messages (with emojis and 3-line bullet points)
- Merge to develop branch

## Differences from V3 Lite

- Commit messages are in English

## Notes

- Commit messages are created in English
- Commits are divided by feature units to clearly record work history
