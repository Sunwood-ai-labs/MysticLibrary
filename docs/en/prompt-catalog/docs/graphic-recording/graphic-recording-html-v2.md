---
title: Graphic Recording HTML Creation V2 Shooting Star Palette
description: Prompt for generating graphic recording HTML with Shooting Star color palette
category: docs
intent: graphic-recording-html-shooting-star
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
  - shooting-star
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graphic Recording HTML Creation V2 Shooting Star Palette

## Intended Use

- Create gorgeous graphic recording with Shooting Star color palette
- Organize information with calm red, blue, and beige color scheme
- Utilize handwritten-style fonts and speech bubbles

## Prompt

```text
# Graphic Recording (Graleco) HTML Creation Prompt V2

Please create a graphic recording in HTML following the requirements below.

## What is Graphic Recording
Graphic recording (graleco) is a method of summarizing the content of meetings and presentations in real time using diagrams, illustrations, and text. It makes it easier to grasp the overall picture of discussions and facilitates the generation of ideas. Compared to text-only minutes, it conveys information intuitively, and visual records are more likely to be retained in memory.

## Basic Requirements
- Use handwritten-style fonts (Kaisei Decol, Yomogi, Zen Kurenaido)
- Use Font Awesome icons and emojis largely instead of illustrations (size around 70px)
- Make card backgrounds transparent, avoid using borders, and blend them with the background
- Express handwritten-style speech bubbles with CSS (background should have light transparency)
- Responsive design
- 5-column layout (container width 2000px)
- Wide spacing between cards (around 40px)
- Grid gap: 30px

## Typography
- Title: 32px, gradient effect, bold, place Font Awesome icons on left and right
- Subtitle: 16px, #475569, include relevant Font Awesome icon
- Section heading: 18px, #1e40af, always place Font Awesome icon on left side with animation effect
- Body text: 14px, #334155, line height 1.4, include small relevant Font Awesome icons or emojis for important keywords
- Font specification: Kaisei Decol, Yomogi, Zen Kurenaido

## Color Palette (Shooting Star)
```
<palette>
<color name='SHOOTING-[23’]-1' rgb='A61B40' r='165' g='26' b='63' />
<color name='SHOOTING-[23’]-2' rgb='DCE0F2' r='220' g='223' b='242' />
<color name='SHOOTING-[23’]-3' rgb='012840' r='1' g='39' b='63' />
<color name='SHOOTING-[23’]-4' rgb='A66A5D' r='165' g='106' b='92' />
<color name='SHOOTING-[23’]-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

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
### Product Roadmap
- Q1: Foundation system development
- Q2: UI/UX improvements
- Q3: Mobile version release
- Q4: Global expansion
```

## Output Example

5-column graphic recording HTML with Shooting Star color palette (red #A61B40, blue #012840, beige #A66A5D) will be generated.

## Notes

- Handwritten grid line background is applied
- Design with transparent cards blending into background
- Responsive design with column count changing based on screen size
