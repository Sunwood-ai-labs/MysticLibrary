---
title: Color Map Generation Prompt v3.0
description: A prompt for extracting beautiful color palettes from images and generating LP-style interactive color map HTML
category: creative
intent: colormap-generation
audience:
  - Designers
  - Web developers
  - Frontend engineers
  - Creatives who love color coordination
input_requirements:
  - Image URL (optional)
  - Number of colors to extract (optional)
tags:
  - color-palette
  - html-generation
  - lp-style
  - fontawesome
  - image-analysis
status: stable
owner: creative-team
last_reviewed: 2026-02-23
---

# Color Map Generation Prompt v3.0

## Intended Use

- Automatic extraction of beautiful color palettes from images
- Generating landing page-style interactive color map HTML
- Creating color reference materials for design work
- Creating color code sharing tools for web developers

## Prompt

```text
You are an expert in extracting beautiful color palettes from images and generating professional LP-style interactive color map HTML. Create visually appealing and high-quality color tools that designers and developers can actually use in their projects.

## Input Processing
### Image Analysis
1. Image URL acquisition: Acquire the provided image URL and save it in a format usable in HTML
2. Color analysis: Detailed analysis of the image's main color tones, contrast, and atmosphere
3. Color extraction: Extract 6-8 main colors (HEX code format)
4. Color relationships: Identify analogous colors, complementary colors, gradient relationships
5. Atmosphere reading: Understand the emotional and visual impact of the image

### Image URL Usage Policy
- Hero background: Use the provided image URL as the background image for the hero section
- Gallery display: Display the original image in the image gallery section
- Fallback: If image URL is invalid, substitute with gradient background
- Responsive: Image placement that displays beautifully across various screen sizes

### Color Classification
- Primary colors: Most prominent main colors (2-3 colors)
- Secondary colors: Supplementary color tones (2-3 colors)
- Accent colors: Colors for emphasis (1-2 colors)
- Neutral colors: Basic achromatic tones (1-2 colors)

## Color Naming Rules
### Naming Principles
1. Phonetic appeal: Beautiful sounding, easy to remember
2. Semantic relevance: Related to image elements and atmosphere
3. Professional: Premium feel used in design industry
4. Uniqueness: Not too common, names with special feel

### Naming Categories
- Cosmic: Universe, stars, planets (e.g., Cosmic Night, Celestial Gold)
- Natural: Nature, minerals, elements (e.g., Amber Glow, Ring Dust)
- Urban: Cities, architecture, materials (e.g., Urban Stone, Shadow Graphite)
- Emotional: Emotions, atmosphere (e.g., Velvet Carmine, Stella White)

## HTML Generation Specifications

### Required Fonts
Use Kaisei Decol font and FontAwesome 6.4.0

### LP-style Layout Structure
1. Hero section: Image background, large title + catchphrase, theme toggle button, palette preview
2. Feature section: Introduce 3 main features (color extraction, one-click copy, theme toggle)
3. Image gallery section: Display original image, introduce as inspiration source
4. Color palette section: Dark/light theme recommended colors, developer info
5. Detail color grid: Detail info cards for each color, favorite feature style, download style icons
6. CTA section: Usage instructions, use in projects now

### Theme Settings
#### Dark Theme
- Background: Use the darkest extracted color
- Text: White or cream tones
- Accent: Bright warm tones from extracted colors
- Card background: Semi-transparent white overlay

#### Light Theme
- Background: Bright color based on the brightest extracted color
- Text: Darkest extracted color
- Accent: Middle tones from extracted colors
- Card background: Semi-transparent colored overlay

## Output Format
1. Complete HTML file: Including DOCTYPE, head, body tags
2. Embedded CSS: LP-style styling without external files
3. Embedded JavaScript: Implement rich interactive features
4. Image URL integration: Use provided image URL in appropriate places
5. Immediately usable: Works with copy & paste

## Response Format
1. Brief explanation of image analysis (2-3 lines)
2. Description of extracted color characteristics
3. Complete LP-style HTML code
4. Explanation of color naming rationale and theme
5. Explanation of image URL usage method
```

## How to Use

1. **Prepare image URL**: Have the URL of the image you want to extract color palette from
2. **Input to prompt**: Enter the above prompt and image URL to AI
3. **Generate HTML**: AI generates LP-style color map HTML
4. **View in browser**: Display the generated HTML in a browser

## Input Example

```text
Image URL: https://example.com/image.jpg
Number of colors to extract: 8 colors
```

## Output Example

The generated HTML will include:

- Hero section (with image background)
- Image gallery (original image display)
- Color palette cards (6-8 colors)
- HEX code and named color for each color
- One-click copy feature
- Dark/light theme toggle
- Fully responsive design

## Notes

- If image URL is invalid, gradient background will be used as substitute
- Uses Kaisei Decol font and FontAwesome 6.4.0
- Mobile-first responsive design
- Aims for landing page-level visual appeal
