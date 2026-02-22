---
title: "編集可能グラフィックレコーディングプロンプト v3.0 ～涼雅（りょうが）～"
sourcePath: "prompts/documentation/graphic-recording/docs/editable-graficrecord-v3.0_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/graphic-recording/docs/editable-graficrecord-v3.0_JP.md`
> 英語版: [EN](/en/documentation/graphic-recording/docs/editable-graficrecord-v3.0)

# 編集可能グラフィックレコーディングプロンプト v3.0 ～涼雅（りょうが）～

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**日本語編集可能インフォグラフィック HTML**を自動生成するための包括的な要件定義です。***Font Awesome を積極的に活用***し、夏の海風と青もみじの清涼感、山吹色の温かみが調和した、視覚的に涼やかで直感的に操作できるグラフィックレコーディングツールを作成します。

---

## 🎨 デザイン仕様

### 1. カラースキーム（涼雅夏和パレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary | #025E73 | タイトル・重要背景 | `&lt;i class="fas fa-water"&gt;&lt;/i&gt;` |
| Secondary | #038C8C | アクセント・リンク | `&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` |
| Accent | #04BFAD | ハイライト・装飾 | `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` |
| Neon-Gold | #F2C166 | ホバー・グローエフェクト | `&lt;i class="fas fa-sun"&gt;&lt;/i&gt;` |
| BG-Dark | #F2F2F2 | 基本背景 | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light | #FAFAFA | セクション背景 | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

#### ダークテーマ「夜涼（やりょう）」- 夏の夜
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary-Dark | #04BFAD | タイトル・重要背景（蛍の光） | `&lt;i class="fas fa-moon"&gt;&lt;/i&gt;` |
| Secondary-Dark | #F2C166 | アクセント・リンク（星の光） | `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` |
| Accent-Dark | #038C8C | ハイライト・装飾（夜の海面） | `&lt;i class="fas fa-fish"&gt;&lt;/i&gt;` |
| Neon-Dark | #66D9EF | ホバー・グローエフェクト（月光） | `&lt;i class="fas fa-moon"&gt;&lt;/i&gt;` |
| BG-Dark-Dark | #0A1A1F | 基本背景（深い夜の海） | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light-Dark | #1A2F35 | セクション背景（夜霧） | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

*ライトテーマは夏雲調の淡いグレー背景に深い海色の文字。ダークテーマは深い夜の海背景に蛍や星の光のような明るい文字。両テーマ共にCSS変数で定義し、グラデーションを多用して夏の昼夜の美しい移ろいを演出。*

