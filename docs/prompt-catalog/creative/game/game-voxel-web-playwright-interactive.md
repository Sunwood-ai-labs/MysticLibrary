---
title: "ローカルで起動するWebアプリとして実装する"
description: "playwright-interactive を使って、ゼロから three.js のボクセルゲーム風Webアプリを作って。"
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - game
  - voxel
  - web
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2030227975401337305"
source_url: "https://x.com/hAru_mAki_ch/status/2030227975401337305"
source_published_at: "2026-03-07T10:24:03.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/03/2030227975401337305.md"
source_note_ids:
  - 2030227975317385216
canonical_id: "creative/game/game-voxel-web-playwright-interactive"
prompt_source: "prompts/docs-first/creative/game/game-voxel-web-playwright-interactive_JP.md"
---

# ローカルで起動するWebアプリとして実装する

playwright-interactive を使って、ゼロから three.js のボクセルゲーム風Webアプリを作って。

## プロンプト本文
~~~text
playwright-interactive を使って、ゼロから three.js のボクセルゲーム風Webアプリを作って。

要件:
- ローカルで起動するWebアプリとして実装する
- three.jsで3Dシーンを描画する
- ボクセル地形を表示する
- プレイヤー視点で前後左右に移動できる
- マウスで視点変更できる
- 1種類でよいのでブロックを設置できる
- 1種類でよいのでブロックを削除できる
- 画面中央にクロスヘアを表示する
- 下部に選択中ブロックのHUDを表示する

進め方:
- 先にQA inventoryを作ってから実装して
- 実装後は localhost ではなく 127.0.0.1 のURLで確認して
- functional QA と visual QA を分けて行って
- デスクトップ表示に加えて、モバイル相当の小さいviewportでも確認して
- 最後に、確認した項目・未確認項目・スクリーンショットを添えて報告して
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2030227975401337305" />
</ClientOnly>

## 出典
- primary post: [2030227975401337305](https://x.com/hAru_mAki_ch/status/2030227975401337305)
- published at: 2026-03-07 19:24:03 JST
- archive doc: [2030227975401337305](../../archive/x/2026/03/2030227975401337305.md)
