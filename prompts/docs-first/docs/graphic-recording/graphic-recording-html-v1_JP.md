---
title: "グラレコHTML作成 V1 トラベルブルーカラーパレット"
description: "トラベルブルーカラーパレットを使用した基本的なグラフィックレコーディングHTML生成プロンプト"
canonical_id: "docs/graphic-recording/graphic-recording-html-v1"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-v1.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-v1.md. Edit docs/ instead. -->

# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V1

以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは
グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。文字だけの議事録と比べて直感的に伝わりやすく、視覚的な記録は情報の記憶に残りやすいという特徴があります。

## 基本要件
- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンを大きく使用
- カードは使用しても枠は使用せず、背景になじむようにする
- 手書き風の吹き出しを CSS で表現
- レスポンシブデザイン
- 5カラム構成にして

## タイポグラフィ
- タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
- サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
- セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置し、アイコンにはアニメーション効果
- 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンを小さく添える
- フォント指定：Kaisei Decol, Yomogi, Zen Kurenaido

## カラーパレット（トラベルブルー）
