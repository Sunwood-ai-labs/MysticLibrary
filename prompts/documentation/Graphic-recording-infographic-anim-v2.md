# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V2

以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは

グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。文字だけの議事録と比べて直感的に伝わりやすく、視覚的な記録は情報の記憶に残りやすいという特徴があります。

## 基本要件

- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンや絵文字を大きく使用（サイズは70px程度）
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

## カラーパレット

```
<palette>
<color name='SHOOTING-[23’]-1' rgb='A61B40' r='165' g='26' b='63' />
<color name='SHOOTING-[23’]-2' rgb='DCE0F2' r='220' g='223' b='242' />
<color name='SHOOTING-[23’]-3' rgb='012840' r='1' g='39' b='63' />
<color name='SHOOTING-[23’]-4' rgb='A66A5D' r='165' g='106' b='92' />
<color name='SHOOTING-[23’]-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

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
