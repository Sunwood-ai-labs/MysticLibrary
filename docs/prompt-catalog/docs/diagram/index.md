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

<!-- x-categorized-imports:start -->
## X由来の分類済み追加プロンプト

X から取り込んで分類済みの追加プロンプトです。カテゴリ本文から直接たどれるようにしつつ、X由来ページとして区別しています。

- 総件数: 11
- 全件アーカイブ: [X由来アーカイブ](./x/)

- [🍌 4. “Overhead Blizzard Skyline” ❄️](./x/2025/12/2005167552943821300.md) - 2025-12-28 15:42:53 JST / medium
- [Thick morning fog in a gravity-defying London. The asphalt street curves seamlessly upwards, ph…](./x/2025/12/2005167546774028288.md) - 2025-12-28 15:42:52 JST / medium
- [Thick morning fog in a gravity-defying London. The asphalt street curves seamlessly upwards, ph…](./x/2025/12/2005167546862108768.md) - 2025-12-28 15:42:52 JST / medium
- [🍌 3. “Sunlit Möbius Metropolis” ☀️](./x/2025/12/2005167549974233354.md) - 2025-12-28 15:42:52 JST / medium
- [🍌 1. “Neon Rain Loop” 🌧️](./x/2025/12/2005167543858995660.md) - 2025-12-28 15:42:51 JST / medium
- [Kaggleで今ってどんなコンペが開催してる??](./x/2025/12/2000179297970213262.md) - 2025-12-14 21:21:20 JST / medium
- [Kaggleで今ってどんなコンペが開催してる??](./x/2025/12/2000171520245801261.md) - 2025-12-14 20:50:26 JST / low
- [Hyper-realistic 3D square diorama of Tokyo in spring bloom, carved out with exposed soil cross-…](./x/2025/12/1997143632277918007.md) - 2025-12-06 12:18:41 JST / medium
- [私もClaude Opus 4.5 ✖ drawio で GUのカスタマージャーニーマップを生成してもらった!!!](./x/2025/11/1993396890306785499.md) - 2025-11-26 04:10:28 JST / medium
- [私も https://t.co/gEMHIAcday をsonnet4.5に依頼したらポン出しでこれがでてきた!!!これエグイな、、、](./x/2025/09/1972891058645434510.md) - 2025-09-30 14:07:37 JST / high
- [City Shapes by Whisk🏙️](./x/2025/07/1948005492074443237.md) - 2025-07-23 22:01:16 JST / high
<!-- x-categorized-imports:end -->
