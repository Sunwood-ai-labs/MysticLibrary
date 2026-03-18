---
title: "GitHub Issue Workflow from diff V3 Lite"
description: "A prompt for executing a simple development workflow from Git diff results (V3 Lite version with detailed commit support)"
canonical_id: "dev/workflow/gh-issue-workflow-from-diff-v3-lite"
canonical_doc: "docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v3-lite.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v3-lite.md. Edit docs/ instead. -->

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
