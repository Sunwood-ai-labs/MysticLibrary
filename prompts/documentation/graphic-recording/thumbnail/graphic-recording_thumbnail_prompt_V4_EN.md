# Editable Graphic Recording Thumbnail Prompt v4 ~Ryoga~

This prompt generates **high-quality blog article thumbnails** that sublimate **the coolness of summer and Japanese aesthetics** into modern times. It expresses visually polished, infographic-style thumbnails with 16:9 aspect ratio that convey content at a glance, like those created by top-tier consultants, by ***actively utilizing Font Awesome*** with the cool aesthetic of summer.

**Important**: The editable button and dark theme toggle button must be placed in the **navigation bar**.

---

## 🎨 Basic Configuration

### Prompt Format for Creating Thumbnails
```
Create a thumbnail for [article title] in HTML/CSS
Make it 16:9 size (1920x1080px)
Enhance infographic readability and professionalism by utilizing Font Awesome icons
Place the editable button and dark theme toggle button in the navigation bar
Also use the Ryoga color map and fonts specified below
```

---

## 🎨 Design Specifications

### 1. Color Palette Definition (Ryoga Summer Japanese Palette + Yaryo Dark Theme)

#### Light Theme "Ryoga" - Summer Day
| Name | HEX | RGB | Primary Use | Font Awesome Icon Examples |
|------|-----|-----|-------------|---------------------------|
| Primary | #025E73 | rgb(2,94,115) | Titles, important backgrounds | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | rgb(3,140,140) | Accents, links | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | rgb(4,191,173) | Highlights, decorations | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | Hover, glow effects | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | Basic background | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | rgb(250,250,250) | Section background | `<i class="fas fa-square"></i>` |

#### Dark Theme "Yaryo" - Summer Night
| Name | HEX | RGB | Primary Use | Font Awesome Icon Examples |
|------|-----|-----|-------------|---------------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | Titles, important backgrounds (firefly light) | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | Accents, links (starlight) | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | rgb(3,140,140) | Highlights, decorations (night sea surface) | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | Hover, glow effects (moonlight) | `<i class="fas fa-feather"></i>` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | Basic background (deep night sea) | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | Section background (night mist) | `<i class="fas fa-square"></i>` |

### 2. Font Definition (Ryoga Japanese Modern Fonts)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">
```

**CSS Class Definitions:**
```css
/* Title fonts */
.kaisei-decol-regular {
  font-family: "Kaisei Decol", serif;
  font-weight: 400;
  font-style: normal;
}

.kaisei-decol-bold {
  font-family: "Kaisei Decol", serif;
  font-weight: 700;
  font-style: normal;
}

