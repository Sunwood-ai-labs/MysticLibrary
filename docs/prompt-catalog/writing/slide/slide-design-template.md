---
title: reveal.js スライドデザインテンプレート
description: reveal.jsスライドの基本的なスタイリングと構造を定義したテンプレート
category: writing
intent: slide-design-template
audience:
  - プレゼンテーション作成者
  - スライドデザイナー
input_requirements:
  - フォント設定（Google Fonts等）
  - スライドのテーマやスタイル要件
tags:
  - reveal.js
  - スライド
  - テンプレート
  - スタイリング
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# reveal.js スライドデザインテンプレート

## 想定用途

- reveal.jsスライドのベーステンプレートとして使用する
- フォント、サイズ、配置などのスタイリングを統一する
- フラグメントアニメーションの効果を定義する

## プロンプト本文

```markdown
<!-- 背景画像の設定 -->
<style>
/* Font settings */

.reveal .slides {
  font-family: "Shippori Mincho B1", serif;
  font-size: 30px;
  font-style: normal;
}

.left {
  text-align: left;
}

.body {
  font-size: 30px;
}

.reveal .slides h1,
.reveal .slides h2,
.reveal .slides h3 {
  font-weight: 200;
  font-size: 30px;
  text-align: left;
  font-family: "Shippori Mincho B1", serif;
}
</style>


# はじめての reveal.js

---

## リスト

* りんご
* みかん
* もも

---

## 効果

大きくする {.fragment .grow}

小さくする {.fragment .shrink}

フェードアウト {.fragment .fade-out}

右フェード {.fragment .fade-right}

上フェード {.fragment .fade-up}

下フェード {.fragment .fade-down}

左フェード {.fragment .fade-left}
```

## 使い方

1. `<style>`タグ内でフォントやサイズをカスタマイズする
2. `#`でスライドタイトルを設定する
3. `---`でスライド区切りを入れる
4. `.fragment`クラスでアニメーション効果を追加する

## 入力例

必要なし。このテンプレートをそのまま使用またはカスタマイズして使用します。

## 出力例

上記のプロンプト本文がそのままreveal.js対応のMarkdownとして機能します。

## 注意点

- Google Fonts等の外部フォントを使用する場合は、別途HTMLで読み込みが必要
- フラグメントアニメーションはreveal.jsの機能のため、他のスライドツールでは動作しない
- 文字色は背景に合わせて調整する必要がある
- 背景画像を使用する場合は`data-background-image`属性をスライドに追加する
