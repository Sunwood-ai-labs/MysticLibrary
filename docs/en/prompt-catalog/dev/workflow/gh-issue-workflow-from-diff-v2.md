---
title: GitHub Issue Workflow from diff V2
description: Workflow for creating GitHub Issues from Git diff, managing progress, committing, and closing
category: dev
intent: gh-issue-workflow-from-diff-v2
audience:
  - Developers
  - Team Development Members
input_requirements:
  - GitHub repository
  - gh command installation and authentication
tags:
  - github
  - issue
  - workflow
  - gh
  - git-diff
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
canonical_id: "dev/workflow/gh-issue-workflow-from-diff-v2"
prompt_source: "prompts/docs-first/dev/workflow/gh-issue-workflow-from-diff-v2_EN.md"
---

# GitHub Issue Workflow from diff V2

A workflow prompt for creating GitHub Issues from Git diff results, managing progress, committing, and closing.

## Intended Use

- Analyze work content from Git diff and create issues
- Track work with commits that include issue numbers
- Report progress to issues

## Prompt Text

```text
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
```

## How to Use

1. Paste the prompt to AI
2. Execute after work is completed in the Git repository
3. Automatically executes from issue creation to merge

## Input Example

No special input required. Simply execute in a Git repository with changes, and diffs will be automatically analyzed to create issues.

## Output Example

- Issue is created from analysis of Git diff
- Progress report is reported to issue
- Commit with issue number is created
- Issue is closed
- Merged to develop branch

## Notes

- gh command must be installed
- gh command must be authenticated
