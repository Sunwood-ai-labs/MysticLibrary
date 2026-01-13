# Graphico Thumbnail Prompt v3 ~Ryoga (Cool Elegance)~

This prompt is for generating **high-quality blog article thumbnails** that sublimate the **aesthetics of summer coolness and Japanese harmony** into a modern context. Using ***Font Awesome actively***, it expresses visually refined and instantly understandable 16:9 aspect ratio infographics like those created by top-tier consultants, with the aesthetic consciousness of Ryoga (cool elegance).

---

## 🎨 Basic Configuration

### Prompt Format for Thumbnail Creation
```
Create a thumbnail for [article title] in HTML/CSS
Make it 16:9 size (1920x1080px)
Utilize Font Awesome icons to enhance infographic readability and professionalism
Also, use the Ryoga color map and fonts specified below
```

---

## 🎨 Design Specifications

### 1. Color Palette Definition (Ryoga Summer Harmony Palette + Yoryo Dark Theme)

#### Light Theme "Ryoga" - Summer Day
| Name | HEX | RGB | Primary Usage | Font Awesome Icon Examples |
|------|-----|-----|---------------|---------------------------|
| Primary | #025E73 | rgb(2,94,115) | Title, important background | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | rgb(3,140,140) | Accent, links | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | rgb(4,191,173) | Highlight, decoration | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | Hover, glow effect | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | Basic background | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | rgb(250,250,250) | Section background | `<i class="fas fa-square"></i>` |

#### Dark Theme "Yoryo" - Summer Night
| Name | HEX | RGB | Primary Usage | Font Awesome Icon Examples |
|------|-----|-----|---------------|---------------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | Title, important background (firefly light) | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | Accent, links (starlight) | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | rgb(3,140,140) | Highlight, decoration (night sea surface) | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | Hover, glow effect (moonlight) | `<i class="fas fa-feather"></i>` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | Basic background (deep night sea) | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | Section background (night mist) | `<i class="fas fa-square"></i>` |

### 2. Font Definition (Ryoga Japanese Modern Font)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">
```

**CSS Class Definition:**
```css
/* Fonts for titles */
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

/* Fonts for body text and UI */
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

### 3. Design Elements (Font Awesome Utilization Strategy)

#### Required Elements:

1. **Title Section (Left Layout)**:
   - **Main Title**: clamp(3rem,8vw,6rem) / **Kaisei Decol Bold** / Primary color / ***Combined with summer-related icons***
     - Examples: `<i class="fas fa-waves"></i>` `<i class="fas fa-umbrella-beach"></i>` `<i class="fas fa-sun"></i>`
   - **Subtitle**: clamp(1.2rem,3vw,2rem) / **M PLUS Rounded 1c Regular** / Secondary color / ***Wind and coolness-related icons***
     - Examples: `<i class="fas fa-wind"></i>` `<i class="fas fa-leaf"></i>` `<i class="fas fa-fan"></i>`

2. **Visual Elements (Right Layout)**:
   - **Main Graphic**: Boldly arrange Font Awesome icons related to article content
     - Data-related: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-analytics"></i>`
     - Business-related: `<i class="fas fa-briefcase"></i>` `<i class="fas fa-handshake"></i>` `<i class="fas fa-target"></i>`
     - Technology-related: `<i class="fas fa-code"></i>` `<i class="fas fa-cogs"></i>` `<i class="fas fa-rocket"></i>`
   - **Badges/Labels**: Accent color background + rounded design + related icons
     - Example: `<i class="fas fa-tag"></i>` + category name

3. **Content Features (Bottom Section)**:
   - **3-4 Main Points**: Icon + short text for each point
     - Point display: `<i class="fas fa-check-circle"></i>` `<i class="fas fa-lightbulb"></i>` `<i class="fas fa-star"></i>`
     - Process display: `<i class="fas fa-arrow-right"></i>` to show flow
   - **Statistics/Numbers**: Emphasized in Neon-Gold color + number-related icons
     - Examples: `<i class="fas fa-percentage"></i>` `<i class="fas fa-chart-line"></i>` `<i class="fas fa-trophy"></i>`

4. **Professional Elements**:
   - **Background**: Ryoga gradient (Primary → BG-Light)
   - **Decorative Pattern**: Lightweight SVG implementation of Seigaiha wave pattern
   - **Shadow Effect**: `box-shadow: 0 8px 32px rgba(4,191,173,0.2);` for cool floating sensation
   - **Grid Pattern**: Place subtle Japanese-style lattice in background

### 4. Responsive Support
```css
/* Fixed 16:9 aspect ratio */
.thumbnail-container {
    width: 1920px;
    height: 1080px;
    max-width: 100vw;
    max-height: 56.25vw; /* 16:9 ratio */
    position: relative;
    overflow: hidden;
}

/* Font Awesome icon size adjustment */
.icon-xl { font-size: clamp(4rem, 8vw, 8rem); }
.icon-lg { font-size: clamp(2rem, 4vw, 4rem); }
.icon-md { font-size: clamp(1.5rem, 3vw, 2.5rem); }
.icon-sm { font-size: clamp(1rem, 2vw, 1.5rem); }
```

### 5. Ryoga Decorative Elements (Theme Correspondence)

#### Light Theme Decorations
```css
/* Summer cloud texture */
.summer-cloud {
    background: linear-gradient(135deg, #FAFAFA 0%, #F2F2F2 50%, #E8F4F8 100%);
    filter: blur(0.4px);
}

/* Seigaiha wave pattern */
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

### Basic HTML Structure
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

        /* Thumbnail basic style */
        .thumbnail-container {
            width: 1920px;
            height: 1080px;
            background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
            position: relative;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 2fr 1fr;
        }

        /* Specific style implementation follows... */
    </style>
</head>
<body>
    <div class="thumbnail-container">
        <!-- Title section -->
        <div class="title-section">
            <h1 class="kaisei-decol-bold">
                <i class="fas fa-[related-icon]"></i>
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
</body>
</html>
```

---

## 🎯 Important Implementation Points

### Notes on Font Awesome Usage
1. **Performance**: Use only necessary icons and load Font Awesome CDN efficiently
2. **Consistency**: Unify icons with the same meaning and maintain visual hierarchy
3. **Ryoga Taste**:
   - Prioritize summer element icons like water, wind, leaves, fish, sun
   - Use night summer elements like moon, stars, fireflies, night breeze in dark theme
4. **Responsive**: Distinguish between `fa-lg` `fa-2x` `fa-3x` for icon sizes
5. **Accessibility**: Always provide `aria-label` or `title` attributes

### Essence of Ryoga Summer Harmony Design
- **Aesthetics of Day and Night**: Express the beauty of both summer day and night with appropriate white space and depth of blue-green
- **Natural Colors**: A refreshing and warm palette based on sea, river, blue maple, and mountain rose colors
- **Typography**: Express beautiful contrasts like the gradient from summer sea to blue maple through typography
- **Refreshing Elegance**: Emphasize functional beauty and cool elegance with minimal decoration

The thumbnails generated following this prompt will be high-quality blog article thumbnails that fuse Japanese summer aesthetic consciousness with modern refreshingness, visually appealing and instantly conveying information. They beautifully and effectively express article content through cool and refreshing beauty.
