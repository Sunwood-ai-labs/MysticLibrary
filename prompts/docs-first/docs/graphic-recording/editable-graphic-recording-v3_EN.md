---
title: "Editable Graphic Recording v3.0 Ryoka"
description: "Comprehensive prompt for generating editable Japanese infographic HTML elevating summer cool and Japanese aesthetics to modern times"
canonical_id: "docs/graphic-recording/editable-graphic-recording-v3"
canonical_doc: "docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v3.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v3.md. Edit docs/ instead. -->

# Editable Graphic Recording Prompt v3.0 ~ Ryoka ~

This prompt is a comprehensive requirement definition for automatically generating a **Japanese-editable infographic HTML** that elevates **the aesthetics of summer cool and Japanese beauty** to modern times. By **actively utilizing Font Awesome**, it creates a visually cool and intuitively operable graphic recording tool where the sea breeze of summer, the refreshing feel of autumn leaves, and the warmth of Japanese apricot colors harmonize.

## 🎨 Design Specifications

### 1. Color Scheme (Ryoka Summer Palette + Yoryo Dark Theme)

#### Light Theme "Ryoka" - Summer Day
| Name | HEX | Primary Use | Font Awesome Icon Examples |
|------|-----|-------------|---------------------------|
| Primary | #025E73 | Titles, important backgrounds | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | Accents, links | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | Highlights, decorations | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | Hover, glow effects | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | Basic background | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | Section background | `<i class="fas fa-square"></i>` |

#### Dark Theme "Yoryo" - Summer Night
| Name | HEX | Primary Use | Font Awesome Icon Examples |
|------|-----|-------------|---------------------------|
| Primary-Dark | #04BFAD | Titles, important backgrounds (firefly light) | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | Accents, links (star light) | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | Highlights, decorations (night sea surface) | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | Hover, glow effects (moonlight) | `<i class="fas fa-moon"></i>` |
| BG-Dark-Dark | #0A1A1F | Basic background (deep night sea) | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | Section background (night mist) | `<i class="fas fa-square"></i>` |

*Light theme uses pale gray summer cloud background with deep sea color text. Dark theme uses deep night sea background with bright text like fireflies and starlight. Both themes define CSS variables and use gradients extensively to express the beautiful transition of summer day and night.*

### 2. Typography & Font Awesome Utilization Strategy
- **Japanese fonts**: `Kaisei Decol` (Japanese headings, important text) / `M PLUS Rounded 1c` (body text, UI elements) / `Bebas Neue` (alphanumeric, emphasized numbers)
- **Title (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / Ryoka gradient / ***Use summer icons like `<i class="fas fa-waves"></i>` `<i class="fas fa-umbrella-beach"></i>` in combination***
- **Subtitle (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***Express section dividers with `<i class="fas fa-wind"></i>` `<i class="fas fa-fan"></i>` etc.***
- **Heading (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***Category identification with `<i class="fas fa-leaf"></i>` `<i class="fas fa-fish"></i>`***
- **Body text, UI elements**: 16px / 400 / **M PLUS Rounded 1c** / Emphasize readability and coolness
- **Font Awesome Integration Strategy**:
  - 📊 Data display: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-chart-line"></i>`
  - 🎯 Important points: `<i class="fas fa-bullseye"></i>` `<i class="fas fa-lightbulb"></i>` `<i class="fas fa-star"></i>`
  - 📝 Edit functions: `<i class="fas fa-edit"></i>` `<i class="fas fa-save"></i>` `<i class="fas fa-undo"></i>`
  - 🔄 Process: `<i class="fas fa-arrow-right"></i>` `<i class="fas fa-sync-alt"></i>` `<i class="fas fa-check-circle"></i>`
  - 🌊 Summer elements: `<i class="fas fa-swimming-pool"></i>` `<i class="fas fa-cocktail"></i>` `<i class="fas fa-palm-tree"></i>`
  - 🎐 Japanese summer elements: `<i class="fas fa-bell"></i>` `<i class="fas fa-feather"></i>` `<i class="fas fa-seedling"></i>`

### 3. Layout & Font Awesome Placement Strategy
1. **Header**:
   - Left: `<i class="fas fa-scroll"></i>` + title
   - Right: `<i class="fas fa-calendar-alt"></i>` + date / `<i class="fas fa-link"></i>` + source
2. **2-column layout**: Left 50% / Right 50%
3. **Card elements**:
   - Summer cloud texture background + rounded corners 18px + cool shadow
   - Place large relevant Font Awesome icons at top of cards
   - `<i class="fas fa-info-circle"></i>` `<i class="fas fa-question-circle"></i>` `<i class="fas fa-cog"></i>` etc.
4. **Section dividers**: Use three `<i class="fas fa-minus"></i>` in a row as cool wind decorative lines
5. **Navigation**: Intuitive operation with `<i class="fas fa-chevron-up"></i>` `<i class="fas fa-chevron-down"></i>`

### 4. Ryoka Decorative Elements
- **Background pattern**: Lightweight SVG implementation of seigaiha (blue ocean wave) and wind patterns
- **Accents**: Subtly place `<i class="fas fa-fish"></i>` `<i class="fas fa-leaf"></i>` `<i class="fas fa-feather"></i>`
- **Glassmorphism**: Express summer water surface transparency and coolness when emphasizing important data
- **Subtle animation**: Cool and dreamy movement like fireflies and wind chimes

---

## ⚙️ Technical Specifications

### 1. Basic Structure
- **HTML/CSS/JavaScript single file** (external dependencies: Google Fonts [Kaisei Decol + M PLUS Rounded 1c] + Font Awesome CDN)
- **Required font settings**:
