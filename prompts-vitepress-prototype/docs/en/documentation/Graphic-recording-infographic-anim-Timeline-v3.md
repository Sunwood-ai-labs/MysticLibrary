---
title: "Graphic Recording (Graphico) HTML Creation Prompt with Galaxy Timeline V3"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3_EN.md`
> Japanese: [JA](/documentation/Graphic-recording-infographic-anim-Timeline-v3)

# Graphic Recording (Graphico) HTML Creation Prompt with Galaxy Timeline V3

## Purpose
Please convert the following content into a timeline-format graphic recording HTML with a fantasy and pop atmosphere themed around space. Aim for the highest standards in both information design and visual design. Create a mystical and visually appealing timeline by utilizing handwritten-style elements and a space background.

## Design Specifications
### 1. Color Scheme
```
<palette>
<color name='Illustration-1' rgb='5BA67B' r='91' g='165' b='123' />
<color name='Illustration-2' rgb='F2BB13' r='242' g='186' b='19' />
<color name='Illustration-3' rgb='F2DB94' r='242' g='218' b='147' />
<color name='Illustration-4' rgb='BF8665' r='191' g='134' b='101' />
<color name='Illustration-5' rgb='BF190A' r='191' g='24' b='9' />
</palette>
```

### 2. Space Theme Visual Effects
- Dark space background (#080808) with scattered small stars
- Place a large "sun"-like light source in the upper left (using the palette's primary colors)
- Add breathing animation to the light source
- Circular markers designed as colorful "planet"-like elements
- Apply fine background texture like stardust throughout

### 3. Timeline Structure
- Place a vertical timeline in the center
- Arrange items alternating left and right
- Add planet-style round markers to each item
- Design year displays as floating cards
- Place a quick navigation selector at the bottom or right side
- Add glowing effects to markers and selector

### 4. Typography and Text Processing
- Title: Add glowing effect like stars shining in the night sky
- Date: Emphasized as if floating on white background
- Event title: Displayed in bright colors from the palette
- Detail text: Bright text on semi-transparent background
- Font specification:
  ```html
  &lt;style&gt;
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  &lt;/style&gt;
  ```

### 5. Visual Elements and Emphasis
- Visualize the content of each event with Font Awesome icons
- Keyword highlighting (gradient underline effect)
- Provide appropriate spacing between items to ensure visibility
- Create depth with semi-transparent effects and blur
- Float items on hover with animation

## CSS Basic Structure
```css
/* Space background settings */
body {
    background: #080808;
    color: #fff;
    overflow-x: hidden;
}

/* Sun-like light source */
body:before {
    content: "";
    position: fixed;
    height: 100vh;
    width: 100vh;
    background: radial-gradient(circle, rgba(91,166,123,1) 0%, rgba(91,166,123,0.7) 50%, rgba(91,166,123,0) 100%);
    left: -70vh;
    top: -20vh;
    border-radius: 100%;
    box-shadow: 0 0 10em 5em rgba(91,166,123,0.4), 0 0 100px 50px rgba(91,166,123,0.6) inset,
        0 0 10px 5px rgba(242,187,19,0.9), 0 0 10px 5px rgba(242,187,19,0.8) inset;
    filter: blur(5px);
    z-index: 2;
    animation: glow 15s ease-in-out infinite alternate;
}

/* Starry sky background */
body:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    background: #080808;
    background-image:
        radial-gradient(2px 2px at 20px 30px, #fff, rgba(255,255,255,0)),
        radial-gradient(1px 1px at 43px 75px, #fff, rgba(255,255,255,0)),
        /* Add many stars */
        linear-gradient(-90deg, rgba(91,166,123,0.3) 0%, #000 50%, rgba(191,25,10,0.3) 100%);
    background-repeat: repeat;
}

/* Timeline center line */
.timeline::after {
    content: "";
    position: absolute;
    width: 0.5vmin;
    background: linear-gradient(
        180deg,
        #5BA67B 0 20vh,
        #F2BB13 0 35vh,
        #BF8665 0 55vh,
        #BF190A 0 75vh,
        #5BA67B 0 100%
    );
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -0.25vmin;
    z-index: -1;
}

/* Timeline items */
.timeline li {
    text-align: right;
    list-style-type: none;
    padding: 0 4vmin 0 0;
    position: relative;
    width: 50%;
    perspective: 30vmin;
}

/* Right-side items */
.timeline li:nth-child(even) {
    text-align: left;
    left: 50%;
    padding: 0 0 0 4vmin;
}

/* Circular markers (planet-style) */
.timeline li:after {
    content: "";
    position: absolute;
    width: 4.5vmin;
    height: 4.5vmin;
    right: -2.25vmin;
    border: 0.5vmin solid #fff;
    top: -0.25vmin;
    border-radius: 50%;
    z-index: 1;
    background: radial-gradient(circle, rgba(91,166,123,1) 0%, rgba(91,166,123,0.7) 70%, rgba(91,166,123,0) 100%);
    box-shadow: 0 0 5px 2px rgba(91,166,123,0.7);
}

/* Navigation selector */
.selector {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vmin;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0 32%, rgba(255,255,255,0.5) 0 34%, rgba(255,255,255,0) 0 100%);
    z-index: 3;
    padding-top: 6vmin;
}
```

## HTML Basic Structure
```html
<h1>Title</h1>

<div class="selector">
    <a href="#section1">Period 1<span>Era</span><strong>Detailed Description</strong></a>
    <a href="#section2">Period 2<span>Era</span><strong>Detailed Description</strong></a>
    <!-- Other section links -->
</div>

<ul class="timeline">
    <li>
        <h2 id="section1"></h2>
        <time><strong>Year</strong><span>Month/Day<br><em>Category</em></span></time>
        <strong><span>Event Title</span></strong>
        <span>
            <i class="fa-solid fa-icon event-icon"></i>
            Detailed description of event. <span class="highlight">Important keywords</span> are highlighted.
        </span>
    </li>
    <!-- Other timeline items -->
</ul>
```

## Responsive Design Support
- Desktop: Timeline split left and right, selector at bottom
- Mobile portrait: Selector on right, timeline centered
- Mobile general: Change timeline to single vertical column, adjust marker positions

## Special Effects and Animation
- Sun breathing effect: `@keyframes glow { 0% { opacity: 0.7; } 100% { opacity: 1; } }`
- Planet marker glow: `box-shadow: 0 0 5px 2px rgba(91,166,123,0.7);`
- Text card hover effect: `transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15);`
- Navigation item hover effect: Float description upward
- Highlight: `background: linear-gradient(transparent 60%, rgba(242,187,19,0.4) 60%);`

## Implementation Notes
1. Use the color palette consistently to maintain tones appropriate for the space theme
2. Adjust the placement of light sources and stars carefully to not compromise timeline readability
3. Adjust spacing between timeline items to provide smooth scrolling experience
4. Select Font Awesome icons appropriately according to the nature of each event
5. Adjust to maintain visual impact even during responsive display

## Overall Guidelines
- Visually connect the infinite expanse of space with the flow of time
- Layout and appropriate spacing that allow the reader to naturally move their gaze
- Visually clarify the hierarchy and relationships of information
- Unique aesthetic sense blending handwritten style with space theme
- Distinguish each section with color to visually express changes in eras
- Use fonts, colors, and icons consistently to create unity

## Specific Examples: Ideal for chronologies, historical events, corporate development history, project progress, etc.
- Adjust sun color and background atmosphere according to theme
- Change marker colors for each era or stage to distinguish
- Change icons to intuitively convey the nature of each event

By converting the input content according to this prompt, you can create a unique and attractive timeline infographic that floats in space.
