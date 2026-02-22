---
title: "Git Diff Analysis Auto-Commit Prompt V4.1 lite"
sourcePath: "prompts/coding/Roo-cline/git_auto_commit_prompt-v4-1-lite_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/git_auto_commit_prompt-v4-1-lite_EN.md`
> Japanese: [JA](/coding/Roo-cline/git_auto_commit_prompt-v4-1-lite)

# Git Diff Analysis Auto-Commit Prompt V4.1 lite

Execute the following process:

Analyze the results of git status and git diff, and automatically execute appropriate branch creation, commit, and merge operations.
However, do not execute commands that would enter interactive mode.

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

3. 🌿 **Create a working branch**
   - Suggest an appropriate English branch name based on the changes identified above
   - Do not include issue numbers
   ```
   git checkout -b feature/[feature-name]-[date]
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
   git add [related-files]
   git commit -m "✨ [specific change content in Japanese]"

   # Commit next work unit
   git add [next related files]
   git commit -m "🔧 [next change content in Japanese]"
   ```

5. 🔍 **Check for missing commits**
   ```
   git status
   git diff
   ```

6. 🔄 **Merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```

7. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   ```
