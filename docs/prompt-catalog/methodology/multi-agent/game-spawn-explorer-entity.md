---
title: "この縦スクロールゲームに「弾の発射」を追加したい(最小実装、外部ライブラリなし)。"
description: "Codex CLI の MULTI-AGENT 使ってみた❷"
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
  - spawn
  - explorer
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2024097187987419138"
source_url: "https://x.com/hAru_mAki_ch/status/2024097187987419138"
source_published_at: "2026-02-18T12:22:30.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/02/2024097187987419138.md"
source_note_ids:
  - 2024097187882504192
canonical_id: "methodology/multi-agent/game-spawn-explorer-entity"
prompt_source: "prompts/docs-first/methodology/multi-agent/game-spawn-explorer-entity_JP.md"
---

# この縦スクロールゲームに「弾の発射」を追加したい(最小実装、外部ライブラリなし)。

Codex CLI の MULTI-AGENT 使ってみた❷

## プロンプト本文
~~~text
この縦スクロールゲームに「弾の発射」を追加したい(最小実装、外部ライブラリなし)。

spawn explorer(読み取りのみ):
- 現在の entity 管理(player / obstacles / score / state)と update/render ループを把握
- 入力処理(左右移動)に発射キーを追加できる場所を特定

spawn worker:
- Space(または Z)で弾を発射(連射はクールダウン 150ms くらい)
- 弾は上方向に移動し、画面外で消える
- 弾と障害物が衝突したら障害物を消してスコア加点(例: +10)
- ゲームオーバー/リスタート時に弾配列も確実にリセット
- ./sprites/*.png が使えるなら弾用に割り当て(なければ矩形フォールバック)

spawn reviewer:
- Δt 依存、キー押しっぱなし連射、配列走査中の削除(splice/filter)でバグらないかチェック

最後に:
- 変更ファイルと、追加した定数(fireCooldown, bulletSpeed, bulletSize, bulletScore)を一覧で出して
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2024097187987419138" />
</ClientOnly>

### 投稿メモ
~~~text
Codex CLI の MULTI-AGENT 使ってみた❷
機能の追加も出来たぞ!!!!
~~~

## 出典
- primary post: [2024097187987419138](https://x.com/hAru_mAki_ch/status/2024097187987419138)
- published at: 2026-02-18 21:22:30 JST
- archive doc: [2024097187987419138](../../archive/x/2026/02/2024097187987419138.md)
