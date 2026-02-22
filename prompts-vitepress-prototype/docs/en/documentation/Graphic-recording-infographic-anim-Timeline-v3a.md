---
title: "Galaxy Timeline Graphic Recording (Graph-reco) HTML Creation Prompt V3"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3a_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3a_EN.md`
> Japanese: [JA](/documentation/Graphic-recording-infographic-anim-Timeline-v3a)

# Galaxy Timeline Graphic Recording (Graph-reco) HTML Creation Prompt V3

## Purpose
Please convert the following content into a timeline-style graphic recording HTML with a fantasy and pop atmosphere themed around space. Aim for the highest standards in both information design and visual design. Utilize hand-drawn style elements and space backgrounds to create a mysterious and visually appealing timeline.

## Design Specifications
### 1. Color Scheme
```
<palette>
<color name='Tropical-Fruit-Punch-1' rgb='146152' r='19' g='96' b='82' />
<color name='Tropical-Fruit-Punch-2' rgb='44803F' r='67' g='127' b='62' />
<color name='Tropical-Fruit-Punch-3' rgb='B4CF66' r='179' g='206' b='101' />
<color name='Tropical-Fruit-Punch-4' rgb='FFEC5C' r='255' g='235' b='92' />
<color name='Tropical-Fruit-Punch-5' rgb='FF5A33' r='255' g='90' b='50' />
</palette>
```
**Note:** In accordance with the color palette above, also adjust the specific color codes within the CSS as appropriate (e.g., light source color in `body:before`, gradient colors in `.timeline::after`, marker colors, highlight colors, etc.)

### 2. Space-themed Visual Effects
- Dark space background (#080808) with scattered small stars
- Large "sun-like" light source in the upper left (**use palette primary colors (e.g., Tropical-Fruit-Punch-4, 5)**)
- Add breathing animation to the light source
- Circular markers designed as colorful "planet-like" elements (**use palette colors**)
- Apply fine stardust-like background texture throughout

### 3. Timeline Structure
- Place a vertical timeline in the center
- Arrange items alternately left and right
- Add planet-style round markers to each item
- Design year displays as floating cards
- Place quick navigation selector at bottom or right side
- Add glowing effects to markers and selector

### 4. Typography and Text Processing
- Title: Add glowing effect like stars shining in the night sky
- Date: Emphasized as floating on white background
- Event title: Displayed **in palette bright colors (e.g., Tropical-Fruit-Punch-3, 4)**
- Detail text: Bright text on semi-transparent background
- Font specification:
  ```html
  &lt;style&gt;
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  &lt;/style&gt;
  ```

### 5. Visual Elements and Emphasis
- Visualize content of each event with Font Awesome icons
- Keyword highlighting (gradient underline effect - **use palette colors (e.g., Tropical-Fruit-Punch-4)**)
- Ensure proper spacing between items for visibility
- Create depth with semi-transparent effects and blur
- Animate items to float on hover

## CSS Basic Structure
```css
/* Space background settings */
body {
    background: #080808;
    color: #fff;
    overflow-x: hidden;
}

/* Sun-like light source (e.g., centered on Tropical-Fruit-Punch-4) */
body:before {
    content: "";
    position: fixed;
    height: 100vh;
    width: 100vh;
    /* Adjust colors to match new palette */
    background: radial-gradient(circle, rgba(255,235,92,1) 0%, rgba(255,235,92,0.7) 50%, rgba(255,235,92,0) 100%);
    left: -70vh;
    top: -20vh;
    border-radius: 100%;
    /* Adjust shadow colors to match new palette */
    box-shadow: 0 0 10em 5em rgba(255,235,92,0.4), 0 0 100px 50px rgba(255,235,92,0.6) inset,
        0 0 10px 5px rgba(255,90,50,0.9), 0 0 10px 5px rgba(255,90,50,0.8) inset;
    filter: blur(5px);
    z-index: 2;
    animation: glow 15s ease-in-out infinite alternate;
}

/* Starry sky background (e.g., use light colors from Tropical-Fruit-Punch-1, 5) */
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
        /* Adjust gradient colors to match new palette */
        linear-gradient(-90deg, rgba(19,96,82,0.3) 0%, #000 50%, rgba(255,90,50,0.3) 100%);
    background-repeat: repeat;
}