/* Body/UI fonts */
.m-plus-rounded-1c-regular {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.m-plus-rounded-1c-bold {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;
  font-style: normal;
}
```

### 3. Navigation Bar (Required Implementation)

**Must place the following buttons in the navigation bar:**

```html
<!-- Navigation bar -->
<nav class="navbar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 9999; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <!-- Logo/Title -->
    <div class="nav-brand kaisei-decol-bold" style="color: var(--current-primary); font-size: 1.5rem;">
        <i class="fas fa-waves" style="margin-right: 8px;"></i>
        Ryoga Thumbnail
    </div>

    <!-- Navigation buttons -->
    <div class="nav-buttons" style="display: flex; gap: 12px;">
        <!-- Theme toggle button -->
        <button id="themeToggle" class="nav-btn m-plus-rounded-1c-regular" style="background: var(--current-accent); color: white; border: none; padding: 8px 16px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 6px;">
            <i class="fas fa-sun"></i>
            <span>Yaryo</span>
        </button>

        <!-- Edit mode button -->
        <button id="toggleEdit" class="nav-btn m-plus-rounded-1c-regular" style="background: var(--current-primary); color: white; border: none; padding: 8px 16px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 6px;">
            <i class="fas fa-edit"></i>
            <span>Edit Mode</span>
        </button>
    </div>
</nav>

<!-- Main content area (add margin for navigation bar height) -->
<main style="margin-top: 80px;">
    <!-- Place thumbnail content here -->
</main>
```

### 4. CSS Variable Definition (Theme Switching Support)
```css
:root {
  /* Light theme "Ryoga" default */
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

/* Dark theme "Yaryo" */
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

/* Navigation bar theme support */
[data-theme="dark"] .navbar {
  background: rgba(10,26,31,0.95) !important;
}

/* Smooth theme switching animation */
* {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}
```

### 5. JavaScript (Required Implementation)
```javascript
// Edit mode
const editBtn = document.getElementById('toggleEdit');
const editIcon = editBtn.querySelector('i');
const editText = editBtn.querySelector('span');
let editing = false;

editBtn.onclick = () => {
    editing = !editing;
    document.body.contentEditable = editing;
    document.designMode = editing ? 'on' : 'off';

    if (editing) {
        editIcon.className = 'fas fa-save';
        editText.textContent = 'Save';
        editBtn.style.background = 'var(--current-neon)';
        editBtn.style.color = 'var(--current-primary)';
    } else {
        editIcon.className = 'fas fa-edit';
        editText.textContent = 'Edit Mode';
        editBtn.style.background = 'var(--current-primary)';
        editBtn.style.color = 'white';
    }
};

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('i');
const themeText = themeBtn.querySelector('span');
let isDark = false;

// Initial theme setting
document.documentElement.setAttribute('data-theme', 'light');

themeBtn.onclick = () => {
    isDark = !isDark;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);

    if (isDark) {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Ryoga';
    } else {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Yaryo';
    }

    // Update button background color to match current theme
    setTimeout(() => {
        themeBtn.style.background = 'var(--current-accent)';
        if (!editing) {
            editBtn.style.background = 'var(--current-primary)';
        }
    }, 50);
};
```

### 6. Design Elements (Font Awesome Utilization Strategy)

#### Required Elements:

1. **Thumbnail Content Area (16:9)**:
```css
.thumbnail-container {
    width: 1920px;
    height: 1080px;
    max-width: 100vw;
    max-height: 56.25vw; /* 16:9 ratio */
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--current-bg-light), var(--current-bg-dark));
    margin: 0 auto;
}
```

2. **Title Section (Left Layout)**:
   - **Main Title**: clamp(3rem,8vw,6rem) / **Kaisei Decol Bold** / Primary color / ***Combine with summer-related icons***
     - Examples: `<i class="fas fa-waves"></i>` `<i class="fas fa-umbrella-beach"></i>` `<i class="fas fa-sun"></i>`
   - **Subtitle**: clamp(1.2rem,3vw,2rem) / **M PLUS Rounded 1c Regular** / Secondary color / ***Wind/cool-related icons***
     - Examples: `<i class="fas fa-wind"></i>` `<i class="fas fa-leaf"></i>` `<i class="fas fa-fan"></i>`

3. **Visual Elements (Right Layout)**:
   - **Main Graphics**: Boldly place Font Awesome icons related to article content
     - Data: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-analytics"></i>`
     - Business: `<i class="fas fa-briefcase"></i>` `<i class="fas fa-handshake"></i>` `<i class="fas fa-target"></i>`
     - Tech: `<i class="fas fa-code"></i>` `<i class="fas fa-cogs"></i>` `<i class="fas fa-rocket"></i>`
   - **Badges/Labels**: Accent color background + rounded design + relevant icons
     - Example: `<i class="fas fa-tag"></i>` + category name

4. **Content Features (Bottom Section)**:
   - **3-4 Main Points**: Each point with icon + short text
     - Point display: `<i class="fas fa-check-circle"></i>` `<i class="fas fa-lightbulb"></i>` `<i class="fas fa-star"></i>`
     - Process display: Use `<i class="fas fa-arrow-right"></i>` to show flow
   - **Statistics/Numbers**: Emphasize with Neon-Gold color + number-related icons
     - Examples: `<i class="fas fa-percentage"></i>` `<i class="fas fa-chart-line"></i>` `<i class="fas fa-trophy"></i>`

5. **Professional Elements**:
   - **Background**: Ryoga gradient (Primary → BG-Light)
   - **Decorative Pattern**: Lightweight SVG implementation of seigaiha (blue wave) pattern
   - **Shadow Effects**: `box-shadow: 0 8px 32px rgba(4,191,173,0.2);` for cool floating feel
   - **Grid Pattern**: Subtle Japanese-style lattice in background

### 7. Responsive Support
```css
/* Font Awesome icon size adjustment */
.icon-xl { font-size: clamp(4rem, 8vw, 8rem); }
.icon-lg { font-size: clamp(2rem, 4vw, 4rem); }
.icon-md { font-size: clamp(1.5rem, 3vw, 2.5rem); }
.icon-sm { font-size: clamp(1rem, 2vw, 1.5rem); }

/* Navigation bar responsive support */
@media (max-width: 768px) {
    .nav-brand {
        font-size: 1.2rem !important;
    }
    .nav-buttons {
        gap: 8px !important;
    }
    .nav-btn {
        padding: 6px 12px !important;
        font-size: 0.9rem !important;
    }
}
```

### 8. Ryoga Decorative Elements (Theme Compatible)

#### Light Theme Decorations
```css
/* Summer cloud texture */
.summer-cloud {
    background: linear-gradient(135deg, #FAFAFA 0%, #F2F2F2 50%, #E8F4F8 100%);
    filter: blur(0.4px);
}

/* Seigaiha (blue wave) pattern */
.seigaiha-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%23038C8C' fill='none' opacity='0.1'/%3E%3C/svg%3E");
}
```

