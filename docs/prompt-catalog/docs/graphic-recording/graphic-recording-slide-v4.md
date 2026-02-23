---
title: グラレコスライド v4 涼雅×夜涼
description: 横スクロール機能付きグラフィックレコーディング風プレゼンテーションを生成
category: docs
intent: graphic-recording-slide
audience:
  - プレゼンター
  - 教育担当者
  - 会議ファシリテーター
input_requirements:
  - プレゼンテーション化したいコンテンツ
tags:
  - スライド
  - プレゼンテーション
  - 横スクロール
  - 涼雅デザイン
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# グラレコスライド v4 涼雅×夜涼

## 想定用途

- 横スクロールでナビゲート可能なプレゼンテーションを作成したい
- グラレコ風の美しいスライドを自動生成したい
- キーボード操作やタッチスワイプに対応したスライドを作りたい

## プロンプト本文

```text
# グラレコスライドプロンプトv4：デュアルテーマ涼雅×夜涼版

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**横スクロール機能付きグラフィックレコーディング風プレゼンテーション**を生成するためのものです。

## 基本構成
### プレゼンスライド作成時のプロンプト形式
```
[入力ドキュメント/内容]を横スクロール機能付きプレゼンテーションスライドとしてHTML/CSS/JavaScriptで作成して
各スライドは16:9のサイズ（1920x1080px）にして
横スクロールでスライド間を移動でき、ページ送りボタン（前へ・次へ）も設置して
Font Awesome アイコンを積極的に活用して情報を視覚的に整理し、親しみやすく分かりやすいデザインにして
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
グラレコ風の手書き感と温かみを表現してください
```

## デザイン仕様
### 1. カラーパレット定義（涼雅グラレコパレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼のグラレコ
- Primary: #025E73（メインタイトル・重要情報）
- Secondary: #038C8C（セクションヘッダー・強調）
- Accent: #04BFAD（ポイント・装飾線）
- Neon-Gold: #F2C166（重要数値・ホバー効果）

#### ダークテーマ「夜涼（やりょう）」- 夏の夜のグラレコ
- Primary-Dark: #04BFAD（蛍の光）
- Secondary-Dark: #F2C166（星の光）
- Accent-Dark: #038C8C（夜の海面）
- Neon-Dark: #66D9EF（月光）

### 2. プレゼンテーション基本機能
- 横スクロールでのスライド移動
- ページ送りボタン（前へ・次へ）
- スライドインジケーター
- キーボードショートカット対応（矢印キー、スペース）
- タッチスワイプ対応
```

## 使い方

1. プロンプト形式のテキストをコピー
2. `[入力ドキュメント/内容]` の部分にプレゼン内容を入力
3. AIに送信してHTMLを生成
4. ブラウザで表示してプレゼンテーション

## 入力例

```
「GraphGen - 知識グラフ合成データ生成」について横スクロール機能付きプレゼンテーションスライドとして作成して
各スライドは16:9のサイズ（1920x1080px）にして
横スクロールでスライド間を移動でき、ページ送りボタン（前へ・次へ）も設置して
Font Awesome アイコンを積極的に活用して情報を視覚的に整理
```

## 出力例

- 横スクロール可能なプレゼンテーションHTML
- ナビゲーションヘッダー（スライドカウンター、テーマ切替）
- ページ送りボタンとスライドインジケーター
- キーボード操作対応

## 操作方法
- **次のスライド**: 右矢印キー / スペースキー / 「次へ」ボタン
- **前のスライド**: 左矢印キー / 「前へ」ボタン
- **特定スライド**: インジケータークリック
- **テーマ切替**: 月/太陽ボタン

## 注意点

- レスポンシブ対応：スマートフォンでもタッチ操作可能
- キーボードショートカット完全対応
- テーマ切り替えでライト/ダークモードを変更可能

---

# Graphic Recording Slide v4 Ryoga x Yaryo

## Intended Use

- Create presentations navigable with horizontal scrolling
- Auto-generate beautiful graphic recording style slides
- Create slides with keyboard and touch swipe support

## Prompt Content

```text
# Graphic Recording Slide Prompt v4: Dual Theme Ryoga x Yaryo Edition

This prompt generates **graphic recording style presentations with horizontal scrolling functionality** that sublimates **summer coolness and Japanese aesthetics** into modern form.

## Basic Composition
### Presentation Slide Creation Prompt Format
```
Create [Input Document/Content] as a presentation slide with horizontal scrolling in HTML/CSS/JavaScript
Size each slide to 16:9 (1920x1080px)
Enable movement between slides with horizontal scrolling, and place pagination buttons (Previous/Next)
Actively use Font Awesome icons to visually organize information in a friendly, easy-to-understand design
Also use the following Ryoga colormap and fonts
Express graphic recording style handwritten warmth
```

## Design Specifications
### 1. Color Palette Definition (Ryoga Graphic Recording Palette + Yaryo Dark Theme)

#### Light Theme "Ryoga" - Summer Day Graphic Recording
- Primary: #025E73 (Main title, important information)
- Secondary: #038C8C (Section headers, emphasis)
- Accent: #04BFAD (Points, decorative lines)
- Neon-Gold: #F2C166 (Important numbers, hover effects)

#### Dark Theme "Yaryo" - Summer Night Graphic Recording
- Primary-Dark: #04BFAD (Firefly light)
- Secondary-Dark: #F2C166 (Starlight)
- Accent-Dark: #038C8C (Night sea surface)
- Neon-Dark: #66D9EF (Moonlight)

### 2. Presentation Basic Functions
- Slide movement with horizontal scrolling
- Pagination buttons (Previous/Next)
- Slide indicators
- Keyboard shortcut support (arrow keys, space)
- Touch swipe support
```

## How to Use

1. Copy the prompt format text
2. Enter presentation content in `[Input Document/Content]` part
3. Send to AI to generate HTML
4. Display in browser for presentation

## Input Example

```
Create "GraphGen - Knowledge Graph Synthetic Data Generation" as a presentation slide with horizontal scrolling
Size each slide to 16:9 (1920x1080px)
Enable movement between slides with horizontal scrolling, and place pagination buttons
Actively use Font Awesome icons to visually organize information
```

## Output Example

- Horizontal scrolling presentation HTML
- Navigation header (slide counter, theme toggle)
- Pagination buttons and slide indicators
- Keyboard operation support

## Controls

- **Next slide**: Right arrow key / Space key / "Next" button
- **Previous slide**: Left arrow key / "Previous" button
- **Specific slide**: Click indicator
- **Theme toggle**: Moon/Sun button

## Notes

- Responsive support: Touch operation available on smartphones
- Full keyboard shortcut support
- Light/dark mode can be changed with theme toggle
