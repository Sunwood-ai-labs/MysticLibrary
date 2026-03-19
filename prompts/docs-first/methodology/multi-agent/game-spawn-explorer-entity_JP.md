---
title: "この縦スクロールゲームに「弾の発射」を追加したい(最小実装、外部ライブラリなし)。"
description: "Codex CLI の MULTI-AGENT 使ってみた❷"
canonical_id: "methodology/multi-agent/game-spawn-explorer-entity"
canonical_doc: "docs/prompt-catalog/methodology/multi-agent/game-spawn-explorer-entity.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/methodology/multi-agent/game-spawn-explorer-entity.md. Edit docs/ instead. -->

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
