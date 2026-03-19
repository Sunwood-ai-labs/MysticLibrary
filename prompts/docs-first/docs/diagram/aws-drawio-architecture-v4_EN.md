---
title: "AWS Draw.io Architecture Diagram Generator v4"
description: "Prompt for generating AWS architecture diagrams in Draw.io XML format with visual optimization"
canonical_id: "docs/diagram/aws-drawio-architecture-v4"
canonical_doc: "docs/en/prompt-catalog/docs/diagram/aws-drawio-architecture-v4.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/docs/diagram/aws-drawio-architecture-v4.md. Edit docs/ instead. -->

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