### 2. タイポグラフィ & Font Awesome 活用方針
- **和フォント**: `Kaisei Decol` (日本語見出し・重要テキスト) / `M PLUS Rounded 1c` (本文・UI要素) / `Bebas Neue` (英数字・強調数字)
- **タイトル (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / 涼雅グラデーション / ***`&lt;i class="fas fa-waves"&gt;&lt;/i&gt;` `&lt;i class="fas fa-umbrella-beach"&gt;&lt;/i&gt;` などの夏アイコンを併用***
- **サブタイトル (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***`&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` `&lt;i class="fas fa-fan"&gt;&lt;/i&gt;` などでセクション区切りを表現***
- **見出し (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***`&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` `&lt;i class="fas fa-fish"&gt;&lt;/i&gt;` でカテゴリ識別***
- **本文・UI要素**: 16px / 400 / **M PLUS Rounded 1c** / 読みやすさと涼やかさを重視
- **Font Awesome 統合戦略**:
  - 📊 データ表示: `&lt;i class="fas fa-chart-bar"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-pie"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-line"&gt;&lt;/i&gt;`
  - 🎯 重要ポイント: `&lt;i class="fas fa-bullseye"&gt;&lt;/i&gt;` `&lt;i class="fas fa-lightbulb"&gt;&lt;/i&gt;` `&lt;i class="fas fa-star"&gt;&lt;/i&gt;`
  - 📝 編集機能: `&lt;i class="fas fa-edit"&gt;&lt;/i&gt;` `&lt;i class="fas fa-save"&gt;&lt;/i&gt;` `&lt;i class="fas fa-undo"&gt;&lt;/i&gt;`
  - 🔄 プロセス: `&lt;i class="fas fa-arrow-right"&gt;&lt;/i&gt;` `&lt;i class="fas fa-sync-alt"&gt;&lt;/i&gt;` `&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;`
  - 🌊 夏の要素: `&lt;i class="fas fa-swimming-pool"&gt;&lt;/i&gt;` `&lt;i class="fas fa-cocktail"&gt;&lt;/i&gt;` `&lt;i class="fas fa-palm-tree"&gt;&lt;/i&gt;`
  - 🎐 和の夏要素: `&lt;i class="fas fa-bell"&gt;&lt;/i&gt;` `&lt;i class="fas fa-feather"&gt;&lt;/i&gt;` `&lt;i class="fas fa-seedling"&gt;&lt;/i&gt;`

### 3. レイアウト & Font Awesome 配置戦略
1. **ヘッダー**: 
   - 左: `&lt;i class="fas fa-scroll"&gt;&lt;/i&gt;` + タイトル
   - 右: `&lt;i class="fas fa-calendar-alt"&gt;&lt;/i&gt;` + 日付 / `&lt;i class="fas fa-link"&gt;&lt;/i&gt;` + 出典
2. **2カラム構成**: 左50% / 右50%
3. **カード要素**:
   - 夏雲調背景 + 角丸18px + 涼やかシャドウ
   - カード上部に関連Font Awesomeアイコンを大きく配置
   - `&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-question-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-cog"&gt;&lt;/i&gt;` など
4. **セクション区切り**: `&lt;i class="fas fa-minus"&gt;&lt;/i&gt;` を3つ並べて涼風の装飾線として活用
5. **ナビゲーション**: `&lt;i class="fas fa-chevron-up"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;` で直感的操作

### 4. 涼雅装飾要素
- **背景パターン**: 青海波文様と風紋をSVGで軽量実装
- **アクセント**: `&lt;i class="fas fa-fish"&gt;&lt;/i&gt;` `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` `&lt;i class="fas fa-feather"&gt;&lt;/i&gt;` を控えめに配置
- **グラスモーフィズム**: 重要データ強調時に夏の水面の透明感と涼やかさを演出
- **微細アニメーション**: 蛍や風鈴のような涼やかで幻想的な動き

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
- **CSS変数定義（ライト/ダークテーマ対応）**:
```css
:root {
  /* ライトテーマ「涼雅」デフォルト */
  --primary-color: #025E73;
  --secondary-color: #038C8C;
  --accent-color: #04BFAD;
  --neon-gold: #F2C166;
  --bg-dark: #F2F2F2;
  --bg-light: #FAFAFA;
  --text-primary: #024A5C;
  --text-secondary: #026B73;
  
  /* テーマ切り替え用の共通変数 */
  --current-primary: var(--primary-color);
  --current-secondary: var(--secondary-color);
  --current-accent: var(--accent-color);
  --current-neon: var(--neon-gold);
  --current-bg-dark: var(--bg-dark);
  --current-bg-light: var(--bg-light);
  --current-text-primary: var(--text-primary);
  --current-text-secondary: var(--text-secondary);
}

/* ダークテーマ「夜涼」 */
[data-theme="dark"] {
  --current-primary: #04BFAD;
  --current-secondary: #F2C166;
  --current-accent: #038C8C;
  --current-neon: #66D9EF;
  --current-bg-dark: #0A1A1F;
  --current-bg-light: #1A2F35;
  --current-text-primary: #E8F4F8;
  --current-text-secondary: #B8D4E3;
}

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
- レスポンシブ対応: `&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;`

### 2. 編集モード & テーマ切り替えボタン（必須実装）
```html
<!-- 編集モードボタン -->
<button id="toggleEdit" style="position:fixed;top:15px;right:15px;z-index:9999;background:var(--current-primary);color:white;border:none;padding:12px 20px;border-radius:15px;cursor:pointer;box-shadow:0 4px 12px rgba(2,94,115,0.3);transition:all 0.3s ease;" class="m-plus-rounded-1c-regular">
    <i class="fas fa-edit"></i> 編集モード
</button>

<!-- テーマ切り替えボタン -->
<button id="themeToggle" style="position:fixed;top:15px;right:180px;z-index:9999;background:var(--current-accent);color:white;border:none;padding:12px 20px;border-radius:15px;cursor:pointer;box-shadow:0 4px 12px rgba(4,191,173,0.3);transition:all 0.3s ease;" class="m-plus-rounded-1c-regular">
    <i class="fas fa-sun"></i> 夜涼
</button>

<script>
// 編集モード
const editBtn = document.getElementById('toggleEdit');
let editing = false;
editBtn.onclick = () => {
    editing = !editing;
    document.body.contentEditable = editing;
    document.designMode = editing ? 'on' : 'off';
    editBtn.innerHTML = editing ? 
        '<i class="fas fa-save"></i> 終了(保存: ファイル → 名前を付けてページを保存)' : 
        '<i class="fas fa-edit"></i> 編集モード';
    editBtn.style.background = editing ? 'var(--current-neon)' : 'var(--current-primary)';
    editBtn.style.color = editing ? 'var(--current-primary)' : 'white';
};

// テーマ切り替え
const themeBtn = document.getElementById('themeToggle');
let isDark = false;

// 初期テーマ設定
document.documentElement.setAttribute('data-theme', 'light');

themeBtn.onclick = () => {
    isDark = !isDark;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    // ボタンのアイコンとテキストを更新
    themeBtn.innerHTML = isDark ? 
        '<i class="fas fa-moon"></i> 涼雅' : 
        '<i class="fas fa-sun"></i> 夜涼';
    
    // ボタンの背景色を現在のテーマに合わせて更新
    setTimeout(() => {
        themeBtn.style.background = 'var(--current-accent)';
        editBtn.style.background = editing ? 'var(--current-neon)' : 'var(--current-primary)';
    }, 50);
};

// 全体の背景とテキスト色をテーマに応じて更新
document.body.style.background = 'var(--current-bg-dark)';
document.body.style.color = 'var(--current-text-primary)';
</script>
```

### 3. Font Awesome アイコン活用コード例（テーマ対応）
```html
<!-- 夏のセクションヘッダー例（自動テーマ対応） -->
<h2 class="kaisei-decol-regular" style="color:var(--current-primary);"><i class="fas fa-waves" style="color:var(--current-accent);margin-right:12px;"></i>デザイン仕様</h2>

<!-- 涼やかデータ表示カード例（テーマ自動切り替え） -->
<div class="data-card" style="background:linear-gradient(135deg, var(--current-bg-light), var(--current-bg-dark));border-radius:18px;padding:24px;box-shadow:0 6px 20px rgba(4,191,173,0.1);border:1px solid var(--current-accent);">
    <div class="card-header" style="display:flex;align-items:center;margin-bottom:16px;">
        <i class="fas fa-chart-pie fa-2x" style="color:var(--current-accent);margin-right:12px;"></i>
        <h3 class="kaisei-decol-regular" style="color:var(--current-primary);">統計データ</h3>
    </div>
    <div class="card-content m-plus-rounded-1c-regular" style="color:var(--current-text-primary);">
        <p><i class="fas fa-arrow-up" style="color:var(--current-secondary);margin-right:8px;"></i> 前年比120%向上</p>
        <p><i class="fas fa-sun" style="color:var(--current-neon);margin-right:8px;"></i> 夏季好調</p>
    </div>
</div>

<!-- 涼風プロセスフロー例（テーマ対応） */
<div class="process-flow" style="display:flex;align-items:center;justify-content:space-between;padding:20px;background:var(--current-bg-light);border-radius:12px;">
    <div class="step" style="text-align:center;">
        <i class="fas fa-play-circle fa-3x" style="color:var(--current-primary);margin-bottom:8px;"></i>
        <p class="m-plus-rounded-1c-regular" style="color:var(--current-text-primary);">開始</p>
    </div>
    <i class="fas fa-wind fa-2x" style="color:var(--current-accent);"></i>
    <div class="step" style="text-align:center;">
        <i class="fas fa-cogs fa-3x" style="color:var(--current-secondary);margin-bottom:8px;"></i>
        <p class="m-plus-rounded-1c-regular" style="color:var(--current-text-primary);">処理</p>
    </div>
    <i class="fas fa-wind fa-2x" style="color:var(--current-accent);"></i>
    <div class="step" style="text-align:center;">
        <i class="fas fa-check-circle fa-3x" style="color:var(--current-neon);margin-bottom:8px;"></i>
        <p class="m-plus-rounded-1c-regular" style="color:var(--current-text-primary);">完了</p>
    </div>
</div>

<!-- ダークテーマ専用の夜の要素例 -->
<div class="night-elements" style="display:none;">
    <i class="fas fa-moon" style="color:var(--current-neon);"></i> 月光
    <i class="fas fa-star" style="color:var(--current-secondary);"></i> 星座
    <i class="fas fa-bug" style="color:var(--current-accent);"></i> 蛍
</div>

<style>
/* ダークテーマ時の特別なスタイル */
[data-theme="dark"] .night-elements {
    display: inline-block !important;
}

[data-theme="dark"] body {
    background: linear-gradient(135deg, var(--current-bg-dark), var(--current-bg-light));
}

/* ライトテーマ時の昼の要素 */
[data-theme="light"] .day-elements {
    display: inline-block;
}

[data-theme="light"] body {
    background: linear-gradient(135deg, var(--current-bg-light), var(--current-bg-dark));
}
</style>
```

### 4. 背景装飾（テーマ対応推奨実装）
#### ライトテーマ「涼雅」装飾
- **夏雲テクスチャ**: CSS `filter: blur(0.4px)` で涼やかな質感演出
- **青海波＋風紋パターン**: SVGで実装、`pointer-events:none;`
- **風鈴アニメーション**: CSS `@keyframes` で夏の涼風を表現

#### ダークテーマ「夜涼」装飾  
- **夜霧テクスチャ**: CSS `filter: blur(0.6px)` で幻想的な質感演出
- **星座＋月光パターン**: SVGで実装、`pointer-events:none;`
- **蛍光アニメーション**: CSS `@keyframes` で夏の夜の蛍のような幻想的な光の舞い

```css
/* テーマ対応背景装飾 */
[data-theme="light"] .background-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%23038C8C' fill='none' opacity='0.1'/%3E%3C/svg%3E");
}

[data-theme="dark"] .background-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23F2C166' opacity='0.6'/%3E%3Ccircle cx='80' cy='30' r='0.5' fill='%2366D9EF' opacity='0.8'/%3E%3Ccircle cx='60' cy='70' r='0.8' fill='%2304BFAD' opacity='0.7'/%3E%3C/svg%3E");
}

/* テーマ切り替えアニメーション */
* {
    transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}
```

### 5. アクセシビリティ & ユーザビリティ
- **Font Awesome アイコン**: 必ず `aria-label` または `title` 属性を付与
- **カラーコントラスト**: WCAG 2.1 AA基準準拠（深い海色ベースで高いコントラスト確保）
- **キーボードナビゲーション**: Tab順序を論理的に設定
- **スクリーンリーダー対応**: セマンティックHTML + 適切なARIA属性

---

## 🎯 実装時の重要ポイント

### Font Awesome & テーマ切り替え活用における注意事項
1. **パフォーマンス**: 必要なアイコンのみを使用し、Font Awesome CDNを効率的に読み込む
2. **一貫性**: 同じ意味のアイコンは統一し、視覚的ヒエラルキーを保つ
3. **涼雅テイスト**: 
   - ライト: 水・風・葉・魚・太陽などの昼の夏要素アイコンを活用
   - ダーク: 月・星・蛍・夜風などの夜の夏要素アイコンを活用
4. **レスポンシブ**: アイコンサイズは `fa-lg` `fa-2x` `fa-3x` を使い分け
5. **テーマ切り替え**: 
   - すべての色指定に`var(--current-*)`変数を使用
   - `transition`プロパティで滑らかなテーマ切り替えを実現
   - ダークテーマでのコントラスト確保を重視
6. **アニメーション**: `fa-spin` `fa-pulse` は控えめに使用し、テーマに応じた美しさを保持

### 涼雅夏和デザインの本質
- **昼夜の美学**: 適切な余白と青緑の深みで夏の昼夜両方の美しさを演出
- **自然な色彩**: 
  - 昼: 海・川・青もみじ・山吹の色を基調とした爽やかで温かみのあるパレット
  - 夜: 夜の海・星空・蛍・月光の色を基調とした幻想的で涼やかなパレット
- **Typography**: 夏の海から青もみじ、そして夜の星空へのグラデーションのような美しいコントラストを文字で表現
- **テーマ切り替えの滑らかさ**: 昼から夜への移ろいを自然に表現する滑らかなトランジション
- **爽やかなエレガンス**: 装飾は控えめに、機能美と涼やかな美しさを重視

このプロンプトに従って生成されるHTMLは、日本の夏の美意識と現代的な爽やかさを融合した、編集可能な高品質グラフィックレコーディングツールとなります。**ライトテーマ「涼雅」**では昼の夏の爽やかさを、**ダークテーマ「夜涼」**では夜の夏の幻想的な美しさを表現し、ワンクリックでテーマを切り替えることで、時間帯や気分に応じた最適な表示環境を提供します。涼やかで爽やかな昼夜の美しさを通じて、情報を美しく、そして心地よく表現します。

## グラレコ化したい文章

---
