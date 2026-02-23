---
title: Git Release Notes Creation Prompt V1
description: Prompt to create release notes from commit history and code differences between specified tags, and create GitHub release with gh command
category: dev
intent: git-release-notes-generator-v1
audience:
  - Developers
  - Release Managers
  - Project Managers
input_requirements:
  - Git repository access
  - Tag names
  - gh command authentication
tags:
  - git
  - release
  - release-notes
  - changelog
  - github
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git Release Notes Creation Prompt V1

A prompt to create release notes from commit history and code differences between specified tags, and create GitHub release with gh command.

## Intended Use

- Create release notes for Git repositories
- Analyze differences between tags and summarize changes
- Create GitHub releases using gh command

## Prompt Text

```text
# Git Release Notes Creation Prompt V1

Please create release notes from the commit history and code differences between specified tags in a GitHub repository, following the steps below.

Create release notes for v0.1.0
Compare differences with the previous tag

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

2. Analyze code differences to understand changes in more detail.
   - Newly added functions and features
   - Details of fixed bugs
   - Specific changes for performance improvements
   - Details of configuration changes and version upgrades

3. Categorize commits:
   - ✨ New Features: Commits containing keywords such as feat, add, new features, addition
   - 🐛 Bug Fixes: Commits containing keywords such as fix, correction, bug
   - ⚡ Performance Improvements: Commits containing keywords such as perf, performance, optimization
   - 📚 Documentation: Commits containing keywords such as doc, documentation
   - 🔧 Configuration Changes: Commits containing keywords such as config, settings, environment
   - 🔄 Other Changes: Commits that don't fall into the above categories

4. For each change, add specific information obtained from code differences.

5. Use the gh command to create release notes
   - * gh command is already authenticated

## Release Notes Format

Please create release notes in the following structure:

```markdown
# 🚀 Release Notes: [current-tag]

## 🗓️ [current-date]

## ✨ New Features
- 🆕 [commit message] ([issue number])
  - [detailed information from code differences]

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
- 📦 Commit count: [number]
- 👥 Contributor count: [number]
- 📄 Changed files count: [number]
- 📈 Lines added: [number]
- 📉 Lines deleted: [number]
```

## Notes

- Use emojis effectively to improve visibility
- Always include issue numbers for each item
- Use code difference information to explain technical changes in detail
- Pay special attention to important changes and breaking changes, and make them prominent
- Arrange items within the same category in order of importance
```

## How to Use

1. Paste the prompt to AI
2. Specify tag name (e.g., v0.1.0)
3. Release notes are automatically generated and GitHub release is created

## Input Example

```
Create release notes for v0.1.0
Compare differences with the previous tag
```

## Output Example

GitHub release is created with gh command and release notes are configured.

## Differences from V0

- V0: Create release notes from differences between tags
- V1: Use gh command to create GitHub release

## Notes

- Requires access to Git repository
- Tags must be properly created
- gh command must be authenticated
