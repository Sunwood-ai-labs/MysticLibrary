---
title: "Graphic Recording Style Infographic Conversion Prompt V5"
sourcePath: "prompts/documentation/Graphic-recording-style-infographic-anim-v5_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/Graphic-recording-style-infographic-anim-v5_EN.md`
> Japanese: [JA](/documentation/Graphic-recording-style-infographic-anim-v5)

# Graphic Recording Style Infographic Conversion Prompt V5

## Purpose
Please convert the following content into a Japanese graphic recording-style HTML infographic utilizing **large Font Awesome icons** and **handwritten-style speech bubbles**. Place one large icon in each card and actively use small inline icons to visually represent information in an easy-to-understand manner.

## Design Specifications
### 1. Color Scheme
```
<palette>
<color name='UI/UX-1' rgb='1B6C8C' r='26' g='108' b='140' />
<color name='UI/UX-2' rgb='BF8136' r='191' g='129' b='53' />
<color name='UI/UX-3' rgb='F2E8E4' r='242' g='231' b='227' />
<color name='UI/UX-4' rgb='260101' r='38' g='0' b='0' />
<color name='UI/UX-5' rgb='BF5656' r='191' g='86' b='86' />
</palette>
```

### 2. Graphic Recording Elements (Improved Version)
- Place everything on a canvas with white background (#FFF8F5)
- Place **one extra-large theme icon** in each card (approximately fa-5x)
- **Structure card content in list format with small icons**
- Add points and supplementary information with **handwritten-style speech bubbles**
- Divide content into multiple sections and organize in card format
- Visually emphasize keywords in tag format
- Display code samples in preview format
- Visual elements (arrows and lines) connecting related concepts
- Emphasize each card with animation (apply to any section)
- Increase information density within cards and organize visually with small icons

### 3. Typography
  - Title: 36px, #333333 (text color), bold, with extra-large related icon (fa-6x or larger)
  - Card title: 24px, #555555, with large icon (fa-5x)
  - List heading: 18px, #333333
  - List items: 16px, #333333, with small icons
  - Tags: 16px, #333333, with background color
  - Body text: 16px, #333333, line spacing 1.5
  - Code preview: 14px, monospace font, with background color
  - Speech bubble text: handwritten font, 15px, #333333
  - Dates and supplementary: 14px, #777777
  - Font specification:
    ```html
    &lt;style&gt;
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```

### 4. Layout (Improved Version)
  - Overall: **4-column layout** (responsive)
  - Header: Title with ultra-large icon (fa-7x) + date
  - Each card: One large icon + list-format content + speech bubble
  - Card interior: Organize information in structured list format
  - Code preview: Preview format with monospace font and background color
  - Spacing: Ensure sufficient spacing to enhance visibility
  - Width: 100% (centered at approximately 2000px max)

### 5. Speech Bubble and Tag Expression
- **Handwritten-style speech bubbles**: 3 variations (standard, variation 1, variation 2)
- **Position variations**: Speech bubbles from top/left-right/bottom for layout variation
- **Tag expression**: Highlight keywords and code examples in tag-style design
- **Handwritten font**: Use Japanese handwritten fonts like "Yomogi"
- **Icon decoration**: Place small icons inside speech bubbles as well

### 6. Animation Effects
- **Animation on large icons in each card** (fa-beat-fade, fa-bounce, fa-flip, etc.)
- Fade-in scale animation on card appearance
- Highlight effect on important keyword appearance
- Background color change animation (on hover)
- Card appearance effects linked to scrolling

## Icon Usage Guidelines (Improved Version)
- Large icon per card (only one):
  - Main concept: **fa-5x〜fa-7x** (placed in center of card)

- Small icons for list items:
  - Inline icons: **fa-lg** (size matching text)
  - Recommended icons by concept:
    - Love/affection: fa-heart, fa-heart-crack, fa-kiss, fa-hand-holding-heart
    - Relationships: fa-people-arrows, fa-handshake, fa-users, fa-user-group
    - Emotions: fa-face-smile, fa-face-sad-tear, fa-face-angry, fa-face-surprise
    - Questions: fa-circle-question, fa-question, fa-magnifying-glass
    - Time/process: fa-clock, fa-hourglass, fa-calendar, fa-timeline
    - Communication: fa-comments, fa-message, fa-comment-dots
    - Thinking/ideas: fa-brain, fa-lightbulb, fa-thought-bubble
    - Positive elements: fa-thumbs-up, fa-check, fa-circle-check
    - Negative elements: fa-thumbs-down, fa-ban, fa-triangle-exclamation
    - Direction: fa-arrow-right, fa-arrow-left, fa-arrow-up, fa-arrow-down
    - Relationships: fa-link, fa-handshake, fa-code-branch, fa-network-wired
    - Programming: fa-code, fa-terminal, fa-file-code, fa-laptop-code
    - Settings: fa-gear, fa-sliders, fa-screwdriver-wrench, fa-tools
    - Information: fa-info-circle, fa-circle-info, fa-book, fa-clipboard
    - Usage examples: fa-code, fa-terminal, fa-laptop, fa-mobile

## HTML/CSS Implementation Points (Improved Version)
```css
/* Card style */
.section-card {
  flex: 1;
  min-width: 220px;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

/* Card icon container */
.mega-icon-container {
  text-align: center;
  margin: 15px 0;
}

/* Card content */
.card-content {
  padding: 0 10px 15px;
}

/* Keyword list */
.keyword-list {
  margin: 15px 0;
  padding: 0;
  list-style-type: none;
}

.keyword-list li {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.keyword-list li i {
  margin-right: 8px;
  color: var(--ui-color-2);
  min-width: 16px;
}

/* Keyword tags */
.keyword-tag {
  background-color: var(--ui-color-3);
  color: var(--ui-color-4);
  padding: 3px 8px;
  border-radius: 5px;
  margin-right: 5px;
  display: inline-block;
  font-weight: bold;
}

/* Handwritten-style speech bubble */
.speech-bubble {
  position: relative;
  background: #fff;
  border: 3px solid var(--ui-color-1);
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px 5px;
  font-family: 'Yomogi', cursive;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  transform: rotate(-1deg);
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 20px;
  border-width: 12px 8px 0;
  border-style: solid;
  border-color: var(--ui-color-1) transparent;
  display: block;
  width: 0;
}

/* Speech bubble variations */
.speech-bubble.right::after {
  left: auto;
  right: 20px;
  transform: rotate(15deg);
}

.speech-bubble.top::after {
  bottom: auto;
  top: -13px;
  border-width: 0 8px 12px;
  transform: rotate(-5deg);
}

.speech-bubble.variant-1 {
  background: #FFF9E3;
  border-color: var(--ui-color-2);
  transform: rotate(1deg);
}

.speech-bubble.variant-1::after {
  border-color: var(--ui-color-2) transparent;
}

.speech-bubble.variant-2 {
  background: #FFE9E9;
  border-color: var(--ui-color-5);
  transform: rotate(-2deg);
}

.speech-bubble.variant-2::after {
  border-color: var(--ui-color-5) transparent;
}

/* Handwritten text */
.handwritten {
  font-family: 'Yomogi', cursive;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

/* Code preview */
pre {
  background: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 10px;
  overflow-x: auto;
}

/* Responsive support */
@media (max-width: 1600px) {
  .section-card {
    min-width: 280px;
  }
}

@media (max-width: 1200px) {
  .section-card {
    min-width: 320px;
  }
}

@media (max-width: 900px) {
  .section-card {
    min-width: 380px;
  }
}

@media (max-width: 768px) {
  .section-layout {
    flex-direction: column;
  }

  .section-card {
    width: 100%;
    min-width: auto;
  }
}
```

## Overall Guidelines (Improved Version)
- Place **one large icon in each card** and actively utilize small inline icons
- **Structure information in list format** to improve visibility and ease of understanding
- Add points and supplementary information with **handwritten-style speech bubbles**
- **Highlight keywords in tag format** for visual emphasis
- **Display code samples in preview format** to enhance practicality
- Express information relationships with visual elements (arrows and lines)
- Emphasize important elements with animation
- Maintain overall unity while adding variation to avoid monotony
- Use Japanese notation as a base, and utilize English keywords as needed

## Sample HTML Code (Improved Version)
```html
<!-- Card example -->
<div class="section-card fade-in-scale">
  <div class="mega-icon-container">
    <i class="fa-solid fa-code fa-5x" style="color: var(--ui-color-1); animation: fa-bounce 2s;" aria-hidden="true"></i>
    <h2>Section Title</h2>
  </div>

  <div class="card-content">
    <ul class="keyword-list">
      <li>
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span>List item 1: <span class="keyword-tag">Keyword</span></span>
      </li>
      <li>
        <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
        <span>List item 2</span>
      </li>
      <li>
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <span>Code example:</span>
      </li>
    </ul>

    <pre>
const sample = {
  title: 'Sample code',
  description: 'Display in preview format'
};</pre>
  </div>

  <div class="speech-bubble">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-2);"></i>
      Supplementary information and explanations
      <br>
      Expressed with handwritten-style speech bubbles!
      <br>
      <span class="keyword-tag">Important point</span>
    </span>
  </div>
</div>
```

## Text/Article to Convert
---
