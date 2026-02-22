---
title: "Eraser 記法ガイド①"
sourcePath: "prompts/diagram/Eraser_guide1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/diagram/Eraser_guide1_JP.md`
> 英語版: [EN](/en/diagram/Eraser_guide1)

# Eraser 記法ガイド①

Eraserは、エンジニアチーム向けのドキュメントとダイアグラムプラットフォームです。視覚的に表現力豊かなドキュメントを作成するために、独自の記法を採用しています。このガイドでは、Eraserの記法を詳しく説明し、さまざまな例を使ってその使用方法を紹介します。

## 基本構文

Eraserの記法は、YAMLに似た簡潔な構文を使用しています。基本的な構文は以下のように記述されます。

```yaml
// ノード定義
ノード名 [属性] {
  // サブノード定義
  サブノード名 [属性]
}

// 関係定義
ノード1 > ノード2: [ラベル]
```

**説明:**

* `//`はコメントアウトを示します。
* `ノード名`は、ダイアグラムの要素（ノード）の名前です。
* `属性`は、ノードの形状、色、アイコン、テキストなどを指定します。
* `サブノード名`は、ノード内にネストされた要素の名前です。
* `ノード1 > ノード2`は、ノード1からノード2への関係を示します。
* `[ラベル]`は、関係の説明を追加するオプションのラベルです。

## ノードの定義

ノードは、ダイアグラムの要素を表現します。ノードの定義では、`ノード名`、`属性`、`サブノード`を指定します。

### 属性

ノードの属性は、`[]`で囲んで指定します。以下の属性が使用できます。

* `shape`: ノードの形状を指定します。
    * `oval`: 楕円
    * `rectangle`: 長方形
    * `diamond`: ひし形
    * `rounded_rectangle`: 角丸長方形
    * `cylinder`: 円筒
    * `hexagon`: 六角形
    * `triangle`: 三角形
    * `parallelogram`: 平行四辺形
    * `cloud`: クラウド
    * `star`: 星形
    * `database`: データベース
* `icon`: ノードに表示するアイコンを指定します。
    * `file-text`: ファイル
    * `bug`: バグ
    * `copy`: コピー
    * `repeat`: 繰り返し
    * `zap`: 電光
    * `check-square`: チェックボックス
    * `package`: パッケージ
    * `send`: 送信
    * `user`: ユーザー
    * `users`: 複数ユーザー
    * `home`: ホーム
    * `folder`: フォルダ
    * `message-circle`: メッセージ
    * `mail`: メール
    * `clock`: 時計
    * `list`: リスト
    * `key`: キー
    * `grid`: グリッド
    * `link`: リンク
    * `calendar`: カレンダー
    * `oracle`: Oracle
    * `twitter`: Twitter
    * `facebook`: Facebook
    * `aws-api-gateway`: AWS API Gateway
    * `aws-lambda`: AWS Lambda
    * `aws-simple-storage-service`: AWS S3
    * `aws-ec2`: AWS EC2
    * `aws-rds`: AWS RDS
    * `aws-auto-scaling`: AWS Auto Scaling
    * `aws-redshift`: AWS Redshift
    * `kafka`: Kafka
    * `gcp-pubsub`: GCP Pub/Sub
    * `gcp-cloud-logging`: GCP Cloud Logging
    * `gcp-dataflow`: GCP Dataflow
    * `gcp-cloud-storage`: GCP Cloud Storage
    * `gcp-datastore`: GCP Datastore
    * `gcp-bigtable`: GCP Bigtable
    * `gcp-bigquery`: GCP BigQuery
    * `gcp-app-engine`: GCP App Engine
    * `gcp-container-registry`: GCP Container Registry
    * `gcp-compute-engine`: GCP Compute Engine
    * `azure-active-directory`: Azure Active Directory
    * `azure-load-balancers`: Azure Load Balancers
    * `azure-virtual-networks`: Azure Virtual Networks
    * `azure-network-security-groups`: Azure Network Security Groups
    * `azure-virtual-machine`: Azure Virtual Machine
    * `k8s-control-plane`: Kubernetes Control Plane
    * `k8s-api`: Kubernetes API
    * `k8s-sched`: Kubernetes Scheduler
    * `k8s-c-c-m`: Kubernetes Controller Manager
    * `k8s-c-m`: Kubernetes Cloud Controller Manager
    * `k8s-etcd`: Kubernetes etcd
    * `k8s-node`: Kubernetes Node
    * `k8s-kubelet`: Kubernetes Kubelet
    * `k8s-k-proxy`: Kubernetes KProxy
    * `databricks`: Databricks
    * `snowflake`: Snowflake
    * `slack`: Slack
    * `tensorflow`: TensorFlow
    * `tableau`: Tableau
    * `layout`: ウェブアプリ
    * `database`: データベース
    * `function`: クラウド関数
    * `cloud-cog`: クラウド設定
    * `settings`: 設定
    * `aws`: AWS
    * `google-cloud`: Google Cloud
    * `azure`: Azure
    * `google`: Google
    * `microsoft`: Microsoft
