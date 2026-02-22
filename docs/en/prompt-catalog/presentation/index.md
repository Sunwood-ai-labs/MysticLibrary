---
title: Presentation
description: Prompts for automatic presentation and pitch deck creation
category: writing
intent: presentation-index
audience:
  - Presentation creators
  - Startup founders
  - MCP users
input_requirements: []
tags:
  - presentation
  - MCP
  - pitch-deck
  - automation
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# Presentation Prompts

Prompts for supporting automatic presentation and pitch deck creation.

## List

### MCP Auto Presentation

- [Agent VRM MCP Auto Presentation](./agent-vrm-auto-presenter.md) - Automatic presentation with narration using Playwright MCP and AgentVRM MCP
- [VoiceVox MCP Auto Presentation](./voicevox-auto-presenter.md) - Automatic presentation with narration using Playwright MCP and VoiceVox MCP

### Pitch Deck Creation

- [PitchCast Maker](./pitchcast-maker.md) - Generate React pitch deck application from business ideas

## Tips for Use

### MCP Auto Presentation
- Both Playwright MCP and voice synthesis MCP must be available
- Slides must be navigable via keyboard
- Adjust URL and slide count in the prompt

### PitchCast Maker
- Complete reference code must be included in the prompt
- Gemini API key required at runtime
- Create 2-4 rally exchanges for dialogue scripts
