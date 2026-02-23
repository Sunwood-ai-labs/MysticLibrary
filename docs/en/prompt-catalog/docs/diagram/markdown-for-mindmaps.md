---
title: Markdown Syntax for Mind Maps
description: Explanation of Markdown syntax for representing mind maps
category: docs
intent: markdown-for-mindmaps
audience:
  - Mind map creators
  - Documentation creators
  - LLM users
input_requirements:
  - Content to mind map
tags:
  - mind-map
  - Markdown
  - diagram
  - organization
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# Markdown Syntax for Mind Maps

## Intended Use

- Creating mind maps in Markdown
- Representing mind maps as LLM input
- Organizing information in simple text files

## Prompt Content

```text
# Markdown Syntax Document for Mind Maps

## Overview
This document explains Markdown syntax for representing mind maps. Using this syntax, you can create mind maps in simple text files and use them as LLM input.

## Headings
Use `#` for headings. More `#` symbols mean deeper hierarchy.

```
# Heading 1
## Heading 2
### Heading 3
```

## Lists
Use `*` or `1.` for lists. Nest lists to express hierarchy.

```
# Heading 1
* List 1-1
  * List 2
    * List 3
* List 1-2
```

## Checkboxes
Use `- [ ]` or `- [x]` for checkboxes.

```
# Tasks
- [ ] Incomplete task
- [x] Completed task
```

## Quotes
Use `>` for quotes. More `>` symbols mean deeper hierarchy.

```
# Topic
> Quote 1
>> Quote 2
```

## Text Decoration
Use `*`, `**`, or `~~` for text decoration.

```
# Heading
* Italic: *italic text*
* Bold: **bold text**
* Strikethrough: ~~strikethrough~~
```
```

## Usage

1. Understand this syntax
2. Write content to mind map in Markdown
3. Input to LLM to generate visual mind map

## Input Example

```markdown
# Project Plan
* Planning
  * Market research
  * Competitive analysis
* Development
  * Design
  * Implementation
* Testing
  * Unit testing
  * Integration testing
```

## Notes

- Express hierarchy with number of `#` symbols
- Use nested lists for hierarchy
- Use checkboxes for progress tracking
