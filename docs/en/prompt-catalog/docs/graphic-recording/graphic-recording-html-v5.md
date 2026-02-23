---
title: Graphic Recording HTML Creation V5 UI/UX Theme
description: Prompt for generating graphic recording HTML with UI/UX color palette and large icons
category: docs
intent: graphic-recording-html-uiux
audience:
  - Facilitators
  - Presenters
  - Content creators
input_requirements:
  - Text content to convert to graphic recording
tags:
  - graphic-recording
  - infographic
  - html-generation
  - ui-ux-theme
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graphic Recording HTML Creation V5 UI/UX Theme

## Intended Use

- Create graphic recording with UI/UX themed color palette
- Organize information visually with large icons and list format
- Emphasize points with handwritten-style speech bubbles

## Prompt

```text
# Graphic Recording Style Infographic Conversion Prompt V5

## Purpose
Please convert the following content into a Japanese graphic recording-style HTML infographic utilizing **large Font Awesome icons** and **handwritten-style speech bubbles**. Place one large icon in each card and actively use small inline icons to visually represent information in an easy-to-understand manner.

## Design Specifications
### 1. Color Scheme (UI/UX Theme)
```
<palette>
<color name='UI/UX-1' rgb='1B6C8C' r='26' g='108' b='140' />
<color name='UI/UX-2' rgb='BF8136' r='191' g='129' b='53' />
<color name='UI/UX-3' rgb='F2E8E4' r='242' g='231' b='227' />
<color name='UI/UX-4' rgb='260101' r='38' g='0' b='0' />
<color name='UI/UX-5' rgb='BF5656' r='191' g='86' b='86' />
</palette>
```

### 2. Graphic Recording Elements
- Place everything on a canvas with white background (#FFF8F5)
- Place **one extra-large theme icon** in each card (approximately fa-5x)
- **Structure card content in list format with small icons**
- Add points and supplementary information with **handwritten-style speech bubbles**
- Divide content into multiple sections and organize in card format
- Visually emphasize keywords in tag format
- Display code samples in preview format

### 3. Typography
- Title: 36px, bold, with extra-large related icon (fa-6x or larger)
- Card title: 24px, with large icon (fa-5x)
- List items: 16px, with small icons
- Speech bubble text: handwritten font, 15px
- Font specification: Kaisei Decol, Yomogi, Zen Kurenaido

### 4. Layout
- Overall: **4-column layout** (responsive)
- Header: Title with ultra-large icon (fa-7x) + date
- Each card: One large icon + list-format content + speech bubble
- Card interior: Organize information in structured list format

### 5. Icon Usage Guidelines
- Large icon per card (only one): **fa-5x〜fa-7x**
- Small icons for list items: **fa-lg**
- Recommended icons by concept:
  - Thinking/ideas: fa-brain, fa-lightbulb, fa-thought-bubble
  - Programming: fa-code, fa-terminal, fa-file-code
  - Information: fa-info-circle, fa-circle-info, fa-book
  - Positive elements: fa-thumbs-up, fa-check, fa-circle-check

---

## Text/Article to Convert
[Enter text content to convert to graphic recording here]
```

## How to Use

1. Copy the prompt and paste into AI chat tool
2. Enter the text content you want to convert in the text/article section
3. Display and save the generated HTML in browser

## Input Example

```
## Text/Article to Convert
### Programming Learning Points
- Create practical projects
- Get code reviews
- Join communities
- Keep up with latest technologies
```

## Output Example

Graphic recording HTML with UI/UX color palette (blue #1B6C8C, orange #BF8136, cream #F2E8E4, red #260101, pink #BF5656) in 4-column layout will be generated.

## Notes

- Each card has one large icon (fa-5x〜fa-7x)
- Information is structured in list format
- Supplementary information added with handwritten speech bubbles
- Responsive design with column count changing based on screen size
