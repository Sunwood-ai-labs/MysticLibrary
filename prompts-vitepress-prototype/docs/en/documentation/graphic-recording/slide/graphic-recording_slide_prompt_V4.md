---
title: "Graphic Recording Slide Prompt v4: Dual Theme Ryoga×Yaryo Version"
sourcePath: "prompts/documentation/graphic-recording/slide/graphic-recording_slide_prompt_V4_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/graphic-recording/slide/graphic-recording_slide_prompt_V4_EN.md`
> Japanese: [JA](/documentation/graphic-recording/slide/graphic-recording_slide_prompt_V4)

# Graphic Recording Slide Prompt v4: Dual Theme Ryoga×Yaryo Version

This prompt generates a **graphic recording-style presentation with horizontal scrolling functionality** that sublimates **the coolness of summer and Japanese aesthetics** into modern times. It expresses a beautiful presentation that can scroll horizontally through multiple slides, operates with page navigation buttons, and ***actively utilizes Font Awesome*** with the cool aesthetic of summer.

---

## 🎨 Basic Configuration

### Prompt Format for Creating Presentation Slides
```
Create [input document/content] as an HTML/CSS/JavaScript presentation slide with horizontal scrolling functionality
Make each slide 16:9 size (1920x1080px)
Enable horizontal scrolling between slides and place page navigation buttons (previous/next)
Actively utilize Font Awesome icons to visually organize information with an approachable and easy-to-understand design
Also use the Ryoga color map and fonts specified below
Express a graphic recording-style handwritten feel and warmth
```

---

## 🎨 Design Specifications

### 1. Color Palette Definition (Ryoga Graphic Recording Palette + Yaryo Dark Theme)

#### Light Theme "Ryoga" - Summer Day Graphic Recording
| Name | HEX | RGB | Primary Use | Font Awesome Icon Examples |
|------|-----|-----|-------------|---------------------------|
| Primary | #025E73 | rgb(2,94,115) | Main titles, important information | `&lt;i class="fas fa-water"&gt;&lt;/i&gt;` `&lt;i class="fas fa-heading"&gt;&lt;/i&gt;` |
| Secondary | #038C8C | rgb(3,140,140) | Section headings, emphasis | `&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` `&lt;i class="fas fa-bookmark"&gt;&lt;/i&gt;` |
| Accent | #04BFAD | rgb(4,191,173) | Points, decorative lines | `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` `&lt;i class="fas fa-highlighter"&gt;&lt;/i&gt;` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | Important numbers, hover effects | `&lt;i class="fas fa-sun"&gt;&lt;/i&gt;` `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | Basic background | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light | #FAFAFA | rgb(250,250,250) | Card background | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

#### Dark Theme "Yaryo" - Summer Night Graphic Recording
| Name | HEX | RGB | Primary Use | Font Awesome Icon Examples |
|------|-----|-----|-------------|---------------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | Main titles (firefly light) | `&lt;i class="fas fa-moon"&gt;&lt;/i&gt;` `&lt;i class="fas fa-heading"&gt;&lt;/i&gt;` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | Sections (starlight) | `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` `&lt;i class="fas fa-bookmark"&gt;&lt;/i&gt;` |
| Accent-Dark | #038C8C | rgb(3,140,140) | Points (night sea surface) | `&lt;i class="fas fa-fish"&gt;&lt;/i&gt;` `&lt;i class="fas fa-highlighter"&gt;&lt;/i&gt;` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | Important numbers (moonlight) | `&lt;i class="fas fa-feather"&gt;&lt;/i&gt;` `&lt;i class="fas fa-magic"&gt;&lt;/i&gt;` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | Basic background (deep night sea) | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | Card background (night mist) | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

