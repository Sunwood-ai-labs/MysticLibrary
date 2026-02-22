---
title: "EraserAI コード解説 - 実践的なユースケース"
sourcePath: "prompts/diagram/Eraser_guide3_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/diagram/Eraser_guide3_JP.md`
> 英語版: [EN](/en/diagram/Eraser_guide3)

# EraserAI コード解説 - 実践的なユースケース

EraserAIは、自然言語やコードスニペットから視覚的なダイアグラムを生成する、とっても便利なツールです！ 
この解説では、EraserAIを使って、わかりやすくダイアグラムを作成する方法を、初心者の方にもわかりやすく説明します。

## クラウドアーキテクチャ（AWSの可視化）

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869470895.png)

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

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869530345.png)

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

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869622938.png)

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

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717869683456.png)

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



## まとめ

EraserAIは、ダイアグラムの生成と共有を簡単にすることで、チーム内のコミュニケーションやコラボレーションを円滑に進めるのに役立ちます。 
これらのコード例を参考に、EraserAIを色々な場面で活用して、より効率的に作業を進めてみてください。

**さらに詳しい情報については、EraserAIの公式ドキュメントをご覧ください。**

https://docs.eraser.io/docs/what-is-eraser

**頑張ってください！**
