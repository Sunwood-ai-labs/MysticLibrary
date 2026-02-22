---
title: "VoiceVox MCP Auto Presentation Prompt"
sourcePath: "prompts/presentation/voicevox_auto_presenter-v1_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/presentation/voicevox_auto_presenter-v1_EN.md`
> Japanese: [JA](/presentation/voicevox_auto_presenter-v1)

# VoiceVox MCP Auto Presentation Prompt

Please auto-present the slides at
http://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use VoiceVox MCP to synthesize speech summarizing to about 30 seconds
   - After audio playback, press down arrow key or use window.nextSlide() to advance to next slide
3. Execute all 6 slides in sequence
