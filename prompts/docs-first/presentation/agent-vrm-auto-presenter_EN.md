---
title: "Agent VRM MCP Auto Presentation"
description: "Prompt for automatic presentation with narration using Playwright MCP and AgentVRM MCP"
canonical_id: "presentation/agent-vrm-auto-presenter"
canonical_doc: "docs/en/prompt-catalog/presentation/agent-vrm-auto-presenter.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/presentation/agent-vrm-auto-presenter.md. Edit docs/ instead. -->

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
