---
title: Git Release Notes Generator Prompt
description: Automated prompt for generating detailed release notes with emojis from Git diffs and commit history
category: dev
intent: git-release-notes-generator
audience:
  - Release managers
  - Project managers
  - OSS maintainers
input_requirements:
  - Access to Git repository
  - Two tags to compare (previous and current)
  - gh command authentication setup
tags:
  - git
  - release-notes
  - github
  - documentation
  - automation
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Release Notes Generator Prompt

## 想定用途

- Automatically generate release notes from diffs between Git tags
- Summarize detailed changes by analyzing commit history and code diffs
- Create GitHub releases using `gh` command

## プロンプト本文

```text
# Git Release Notes Creation Prompt V1

Please create release notes for a GitHub repository by following the steps below, analyzing commit history and code diffs between specified tags.

Create release notes for v0.1.0
Compare with the previous tag

## Required Commands

```bash
# Get commits between specified tags
git log [previous_tag]..[current_tag] --pretty=format:"%h %s"

# Get code diffs between specified tags
git diff [previous_tag] [current_tag] --name-status
git diff [previous_tag] [current_tag]

# Get statistics
Commit count: git log [previous_tag]..[current_tag] --oneline | wc -l
Contributor count: git log [previous_tag]..[current_tag] --format="%an" | sort -u | wc -l
Changed file count: git diff --name-only [previous_tag] [current_tag] | wc -l
```

## Processing Steps

1. Extract issue numbers (#数字 format) from commit messages.

2. Analyze code diffs to understand detailed changes:
   - Newly added functions and features
   - Details of fixed bugs
   - Specific performance improvement changes
   - Configuration changes and version upgrade details

3. Classify commits into categories:
   - ✨ New Features: Commits containing keywords like feat, add, 新機能, 追加
   - 🐛 Bug Fixes: Commits containing keywords like fix, 修正, バグ
   - ⚡ Performance Improvements: Commits containing keywords like perf, performance, 最適化
   - 📚 Documentation: Commits containing keywords like doc, ドキュメント
   - 🔧 Configuration Changes: Commits containing keywords like config, 設定, 環境
   - 🔄 Other Changes: Commits not fitting above categories

4. For each change, add specific information obtained from code diffs.

5. Create release notes using gh command
  - * gh command is already authenticated

## Release Notes Format

Create release notes in the following structure:

```markdown
# 🚀 Release Notes: [current_tag]

## 🗓️ [current_date]

## ✨ New Features
- 🆕 [commit_message] ([issue_number])
  - [detailed_info_from_code_diff]

## 🐛 Bug Fixes
- 🔧 [commit_message] ([issue_number])
  - [bug_details_and_fix]

## ⚡ Performance Improvements
- ⚡ [commit_message] ([issue_number])
  - [performance_improvement_details]

## 📚 Documentation
- 📝 [commit_message] ([issue_number])
  - [documentation_update_details]

## 🔧 Configuration Changes
- 🔧 [commit_message] ([issue_number])
  - [configuration_change_details]

## 🔄 Other Changes
- 🔄 [commit_message] ([issue_number])
  - [change_details]

## 📊 Statistics
- 📦 Commits: [number]
- 👥 Contributors: [number]
- 📄 Files Changed: [number]
- 📈 Additions: [number]
- 📉 Deletions: [number]
```

## Notes

- Use emojis effectively to improve visibility
- Always include issue numbers in each item
- Use code diff information to explain technical changes in detail
- Pay special attention to important and breaking changes, making them prominent
- Arrange items within the same category by importance
```

## 使い方

1. Confirm working branch in target repository
2. Identify tags to compare (previous and current)
3. Replace `[previous_tag]` and `[current_tag]` in the prompt and execute
4. Review generated release notes and edit if necessary

## 入力例

```text
Please create release notes for v0.1.0.
Since there is no previous tag, get the diff from the first commit to v0.1.0.
```

## 出力例

```markdown
# 🚀 Release Notes: v0.1.0

## 🗓️ 2026-02-23

## ✨ New Features
- 🆕 Implemented basic MCP server structure (#1)
  - Added server base class compliant with Model Context Protocol
  - Implemented tool definition and handler registration functionality

## 📚 Documentation
- 📝 Created README.md (#2)
  - Added project overview and installation instructions
  - Documented usage and API reference

## 📊 Statistics
- 📦 Commits: 15
- 👥 Contributors: 2
- 📄 Files Changed: 8
- 📈 Additions: 542
- 📉 Deletions: 23
```

## 注意点

- If tags don't exist, use diff from first commit
- If issue numbers aren't in commit messages, display "(#N/A)"
- Add "⚠️ Breaking Changes" section if there are breaking changes
- Unify emojis within each category
