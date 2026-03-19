---
title: "ローカルで起動するWebアプリとして実装する"
description: "playwright-interactive を使って、ゼロから three.js のボクセルゲーム風Webアプリを作って。"
canonical_id: "creative/game/game-voxel-web-playwright-interactive"
canonical_doc: "docs/prompt-catalog/creative/game/game-voxel-web-playwright-interactive.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/game/game-voxel-web-playwright-interactive.md. Edit docs/ instead. -->

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
