---
title: "Graphic Recording HTML V3"
description: "Prompt for generating graphic recording HTML using handwritten-style fonts and Font Awesome icons"
canonical_id: "docs/graphic-recording/graphic-recording-html-v3"
canonical_doc: "docs/en/prompt-catalog/docs/graphic-recording/graphic-recording-html-v3.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/docs/graphic-recording/graphic-recording-html-v3.md. Edit docs/ instead. -->

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
