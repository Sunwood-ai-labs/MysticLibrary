---
title: "markwhen作成要件定義書（V2）"
sourcePath: "prompts/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2_JP.md`
> 英語版: [EN](/en/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2)

# markwhen作成要件定義書（V2）

## 1. 概要

markwhenは、テキストベースのタイムライン作成ツールです。マークダウン風の簡単な文法でイベントを記述し、それをビジュアルなタイムラインや他の形式で表示できます。

## 2. 基本構造

- ドキュメントは`text/markwhen`形式のテキストファイルとして作成します。
- 複数のタイムラインページを`_-_-_break_-_-_`で区切って記述可能です。
- 各ページは以下で構成されます:
  - **ヘッダー**（オプション）
  - **イベント**（1つ以上）

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

## 3. ヘッダー

- **YAML形式**で記述します。
- 主な設定項目:
  - **タイトル** (`title:`)
  - **説明** (`description:`)
  - **閲覧者制限** (`view:`)
  - **編集者制限** (`edit:`)
  - **タグの色設定** (`#タグ名: 色`)
  - **日付フォーマット** (`dateFormat:`)
  - **タイムゾーン** (`timezone:`)
  - **他のmarkwhenのインポート** (`import:`)

例：

```markwhen
---
title: Welcome to Markwhen!
description: This is an example timeline.
edit:
  - user@example.com
view: *
#Project1: #d336b1
dateFormat: yyyy-MM-dd
timezone: Asia/Tokyo
import:
  - other/timeline
---
```

**注意点**:

- `dateFormat`は`yyyy-MM-dd`のように設定し、日付フォーマットを統一します。
- `timezone`は`Asia/Tokyo`のように設定し、タイムゾーンを指定します。
- タグの色設定で、プロジェクトやタスクの分類ごとに色を設定できます。

## 4. イベント

- **基本形式**: `日付範囲: イベント内容`
- **日付範囲の指定方法**:
  - `2023-01-01/2023-03-31`のように、開始日と終了日を`/`で区切ります。
  - 単日のイベントは日付を一つだけ指定します。
- **日付フォーマット**:
  - `yyyy-MM-dd`形式を使用します。

例：

```markwhen
2023-01-01/2023-12-31: Year 2023
2023-12-25: Christmas Day
```

**イベント内容に含められる要素**:

- **イベントの説明**: イベントの詳細情報を記述できます。
- **タグ**: `#タグ名`を使用して、イベントを分類・色分けできます。
- **リンク・画像**: マークダウン形式でリンクや画像を追加できます。
- **チェックリスト**: `- [ ]`や`- [x]`を使用して、タスクの進捗を管理できます。
- **進捗率**: `75% Complete`のように、タスクの進捗率を記述できます。

## 5. グループとセクション

### 5.1 グループ

- **グループ化**: 関連するイベントをまとめるために使用します。
- **記述方法**:
  - `group グループ名`と`endGroup`で囲みます。
- **ネスト**: グループ内にさらにグループを作成できます。
- **タグの付与**: グループ名の後に`#タグ名`を付けて、グループ全体にタグを適用できます。

### 5.2 セクション

- **セクション化**: タイムライン全体を大きく区切るために使用します。
- **記述方法**:
  - `section セクション名`と`endSection`で囲みます。

### 5.3 タスクリストからのグループ化ガイドライン

タスクリストをmarkwhenに変換する際、以下のガイドラインに従って適切なグループ化を行います。

- **プロジェクトごとにセクションを作成**:
  - タスクリストの大項目（プロジェクト）ごとに`section`を使用します。
- **フェーズやカテゴリごとにグループを作成**:
  - タスクリストの中項目や関連するタスクをまとめて`group`でグループ化します。
- **グループ名の命名**:
  - フェーズ名（例：企画、開発、テスト）やカテゴリ名をグループ名として使用します。
- **ネストされたグループ**:
  - 必要に応じて、グループ内にサブグループを作成し、タスクの階層構造を表現します。

