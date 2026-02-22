---
title: "Editable Graphic Recording Prompt v2"
sourcePath: "prompts/documentation/graphic-recording/docs/editable-graficrecord-v2_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/graphic-recording/docs/editable-graficrecord-v2_EN.md`
> Japanese: [JA](/documentation/graphic-recording/docs/editable-graficrecord-v2)

# Editable Graphic Recording Prompt v2

This prompt is a comprehensive requirement definition for automatically generating a **Japanese-editable infographic HTML** with a **Japanese modern** design. By **actively utilizing Font Awesome**, it creates a visually easy-to-understand and intuitively operable graphic recording tool.

---

## 🎨 Design Specifications

### 1. Color Scheme (Japanese Modern Palette)
| Name | HEX | Primary Use | Font Awesome Icon Examples |
|------|-----|-------------|---------------------------|
| Primary | #8B4513 | Titles, important backgrounds | `&lt;i class="fas fa-mountain"&gt;&lt;/i&gt;` |
| Secondary | #CD853F | Accents, links | `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` |
| Accent | #DEB887 | Highlights, decorations | `&lt;i class="fas fa-cherry-blossom"&gt;&lt;/i&gt;` |
| Neon-Gold | #FFD700 | Hover, glow effects | `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` |
| BG-Dark | #FFFFFF | Basic background | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light | #FFF8F0 | Section background | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

