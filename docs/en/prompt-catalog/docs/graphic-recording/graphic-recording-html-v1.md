---
title: Graphic Recording HTML Creation V1 Travel Blue Palette
description: Prompt for generating basic graphic recording HTML with Travel Blue color palette
category: docs
intent: graphic-recording-html-travel-blue
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
  - travel-blue
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graphic Recording HTML Creation V1 Travel Blue Palette

## Intended Use

- Create fresh graphic recording with Travel Blue color palette
- Use as base for basic graphic recording HTML generation
- Utilize handwritten-style fonts and Font Awesome icons

## Prompt

```text
# Graphic Recording (Graleco) HTML Creation Prompt V1

Please create a graphic recording in HTML following the requirements below.

## What is Graphic Recording
Graphic recording (graleco) is a method of summarizing the content of meetings and presentations in real time using diagrams, illustrations, and text. It makes it easier to grasp the overall picture of discussions and facilitates the generation of ideas. Compared to text-only minutes, it conveys information intuitively, and visual records are more likely to be retained in memory.

## Basic Requirements
- Use handwritten-style fonts (Kaisei Decol, Yomogi, Zen Kurenaido)
- Use Font Awesome icons largely instead of illustrations
- If using cards, avoid using borders and make them blend with background
- Express handwritten-style speech bubbles with CSS
- Responsive design
- 5-column layout

## Typography
- Title: 32px, gradient effect, bold, place Font Awesome icons on left and right
- Subtitle: 16px, #475569, include relevant Font Awesome icon
- Section heading: 18px, #1e40af, always place Font Awesome icon on left side with animation effect
- Body text: 14px, #334155, line height 1.4, include small relevant Font Awesome icons for important keywords
- Font specification: Kaisei Decol, Yomogi, Zen Kurenaido

## Color Palette (Travel Blue)
```
<palette>
<color name='Travel-1' rgb='308AD9' r='47' g='137' b='216' />
<color name='Travel-2' rgb='3299D9' r='49' g='152' b='216' />
<color name='Travel-3' rgb='3BACD9' r='58' g='171' b='216' />
<color name='Travel-4' rgb='4AD97C' r='73' g='216' b='123' />
<color name='Travel-5' rgb='F2BC57' r='242' g='187' b='87' />
</palette>
```

## Layout Instructions
- Create handwritten-style atmosphere
- Loosely connect sections with arrows and lines
- Make important keywords large, supplementary explanations in smaller font
- Use Font Awesome icons prominently to create visual interest
- Adjust transparency for cards to blend with background without using border lines

---

## Content to Convert
[Enter text content to convert to graphic recording here]
```

## How to Use

1. Copy the prompt and paste into AI chat tool
2. Enter the text content you want to convert in the content section
3. Display and save the generated HTML in browser

## Input Example

```
## Content to Convert
### Today's Meeting Key Points
- Decision to start new project
- Appointed 3 persons in charge
- Deadline is end of next month
```

## Output Example

5-column graphic recording HTML with Travel Blue color palette (blue #308AD9, green #4AD97C, orange #F2BC57) will be generated.

## Notes

- Handwritten-style fonts are used
- Cards have no borders and blend with background
- Responsive design with column count changing based on screen size
