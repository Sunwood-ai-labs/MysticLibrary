---
title: Git Auto Commit Prompt V4.2 Lite (Pager Disabled Version)
description: Prompt to automatically execute appropriate branch creation, detailed commits, and merge by analyzing git status and diff results (pager disabled version)
category: dev
intent: git-auto-commit-prompt-v4-2-lite
audience:
  - Developers
  - Team Development Members
  - Git Operation Managers
input_requirements:
  - Git repository access
  - Work difference information
tags:
  - git
  - commit
  - branch-management
  - workflow
  - automation
  - no-pager
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Auto Commit Prompt V4.2 Lite (Pager Disabled Version)

A prompt that automatically creates appropriate commit messages by analyzing Git diffs and automates the entire Git operation from branch creation to merge. Disables pager to avoid interactive mode.

## Intended Use

- Automatically create appropriate commit messages by analyzing Git diffs
- Automate entire Git operations from branch creation to merge
- Achieve detailed commit division to clearly record work history
- Avoid interactive mode due to pager for automation

## Prompt Text

```text
# Git Diff Analysis Auto-Commit Prompt V4.2 (Pager Disabled Version)

Execute the following process:

Analyze the results of git status and git diff to automatically perform appropriate branch creation, commits, and merges
**Do not use interactive mode or pagers**

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```bash
   git status
   git --no-pager diff
   ```

2. 🌿 **Verify/create/switch to develop branch**
   ```bash
   # Check if develop branch exists
   git branch -a | grep develop

   # If develop branch doesn't exist, create it
   git checkout -b develop
   git push origin develop

   # If develop branch exists, switch to it and update
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **Create a working branch**
   - Suggest an appropriate English branch name based on the changes shown above
   - Do not include issue numbers
   ```bash
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Commit in detail based on the changes**
   - Based on changes confirmed with git status and git diff, **commit frequently for each work diff**
   - Split by work units such as feature additions, fixes, refactoring **so that anyone viewing later can understand the work history**
   - Describe content in Japanese so it's understandable when viewed later
   - Add emojis to improve readability
   - Include only related changes in one commit; separate unrelated changes into different commits
   - Use bullet points of about 3 lines to describe the changes

   ```bash
   # Example: Split like file addition → feature implementation → style adjustment
   git add [related files]
   git commit -m "✨ [specific change description in Japanese]"

   # Commit next work unit
   git add [next related files]
   git commit -m "🔧 [next change description in Japanese]"
   ```

5. 🔍 **Check for missing commits**
   ```bash
   git status
   git --no-pager diff
   ```

6. 🔄 **Merge to develop branch**
   ```bash
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```

7. 🗑️ **Delete the working branch**
   ```bash
   git branch -d feature/[feature-name]-[date]
   ```

## 🚨 Important Notes

- Using `git --no-pager diff` instead of `git diff` disables the pager and avoids interactive mode
- All diff results are displayed at once, so for large changes, they may not fit on the screen
- In such cases, you can also use `git --no-pager diff --stat` to check only the list of changed files
```

## How to Use

1. Paste the prompt to AI
2. Execute after work is completed in the Git repository
3. Automatically executes from branch creation to merge

## Input Example

No special input required. Simply execute in a Git repository with changes, and diffs will be automatically analyzed to create appropriate commits.

## Output Example

- Branch creation with appropriate branch name
- Detailed commits according to work content (with emojis)
- Merge to develop branch
- Deletion of working branch

## Differences from V4.0/V4.1 Lite

- Uses `git --no-pager diff` instead of `git diff` to disable pager
- Displays all results without entering interactive mode even for large changes

## Notes

- Since pager is disabled, output may be long for large changes
- In such cases, also utilize `git --no-pager diff --stat`