*Background uses washi paper tone white (BG-Dark), body text uses deep brown (#2F1B14), and auxiliary text uses warm brown (#5D4037). Define these 6 colors as CSS variables and use gradients (Primary→Secondary) extensively to create Japanese unified feel.*

### 2. Typography & Font Awesome Utilization Strategy
- **Japanese fonts**: `Kaisei Decol` (Japanese headings, important text) / `M PLUS Rounded 1c` (body text, UI elements) / `Bebas Neue` (alphanumeric, emphasized numbers)
- **Title (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / Japanese modern gradient / ***Use Japanese icons like `&lt;i class="fas fa-torii-gate"&gt;&lt;/i&gt;` in combination***
- **Subtitle (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***Express section dividers with `&lt;i class="fas fa-bamboo"&gt;&lt;/i&gt;` `&lt;i class="fas fa-fan"&gt;&lt;/i&gt;` etc.***
- **Heading (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***Category identification with `&lt;i class="fas fa-origami-crane"&gt;&lt;/i&gt;` `&lt;i class="fas fa-bonsai"&gt;&lt;/i&gt;`***
- **Body text, UI elements**: 16px / 400 / **M PLUS Rounded 1c** / Emphasize readability and approachability
- **Font Awesome Integration Strategy**:
  - 📊 Data display: `&lt;i class="fas fa-chart-bar"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-pie"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-line"&gt;&lt;/i&gt;`
  - 🎯 Important points: `&lt;i class="fas fa-bullseye"&gt;&lt;/i&gt;` `&lt;i class="fas fa-exclamation-triangle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-lightbulb"&gt;&lt;/i&gt;`
  - 📝 Edit functions: `&lt;i class="fas fa-edit"&gt;&lt;/i&gt;` `&lt;i class="fas fa-save"&gt;&lt;/i&gt;` `&lt;i class="fas fa-undo"&gt;&lt;/i&gt;`
  - 🔄 Process: `&lt;i class="fas fa-arrow-right"&gt;&lt;/i&gt;` `&lt;i class="fas fa-sync-alt"&gt;&lt;/i&gt;` `&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;`
  - 👥 People, organizations: `&lt;i class="fas fa-user"&gt;&lt;/i&gt;` `&lt;i class="fas fa-users"&gt;&lt;/i&gt;` `&lt;i class="fas fa-building"&gt;&lt;/i&gt;`

### 3. Layout & Font Awesome Placement Strategy
1. **Header**:
   - Left: `&lt;i class="fas fa-scroll"&gt;&lt;/i&gt;` + title
   - Right: `&lt;i class="fas fa-calendar-alt"&gt;&lt;/i&gt;` + date / `&lt;i class="fas fa-link"&gt;&lt;/i&gt;` + source
2. **2-column layout**: Left 50% / Right 50%
3. **Card elements**:
   - Washi paper texture background + rounded corners 12px + subtle shadow
   - Place large relevant Font Awesome icons at top of cards
   - `&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-question-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-cog"&gt;&lt;/i&gt;` etc.
4. **Section dividers**: Use three `&lt;i class="fas fa-minus"&gt;&lt;/i&gt;` in a row as Japanese decorative lines
5. **Navigation**: Intuitive operation with `&lt;i class="fas fa-chevron-up"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;`

### 4. Japanese Modern Decorative Elements
- **Background pattern**: Lightweight SVG implementation of hemp leaf pattern (asanoha)
- **Accents**: Subtly place `&lt;i class="fas fa-yin-yang"&gt;&lt;/i&gt;` `&lt;i class="fas fa-dragon"&gt;&lt;/i&gt;`
- **Glassmorphism**: Express washi paper transparency when emphasizing important data
- **Subtle animation**: Subtle movement like cherry blossom petals dancing

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
- **CSS class definitions**:
```css
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
- Responsive support: `&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;`

### 2. Edit Mode Button (Required Implementation)
```html
<button id="toggleEdit" style="position:fixed;top:15px;right:15px;z-index:9999;background:var(--primary-color);color:white;border:none;padding:10px 15px;border-radius:8px;cursor:pointer;" class="m-plus-rounded-1c-regular">
    <i class="fas fa-edit"></i> Edit Mode
</button>

<script>
const btn = document.getElementById('toggleEdit');
let editing = false;
btn.onclick = () => {
    editing = !editing;
    document.body.contentEditable = editing;
    document.designMode = editing ? 'on' : 'off';
    btn.innerHTML = editing ?
        '<i class="fas fa-save"></i> End(Save: File → Save Page As)' :
        '<i class="fas fa-edit"></i> Edit Mode';
    btn.style.background = editing ? 'var(--neon-gold)' : 'var(--primary-color)';
    btn.style.color = editing ? 'var(--text-primary)' : 'white';
};
</script>
```

### 3. Font Awesome Icon Usage Code Examples
```html
<!-- Section header example -->
<h2 class="kaisei-decol-regular"><i class="fas fa-mountain" style="color:var(--primary-color);margin-right:10px;"></i>Design Specifications</h2>

<!-- Data display card example -->
<div class="data-card">
    <div class="card-header">
        <i class="fas fa-chart-pie fa-2x" style="color:var(--accent-color);"></i>
        <h3 class="kaisei-decol-regular">Statistical Data</h3>
    </div>
    <div class="card-content m-plus-rounded-1c-regular">
        <p><i class="fas fa-arrow-up" style="color:green;"></i> 120% improvement year-over-year</p>
    </div>
</div>

<!-- Process flow example -->
<div class="process-flow">
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-play-circle fa-2x"></i>
        <span>Start</span>
    </div>
    <i class="fas fa-arrow-right fa-2x" style="color:var(--secondary-color);"></i>
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-cogs fa-2x"></i>
        <span>Process</span>
    </div>
    <i class="fas fa-arrow-right fa-2x" style="color:var(--secondary-color);"></i>
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-check-circle fa-2x"></i>
        <span>Complete</span>
    </div>
</div>
```

### 4. Background Decoration (Recommended Implementation)
- **Washi paper texture**: Texture expression with CSS `filter: blur(0.5px)`
- **Hemp leaf pattern**: SVG implementation, `pointer-events:none;`
- **Cherry blossom petal animation**: Subtle falling effect with CSS `@keyframes`

### 5. Accessibility & Usability
- **Font Awesome icons**: Must include `aria-label` or `title` attributes
- **Color contrast**: WCAG 2.1 AA compliance
- **Keyboard navigation**: Set logical tab order
- **Screen reader support**: Semantic HTML + appropriate ARIA attributes

---

## 🎯 Important Implementation Points

### Notes on Font Awesome Utilization
1. **Performance**: Use only necessary icons and load Font Awesome CDN efficiently
2. **Consistency**: Unify icons with the same meaning and maintain visual hierarchy
3. **Japanese taste**: Avoid icons that are too Western, harmonize with Japanese elements as much as possible
4. **Responsive**: Use appropriate icon sizes with `fa-lg` `fa-2x` `fa-3x`
5. **Animation**: Use `fa-spin` `fa-pulse` sparingly

### Essence of Japanese Modern Design
- **Aesthetics of whitespace**: Create breathing space with appropriate whitespace
- **Natural colors**: Warm palette based on earth, wood, and washi paper colors
- **Typography**: Express the beauty of vertical writing even in horizontal layouts
- **Simplicity**: Minimal decoration, emphasizing functional beauty

The HTML generated according to this prompt will be an editable high-quality graphic recording tool that fuses traditional Japanese aesthetics with modern UI/UX.

## Text to Convert to Graphic Recording

---
