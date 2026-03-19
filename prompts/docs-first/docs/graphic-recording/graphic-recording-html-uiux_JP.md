---
title: "グラレコHTML作成 V3 UI/UX"
description: "UI/UXカラーパレットを使用したグラフィックレコーディングHTML生成プロンプト"
canonical_id: "docs/graphic-recording/graphic-recording-html-uiux"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-uiux.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-uiux.md. Edit docs/ instead. -->

# グラフィックレコーディング風インフォグラフィック変換プロンプト V3

## 目的
以下の内容を、Font Awesomeアイコンを最大限に活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換してください。手書きイラストの代わりにFont Awesomeアイコンで概念を視覚的に表現します。

## デザイン仕様
### 1. カラースキーム（UI/UX）
- UI/UX-1: #1B6C8C (ブルー)
- UI/UX-2: #BF8136 (オレンジ)
- UI/UX-3: #F2E8E4 (ベージュ)
- UI/UX-4: #260101 (ダークレッド)
- UI/UX-5: #BF5656 (レッド)

### 2. グラフィックレコーディング要素
- 全体を白背景（#FFF8F5）のキャンバス上に配置
- 中央に大きなテーマ/タイトルを配置（アイコン付き）
- 内容を複数のセクションに分け、手書き風の吹き出しや丸枠で囲む
- Font Awesomeアイコンをキーワードごとに大きく配置（fa-2x〜fa-3x）
- 関連する概念をつなぐ矢印や線

### 3. タイポグラフィ
- タイトル：28px、#333333、太字、関連アイコン付き
- サブタイトル：18px、#555555
- キーワード：16px、#333333、太字、背景色付き
- 本文：14px、#333333、行間1.4
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

### 4. レイアウト
- 全体：フレキシブルレイアウト、スマホでも見やすく
- ヘッダー：タイトル（大きいFont Awesomeアイコン付き）＋日付
- コンテンツ：左から右、上から下へと自然な流れで配置
- セクション：丸みを帯びた角のカード（border-radius: 15px）
- 4カラム構成

### 5. アニメーション効果
- Font Awesomeアイコンに連動するアニメーション（fa-beat, fa-bounce, fa-fade等）
- 重要キーワード出現時のハイライト効果
- 接続線や矢印の流れるようなアニメーション

## アイコン活用ガイドライン
- 概念別の推奨アイコン：
  - 恋愛・愛：fa-heart, fa-heart-crack, fa-kiss
  - 人間関係：fa-people-arrows, fa-handshake, fa-users
  - 感情：fa-face-smile, fa-face-sad-tear, fa-face-angry
  - 質問：fa-circle-question, fa-question, fa-magnifying-glass
  - 時間・プロセス：fa-clock, fa-hourglass, fa-calendar
  - コミュニケーション：fa-comments, fa-message, fa-comment-dots
  - 思考・アイデア：fa-brain, fa-lightbulb, fa-thought-bubble

## 変換する文章/記事
[ここにテキストを入力]
