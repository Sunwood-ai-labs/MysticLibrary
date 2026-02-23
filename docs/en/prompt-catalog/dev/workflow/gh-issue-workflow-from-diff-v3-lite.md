---
title: GitHub Issue Workflow from diff V3 Lite
description: A prompt for executing a simple development workflow from Git diff results (V3 Lite version with detailed commit support)
category: dev
intent: gh-issue-workflow-from-diff-v3-lite
audience:
  - Developers
  - Team Members
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

# GitHub Issue Workflow from diff V3 Lite

A prompt for executing a simple development workflow from Git diff results (V3 Lite version). Supports detailed commit messages.

## Use Cases

- Execute simple Git workflows
- Develop based on develop branch
- Leave work history with detailed commit messages

## Prompt

```text
# Git Simple Development Workflow V3 Lite

Execute the following process

## Development Flow Steps

1. **Check change status before starting work**
   ```
   git status
   git diff
   ```

2. **Switch to develop branch**
   ```
   git checkout develop
   git pull origin develop
   ```

3. **Create a working branch** (Propose an appropriate English branch name based on the diff above)
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. **Commit based on changes**
   - Create commit messages based on changes confirmed with git status and git diff
   - Write in English so it's understandable when reviewed later
   - Add emojis to improve readability
   - Split into smaller commits
   - Use about 3 lines of bullet points to describe changes

   ```
   git add [changed-files]
   git commit -m "✨ [Change description in English]"
   ```

5. **Check for uncommitted changes**
   ```
   git status
   git diff
   ```

6. **Push changes**
   ```
   git push origin feature/[feature-name]-[date]
   ```

7. **Merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task-name]"
   git push origin develop
   ```

8. **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   git push origin --delete feature/[feature-name]-[date]
   ```
```

## How to Use

1. Paste the prompt into an AI
2. Execute when work is complete in a Git repository
3. Workflow from branch creation to merge is executed automatically

## Input Example

No special input required. Simply execute in a Git repository with changes, and the workflow will run automatically.

## Output Example

- Branch creation with appropriate branch name
- Detailed commit messages (with emojis, ~3 lines of bullet points)
- Merge to develop branch
- Deletion of working branch

## Differences from V2 Lite

- Use about 3 lines of bullet points to describe changes

## Notes

- Commits are split by feature to clearly leave work history
