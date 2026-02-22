---
title: AWS Draw.io Architecture Diagram Generation v1
description: Simple prompt for generating AWS architecture diagrams in Draw.io XML format
category: docs
intent: aws-drawio-diagram-simple
audience:
  - Architects
  - Cloud Engineers
  - System Designers
input_requirements:
  - AWS architecture specifications to create
tags:
  - aws
  - drawio
  - architecture-diagram
  - xml
  - simple
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# AWS Draw.io Architecture Diagram Generation v1

## Intended Use

- Quickly create simple AWS infrastructure diagrams
- Generate diagrams exportable in Draw.io XML format
- Prefer ease of use over detailed style specifications

## Prompt Template

```text
# AWS & Draw.io Architecture Diagram Generation Prompt V1 (experimental)

Create the following AWS architecture diagram in Draw.io XML format
Provide sufficient space between shapes to avoid interference
Strive to avoid making the diagram too complex
Place shapes connected by paths as close as possible to reduce arrow burden
Route arrows to avoid interference with shapes
Place text below shapes
---
[Enter AWS architecture specifications here]
```

## How to Use

1. Copy the prompt and paste it into AI
2. Enter the AWS architecture specifications you want to create
3. Copy the generated XML
4. Import in Draw.io (diagrams.net) via "File → Load from XML"

## Input Example

```
Create the following AWS architecture diagram in Draw.io XML format
Provide sufficient space between shapes to avoid interference
Strive to avoid making the diagram too complex
Place shapes connected by paths as close as possible to reduce arrow burden
Route arrows to avoid interference with shapes
Place text below shapes
---

## Architecture to Create
- CloudFront
- ALB
- EC2 × 2
- RDS
```

## Output Example

Draw.io-compatible XML format architecture diagram will be generated.

## Notes

- V1 is the simple version. Use V4 if you need detailed style specifications
- Only XML is output (within code blocks)
- Import in Draw.io via "Load Diagram → From XML"
- Layout optimization relies on AI automatic adjustment
