---
title: "編集可能グラレコ v3.0 涼雅"
description: "夏の涼と和の美学を現代に昇華させた編集可能な日本語インフォグラフィックHTMLを生成するプロンプト"
canonical_id: "docs/graphic-recording/editable-graphic-recording-v3"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v3.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v3.md. Edit docs/ instead. -->

# 編集可能グラフィックレコーディングプロンプト v3.0 ～涼雅（りょうが）～

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**日本語編集可能インフォグラフィック HTML**を自動生成するための包括的な要件定義です。***Font Awesome を積極的に活用***し、夏の海風と青もみじの清涼感、山吹色の温かみが調和した、視覚的に涼やかで直感的に操作できるグラフィックレコーディングツールを作成します。

## 🎨 デザイン仕様

### 1. カラースキーム（涼雅夏和パレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary | #025E73 | タイトル・重要背景 | `<i class="fas fa-water"></i>` |
| Secondary | #038C8C | アクセント・リンク | `<i class="fas fa-wind"></i>` |
| Accent | #04BFAD | ハイライト・装飾 | `<i class="fas fa-leaf"></i>` |
| Neon-Gold | #F2C166 | ホバー・グローエフェクト | `<i class="fas fa-sun"></i>` |
| BG-Dark | #F2F2F2 | 基本背景 | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | セクション背景 | `<i class="fas fa-square"></i>` |

#### ダークテーマ「夜涼（やりょう）」- 夏の夜
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary-Dark | #04BFAD | タイトル・重要背景（蛍の光） | `<i class="fas fa-moon"></i>` |
| Secondary-Dark | #F2C166 | アクセント・リンク（星の光） | `<i class="fas fa-star"></i>` |
| Accent-Dark | #038C8C | ハイライト・装飾（夜の海面） | `<i class="fas fa-fish"></i>` |
| Neon-Dark | #66D9EF | ホバー・グローエフェクト（月光） | `<i class="fas fa-moon"></i>` |
| BG-Dark-Dark | #0A1A1F | 基本背景（深い夜の海） | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | セクション背景（夜霧） | `<i class="fas fa-square"></i>` |

*ライトテーマは夏雲調の淡いグレー背景に深い海色の文字。ダークテーマは深い夜の海背景に蛍や星の光のような明るい文字。両テーマ共にCSS変数で定義し、グラデーションを多用して夏の昼夜の美しい移ろいを演出。*

### 2. タイポグラフィ & Font Awesome 活用方針
- **和フォント**: `Kaisei Decol` (日本語見出し・重要テキスト) / `M PLUS Rounded 1c` (本文・UI要素) / `Bebas Neue` (英数字・強調数字)
- **タイトル (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / 涼雅グラデーション / ***`<i class="fas fa-waves"></i>` `<i class="fas fa-umbrella-beach"></i>` などの夏アイコンを併用***
- **サブタイトル (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***`<i class="fas fa-wind"></i>` `<i class="fas fa-fan"></i>` などでセクション区切りを表現***
- **見出し (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***`<i class="fas fa-leaf"></i>` `<i class="fas fa-fish"></i>` でカテゴリ識別***
- **本文・UI要素**: 16px / 400 / **M PLUS Rounded 1c** / 読みやすさと涼やかさを重視
- **Font Awesome 統合戦略**:
  - 📊 データ表示: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-chart-line"></i>`
  - 🎯 重要ポイント: `<i class="fas fa-bullseye"></i>` `<i class="fas fa-lightbulb"></i>` `<i class="fas fa-star"></i>`
  - 📝 編集機能: `<i class="fas fa-edit"></i>` `<i class="fas fa-save"></i>` `<i class="fas fa-undo"></i>`
  - 🔄 プロセス: `<i class="fas fa-arrow-right"></i>` `<i class="fas fa-sync-alt"></i>` `<i class="fas fa-check-circle"></i>`
  - 🌊 夏の要素: `<i class="fas fa-swimming-pool"></i>` `<i class="fas fa-cocktail"></i>` `<i class="fas fa-palm-tree"></i>`
  - 🎐 和の夏要素: `<i class="fas fa-bell"></i>` `<i class="fas fa-feather"></i>` `<i class="fas fa-seedling"></i>`

### 3. レイアウト & Font Awesome 配置戦略
1. **ヘッダー**:
   - 左: `<i class="fas fa-scroll"></i>` + タイトル
   - 右: `<i class="fas fa-calendar-alt"></i>` + 日付 / `<i class="fas fa-link"></i>` + 出典
2. **2カラム構成**: 左50% / 右50%
3. **カード要素**:
   - 夏雲調背景 + 角丸18px + 涼やかシャドウ
   - カード上部に関連Font Awesomeアイコンを大きく配置
   - `<i class="fas fa-info-circle"></i>` `<i class="fas fa-question-circle"></i>` `<i class="fas fa-cog"></i>` など
4. **セクション区切り**: `<i class="fas fa-minus"></i>` を3つ並べて涼風の装飾線として活用
5. **ナビゲーション**: `<i class="fas fa-chevron-up"></i>` `<i class="fas fa-chevron-down"></i>` で直感的操作

### 4. 涼雅装飾要素
- **背景パターン**: 青海波文様と風紋をSVGで軽量実装
- **アクセント**: `<i class="fas fa-fish"></i>` `<i class="fas fa-leaf"></i>` `<i class="fas fa-feather"></i>` を控えめに配置
- **グラスモーフィズム**: 重要データ強調時に夏の水面の透明感と涼やかさを演出
- **微細アニメーション**: 蛍や風鈴のような涼やかで幻想的な動き

---

## ⚙️ 技術仕様

### 1. 基本構造
- **HTML/CSS/JavaScript 単一ファイル**（外部依存: Google Fonts [Kaisei Decol + M PLUS Rounded 1c] + Font Awesome CDN）
- **必須フォント設定**:
