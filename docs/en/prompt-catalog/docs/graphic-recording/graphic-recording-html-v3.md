---
title: Graphic Recording HTML V3
description: Prompt for generating graphic recording HTML using handwritten-style fonts and Font Awesome icons
category: docs
intent: graphic-recording-html
audience:
  - Facilitators
  - Presenters
  - Content creators
input_requirements:
  - Text content to transform into graphic recording
tags:
  - graphic-recording
  - infographic
  - html-generation
  - font-awesome
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graphic Recording HTML V3

## Intended Use

- Visually preserve meeting and presentation content as graphic recording
- Transform text-only minutes into intuitive infographics
- Create materials that make it easy to grasp the overall picture

## Prompt

```text
# Graphic Recording HTML Creation Prompt V3

Please reproduce the graphic recording in HTML according to the following requirements.

## What is Graphic Recording
Graphic recording is a technique for summarizing the content of meetings and presentations in real-time using diagrams, illustrations, and text. It makes it easier to grasp the overall picture of discussions and encourages idea generation.

## Basic Requirements
- Use handwritten-style fonts (Kaisei Decol, Yomogi, Zen Kurenaido)
- Use Font Awesome icons and emojis instead of illustrations
- Card backgrounds should be transparent, no borders, blend with background
- Express handwritten-style speech bubbles with CSS (thin transparent background)
- Responsive design
- 5-column layout (container width 2000px)
- Wide spacing between cards (about 40px)
- Grid gap: 30px

## Typography
- Title: 32px, gradient effect, bold, with Font Awesome icons on left and right
- Subtitle: 16px, #475569, with related Font Awesome icons
- Section heading: 18px, #1e40af, with Font Awesome icon on the left
- Body: 14px, #334155, line-height 1.4, small related Font Awesome icons/emojis for keywords
- Font specification:
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

## Color Palette
```
<palette>
<color name='Salmon-1' rgb='F2B705' />
<color name='Salmon-2' rgb='F29F05' />
<color name='Salmon-3' rgb='F2CA99' />
<color name='Salmon-4' rgb='F25C05' />
<color name='Salmon-5' rgb='F2935C' />
</palette>
```

Transform the input content into graphic recording format according to this prompt.

## Content to Transform
[Enter text here]
```

## How to Use

1. Copy the prompt and paste into an AI chat tool
2. Paste the text you want to transform after "Content to Transform"
3. Save the generated HTML to a file
4. Display in a browser to check

## Input Example

```
## Content to Transform
In today's project meeting, we discussed the development schedule for new features.
First, the design team will start creating mockups next week.
Next, the development team will begin implementation in two weeks.
Finally, the test team will conduct one week of testing before release.
```

## Output Example

A 5-column graphic recording HTML using handwritten-style fonts and Font Awesome icons will be generated.

## Notes

- For long input text, instruct the AI to organize it into appropriate sections
- Instruct the AI to select Font Awesome icons appropriate to the content
- Internet connection is required when viewing in a browser (for loading fonts and icons)