### 2. Font Definition (Graphic Recording Compatible Fonts)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&family=Klee+One:wght@400;600&display=swap" rel="stylesheet">
```

### 3. Presentation Basic Structure

#### Required HTML Structure
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Presentation Title] - Ryoga Presentation</title>

    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&family=Klee+One:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Presentation container -->
    <div class="presentation-container">
        <!-- Navigation header -->
        <div class="nav-header">
            <div class="slide-counter">
                <i class="fas fa-file-powerpoint"></i>
                <span id="current-slide">1</span> / <span id="total-slides">5</span>
            </div>
            <div class="presentation-title">
                <i class="fas fa-presentation"></i>
                <h1>[Presentation Title]</h1>
            </div>
            <div class="theme-toggle">
                <button id="theme-btn">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>

        <!-- Slide viewport -->
        <div class="slides-viewport">
            <div class="slides-container" id="slides-container">

                <!-- Slide 1: Title slide -->
                <div class="slide title-slide">
                    <div class="slide-content">
                        <i class="fas fa-lightbulb icon-mega"></i>
                        <h1 class="kaisei-decol-bold">[Main Title]</h1>
                        <h2 class="m-plus-rounded-1c-regular">[Subtitle]</h2>
                        <div class="title-decoration">
                            <i class="fas fa-wave-square"></i>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Overview slide -->
                <div class="slide overview-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-list-ul"></i>
                            Overview
                        </h2>
                        <div class="overview-grid">
                            <div class="overview-item">
                                <i class="fas fa-target icon-lg"></i>
                                <h3>Purpose</h3>
                                <p class="klee-one-regular">[Purpose description]</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-users icon-lg"></i>
                                <h3>Target</h3>
                                <p class="klee-one-regular">[Target description]</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-clock icon-lg"></i>
                                <h3>Time</h3>
                                <p class="klee-one-regular">[Time description]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional slides generated dynamically... -->

            </div>
        </div>

        <!-- Navigation controls -->
        <div class="nav-controls">
            <button class="nav-btn prev-btn" id="prev-btn">
                <i class="fas fa-chevron-left"></i>
                <span>Previous</span>
            </button>

            <div class="slide-indicators" id="slide-indicators">
                <!-- Indicators generated dynamically -->
            </div>

            <button class="nav-btn next-btn" id="next-btn">
                <span>Next</span>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</body>
</html>
```

### 4. CSS Styles (Presentation Functionality)

```css
/* Presentation basic styles */
.presentation-container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Navigation header */
.nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--accent);
}

.slide-counter {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    color: var(--primary);
}

.presentation-title h1 {
    font-family: "Kaisei Decol", serif;
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
}

/* Slide viewport */
.slides-viewport {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.slides-container {
    display: flex;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Individual slide styles */
.slide {
    min-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    box-sizing: border-box;
}

.slide-content {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* Title slide specific */
.title-slide .slide-content h1 {
    font-size: clamp(4rem, 8vw, 8rem);
    color: var(--primary);
    margin: 30px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.title-slide .slide-content h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--secondary);
    margin-bottom: 40px;
}

.icon-mega {
    font-size: clamp(8rem, 15vw, 12rem);
    color: var(--accent);
    opacity: 0.8;
    margin-bottom: 20px;
    animation: gentle-float 3s ease-in-out infinite;
}

@keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

/* Overview slide */
.overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
    width: 100%;
}

.overview-item {
    background: var(--bg-light);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    border: 2px solid var(--accent);
    transition: transform 0.3s ease;
}

.overview-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(4,191,173,0.2);
}

.overview-item i {
    color: var(--secondary);
    margin-bottom: 20px;
}

.overview-item h3 {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 15px;
}

/* Navigation controls */
.nav-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border-top: 2px solid var(--accent);
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.nav-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
}

/* Slide indicators */
.slide-indicators {
    display: flex;
    gap: 15px;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
}

.indicator.active {
    background: var(--accent);
    transform: scale(1.3);
}

/* Dark theme support */
.dark-theme {
    --primary: #04BFAD;
    --secondary: #F2C166;
    --accent: #038C8C;
    --neon-gold: #66D9EF;
    --bg-dark: #0A1A1F;
    --bg-light: #1A2F35;
}

.dark-theme .nav-header,
.dark-theme .nav-controls {
    background: rgba(26,47,53,0.9);
    color: var(--primary);
}
```

### 5. JavaScript Functionality (Presentation Control)

