---
title: スライド作成
description: reveal.jsを使用したスライド作成のためのプロンプト
category: writing
intent: slide-index
audience:
  - プレゼンテーション作成者
  - スライドデザイナー
input_requirements: []
tags:
  - reveal.js
  - スライド
  - プレゼンテーション
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# スライド作成プロンプト

reveal.js形式のスライドを作成・変換するためのプロンプト群です。

## 一覧

### 基本プロンプト

- [reveal.js スライド変換プロンプト](./revealjs-slide-converter.md) - Markdownコンテンツをreveal.js形式のスライドに変換

### テンプレート・サンプル

- [スライドデザインテンプレート](./slide-design-template.md) - 基本的なスタイリングと構造を定義したテンプレート
- [スライドテキストサンプル](./slide-text-sample.md) - スライド変換用のテキストコンテンツサンプル

## 利用時のポイント

- designファイルとtextファイルを準備してから使用する
- 文字色は白固定のため、背景画像とのコントラストに注意する
- reveal.js構文（`---`によるセクション区切り）を正確に使用する
- フラグメントアニメーション（`.fragment`クラス）で動きを付けられる
