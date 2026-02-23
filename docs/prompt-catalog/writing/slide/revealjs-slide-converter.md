---
title: reveal.js スライド変換プロンプト
description: Markdownコンテンツをreveal.js形式のスライドに変換するためのプロンプト
category: writing
intent: slide-converter
audience:
  - プレゼンテーション作成者
  - スライド作成担当者
input_requirements:
  - designファイル（reveal.js形式のテンプレート）
  - textファイル（スライド化したいコンテンツ）
tags:
  - reveal.js
  - スライド
  - プレゼンテーション
  - Markdown
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# reveal.js スライド変換プロンプト

## 想定用途

- Markdown形式のドキュメントをreveal.js形式のスライドに変換する
- デザインテンプレートとコンテンツを組み合わせて統一感のあるスライドを作成する
- 背景画像やスタイリングを適用したスライドを自動生成する

## プロンプト本文

```text
# やりたいこと

## 引用
- `design` = [./def_slide_design2.md]
- `text` = [./def_slide_text1.md]

## TODO

1. `design`ファイルの内容を参考にし、全てのページに適切な背景画像を追加する。
2. `text`ファイルの内容をreveal.js形式のマークダウンに変換し、コードブロックは記載しない。
3. `design`ファイルで指定された--の位置を正確に反映させる。
4. 各スライドは--で区切り、見やすく整理する。
5. 文字色を必ず白に設定し、背景色とのコントラストを最適化する。
6. 必要に応じて、各スライドに追加のスタイリングを施して、全体の一貫性と美観を保つ。
```

## 使い方

1. designファイルとtextファイルを準備する
2. プロンプト内のパスを実際のファイルパスに置き換える
3. AIにプロンプトを入力し、reveal.js形式のスライドを生成する

## 入力例

```text
# やりたいこと

## 引用
- `design` = [https://example.com/slide-template.md]
- `text` = [https://example.com/presentation-content.md]

## TODO

1. designファイルのスタイリングを維持
2. textファイルの見出し構造をスライド構成に反映
3. セクション区切りに---を使用
```

## 出力例

```markdown
<!-- 背景画像の設定 -->
<style>
.reveal .slides {
  font-family: "Shippori Mincho B1", serif;
  font-size: 30px;
}
</style>

# スライドタイトル

---

## セクション1

* リスト項目1
* リスト項目2

---

## セクション2

コンテンツ説明
```

## 注意点

- designファイルとtextファイルは別途準備する必要がある
- 背景画像のURLは適切なものに置き換える
- 文字色は白固定のため、背景画像のコントラストに注意する
- reveal.jsの構文（---によるセクション区切り）を正確に使用する
