---
title: Git Auto Commit Prompt V4.0 Lite PS (PowerShell Version)
description: Prompt to automatically execute appropriate branch creation, detailed commits, and merge by analyzing git status and diff results (PowerShell compatible version)
category: dev
intent: git-auto-commit-prompt-v4-lite-ps
audience:
  - Developers
  - Team Development Members
  - Git Operation Managers
  - PowerShell Users
input_requirements:
  - Git repository access
  - Work difference information
  - PowerShell environment
tags:
  - git
  - commit
  - branch-management
  - workflow
  - automation
  - powershell
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Auto Commit Prompt V4.0 Lite PS (PowerShell Version)

A prompt that automatically creates appropriate commit messages by analyzing Git diffs and automates the entire Git operation from branch creation to merge. Compatible with PowerShell environment.

## Intended Use

- Automatically create appropriate commit messages by analyzing Git diffs
- Automate entire Git operations from branch creation to merge
- Achieve detailed commit division to clearly record work history
- Automate Git operations in PowerShell environment

## Prompt Text

```text
# Git Diff Analysis Auto-Commit Prompt V4.0 lite PS

Execute the following process:

Analyze the results of git status and git diff, and automatically execute appropriate branch creation, commit, and merge operations.
Make sure to append "; start-sleep -milliseconds 30" at the end of each command as shown below:

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```
   git status ; start-sleep -milliseconds 30
   git diff ; start-sleep -milliseconds 30
   ```

2. 🌿 **Check/create/switch to develop branch**
   ```
   # Check if develop branch exists
   git branch -a | grep develop ; start-sleep -milliseconds 30

   # Create develop branch if it doesn't exist
   git checkout -b develop ; start-sleep -milliseconds 30
   git push origin develop ; start-sleep -milliseconds 30

   # Switch to develop branch and update if it exists
   git checkout develop ; start-sleep -milliseconds 30
   git pull origin develop ; start-sleep -milliseconds 30
   ```

3. 🌿 **Create a working branch**
   - Suggest an appropriate English branch name based on the changes identified above
   - Do not include issue numbers
   ```
   git checkout -b feature/[feature-name]-[date] ; start-sleep -milliseconds 30
   ```

4. 💻 **Make fine-grained commits based on changes**
   - Based on changes confirmed with git status and git diff, **commit in detail for each work difference**
   - **Split by work units** such as feature additions, fixes, refactoring, etc. so that anyone viewing later can understand the work history
   - Describe content in Japanese so it's clear when viewed later
   - Add emojis to improve readability
   - Include only related changes in a single commit; separate unrelated changes into different commits
   - Use bullet points of about 3 lines to describe change content

   ```
   # Example: Split like file addition → feature implementation → style adjustment
   git add [related-files] ; start-sleep -milliseconds 30
   git commit -m "✨ [specific change content in Japanese]" ; start-sleep -milliseconds 30

   # Commit next work unit
   git add [next related files] ; start-sleep -milliseconds 30
   git commit -m "🔧 [next change content in Japanese]" ; start-sleep -milliseconds 30
   ```

5. 🔍 **Check for missing commits**
   ```
   git status ; start-sleep -milliseconds 30
   git diff ; start-sleep -milliseconds 30
   ```

6. 🔄 **Merge to develop branch**
   ```
   git checkout develop ; start-sleep -milliseconds 30
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]" ; start-sleep -milliseconds 30
   git push origin develop ; start-sleep -milliseconds 30
   ```

7. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date] ; start-sleep -milliseconds 30
   ```
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

## Differences from V4.0 Lite

- Appends "; start-sleep -milliseconds 30" at the end of each command to ensure reliable execution in PowerShell environment

## Notes

- Designed for PowerShell environment
- Adds sleep after each command to stabilize execution in PowerShell
- Commits are divided by feature units to clearly record work history
