---
title: "グラレコHTML作成 V3"
description: "手書き風フォントとFont Awesomeアイコンを使用したグラフィックレコーディングHTMLを生成するプロンプト"
canonical_id: "docs/graphic-recording/graphic-recording-html-v3"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-v3.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-v3.md. Edit docs/ instead. -->

# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V3

以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは
グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。

## 基本要件
- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンや絵文字を使用
- カードは背景を透明にし、枠は使用せず、背景になじむようにする
- 手書き風の吹き出しを CSS で表現（背景は薄い透明度に）
- レスポンシブデザイン
- 5カラム構成（コンテナ幅は2000px）
- カード間の間隔を広くとる（40px程度）
- グリッドのギャップは30px

## タイポグラフィ
- タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
- サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
- セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置
- 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンや絵文字を小さく添える
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

## カラーパレット
