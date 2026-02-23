---
title: Editable Graphic Recording v3.0 Ryoka
description: Comprehensive prompt for generating editable Japanese infographic HTML elevating summer cool and Japanese aesthetics to modern times
category: docs
intent: editable-graphic-recording
audience:
  - Content creators
  - Presenters
  - Facilitators
input_requirements:
  - Text content to transform into graphic recording
tags:
  - graphic-recording
  - editable
  - ryoka-design
  - theme-toggle
  - light-dark
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Editable Graphic Recording v3.0 Ryoka

## Intended Use

- Create graphic recording editable directly in the browser
- Create materials with light/dark theme toggle functionality
- Use beautiful design incorporating summer cool and Japanese aesthetics

## Prompt

```text
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
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
```
- **CSS variable definitions (light/dark theme support)**:
```css
:root {
  /* Light theme "Ryoka" default */
  --primary-color: #025E73;
  --secondary-color: #038C8C;
  --accent-color: #04BFAD;
  --neon-gold: #F2C166;
  --bg-dark: #F2F2F2;
  --bg-light: #FAFAFA;
  --text-primary: #024A5C;
  --text-secondary: #026B73;

  /* Common variables for theme switching */
  --current-primary: var(--primary-color);
  --current-secondary: var(--secondary-color);
  --current-accent: var(--accent-color);
  --current-neon: var(--neon-gold);
  --current-bg-dark: var(--bg-dark);
  --current-bg-light: var(--bg-light);
  --current-text-primary: var(--text-primary);
  --current-text-secondary: var(--text-secondary);
}

/* Dark theme "Yoryo" */
[data-theme="dark"] {
  --current-primary: #04BFAD;
  --current-secondary: #F2C166;
  --current-accent: #038C8C;
  --current-neon: #66D9EF;
  --current-bg-dark: #0A1A1F;
  --current-bg-light: #1A2F35;
  --current-text-primary: #E8F4F8;
  --current-text-secondary: #B8D4E3;
}

.kaisei-decol-regular {
  font-family: "Kaisei Decol", serif;
  font-weight: 400;
  font-style: normal;
}

.m-plus-rounded-1c-regular {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  font-style: normal;
}
```
- Screen ratio: 16:9 or 4:3
- Responsive support: `<meta name="viewport" content="width=device-width, initial-scale=1">`

### 2. Edit Mode & Theme Toggle Buttons (Required Implementation)
```html
<!-- Edit mode button -->
<button id="toggleEdit" style="position:fixed;top:15px;right:15px;z-index:9999;background:var(--current-primary);color:white;border:none;padding:12px 20px;border-radius:15px;cursor:pointer;box-shadow:0 4px 12px rgba(2,94,115,0.3);transition:all 0.3s ease;" class="m-plus-rounded-1c-regular">
    <i class="fas fa-edit"></i> Edit Mode
</button>

<!-- Theme toggle button -->
<button id="themeToggle" style="position:fixed;top:15px;right:180px;z-index:9999;background:var(--current-accent);color:white;border:none;padding:12px 20px;border-radius:15px;cursor:pointer;box-shadow:0 4px 12px rgba(4,191,173,0.3);transition:all 0.3s ease;" class="m-plus-rounded-1c-regular">
    <i class="fas fa-sun"></i> Yoryo
</button>

<script>
// Edit mode
const editBtn = document.getElementById('toggleEdit');
let editing = false;
editBtn.onclick = () => {
    editing = !editing;
    document.body.contentEditable = editing;
    document.designMode = editing ? 'on' : 'off';
    editBtn.innerHTML = editing ?
        '<i class="fas fa-save"></i> End(Save: File → Save Page As)' :
        '<i class="fas fa-edit"></i> Edit Mode';
    editBtn.style.background = editing ? 'var(--current-neon)' : 'var(--current-primary)';
    editBtn.style.color = editing ? 'var(--current-primary)' : 'white';
};

// Theme switching
const themeBtn = document.getElementById('themeToggle');
let isDark = false;

// Initial theme setting
document.documentElement.setAttribute('data-theme', 'light');

themeBtn.onclick = () => {
    isDark = !isDark;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    // Update button icon and text
    themeBtn.innerHTML = isDark ?
        '<i class="fas fa-moon"></i> Ryoka' :
        '<i class="fas fa-sun"></i> Yoryo';

    // Update button background color to match current theme
    setTimeout(() => {
        themeBtn.style.background = 'var(--current-accent)';
        editBtn.style.background = editing ? 'var(--current-neon)' : 'var(--current-primary)';
    }, 50);
};

// Update overall background and text color according to theme
document.body.style.background = 'var(--current-bg-dark)';
document.body.style.color = 'var(--current-text-primary)';
</script>
```

