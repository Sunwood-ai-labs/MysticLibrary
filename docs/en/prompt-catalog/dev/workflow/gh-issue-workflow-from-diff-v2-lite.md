---
title: GitHub Issue Workflow from diff V2 Lite
description: Prompt for executing simple GitHub Issue workflow from Git diff (Lite version)
category: dev
intent: gh-issue-workflow-from-diff-v2-lite
audience:
  - Developers
  - Team Development Members
input_requirements:
  - GitHub repository
tags:
  - github
  - workflow
  - git
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issue Workflow from diff V2 Lite

A prompt for executing a simple development workflow from Git diff results (Lite version).

## Intended Use

- Execute a simple Git workflow
- Perform development based on develop branch
- Record work history with detailed commits

## Prompt Text

```text
Execute the following process

# Git Simple Development Workflow Lite

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

3. 🌿 **Create working branch** (suggest an appropriate English branch name based on the above changes)
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Commit based on changes**
   - Create commit messages based on changes confirmed with git status and git diff
   - Write descriptions in Japanese so they can be understood later
   - Add emojis to improve readability
   - Commit frequently in small increments
   ```
   git add [changed files]
   git commit -m "✨ [change content in Japanese]"
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

8. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   git push origin --delete feature/[feature-name]-[date]
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
- Detailed commits according to work content (with emojis)
- Merge to develop branch
- Deletion of working branch

## Differences from V2

- V2: Workflow using GitHub Issues
- V2 Lite: Simple workflow without using issues

## Notes

- GitHub API or gh command not required
- Commits are divided by feature units to clearly record work history
