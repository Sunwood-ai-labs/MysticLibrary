---
title: "グラフィックレコーディング (グラレコ) HTML 作成プロンプト V3.1"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-v3.1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Graphic-recording-infographic-anim-v3.1_JP.md`
> 英語版: [EN](/en/documentation/Graphic-recording-infographic-anim-v3.1)

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
  - セクション見出し：18px、# 1e40af、左側にFont Awesomeアイコンを必ず配置し、アイコンにはアニメーション効果
  - 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンや絵文字を小さく添える
  - フォント指定：
    ```html
    &lt;style&gt;
    @import url('https ://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https ://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```
## カラーパレット
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

1. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-computer-chip-or-GPU-with-simple-circuit-pattern-lines.-Chip-ba_resized_1.svg
2. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-computer-chip-or-GPU-with-simple-circuit-pattern-lines.-Chip-ba_resized.svg
3. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-robot-with-a-square-head-and-digital-circuit-patterns-inside.-T_resized_1.svg
4. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-robot-with-a-square-head-and-digital-circuit-patterns-inside.-T_resized.svg
5. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-simplified-person-sitting-at-a-desk-with-a-computer.-Person-in-_resized_1.svg
6. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-simplified-person-sitting-at-a-desk-with-a-computer.-Person-in-_resized.svg
7. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-a-thought-bubble-or-cloud-with-a-question-mark-inside.-Cloudbubbl_resized.svg
8. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-three-brain-shapes-of-increasing-size-with-simple-circuit-pattern_resized.svg
9. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-two-simple-line-graphs-side-by-side---one-with-an-upward-trend-an_resized.svg
10. https: //raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/Evolution-and-Coexistence/The-icon-shows-two-simplified-human-figures-standing-side-by-side-with-a-connect_resized.svg

## CSS 主要設定
```css
.container {
    max-width: 2000px;
    margin: 0 auto;
}
body {
    /* 手書き風グリッドライン背景 */
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http: //www.w3.org/2000/svg"><path d="M0 0h100v100H0z" fill="none"/><path d="M0 10h100M10 0v100" stroke="%23e0e0e0" stroke-width="0.5" stroke-dasharray="2,3"/></svg>');
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
## 変換するコンテンツ
コンテンツをグラフィックレコーディング形式に変換してください。
