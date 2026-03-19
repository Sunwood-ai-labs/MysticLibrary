---
title: "action: \\\"transform"
description: "黒化プロンプトの研究中3⃣"
canonical_id: "creative/visual/character-styles/action-transform-base-direction"
canonical_doc: "docs/prompt-catalog/creative/visual/character-styles/action-transform-base-direction.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/visual/character-styles/action-transform-base-direction.md. Edit docs/ instead. -->

prompt:
 base:
 action: "transform"
 subject: "character in image"
 direction: "dark corruption"
 
 visual:
 eyes:
 glow: true
 color: "purple"
 style: "hollow"
 
 skin:
 tone: "pale"
 effect: "cracked veins"
 
 aura:
 enabled: true
 type: "miasma"
 color: "black/purple"
 particles: true
 
 style:
 palette: "desaturated"
 accent_color: "purple"
 contrast: "high"
 lighting: "dramatic backlight"
 
 expression:
 type: "sinister smile"
 eyes_mood: "empty"
 
 outfit:
 keep_original: true
 color_shift: "darker"
 additions:
 - "torn edges"
 - "dark ornaments"
 
 quality:
 detail: "high"
 style: "illustration"

negative_prompt:
 colors:
 - "bright"
 - "saturated"
 mood:
 - "cheerful"
 - "cute"
 content:
 - "gore"
 - "blood"
