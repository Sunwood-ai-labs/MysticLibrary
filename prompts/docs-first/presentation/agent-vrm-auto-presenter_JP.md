---
title: "Agent VRM MCP 自動プレゼンテーション"
description: "Playwright MCPとAgentVRM MCPを使用してスライドを自動ナレーション付きでプレゼンテーションするプロンプト"
canonical_id: "presentation/agent-vrm-auto-presenter"
canonical_doc: "docs/prompt-catalog/presentation/agent-vrm-auto-presenter.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/presentation/agent-vrm-auto-presenter.md. Edit docs/ instead. -->

# Agent VRM MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/agentvrm_slides.html
のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - AgentVRM MCPで30秒程度に要約して音声合成（＊AgentVRM 側で音声の再生はします）
   - 下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
4. タイトルスライドは簡潔でザックリでいいよ！
