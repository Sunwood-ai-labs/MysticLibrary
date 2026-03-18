---
title: Git Release Notes Creation Prompt V0
description: Prompt to create release notes from commit history and code differences between specified tags
category: dev
intent: git-release-notes-generator-v0
audience:
  - Developers
  - Release Managers
  - Project Managers
input_requirements:
  - Git repository access
  - Tag names
tags:
  - git
  - release
  - release-notes
  - changelog
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
canonical_id: "dev/templates/git-release-notes-generator-v0"
prompt_source: "prompts/docs-first/dev/templates/git-release-notes-generator-v0_EN.md"
---

# Git Release Notes Creation Prompt V0

A prompt to create detailed release notes from commit history and code differences between specified tags.

## Intended Use

- Create release notes for Git repositories
- Analyze differences between tags and summarize changes
- Extract issue numbers to track related changes

## Prompt Text

```text
# Git Release Notes Creation Prompt V0

Follow the steps below to create release notes from the commit history and code differences between specified tags in a GitHub repository.

Use tags v1.23.0 and v1.22.0 to create release notes for v1.23.0.

## Required Commands

```bash
# Get commits between specified tags
git log [previous-tag]..[current-tag] --pretty=format:"%h %s"

# Get code differences between specified tags
git diff [previous-tag] [current-tag] --name-status
git diff [previous-tag] [current-tag]

# Get statistics
Commit count: git log [previous-tag]..[current-tag] --oneline | wc -l
Contributor count: git log [previous-tag]..[current-tag] --format="%an" | sort -u | wc -l
Changed files count: git diff --name-only [previous-tag] [current-tag] | wc -l
```

## Processing Steps

1. Extract issue numbers (#number format) from commit messages.

2. Analyze code differences (`full_diff.txt`) to grasp the details of changes:
   - Newly added functions and features
   - Details of fixed bugs
   - Specific changes in performance improvements
   - Details of configuration changes and version upgrades

3. Categorize commits:
   - ✨ New Features: Commits containing keywords like feat, add, 新機能, 追加
   - 🐛 Bug Fixes: Commits containing keywords like fix, 修正, バグ
   - ⚡ Performance Improvements: Commits containing keywords like perf, performance, 最適化
   - 📚 Documentation: Commits containing keywords like doc, ドキュメント
   - 🔧 Configuration Changes: Commits containing keywords like config, 設定, 環境
   - 🔄 Other Changes: Commits that don't fit into the above categories

4. For each change, add specific information obtained from code differences.

## Release Notes Format

Create release notes in the following structure:

```markdown
# 🚀 Release Notes: [current-tag]

## 🗓️ [current-date]

## ✨ New Features
- 🆕 [commit message] ([issue number])
  - [detailed information from code diff]

## 🐛 Bug Fixes
- 🔧 [commit message] ([issue number])
  - [bug details and fix content]

## ⚡ Performance Improvements
- ⚡ [commit message] ([issue number])
  - [performance improvement details]

## 📚 Documentation
- 📝 [commit message] ([issue number])
  - [documentation update details]

## 🔧 Configuration Changes
- 🔧 [commit message] ([issue number])
  - [configuration change details]

## 🔄 Other Changes
- 🔄 [commit message] ([issue number])
  - [change details]

## 📊 Statistics
- 📦 Commits: [number]
- 👥 Contributors: [number]
- 📄 Changed Files: [number]
- 📈 Lines Added: [number]
- 📉 Lines Deleted: [number]
```

## Notes

- Use emojis effectively to improve visibility
- Always include issue numbers for each item
- Use code difference information to explain technical changes in detail
- Pay special attention to important changes and breaking changes, making them prominent
- Order items within the same category by importance
```

## How to Use

1. Paste the prompt to AI
2. Specify tag names (e.g., v1.23.0 and v1.22.0)
3. Release notes are automatically generated

## Input Example

```
Use tags v1.23.0 and v1.22.0 to create release notes for v1.23.0
```

## Output Example

```markdown
# 🚀 Release Notes: v1.23.0

## 🗓️ 2026-02-23

## ✨ New Features
- 🆕 Add user authentication feature (#123)
  - Implement JWT authentication
  - Add login/logout functionality

## 🐛 Bug Fixes
- 🔧 Fix file upload bug (#124)
  - Fix upload failure for large files

## 📊 Statistics
- 📦 Commits: 15
- 👥 Contributors: 3
- 📄 Changed Files: 28
```

## Differences from V1

- V0: Create release notes from differences between tags
- V1: Use gh command to create GitHub releases

## Notes

- Requires access to Git repository
- Tags must be properly created
