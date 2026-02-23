---
title: コミック調HTMLジェネレーター v2.0
description: テキストを4コマ漫画風のHTML形式に変換するプロンプト
category: docs
intent: comic-html-generator
audience:
  - Developers
  - Technical Writers
  - Content Creators
input_requirements:
  - 変換対象のテキストや記事
tags:
  - comic
  - html
  - visualization
  - documentation
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# コミック調HTMLジェネレーター v2.0

テキストや記事を4コマ漫画風のHTML形式に変換するプロンプト。

## 概要

技術文書、ニュース、解説記事などを視覚的で親しみやすい漫画形式のHTMLに変換します。

## 主な機能

- **キャラクター設定**: 一貫したキャラクター（2〜4名）を使用
- **ストーリー構成**: 導入→問題深掘り→解決策→詳細解説→まとめ
- **HTML構造**: 吹き出し、パネル、アバターを含む完全なHTML
- **Font Awesome活用**: アイコンによる視覚的表現
- **アニメーション効果**: bounce, sparkleなどのCSSアニメーション

## キャラクター例

- **質問者**: 読者の代弁者として疑問を投げかける
- **解説者**: 専門知識を分かりやすく説明
- **第三者視点**: 客観的な意見を提供
- **実践者**: 体験談を共有

## 使用例

**入力**: 技術記事「Pythonの新機能について」
**出力**: プログラマーとPython博士の対話形式の漫画HTML

## 入力要件

- 変換対象のテキスト
- 対象読者層（オプション）
- キャラクター指定（オプション）

## 出力形式

完全なHTMLファイル（CSS、Font Awesome含む）
