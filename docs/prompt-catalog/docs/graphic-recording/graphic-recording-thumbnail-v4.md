---
title: グラレコサムネイル v4 涼雅
description: 夏の涼と和の美学を取り入れた高品質なブログ記事サムネイル（16:9）を生成
category: docs
intent: graphic-recording-thumbnail
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
  - ナビゲーションバー
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# グラレコサムネイル v4 涼雅

## 想定用途

- ブログ記事やSNS投稿用の魅力的なサムネイル画像を作成したい
- 16:9アスペクト比のプロフェッショナルなサムネイルを生成したい
- ライト/ダークテーマ切り替え機能を持つサムネイルを作りたい

## プロンプト本文

```text
# 編集可能 グラレコサムネイルプロンプト v4 ～涼雅（りょうが）～

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**高品質なブログ記事サムネイル**を生成するためのものです。

**重要**: 編集可能ボタンとダークテーマ切り替えボタンは**ナビゲーションバー**に配置してください。

## 基本構成
### サムネイル作成時のプロンプト形式
```
[記事タイトル]のサムネイルをHTML/CSSで作成して
16:9のサイズ（1920x1080px）にして
Font Awesome アイコンを活用してインフォグラフィックな可読性と専門性を高めて
編集可能ボタンとダークテーマ切り替えボタンをナビゲーションバーに配置して
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
```

## デザイン仕様
### 1. カラーパレット定義（涼雅夏和パレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼
- Primary: #025E73（タイトル・重要背景）
- Secondary: #038C8C（アクセント・リンク）
- Accent: #04BFAD（ハイライト・装飾）
- Neon-Gold: #F2C166（ホバー・グローエフェクト）
- BG-Dark: #F2F2F2（基本背景）
- BG-Light: #FAFAFA（セクション背景）

#### ダークテーマ「夜涼（やりょう）」- 夏の夜
- Primary-Dark: #04BFAD（蛍の光）
- Secondary-Dark: #F2C166（星の光）
- Accent-Dark: #038C8C（夜の海面）
- Neon-Dark: #66D9EF（月光）
- BG-Dark-Dark: #0A1A1F（深い夜の海）
- BG-Light-Dark: #1A2F35（夜霧）

### 3. ナビゲーションバー（必須実装）
- 編集モードボタン：contentEditableでブラウザ上編集可能
- テーマ切り替えボタン：ライト/ダークテーマをワンクリックで切替
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
編集可能ボタンとダークテーマ切り替えボタンをナビゲーションバーに配置して
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
```

## 出力例

- 16:9アスペクト比のサムネイルHTML
- ナビゲーションバーに配置された編集・テーマ切り替えボタン
- 涼雅カラーパレットに基づいた美しいデザイン

## 注意点

- サムネイルとして使用する場合は、ブラウザで表示してスクリーンショット撮影
- 編集モードでテキストを調整可能
- テーマ切り替えでライト/ダークモードを切り替え可能

---

# Graphic Recording Thumbnail v4 Ryoga

## Intended Use

- Create attractive thumbnail images for blog articles and SNS posts
- Generate professional 16:9 aspect ratio thumbnails
- Create thumbnails with light/dark theme toggle feature

## Prompt Content

```text
# Editable Graphic Recording Thumbnail Prompt v4 ~Ryoga~

This prompt generates **high-quality blog article thumbnails** that sublimate **summer coolness and Japanese aesthetics** into modern form.

**Important**: Editable button and dark theme toggle button must be placed in the **navigation bar**.

## Basic Composition
### Thumbnail Creation Prompt Format
```
Create a thumbnail for [Article Title] in HTML/CSS
Size to 16:9 (1920x1080px)
Use Font Awesome icons to enhance infographic readability and professionalism
Place editable button and dark theme toggle button in navigation bar
Also use the following Ryoga colormap and fonts
```

## Design Specifications
### 1. Color Palette Definition (Ryoga Summer Harmony Palette + Yaryo Dark Theme)

#### Light Theme "Ryoga" - Summer Day
- Primary: #025E73 (Title, important background)
- Secondary: #038C8C (Accent, links)
- Accent: #04BFAD (Highlight, decoration)
- Neon-Gold: #F2C166 (Hover, glow effect)
- BG-Dark: #F2F2F2 (Base background)
- BG-Light: #FAFAFA (Section background)

#### Dark Theme "Yaryo" - Summer Night
- Primary-Dark: #04BFAD (Firefly light)
- Secondary-Dark: #F2C166 (Starlight)
- Accent-Dark: #038C8C (Night sea surface)
- Neon-Dark: #66D9EF (Moonlight)
- BG-Dark-Dark: #0A1A1F (Deep night sea)
- BG-Light-Dark: #1A2F35 (Night mist)

### 3. Navigation Bar (Required Implementation)
- Edit mode button: contentEditable for browser editing
- Theme toggle button: One-click light/dark theme switching
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
Place editable button and dark theme toggle button in navigation bar
Also use the following Ryoga colormap and fonts
```

## Output Example

- 16:9 aspect ratio thumbnail HTML
- Edit and theme toggle buttons placed in navigation bar
- Beautiful design based on Ryoga color palette

## Notes

- For thumbnail use, display in browser and take screenshot
- Text can be adjusted in edit mode
- Light/dark mode can be toggled with theme switching
