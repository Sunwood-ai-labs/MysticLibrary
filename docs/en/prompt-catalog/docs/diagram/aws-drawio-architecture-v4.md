---
title: AWS Draw.io Architecture Diagram Generator v4
description: Prompt for generating AWS architecture diagrams in Draw.io XML format with visual optimization
category: docs
intent: aws-drawio-diagram
audience:
  - Architects
  - Cloud engineers
  - System designers
input_requirements:
  - AWS architecture specifications to create
tags:
  - aws
  - drawio
  - architecture-diagram
  - xml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# AWS Draw.io Architecture Diagram Generator v4

## Intended Use

- Visually represent AWS infrastructure configurations
- Generate diagrams exportable in Draw.io XML format
- Create consistent diagrams using AWS standard icons and color schemes

## Prompt

```text
# AWS & Draw.io Architecture Diagram Generation Prompt V4 (experimental)

## Purpose
Create AWS architecture diagrams in Draw.io XML format with visual optimization
Output XML code only

## Basic Layout Instructions
- **Use AWS Standard Groups**:
  - Always use standard groups: AWS Cloud, Region, VPC, Availability Zone
  - Use appropriate groups: Public/Private Subnet, Security group, EC2 instance contents
  - Correctly express group hierarchy (AWS Cloud > Region > VPC > Availability Zone > Subnet)
- **Transparent Backgrounds**:
  - Set all group elements to transparent background with `fillColor=none`
- **Shape Placement**:
  - Provide adequate spacing between shapes to prevent interference
  - Place related shapes close together to reduce arrow complexity
- **Text Placement**:
  - Place text below shapes
  - Use verticalLabelPosition=bottom, verticalAlign=top settings

## Color and Style Specifications
- **Region colors**: Teal `strokeColor=#00A4A6`
- **VPC colors**: Purple `strokeColor=#8C4FFF`
- **Availability Zone colors**: Blue `strokeColor=#147EBA`
- **Subnet colors**: Green `strokeColor=#7AA116`
- **EC2/ECS colors**: Orange `fillColor=#D45B07`
- **IAM Role colors**: Red `fillColor=#BF0816`
- **Security Group colors**: Red line `strokeColor=#DD3522`

## Arrow and Connector Optimization
- Arrow width should be thin `strokeWidth=1`
- Use `edgeStyle=orthogonalEdgeStyle` for right-angle corners only
- Use rounded connections `rounded=1; orthogonalLoop=1`

## Architecture to Create
[Enter AWS architecture specifications here]
```

## How to Use

1. Copy the prompt and paste into AI
2. Enter AWS architecture specifications you want to create
3. Copy the generated XML
4. Import into Draw.io (diagrams.net) via "File → Import from XML"

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

Complete XML format architecture diagram that can be imported into Draw.io will be generated.

## Notes

- Only XML is output (within code blocks)
- Import via Draw.io's "Load Diagram → From XML"
- AWS standard group hierarchy is automatically created
- Transparent background settings for high visibility
