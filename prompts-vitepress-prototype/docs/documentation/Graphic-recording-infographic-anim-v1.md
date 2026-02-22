---
title: "グラフィックレコーディング (グラレコ) HTML 作成プロンプト V1"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-v1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Graphic-recording-infographic-anim-v1_JP.md`
> 英語版: [EN](/en/documentation/Graphic-recording-infographic-anim-v1)

# グラフィックレコーディング (グラレコ) HTML 作成プロンプト V1

以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは

グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。文字だけの議事録と比べて直感的に伝わりやすく、視覚的な記録は情報の記憶に残りやすいという特徴があります。

## 基本要件

- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンを大きく使用
- カードは使用しても枠は使用せず、背景になじむようにする
- 手書き風の吹き出しを CSS で表現
- レスポンシブデザイン
- 5カラム構成にして

## タイポグラフィ
  - タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
  - サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
  - セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置し、アイコンにはアニメーション効果
  - 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンを小さく添える
  - フォント指定：
    ```html
    &lt;style&gt;
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```

## カラーパレット

```
<palette>
<color name='旅行-1' rgb='308AD9' r='47' g='137' b='216' />
<color name='旅行-2' rgb='3299D9' r='49' g='152' b='216' />
<color name='旅行-3' rgb='3BACD9' r='58' g='171' b='216' />
<color name='旅行-4' rgb='4AD97C' r='73' g='216' b='123' />
<color name='旅行-5' rgb='F2BC57' r='242' g='187' b='87' />
</palette>
```

## レイアウト指示

- 手書き風の雰囲気を出す
- セクション間を矢印や線でゆるく繋ぐ
- 重要なキーワードは大きく、補足説明は小さいフォントで
- Font Awesome アイコンを大きく使用して視覚的興味を引く
- カードは背景になじむよう、枠線を使わず透明度を調整する


## 変換するコンテンツ

----
