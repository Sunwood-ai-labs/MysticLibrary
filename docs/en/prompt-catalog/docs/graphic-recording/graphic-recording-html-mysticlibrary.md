---
title: Graphic Recording HTML V2 MysticLibrary
description: Prompt for generating graphic recording HTML with MysticLibrary color palette (blue tones)
category: docs
intent: graphic-recording-html-mysticlibrary
audience:
  - Facilitators
  - Presenters
  - Content Creators
input_requirements:
  - Text content to convert into graphic recording
tags:
  - graphic recording
  - infographic
  - HTML generation
  - MysticLibrary
  - Font Awesome
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graphic Recording HTML V2 MysticLibrary

## Intended Use

- Create graphic recording with MysticLibrary color palette (blue tones)
- Generate professional-looking infographics with calm blue color scheme
- Organize information in 3-column layout

## Prompt

```text
# Graphic Recording Infographic Conversion Prompt V2

## Purpose
Convert the following content into a perfect Japanese graphic recording-style HTML infographic as created by top-tier designers. Aim for the highest quality in both information design and visual design. Use hand-drawn shapes and large Font Awesome icons to express content visually and intuitively.

## Design Specifications
### 1. Color Scheme (MysticLibrary)
- MysticLibrary-1: #2E578C (Blue)
- MysticLibrary-2: #182D40 (Dark Navy)
- MysticLibrary-3: #BF807A (Pink Beige)
- MysticLibrary-4: #592A2A (Brown)
- MysticLibrary-5: #F2F2F2 (Light Gray)

### 2. Graphic Recording Elements
- Arrange information sequentially from top-left to right, then top to bottom
- Use Japanese handwritten fonts (Yomogi, Zen Kurenaido, Kaisei Decol)
- Hand-drawn borders, arrows, banners, speech bubbles
- Combine text and visual elements (Font Awesome icons, simple shapes)
- Display large icons (2x-3x) representing each section's content
- Place relevant Font Awesome icons next to keywords

### 3. Typography
- Title: 32px, gradient effect, bold, with Font Awesome icons on both sides
- Subtitle: 16px, #475569, with relevant Font Awesome icons
- Section headings: 18px, #1e40af, with Font Awesome icon on the left
- Body: 14px, #334155, line height 1.4
- Font specification:
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

### 4. Layout
- Header: Left-aligned title (with large Font Awesome icon) + right-aligned date/source
- 3-column layout: Left 33%, Center 33%, Right 33%
- Card components: White background, rounded corners 12px, subtle shadow
- Appropriate spacing and hierarchy between sections
- Use glassmorphism effects

## Content to Convert
[Enter text here]
```

## How to Use

1. Copy the prompt and paste into AI chat tool
2. Enter the text content to convert into graphic recording
3. View and save the generated HTML in browser

## Input Example

```
## Content to Convert
MysticLibrary project overview:
1. Purpose: Knowledge sharing and utilization
2. Features: Search, tagging, relationships
3. Future: AI functionality additions
```

## Output Example

A professional graphic recording HTML with MysticLibrary color palette (blue tones) in 3-column layout.

## Notes

- Calm blue color scheme
- 3-column layout for organized information
- Glassmorphism effects for modern impression
