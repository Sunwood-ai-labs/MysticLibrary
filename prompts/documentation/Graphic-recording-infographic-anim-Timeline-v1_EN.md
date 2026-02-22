# Graphic Recording (Graphico) HTML Creation Prompt with Timeline V1

## Purpose
Please convert the following content into a perfect Japanese graphic recording style HTML infographic, as if created by a top-tier designer. Aim for the highest standards in both information design and visual design.
Visually express content utilizing hand-drawn style shapes and icons.

## Design Specifications
### 1. Color Scheme
```
<palette>
<color name='Illustration-1' rgb='027333' r='2' g='114' b='51' />
<color name='Illustration-2' rgb='4E7329' r='78' g='114' b='41' />
<color name='Illustration-3' rgb='F2B705' r='242' g='182' b='4' />
<color name='Illustration-4' rgb='F29F05' r='242' g='159' b='4' />
<color name='Illustration-5' rgb='D97904' r='216' g='121' b='4' />
</palette>
```

### 2. Graphic Recording Elements
- Arrange information sequentially from upper left to right, from top to bottom
- Use Japanese handwritten style fonts (Yomogi, Zen Kurenaido, Kaisei Decol)
- Hand-drawn style enclosing lines, arrows, banners, speech bubbles
- Combination of text and visual elements (icons, simple shapes)
- Keyword emphasis (colored underlines, marker effects)
- Connect related concepts with lines and arrows
- Effectively place Font Awesome icons
- Use timeline display to visualize information flow

### 3. Typography
- Title: 32px, gradient effect, bold
- Subtitle: 16px, #475569
- Section headings: 18px, with icons
- Body text: 14px, #334155, line height 1.4
- Font specification:
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  </style>
  ```

### 4. Layout
- Header: left-aligned title + right-aligned date/source
- Use timeline structure to show steps or stages
- Card-type components: white background, 12px rounded corners, subtle shadow
- Appropriate whitespace and hierarchical structure between sections
- Appropriately utilize glassmorphism
- Content width set to 100%
- **Required**: Timeline items must always include "circle and flap decorations"

### 5. Code Block Display
- Set background color to #252140 (Illustration-3 color)
- Add accent border of #A62648 (Illustration-1 color) on left side
- Use palette colors for syntax highlighting
- Color coding by language (JSON, YAML, ENV, BASH, etc.)
- Display language label in upper right of code block
- Apply Japanese handwritten style font

## Graphic Recording Expression Techniques
- Emphasize balance between text and visual elements
- Emphasize keywords with enclosing lines and colors
- Visualize concepts with simple icons and shapes
- Add visual impact with large background icons
- Explicitly show relationships between information with connection lines and arrows
- Effectively use whitespace to ensure visibility
- Express movement with animations and hover effects

## Timeline Expression (Including Required Elements)
- Place timeline vertically in center, display cards alternating left and right
- Give each step a number and icon
- Use different accent colors for each step
- Visually reinforce content with large background icons
- Visually clarify hierarchy and relationships of content
- **Required**: Each step must have date decoration (flap) and circle icon
- **Required**: Circle is round shape with Font Awesome icon placed inside

### Timeline CSS Code Example
```css
/* Timeline elements */
ul.timeline {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 100%);
  margin-inline: auto;
  margin-bottom: 2rem;
}

/* Timeline line */
ul.timeline::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: #8C1F5B;
  border-radius: calc(var(--line-w) / 2);
}

/* Spacing between cards */
ul.timeline li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* Timeline cards */
ul.timeline li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* Step number */
ul.timeline li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);
  text-align: center;
  background-color: var(--accent-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: grid;
  place-content: center;
  position: relative;
  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
  font-family: 'Kaisei Decol', serif;
}

/* Date flap decoration - Required element */
ul.timeline li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* Circle - Required element */
ul.timeline li .date::after {
  content: "";
  position: absolute;
  width: 2.8rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.4rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  z-index: 2;
}

/* Title and description */
ul.timeline li .title,
ul.timeline li .descr {
  background: white;
  position: relative;
  padding-inline: 1.5rem;
}

ul.timeline li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
  font-family: 'Kaisei Decol', serif;
  font-size: 1.2rem;
  color: #A62648;
}

ul.timeline li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
  font-family: 'Zen Kurenaido', sans-serif;
}

/* Media query for left-right placement */
@media (min-width: 40rem) {
  ul.timeline {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }

  ul.timeline::before {
    grid-column: 2;
  }

  ul.timeline li:nth-child(odd) {
    grid-column: 1;
  }

  ul.timeline li:nth-child(even) {
    grid-column: 3;
  }

  /* Step 2 start position */
  ul.timeline li:nth-child(2) {
    grid-row: 2/4;
  }

  ul.timeline li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul.timeline li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  ul.timeline li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

/* Large icons on timeline */
.timeline-icon-large {
  position: absolute;
  font-size: 80px;
  color: rgba(165, 38, 72, 0.1);
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  animation: float 3s ease-in-out infinite;
}

/* Icon animation effect */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Step icons */
.timeline-item:nth-child(1) .date::after {
  content: "\f395"; /* docker */
}

.timeline-item:nth-child(2) .date::after {
  content: "\f15c"; /* file */
}

.timeline-item:nth-child(3) .date::after {
  content: "\f234"; /* user-plus */
}

.timeline-item:nth-child(4) .date::after {
  content: "\f2f6"; /* sign-in */
}
```

### Timeline HTML Example
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<h2 class="section-title">
  <span><i class="fa-solid fa-timeline" style="color: #A62648;"></i> 🛠️ Solution Steps Timeline</span>
</h2>

<ul class="timeline">
  <li style="--accent-color:#A62648" class="timeline-item">
    <div class="date">STEP 1</div>
    <div class="title"><i class="fa-solid fa-docker hand-drawn-icon"></i> Update image with docker-compose.yml</div>
    <div class="descr">
      <div class="code-block">
        <div class="code-label">yaml</div>
        <pre><code class="code-yaml"><span class="key">image:</span> <span class="value">ghcr.io/example/image:v1.0.0</span></code></pre>
      </div>
      <div class="thought-bubble">
        <i class="fa-solid fa-lightbulb" style="color: #F28B30;"></i> Specify the latest image version!
      </div>
      <i class="fa-solid fa-docker timeline-icon-large"></i>
    </div>
  </li>

  <li style="--accent-color:#8C1F5B" class="timeline-item">
    <div class="date">STEP 2</div>
    <div class="title"><i class="fa-solid fa-file-lines hand-drawn-icon"></i> Update configuration file</div>
    <div class="descr">
      <!-- Content -->
      <i class="fa-solid fa-file-lines timeline-icon-large"></i>
    </div>
  </li>

  <!-- Continue similarly for as many steps as needed -->
</ul>
```

## Overall Guidelines
- Layout that allows readers to naturally move their gaze
- Visually clarify information hierarchy and relationships
- Create familiarity with handwritten style elements
- Design that remains in visual memory
- Clearly state source information in footer
- **Required**: Always apply "circle and flap decorations" to timelines (must include above CSS specifications)

## Article/Text to Convert

