---
title: "グラフィックレコーディング (グラレコ) HTML 作成プロンプト V3"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-v3_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Graphic-recording-infographic-anim-v3_JP.md`

# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V3

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
    &lt;style&gt;
    @import url('https ://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https ://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```
## カラーパレット
```
<palette>
<color name='サーモン-1' rgb='F2B705' r='242' g='182' b='4' />
<color name='サーモン-2' rgb='F29F05' r='242' g='159' b='4' />
<color name='サーモン-3' rgb='F2CA99' r='242' g='201' b='152' />
<color name='サーモン-4' rgb='F25C05' r='242' g='91' b='4' />
<color name='サーモン-5' rgb='F2935C' r='242' g='147' b='92' />
</palette>
```

## SVGアセット

1. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/boiling_pot_cookware1_resized.svg
2. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/boiling_pot_cookware2_resized.svg
3. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/complete_salmon_boil_dish1_resized.svg
4. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/complete_salmon_boil_dish2_resized.svg
5. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/cooking_flame_heat_source1_resized.svg
6. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/herbs_spices_salmon_seasoning1_resized.svg
7. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/herbs_spices_salmon_seasoning2_resized.svg
8. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/kitchen_timer_cooking_time1_resized.svg
9. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/lemon_slice_citrus1_resized.svg
10. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/lemon_slice_citrus2_resized.svg
11. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/potatoes_vegetables_salmon_boil1_resized.svg
12. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/potatoes_vegetables_salmon_boil2_resized.svg
13. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/salmon_fish_vector_resized.svg1_resized.svg
14. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/salmon_fish_vector_resized.svg2_resized.svg
15. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/salt_crystals_seasoning1_resized.svg
16. https://raw.githubusercontent.com/Sunwood-ai-labs/svg-library/refs/heads/main/salmon_boil/salt_crystals_seasoning2_resized.svg

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
- Font Awesome アイコンを大きく使用して視覚的興味を引く
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
