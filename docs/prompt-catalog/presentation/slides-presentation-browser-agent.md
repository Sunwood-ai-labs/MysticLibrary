---
title: "Agent VRM MCP自動プレゼンテーション プロンプト"
description: "AgentVRM✖AgentVRM MCP✖Roo-Codeで「VRMリアルタイムプレゼン」してもらった2⃣"
category: "presentation"
intent: "presentation-design"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - presentation
  - slides
  - browser
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1939326223488110946"
source_url: "https://x.com/hAru_mAki_ch/status/1939326223488110946"
source_published_at: "2025-06-29T14:12:57.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/06/1939326223488110946.md"
source_note_ids:
  - 1939326223357984768
canonical_id: "presentation/slides-presentation-browser-agent"
prompt_source: "prompts/docs-first/presentation/slides-presentation-browser-agent_JP.md"
---

# Agent VRM MCP自動プレゼンテーション プロンプト

AgentVRM✖AgentVRM MCP✖Roo-Codeで「VRMリアルタイムプレゼン」してもらった2⃣

## プロンプト本文
~~~text
# Agent VRM MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/agentvrm_slides.html
 のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで:
 - 画面の内容を読み取り
 - AgentVRM MCPで30秒程度に要約して音声合成 (*AgentVRM 側で音声の再生はします)
 - 下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
4. タイトルスライドは簡潔でザックリでいいよ!
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1939326223488110946" />
</ClientOnly>

### 投稿メモ
~~~text
AgentVRM✖AgentVRM MCP✖Roo-Codeで「VRMリアルタイムプレゼン」してもらった2⃣
~~~

## 出典
- primary post: [1939326223488110946](https://x.com/hAru_mAki_ch/status/1939326223488110946)
- published at: 2025-06-29 23:12:57 JST
- archive doc: [1939326223488110946](../archive/x/2025/06/1939326223488110946.md)
