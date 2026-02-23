---
title: グラレコHTML作成 V2 MysticLibrary
description: MysticLibraryカラーパレットを使用したグラフィックレコーディングHTML生成プロンプト
category: docs
intent: graphic-recording-html-mysticlibrary
audience:
  - ファシリテーター
  - プレゼンター
  - コンテンツ作成者
input_requirements:
  - グラレコ化したいテキストコンテンツ
tags:
  - グラフィックレコーディング
  - インフォグラフィック
  - HTML生成
  - MysticLibrary
  - Font Awesome
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# グラレコHTML作成 V2 MysticLibrary

## 想定用途

- MysticLibraryカラーパレット（ブルー系）を使用したグラレコを作成したい
- プロフェッショナルで落ち着いた印象のインフォグラフィックを生成したい
- 3カラム構成で情報を整理したい

## プロンプト本文

```text
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
```

## 使い方

1. プロンプトをコピーしてAIチャットツールに貼り付け
2. グラレコ化したいテキストを入力
3. 生成されたHTMLをブラウザで表示・保存

## 入力例

```
## 変換する文章/記事
MysticLibraryプロジェクトの概要について説明します。
1. 目的: 知識の共有と活用
2. 機能: 検索、タグ付け、関連付け
3. 将来: AI機能の追加
```

## 出力例

MysticLibraryカラーパレット（ブルー系）を使用した、3カラム構成のプロフェッショナルなグラレコHTMLが生成されます。

## 注意点

- 落ち着いたブルー系の配色でまとめられています
- 3カラム構成で情報が整理されています
- グラスモーフィズム効果でモダンな印象になります
