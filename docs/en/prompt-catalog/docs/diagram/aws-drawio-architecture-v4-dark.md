---
title: AWS Draw.io Architecture Diagram Generation v4 Dark Theme
description: Generate AWS architecture diagrams in Draw.io XML format with dark theme colors
category: docs
intent: aws-drawio-diagram-dark
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
  - dark-theme
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# AWS Draw.io Architecture Diagram Generation v4 Dark Theme

## Intended Use

- Represent AWS infrastructure with dark theme colors
- Generate diagrams exportable in Draw.io XML format
- Create visually optimized dark theme diagrams

## Prompt Template

```text
# AWS & Draw.io Architecture Diagram Generation Prompt V4 (experimental)

## Purpose
Create AWS architecture diagrams in Draw.io XML format to generate visually optimized diagrams
Please provide only the XML code

## Basic Layout Instructions
- **Utilize AWS Standard Groups**:
  - Always use standard groups such as AWS Cloud, Region, VPC, Availability Zone
  - Use appropriate groups like Public/Private Subnet, Security group, EC2 instance contents
  - Correctly represent nested group structure (AWS Cloud > Region > VPC > Availability Zone > Subnet)
- **Background Transparency**:
  - Set all group elements to transparent background with `fillColor=none`
  - Subnets should also be transparent by default, use light colors only when necessary
- **Shape Placement**:
  - Provide sufficient space between shapes to avoid interference
  - Avoid making diagrams overly complex
  - Place related shapes in close proximity to reduce arrow burden
  - Arrange shapes so that relationships between service icons are visually clear
  - Design public subnets vertically with room for vertical component placement
- **Text Placement**:
  - Place text below shapes
  - Use settings: verticalLabelPosition=bottom, verticalAlign=top

## Color and Style Specifications

### Color Map

- Create a dark theme using the following color map:
```
<palette>
<color name='Full-moon-1' rgb='010D00' r='0' g='12' b='0' />
<color name='Full-moon-2' rgb='D9CAB0' r='216' g='202' b='175' />
<color name='Full-moon-3' rgb='A69177' r='165' g='144' b='119' />
<color name='Full-moon-4' rgb='F2E2CE' r='242' g='225' b='205' />
<color name='Full-moon-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

### Icon styles:
  - Use modern, flat icons `sketch=0` `outlineConnect=0`
  - Use AWS4 resource icons `shape=mxgraph.aws4.resourceIcon`

## Arrow/Connector Optimization
- **Arrow Styles**:
  - Set arrow width to thin `strokeWidth=1`
  - Represent arrows as single continuous lines without breaks
  - Use `edgeStyle=orthogonalEdgeStyle` for right-angle corners only
  - Use rounded connection lines `rounded=1; orthogonalLoop=1`
- **Path Design**:
  - Draw arrows in purely horizontal/vertical directions, no diagonal lines
  - Route arrows to avoid interference with shapes
  - Organize arrow paths using right-angle turns
  - Adjust connector points as needed to create detour routes
- **Visual Clarity**:
  - Enable connector "jump style" to clearly show arrow crossings
  - Make arrow direction and flow immediately apparent

## XML Structure Optimization
- **Organized Code**:
  - Clearly separate sections with comments (e.g., `<!-- AWS Cloud -->`)
  - Assign unique IDs to each component (cloud, region, vpc, subnet-1, etc.)
  - Indent appropriately to clarify parent-child relationships

## Additional Elements
- **Title and Description**:
  - Add title and brief description at top of diagram
  - Set title with larger font size and bold formatting
- **Architecture Notes**:
  - Add framed notes section at bottom of diagram
  - List important design points in bullet format

---

## Architecture to Create
[Enter AWS architecture specifications here]
```

## How to Use

1. Copy the prompt and paste it into AI
2. Enter the AWS architecture specifications you want to create
3. Copy the generated XML
4. Import in Draw.io (diagrams.net) via "File → Load from XML"

## Input Example

```
## Architecture to Create
- CloudFront + WAF
- ALB + Auto Scaling Group
- EC2 × 2 + ECS Cluster
- RDS MySQL
- ElastiCache Redis
```

## Output Example

Draw.io-compatible complete XML format architecture diagram with dark theme colors will be generated.

## Notes

- Only XML is output (within code blocks)
- Import in Draw.io via "Load Diagram → From XML"
- Dark theme "Full-moon" color palette is used
- AWS standard group hierarchy is automatically created
- Background is transparent for high visibility