/* Timeline center line (using 5 colors from new palette) */
.timeline::after {
    content: "";
    position: absolute;
    width: 0.5vmin;
    background: linear-gradient(
        180deg,
        #146152 0 20vh, /* Tropical-Fruit-Punch-1 */
        #44803F 0 35vh, /* Tropical-Fruit-Punch-2 */
        #B4CF66 0 55vh, /* Tropical-Fruit-Punch-3 */
        #FFEC5C 0 75vh, /* Tropical-Fruit-Punch-4 */
        #FF5A33 0 100%  /* Tropical-Fruit-Punch-5 */
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

/* Right side items */
.timeline li:nth-child(even) {
    text-align: left;
    left: 50%;
    padding: 0 0 0 4vmin;
}

/* Circular markers (planet-style - e.g., using Tropical-Fruit-Punch-3) */
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
    /* Adjust colors to match new palette */
    background: radial-gradient(circle, rgba(179,206,101,1) 0%, rgba(179,206,101,0.7) 70%, rgba(179,206,101,0) 100%);
    box-shadow: 0 0 5px 2px rgba(179,206,101,0.7);
    /* To change colors per li, specify using nth-child, etc. */
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
    <a href="#section1">Period1<span>Year</span><strong>Detailed Description</strong></a>
    <a href="#section2">Period2<span>Year</span><strong>Detailed Description</strong></a>
    </div>

<ul class="timeline">
    <li>
        <h2 id="section1"></h2>
        <time><strong>Year</strong><span>Month Day<br><em>Category</em></span></time>
        <strong><span>Event Title</span></strong>
        <span>
            <i class="fa-solid fa-icon event-icon"></i>
            Detailed description of the event. <span class="highlight">Important keywords</span> are highlighted.
        </span>
    </li>
    </ul>
```

## Responsive Design Support
- Desktop: Timeline split left and right, selector at bottom
- Mobile portrait: Selector on right side, timeline centered
- Mobile general: Change timeline to single vertical column, adjust marker positions

## Special Effects and Animation
- Sun breathing effect: `@keyframes glow { 0% { opacity: 0.7; } 100% { opacity: 1; } }`
- Planet marker glow: `box-shadow: 0 0 5px 2px rgba(179,206,101,0.7);` (match color to marker color)
- Text card hover effect: `transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15);`
- Navigation item hover effect: Make description float upward
- Highlight: `background: linear-gradient(transparent 60%, rgba(255,235,92,0.4) 60%);` (**use palette colors (e.g., Tropical-Fruit-Punch-4)**)

## Implementation Notes
1. Use color palette consistently to maintain tones appropriate for space theme
2. Adjust light source and star placement carefully to not impair timeline readability
3. Adjust spacing between timeline items to provide smooth scrolling experience
4. Select Font Awesome icons appropriately according to nature of each event
5. Adjust to maintain visual impact even during responsive display

## Overall Guidelines
- Visually connect the infinite expanse of space with the flow of time
- Layout and proper spacing that allow natural eye movement
- Visually clarify information hierarchy and relationships
- Unique aesthetic combining hand-drawn style with space theme
- Distinguish each section by color to visually express changes in eras
- Maintain consistency in font, color, and icon usage for unified appearance

## Specific Examples: Ideal for chronologies, historical events, company development histories, project progress, etc.
- Adjust sun color and background atmosphere according to theme
- Change marker colors for each era or stage to distinguish (**use colors from Tropical-Fruit-Punch palette**)
- Change icons to intuitively convey nature of each event

By converting input content according to this prompt, you can create a unique and appealing timeline infographic that appears to drift through space.
```

**Main Changes:**

* **`Design Specifications` > `1. Color Scheme`** replaced `<palette>` definition with specified `Tropical-Fruit-Punch` one.
* For CSS sections using specific color codes (light source, timeline center line, markers, highlights, etc.), added comments recommending use of new palette colors and updated some examples. When actually generating HTML/CSS, these areas need to be adjusted based on the new palette.
* Changed references to "use palette colors" in design specifications and guidelines to refer to the new `Tropical-Fruit-Punch` palette.

This can be used as a prompt for creating graphic recording HTML based on the specified `Tropical-Fruit-Punch` color map.
