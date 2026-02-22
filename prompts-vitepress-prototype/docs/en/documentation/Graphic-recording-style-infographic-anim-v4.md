---
title: "Graphic Recording Style Infographic Conversion Prompt (V4: Icon Emphasis Edition)"
sourcePath: "prompts/documentation/Graphic-recording-style-infographic-anim-v4_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/Graphic-recording-style-infographic-anim-v4_EN.md`
> Japanese: [JA](/documentation/Graphic-recording-style-infographic-anim-v4)

# Graphic Recording Style Infographic Conversion Prompt (V4: Icon Emphasis Edition)

## Purpose
  Please convert the following content into a Japanese graphic recording style HTML infographic that maximizes the use of **large Font Awesome icons**. Instead of hand-drawn illustrations, express concepts visually with high impact using large Font Awesome icons.

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

### 2. Graphic Recording Elements (Icon Emphasis)
- Place everything on a white background (#FFF8F5) canvas
- Place an **extra-large theme/title icon in the center** (fa-5x to fa-7x)
- Divide content into multiple sections, enclosing in hand-drawn style speech bubbles or rounded frames
- Place **extra large Font Awesome icons for each keyword** (fa-4x to fa-6x)
- **Icon-centered layout** with text placed as supplementary
- Place thick arrows and lines connecting related concepts (→ such as fa-arrow-right-long) in large sizes
- Emphasize keywords with colored markers or underlines (background color emphasis)
- Place extra large icons (fa-star, fa-lightbulb, etc.) at fa-5x or larger for important points
- Use large emoji-style icons (fa-face-smile, fa-face-sad, etc.) at fa-4x or larger for emotional expressions
- Place large fa-circle-question at fa-4x or larger for questions
- Use extra large fa-user, fa-person, etc. icons at fa-5x for person representations
- Use fa-circle-dot etc. icons for bullet points for each concept (larger than usual)
- Also make connection icons like fa-arrows-left-right-to-line larger to show relationships
- Express frames and lines in hand-drawn style with thick lines

### 3. Typography
  - Title: 36px, #333333 (text color), bold, with extra large related icon (fa-6x or larger)
  - Subtitle: 24px, #555555, with large icon (fa-4x)
  - Keywords: 20px, #333333, bold, with background color, large icons (fa-3x to fa-5x) placed alongside
  - Body text: 16px, #333333, line height 1.5 (reduce text amount relative to icons)
  - Dates and notes: 14px, #777777
  - Font specification:
    ```html
    &lt;style&gt;
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```

### 4. Layout (Icon Centered)
  - Overall: **Icon-centered layout**, prioritizing visual impact
  - Header: Title with extra large icon (fa-7x) + date
  - Radial layout with **icons placed largely in center and text arranged around**
  - Sections: **Each section composed around an icon**, rounded corner cards (border-radius: 20px) or speech bubbles
  - Whitespace: Ensure sufficient whitespace to enhance icon visibility
  - Width: 100% (centered at maximum around 2000px)
  - **4-column structure** (to display icons largely)

### 5. Enhanced Icon Expressiveness
- **Extra large icons**: Use fa-7x to fa-8x sizes for main concepts
- **Icon stacking**: Use fa-stack to express composite meanings
- **Icon groups**: Group related icons to express concept spread
- **Relationships between icons**: Connect with large arrows and lines for visual association
- **Text labels on icons**: Place concise labels below large icons
- **Icon backgrounds**: Emphasize icons with circular or hexagonal backgrounds
- **Icon color coding**: Color code by concept category to improve visibility

### 6. Animation Effects (Enhanced Edition)
- **Prominent animations on large Font Awesome icons** (fa-beat-fade, fa-bounce, fa-flip, etc.)
- Animation that greatly enlarges icons on appearance then settles to proper size
- Strong highlight effect on important keyword appearance (flash effect)
- Thick and flowing animations for connection lines and arrows
- Large rotation and scale animations for icons (especially where attention is desired)
- Clear background color change animations
- Large icon appearance effects linked to scrolling
- Click/tap effects where icons respond largely (enlargement, color change)

## Icon Utilization Guidelines (Size Enhanced Edition)
- Recommended icons by concept:
  - Love, affection: fa-heart, fa-heart-crack, fa-kiss, fa-hand-holding-heart
  - Human relationships: fa-people-arrows, fa-handshake, fa-users, fa-user-group
  - Emotions: fa-face-smile, fa-face-sad-tear, fa-face-angry, fa-face-surprise
  - Questions: fa-circle-question, fa-question, fa-magnifying-glass
  - Time, process: fa-clock, fa-hourglass, fa-calendar, fa-timeline
  - Communication: fa-comments, fa-message, fa-comment-dots
  - Thinking, ideas: fa-brain, fa-lightbulb, fa-thought-bubble
  - Positive elements: fa-thumbs-up, fa-check, fa-circle-check
  - Negative elements: fa-thumbs-down, fa-ban, fa-triangle-exclamation
  - Direction: fa-arrow-right, fa-arrow-left, fa-arrow-up, fa-arrow-down
  - Relationships: fa-link, fa-handshake, fa-code-branch, fa-network-wired

- **Emphasized differentiation of icon sizes**:
  - Main concepts: **fa-6x to fa-8x** (in most prominent position on page)
  - Important concepts: **fa-5x** (placed at center of sections)
  - Sub concepts: **fa-4x** (for concepts with medium importance)
  - For emphasis: **fa-3x** (for emphasis points within text)
  - For decoration, connection: **fa-2x** (larger than usual)

## HTML/CSS Implementation Points (Icon Emphasis Type)
- **Icon-centered Flexbox layout**
- Radial or hierarchical arrangement centered on icons
- CSS styles that ensure sufficient whitespace around large icons
- Design speech bubbles and frames largely to match icon sizes
- **Innovative use of background colors and border lines to effectively display icons**
- Give extra large icons unique animations or effects
- Minimize text amount and prioritize visual expression
- Responsive design that maintains icon sizes even on smartphone display
```css
/* CSS example for icon emphasis */
.icon-highlight {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,231,227,0.7) 100%);
  border-radius: 50%;
  margin: 20px auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.icon-highlight:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* Container for large icons */
.mega-icon-container {
  text-align: center;
  margin: 30px 0;
}

/* Icon connection lines */
.icon-connector {
  height: 5px;
  background: linear-gradient(90deg, transparent, #1B6C8C, transparent);
  margin: 20px 0;
  position: relative;
}
```

## Overall Guidelines (Icon Centered Edition)
- **Visual composition with icons at the center of information**
- Minimize text amount and convey meaning through icons
- Explicitly show information relationships with thick lines and large arrows
- Express concept importance through icon size
- Clearly distinguish icon hierarchy through color and size
- Express concepts and relationships with visual impact using Font Awesome icons
- Express information hierarchical structure through icon sizes
- Consider overall balance (compose around large icons)
- Use Japanese notation as basic, utilize English keywords as needed

## Sample HTML Code (Icon Emphasis Type)
```html
<!-- Icon-centered section example -->
<div class="concept-section">
  <div class="mega-icon-container">
    <i class="fa-solid fa-lightbulb fa-6x" style="color: #BF8136; animation: fa-bounce 2s;"></i>
    <h2>Idea Generation Process</h2>
  </div>

  <div class="icon-concepts">
    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-brain fa-4x" style="color: #1B6C8C;"></i>
      </div>
      <p>Ideation</p>
    </div>

    <div class="icon-connector"></div>

    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-clipboard-list fa-4x" style="color: #1B6C8C;"></i>
      </div>
      <p>Organization</p>
    </div>

    <div class="icon-connector"></div>

    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-rocket fa-4x" style="color: #BF5656;"></i>
      </div>
      <p>Execution</p>
    </div>
  </div>
</div>
```

## Article/Text to Convert
ーーー
