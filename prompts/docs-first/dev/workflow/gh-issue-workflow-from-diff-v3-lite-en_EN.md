---
title: "GitHub Issue Workflow from diff V3 Lite EN (English Commit Version)"
description: "Prompt for executing simple development workflow from Git diff (V3 Lite EN version with English commit messages)"
canonical_id: "dev/workflow/gh-issue-workflow-from-diff-v3-lite-en"
canonical_doc: "docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v3-lite-en.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v3-lite-en.md. Edit docs/ instead. -->

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
