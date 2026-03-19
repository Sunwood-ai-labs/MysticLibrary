---
title: "GitHub Issue Workflow from diff V2"
description: "Workflow for creating GitHub Issues from Git diff, managing progress, committing, and closing"
canonical_id: "dev/workflow/gh-issue-workflow-from-diff-v2"
canonical_doc: "docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v2.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/workflow/gh-issue-workflow-from-diff-v2.md. Edit docs/ instead. -->

Execute the following process:

# Git Development Workflow Automation Prompt

1. 🔍 **Check change status before starting work**
    ```
    git status
    git diff
    ```

2. 📝 **Create an issue based on changes**
    ```
    # Identify necessary work from git status and git diff results, and create an issue
    gh issue create --title "✨ [task name related to changes confirmed in git status]" --body "## 📋 Overview
[overview of changes confirmed in git diff]

## 🎯 Purpose
[purpose of changes]

## 📝 Details
[describe detailed changes from git diff results]

## ⏰ Deadline
[deadline]"
    ```

3. 📊 **Report progress to the issue**
    ```
    gh issue comment [ISSUE_NUMBER] --body "## 🔄 Progress Status
[current progress percentage confirmed in git status]%

## ✅ Completed Work
[completed changes confirmed in git diff]

## 🚧 In Progress
[files being worked on confirmed in git status]

## 🔜 Next Steps
[remaining change plans]"
    ```

4. 🔄 **Switch to develop branch**
    ```
    git checkout develop
    git pull origin develop
    ```

5. 🌿 **Create a branch for this issue**
    ```
    git checkout -b feature/[feature name confirmed in git diff]-[ISSUE_NUMBER]
    ```

6. 💻 **Commit based on changes**
    - Create commit messages based on changes confirmed with git status and git diff
    - Include issue number (#[ISSUE_NUMBER])
    - Describe content in Japanese so it's clear when viewed later
    - Add emojis to improve readability
    - Split frequently and commit
    ```
    git add [changed files confirmed in git status]
    git commit -m "✨ #[ISSUE_NUMBER] [change content confirmed in git diff in Japanese]"
    ```

7. 🔍 **Check for missing commits**
    ```
    git status
    git diff
    ```

8. 🚀 **Push changes**
    ```
    git push origin feature/[feature name confirmed in git diff]-[ISSUE_NUMBER]
    ```

9. ✅ **Close the issue**
    ```
    gh issue close [ISSUE_NUMBER] --comment "## 🎉 Completed!

## ✨ Implementation Content
[overview of implementation content confirmed in git diff]

## 🔍 Review Results
[review information]

## 📈 Improvements
[future improvement ideas]"
    ```

10. 🔄 **Finally merge to develop branch**
    ```
    git checkout develop
    git merge --no-ff feature/[feature name confirmed in git diff]-[ISSUE_NUMBER] -m "🔀 Merge: #[ISSUE_NUMBER] [task name confirmed in git status]"
    git push origin develop
    ```

11. 🗑️ **Delete working branch**
    ```
    git branch -d feature/[feature name confirmed in git diff]-[ISSUE_NUMBER]
    git push origin --delete feature/[feature name confirmed in git diff]-[ISSUE_NUMBER]
    ```
