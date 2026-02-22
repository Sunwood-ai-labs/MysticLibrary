---
title: "Graphic Recording (Graphico) HTML Creation Prompt V2 (Full Moon Dark Theme Version)"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-v2-dcolor_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/Graphic-recording-infographic-anim-v2-dcolor_EN.md`
> Japanese: [JA](/documentation/Graphic-recording-infographic-anim-v2-dcolor)

# Graphic Recording (Graphico) HTML Creation Prompt V2 (Full Moon Dark Theme Version)

Please reproduce graphic recording in HTML according to the following requirements.

## What is Graphic Recording

Graphic recording (graphico) is a method of summarizing the content of meetings and presentations in real time using diagrams, illustrations, and text. It makes it easier to grasp the overall picture of discussions and has the advantage of making ideas easier to generate. Compared to text-only minutes, it is intuitively easier to convey, and visual records are more likely to remain in memory as information.

## Basic Requirements

- Use handwritten style fonts (Kaisei Decol, Yomogi, Zen Kurenaido)
- Use large Font Awesome icons and emojis instead of pictures (size around 70px)
- Make card backgrounds transparent, use no borders, and blend with background
- Express handwritten style speech bubbles with CSS (background with light transparency)
- Responsive design
- 5-column structure (container width is 2000px)
- Wide spacing between cards (around 40px)
- Grid gap is 30px

## Typography
  - Title: 32px, gradient effect, bold, place Font Awesome icons on left and right
  - Subtitle: 16px, #475569, add related Font Awesome icon
  - Section headings: 18px, #1e40af, always place Font Awesome icon on left side, icon has animation effect
  - Body text: 14px, #334155, line height 1.4, add small related Font Awesome icons or emojis for important keywords
  - Font specification:
    ```html
    &lt;style&gt;
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```

## Color Palette
- Use the following color map for dark theme
```
<palette>
<color name='Full-moon-1' rgb='010D00' r='0' g='12' b='0' />
<color name='Full-moon-2' rgb='D9CAB0' r='216' g='202' b='175' />
<color name='Full-moon-3' rgb='A69177' r='165' g='144' b='119' />
<color name='Full-moon-4' rgb='F2E2CE' r='242' g='225' b='205' />
<color name='Full-moon-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

## CSS Main Settings
```css
.container {
    max-width: 2000px;
    margin: 0 auto;
}

body {
    /* Handwritten style grid line background */
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v100H0z" fill="none"/><path d="M0 10h100M10 0v100" stroke="%23e0e0e0" stroke-width="0.5" stroke-dasharray="2,3"/></svg>');
    background-size: 30px 30px;
    background-color: #f9f7f1;
    overflow-x: hidden;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
}

.card {
    background-color: transparent;
    padding: 15px;
    border-radius: 15px;
    position: relative;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
}

.icon-large {
    font-size: 70px;
    display: block;
    margin: 15px auto;
    text-align: center;
}

.speech-bubble {
    position: relative;
    background-color: rgba(242, 187, 87, 0.1);
    border-radius: 15px;
    padding: 12px;
}

.comparison-item {
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
}

.highlight-box {
    border-left: 3px solid #F2BC57;
    padding-left: 10px;
    background-color: transparent;
}

/* Media queries */
@media (max-width: 1600px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

## Layout Instructions

- Emphasize handwritten style atmosphere
- Important keywords in large font, supplementary explanations in small font
- Use large Font Awesome icons to draw visual interest
- All cards have transparent backgrounds, use no borders or border lines
- Content within cards (comparison items, speech bubbles, highlight boxes, etc.) also set to transparent or light transparency

## Creation Steps

1. First, build overall structure (container, title, 5-column grid)
2. Place each section as a card
3. Cards include heading, large icon, text content
4. Display comparison items and statistical data side by side
5. Emphasize important points with speech bubbles or highlight boxes
6. Footer includes graphic recording creation date and information source

## Content to Convert

Please convert content to graphic recording format.
