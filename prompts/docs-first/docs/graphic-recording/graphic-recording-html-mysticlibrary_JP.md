---
title: "グラレコHTML作成 V2 MysticLibrary"
description: "MysticLibraryカラーパレットを使用したグラフィックレコーディングHTML生成プロンプト"
canonical_id: "docs/graphic-recording/graphic-recording-html-mysticlibrary"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-mysticlibrary.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/graphic-recording-html-mysticlibrary.md. Edit docs/ instead. -->

# グラフィックレコーディング風インフォグラフィック変換プロンプト V2

## 目的
以下の内容を、超一流デザイナーが作成したような、日本語で完璧なグラフィックレコーディング風のHTMLインフォグラフィックに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。手書き風の図形やFont Awesomeアイコンを大きく活用して内容を視覚的かつ直感的に表現します。

## デザイン仕様
### 1. カラースキーム（MysticLibrary）
- MysticLibrary-1: #2E578C (青)
- MysticLibrary-2: #182D40 (濃紺)
- MysticLibrary-3: #BF807A (ピンクベージュ)
- MysticLibrary-4: #592A2A (茶色)
- MysticLibrary-5: #F2F2F2 (ライトグレー)

### 2. グラフィックレコーディング要素
- 左上から右へ、上から下へと情報を順次配置
- 日本語の手書き風フォントの使用（Yomogi, Zen Kurenaido, Kaisei Decol）
- 手描き風の囲み線、矢印、バナー、吹き出し
- テキストと視覚要素（Font Awesomeアイコン、シンプルな図形）の組み合わせ
- Font Awesomeアイコンは各セクションの内容を表現するものを大きく（2x〜3x）表示
- キーワードごとに関連するFont Awesomeアイコンを隣接配置

### 3. タイポグラフィ
- タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
- サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
- セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置
- 本文：14px、#334155、行間1.4
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

### 4. レイアウト
- ヘッダー：左揃えタイトル（大きなFont Awesomeアイコンを添える）＋右揃え日付/出典
- 3カラム構成：左側33%、中央33%、右側33%
- カード型コンポーネント：白背景、角丸12px、微細シャドウ
- セクション間の適切な余白と階層構造
- グラスモーフィズムを活用

## 変換する文章/記事
[ここにテキストを入力]
