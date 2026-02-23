---
title: Graph-Enhanced Graphic Recording V1 Mermaid Integration
description: Prompt for generating graphic recording HTML with Mermaid graph integration
category: docs
intent: graphic-recording-mermaid
audience:
  - Facilitators
  - Presenters
  - Content creators
input_requirements:
  - Text content to convert to graphic recording
tags:
  - graphic-recording
  - infographic
  - html-generation
  - mermaid
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Graph-Enhanced Graphic Recording V1 Mermaid Integration

## Intended Use

- Create graphic recording with integrated Mermaid graphs
- Visualize structures, flows, and relationships with diagrams
- Organize information with large icons and speech bubbles

## Prompt

```text
# Graph-Enhanced Graphic Recording (Graleco) HTML Creation Prompt V1

## Purpose
Please convert the following content into a Japanese graphic recording-style HTML infographic utilizing **large Font Awesome icons**, **handwritten-style speech bubbles**, and **Mermaid graphs**. Place one large icon in each card and actively use small inline icons to visually represent information in an easy-to-understand manner. Display structures and relationships that are easier to understand when diagrammed as Mermaid graphs.

## Design Specifications
### 1. Color Scheme (Illustration Pastel)
```
<palette>
<color name='Illustration-1' rgb='F2798F' r='242' g='121' b='143' />
<color name='Illustration-2' rgb='3F77BF' r='63' g='118' b='191' />
<color name='Illustration-3' rgb='34BFBF' r='51' g='191' b='191' />
<color name='Illustration-4' rgb='F2C641' r='242' g='198' b='65' />
<color name='Illustration-5' rgb='F2D1CE' r='242' g='208' b='205' />
</palette>
```

### 2. Graphic Recording Elements
- Place everything on a canvas with white background (#FFF8F5)
- Place **one extra-large theme icon** in each card (approximately fa-5x)
- **Structure card content in list format with small icons**
- Add points and supplementary information with **handwritten-style speech bubbles**
- **Visualize structures, flows, and relationships with Mermaid graphs**
- Divide content into multiple sections and organize in card format
- Visually emphasize keywords in tag format
- Display code samples in preview format
- Visual elements (arrows and lines) connecting related concepts
- Emphasize each card with animation (apply to any section)
- Increase information density within cards and organize visually with small icons
- Use color map for code blocks to make them stylish

### 3. Typography
- Title: 36px, bold, with extra-large related icon (fa-6x or larger)
- Card title: 24px, with large icon (fa-5x)
- List heading: 18px
- List items: 16px, with small icons
- Tags: 16px, with background color
- Body text: 16px, line spacing 1.5
- Code preview: 14px, monospace font, with background color
- Speech bubble text: handwritten font, 15px
- Font specification: Kaisei Decol, Yomogi, Zen Kurenaido

### 4. Layout
- Overall: **4-column layout** (responsive)
- Header: Title with ultra-large icon (fa-7x) + date
- Each card: One large icon + list-format content + speech bubble
- Card interior: Organize information in structured list format
- **Appropriately place Mermaid graphs** (flowcharts, sequence diagrams, class diagrams, etc.)

### 5. Mermaid Graph Usage Guidelines
- **Flowchart** (flowchart): Visualize processes and procedures
- **Sequence Diagram** (sequenceDiagram): Interactions over time
- **Class Diagram** (classDiagram): Relationships between concepts
- **State Diagram** (stateDiagram): State transitions
- **ER Diagram** (erDiagram): Data structure visualization
- **Mind Map** (mindmap): Information hierarchy structure

---

## Text/Article to Convert
[Enter text content to convert to graphic recording here]
```

## How to Use

1. Copy the prompt and paste into AI chat tool
2. Enter the text content you want to convert in the text/article section
3. Display and save the generated HTML in browser (Mermaid graphs auto-render)

## Input Example

```
## Text/Article to Convert
### Web Application Development Process
1. Requirements Definition
2. Design (UI/UX, Database)
3. Development (Frontend, Backend)
4. Testing
5. Deployment
```

## Output Example

4-column graphic recording HTML with integrated Mermaid graphs using Illustration Pastel color palette (pink #F2798F, blue #3F77BF, turquoise #34BFBF, yellow #F2C641) will be generated.

## Notes

- Mermaid graphs are loaded from CDN and rendered
- Pastel colors create a soft impression
- Content with clear structures and relationships is automatically converted to Mermaid diagrams
