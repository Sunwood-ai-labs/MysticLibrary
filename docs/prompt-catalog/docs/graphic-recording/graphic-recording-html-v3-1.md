---
title: グラレコHTML作成 V3.1 旅行カラーパレット
description: 旅行テーマのカラーパレットとSVGアセットを使用したグラフィックレコーディングHTML生成プロンプト
category: docs
intent: graphic-recording-html-travel
audience:
  - ファシリテーター
  - プレゼンター
  - コンテンツ作成者
input_requirements:
  - グラレコ化したいテキストコンテンツ
tags:
  - グラフィックレコーディング
  - インフォグラフィック
  - HTML生成
  - 旅行テーマ
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# グラレコHTML作成 V3.1 旅行カラーパレット

## 想定用途

- 旅行や冒険テーマのコンテンツをグラレコ化したい
- SVGアセットを活用した視覚的な表現を行いたい
- 透明カードで背景に馴染むデザインにしたい

## プロンプト本文

```text
# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V3.1

以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは
グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。文字だけの議事録と比べて直感的に伝わりやすく、視覚的な記録は情報の記憶に残りやすいという特徴があります。

## 基本要件
- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンや絵文字を使用
- 下記のSVGアセットは例外的に使用可能（積極的に使用して）
- カードは背景を透明にし、枠は使用せず、背景になじむようにする
- 手書き風の吹き出しを CSS で表現（背景は薄い透明度に）
- レスポンシブデザイン
- 5カラム構成（コンテナ幅は2000px）
- カード間の間隔を広くとる（40px程度）
- グリッドのギャップは30px

## タイポグラフィ
- タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
- サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
- セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置し、アイコンにはアニメーション効果
- 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンや絵文字を小さく添える
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  </style>
  ```

## カラーパレット（旅行テーマ）
```
<palette>
<color name='旅行-1' rgb='45858C' r='68' g='133' b='140' />
<color name='旅行-2' rgb='A0D9D9' r='160' g='216' b='216' />
<color name='旅行-3' rgb='D9C589' r='216' g='196' b='136' />
<color name='旅行-4' rgb='BF9765' r='191' g='150' b='101' />
<color name='旅行-5' rgb='D92B04' r='216' g='43' b='4' />
</palette>
```

## SVGアセット
以下の進化・共存テーマのSVGアセットを積極的に使用してください：
1. Chip/GPUアイコン
2. ロボットアイコン
3. 人物（デスクワーク）アイコン
4. 思考吹き出しアイコン
5. ブレインシェイプアイコン
6. グラフアイコン
7. 人物連携アイコン

## CSS 主要設定
```css
.container {
    max-width: 2000px;
    margin: 0 auto;
}
body {
    /* 手書き風グリッドライン背景 */
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v100H0z" fill="none"/><path d="M0 10h100M10 0v100" stroke="%23e0e0e0" stroke-width="0.5" stroke-dasharray="2,3"/></svg>');
    background-size: 30px 30px;
    background-color: #f9f7f1;
    overflow-x: hidden;
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
}
.card {
    background-color: transparent;
    padding: 15px;
    border-radius: 15px;
    position: relative;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
}
.icon-large {
    font-size: 70px;
    display: block;
    margin: 15px auto;
    text-align: center;
}
.speech-bubble {
    position: relative;
    background-color: rgba(242, 187, 87, 0.1);
    border-radius: 15px;
    padding: 12px;
}
.comparison-item {
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
}
.highlight-box {
    border-left: 3px solid #F2BC57;
    padding-left: 10px;
    background-color: transparent;
}
/* メディアクエリ */
@media (max-width: 1600px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

## レイアウト指示
- 手書き風の雰囲気を強調
- 重要なキーワードは大きく、補足説明は小さいフォントで
- Font Awesome アイコンやアセットを大きく使用して視覚的興味を引く
- カードは全て背景を透明にし、境界や枠線を使わない
- カード内のコンテンツ（比較項目、吹き出し、ハイライトボックスなど）も透明か薄い透明度に設定

## 作成手順
1. まず、全体構造を構築（コンテナ、タイトル、5カラムグリッド）
2. 各セクションをカードとして配置
3. カードには見出し、大きなアイコン、テキスト内容を含める
4. 比較項目や統計データは横並びで表示
5. 重要なポイントは吹き出しやハイライトボックスで強調
6. フッターにはグラフィックレコーディングの作成日と情報源を記載

---

## 変換するコンテンツ
[ここにグラレコ化したいテキストコンテンツを入力]
```

## 使い方

1. プロンプトをコピーしてAIチャットツールに貼り付け
2. 変換するコンテンツ部分にグラレコ化したいテキストを入力
3. 生成されたHTMLをブラウザで表示・保存

## 入力例

```
## 変換するコンテンツ
### 旅行計画の立案
- 目的地の選定：予算、期間、興味に基づいて決定
- 宿泊先の予約：ホテル、旅館、民宿など
- 移動手段の確保：飛行機、電車、レンタカー
- 観光スポットのリサーチ：現地の名所、体験プラン
```

## 出力例

旅行テーマのカラーパレット（45858C、A0D9D9、D9C589、BF9765、D92B04）を使用した、透明カードで構成される5カラムのグラレコHTMLが生成されます。

## 注意点

- SVGアセットは進化・共存テーマのものが指定されています
- カード背景は完全透明で枠線なし
- 手書き風グリッドライン背景が適用されます
- レスポンシブ対応で画面サイズに応じてカラム数が変化します
