---
title: VoiceVox MCP Auto Presentation
description: Prompt for automatic presentation with narration using Playwright MCP and VoiceVox MCP
category: writing
intent: voicevox-auto-presenter
audience:
  - Presentation automation specialists
  - MCP users
  - VoiceVox users
input_requirements:
  - Slide URL (web slides like reveal.js)
  - Playwright MCP (browser control)
  - VoiceVox MCP (voice synthesis)
tags:
  - MCP
  - VoiceVox
  - presentation
  - automation
  - Playwright
  - tts
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# VoiceVox MCP Auto Presentation

## Intended Use

- Automatically present web slides with narration
- VoiceVox voice synthesis explains the content
- Use for automatic presentation execution and recording

## Prompt

```text
# VoiceVox MCP Auto Presentation Prompt

Please auto-present the slides at
http://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use VoiceVox MCP to synthesize speech summarizing to about 30 seconds
   - After audio playback, press down arrow key or use window.nextSlide() to advance to next slide
3. Execute all 6 slides in sequence
```

## How to Use

1. Prepare the URL of the target presentation slides
2. Replace the URL in the prompt with your target URL
3. Run in an environment where Playwright MCP and VoiceVox MCP are available
4. Adjust "all 6 slides" according to the actual number of slides

## Input Example

```text
# VoiceVox MCP Auto Presentation Prompt

Please auto-present the slides at
https://example.com/presentation.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use VoiceVox MCP to synthesize speech summarizing to about 30 seconds
   - After audio playback, press down arrow key to advance to next slide
3. Execute all 10 slides in sequence
```

## Output Example

AI automatically executes the following steps:
1. Launch browser and open specified URL
2. Read slide content and generate summary text
3. Execute voice synthesis and playback via VoiceVox MCP
4. Move to next slide after audio playback completes

## Notes

- Both Playwright MCP and VoiceVox MCP must be available
- Slides must be navigable via keyboard (down arrow key)
- Waits for audio playback to complete before advancing to next slide
- Instruction specifies summarizing to about 30 seconds, but adjust according to content amount
- Unlike AgentVRM version, this prompt execution also controls audio playback
