---
title: "編集可能グラフィックレコーディングプロンプト v2.1 ～藍雅（あいみやび）～"
sourcePath: "prompts/documentation/graphic-recording/docs/editable-graficrecord-v2.1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/graphic-recording/docs/editable-graficrecord-v2.1_JP.md`
> 英語版: [EN](/en/documentation/graphic-recording/docs/editable-graficrecord-v2.1)

# 編集可能グラフィックレコーディングプロンプト v2.1 ～藍雅（あいみやび）～

このプロンプトは、**藍染めの美学**を現代に昇華させた**日本語編集可能インフォグラフィック HTML**を自動生成するための包括的な要件定義です。***Font Awesome を積極的に活用***し、伝統的な藍の深さと現代的な洗練さが調和した、視覚的に美しく直感的に操作できるグラフィックレコーディングツールを作成します。

---

## 🎨 デザイン仕様

### 1. カラースキーム（藍雅エレガントパレット）
| 名称 | HEX | 主要用途 | Font Awesome アイコン例 |
|------|-----|---------|---------------------|
| Primary | #1B365D | タイトル・重要背景 | `&lt;i class="fas fa-waves"&gt;&lt;/i&gt;` |
| Secondary | #2E5984 | アクセント・リンク | `&lt;i class="fas fa-moon"&gt;&lt;/i&gt;` |
| Accent | #5A8FC8 | ハイライト・装飾 | `&lt;i class="fas fa-snowflake"&gt;&lt;/i&gt;` |
| Neon-Silver | #B8D4E3 | ホバー・グローエフェクト | `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` |
| BG-Dark | #FAFBFC | 基本背景 | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light | #F4F7FA | セクション背景 | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

*背景は雲母調の淡いブルーグレー（BG-Dark）、本文は深い藍色（#1B2951）、補助テキストは上品な藍鼠色（#3A5F7D）を使用。上記6色をCSS変数で定義し、グラデーション（Primary→Secondary）を多用して藍の奥深さと静謐な美しさを演出。*

### 2. タイポグラフィ & Font Awesome 活用方針
- **和フォント**: `Kaisei Decol` (日本語見出し・重要テキスト) / `M PLUS Rounded 1c` (本文・UI要素) / `Bebas Neue` (英数字・強調数字)
- **タイトル (h1)**: clamp(4rem,10vw,8rem) / 400 / **Kaisei Decol** / 藍雅グラデーション / ***`&lt;i class="fas fa-water"&gt;&lt;/i&gt;` `&lt;i class="fas fa-mountain"&gt;&lt;/i&gt;` などの自然アイコンを併用***
- **サブタイトル (h2)**: clamp(2.5rem,6vw,4rem) / 400 / **Kaisei Decol** / ***`&lt;i class="fas fa-cloud"&gt;&lt;/i&gt;` `&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` などでセクション区切りを表現***
- **見出し (h3)**: clamp(1.8rem,4vw,2.5rem) / 400 / **Kaisei Decol** / ***`&lt;i class="fas fa-snowflake"&gt;&lt;/i&gt;` `&lt;i class="fas fa-gem"&gt;&lt;/i&gt;` でカテゴリ識別***
- **本文・UI要素**: 16px / 400 / **M PLUS Rounded 1c** / 読みやすさと上品さを重視
- **Font Awesome 統合戦略**:
  - 📊 データ表示: `&lt;i class="fas fa-chart-bar"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-pie"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-line"&gt;&lt;/i&gt;`
  - 🎯 重要ポイント: `&lt;i class="fas fa-bullseye"&gt;&lt;/i&gt;` `&lt;i class="fas fa-exclamation-triangle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-lightbulb"&gt;&lt;/i&gt;`
  - 📝 編集機能: `&lt;i class="fas fa-edit"&gt;&lt;/i&gt;` `&lt;i class="fas fa-save"&gt;&lt;/i&gt;` `&lt;i class="fas fa-undo"&gt;&lt;/i&gt;`
  - 🔄 プロセス: `&lt;i class="fas fa-arrow-right"&gt;&lt;/i&gt;` `&lt;i class="fas fa-sync-alt"&gt;&lt;/i&gt;` `&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;`
  - 👥 人物・組織: `&lt;i class="fas fa-user"&gt;&lt;/i&gt;` `&lt;i class="fas fa-users"&gt;&lt;/i&gt;` `&lt;i class="fas fa-building"&gt;&lt;/i&gt;`

### 3. レイアウト & Font Awesome 配置戦略
1. **ヘッダー**: 
   - 左: `&lt;i class="fas fa-scroll"&gt;&lt;/i&gt;` + タイトル
   - 右: `&lt;i class="fas fa-calendar-alt"&gt;&lt;/i&gt;` + 日付 / `&lt;i class="fas fa-link"&gt;&lt;/i&gt;` + 出典
2. **2カラム構成**: 左50% / 右50%
3. **カード要素**:
   - 和紙調背景 + 角丸16px + エレガントシャドウ
   - カード上部に関連Font Awesomeアイコンを大きく配置
   - `&lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-question-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-cog"&gt;&lt;/i&gt;` など
4. **セクション区切り**: `&lt;i class="fas fa-minus"&gt;&lt;/i&gt;` を3つ並べて藍の装飾線として活用
5. **ナビゲーション**: `&lt;i class="fas fa-chevron-up"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;` で直感的操作

### 4. 藍雅装飾要素
- **背景パターン**: 青海波文様をSVGで軽量実装
- **アクセント**: `&lt;i class="fas fa-yin-yang"&gt;&lt;/i&gt;` `&lt;i class="fas fa-snowflake"&gt;&lt;/i&gt;` を控えめに配置
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
- レスポンシブ対応: `&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;`

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
