---
title: Diagram
description: Prompts for generating visual diagrams such as architecture diagrams and flowcharts
category: docs
intent: diagram
audience:
  - Architects
  - Engineers
  - Documentation writers
input_requirements:
  - System architecture or flow to diagram
tags:
  - diagram
  - architecture-diagram
  - draw-io
  - aws
  - eraser
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Diagram

A collection of prompts for visually representing system architectures and process flows.

## Prompt List

### AWS/Draw.io

- [AWS Draw.io Architecture Generator v1](./aws-drawio-architecture-v1.md) - Simple prompt for easy AWS architecture generation
- [AWS Draw.io Architecture Generator v4](./aws-drawio-architecture-v4.md) - Generate AWS architecture in Draw.io XML format (standard)
- [AWS Draw.io Architecture Generator v4 Dark Theme](./aws-drawio-architecture-v4-dark.md) - Generate AWS architecture with dark theme colors

### Workflow / Skills

- [Draw.io Codex Spark Eclipse Legion Flow Diagram](./drawio-codex-spark-eclipse-legion-flow.md) - Short prompt for diagramming the Codex Spark Eclipse Legion skill flow with header-aligned colors

### Eraser

- [Eraser Syntax Guide ①](./eraser-syntax-guide-1.md) - Guide to Eraser platform notation
- [Eraser Syntax Guide ② ERD](./eraser-syntax-guide-erd.md) - Entity Relationship Diagram (ERD) notation guide
- [EraserAI Practical Guide](./eraser-ai-practical-guide.md) - Practical use cases for creating useful diagrams

## How to Use

### AWS Draw.io Prompt
1. Copy the prompt and paste into AI
2. Input the AWS architecture specifications
3. Import the generated XML into Draw.io

### Eraser Prompt
1. Learn Eraser notation
2. Define diagrams in YAML format
3. Render on Eraser platform

## Features

- AWS standard group structure support
- High visibility design with transparent backgrounds
- Easy identification of components with appropriate color coding
- Icons for various cloud providers and tools

<!-- integrated-catalog:start -->
## Additional Prompts

These canonical prompt pages are maintained on the Japanese source-of-truth route until English translations are available.

- total items: 4

### Canonical Prompt Pages

- [Kaggle](../../../../prompt-catalog/docs/diagram/kaggle.md) - Kaggleで今ってどんなコンペが開催してる??
- [Diagram Kaggle](../../../../prompt-catalog/docs/diagram/diagram-kaggle.md) - Kaggleで今ってどんなコンペが開催してる??
- [Claude Opus Drawio Xml](../../../../prompt-catalog/docs/diagram/claude-opus-drawio-xml.md) - GUのカスタマージャーニーマップをdrawioでわかりやすく表現するためのxmlを書いて。ミニマルでオシャレでカラフルなフラットデザインで、かつ流れをアニメー…
- [Agent Sonnet4 5 Aws Bedrock](../../../../prompt-catalog/docs/diagram/agent-sonnet4-5-aws-bedrock.md) - https://t.co/gEMHIAcdayでAWS のBedrockを使ったエージェントアプリのインフラのアーキテクチャを表示するためのxmlを書いて。…
<!-- integrated-catalog:end -->
