---
title: Git Auto Commit Prompt V4.0 Lite
description: Automated prompt for analyzing Git status and diffs to execute appropriate branch creation, granular commits, and merge
category: dev
intent: git-auto-commit-prompt
audience:
  - Developers
  - Team development members
  - Git operation administrators
input_requirements:
  - Access to Git repository
  - Work diff information
tags:
  - git
  - commit
  - branch-management
  - workflow
  - automation
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Auto Commit Prompt V4.0 Lite

## 想定用途

- Automatically create appropriate commit messages by analyzing Git diffs
- Automate complete Git operations from branch creation to merge
- Achieve granular commit splitting for clear work history

## プロンプト本文

```text
# Git Diff Analysis Auto Commit Prompt V4.0 lite

Execute the following process:

Analyze git status and git diff results, automatically execute appropriate branch creation, commits, and merge

## Development Flow Steps

1. 🔍 **Check change status before work**
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
   - Propose appropriate English branch name from the above changes
   - Do not include issue number
   ```
   git checkout -b feature/[feature_name]-[date]
   ```

4. 💻 **Commit finely based on changes**
   - Based on changes confirmed with git status and git diff, **commit finely for each work diff**
   - Split by work units like feature addition, fix, refactoring **so anyone can understand work history later**
   - Write in Japanese so it's understandable when viewed later
   - Add emojis to improve readability
   - Include only related changes in one commit; split unrelated changes into separate commits
   - Use bullet points (about 3 lines) to describe changes

   ```
   # Example: Split like file addition → feature implementation → style adjustment
   git add [related_files]
   git commit -m "✨ [specific_change_content_in_Japanese]"

   # Commit next work unit
   git add [next_related_files]
   git commit -m "🔧 [next_change_content_in_Japanese]"
   ```

5. 🔍 **Check for missing commits**
   ```
   git status
   git diff
   ```

6. 🔄 **Merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature_name]-[date] -m "🔀 Merge: [task_name]"
   git push origin develop
   ```

7. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature_name]-[date]
   ```
```

## 使い方

1. Check current change status with `git status` and `git diff`
2. Execute branch creation, commits, and merge following the prompt
3. Write commit messages in Japanese with emojis

## 入力例

```text
Please create appropriate branch and commits from current changes.
```

## 出力例

```text
## 🔍 Confirmed change status:
- New files: src/components/Button.tsx
- Changed files: src/App.tsx, src/styles.css

## 🌿 Creating branch:
git checkout -b feature/button-component-2026-02-23

## 💻 Splitting commits:
1. ✨ Create base button component
   - Added src/components/Button.tsx

2. 🔧 Integrate button component into App
   - Imported and used Button in src/App.tsx

3. 🎨 Adjust button styles
   - Added button styles to src/styles.css

## 🔄 Merging to develop branch:
git checkout develop
git merge --no-ff feature/button-component-2026-02-23 -m "🔀 Merge: Add button component"
```

## 注意点

- Use English branch names that represent feature content
- Don't include issue numbers in branch names
- Split commits finely by work unit
- Write commit messages in Japanese
- Use emojis to improve visibility
- Separate unrelated changes into different commits
