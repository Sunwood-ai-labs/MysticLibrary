---
title: "Git Auto Commit Prompt V4.0 Lite EN (English Commit Version)"
description: "Prompt to automatically execute appropriate branch creation, detailed commits, and merge by analyzing git status and diff results (English commit message version)"
canonical_id: "dev/templates/git-auto-commit-prompt-v4-lite-en"
canonical_doc: "docs/en/prompt-catalog/dev/templates/git-auto-commit-prompt-v4-lite-en.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/templates/git-auto-commit-prompt-v4-lite-en.md. Edit docs/ instead. -->

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
