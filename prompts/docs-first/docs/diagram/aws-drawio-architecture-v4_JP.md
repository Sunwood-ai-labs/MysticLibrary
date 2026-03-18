---
title: "AWS Draw.io アーキテクチャ図生成 v4"
description: "AWS構成図をDraw.ioのXML形式で生成し、視覚的に最適化された図を作成するプロンプト"
canonical_id: "docs/diagram/aws-drawio-architecture-v4"
canonical_doc: "docs/prompt-catalog/docs/diagram/aws-drawio-architecture-v4.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/diagram/aws-drawio-architecture-v4.md. Edit docs/ instead. -->

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