### 3. Font Awesome Icon Usage Code Examples (Theme Compatible)
```html
<!-- Summer section header example (automatic theme support) -->
<h2 class="kaisei-decol-regular" style="color:var(--current-primary);"><i class="fas fa-waves" style="color:var(--current-accent);margin-right:12px;"></i>Design Specifications</h2>

<!-- Cool data display card example (automatic theme switching) -->
<div class="data-card" style="background:linear-gradient(135deg, var(--current-bg-light), var(--current-bg-dark));border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(4,191,173,0.1);border:1px solid var(--current-accent);">
    <div class="card-header" style="display:flex;align-items:center;margin-bottom:16px;">
        <i class="fas fa-chart-pie fa-2x" style="color:var(--current-accent);margin-right:12px;"></i>
        <h3 class="kaisei-decol-regular" style="color:var(--current-primary);">Statistical Data</h3>
    </div>
    <div class="card-content m-plus-rounded-1c-regular" style="color:var(--current-text-primary);">
        <p><i class="fas fa-arrow-up" style="color:var(--current-secondary);margin-right:8px;"></i> 120% improvement year-over-year</p>
        <p><i class="fas fa-sun" style="color:var(--current-neon);margin-right:8px;"></i> Summer season strong</p>
    </div>
</div>
```

### 4. Background Decoration (Theme Compatible Recommended Implementation)
#### Light Theme "Ryoka" Decoration
- **Summer cloud texture**: CSS `filter: blur(0.4px)` for cool texture expression
- **Seigaiha + wind pattern**: SVG implementation, `pointer-events:none;`
- **Wind chime animation**: CSS `@keyframes` to express summer cool breeze

#### Dark Theme "Yoryo" Decoration
- **Night mist texture**: CSS `filter: blur(0.6px)` for dreamy texture expression
- **Constellation + moonlight pattern**: SVG implementation, `pointer-events:none;`
- **Firefly animation**: CSS `@keyframes` for dreamy light dancing like summer night fireflies

### 5. Accessibility & Usability
- **Font Awesome icons**: Must include `aria-label` or `title` attributes
- **Color contrast**: WCAG 2.1 AA compliance (ensure high contrast even with deep sea color base)
- **Keyboard navigation**: Set logical tab order
- **Screen reader support**: Semantic HTML + appropriate ARIA attributes

---

## 🎯 Important Implementation Points

### Notes on Font Awesome & Theme Switching Utilization
1. **Performance**: Use only necessary icons and load Font Awesome CDN efficiently
2. **Consistency**: Unify icons with the same meaning and maintain visual hierarchy
3. **Ryoka taste**:
   - Light: Actively use day summer element icons like water, wind, leaves, fish, sun
   - Dark: Actively use night summer element icons like moon, stars, fireflies, night wind
4. **Responsive**: Use appropriate icon sizes with `fa-lg` `fa-2x` `fa-3x`
5. **Theme switching**:
   - Use `var(--current-*)` variables for all color specifications
   - Achieve smooth theme switching with `transition` property
   - Emphasize contrast assurance in dark theme
6. **Animation**: Use `fa-spin` `fa-pulse` sparingly to maintain beauty appropriate to theme

### Essence of Ryoka Summer Design
- **Aesthetics of day and night**: Express the beauty of both summer day and night with appropriate whitespace and depth of blue-green
- **Natural colors**:
  - Day: Refreshing and warm palette based on sea, river, autumn leaves, and Japanese apricot colors
  - Night: Dreamy and cool palette based on night sea, starry sky, fireflies, and moonlight colors
- **Typography**: Express beautiful contrast like gradients from summer sea to autumn leaves to night sky with text
- **Smoothness of theme switching**: Smooth transitions naturally expressing the change from day to night
- **Refreshing elegance**: Minimal decoration, emphasizing functional beauty and cool beauty

The HTML generated according to this prompt will be an editable high-quality graphic recording tool that fuses Japanese summer aesthetics with modern refreshingness. The **light theme "Ryoka"** expresses the refreshingness of summer day, the **dark theme "Yoryo"** expresses the dreamy beauty of summer night, and with one-click theme switching, provides the optimal display environment according to time of day and mood. Through the cool and refreshing beauty of day and night, information is expressed beautifully and pleasantly.

## Content to Transform

---

```

## How to Use

1. Copy the prompt and paste into AI
2. Enter text to transform into graphic recording
3. Open generated HTML in browser
4. Click "Edit Mode" button to enable editing
5. Edit text directly and save (File → Save Page As)

## Input Example

```
In today's meeting, we discussed the direction of the next product.
1. Redefining target users
2. Prioritizing core features
3. Adjusting release timing
```

## Output Example

- Interactive graphic recording HTML with edit mode button
- Light/dark theme toggle functionality
- Beautiful color scheme based on summer aesthetics

## Notes

- When edit mode is enabled, text can be edited directly in browser
- Theme switching is one-click
- Save using browser's "Save Page As" function
- Internet connection required for fonts and icons
