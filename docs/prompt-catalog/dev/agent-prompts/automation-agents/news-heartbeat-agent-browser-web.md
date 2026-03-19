---
title: "AI News Heartbeat (agent-browser)"
description: "AI News Heartbeat (agent-browser)"
category: "dev"
intent: "developer-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - dev
  - agent-prompts
  - automation-agents
  - news
  - heartbeat
  - agent
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2015791904492024260"
source_url: "https://x.com/hAru_mAki_ch/status/2015791904492024260"
source_published_at: "2026-01-26T14:20:16.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/01/2015791904492024260.md"
source_note_ids:
  - 2015791904248778752
canonical_id: "dev/agent-prompts/automation-agents/news-heartbeat-agent-browser-web"
prompt_source: "prompts/docs-first/dev/agent-prompts/automation-agents/news-heartbeat-agent-browser-web_JP.md"
---

# AI News Heartbeat (agent-browser)

AI News Heartbeat (agent-browser)

## プロンプト本文
~~~text
# AI News Heartbeat (agent-browser)

目的: agent-browser を使って WEB 上の AI ニュースを確認し、更新があれば Discord に1件投稿する。

## 状態管理
- 前回投稿URLを `workspace/bot1/ai_news_last_url.txt` に保存する。
- 同じURLなら投稿しない(次候補に進む)。候補が無ければ HEARTBEAT_OK。

## 探し方(毎回)
1) 次のうち “一番確度が高い” ところから順に確認する(例):
- OpenAI News: https://t.co/Yvru97Ne8l
- Anthropic News: https://t.co/uGBbrALhUu
- DeepMind Blog: https://t.co/dCgtTw7lnj
- arXiv https://t.co/xJosePJxWL recent: https://t.co/BycZyjy8nM

2) 各サイトで agent-browser を使い、トップの新しそうな記事リンクを 1〜3 件拾う。
- 基本手順:
- `agent-browser open <url>`
- `agent-browser wait --load networkidle`
- `agent-browser snapshot -i` でリンク要素(記事タイトルっぽいもの)を見つける
- 見つけたリンクを `agent-browser click @ eX`
- `agent-browser get url` と `agent-browser get title` を取得
- 既出URL(ai_news_last_url.txt と同じ)はスキップして次候補へ。

3) 記事本文の把握:
- まず `agent-browser snapshot -s "article"` を試す(無ければ main 等に切り替え)
- 本文っぽい要素の ref を特定し、`agent-browser get text @ eX` で本文テキストを得る
- 取得量が多すぎる場合は “冒頭〜要点” だけで良い(見出し/箇条書きを優先)

## 投稿フォーマット(必須)
- 先頭に必ず `💓[HB] ` を付ける(Heartbeat起因だと分かるようにする)
- 日本語、1投稿=1ネタ
- 150〜220文字目安(短く)
- 構成: `💓[HB] 【AIニュース】要点1文 + 意味/影響1文 + URL`
- 引用(コピペ)禁止。自分の言葉で要約する。

## 出力ルール
- 新ネタあり: 投稿本文のみ(HEARTBEAT_OK を混ぜない)。投稿後、`ai_news_last_url.txt` を新URLで更新。
- 新ネタなし: `HEARTBEAT_OK`
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2015791904492024260" />
</ClientOnly>

## 出典
- primary post: [2015791904492024260](https://x.com/hAru_mAki_ch/status/2015791904492024260)
- published at: 2026-01-26 23:20:16 JST
- archive doc: [2015791904492024260](../../../archive/x/2026/01/2015791904492024260.md)
