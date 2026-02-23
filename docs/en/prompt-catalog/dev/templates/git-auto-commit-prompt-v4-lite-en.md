---
title: Git Auto Commit Prompt V4.0 Lite EN (English Commit Version)
description: Prompt to automatically execute appropriate branch creation, detailed commits, and merge by analyzing git status and diff results (English commit message version)
category: dev
intent: git-auto-commit-prompt-v4-lite-en
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
  - english
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Auto Commit Prompt V4.0 Lite EN (English Commit Version)

A prompt that automatically creates appropriate English commit messages by analyzing Git diffs and automates the entire Git operation from branch creation to merge.

## Intended Use

- Automatically create appropriate English commit messages by analyzing Git diffs
- Automate entire Git operations from branch creation to merge
- Achieve detailed commit division to clearly record work history
- Support international team development

## Prompt Text

```text
# Git Diff Analysis Auto-Commit Prompt V4.0 lite EN

Execute the following process:

Analyze the results of git status and git diff, and automatically perform appropriate branch creation, commits, and merges.

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```
   git status
   git diff
   ```

2. 🌿 **Check/create/switch to develop branch**
   ```
   # Check if develop branch exists
   git branch -a | grep develop

   # Create develop branch if it doesn't exist
   git checkout -b develop
   git push origin develop

   # Switch to develop branch and update if it exists
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **Create working branch**
   - Suggest an appropriate English branch name based on the changes above
   - Do not add issue numbers
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Make fine-grained commits based on changes**
   - Based on changes confirmed with git status and git diff, **make fine-grained commits for each work difference**
   - **So that anyone reviewing later can understand the work history**, divide into work units such as feature additions, fixes, refactoring, etc.
   - Describe content in English so it's understandable when viewed later
   - Add emojis to improve readability
   - Include only related changes in one commit; separate unrelated changes into different commits
   - Use bullet points of about 3 lines to describe changes

   ```
   # Example: Split like file addition → feature implementation → style adjustment
   git add [related files]
   git commit -m "✨ Add new feature: [specific change description in English]
   - Implement core functionality
   - Add validation logic
   - Update documentation"

   # Commit next work unit
   git add [next related files]
   git commit -m "🔧 Fix issue: [specific fix description in English]
   - Resolve bug in validation
   - Update error handling
   - Add unit tests"
   ```

5. 🔍 **Check for any missing commits**
   ```
   git status
   git diff
   ```

6. 🔄 **Merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [Task description in English]"
   git push origin develop
   ```

7. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   ```
```

## How to Use

1. Paste the prompt to AI
2. Execute after work is completed in the Git repository
3. Automatically executes from branch creation to merge

## Input Example

No special input required. Simply execute in a Git repository with changes, and diffs will be automatically analyzed to create appropriate English commits.

## Output Example

- Branch creation with appropriate branch name
- Detailed English commits according to work content (with emojis)
- Merge to develop branch
- Deletion of working branch

## Differences from V4.0 Lite (Japanese Version)

- Commit messages are in English
- Supports international team development

## Notes

- Commit messages are created in English
- Commits are divided by feature units to clearly record work history