```javascript
class RyogaPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slidesContainer = document.getElementById('slides-container');
        this.currentSlideSpan = document.getElementById('current-slide');
        this.totalSlidesSpan = document.getElementById('total-slides');

        this.init();
    }

    init() {
        // Initialization
        this.updateSlideCounter();
        this.createIndicators();
        this.bindEvents();

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });
    }

    bindEvents() {
        document.getElementById('prev-btn').addEventListener('click', () => this.prevSlide());
        document.getElementById('next-btn').addEventListener('click', () => this.nextSlide());
        document.getElementById('theme-btn').addEventListener('click', () => this.toggleTheme());
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.updateSlide();
        }
    }

    updateSlide() {
        const translateX = -this.currentSlide * 100;
        this.slidesContainer.style.transform = `translateX(${translateX}vw)`;
        this.updateSlideCounter();
        this.updateIndicators();
        this.updateNavButtons();
    }

    updateSlideCounter() {
        this.currentSlideSpan.textContent = this.currentSlide + 1;
        this.totalSlidesSpan.textContent = this.totalSlides;
    }

    createIndicators() {
        const indicatorsContainer = document.getElementById('slide-indicators');
        indicatorsContainer.innerHTML = '';

        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');

            indicator.addEventListener('click', () => this.goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }

    updateNavButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.disabled = this.currentSlide === 0;
        nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const themeBtn = document.getElementById('theme-btn');
        const icon = themeBtn.querySelector('i');

        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Presentation initialization
document.addEventListener('DOMContentLoaded', () => {
    new RyogaPresentation();
});
```

---

## 🎯 Slide Type Templates

### 1. Process Flow Slide
```html
<div class="slide process-slide">
    <div class="slide-content">
        <h2 class="slide-title kaisei-decol-bold">
            <i class="fas fa-route"></i>
            Process Flow
        </h2>
        <div class="process-flow">
            <div class="process-step">
                <i class="fas fa-play icon-lg"></i>
                <h3>Step 1</h3>
                <p class="klee-one-regular">Description text</p>
            </div>
            <i class="fas fa-arrow-right flow-arrow"></i>
            <!-- Other steps... -->
        </div>
    </div>
</div>
```

### 2. Data Comparison Slide
```html
<div class="slide comparison-slide">
    <div class="slide-content">
        <h2 class="slide-title kaisei-decol-bold">
            <i class="fas fa-balance-scale"></i>
            Comparative Analysis
        </h2>
        <div class="comparison-grid">
            <div class="comparison-item">
                <i class="fas fa-thumbs-up icon-xl"></i>
                <h3>Advantages</h3>
                <!-- Content... -->
            </div>
            <div class="comparison-item">
                <i class="fas fa-exclamation-triangle icon-xl"></i>
                <h3>Cautions</h3>
                <!-- Content... -->
            </div>
        </div>
    </div>
</div>
```

### 3. Conclusion/Summary Slide
```html
<div class="slide conclusion-slide">
    <div class="slide-content">
        <i class="fas fa-flag-checkered icon-mega"></i>
        <h2 class="slide-title kaisei-decol-bold">Summary</h2>
        <div class="conclusion-points">
            <div class="point">
                <i class="fas fa-star icon-lg"></i>
                <p class="klee-one-regular">Important point 1</p>
            </div>
            <!-- Other points... -->
        </div>
    </div>
</div>
```

---

## 🎯 Operation Methods and Shortcuts

### Basic Operations
- **Next slide**: Right arrow key / Space key / "Next" button
- **Previous slide**: Left arrow key / "Previous" button
- **First slide**: Home key
- **Last slide**: End key
- **Specific slide**: Click indicator
- **Theme toggle**: Moon/Sun button

### Responsive Support
- Smartphone: Touch swipe support
- Tablet: Touch navigation optimization
- Desktop: Full keyboard shortcut support

The presentation created with this prompt will be a professional slide show combining beautiful Ryoga design with intuitive operability!

===

# Generation Example

Refer to the example below for generation

[Note: The complete HTML example would follow here in the original file, translated to English context while maintaining the same structure]