### 5.4 グループとセクションの例

```markwhen
section プロジェクトA #ProjectA
group 企画フェーズ
2024-01-01/2024-01-31: 要件定義
2024-02-01/2024-02-28: 基本設計
endGroup

group 開発フェーズ
2024-03-01/2024-05-31: 実装
2024-06-01/2024-06-30: テスト
endGroup
endSection
```

**説明**:

- `section`でプロジェクト全体を区切ります。
- `group`でフェーズごとにタスクをまとめます。
- タグ（例：`#ProjectA`）を使用して、プロジェクトやグループに色を付けます。

## 6. リマインダー機能(ベータ版)

- **設定方法**:
  - ヘッダーまたはタグに`reminders:`で設定します。
- **リマインドのタイミング**:
  - `beforeBegin`: 開始前
  - `afterEnd`: 終了後

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

## 7. タイムゾーン

- **デフォルトタイムゾーンの設定**:
  - ヘッダーで`timezone:`を指定します。
- **タグごとのタイムゾーン**:
  - タグに対して個別にタイムゾーンを設定できます。

例：

```markwhen
---
timezone: Asia/Tokyo
#newyork:
  timezone: America/New_York
---
2023-07-01 09:00: 東京での会議
2023-07-01 10:00: ニューヨークでの会議 #newyork
```

## 8. その他の注意点

- **コメント**: `// コメント内容`で記述します。
- **日付フォーマットの統一**: `dateFormat`で指定したフォーマットを使用します。
- **タグの優先順位**: 複数のタグがある場合、最初のタグが優先されます。
- **繰り返しイベント**: 繰り返しの設定が可能です。

例：

```markwhen
// これはコメントです
2023-07-01 every week for 10 weeks: 毎週のチームミーティング

2023-08-01: マルチタグイベント #tag1 #tag2
```

## 9. タスクリストからmarkwhenへの変換手順

1. **タスクリストの確認**:
   - プロジェクト、フェーズ、タスクの階層構造を確認します。
2. **ヘッダーの設定**:
   - `title`、`dateFormat`、`timezone`、プロジェクトごとのタグと色を設定します。
3. **セクションの作成**:
   - プロジェクトごとに`section`を作成し、対応するタグを付与します。
4. **グループの作成**:
   - フェーズやカテゴリごとに`group`を作成し、タスクをグループ化します。
5. **イベントの記述**:
   - タスクを開始日と終了日を指定して記述します。
   - 単日のイベントは日付を一つだけ指定します。
6. **タグの付与**:
   - 必要に応じて、タスクやグループにタグを付けて分類します。
7. **ネストの活用**:
   - サブタスクがある場合、グループ内にさらに`group`を作成してネストします。

## 10. markwhenのサンプル

