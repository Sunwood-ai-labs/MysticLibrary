---
title: "のスライドを自動プレゼンしてください。"
description: "http ://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html"
canonical_id: "presentation/slides-presentation-browser-5500-voicevox"
canonical_doc: "docs/prompt-catalog/presentation/slides-presentation-browser-5500-voicevox.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/presentation/slides-presentation-browser-5500-voicevox.md. Edit docs/ instead. -->

http ://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html 
 のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで:
 - 画面の内容を読み取り
 - VoiceVox MCPで30秒程度に要約して音声合成
 - 音声再生後、下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
