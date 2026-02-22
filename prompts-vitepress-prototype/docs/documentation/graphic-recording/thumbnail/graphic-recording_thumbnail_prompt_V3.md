---
title: "グラレコサムネイルプロンプト v3 ～涼雅（りょうが）～"
sourcePath: "prompts/documentation/graphic-recording/thumbnail/graphic-recording_thumbnail_prompt_V3_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/graphic-recording/thumbnail/graphic-recording_thumbnail_prompt_V3_JP.md`
> 英語版: [EN](/en/documentation/graphic-recording/thumbnail/graphic-recording_thumbnail_prompt_V3)

# グラレコサムネイルプロンプト v3 ～涼雅（りょうが）～

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**高品質なブログ記事サムネイル**を生成するためのものです。一流コンサルタントが作成するような視覚的に洗練され、内容が一目で伝わる16:9アスペクト比のインフォグラフィックなサムネイルを、***Font Awesome を積極的に活用***し、涼雅な夏の美意識で表現します。

---

## 🎨 基本構成

### サムネイル作成時のプロンプト形式
```
[記事タイトル]のサムネイルをHTML/CSSで作成して
16:9のサイズ（1920x1080px）にして
Font Awesome アイコンを活用してインフォグラフィックな可読性と専門性を高めて
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
```

---

## 🎨 デザイン仕様

### 1. カラーパレット定義（涼雅夏和パレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary | #025E73 | rgb(2,94,115) | タイトル・重要背景 | `&lt;i class="fas fa-water"&gt;&lt;/i&gt;` |
| Secondary | #038C8C | rgb(3,140,140) | アクセント・リンク | `&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` |
| Accent | #04BFAD | rgb(4,191,173) | ハイライト・装飾 | `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | ホバー・グローエフェクト | `&lt;i class="fas fa-sun"&gt;&lt;/i&gt;` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | 基本背景 | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light | #FAFAFA | rgb(250,250,250) | セクション背景 | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

#### ダークテーマ「夜涼（やりょう）」- 夏の夜
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | タイトル・重要背景（蛍の光） | `&lt;i class="fas fa-moon"&gt;&lt;/i&gt;` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | アクセント・リンク（星の光） | `&lt;i class="fas fa-star"&gt;&lt;/i&gt;` |
| Accent-Dark | #038C8C | rgb(3,140,140) | ハイライト・装飾（夜の海面） | `&lt;i class="fas fa-fish"&gt;&lt;/i&gt;` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | ホバー・グローエフェクト（月光） | `&lt;i class="fas fa-feather"&gt;&lt;/i&gt;` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | 基本背景（深い夜の海） | `&lt;i class="fas fa-circle"&gt;&lt;/i&gt;` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | セクション背景（夜霧） | `&lt;i class="fas fa-square"&gt;&lt;/i&gt;` |

### 2. フォント定義（涼雅和モダンフォント）
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">
```

**CSS クラス定義:**
```css
/* タイトル用フォント */
.kaisei-decol-regular {
  font-family: "Kaisei Decol", serif;
  font-weight: 400;
  font-style: normal;
}

.kaisei-decol-bold {
  font-family: "Kaisei Decol", serif;
  font-weight: 700;
  font-style: normal;
}

