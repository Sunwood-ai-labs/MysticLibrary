---
title: AWS Draw.io アーキテクチャ図生成 v4 ダークテーマ版
description: AWS構成図をDraw.ioのXML形式でダークテーマ配色で生成するプロンプト
category: docs
intent: aws-drawio-diagram-dark
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
  - ダークテーマ
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# AWS Draw.io アーキテクチャ図生成 v4 ダークテーマ版

## 想定用途

- AWSインフラ構成をダークテーマの配色で表現したい
- Draw.io形式のXMLとしてエクスポート可能な図を生成したい
- 視覚的に最適化されたダークテーマの図を作りたい

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
```
<palette>
<color name='Full-moon-1' rgb='010D00' r='0' g='12' b='0' />
<color name='Full-moon-2' rgb='D9CAB0' r='216' g='202' b='175' />
<color name='Full-moon-3' rgb='A69177' r='165' g='144' b='119' />
<color name='Full-moon-4' rgb='F2E2CE' r='242' g='225' b='205' />
<color name='Full-moon-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

### アイコンスタイル:
  - モダンでフラットなアイコンを使用する `sketch=0` `outlineConnect=0`
  - AWS4系のリソースアイコンを使用する `shape=mxgraph.aws4.resourceIcon`

## 矢印・コネクタの最適化
- **矢印スタイル**:
  - 矢印の太さは細め `strokeWidth=1` に設定する
  - 矢印は一本の連続した線で表現し、途中で分断しない
  - `edgeStyle=orthogonalEdgeStyle` を使用して直角の曲がり角のみを使用する
  - 丸みを帯びた接続線 `rounded=1; orthogonalLoop=1` を使用する
- **経路設計**:
  - 矢印は完全に縦横方向のみで引き、斜め線は使用しない
  - 矢印は図形と干渉しないように迂回させる
  - 矢印の経路は直角的な曲がり方を使用して整理する
  - コネクターポイントをずらして必要に応じて迂回経路を設定する
- **視覚的明確化**:
  - コネクターの「ジャンプスタイル」を有効にして矢印の交差を明確に表示する
  - 矢印の向きと方向性が一目でわかるようにする

## XML構造の最適化
- **整理されたコード**:
  - コメントでセクションを明確に分ける（`<!-- AWS Cloud -->`など）
  - 各コンポーネントには一意のIDを付与する（cloud, region, vpc, subnet-1 など）
  - 親子関係が明確になるよう適切にインデントする

## 付加的な要素
- **タイトルと説明**:
  - 図の上部にタイトルと簡単な説明を追加する
  - タイトルはフォントサイズを大きめに、太字で設定する
- **アーキテクチャノート**:
  - 図の下部に枠で囲ったノートセクションを追加する
  - 重要な設計ポイントを箇条書きで記載する

---

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

Draw.ioで読み込み可能なダークテーマ配色の完全なXML形式のアーキテクチャ図が生成されます。

## 注意点

- XMLのみが出力されます（コードブロック内）
- Draw.ioの「図の読み込み → XMLから」でインポートしてください
- ダークテーマ用の「Full-moon」カラーパレットが使用されます
- AWS標準のグループ階層が自動的に作成されます
- 背景は透明設定で視認性が高い仕様になっています
