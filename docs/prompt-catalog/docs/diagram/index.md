---
title: ダイアグラム
description: アーキテクチャ図やフローチャートなどの視覚的なダイアグラムを生成するプロンプト
category: docs
intent: diagram
audience:
  - アーキテクト
  - エンジニア
  - ドキュメント作成者
input_requirements:
  - ダイアグラム化したいシステム構成やフロー
tags:
  - ダイアグラム
  - アーキテクチャ図
  - Draw.io
  - AWS
  - Eraser
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# ダイアグラム

システムアーキテクチャやプロセスフローを視覚的なダイアグラムとして表現するためのプロンプト集です。

## プロンプト一覧

### AWS/Draw.io

- [AWS Draw.io アーキテクチャ図生成 v4](./aws-drawio-architecture-v4.md) - Draw.ioのXML形式でAWS構成図を生成

### Eraser

- [Eraser 記法ガイド①](./eraser-syntax-guide-1.md) - Eraserプラットフォームの記法ガイド

## 使い方

### AWS Draw.io プロンプト
1. プロンプトをコピーしてAIに貼り付け
2. 作成したいAWSアーキテクチャの仕様を入力
3. 生成されたXMLをDraw.ioにインポート

### Eraser プロンプト
1. Eraser記法を学習
2. YAML形式でダイアグラムを定義
3. Eraserプラットフォームでレンダリング

## 特徴

- AWS標準のグループ構造に対応
- 透明背景で視認性の高いデザイン
- 適切な色彩分けで構成要素を識別しやすい
- 様々なクラウドプロバイダーとツールのアイコン対応
