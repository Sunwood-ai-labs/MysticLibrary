---
title: "Markdown Syntax Document for Mind Maps"
sourcePath: "prompts/mind-mapping/markdown-for-mindmaps_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/mind-mapping/markdown-for-mindmaps_EN.md`
> Japanese: [JA](/mind-mapping/markdown-for-mindmaps)

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

# Heading 2
1. List 1
2. List 2
   1. List 2-1
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

## Code Entry
Surround code with backticks.

```
# Code Examples
* `print("Hello, World!")`
```

## Collapsible Sections
Use `&lt;details&gt;` and `&lt;summary&gt;` tags for collapsible content. Note: Many mind map tools won't expand this.

```
# <details><summary>Details</summary>Collapsed content</details>
```

## Links
Use `[Display Text](URL)` format for links.

```
# Reference Links
* [Wikipedia](https://www.wikipedia.org/)
```

## Image Embedding
Use `![Alt Text](Image URL)` format for images. Longer alt text displays larger images.

```
# Icons
* ![Icon](https://example.com/icon.png) Icon description
```

Above are the basics of Markdown syntax for representing mind maps. Use this syntax to create mind maps and utilize them as LLM input.
