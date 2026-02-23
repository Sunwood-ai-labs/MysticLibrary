---
title: Infographic Thumbnail Prompt V1
description: Prompt for generating high-quality blog article thumbnails like top consultants create
category: docs
intent: infographic-thumbnail-prompt
audience:
  - Content creators
  - Bloggers
  - Designers
input_requirements:
  - Article title
  - (Optional) Color palette
  - (Optional) Font specification
tags:
  - infographic
  - thumbnail
  - blog
  - design
  - html-css
status: stable
owner: docs-team
last_reviewed: 2025-02-23
---

# Infographic Thumbnail Prompt V1

## Intended Use

- Creating blog article thumbnails
- Generating infographic visual content
- Thumbnail design with HTML/CSS

## Prompt Content

```text
# Infographic Thumbnail Prompt V1

## Overview
This prompt generates high-quality blog article thumbnails like top consultants create. Create visually polished 16:9 aspect ratio infographic thumbnails that convey content at a glance.

## Basic Structure
```
Create a thumbnail for [Article Title] in HTML/CSS
Make it 16:9 size (1920x1080px)
Use Font Awesome icons to enhance infographic readability and professionalism
Also use the color map and fonts below
```

## Color Palette Definition (Customizable)
```
<palette>
<color name='Graphic Design-1' rgb='21403A' r='33' g='63' b='58' />
<color name='Graphic Design-2' rgb='F2F2F2' r='242' g='242' b='242' />
<color name='Graphic Design-3' rgb='D9D9D9' r='216' g='216' b='216' />
<color name='Graphic Design-4' rgb='404040' r='63' g='63' b='63' />
<color name='Graphic Design-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

## Font Definition (Japanese fonts recommended)
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@700&family=Zen+Kurenaido&display=swap" rel="stylesheet">

Kaisei Decol: CSS class
.kaisei-decol-bold {
  font-family: "Kaisei Decol", serif;
  font-weight: 700;
  font-style: normal;
}

Zen Kurenaido: CSS class
.zen-kurenaido-regular {
  font-family: "Zen Kurenaido", sans-serif;
  font-weight: 400;
  font-style: normal;
}
```

## Design Elements
Include the following elements:
1. **Title Section**:
   - Main title (large prominent font - use Kaisei Decol)
   - Subtitle (supplementary info - use Zen Kurenaido)
   - Relevant Font Awesome icons
2. **Visual Elements**:
   - Related graphics/illustrations on the right
   - Badges and labels (showing topics/categories)
3. **Content Features**:
   - 3-4 main points with icons
   - Each point should be short and concise
4. **Professional Elements**:
   - Gradient background
   - Subtle grid pattern
   - Appropriate shadow effects
```

## Usage

1. Prepare article title
2. Input prompt to AI
3. Generate thumbnail in HTML/CSS

## Input Example

```
Create a thumbnail for "5 Tips for Efficient Task Management"
```

## Output Example

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <!-- Font definitions above -->
</head>
<body>
  <div class="thumbnail">
    <!-- Thumbnail design -->
  </div>
</body>
</html>
```

## Notes

- Create in 16:9 aspect ratio (1920x1080px)
- Utilize Font Awesome icons
- Use Japanese fonts for improved readability
