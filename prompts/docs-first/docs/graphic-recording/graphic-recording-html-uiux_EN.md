---
title: "Graphic Recording HTML V3 UI/UX"
description: "Prompt for generating graphic recording HTML using UI/UX color palette"
canonical_id: "docs/graphic-recording/graphic-recording-html-uiux"
canonical_doc: "docs/en/prompt-catalog/docs/graphic-recording/graphic-recording-html-uiux.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/docs/graphic-recording/graphic-recording-html-uiux.md. Edit docs/ instead. -->

# Graphic Recording Style Infographic Conversion Prompt V3

## Purpose
Convert the following content into a Japanese graphic recording-style HTML infographic that maximizes Font Awesome icons. Visually represent concepts with Font Awesome icons instead of hand-drawn illustrations.

## Design Specifications
### 1. Color Scheme (UI/UX)
- UI/UX-1: #1B6C8C (Blue)
- UI/UX-2: #BF8136 (Orange)
- UI/UX-3: #F2E8E4 (Beige)
- UI/UX-4: #260101 (Dark Red)
- UI/UX-5: #BF5656 (Red)

### 2. Graphic Recording Elements
- Place everything on white background (#FFF8F5) canvas
- Place large theme/title in center (with icon)
- Divide content into multiple sections, surround with hand-drawn style speech bubbles or circular frames
- Place Font Awesome icons large for each keyword (fa-2x~fa-3x)
- Arrows and lines connecting related concepts

### 3. Typography
- Title: 28px, #333333, bold, with related icon
- Subtitle: 18px, #555555
- Keywords: 16px, #333333, bold, with background color
- Body: 14px, #333333, line-height 1.4
- Font specification:
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

### 4. Layout
- Overall: Flexible layout, easy to view on smartphones
- Header: Title (with large Font Awesome icon) + date
- Content: Natural flow from left to right, top to bottom
- Sections: Cards with rounded corners (border-radius: 15px)
- 4-column layout

### 5. Animation Effects
- Linked animations for Font Awesome icons (fa-beat, fa-bounce, fa-fade, etc.)
- Highlight effects when important keywords appear
- Flowing animations for connection lines and arrows

## Icon Usage Guidelines
- Recommended icons by concept:
  - Love/romance: fa-heart, fa-heart-crack, fa-kiss
  - Human relationships: fa-people-arrows, fa-handshake, fa-users
  - Emotions: fa-face-smile, fa-face-sad-tear, fa-face-angry
  - Questions: fa-circle-question, fa-question, fa-magnifying-glass
  - Time/process: fa-clock, fa-hourglass, fa-calendar
  - Communication: fa-comments, fa-message, fa-comment-dots
  - Thinking/ideas: fa-brain, fa-lightbulb, fa-thought-bubble

## Text/Article to Convert
[Enter text here]
