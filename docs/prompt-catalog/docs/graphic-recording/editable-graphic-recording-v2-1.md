---
title: 編集可能グラフィックレコーディング v2.1 ～藍雅～
description: 藍染めの美学を現代に昇華させた日本語編集可能インフォグラフィック HTML生成プロンプト
category: docs
intent: editable-graphic-recording-v2-1
audience:
  - グラフィックレコーダー
  - プレゼンテーション作成者
  - コンテンツクリエイター
input_requirements:
  - グラレコ化したい文章
tags:
  - グラフィックレコーディング
  - 編集可能
  - 藍雅デザイン
  - インフォグラフィック
  - HTML
  - Font Awesome
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# 編集可能グラフィックレコーディング v2.1 ～藍雅～

## 想定用途

- 藍染めの美学を現代に昇華させた編集可能グラフィックレコーディング
- Font Awesome を活用した視覚的な表現
- 伝統と現代が調和した上品なグラレコ

## プロンプト本文

```text
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
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
```
- **CSSクラス定義**:
```css
.kaisei-decol-regular {
  font-family: "Kaisei Decol", serif;
  font-weight: 400;
  font-style: normal;
}

.m-plus-rounded-1c-regular {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  font-style: normal;
}
```
- 画面比率: 16:9 または 4:3
- レスポンシブ対応: `<meta name="viewport" content="width=device-width, initial-scale=1">`

### 2. 編集モードボタン（必須実装）
```html
<button id="toggleEdit" style="position:fixed;top:15px;right:15px;z-index:9999;background:var(--primary-color);color:white;border:none;padding:12px 18px;border-radius:12px;cursor:pointer;box-shadow:0 4px 12px rgba(27,54,93,0.3);" class="m-plus-rounded-1c-regular">
    <i class="fas fa-edit"></i> 編集モード
</button>

<script>
const btn = document.getElementById('toggleEdit');
let editing = false;
btn.onclick = () => {
    editing = !editing;
    document.body.contentEditable = editing;
    document.designMode = editing ? 'on' : 'off';
    btn.innerHTML = editing ?
        '<i class="fas fa-save"></i> 終了(保存: ファイル → 名前を付けてページを保存)' :
        '<i class="fas fa-edit"></i> 編集モード';
    btn.style.background = editing ? 'var(--neon-silver)' : 'var(--primary-color)';
    btn.style.color = editing ? 'var(--primary-color)' : 'white';
};
</script>
```

### 3. Font Awesome アイコン活用コード例
```html
<!-- セクションヘッダー例 -->
<h2 class="kaisei-decol-regular"><i class="fas fa-water" style="color:var(--primary-color);margin-right:10px;"></i>デザイン仕様</h2>

<!-- データ表示カード例 -->
<div class="data-card">
    <div class="card-header">
        <i class="fas fa-chart-pie fa-2x" style="color:var(--accent-color);"></i>
        <h3 class="kaisei-decol-regular">統計データ</h3>
    </div>
    <div class="card-content m-plus-rounded-1c-regular">
        <p><i class="fas fa-arrow-up" style="color:var(--secondary-color);"></i> 前年比120%向上</p>
    </div>
</div>

<!-- プロセスフロー例 */
<div class="process-flow">
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-play-circle fa-2x"></i>
        <span>開始</span>
    </div>
    <i class="fas fa-arrow-right fa-2x" style="color:var(--secondary-color);"></i>
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-cogs fa-2x"></i>
        <span>処理</span>
    </div>
    <i class="fas fa-arrow-right fa-2x" style="color:var(--secondary-color);"></i>
    <div class="step m-plus-rounded-1c-regular">
        <i class="fas fa-check-circle fa-2x"></i>
        <span>完了</span>
    </div>
</div>
```

### 4. 背景装飾（推奨実装）
- **和紙テクスチャ**: CSS `filter: blur(0.3px)` で上品な質感演出
- **青海波パターン**: SVGで実装、`pointer-events:none;`
- **雪の結晶アニメーション**: CSS `@keyframes` で優雅で静謐な舞い散り効果

### 5. アクセシビリティ & ユーザビリティ
- **Font Awesome アイコン**: 必ず `aria-label` または `title` 属性を付与
- **カラーコントラスト**: WCAG 2.1 AA基準準拠（藍色ベースでも高いコントラスト確保）
- **キーボードナビゲーション**: Tab順序を論理的に設定
- **スクリーンリーダー対応**: セマンティックHTML + 適切なARIA属性

---

## 🎯 実装時の重要ポイント

### Font Awesome 活用における注意事項
1. **パフォーマンス**: 必要なアイコンのみを使用し、Font Awesome CDNを効率的に読み込む
2. **一貫性**: 同じ意味のアイコンは統一し、視覚的ヒエラルキーを保つ
3. **藍雅テイスト**: 水・空・雪などの自然要素アイコンを積極活用し、藍の美学と調和
4. **レスポンシブ**: アイコンサイズは `fa-lg` `fa-2x` `fa-3x` を使い分け
5. **アニメーション**: `fa-spin` `fa-pulse` は控えめに使用し、静謐な美しさを保持

### 藍雅エレガントデザインの本質
- **静寂の美学**: 適切な余白と藍の深みで心の静寂を演出
- **自然な色彩**: 水・空・雪の色を基調とした清涼で上品なパレット
- **Typography**: 藍染めの濃淡のような美しいコントラストを文字で表現
- **洗練されたシンプルさ**: 装飾は控えめに、機能美と静謐な美しさを重視

このプロンプトに従って生成されるHTMLは、日本の伝統的な藍の美意識と現代的なエレガンスを融合した、編集可能な高品質グラフィックレコーディングツールとなります。静謐で上品な藍雅の世界観を通じて、情報を美しく、そして心地よく表現します。

## グラレコ化したい文章

---

```

## 使い方

1. プロンプトを AI に入力
2. グラレコ化したい文章を追加
3. 編集可能な HTML が生成される

## 入力例

```
[グラレコ化したい会議内容]
```

## 出力例

```html
<!-- 編集可能な藍雅デザインのグラフィックレコーディング HTML -->
<button id="toggleEdit">
  <i class="fas fa-edit"></i> 編集モード
</button>
<script>
  // 編集モード切替え機能
</script>
```

## 注意点

- 藍雅デザインの統一感を維持
- Font Awesome アイコンを効果的に配置
- 編集機能を確実に実装
- 青海波文様などの和装飾を適切に使用
