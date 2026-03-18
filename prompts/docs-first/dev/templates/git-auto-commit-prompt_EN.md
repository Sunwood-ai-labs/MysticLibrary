---
title: "Git Auto Commit Prompt V4.0 Lite"
description: "Automated prompt for analyzing Git status and diffs to execute appropriate branch creation, granular commits, and merge"
canonical_id: "dev/templates/git-auto-commit-prompt"
canonical_doc: "docs/en/prompt-catalog/dev/templates/git-auto-commit-prompt.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/templates/git-auto-commit-prompt.md. Edit docs/ instead. -->

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
