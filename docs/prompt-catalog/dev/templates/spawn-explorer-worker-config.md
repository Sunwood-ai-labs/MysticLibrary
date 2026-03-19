---
title: "リポジトリを“最低限ちゃんとしてる状態”に整備したい(大改造はしない)。"
description: "Codex CLI の MULTI-AGENT 使ってみた❸"
category: "dev"
intent: "developer-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - dev
  - templates
  - spawn
  - explorer
  - worker
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2024109044953502028"
source_url: "https://x.com/hAru_mAki_ch/status/2024109044953502028"
source_published_at: "2026-02-18T13:09:37.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/02/2024109044953502028.md"
source_note_ids:
  - 2024109044836036608
canonical_id: "dev/templates/spawn-explorer-worker-config"
prompt_source: "prompts/docs-first/dev/templates/spawn-explorer-worker-config_JP.md"
---

# リポジトリを“最低限ちゃんとしてる状態”に整備したい(大改造はしない)。

Codex CLI の MULTI-AGENT 使ってみた❸

## プロンプト本文
~~~text
リポジトリを“最低限ちゃんとしてる状態”に整備したい(大改造はしない)。

spawn explorer(読み取りのみ):
- 現状の起動方法、ファイル構成、スプライト参照方法を確認
- 読みにくい/定数が散ってる/リスタートが怪しい箇所を列挙

spawn worker:
- CONFIG(定数)を1か所にまとめる(canvasサイズ、速度、スポーン間隔、当たり判定、弾があるなら弾関連も)
- state を playing / gameover / title など明示して、resetGame() を単一責任で整理(リセット漏れ防止)
- README. md を追加:
 - 遊び方(操作、目的)
 - ローカル起動(推奨: 簡易HTTPサーバ。なければ file:// でも動くか注記)
 - sprites の置き方(命名規約 or 自動読み込みならその説明)

spawn reviewer:
- “開いてすぐ遊べる” を壊してないか、パスが相対で壊れてないか、イベント多重登録がないかチェック

最後に:
- 変更点サマリと、README の章立てを提示して
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2024109044953502028" />
</ClientOnly>

### 投稿メモ
~~~text
Codex CLI の MULTI-AGENT 使ってみた❸
リポジトリの整備もやってみた!!
普通に良さそう!!!
~~~

## 出典
- primary post: [2024109044953502028](https://x.com/hAru_mAki_ch/status/2024109044953502028)
- published at: 2026-02-18 22:09:37 JST
- archive doc: [2024109044953502028](../../archive/x/2026/02/2024109044953502028.md)
