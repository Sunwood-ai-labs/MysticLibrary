---
title: "Editable Graphic Recording v2"
description: "Comprehensive prompt for automatically generating Japanese-editable infographic HTML with Japanese modern design"
canonical_id: "docs/graphic-recording/editable-graphic-recording-v2"
canonical_doc: "docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2.md. Edit docs/ instead. -->

# Editable Graphic Recording Prompt v2

This prompt is a comprehensive requirement definition for automatically generating a **Japanese-editable infographic HTML** with a **Japanese modern** design. By **actively utilizing Font Awesome**, it creates a visually easy-to-understand and intuitively operable graphic recording tool.

## 🎨 Design Specifications

### 1. Color Scheme (Japanese Modern Palette)
| Name | HEX | Primary Use | Font Awesome Icon Examples |
|------|-----|-------------|---------------------------|
| Primary | #8B4513 | Titles, important backgrounds | `<i class="fas fa-mountain"></i>` |
| Secondary | #CD853F | Accents, links | `<i class="fas fa-leaf"></i>` |
| Accent | #DEB887 | Highlights, decorations | `<i class="fas fa-cherry-blossom"></i>` |
| Neon-Gold | #FFD700 | Hover, glow effects | `<i class="fas fa-star"></i>` |
| BG-Dark | #FFFFFF | Basic background | `<i class="fas fa-circle"></i>` |
| BG-Light | #FFF8F0 | Section background | `<i class="fas fa-square"></i>` |

*Background uses washi paper tone white (BG-Dark), body text uses deep brown (#2F1B14), and auxiliary text uses warm brown (#5D4037). Define these 6 colors as CSS variables and use gradients (Primary→Secondary) extensively to create Japanese unified feel.*

### 2. Typography & Font Awesome Utilization Strategy
- **Japanese fonts**: `Kaisei Decol` (Japanese headings, important text) / `M PLUS Rounded 1c` (body text, UI elements) / `Bebas Neue` (alphanumeric, emphasized numbers)
- **Title (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / Japanese modern gradient / ***Use Japanese icons like `<i class="fas fa-torii-gate"></i>` in combination***
- **Subtitle (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***Express section dividers with `<i class="fas fa-bamboo"></i>` `<i class="fas fa-fan"></i>` etc.***
- **Heading (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***Category identification with `<i class="fas fa-origami-crane"></i>` `<i class="fas fa-bonsai"></i>`***
- **Body text, UI elements**: 16px / 400 / **M PLUS Rounded 1c** / Emphasize readability and approachability
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
   - Washi paper texture background + rounded corners 12px + subtle shadow
   - Place large relevant Font Awesome icons at top of cards
   - `<i class="fas fa-info-circle"></i>` `<i class="fas fa-question-circle"></i>` `<i class="fas fa-cog"></i>` etc.
4. **Section dividers**: Use three `<i class="fas fa-minus"></i>` in a row as Japanese decorative lines
5. **Navigation**: Intuitive operation with `<i class="fas fa-chevron-up"></i>` `<i class="fas fa-chevron-down"></i>`

### 4. Japanese Modern Decorative Elements
- **Background pattern**: Lightweight SVG implementation of hemp leaf pattern (asanoha)
- **Accents**: Subtly place `<i class="fas fa-yin-yang"></i>` `<i class="fas fa-dragon"></i>`
- **Glassmorphism**: Express washi paper transparency when emphasizing important data
- **Subtle animation**: Subtle movement like cherry blossom petals dancing

---

## ⚙️ Technical Specifications

### 1. Basic Structure
- **HTML/CSS/JavaScript single file** (external dependencies: Google Fonts [Kaisei Decol + M PLUS Rounded 1c] + Font Awesome CDN)
- **Required font settings**:
