---
title: "編集可能グラフィックレコーディング v2.1 ～藍雅～"
description: "藍染めの美学を現代に昇華させた日本語編集可能インフォグラフィック HTML生成プロンプト"
canonical_id: "docs/graphic-recording/editable-graphic-recording-v2-1"
canonical_doc: "docs/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2-1.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/graphic-recording/editable-graphic-recording-v2-1.md. Edit docs/ instead. -->

# 編集可能グラフィックレコーディングプロンプト v2.1 ～藍雅（あいみやび）～

このプロンプトは、**藍染めの美学**を現代に昇華させた**日本語編集可能インフォグラフィック HTML**を自動生成するための包括的な要件定義です。***Font Awesome を積極的に活用***し、伝統的な藍の深さと現代的な洗練さが調和した、視覚的に美しく直感的に操作できるグラフィックレコーディングツールを作成します。

## 🎨 デザイン仕様

### 1. カラースキーム（藍雅エレガントパレット）
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary | #1B365D | タイトル・重要背景 | `<i class="fas fa-waves"></i>` |
| Secondary | #2E5984 | アクセント・リンク | `<i class="fas fa-moon"></i>` |
| Accent | #5A8FC8 | ハイライト・装飾 | `<i class="fas fa-snowflake"></i>` |
| Neon-Silver | #B8D4E3 | ホバー・グローエフェクト | `<i class="fas fa-star"></i>` |
| BG-Dark | #FAFBFC | 基本背景 | `<i class="fas fa-circle"></i>` |
| BG-Light | #F4F7FA | セクション背景 | `<i class="fas fa-square"></i>` |

*背景は雲母調の淡いブルーグレー（BG-Dark）、本文は深い藍色（#1B2951）、補助テキストは上品な藍鼠色（#3A5F7D）を使用。上記6色をCSS変数で定義し、グラデーション（Primary→Secondary）を多用して藍の奥深さと静謐な美しさを演出。*

### 2. タイポグラフィ & Font Awesome 活用方針
- **和フォント**: `Kaisei Decol` (日本語見出し・重要テキスト) / `M PLUS Rounded 1c` (本文・UI要素) / `Bebas Neue` (英数字・強調数字)
- **タイトル (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / 藍雅グラデーション / ***`<i class="fas fa-water"></i>` `<i class="fas fa-mountain"></i>` などの自然アイコンを併用***
- **サブタイトル (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***`<i class="fas fa-cloud"></i>` `<i class="fas fa-wind"></i>` などでセクション区切りを表現***
- **見出し (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***`<i class="fas fa-snowflake"></i>` `<i class="fas fa-gem"></i>` でカテゴリ識別***
- **本文・UI要素**: 16px / 400 / **M PLUS Rounded 1c** / 読みやすさと上品さを重視
- **Font Awesome 統合戦略**:
  - 📊 データ表示: `<i class="fas fa-chart-bar"></i>` `<i class="fas fa-chart-pie"></i>` `<i class="fas fa-chart-line"></i>`
  - 🎯 重要ポイント: `<i class="fas fa-bullseye"></i>` `<i class="fas fa-exclamation-triangle"></i>` `<i class="fas fa-lightbulb"></i>`
  - 📝 編集機能: `<i class="fas fa-edit"></i>` `<i class="fas fa-save"></i>` `<i class="fas fa-undo"></i>`
  - 🔄 プロセス: `<i class="fas fa-arrow-right"></i>` `<i class="fas fa-sync-alt"></i>` `<i class="fas fa-check-circle"></i>`
  - 👥 人物・組織: `<i class="fas fa-user"></i>` `<i class="fas fa-users"></i>` `<i class="fas fa-building"></i>`

### 3. レイアウト & Font Awesome 配置戦略
1. **ヘッダー**:
   - 左: `<i class="fas fa-scroll"></i>` + タイトル
   - 右: `<i class="fas fa-calendar-alt"></i>` + 日付 / `<i class="fas fa-link"></i>` + 出典
2. **2カラム構成**: 左50% / 右50%
3. **カード要素**:
   - 和紙調背景 + 角丸16px + エレガントシャドウ
   - カード上部に関連Font Awesomeアイコンを大きく配置
   - `<i class="fas fa-info-circle"></i>` `<i class="fas fa-question-circle"></i>` `<i class="fas fa-cog"></i>` など
4. **セクション区切り**: `<i class="fas fa-minus"></i>` を3つ並べて藍の装飾線として活用
5. **ナビゲーション**: `<i class="fas fa-chevron-up"></i>` `<i class="fas fa-chevron-down"></i>` で直感的操作

### 4. 藍雅装飾要素
- **背景パターン**: 青海波文様をSVGで軽量実装
- **アクセント**: `<i class="fas fa-yin-yang"></i>` `<i class="fas fa-snowflake"></i>` を控えめに配置
- **グラスモーフィズム**: 重要データ強調時に水面の透明感を演出
- **微細アニメーション**: 雪の結晶が舞うような上品で静謐な動き

---

## ⚙️ 技術仕様

### 1. 基本構造
- **HTML/CSS/JavaScript 単一ファイル**（外部依存: Google Fonts [Kaisei Decol + M PLUS Rounded 1c] + Font Awesome CDN）
- **必須フォント設定**:
