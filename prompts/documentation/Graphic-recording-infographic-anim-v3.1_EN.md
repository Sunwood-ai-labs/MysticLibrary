# Graphic Recording (Graleco) HTML Creation Prompt V3.1

Please create a graphic recording in HTML following the requirements below.
## What is Graphic Recording
Graphic recording (graleco) is a method of summarizing the content of meetings and presentations in real time using diagrams, illustrations, and text. It makes it easier to grasp the overall picture of discussions and facilitates the generation of ideas. Compared to text-only minutes, it conveys information intuitively, and visual records are more likely to be retained in memory.

## Basic Requirements
- Use handwritten-style fonts (Kaisei Decol, Yomogi, Zen Kurenaido)
- Use Font Awesome icons and emojis instead of illustrations
- The following SVG assets may be used exceptionally (please use them actively)
- Make card backgrounds transparent, avoid using borders, and blend them with the background
- Express handwritten-style speech bubbles with CSS (background should have light transparency)
- Responsive design
- 5-column layout (container width 2000px)
- Wide spacing between cards (around 40px)
- Grid gap: 30px
## Typography
  - Title: 32px, gradient effect, bold, place Font Awesome icons on left and right
  - Subtitle: 16px, #475569, include relevant Font Awesome icon
  - Section heading: 18px, #1e40af, always place Font Awesome icon on left side with animation effect
  - Body text: 14px, #334155, line height 1.4, include small relevant Font Awesome icons or emojis for important keywords
  - Font specification:
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```
## Color Palette
```
<palette>
<color name='Travel-1' rgb='45858C' r='68' g='133' b='140' />
<color name='Travel-2' rgb='A0D9D9' r='160' g='216' b='216' />
<color name='Travel-3' rgb='D9C589' r='216' g='196' b='136' />
<color name='Travel-4' rgb='BF9765' r='191' g='150' b='101' />
<color name='Travel-5' rgb='D92B04' r='216' g='43' b='4' />
</palette>
```

## SVG Assets

1. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-computer-chip-or-GPU-with-simple-circuit-pattern-lines.-Chip-ba_resized_1.svg
2. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-computer-chip-or-GPU-with-simple-circuit-pattern-lines.-Chip-ba_resized.svg
3. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-robot-with-a-square-head-and-digital-circuit-patterns-inside.-T_resized_1.svg
4. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-robot-with-a-square-head-and-digital-circuit-patterns-inside.-T_resized.svg
5. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-simplified-person-sitting-at-a-desk-with-a-computer.-Person-in-_resized_1.svg
6. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-simplified-person-sitting-at-a-desk-with-a-computer.-Person-in-_resized.svg
7. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-thought-bubble-or-cloud-with-a-question-mark-inside.-Cloudbubbl_resized.svg
8. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-three-brain-shapes-of-increasing-size-with-simple-circuit-pattern_resized.svg
9. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-two-simple-line-graphs-side-by-side---one-with-an-upward-trend-an_resized.svg
10. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-two-simplified-human-figures-standing-side-by-side-with-a-connect_resized.svg

## CSS Main Settings
```css
.container {
    max-width: 2000px;
    margin: 0 auto;
}
body {
    /* Handwritten-style grid line background */
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
- Emphasize handwritten-style atmosphere
- Make important keywords large, supplementary explanations in smaller font
- Use Font Awesome icons and assets prominently to create visual interest
- Make all card backgrounds transparent, avoid using borders or frames
- Set content within cards (comparison items, speech bubbles, highlight boxes, etc.) to transparent or light transparency

## Creation Steps
1. First, build the overall structure (container, title, 5-column grid)
2. Place each section as a card
3. Include headings, large icons, and text content in cards
4. Display comparison items and statistical data side by side
5. Emphasize important points with speech bubbles or highlight boxes
6. Footer should include the creation date and information source of the graphic recording
## Content to Convert
Please convert the content to graphic recording format.
