---
title: Git Release Notes Generator V1
description: Prompt for creating release notes from commit history and code diffs between Git tags
category: dev
intent: git-release-notes-generator
audience:
  - Release managers
  - Developers
  - Project leaders
input_requirements:
  - Git repository
  - Target tags
  - gh command (GitHub CLI)
tags:
  - Git
  - release-notes
  - GitHub
  - version-control
status: stable
owner: dev-team
last_reviewed: 2026-02-23
canonical_id: "dev/git/git-release-notes-generator-v1"
prompt_source: "prompts/docs-first/dev/git/git-release-notes-generator-v1_EN.md"
---

# Git Release Notes Generator V1

## Intended Use

- Automatically create release notes from commit history between Git tags
- Document detailed changes from code diffs
- Publish release notes on GitHub

## Prompt

```
# Git Release Notes Generator Prompt V1

Follow the steps below to create release notes from commit history and code diffs between specified tags in a GitHub repository.

Create release notes for v0.1.0
Compare with the previous tag

## Required Commands

```bash
# Get commits between specified tags
git log [previous_tag]..[current_tag] --pretty=format:"%h %s"

# Get code diffs between specified tags
git diff [previous_tag]..[current_tag] --name-status
git diff [previous_tag]..[current_tag]

# Get statistics
Commits: git log [previous_tag]..[current_tag] --oneline | wc -l
Contributors: git log [previous_tag]..[current_tag] --format="%an" | sort -u | wc -l
Changed files: git diff --name-only [previous_tag]..[current_tag] | wc -l
```

## Processing Steps

1. Extract Issue numbers (#number format) from commit messages.

2. Analyze code diffs to better understand changes:
   - Newly added functions and features
   - Details of bug fixes
   - Specific performance improvement changes
   - Config changes and version upgrades

3. Categorize commits:
   - ✨ New Features: commits with feat, add, new features, addition keywords
   - 🐛 Bug Fixes: commits with fix, fix, bug keywords
   - ⚡ Performance: commits with perf, performance, optimization keywords
   - 📚 Documentation: commits with doc, documentation keywords
   - 🔧 Config Changes: commits with config, settings, environment keywords
   - 🔄 Other Changes: commits not in above categories

4. Add specific information from code diffs for each change.

5. Use gh command to create release notes
   - gh command is already authenticated

## Release Note Format

Create release notes with the following structure:

```markdown
# 🚀 Release Notes: [current_tag]

## 🗓️ [current_date]

## ✨ New Features
- 🆕 [commit_message] ([Issue_number])
  - [detailed info from code diff]

## 🐛 Bug Fixes
- 🔧 [commit_message] ([Issue_number])
  - [bug details and fix content]

## ⚡ Performance Improvements
- ⚡ [commit_message] ([Issue_number])
  - [performance improvement details]

## 📚 Documentation
- 📝 [commit_message] ([Issue_number])
  - [documentation update details]

## 🔧 Config Changes
- 🔧 [commit_message] ([Issue_number])
  - [config change details]

## 🔄 Other Changes
- 🔄 [commit_message] ([Issue_number])
  - [change details]

## 📊 Statistics
- 📦 Commits: [number]
- 👥 Contributors: [number]
- 📄 Files Changed: [number]
- 📈 Lines Added: [number]
- 📉 Lines Removed: [number]
```

## Notes

- Use emojis effectively for visual appeal
- Always include Issue numbers for each item
- Leverage code diff information for detailed technical explanations
- Pay special attention to important and breaking changes, make them prominent
- Order items within categories by importance
```

## How to Use

1. Confirm target tag is created in Git repository
2. Enter prompt into AI chat tool
3. Specify target tag name and previous tag name
4. Review and publish generated release notes

## Input Example

```
Create release notes for v1.0.0
Compare with previous tag (v0.9.0)
```

## Output Example

- Categorized list of changes
- Detailed descriptions with Issue numbers
- Statistics (commits, contributors, files changed, etc.)
- Markdown format with emojis for readability
