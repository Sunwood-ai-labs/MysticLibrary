---
title: "Editable Graphic Recording v2.1 - Aimi Yabi"
description: "Comprehensive prompt for generating Japanese editable infographic HTML with traditional indigo aesthetics elevated to modern times"
canonical_id: "docs/graphic-recording/editable-graphic-recording-v2-1"
canonical_doc: "docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2-1.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2-1.md. Edit docs/ instead. -->

# Editable Graphic Recording Prompt v2.1 ～Aimi Yabi～

This prompt is a comprehensive requirement definition for automatically generating a **Japanese-editable infographic HTML** with **indigo dye aesthetics elevated to modern times**. By **actively utilizing Font Awesome**, it creates a visually beautiful and intuitively operable graphic recording tool that harmonizes traditional indigo depth with modern sophistication.

## 🎨 Design Specifications

### 1. Color Scheme (Indigo Elegant Palette)
| Name | HEX | Primary Use | Font Awesome Icon Examples |
|------|-----|-------------|---------------------------|
| Primary | #1B365D | Titles, important backgrounds | `<i class="fas fa-waves"></i>` |
| Secondary | #2E5984 | Accents, links | `<i class="fas fa-moon"></i>` |
| Accent | #5A8FC8 | Highlights, decorations | `<i class="fas fa-snowflake"></i>` |
| Neon-Silver | #B8D4E3 | Hover, glow effects | `<i class="fas fa-star"></i>` |
| BG-Dark | #FAFBFC | Basic background | `<i class="fas fa-circle"></i>` |
| BG-Light | #F4F7FA | Section background | `<i class="fas fa-square"></i>` |

*Background uses pale blue-gray mica tone (BG-Dark), body text uses deep indigo (#1B2951), and auxiliary text uses elegant indigo mouse gray (#3A5F7D). Define these 6 colors as CSS variables and use gradients (Primary→Secondary) extensively to express the depth and serene beauty of indigo.*

### 2. Typography & Font Awesome Utilization Strategy
- **Japanese fonts**: `Kaisei Decol` (Japanese headings, important text) / `M PLUS Rounded 1c` (body text, UI elements) / `Bebas Neue` (alphanumeric, emphasized numbers)
- **Title (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / Indigo elegant gradient / ***Use nature icons like `<i class="fas fa-water"></i>` `<i class="fas fa-mountain"></i>` in combination***
- **Subtitle (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***Express section dividers with `<i class="fas fa-cloud"></i>` `<i class="fas fa-wind"></i>` etc.***
- **Heading (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***Category identification with `<i class="fas fa-snowflake"></i>` `<i class="fas fa-gem"></i>`***
- **Body text, UI elements**: 16px / 400 / **M PLUS Rounded 1c** / Emphasize readability and elegance
- **Font Awesome Integration Strategy**:
  - 📊 Data display: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-chart-line"></i>`
  - 🎯 Important points: `<i class="fas fa-bullseye"></i>` `<i class="fas fa-exclamation-triangle"></i>` `<i class="fas fa-lightbulb"></i>`
  - 📝 Edit functions: `<i class="fas fa-edit"></i>` `<i class="fas fa-save"></i>` `<i class="fas fa-undo"></i>`
  - 🔄 Process: `<i class="fas fa-arrow-right"></i>` `<i class="fas fa-sync-alt"></i>` `<i class="fas fa-check-circle"></i>`
  - 👥 People, organizations: `<i class="fas fa-user"></i>` `<i class="fas fa-users"></i>` `<i class="fas fa-building"></i>`

### 3. Layout & Font Awesome Placement Strategy
1. **Header**:
   - Left: `<i class="fas fa-scroll"></i>` + title
   - Right: `<i class="fas fa-calendar-alt"></i>` + date / `<i class="fas fa-link"></i>` + source
2. **2-column layout**: Left 50% / Right 50%
3. **Card elements**:
   - Washi paper texture background + rounded corners 16px + elegant shadow
   - Place large relevant Font Awesome icons at top of cards
   - `<i class="fas fa-info-circle"></i>` `<i class="fas fa-question-circle"></i>` `<i class="fas fa-cog"></i>` etc.
4. **Section dividers**: Use three `<i class="fas fa-minus"></i>` in a row as indigo decorative lines
5. **Navigation**: Intuitive operation with `<i class="fas fa-chevron-up"></i>` `<i class="fas fa-chevron-down"></i>`

### 4. Indigo Elegant Decorative Elements
- **Background pattern**: Lightweight SVG implementation of seigaiha (blue ocean wave) pattern
- **Accents**: Subtly place `<i class="fas fa-yin-yang"></i>` `<i class="fas fa-snowflake"></i>`
- **Glassmorphism**: Express water surface transparency when emphasizing important data
- **Subtle animation**: Elegant and serene movement like snow crystals dancing

---

## ⚙️ Technical Specifications

### 1. Basic Structure
- **HTML/CSS/JavaScript single file** (external dependencies: Google Fonts [Kaisei Decol + M PLUS Rounded 1c] + Font Awesome CDN)
- **Required font settings**:
