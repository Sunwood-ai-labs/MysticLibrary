---
title: "グラレコ風インフォグラフィック V6 - 水テーマ"
description: "水の流れのような柔軟性と動きを持つ洗練されたグラフィックレコーディング風HTMLインフォグラフィックを生成"
canonical_id: "docs/graphic-recording/graphic-recording-water-v6"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/graphic-recording-water-v6.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/graphic-recording-water-v6.md. Edit docs/ instead. -->

# グラフィックレコーディング風インフォグラフィック変換プロンプト V6 - 水

## 目的
以下の内容を、**大きなFont Awesomeアイコン**、**多様な手書き風吹き出し**、そして**水をテーマにした洗練されたアニメーション**を活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換します。

## デザイン仕様
### 1. 拡張カラースキーム
- Water-1: #007cb7
- Water-2: #83b4b6
- Water-3: #e6eceb
- Water-4: #006793
- Water-5: #00abc5
- Water-Accent-1: #39d2e3
- Water-Accent-2: #004d71
- Water-Highlight: #ebf7f9

### 2. 洗練されたグラフィックレコーディング要素
- 全体を複雑なグラデーション背景に配置
- **各カードに1つの特大サイズのテーマアイコン**を配置（fa-5x〜fa-7x）
- **カード内のコンテンツはアイコン付き階層リスト形式**
- **複数バリエーションの手書き風吹き出し**（リップル効果付き）
- セクションを水面に浮かぶカード形式で整理

### 3. 洗練されたタイポグラフィ
- タイトル：36-42px、特大関連アイコン付き（fa-6x以上）
- カードタイトル：24-28px、大きめアイコン付き（fa-5x）
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&family=JetBrains+Mono:wght@300;400;500&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

### 4. 動的レイアウト（水テーマ高度版）
- 全体：**レスポンシブグリッドレイアウト**（4カラム構成）
- 各カード：水面から浮上するアニメーション
- セクション間の関係性：SVGパスによる波型のコネクタライン

## 変換するコンテンツ
[ここにテキストを入力]
