---
title: reveal.js Slide Design Template
description: Template defining basic styling and structure for reveal.js slides
category: writing
intent: slide-design-template
audience:
  - Presentation creators
  - Slide designers
input_requirements:
  - Font settings (Google Fonts, etc.)
  - Slide theme and style requirements
tags:
  - reveal.js
  - slides
  - template
  - styling
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# reveal.js Slide Design Template

## Intended Use

- Use as a base template for reveal.js slides
- Unify styling such as fonts, sizes, and alignment
- Define fragment animation effects

## Prompt

```markdown
<!-- Background image settings -->
<style>
/* Font settings */

.reveal .slides {
  font-family: "Shippori Mincho B1", serif;
  font-size: 30px;
  font-style: normal;
}

.left {
  text-align: left;
}

.body {
  font-size: 30px;
}

.reveal .slides h1,
.reveal .slides h2,
.reveal .slides h3 {
  font-weight: 200;
  font-size: 30px;
  text-align: left;
  font-family: "Shippori Mincho B1", serif;
}
</style>


# First Time with reveal.js

---

## List

* Apple
* Mandarin orange
* Peach

---

## Effects

Make larger {.fragment .grow}

Make smaller {.fragment .shrink}

Fade out {.fragment .fade-out}

Fade right {.fragment .fade-right}

Fade up {.fragment .fade-up}

Fade down {.fragment .fade-down}

Fade left {.fragment .fade-left}
```

## How to Use

1. Customize fonts and sizes within the `<style>` tag
2. Set slide titles with `#`
3. Insert slide separators with `---`
4. Add animation effects with `.fragment` class

## Input Example

Not required. Use this template as-is or customize as needed.

## Output Example

The prompt content above functions as reveal.js-compatible Markdown.

## Notes

- When using external fonts like Google Fonts, you need to load them separately in HTML
- Fragment animations are a reveal.js feature and will not work with other slide tools
- Text color should be adjusted according to background
- When using background images, add `data-background-image` attribute to slides
