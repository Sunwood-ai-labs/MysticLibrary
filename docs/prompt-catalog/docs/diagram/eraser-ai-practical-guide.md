---
title: EraserAI 実践ガイド
description: EraserAIを使用して実用的なダイアグラムを作成するための実践的なユースケース集
category: docs
intent: eraser-ai-practical-guide
audience:
  - エンジニア
  - ドキュメント作成者
  - システム設計者
input_requirements:
  - 作成したいダイアグラムの種類
  - システムやデータフローの概要
tags:
  - eraser
  - eraserai
  - ダイアグラム
  - クラウドアーキテクチャ
  - シーケンス図
  - erd
  - フローチャート
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# EraserAI 実践ガイド

## 想定用途

- EraserAIを使用して実用的なダイアグラムを作成する
- クラウドアーキテクチャ、シーケンス図、ERD、フローチャートを可視化する
- チーム内のコミュニケーションやコラボレーションを円滑にする

## プロンプト本文

```text
# EraserAI コード解説 - 実践的なユースケース

EraserAIは、自然言語やコードスニペットから視覚的なダイアグラムを生成する、とっても便利なツールです！
この解説では、EraserAIを使って、わかりやすくダイアグラムを作成する方法を、初心者の方にもわかりやすく説明します。

## クラウドアーキテクチャ（AWSの可視化）

```eraser
// AWSにおけるシンプルなデータパイプラインを表現してみましょう
// [icon: aws-s3] は AWS S3 サービスを表すアイコンを指定します
Data Source [icon: aws-s3] > Data Processing [icon: aws-emr] > Data Destination [icon: aws-redshift]

// データソースからデータ処理、データデスティネーションまでの流れを視覚的に表現します
// ">" は矢印で、データがどのように移動するかを示しています
```

* **解説:**  AWSのS3からEMRでデータ処理して、最終的にRedshiftにデータをロードする、シンプルなデータパイプラインを表現しました。
* **ポイント:**
    * `icon` 属性を使って、AWSサービスを表すアイコンを付けることで、図がわかりやすくなります。
    * 接続線 (`>`) を使うことで、データがどのように移動するかを視覚的に示せます。

## シーケンス図（APIリクエストの動きをステップごとに見る）

```eraser
// クライアントからサーバーへのAPIリクエストのシーケンスを可視化してみましょう
Client [icon: user] > Server [icon: server]: APIリクエスト送信
// "activate Server" でサーバーがアクティブになっている状態を示します
activate Server
// サーバーはデータベースにクエリを送信します
Server > Database [icon: database]: データベースクエリ
// データベースはサーバーにクエリ結果を返します
Database > Server: クエリ結果
// サーバーはクライアントにレスポンスを送信します
Server > Client [icon: user]: レスポンス送信
// "deactivate Server" でサーバーが処理を終えたことを示します
deactivate Server
```

* **解説:** クライアントがサーバーにAPIリクエストを送信し、サーバーがデータベースからデータを取得してクライアントに結果を返す流れを表現しました。
* **ポイント:**
    * `activate` / `deactivate`  キーワードを使うことで、サーバーがアクティブな状態であることをわかりやすく表現できます。
    * 各ステップで明確なメッセージ (`:`) を記述することで、処理の流れを簡単に追跡できます。

## ERD（データベースの設計図を描く）

```eraser
// ユーザーとチームの関係を表すERDを表現してみましょう
users [icon: user] {
    // id はプライマリキーで、string型です
    id string pk
    // name はユーザーの名前で、string型です
    name string
    // email はユーザーのメールアドレスで、string型です
    email string
}

// チームのエンティティを定義します
teams [icon: users] {
    // id はプライマリキーで、string型です
    id string pk
    // name はチームの名前で、string型です
    name string
}

// ユーザーとチームの間に1対多の関係があります。
// ユーザーは1つのチームに所属し、チームは複数のユーザーを持つことができます。
users.teamId > teams.id
```

* **解説:** ユーザーとチームのエンティティとその間の関係を表現しました。
* **ポイント:**
    * `pk` 属性はプライマリキーを示します。
    * 接続線 (`>`) は1対多の関係を示します。

## フローチャート（処理の流れを可視化する）

```eraser
// ユーザー入力を受け取り、データ処理を行い、結果を出力するフローチャート
Start [shape: oval] > Get User Input [shape: diamond]
// 菱形は条件分岐を表します
Get User Input > Process Data [shape: rectangle]: Yes
// 長方形は処理を表します
Process Data > Output Result [shape: rectangle]
Get User Input > Exit [shape: oval]: No
```

* **解説:**  ユーザー入力を受け取って処理を行い、結果を出力する、シンプルなフローチャートを作成しました。
* **ポイント:**
    * `shape` 属性を使って、各ステップを表現する形状 (円形、菱形、長方形) を指定できます。
    * 接続線 (`>`) を使うことで、処理の流れを分かりやすく表現できます。
```

## 使い方

1. 作成したいダイアグラムの種類を選択する（クラウドアーキテクチャ、シーケンス図、ERD、フローチャート）
2. プロンプトのテンプレートをベースに、自分のシステムに合わせてカスタマイズする
3. EraserAIに入力してダイアグラムを生成する

## 入力例

```text
以下のシステムのシーケンス図を作成してください：

- クライアントがAPI Gatewayにリクエストを送信
- API GatewayがLambda関数を呼び出し
- LambdaがDynamoDBにデータを保存
- 結果をクライアントに返す
```

## 出力例

```eraser
Client [icon: user] > API Gateway [icon: cloud]: APIリクエスト
activate API Gateway
API Gateway > Lambda [icon: server]: 関数呼び出し
activate Lambda
Lambda > DynamoDB [icon: database]: データ保存
DynamoDB > Lambda: 保存完了
Lambda > API Gateway: レスポンス
deactivate Lambda
API Gateway > Client: 結果返却
deactivate API Gateway
```

## 注意点

- `icon` 属性を使用して視覚的な分かりやすさを向上させる
- `activate`/`deactivate` を使用して処理のライフサイクルを明確にする
- `shape` 属性で要素の種類を明示する（円形、菱形、長方形など）
- コメント（`//`）を活用してダイアグラムの意図を説明する
