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

- [AWS Draw.io アーキテクチャ図生成 v1](./aws-drawio-architecture-v1.md) - 簡易版プロンプトで手軽にAWS構成図を生成
- [AWS Draw.io アーキテクチャ図生成 v4](./aws-drawio-architecture-v4.md) - Draw.ioのXML形式でAWS構成図を生成（標準版）
- [AWS Draw.io アーキテクチャ図生成 v4 ダークテーマ](./aws-drawio-architecture-v4-dark.md) - ダークテーマ配色でAWS構成図を生成

### Workflow / Skills

- [Draw.io Codex Spark Eclipse Legion フロー図](./drawio-codex-spark-eclipse-legion-flow.md) - Codex Spark Eclipse Legion スキルの流れを配色付きで図解する短文プロンプト

### Eraser

- [Eraser 記法ガイド①](./eraser-syntax-guide-1.md) - Eraserプラットフォームの記法ガイド
- [Eraser 記法ガイド② ERD](./eraser-syntax-guide-erd.md) - エンティティ関係図（ERD）の記法ガイド
- [Eraser 記法ガイド③ シーケンス図](./eraser-syntax-guide-sequence.md) - シーケンス図の記法ガイド
- [EraserAI 実践ガイド](./eraser-ai-practical-guide.md) - 実用的なダイアグラム作成のユースケース集

### その他

- [マインドマップ用Markdown記法](./markdown-for-mindmaps.md) - Markdownでマインドマップを表現するための記法

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

<!-- integrated-catalog:start -->
## 追加プロンプト

このカテゴリに追加された正規プロンプトです。

- 総件数: 4

### 収録プロンプト

- [Kaggleで今ってどんなコンペが開催してる??](./kaggle.md) - Kaggleで今ってどんなコンペが開催してる??
- [Kaggleで今ってどんなコンペが開催してる??](./diagram-kaggle.md) - Kaggleで今ってどんなコンペが開催してる??
- [私もClaude Opus 4.5 ✖ drawio で GUのカスタマージャーニーマップを生成してもらった!!!](./claude-opus-drawio-xml.md) - GUのカスタマージャーニーマップをdrawioでわかりやすく表現するためのxmlを書いて。ミニマルでオシャレでカラフルなフラットデザインで、かつ流れをアニメー…
- [Agent Sonnet4 5 Aws Bedrock](./agent-sonnet4-5-aws-bedrock.md) - https://t.co/gEMHIAcdayでAWS のBedrockを使ったエージェントアプリのインフラのアーキテクチャを表示するためのxmlを書いて。…
<!-- integrated-catalog:end -->
