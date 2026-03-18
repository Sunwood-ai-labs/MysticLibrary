---
title: "AWS Draw.io Architecture Diagram Generation v4 Dark Theme"
description: "Generate AWS architecture diagrams in Draw.io XML format with dark theme colors"
canonical_id: "docs/diagram/aws-drawio-architecture-v4-dark"
canonical_doc: "docs/en/prompt-catalog/docs/diagram/aws-drawio-architecture-v4-dark.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/docs/diagram/aws-drawio-architecture-v4-dark.md. Edit docs/ instead. -->

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
