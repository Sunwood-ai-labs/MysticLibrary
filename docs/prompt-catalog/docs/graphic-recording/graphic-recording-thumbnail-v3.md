---
title: グラレコサムネ v3 涼雅（簡易版）
description: 涼雅カラーパレットを使用したシンプルなブログ記事サムネイル生成プロンプト（編集機能なし）
category: docs
intent: graphic-recording-thumbnail-ryoga-simple
audience:
  - ブログ運営者
  - コンテンツクリエイター
  - SNS運用者
input_requirements:
  - サムネイル化したい記事のタイトルと内容
tags:
  - サムネイル
  - 16:9
  - 涼雅デザイン
  - シンプル版
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
canonical_id: "docs/graphic-recording/graphic-recording-thumbnail-v3"
prompt_source: "prompts/docs-first/docs/graphic-recording/graphic-recording-thumbnail-v3_JP.md"
---

# グラレコサムネ v3 涼雅（簡易版）

## 想定用途

- 涼雅カラーパレットのサムネイルを簡単に作成したい
- 編集機能のないシンプルなHTMLでサムネイルを生成したい
- ライト/ダークテーマの涼雅デザインを使用したい

## プロンプト本文

```text
# グラレコサムネイルプロンプト v3 ～涼雅（りょうが）～

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**高品質なブログ記事サムネイル**を生成するためのものです。一流コンサルタントが作成するような視覚的に洗練され、内容が一目で伝わる16:9アスペクト比のインフォグラフィックなサムネイルを、***Font Awesome を積極的に活用***し、涼雅な夏の美意識で表現します。

## 🎨 基本構成

### サムネイル作成時のプロンプト形式
```
[記事タイトル]のサムネイルをHTML/CSSで作成して
16:9のサイズ（1920x1080px）にして
Font Awesome アイコンを活用してインフォグラフィックな可読性と専門性を高めて
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
```

## 🎨 デザイン仕様

### 1. カラーパレット定義（涼雅夏和パレット）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary | #025E73 | rgb(2,94,115) | タイトル・重要背景 | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | rgb(3,140,140) | アクセント・リンク | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | rgb(4,191,173) | ハイライト・装飾 | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | ホバー・グローエフェクト | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | 基本背景 | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | rgb(250,250,250) | セクション背景 | `<i class="fas fa-square"></i>` |

#### ダークテーマ「夜涼（やりょう）」- 夏の夜
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | タイトル・重要背景（蛍の光） | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | アクセント・リンク（星の光） | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | rgb(3,140,140) | ハイライト・装飾（夜の海面） | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | ホバー・グローエフェクト（月光） | `<i class="fas fa-feather"></i>` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | 基本背景（深い夜の海） | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | セクション背景（夜霧） | `<i class="fas fa-square"></i>` |
```

## 使い方

1. プロンプト形式のテキストをコピー
2. `[記事タイトル]` の部分に実際のタイトルを入力
3. AIに送信してHTMLを生成
4. ブラウザで表示してスクリーンショット

## 入力例

```
「AI時代のプログラミング学習方法」のサムネイルをHTML/CSSで作成して
16:9のサイズ（1920x1080px）にして
Font Awesome アイコンを活用してインフォグラフィックな可読性と専門性を高めて
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
```

## 出力例

- 16:9アスペクト比のサムネイルHTML
- 涼雅カラーパレットに基づいた美しいデザイン
- ライト/ダークテーマの2パターン

## 注意点

- サムネイルとして使用する場合は、ブラウザで表示してスクリーンショット撮影
- V4と異なり編集機能はありません
- シンプルな構造で素早く生成できます

---

# Graphic Recording Thumbnail v3 Ryoga (Simple)

## Intended Use

- Create simple thumbnails with Ryoga color palette
- Generate thumbnails with simple HTML without editing features
- Use light/dark theme Ryoga design

## Prompt Content

```text
# Graphic Recording Thumbnail Prompt v3 ~Ryoga~

This prompt generates **high-quality blog article thumbnails** that sublimate **summer coolness and Japanese aesthetics** into modern form. Create visually sophisticated 16:9 aspect ratio infographics that convey content at a glance, actively using ***Font Awesome icons***, with Ryoga's summer aesthetic consciousness.

## Basic Composition

### Thumbnail Creation Prompt Format
```
Create a thumbnail for [Article Title] in HTML/CSS
Size to 16:9 (1920x1080px)
Use Font Awesome icons to enhance infographic readability and professionalism
Also use the following Ryoga colormap and fonts
```

## Design Specifications

### 1. Color Palette Definition (Ryoga Summer Harmony Palette)

#### Light Theme "Ryoga" - Summer Day
| Name | HEX | RGB | Main Usage | Font Awesome Icon Example |
|------|-----|-----|------------|---------------------------|
| Primary | #025E73 | rgb(2,94,115) | Title, important background | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | rgb(3,140,140) | Accent, links | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | rgb(4,191,173) | Highlight, decoration | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | Hover, glow effect | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | Base background | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | rgb(250,250,250) | Section background | `<i class="fas fa-square"></i>` |

#### Dark Theme "Yaryo" - Summer Night
| Name | HEX | RGB | Main Usage | Font Awesome Icon Example |
|------|-----|-----|------------|---------------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | Title, important background (firefly light) | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | Accent, links (starlight) | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | rgb(3,140,140) | Highlight, decoration (night sea surface) | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | Hover, glow effect (moonlight) | `<i class="fas fa-feather"></i>` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | Base background (deep night sea) | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | Section background (night mist) | `<i class="fas fa-square"></i>` |
```

## How to Use

1. Copy the prompt format text
2. Enter actual title in `[Article Title]` part
3. Send to AI to generate HTML
4. Display in browser and take screenshot

## Input Example

```
Create a thumbnail for "Programming Learning Methods in the AI Era" in HTML/CSS
Size to 16:9 (1920x1080px)
Use Font Awesome icons to enhance infographic readability and professionalism
Also use the following Ryoga colormap and fonts
```

## Output Example

- 16:9 aspect ratio thumbnail HTML
- Beautiful design based on Ryoga color palette
- Light/dark theme 2 patterns

## Notes

- For thumbnail use, display in browser and take screenshot
- Unlike V4, no editing features
- Quick generation with simple structure
