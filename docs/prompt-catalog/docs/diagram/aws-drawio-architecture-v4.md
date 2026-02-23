---
title: AWS Draw.io アーキテクチャ図生成 v4
description: AWS構成図をDraw.ioのXML形式で生成し、視覚的に最適化された図を作成するプロンプト
category: docs
intent: aws-drawio-diagram
audience:
  - アーキテクト
  - クラウドエンジニア
  - システム設計者
input_requirements:
  - 作成したいAWSアーキテクチャの仕様
tags:
  - aws
  - drawio
  - アーキテクチャ図
  - xml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# AWS Draw.io アーキテクチャ図生成 v4

## 想定用途

- AWSインフラ構成を視覚的に分かりやすい図で表現したい
- Draw.io形式のXMLとしてエクスポート可能な図を生成したい
- AWS標準のアイコンと配色を使用した一貫性のある図を作りたい

## プロンプト本文

```text
# AWS & Draw.io アーキテクチャダイアグラム生成プロンプト V4 (experimental)

## 目的
AWS構成図をDraw.ioのXML形式で作成し、視覚的に最適化された図を生成する
XMLのコードのみをください

## 基本レイアウト指示
- **AWS標準グループの活用**:
  - AWS Cloud、Region、VPC、Availability Zoneなどの標準グループを必ず使用する
  - Public/Private Subnet、Security group、EC2 instance contentsなどの適切なグループを用いる
  - グループの入れ子構造を正しく表現する（AWS Cloud > Region > VPC > Availability Zone > Subnet）
- **背景透明化**:
  - すべてのグループ要素は `fillColor=none` で背景を透明に設定する
- **図形配置**:
  - 図形間のスペースは十分にとって干渉しないようにする
  - 関連する図形は近接配置して矢印の負担を軽減する
- **テキスト配置**:
  - 文字は図形の下に配置する
  - verticalLabelPosition=bottom, verticalAlign=top の設定を使用する

## 色とスタイル指定
- **リージョンの色**: 青緑系 `strokeColor=#00A4A6`
- **VPCの色**: 紫色系 `strokeColor=#8C4FFF`
- **Availability Zoneの色**: 青系 `strokeColor=#147EBA`
- **サブネットの色**: 緑系 `strokeColor=#7AA116`
- **EC2/ECSの色**: 橙色系 `fillColor=#D45B07`
- **IAMロールの色**: 赤色系 `fillColor=#BF0816`
- **セキュリティグループの色**: 赤線 `strokeColor=#DD3522`

## 矢印・コネクタの最適化
- 矢印の太さは細め `strokeWidth=1`
- `edgeStyle=orthogonalEdgeStyle` で直角の曲がり角のみを使用
- 丸みを帯びた接続線 `rounded=1; orthogonalLoop=1` を使用

## 作成してほしいアーキテクチャ
[ここにAWSアーキテクチャの仕様を入力]
```

## 使い方

1. プロンプトをコピーしてAIに貼り付け
2. 作成したいAWSアーキテクチャの仕様を入力
3. 生成されたXMLをコピー
4. Draw.io（diagrams.net）で「ファイル→XMLから読み込み」でインポート

## 入力例

```
## 作成してほしいアーキテクチャ
- CloudFront + WAF
- ALB + Auto Scaling Group
- EC2 × 2 + ECS Cluster
- RDS MySQL
- ElastiCache Redis
```

## 出力例

Draw.ioで読み込み可能な完全なXML形式のアーキテクチャ図が生成されます。

## 注意点

- XMLのみが出力されます（コードブロック内）
- Draw.ioの「図の読み込み → XMLから」でインポートしてください
- AWS標準のグループ階層が自動的に作成されます
- 背景は透明設定で視認性が高い仕様になっています
