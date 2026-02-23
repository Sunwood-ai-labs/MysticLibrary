---
title: Markwhen 作成要件定義
description: テキストベースのタイムライン作成ツール markwhen の構文と機能を定義した要件仕様
category: docs
intent: markwhen-requirements
audience:
  - プロジェクトマネージャー
  - ドキュメント作成者
  - タイムライン作成者
input_requirements:
  - 作成したいタイムラインの内容
  - イベントの日時と期間
tags:
  - markwhen
  - timeline
  - documentation
  - project-management
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Markwhen 作成要件定義

## 想定用途

- markwhen でタイムラインを作成する
- テキストベースでイベントを管理する
- 複数ページのタイムラインを構成する
- リマインダー機能を活用する

## 要件定義

### 1. 概要

markwhenは、テキストベースのタイムライン作成ツールです。マークダウン風の簡単な文法でイベントを記述し、それをビジュアルなタイムラインや他の形式で表示できるようにします。

### 2. 基本構造

- ドキュメントは`text/markwhen`形式のテキストファイルとして作成
- 複数のタイムラインページを`_-_-_break_-_-_`で区切って記述可能
- 各ページは以下で構成:
  - ヘッダー(オプション)
  - イベント(1つ以上)

例：

```markwhen
---
title: My Timeline
---

2023-01-01: New Year's Day

2023-02-14: Valentine's Day

_-_-_break_-_-_

---
title: Another Timeline
---

2023-07-04: Independence Day
```

### 3. ヘッダー

- YAML形式で記述
- 主な設定項目:
  - タイトル(`title:`)
  - 説明(`description:`)
  - 閲覧者制限(`view:`)
  - 編集者制限(`edit:`)
  - タグの色設定(`#タグ名: 色`)
  - 日付フォーマット(`dateFormat:`)
  - タイムゾーン(`timezone:`)
  - 他のmarkwhenのインポート(`import:`)

例：

```markwhen
---
title: Welcome to Markwhen!
description: This is an example timeline.
edit:
  - user@example.com
view: *
#Project1: #d336b1
dateFormat: d/M/y
timezone: America/New_York
import:
  - other/timeline
---
```

### 4. イベント

- 基本形式: `日付範囲: イベント内容`
- 日付範囲の指定方法:
  - ISO8601形式
  - 人間が読みやすい形式
  - EDTF形式
  - 相対日付

例：

```markwhen
2023-01-01/2023-12-31: Year 2023
Dec 25 2023: Christmas Day
1961/2023: Historical period
after !PreviousEvent 2 weeks: Follow-up meeting
```

イベント内容に含められる要素：

```markwhen
2023-06-01: Company Picnic #work
[More info](https://example.com/picnic)
[Central Park](location)
![Picnic image](https://example.com/picnic.jpg)
@team-calendar
- [ ] Prepare food
- [x] Send invitations
75% Complete
```

### 5. グループとセクション

- `group グループ名`と`endGroup`で囲んでグループ化
- `section セクション名`と`endSection`で囲んでセクション化
- ネストも可能

例：

```markwhen
section Projects
group Project A #ProjectA
2023-01-01/2023-03-31: Phase 1
2023-04-01/2023-06-30: Phase 2
  group Subproject
  2023-05-01/2023-05-15: Subtask 1
  2023-05-16/2023-05-31: Subtask 2
  endGroup
endGroup
endSection
```

### 6. リマインダー機能(ベータ版)

- ヘッダーまたはタグに`reminders:`で設定
- 開始前、開始後、終了前、終了後のリマインダを設定可能

例：

```markwhen
---
#meeting:
  reminders:
    beforeBegin:
      durations: [1 day, 1 hour]
    afterEnd:
      durations: [1 day]
---

2023-07-01 10:00: Team Meeting #meeting
```

### 7. タイムゾーン

- ヘッダーでデフォルトタイムゾーンを設定
- タグごとに異なるタイムゾーンを設定可能

例：

```markwhen
---
timezone: America/New_York
#tokyo:
  timezone: Asia/Tokyo
---

2023-07-01 09:00: New York Meeting
2023-07-01 10:00: Tokyo Meeting #tokyo
```

### 8. その他の注意点

- コメントは`// コメント内容`で記述
- 日付フォーマットは米国式がデフォルト。欧州式に変更可能
- 複数のタグを持つイベントの挙動に注意(色の優先順位など)
- 繰り返しイベントの設定が可能

例：

```markwhen
// This is a comment
2023-07-01 every week for 10 weeks: Weekly Team Standup

2023-08-01: Multi-tagged event #tag1 #tag2
```

## 使い方

1. この要件定義を参考にタイムラインを設計する
2. markwhen形式でテキストファイルを作成する
3. markwhenツールでビジュアル化する

## 入力例

```text
2024年のプロジェクトスケジュールを作成してください。
```

## 出力例

```markwhen
---
title: 2024 Project Timeline
---

2024-01-15/2024-03-31: Phase 1: Planning #planning
2024-04-01/2024-06-30: Phase 2: Development #development
2024-07-01/2024-09-30: Phase 3: Testing #testing
2024-10-01/2024-12-31: Phase 4: Deployment #deployment
```

## 注意点

- 日付フォーマットの一貫性を保つ
- タグの命名規則を決めておく
- 複数ページを使用する場合は区切りを明確にする
