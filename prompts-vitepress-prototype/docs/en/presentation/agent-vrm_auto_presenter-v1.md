---
title: "Agent VRM MCP Auto Presentation Prompt"
sourcePath: "prompts/presentation/agent-vrm_auto_presenter-v1_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/presentation/agent-vrm_auto_presenter-v1_EN.md`
> Japanese: [JA](/presentation/agent-vrm_auto_presenter-v1)

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