* `color`: ノードの色を指定します。
    * `red`: 赤
    * `green`: 緑
    * `blue`: 青
    * `yellow`: 黄
    * `purple`: 紫
    * `orange`: オレンジ
    * `grey`: 灰色
    * `silver`: 銀色
* `text`: ノードに表示するテキストを指定します。
* `style`: ノードのスタイルを指定します。
    * `dashed`: 点線
    * `dotted`: 点線
    * `bold`: 太字
    * `italic`: イタリック

### サブノード

サブノードは、ノード内にネストされた要素を表現します。サブノードの定義は、ノードの定義と同様の構文を使用します。

```yaml
# ノード定義
ノード名 [属性] {
  # サブノード定義
  サブノード名 [属性]
}
```

サブノードは、複数階層にネストすることができます。

### グループ

グループは、関連するノードをまとめるための機能です。グループの定義は、`{}`で囲んで記述します。グループ内のノードは、`[color]`属性で色を指定することができます。

```yaml
# グループ定義
グループ名 [color] {
  # グループ内のノード定義
  ノード名 [属性]
}
```

## 関係の定義

関係は、ノード間の接続を表現します。関係の定義は、`ノード1 > ノード2`の構文を使用します。

### ラベル

関係のラベルは、`:`の後に指定します。ラベルは、関係の説明や注釈を追加するために使用します。

```yaml
# 関係定義
ノード1 > ノード2: [ラベル]
```

### 関係の種類

Eraserでは、以下の関係の種類が使用できます。

* `>`: 方向性のある関係（ノード1からノード2へ）
* `<`: 方向性のある関係（ノード2からノード1へ）
* `<>`: 双方向の関係（ノード1とノード2の間）

## 例

### Issue Triage Flow

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717593719913.png)

```yaml
# ノードとグループ
Issue type? [shape: oval, icon: file-text]

BugPath [color: red] {
  Bug [icon: bug, color: red]
  Duplicate? [shape: diamond, icon: copy]
  Mark duplicate [shape: oval, icon: copy]
  Has repro? [shape: diamond, icon: repeat]
  Ask for repro [shape: oval, icon: repeat]
}

FeaturePath [color: green] {
  Feature [icon: zap, color: green]
  Well specced? [shape: diamond, icon: check-square]
  Can be package? [shape: diamond, icon: package]
  Define as package [shape: oval, icon: package]
}

Issue ready to claim [shape: oval, icon: send]

# 関係
Issue type? > Bug
Bug > Duplicate?
Duplicate? > Mark duplicate: Yes
Duplicate? > Has repro?: No
Has repro? > Issue ready to claim: Yes
Has repro? > Ask for repro: No
Issue type? > Feature
Feature > Can be package?
Can be package? > Well specced?: No
Can be package? > Define as package: Yes
Well specced? > Issue ready to claim: Yes
```



### Price Lookup Flow

![file](https://hamaruki.com/wp-content/uploads/2024/06/image-1717593739001.png)

```yaml
# ノードと関係を定義 "A > B"
Start [shape: oval, icon: flag] > Read keywords from Excel [icon: excel]
Read keywords from Excel > Establish Amazon API connection [icon: amazon]
Establish Amazon API connection > Wait for user input [shape: diamond, icon: user]
Wait for user input > Search for keyword on Amazon[icon: search]: User selects keyword
Search for keyword on Amazon > Retrieve item price [icon: dollar-sign] 
Retrieve item price > Output result to Excel [icon: excel] 
Output result to Excel > End
Wait for user input > Close modal [icon: x]: User clicks cancel
Close modal > End [shape: oval, icon: check]

# グループを定義
For each keyword in the list [icon: repeat] {
  Search for keyword on Amazon
  Retrieve item price 
  Output result to Excel
}
```

## まとめ

Eraserの記法は、視覚的に表現力豊かなドキュメントを作成するために設計されています。シンプルな構文と豊富な属性、関係の種類により、様々なダイアグラムを簡単に作成することができます。このガイドを参考に、Eraserの記法を活用して、より効果的なドキュメントを作成してみてください。

## 参考サイト

https://docs.eraser.io/docs/what-is-eraser
