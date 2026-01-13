
# Graphic Recording Style Infographic Conversion Prompt V3

## Purpose
  Please convert the following content into a Japanese graphic recording style HTML infographic that maximizes the use of Font Awesome icons. Visually express concepts using Font Awesome icons instead of hand-drawn illustrations.

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

### 2. Graphic Recording Elements
- Place everything on a white background (#FFF8F5) canvas
- Place large theme/title in center (with icon)
- Divide content into multiple sections, enclose in hand-drawn style speech bubbles or rounded frames
- Place large Font Awesome icons for each keyword (fa-2x to fa-3x)
- Arrows and lines connecting related concepts (→ such as fa-arrow-right)
- Emphasize keywords with colored markers or underlines (background color emphasis)
- Place prominent icons (fa-star, fa-lightbulb, etc.) for important points
- Use emoji-style icons (fa-face-smile, fa-face-sad, etc.) for emotional expressions
- Place fa-question-circle for questions
- Use fa-user, fa-person, etc. icons for person representations
- Use small icons like fa-circle-dot for bullet points for each concept
- Connection icons like fa-arrows-left-right-to-line to show relationships
- Make frames and lines in hand-drawn style

### 3. Typography
  - Title: 28px, #333333 (text color), bold, with related icon
  - Subtitle: 18px, #555555
  - Keywords: 16px, #333333, bold, with background color
  - Body text: 14px, #333333, line height 1.4
  - Dates and notes: 12px, #777777
  - Font specification:
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

### 4. Layout
  - Overall: Flexible layout, easy to view on smartphones
  - Header: Title (with large Font Awesome icon) + date
  - Content: Natural flow from left to right, top to bottom
  - Sections: Rounded corner cards (border-radius: 15px) or speech bubbles
  - Whitespace: Ensure visibility with appropriate padding and margins
  - Width: 100% (centered at maximum around 2000px)
  - 4-column structure

### 5. Animation Effects
- Font Awesome icon-linked animations (fa-beat, fa-bounce, fa-fade, etc.)
- Highlight effect on important keyword appearance (gradient change)
- Flowing animations for connection lines and arrows
- Icon rotation and scale animations (especially where attention is desired)
- Gentle background gradient changes
- Element appearance effects linked to scrolling
- Click/tap responsive icon effects

## Icon Utilization Guidelines
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

- Icon size differentiation:
  - Main concepts: fa-3x
  - Sub concepts: fa-2x
  - For emphasis: fa-lg
  - For decoration, connection: standard size

## HTML/CSS Implementation Points
- Flexible layout using Flexbox
- Speech bubbles implemented with CSS border and before/after
- Rounded frames use border-radius
- Colored markers implemented with background-color (also use linear gradients)
- Hand-drawn style effects with text-shadow or box-shadow
- Media query settings for mobile compatibility
- Ensure text and background contrast
- Layout considering eye flow (upper left → lower right)

## Overall Guidelines
- Replace with Font Awesome instead of pen-drawn atmosphere
- Explicitly show information relationships with lines and arrows (Font Awesome)
- Friendly and readable design
- Emphasize important keywords to make them stand out
- Visually express concepts and relationships with Font Awesome icons
- Layout considering information hierarchical structure
- Consider overall balance (ratio of text information to icons)
- Use Japanese notation as basic, utilize English keywords as needed

## Article/Text to Convert
ーーー
