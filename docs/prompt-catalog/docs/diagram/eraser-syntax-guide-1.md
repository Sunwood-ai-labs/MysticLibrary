---
title: Eraser 記法ガイド①
description: Eraserプラットフォームでダイアグラムを作成するための記法ガイド
category: docs
intent: eraser-syntax-guide
audience:
  - Eraserユーザー
  - ダイアグラム作成者
  - ドキュメント作成者
input_requirements:
  - 作成したいダイアグラムの構造
tags:
  - eraser
  - 記法
  - ダイアグラム
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser 記法ガイド①

## 想定用途

- Eraserプラットフォームでダイアグラムを作成したい
- YAML形式の簡潔な構文でフローチャートやアーキテクチャ図を表現したい
- Eraserの基本的な記法を学習したい

## プロンプト本文

このプロンプトは記法ガイドであり、AIにダイアグラム生成を依頼するためのテンプレートではありません。Eraserの記法を学習した後、以下の形式でダイアグラムを定義できます。

```yaml
# ノード定義
ノード名 [属性] {
  # サブノード定義
  サブノード名 [属性]
}

# 関係定義
ノード1 > ノード2: [ラベル]
```

## 属性一覧

### 形状 (shape)
- `oval`: 楕円
- `rectangle`: 長方形
- `diamond`: ひし形
- `rounded_rectangle`: 角丸長方形
- `cylinder`: 円筒
- `hexagon`: 六角形
- `triangle`: 三角形
- `cloud`: クラウド
- `database`: データベース

### アイコン (icon)
- `file-text`, `bug`, `copy`, `check-square`
- `user`, `users`, `home`, `folder`
- `aws-api-gateway`, `aws-lambda`, `aws-simple-storage-service`
- `k8s-control-plane`, `k8s-api`, `k8s-node`
- 他多数

### 色 (color)
- `red`, `green`, `blue`, `yellow`, `purple`, `orange`, `grey`

## 使い方

1. [Eraser](https://docs.eraser.io/docs/what-is-eraser) プラットフォームにアクセス
2. 上記のYAML形式でダイアグラムを定義
3. Eraserのエディタに貼り付けてレンダリング

## 入力例

```yaml
# Issue Triage Flow
Issue type? [shape: oval, icon: file-text]

BugPath [color: red] {
  Bug [icon: bug, color: red]
  Has repro? [shape: diamond, icon: repeat]
}

FeaturePath [color: green] {
  Feature [icon: zap, color: green]
  Well specced? [shape: diamond, icon: check-square]
}

Issue ready to claim [shape: oval, icon: send]

# 関係
Issue type? > Bug
Bug > Has repro?
Has repro? > Issue ready to claim: Yes
Issue type? > Feature
Feature > Well specced?
Well specced? > Issue ready to claim: Yes
```

## 出力例

Eraserプラットフォーム上で視覚的なフローチャートとしてレンダリングされます。

## 注意点

- これは記法ガイドです。AIにダイアグラム生成を依頼する場合は、この記法に従って定義を依頼してください
- Eraser専用の記法であり、他のダイアグラムツールとは互換性がありません
- 詳しくは[Eraser公式ドキュメント](https://docs.eraser.io/docs/what-is-eraser)を参照してください
