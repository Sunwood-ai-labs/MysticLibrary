---
title: "Eraser 記法ガイド②"
sourcePath: "prompts/diagram/Eraser_guide2_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/diagram/Eraser_guide2_JP.md`
> 英語版: [EN](/en/diagram/Eraser_guide2)

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
    * `<>*`: 多対多の関係

### ERDの例

#### RPGゲームのERD

&lt;blockquote class="twitter-tweet" data-media-max-width="800"&gt;&lt;p lang="ja" dir="ltr"&gt;Eraser 記法ガイド②～エンティティ関係図～&lt;br&gt;《RPGゲームのERD》&lt;br&gt;結構適当なプロンプトで作成したけど結構いい感じかも！（Gemini 1.5 Flashにて作成） &lt;a href="https://t.co/vHXlOwkY4B"&gt;https://t.co/vHXlOwkY4B&lt;/a&gt; &lt;a href="https://t.co/Y57LYjOohA"&gt;pic.twitter.com/Y57LYjOohA&lt;/a&gt;&lt;/p&gt;&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) &lt;a href="https://twitter.com/hAru_mAki_ch/status/1798352736771363239?ref_src=twsrc%5Etfw"&gt;June 5, 2024&lt;/a&gt;&lt;/blockquote&gt; 

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

#### 夢を叶える！イベント予約アプリのERD

&lt;blockquote class="twitter-tweet" data-media-max-width="800"&gt;&lt;p lang="ja" dir="ltr"&gt;Eraser 記法ガイド②～エンティティ関係図～ &lt;br&gt;《夢を叶える！イベント予約アプリのERD》 &lt;br&gt;これは普通のカレンダー予約アプリです．．．．&lt;br&gt;（Gemini 1.5 Flashにて作成） &lt;a href="https://t.co/JfnI8QxWAC"&gt;https://t.co/JfnI8QxWAC&lt;/a&gt; &lt;a href="https://t.co/KwGYyBfNzY"&gt;pic.twitter.com/KwGYyBfNzY&lt;/a&gt;&lt;/p&gt;&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) &lt;a href="https://twitter.com/hAru_mAki_ch/status/1798353579864101032?ref_src=twsrc%5Etfw"&gt;June 5, 2024&lt;/a&gt;&lt;/blockquote&gt; 

```yaml
// 1. Users（ユーザー）：夢を叶えるためにイベントを予約する人々
User [icon: user] {
  id Int pk
  username String
  email String
  avatar String
  createdDate DateTime
  favoriteEventType Int
}

// 2. Bookings（予約）：夢を叶えるためのイベント予約
Booking [icon: clock] {
  id Int pk
  userId Int
  title String
  startTime DateTime
  endTime DateTime
  location String
  eventTypeId Int
  destinationCalendarId Int
  status String // 予約ステータス (pending, confirmed, canceled)
  notes String
}

// 3. EventTypes（イベントタイプ）：夢を叶えるための様々なイベント
EventType [icon: list] {
  id Int pk
  name String
  description String
  duration Int
  defaultLocation String // デフォルトの開催場所
  price Decimal // 料金
  imageUrl String // イベントのイメージ画像URL
  userId Int // イベント作成者
}

// 4. ApiKeys（APIキー）：システム連携のための鍵
ApiKey [icon: key] {
  id String pk
  userId Int
  appId String
  hashedKey String
}

// 5. Apps（アプリ）：システム連携のためのアプリケーション
App [icon: grid] {
  slug String
  dirName String
  keys Json
  createdAt DateTime
}

// 6. Webhooks（ウェブフック）：システム間連携のための魔法のメッセージ
Webhook [icon: link] {
  id String pk
  userId Int
  appId String
  active Boolean
  eventTrigger String // トリガーイベント (booking_created, booking_updatedなど)
  url String // 通知先URL
}

// 7. DestinationCalendars（連携カレンダー）：夢を叶えるためのカレンダー
DestinationCalender [icon: calendar] {
  id Int pk
  userId Int
  integration String // 連携サービス (Google Calendar, Outlook Calendarなど)
  eventTypeId Int 
}

// エンティティの関係

Booking.eventtType < EventType.id // 予約はイベントタイプに関連付けられる。
Webhook.appId > App.slug // ウェブフックはアプリに関連付けられる。
Webhook.userId > User.id // ウェブフックはユーザーによって作成される。
App.slug > ApiKey.appId // アプリはAPIキーを持つ。
User.id < Booking.userId // 予約はユーザーによって作成される。
EventType.userId <> User.id // イベントタイプはユーザーによって作成される。
User.id > ApiKey.userId // ユーザーはAPIキーを持つ。
DestinationCalender.id > Booking.destinationCalendarId // 予約は連携カレンダーに登録される。
DestinationCalender.userId < User.id // 連携カレンダーはユーザーによって設定される。
DestinationCalender.eventTypeId < EventType.id // 連携カレンダーはイベントタイプに関連付けられる。
```

## シーケンス図

シーケンス図は、システムやソフトウェアの動作を、時間軸に沿って視覚的に表現するための図です。Eraserは、シーケンス図を作成するための記法も提供しています。

### シーケンス図の記法

シーケンス図の記法は、通常のダイアグラム記法と似ていますが、オブジェクトとメッセージを表すためにいくつかの特別な属性と関係の種類を使用します。

* **オブジェクト**: 
    * `[icon: layout]`: オブジェクトのアイコンを指定します。
* **メッセージ**: 
    * `>`: オブジェクトから別のオブジェクトへのメッセージ
    * `activate`: オブジェクトのアクティブ化
    * `deactivate`: オブジェクトの非アクティブ化
    * `alt [label]:`: 条件分岐
    * `else [label]:`: 条件分岐のelse部分
    * `loop [label]:`: ループ

### シーケンス図の例

```yaml
Web App [icon: layout] > DB [icon: database]: Start transaction
Web App > Cloud Fx [icon: function]: Call function
Cloud Fx > API [icon: cloud-cog]: Create session
API > Cloud Fx: Session info
Cloud Fx > DB: Create tx record
Cloud Fx > API: Request access token
API > Cloud Fx: Access token
Cloud Fx > Web App: Token and transaction info
Web App > API: Complete transaction
alt [label: If successful]{
  API > Web App: Transaction confirmation
}
else [label: If failed]{
  API > Web App: Transaction cancellation
}
Web App > DB: Create tx record
Web App > API: Subscribe to transaction changes
activate API 
API > API: Ongoing events
API > Web App: Push events
deactivate API
```

## まとめ

Eraserの記法は、シンプルな構文と豊富な属性、関係の種類を組み合わせることで、様々な種類のダイアグラムを作成することを可能にします。今回のガイドで紹介したERDとシーケンス図の記法も活用して、より効果的なドキュメントを作成してみてください。



## 参考サイト

https://docs.eraser.io/docs/examples-1


&lt;script async src="https://platform.twitter.com/widgets.js" charset="utf-8"&gt;&lt;/script&gt;
