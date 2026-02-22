---
title: Eraser 記法ガイド② ERD編
description: Eraserプラットフォームでエンティティ関係図（ERD）を作成するための記法ガイド
category: docs
intent: eraser-syntax-guide-erd
audience:
  - Eraserユーザー
  - データベース設計者
  - システムアーキテクト
input_requirements:
  - 作成したいERDの構造
  - エンティティと関係の定義
tags:
  - eraser
  - erd
  - データベース設計
  - 記法
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser 記法ガイド② ERD編

## 想定用途

- EraserプラットフォームでERD（エンティティ関係図）を作成したい
- データベース構造を視覚的に表現したい
- エンティティとリレーションシップを定義したい

## プロンプト本文

```text
# Eraser 記法ガイド②

## エンティティ関係図 (ERD)

Eraserは、エンティティ関係図 (ERD) を作成するための記法も提供しています。ERDは、データベースの構造を視覚的に表現するための図です。

### ERDの記法

ERDの記法は、通常のダイアグラム記法と似ていますが、エンティティと関係を表すためにいくつかの特別な属性と関係の種類を使用します。

* **エンティティ**:
    * `[icon: user, color: blue]`: エンティティのアイコンと色を指定します。
    * `{ ... }`: エンティティの属性を記述します。
    * `id string pk`: 主キーとなる属性を指定します。
* **関係**:
    * `>`: 一対一の関係
    * `<>`: 一対多の関係
    * `<> *`: 多対多の関係

### ERDの例

#### RPGゲームのERD

```yaml
// 1. users（プレイヤー）：この世界を冒険する勇者たちだ！
users [icon: user, color: blue] {
  id string pk
  displayName string
  level int
  experience int
  gold int
  currentLocation string
}

// 2. teams（パーティ）：勇者たちが協力して冒険を進めるための仲間たち。
teams [icon: users, color: blue] {
  id string pk
  name string
  leaderId string
}

// 3. characters（キャラクター）：勇者たちが操る個性豊かな仲間たち！
characters [icon: warrior, color: green] {
  id string pk
  name string
  level int
  stats json
  skills json
  userId string
}

// 4. items（アイテム）：冒険に役立つ道具や武器！
items [icon: sword, color: orange] {
  id string pk
  name string
  type string
  rarity string
  stats json
}

// 5. quests（クエスト）：勇者たちに課せられた試練！
quests [icon: quest, color: purple] {
  id string pk
  name string
  description string
  reward json
  status string
}

// 6. enemies（敵）：勇者たちの冒険を阻む強敵たち！
enemies [icon: monster, color: red] {
  id string pk
  name string
  level int
  stats json
  skills json
  location string
}

// 7. locations（場所）：勇者たちが冒険するフィールドやダンジョン。
locations [icon: map, color: grey] {
  id string pk
  name string
  description string
  enemies json
  items json
}

// エンティティの関係

users.teams <> teams.id // 勇者たちは複数のパーティに所属できるし、一つのパーティには複数の勇者が所属できる。
characters.userId > users.id // キャラクターは勇者によって所有されている。
items.userId > users.id // アイテムは勇者によって所持されている。
quests.userId > users.id // クエストは勇者によって受託される。
enemies.location > locations.id // 敵は特定の場所に現れる。
```
```

## 使い方

1. Eraserプラットフォームを開く
2. ERD記法に従ってYAML形式でエンティティと関係を定義する
3. Eraserに貼り付けて図を生成する

## 入力例

```text
ユーザー管理システムのERDを作成してください。
以下のエンティティが必要です：
- users (ユーザー)
- posts (投稿)
- comments (コメント)
- likes (いいね)
```

## 出力例

```yaml
users [icon: user, color: blue] {
  id string pk
  username string
  email string
  created_at datetime
}

posts [icon: document, color: green] {
  id string pk
  user_id string
  title string
  content text
  created_at datetime
}

comments [icon: chat, color: orange] {
  id string pk
  post_id string
  user_id string
  content text
  created_at datetime
}

likes [icon: heart, color: red] {
  id string pk
  user_id string
  post_id string
  created_at datetime
}

// リレーション
posts.user_id > users.id
comments.post_id > posts.id
comments.user_id > users.id
likes.user_id > users.id
likes.post_id > posts.id
```

## 注意点

- 主キーには `id string pk` を使用する
- 関係は `>`（一対多）、`<>`（一対多）、`<> *`（多対多）を使用する
- アイコンと色を適切に設定して視認性を高める
- 複雑なERDはエンティティと関係を分割して定義する
