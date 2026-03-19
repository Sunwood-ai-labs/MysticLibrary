---
title: "VoiceVox MCP Auto Presentation"
description: "Prompt for automatic presentation with narration using Playwright MCP and VoiceVox MCP"
canonical_id: "presentation/voicevox-auto-presenter"
canonical_doc: "docs/en/prompt-catalog/presentation/voicevox-auto-presenter.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/presentation/voicevox-auto-presenter.md. Edit docs/ instead. -->

# VoiceVox MCP Auto Presentation Prompt

Please auto-present the slides at
http://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html

1. Use Playwright MCP to open browser and access URL
2. For each slide:
   - Read screen content
   - Use VoiceVox MCP to synthesize speech summarizing to about 30 seconds
   - After audio playback, press down arrow key or use window.nextSlide() to advance to next slide
3. Execute all 6 slides in sequence
