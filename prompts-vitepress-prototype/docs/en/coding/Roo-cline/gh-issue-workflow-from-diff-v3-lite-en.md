---
title: "Git Simple Development Workflow V3 Lite EN"
sourcePath: "prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en_EN.md`
> Japanese: [JA](/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en)

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
