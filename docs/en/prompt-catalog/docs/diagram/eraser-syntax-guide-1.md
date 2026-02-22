---
title: Eraser Syntax Guide ①
description: Syntax guide for creating diagrams on the Eraser platform
category: docs
intent: eraser-syntax-guide
audience:
  - Eraser users
  - Diagram creators
  - Documentation writers
input_requirements:
  - Structure of diagram to create
tags:
  - eraser
  - syntax
  - diagram
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser Syntax Guide ①

## Intended Use

- Create diagrams on Eraser platform
- Express flowcharts and architecture diagrams in concise YAML format
- Learn basic Eraser notation

## Prompt

This prompt is a syntax guide, not a template for requesting AI diagram generation. After learning Eraser notation, you can define diagrams in the following format:

```yaml
# Node definition
NodeName [attributes] {
  # Subnode definition
  SubNodeName [attributes]
}

# Relationship definition
Node1 > Node2: [label]
```

## Attribute List

### Shapes (shape)
- `oval`: Ellipse
- `rectangle`: Rectangle
- `diamond`: Diamond
- `rounded_rectangle`: Rounded rectangle
- `cylinder`: Cylinder
- `hexagon`: Hexagon
- `triangle`: Triangle
- `cloud`: Cloud
- `database`: Database

### Icons (icon)
- `file-text`, `bug`, `copy`, `check-square`
- `user`, `users`, `home`, `folder`
- `aws-api-gateway`, `aws-lambda`, `aws-simple-storage-service`
- `k8s-control-plane`, `k8s-api`, `k8s-node`
- And many more

### Colors (color)
- `red`, `green`, `blue`, `yellow`, `purple`, `orange`, `grey`

## How to Use

1. Access [Eraser](https://docs.eraser.io/docs/what-is-eraser) platform
2. Define diagram in above YAML format
3. Paste into Eraser editor to render

## Input Example

```yaml
# Issue Triage Flow
Issue type? [shape: oval, icon: file-text]

BugPath [color: red] {
  Bug [icon: bug, color: red]
  Has repro? [shape: diamond, icon: repeat]
}

FeaturePath [color: green] {
  Feature [icon: zap, color: green]
  Well specced? [shape: diamond, icon: check-square]
}

Issue ready to claim [shape: oval, icon: send]

# Relationships
Issue type? > Bug
Bug > Has repro?
Has repro? > Issue ready to claim: Yes
Issue type? > Feature
Feature > Well specced?
Well specced? > Issue ready to claim: Yes
```

## Output Example

Renders as visual flowchart on Eraser platform.

## Notes

- This is a syntax guide. When requesting AI diagram generation, request definitions following this notation
- Eraser-specific notation, not compatible with other diagram tools
- See [Eraser official documentation](https://docs.eraser.io/docs/what-is-eraser) for details