#### Dark Theme Decorations
```css
/* Night mist texture */
.night-mist {
    background: linear-gradient(135deg, #0A1A1F 0%, #1A2F35 50%, #2A3F45 100%);
    filter: blur(0.6px);
}

/* Constellation pattern */
.constellation-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23F2C166' opacity='0.6'/%3E%3Ccircle cx='80' cy='30' r='0.5' fill='%2366D9EF' opacity='0.8'/%3E%3Ccircle cx='60' cy='70' r='0.8' fill='%2304BFAD' opacity='0.7'/%3E%3C/svg%3E");
}
```

---

## 🎯 Implementation Template

### Basic HTML Structure (Navigation Bar Compatible Version)
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Article Title] - Ryoga Thumbnail</title>

    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">

    <style>
        /* Ryoga color palette definition */
        :root {
            --primary: #025E73;
            --secondary: #038C8C;
            --accent: #04BFAD;
            --neon-gold: #F2C166;
            --bg-dark: #F2F2F2;
            --bg-light: #FAFAFA;
        }

        /* Dark theme */
        [data-theme="dark"] {
            --primary: #04BFAD;
            --secondary: #F2C166;
            --accent: #038C8C;
            --neon-gold: #66D9EF;
            --bg-dark: #0A1A1F;
            --bg-light: #1A2F35;
        }

        /* Thumbnail basic styles */
        .thumbnail-container {
            width: 1920px;
            height: 1080px;
            background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
            position: relative;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 2fr 1fr;
            margin: 0 auto;
        }

        /* Specific style implementations follow... */
    </style>
</head>
<body>
    <!-- Navigation bar (required) -->
    <nav class="navbar">
        <!-- Navigation bar content (see above) -->
    </nav>

    <!-- Main content area -->
    <main style="margin-top: 80px;">
        <div class="thumbnail-container">
            <!-- Title section -->
            <div class="title-section">
                <h1 class="kaisei-decol-bold">
                    <i class="fas fa-[relevant-icon]"></i>
                    [Main Title]
                </h1>
                <h2 class="m-plus-rounded-1c-regular">
                    <i class="fas fa-[sub-icon]"></i>
                    [Subtitle]
                </h2>
            </div>

            <!-- Visual section -->
            <div class="visual-section">
                <i class="fas fa-[main-icon] icon-xl"></i>
                <div class="badge">
                    <i class="fas fa-tag"></i>
                    [Category]
                </div>
            </div>

            <!-- Points section -->
            <div class="points-section">
                <div class="point">
                    <i class="fas fa-check-circle"></i>
                    <span>[Point 1]</span>
                </div>
                <!-- Other points... -->
            </div>
        </div>
    </main>

    <script>
        /* JavaScript implementation (see above) */
    </script>
</body>
</html>
```

---

## 🎯 Important Implementation Points

### Important Notes for Navigation Bar Implementation
1. **Required Placement**: Editable button and dark theme toggle button must be placed in the **navigation bar**
2. **Fixed Position**: Always visible during scrolling with `position: fixed`
3. **z-index Management**: Display in front of other elements with `z-index: 9999`
4. **Responsive Support**: Maintain button sizes that are easy to operate on mobile
5. **Theme Support**: Navigation bar itself must support dark theme

### Notes on Font Awesome Utilization
1. **Performance**: Use only necessary icons and load Font Awesome CDN efficiently
2. **Consistency**: Unify icons with the same meaning and maintain visual hierarchy
3. **Ryoga Taste**:
   - Prioritize summer element icons like water, wind, leaves, fish, sun
   - Use night summer element icons like moon, stars, fireflies, night wind in dark theme
4. **Responsive**: Use appropriate icon sizes with `fa-lg` `fa-2x` `fa-3x`
5. **Accessibility**: Always include `aria-label` or `title` attributes

### Essence of Ryoga Summer Japanese Design
- **Day and Night Aesthetics**: Create beauty of both summer day and night with appropriate whitespace and depth of blue-green
- **Natural Colors**: Refreshing and warm palette based on sea, river, blue maple, and yellow kerria colors
- **Typography**: Express beautiful contrast like gradients from summer sea to blue maple through text
- **Refreshing Elegance**: Minimal decoration, emphasizing functional beauty and cool beauty
- **Navigation**: Navigation bar design emphasizing cool and intuitive operability

The thumbnail generated according to this prompt will be a high-quality blog article thumbnail that fuses Japanese summer aesthetics with modern refreshment, with **edit functionality and theme switching functionality placed in the navigation bar**. Through cool and refreshing beauty, it beautifully and effectively expresses article content.
