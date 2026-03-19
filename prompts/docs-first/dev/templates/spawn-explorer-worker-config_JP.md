---
title: "リポジトリを“最低限ちゃんとしてる状態”に整備したい(大改造はしない)。"
description: "Codex CLI の MULTI-AGENT 使ってみた❸"
canonical_id: "dev/templates/spawn-explorer-worker-config"
canonical_doc: "docs/prompt-catalog/dev/templates/spawn-explorer-worker-config.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/dev/templates/spawn-explorer-worker-config.md. Edit docs/ instead. -->

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