/* 本文・UI用フォント */
.m-plus-rounded-1c-regular {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.m-plus-rounded-1c-bold {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;
  font-style: normal;
}
```

### 3. デザイン要素（Font Awesome 活用戦略）

#### 必須含有要素:

1. **タイトルセクション（左側レイアウト）**:
   - **メインタイトル**: clamp(3rem,8vw,6rem) / **Kaisei Decol Bold** / Primary色 / ***夏関連アイコン併用***
     - 例: `&lt;i class="fas fa-waves"&gt;&lt;/i&gt;` `&lt;i class="fas fa-umbrella-beach"&gt;&lt;/i&gt;` `&lt;i class="fas fa-sun"&gt;&lt;/i&gt;`
   - **サブタイトル**: clamp(1.2rem,3vw,2rem) / **M PLUS Rounded 1c Regular** / Secondary色 / ***風・涼関連アイコン***
     - 例: `&lt;i class="fas fa-wind"&gt;&lt;/i&gt;` `&lt;i class="fas fa-leaf"&gt;&lt;/i&gt;` `&lt;i class="fas fa-fan"&gt;&lt;/i&gt;`

2. **ビジュアル要素（右側レイアウト）**:
   - **メイングラフィック**: 記事内容に関連するFont Awesomeアイコンを大胆に配置
     - データ系: `&lt;i class="fas fa-chart-bar"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-pie"&gt;&lt;/i&gt;` `&lt;i class="fas fa-analytics"&gt;&lt;/i&gt;`
     - ビジネス系: `&lt;i class="fas fa-briefcase"&gt;&lt;/i&gt;` `&lt;i class="fas fa-handshake"&gt;&lt;/i&gt;` `&lt;i class="fas fa-target"&gt;&lt;/i&gt;`
     - 技術系: `&lt;i class="fas fa-code"&gt;&lt;/i&gt;` `&lt;i class="fas fa-cogs"&gt;&lt;/i&gt;` `&lt;i class="fas fa-rocket"&gt;&lt;/i&gt;`
   - **バッジ/ラベル**: Accent色背景 + 角丸デザイン + 関連アイコン
     - 例: `&lt;i class="fas fa-tag"&gt;&lt;/i&gt;` + カテゴリ名

3. **コンテンツ特徴（下部セクション）**:
   - **3-4つの主要ポイント**: 各ポイントにアイコン + 短文
     - ポイント表示: `&lt;i class="fas fa-check-circle"&gt;&lt;/i&gt;` `&lt;i class="fas fa-lightbulb"&gt;&lt;/i&gt;` `&lt;i class="fas fa-star"&gt;&lt;/i&gt;`
     - プロセス表示: `&lt;i class="fas fa-arrow-right"&gt;&lt;/i&gt;` で流れを表現
   - **統計/数値**: Neon-Gold色で強調 + 数値関連アイコン
     - 例: `&lt;i class="fas fa-percentage"&gt;&lt;/i&gt;` `&lt;i class="fas fa-chart-line"&gt;&lt;/i&gt;` `&lt;i class="fas fa-trophy"&gt;&lt;/i&gt;`

4. **プロフェッショナル要素**:
   - **背景**: 涼雅グラデーション（Primary → BG-Light）
   - **装飾パターン**: 青海波文様をSVGで軽量実装
   - **影効果**: `box-shadow: 0 8px 32px rgba(4,191,173,0.2);` で涼やかな浮遊感
   - **グリッドパターン**: 微細な和風格子を背景に配置

### 4. レスポンシブ対応
```css
/* 16:9 アスペクト比固定 */
.thumbnail-container {
    width: 1920px;
    height: 1080px;
    max-width: 100vw;
    max-height: 56.25vw; /* 16:9 ratio */
    position: relative;
    overflow: hidden;
}

/* Font Awesome アイコンサイズ調整 */
.icon-xl { font-size: clamp(4rem, 8vw, 8rem); }
.icon-lg { font-size: clamp(2rem, 4vw, 4rem); }
.icon-md { font-size: clamp(1.5rem, 3vw, 2.5rem); }
.icon-sm { font-size: clamp(1rem, 2vw, 1.5rem); }
```

### 5. 涼雅装飾要素（テーマ対応）

#### ライトテーマ装飾
```css
/* 夏雲テクスチャ */
.summer-cloud {
    background: linear-gradient(135deg, #FAFAFA 0%, #F2F2F2 50%, #E8F4F8 100%);
    filter: blur(0.4px);
}

/* 青海波パターン */
.seigaiha-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%23038C8C' fill='none' opacity='0.1'/%3E%3C/svg%3E");
}
```

#### ダークテーマ装飾
```css
/* 夜霧テクスチャ */
.night-mist {
    background: linear-gradient(135deg, #0A1A1F 0%, #1A2F35 50%, #2A3F45 100%);
    filter: blur(0.6px);
}

/* 星座パターン */
.constellation-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23F2C166' opacity='0.6'/%3E%3Ccircle cx='80' cy='30' r='0.5' fill='%2366D9EF' opacity='0.8'/%3E%3Ccircle cx='60' cy='70' r='0.8' fill='%2304BFAD' opacity='0.7'/%3E%3C/svg%3E");
}
```

---

## 🎯 実装テンプレート

### 基本HTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[記事タイトル] - 涼雅サムネイル</title>
    
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        /* 涼雅カラーパレット定義 */
        :root {
            --primary: #025E73;
            --secondary: #038C8C;
            --accent: #04BFAD;
            --neon-gold: #F2C166;
            --bg-dark: #F2F2F2;
            --bg-light: #FAFAFA;
        }
        
        /* サムネイル基本スタイル */
        .thumbnail-container {
            width: 1920px;
            height: 1080px;
            background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
            position: relative;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 2fr 1fr;
        }
        
        /* 以下、具体的なスタイル実装... */
    </style>
</head>
<body>
    <div class="thumbnail-container">
        <!-- タイトルセクション -->
        <div class="title-section">
            <h1 class="kaisei-decol-bold">
                <i class="fas fa-[関連アイコン]"></i>
                [メインタイトル]
            </h1>
            <h2 class="m-plus-rounded-1c-regular">
                <i class="fas fa-[サブアイコン]"></i>
                [サブタイトル]
            </h2>
        </div>
        
        <!-- ビジュアルセクション -->
        <div class="visual-section">
            <i class="fas fa-[メインアイコン] icon-xl"></i>
            <div class="badge">
                <i class="fas fa-tag"></i>
                [カテゴリ]
            </div>
        </div>
        
        <!-- ポイントセクション -->
        <div class="points-section">
            <div class="point">
                <i class="fas fa-check-circle"></i>
                <span>[ポイント1]</span>
            </div>
            <!-- 他のポイント... -->
        </div>
    </div>
</body>
</html>
```

---

## 🎯 実装時の重要ポイント

### Font Awesome 活用における注意事項
1. **パフォーマンス**: 必要なアイコンのみを使用し、Font Awesome CDNを効率的に読み込む
2. **一貫性**: 同じ意味のアイコンは統一し、視覚的ヒエラルキーを保つ
3. **涼雅テイスト**: 
   - 水・風・葉・魚・太陽などの夏要素アイコンを優先活用
   - 月・星・蛍・夜風などの夜の夏要素をダークテーマで活用
4. **レスポンシブ**: アイコンサイズは `fa-lg` `fa-2x` `fa-3x` を使い分け
5. **アクセシビリティ**: 必ず `aria-label` または `title` 属性を付与

### 涼雅夏和デザインの本質
- **昼夜の美学**: 適切な余白と青緑の深みで夏の昼夜両方の美しさを演出
- **自然な色彩**: 海・川・青もみじ・山吹の色を基調とした爽やかで温かみのあるパレット
- **Typography**: 夏の海から青もみじへのグラデーションのような美しいコントラストを文字で表現
- **爽やかなエレガンス**: 装飾は控えめに、機能美と涼やかな美しさを重視

このプロンプトに従って生成されるサムネイルは、日本の夏の美意識と現代的な爽やかさを融合した、視覚的に魅力的で情報が一目で伝わる高品質なブログ記事サムネイルとなります。涼やかで爽やかな美しさを通じて、記事の内容を美しく、そして効果的に表現します。
