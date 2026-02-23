---
title: reveal.js Slide Converter Prompt
description: Prompt for converting Markdown content to reveal.js format slides
category: writing
intent: slide-converter
audience:
  - Presentation creators
  - Slide designers
input_requirements:
  - design file (reveal.js format template)
  - text file (content to be converted to slides)
tags:
  - reveal.js
  - slides
  - presentation
  - Markdown
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# reveal.js Slide Converter Prompt

## Intended Use

- Convert Markdown documents to reveal.js format slides
- Create unified slides by combining design templates with content
- Automatically generate slides with background images and styling

## Prompt

```text
# Objective

## References
- `design` = [./def_slide_design2.md]
- `text` = [./def_slide_text1.md]

## TODO

1. Refer to the `design` file and add appropriate background images to all pages.
2. Convert the `text` file content to reveal.js format markdown, without including code blocks.
3. Accurately reflect the positions of -- specified in the `design` file.
4. Separate each slide with -- and organize for readability.
5. Always set text color to white and optimize contrast with background color.
6. Apply additional styling to each slide as necessary to maintain overall consistency and aesthetics.
```

## How to Use

1. Prepare design file and text file
2. Replace paths in the prompt with actual file paths
3. Input the prompt to AI to generate reveal.js format slides

## Input Example

```text
# Objective

## References
- `design` = [https://example.com/slide-template.md]
- `text` = [https://example.com/presentation-content.md]

## TODO

1. Maintain styling from design file
2. Reflect heading structure from text file in slide composition
3. Use --- for section separators
```

## Output Example

```markdown
<!-- Background image settings -->
<style>
.reveal .slides {
  font-family: "Shippori Mincho B1", serif;
  font-size: 30px;
}
</style>

# Slide Title

---

## Section 1

* List item 1
* List item 2

---

## Section 2

Content description
```

## Notes

- Design file and text file must be prepared separately
- Replace background image URLs with appropriate ones
- Text color is fixed to white, so pay attention to background contrast
- Use reveal.js syntax (--- for section separators) correctly
