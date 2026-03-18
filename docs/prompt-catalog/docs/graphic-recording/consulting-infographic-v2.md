---
title: グラレコ風インフォグラフィック V2 ファッションカラー3カラム
description: ファッションカラーパレットを使用した3カラム構成のグラフィックレコーディング風インフォグラフィックHTML生成プロンプト
category: docs
intent: graphic-recording-infographic-fashion-3col
audience:
  - コンサルタント
  - プレゼンター
  - ビジネス文書作成者
input_requirements:
  - インフォグラフィック化したいテキストコンテンツ
tags:
  - グラフィックレコーディング
  - インフォグラフィック
  - HTML生成
  - ファッションカラー
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
canonical_id: "docs/graphic-recording/consulting-infographic-v2"
prompt_source: "prompts/docs-first/docs/graphic-recording/consulting-infographic-v2_JP.md"
---

# グラレコ風インフォグラフィック V2 ファッションカラー3カラム

## 想定用途

- ファッションカラーパレットの3カラム構成でインフォグラフィックを作成したい
- 左上から右下へ情報を流れるレイアウトで整理したい
- 絵文字やアイコンを効果的に配置したグラレコ風表現をしたい

## プロンプト本文

```text
# グラフィックレコーディング風インフォグラフィック変換プロンプト

## 目的
以下の内容を、超一流デザイナーが作成したような、日本語で完璧なグラフィックレコーディング風のHTMLインフォグラフィックに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。手書き風の図形やアイコンを活用して内容を視覚的に表現します。

## デザイン仕様
### 1. カラースキーム（ファッション）
```
<palette>
<color name='ファッション-1' rgb='593C47' r='89' g='59' b='70' />
<color name='ファッション-2' rgb='F2E63D' r='242' g='230' b='60' />
<color name='ファッション-3' rgb='F2C53D' r='242' g='196' b='60' />
<color name='ファッション-4' rgb='F25C05' r='242' g='91' b='4' />
<color name='ファッション-5' rgb='F24405' r='242' g='68' b='4' />
</palette>
```

### 2. グラフィックレコーディング要素
- 左上から右へ、上から下へと情報を順次配置
- 日本語の手書き風フォントの使用（Yomogi, Zen Kurenaido, Kaisei Decol）
- 手描き風の囲み線、矢印、バナー、吹き出し
- テキストと視覚要素（アイコン、シンプルな図形）の組み合わせ
- キーワードの強調（色付き下線、マーカー効果）
- 関連する概念を線や矢印で接続
- 絵文字やアイコンを効果的に配置（✏️📌📝🔍📊など）

### 3. タイポグラフィ
- タイトル：32px、グラデーション効果、太字
- サブタイトル：16px、#475569
- セクション見出し：18px、#1e40af、アイコン付き
- 本文：14px、#334155、行間1.4
- フォント指定：Kaisei Decol, Yomogi, Zen Kurenaido

### 4. レイアウト
- ヘッダー：左揃えタイトル＋右揃え日付/出典
- 3カラム構成：左側33%、中央33%、右側33%
- カード型コンポーネント：白背景、角丸12px、微細シャドウ
- セクション間の適切な余白と階層構造
- 適切にグラスモーフィズムを活用
- コンテンツの横幅は100%にして

## グラフィックレコーディング表現技法
- テキストと視覚要素のバランスを重視
- キーワードを囲み線や色で強調
- 簡易的なアイコンや図形で概念を視覚化
- 数値データは簡潔なグラフや図表で表現
- 接続線や矢印で情報間の関係性を明示
- 余白を効果的に活用して視認性を確保

---

## 変換する文章/記事
[ここにインフォグラフィック化したいテキストコンテンツを入力]
```

## 使い方

1. プロンプトをコピーしてAIチャットツールに貼り付け
2. 変換する文章/記事部分にインフォグラフィック化したいテキストを入力
3. 生成されたHTMLをブラウザで表示・保存

## 入力例

```
## 変換する文章/記事
### プロジェクト成功の3要素
1. 明確な目標設定
2. 適切なリソース配分
3. 定期的な進捗確認
```

## 出力例

ファッションカラーパレット（紫#593C47、ピンク#F2E63D、オレンジ#F25C05、#F24405）を使用した、3カラム構成のグラレコ風インフォグラフィックHTMLが生成されます。

## 注意点

- 3カラム均等割り付けで情報が配置されます
- 左上から右下へ情報が流れるレイアウトです
- 絵文字が効果的に配置され視覚的なアクセントになります

---

# Graphic Recording Style Infographic V2 Fashion Colors 3-Column

## Intended Use

- Create infographic with 3-column layout using fashion color palette
- Organize information flowing from top-left to bottom-right
- Graphic recording style expression with effective placement of emojis and icons

## Prompt Content

```text
# Graphic Recording Style Infographic Conversion Prompt

## Purpose
Convert the following content into a perfect Japanese graphic recording style HTML infographic that looks like it was created by a top-tier designer. Aim for the highest standards in both information design and visual design. Visually express content using handwritten-style shapes and icons.

## Design Specifications
### 1. Color Scheme (Fashion)
```
<palette>
<color name='Fashion-1' rgb='593C47' r='89' g='59' b='70' />
<color name='Fashion-2' rgb='F2E63D' r='242' g='230' b='60' />
<color name='Fashion-3' rgb='F2C53D' r='242' g='196' b='60' />
<color name='Fashion-4' rgb='F25C05' r='242' g='91' b='4' />
<color name='Fashion-5' rgb='F24405' r='242' g='68' b='4' />
</palette>
```

### 2. Graphic Recording Elements
- Arrange information sequentially from top-left to right, top to bottom
- Use Japanese handwritten fonts (Yomogi, Zen Kurenaido, Kaisei Decol)
- Hand-drawn style borders, arrows, banners, speech bubbles
- Combination of text and visual elements (icons, simple shapes)
- Emphasize keywords (colored underlines, marker effects)
- Connect related concepts with lines and arrows
- Effectively place emojis and icons (✏️📌📝🔍📊 etc.)

### 3. Typography
- Title: 32px, gradient effect, bold
- Subtitle: 16px, #475569
- Section heading: 18px, #1e40af, with icon
- Body: 14px, #334155, line-height 1.4
- Fonts: Kaisei Decol, Yomogi, Zen Kurenaido

### 4. Layout
- Header: left-aligned title + right-aligned date/source
- 3-column layout: 33% left, 33% center, 33% right
- Card components: white background, 12px rounded corners, subtle shadow
- Proper spacing and hierarchy between sections
- Appropriate use of glassmorphism
- Content width at 100%

## Graphic Recording Expression Techniques
- Emphasize balance between text and visual elements
- Highlight keywords with borders and colors
- Visualize concepts with simple icons and shapes
- Express numerical data with concise graphs and charts
- Clarify relationships between information with connecting lines and arrows
- Effectively use whitespace to ensure visibility

---

## Article to Convert
[Enter text content to be converted to infographic here]
```

## How to Use

1. Copy the prompt and paste it into an AI chat tool
2. Enter the text you want to convert to infographic in the "Article to Convert" section
3. Display/save the generated HTML in a browser

## Input Example

```
## Article to Convert
### 3 Elements of Project Success
1. Clear goal setting
2. Appropriate resource allocation
3. Regular progress check
```

## Output Example

A 3-column graphic recording style infographic HTML using fashion color palette (purple #593C47, pink #F2E63D, orange #F25C05, #F24405) is generated.

## Notes

- Information is arranged in equal 3-column allocation
- Layout flows information from top-left to bottom-right
- Emojis are effectively placed for visual accents
