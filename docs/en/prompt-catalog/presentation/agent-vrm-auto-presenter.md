---
title: Agent VRM MCP Auto Presentation
description: Prompt for automatic presentation with narration using Playwright MCP and AgentVRM MCP
category: writing
intent: agent-vrm-auto-presenter
audience:
  - Presentation automation specialists
  - MCP users
input_requirements:
  - Slide URL (web slides like reveal.js)
  - Playwright MCP (browser control)
  - AgentVRM MCP (voice synthesis and avatar display)
tags:
  - MCP
  - AgentVRM
  - presentation
  - automation
  - Playwright
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# Agent VRM MCP Auto Presentation

## Intended Use

- Automatically present web slides with narration
- AgentVRM's VRM avatar explains content with voice
- Use for automatic presentation execution and recording

## Prompt

```text
# Agent VRM MCP Auto Presentation Prompt

Please auto-present the slides at
http://127.0.0.1:5500/agentvrm_slides.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use AgentVRM MCP to synthesize speech summarizing to about 30 seconds (*AgentVRM will handle audio playback)
   - Press down arrow key or use window.nextSlide() to advance to next slide
3. Execute all 6 slides in sequence
4. Title slide can be brief and high-level!
```

## How to Use

1. Prepare the URL of the target presentation slides
2. Replace the URL in the prompt with your target URL
3. Run in an environment where Playwright MCP and AgentVRM MCP are available
4. Adjust "all 6 slides" according to the actual number of slides

## Input Example

```text
# Agent VRM MCP Auto Presentation Prompt

Please auto-present the slides at
https://example.com/presentation.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use AgentVRM MCP to synthesize speech summarizing to about 30 seconds
   - Press down arrow key to advance to next slide
3. Execute all 10 slides in sequence
```

## Output Example

AI automatically executes the following steps:
1. Launch browser and open specified URL
2. Read slide content and generate summary text
3. Execute voice synthesis via AgentVRM MCP
4. Move to next slide after audio playback completes

## Notes

- Both Playwright MCP and AgentVRM MCP must be available
- Slides must be navigable via keyboard (down arrow key)
- Voice synthesis is handled by AgentVRM, so the prompt only generates text
- Instruction specifies summarizing to about 30 seconds, but adjust according to content amount