```markwhen
---
title: Welcome to Markwhen!

edit:
  - rob@markwhen.com

view: \*

#Project1: #d336b1
---
section Welcome #welcome
now: This example timeline showcases some of markwhen's features.

now: For more information, view the documentation [here](https://docs.markwhen.com) or join the [discord](https://discord.gg/3rTpUD94ac)
#welcome

now: Note that changes you make here are not saved
If you want to make a new markwhen you should open a tab at the bottom or click open in the sidebar
endSection

section All Projects
group Project 1 #Project1
// Supports ISO8601
2023-01/2023-03: Sub task #John
2023-03/2023-06: Sub task 2 #Michelle
More info about sub task 2

- [ ] We need to get this done
- [x] And this
- [ ] This one is extra

2023-07: Yearly planning
endGroup
 group Project 2 #Project2
2023-04/4 months: Larger sub task #Danielle

// Supports American date formats
03/2023 - 1 year: Longer ongoing task #Michelle

- [x] Sub task 1
- [x] Sub task 2
- [ ] Sub task 3
- [ ] Sub task 4
- [ ] so many checkboxes omg

10/2023 - 2 months: Holiday season
endGroup

group Project 3
01/2024: Project kickoff
02/2024-04/2024: Other stuff
endGroup
endSection

2023-01-03 every other week for 1 year: Biweekly meeting

// Events that don't have explicit end dates have inferred ranges - for example, when a year is specified, it lasts from the beginning of that year to the end of it.
2024: A year-long event

// Inferred ranges are as granular as their definitions.
09/2024: one month

2025-05-05: one day

Jan 4 2025 8am: instant

// You can also be specific with your ranges
2024/2025: An event that lasts two years

November 8, 2022 9am - November 9, 2023, 10am: one year, one day, and one hour

now: [More documentation](https://docs.markwhen.com/syntax/events.html)

// Event descriptions last from the date range definition up to the next event
2029-04-25/2029-05-03: Descriptions can be one line

2029-04-25/2029-05-03: Or
they can span
multiple lines

1/27/2025: [] An event can have a checkbox for completion
Put square brackets at the start of the event description

1/27/2026: [x] To mark an event as completed, put an x in the square brackets

1/27/2027: Events can have lists

- [ ] checkbox list item
- [x] a completed checkbox list item
- simple list item
- another simple list item

1/27/2028 - 1 year: 68% Manually indicate an event's completion with a percentage in the description

Partially completed events will have their event bar partially filled that amount

1 year: Links are markdown-style: [This is a link](https://markwhen.com)

1 year: Images are also markdown-style:
![](https://blog.markwhen.com/images/calendar1.png)

1 year: Locations (which are more useful for the map view) can be indicated in a similar way: [Hawaii](location) [Alaska](map)

2024: Refer to other markwhen documents with `@` syntax: @rob

now: [More documentation](https://docs.markwhen.com/syntax/event-descriptions.html)

// Events can be grouped together

group
1/27/2024: Happy birthday
2020-03: Covid started in the US 
endGroup

group Group with title

Feb 2 2025: Interviewing
Feb 8 2025: Write report
Feb 19 2025: Presentation

endGroup

group Groups can contain other groups #big

group Smaller plan #small #nested

1 year: Accomplish something

2 years: Accomplish something else

endGroup

1 year: Things are accomplished

endGroup

section Sections extend across the screen

2023: Start year

section Nested section #nested

2025: End year

endSection
endSection

now: [More documentation](https://docs.markwhen.com/syntax/groups-and-sections.html)

// Specify tag colors in the header (before any event)
#Timeline: #abf

now: Events and groups can have tags

section Tagged events #Timeline
Feb 18 1999: back in the day #Past #The90s
2043: in the future #TheOther90s

now: [More documentation](https://docs.markwhen.com/syntax/event-descriptions.html#tag)

2025: Event

1 year: This event happens immediately after the previous event and lasts for 1 year

#after

3 months - 1 month: This event happens 3 months after the previous event and lasts for 1 month
#after

by 2 weeks - 1 month: This event happens 2 weeks before the previous event and lasts 1 month
#before


2023: Event !base

after !base 1 year - 1 month: This event happens 1 year after the event with with id `base` and lasts for 1 month
#after

before !base 1 week day - 1 hour: This event happens 1 week day before the event with id `base` and lasts 1 hour
#before

October 7, 1989 every year for 10 years: ...
2025-03-04 every week for 12 weeks: ...
2022-01/2022-03 every other year x9: ...
Feb 1 2023 every 6 months for 10 times: ...

// Visually indicate that an event is an era or milestone with the tag #era or #milestone

2023-06-01/2023-08-20: Summer time #vacation

2023-08-21/2023-12-17: Back to school

2023-12-18/2024-01-05: Winter break #vacation #milestone

2024-01-08/2024-05-31: Back to school

2024-05-27/2024-05-31: Final project due #milestone

```

この要件定義書に基づいてタスクリストからmarkwhenドキュメントを作成することで、関連するタスクを適切にグループ化し、視覚的に分かりやすいタイムラインを簡単に作成できます。
