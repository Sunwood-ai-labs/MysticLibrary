---
title: Roo-Cline Release Header SVG Task
description: Task prompt for creating a release-note header SVG with repository name and large version label based on an existing reference asset.
category: dev
intent: roo-cline-release-header-svg-task
audience:
  - Developers
  - Release managers
  - Designers
input_requirements:
  - Reference SVG path
  - Target repository name
  - Version to display
tags:
  - roo-cline
  - workflow
  - issue-driven
status: active
owner: prompt-lb-team
last_reviewed: 2026-03-18
canonical_id: "dev/workflow/roo-cline-release-header-svg-task"
legacy_source: "prompts/coding/Roo-cline/task2_EN.md"
prompt_source: "prompts/docs-first/dev/workflow/roo-cline-release-header-svg-task_EN.md"
---

# Roo-Cline Release Header SVG Task

## Intended Use

- When you want to create a release-note header asset through an issue-driven workflow
- When you want to reuse an existing header concept with repo-specific branding

## Prompt Body

````text
First, identify tasks and register them as issues to execute the following instructions

When changing files, commit with the issue number assigned

Also, report progress via comments

## Instructions

Create a header image for release notes

For the header image SVG, refer to
C:\Prj\MCP\command-executor\assets\header.svg

Create an SVG with a large version number in the assets folder for release notes
Include the repository name in the subtitle
````

## Notes

- The prompt includes issue registration and progress reporting expectations in addition to the image work itself.
