---
title: Markdown Syntax for Mind Maps
description: A syntax guide for creating mind maps in simple text files and using them as LLM input
category: methodology
intent: markdown-mind-mapping
audience:
  - Information organizers
  - Learners
  - Prompt engineers
input_requirements:
  - Topics to organize
tags:
  - mind map
  - markdown
  - information organization
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# Markdown Syntax for Mind Maps

## Intended Use

- When you want to hierarchically organize thoughts and information
- When you want to input structured information to LLMs
- When you want to import to mind mapping tools

## Overview

This document explains Markdown syntax for representing mind maps. Using this syntax, you can create mind maps in simple text files and use them as LLM input.

## Syntax Guide

### Headings
Use `#` for headings. More `#` symbols mean deeper hierarchy.

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Lists
Use `*` or `1.` for lists. Nest lists to express hierarchy.

```markdown
# Heading 1
* List 1-1
  * List 2
    * List 3
* List 1-2

# Heading 2
1. List 1
2. List 2
   1. List 2-1
```

### Checkboxes
Use `- [ ]` or `- [x]` for checkboxes.

```markdown
# Tasks
- [ ] Incomplete task
- [x] Completed task
```

### Quotes
Use `>` for quotes. More `>` symbols mean deeper hierarchy.

```markdown
# Topic
> Quote 1
>> Quote 2
```

### Text Decoration
Use `*`, `**`, or `~~` for text decoration.

```markdown
# Heading
* Italic: *italic text*
* Bold: **bold text**
* Strikethrough: ~~strikethrough~~
```

### Code Entry
Surround code with backticks.

```markdown
# Code Examples
* `print("Hello, World!")`
```

### Collapsible Sections
Use `<details>` and `<summary>` tags for collapsible content. Note: Many mind map tools won't expand this.

```markdown
# <details><summary>Details</summary>Collapsed content</details>
```

### Links
Use `[Display Text](URL)` format for links.

```markdown
# Reference Links
* [Wikipedia](https://www.wikipedia.org/)
```

### Image Embedding
Use `![Alt Text](Image URL)` format for images. Longer alt text displays larger images.

```markdown
# Icons
* ![Icon](https://example.com/icon.png) Icon description
```

## How to Use

1. Place the topic at the top level with `#`
2. Hierarchically list related items with `*` or `1.`
3. Use checkboxes or quotes as needed
4. When inputting to LLM, provide text structured with this syntax

## Input Example

```markdown
# AI Technology
## Machine Learning
### Supervised Learning
* Regression
* Classification
### Unsupervised Learning
* Clustering
* Dimensionality Reduction
## Deep Learning
* CNN
* Transformer
```

## Output Example

Mind maps created with this syntax can be analyzed and summarized by LLMs while understanding the structure.

## Notes

- Many mind mapping tools support Markdown import
- Some tools may not display certain syntax (like collapsible sections) correctly
- When inputting to LLMs, unify indentation so the hierarchical structure is clear
