---
title: "ゲーム仕様(最小ルール、操作、スコア、ゲームオーバー、リスタート)"
description: "このブランチで、ブラウザで動くシンプルな縦スクロールゲームを作成したいです(HTML + JavaScript + Canvas、外部ライブラリなし)。アセッ…"
category: "methodology"
intent: "workflow-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - methodology
  - multi-agent
  - game
  - agent
  - browser
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2024084639372161193"
source_url: "https://x.com/hAru_mAki_ch/status/2024084639372161193"
source_published_at: "2026-02-18T11:32:38.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/02/2024084639372161193.md"
source_note_ids:
  - 2024084639216959488
canonical_id: "methodology/multi-agent/game-agent-browser-spec"
prompt_source: "prompts/docs-first/methodology/multi-agent/game-agent-browser-spec_JP.md"
---

# ゲーム仕様(最小ルール、操作、スコア、ゲームオーバー、リスタート)

このブランチで、ブラウザで動くシンプルな縦スクロールゲームを作成したいです(HTML + JavaScript + Canvas、外部ライブラリなし)。アセッ…

## プロンプト本文
~~~text
このブランチで、ブラウザで動くシンプルな縦スクロールゲームを作成したいです(HTML + JavaScript + Canvas、外部ライブラリなし)。アセットは ./sprites/*.png を使用してください(読み込み失敗時は矩形でフォールバック)。

以下の観点ごとにエージェントを1つずつ立ち上げて並列に作業させ、全エージェントの結果が揃うのを待ってから、観点ごとに結果を要約してください。最後に、要約を統合して「最小構成で動く実装」を出力してください(index.html 単体 or index.html + game.js)。

1. ゲーム仕様(最小ルール、操作、スコア、ゲームオーバー、リスタート)
2. アセット利用(./sprites/*.png の割り当て方針、ロード方法、フォールバック)
3. 実装(ゲームループ、描画、入力、出現ロジック、衝突判定)
4. バグ・落とし穴(状態リセット、Δt、境界処理、画像ロード前開始など)
5. コード品質(短く読みやすい構造、命名、定数化)
6. 保守性(拡張しやすい分割、設定値のまとめ方)

成果物の条件:
- 開いてすぐ遊べる
- 左右移動できる
- 縦スクロールする
- 障害物(または敵)が出る
- 衝突でゲームオーバー
- スコア表示
- リスタート可能
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2024084639372161193" />
</ClientOnly>

### 投稿メモ
~~~text
Codex CLI の MULTI-AGENT 使ってみた!!
これはClaudeCodeよりも使いやすいかも??!!!

早速ミニゲームを作ってみた!!!
とりあえずは完成までいったぞ!!
~~~

## 出典
- primary post: [2024084639372161193](https://x.com/hAru_mAki_ch/status/2024084639372161193)
- published at: 2026-02-18 20:32:38 JST
- archive doc: [2024084639372161193](../../archive/x/2026/02/2024084639372161193.md)
