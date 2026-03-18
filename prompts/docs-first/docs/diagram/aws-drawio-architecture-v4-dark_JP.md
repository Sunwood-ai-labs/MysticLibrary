---
title: "AWS Draw.io アーキテクチャ図生成 v4 ダークテーマ版"
description: "AWS構成図をDraw.ioのXML形式でダークテーマ配色で生成するプロンプト"
canonical_id: "docs/diagram/aws-drawio-architecture-v4-dark"
canonical_doc: "docs/prompt-catalog/docs/diagram/aws-drawio-architecture-v4-dark.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/docs/diagram/aws-drawio-architecture-v4-dark.md. Edit docs/ instead. -->

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
  - サブネットも背景透明を基本とし、必要に応じて薄い色にする
- **図形配置**:
  - 図形間のスペースは十分にとって干渉しないようにする
  - 複雑すぎる図にならないように心がける
  - 関連する図形は近接配置して矢印の負担を軽減する
  - 各サービスアイコン間の関連性が視覚的に明確になるように配置する
  - Public subnetは縦長に設計し、コンポーネントを縦方向に配置する余裕を持たせる
- **テキスト配置**:
  - 文字は図形の下に配置する
  - verticalLabelPosition=bottom, verticalAlign=top の設定を使用する

## 色とスタイル指定

### カラーマップ

- 下記のカラーマップを使用したダークテーマにして
