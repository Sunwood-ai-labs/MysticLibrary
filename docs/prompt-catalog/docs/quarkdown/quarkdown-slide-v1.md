---
title: Quarkdownスライド作成 V1
description: リリースノートや技術文書からQuarkdownを使用してプロフェッショナルなプレゼンテーションスライドを作成するプロンプト
category: docs
intent: quarkdown-slide-prompt
audience:
  - プレゼンテーター
  - 技術文書作成者
  - リリース担当者
input_requirements:
  - リリースノートまたは技術文書の内容
tags:
  - Quarkdown
  - スライド
  - プレゼンテーション
  - リリースノート
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Quarkdownスライド作成 V1

リリースノートや技術文書から、Quarkdownを使用してプロフェッショナルなプレゼンテーションスライドを作成するためのプロンプトです。

## 想定用途

- リリースノートのスライド化
- 技術文書のプレゼンテーション作成
- プロジェクト概要のスライド作成

## プロンプト本文

```text
# Quarkdownスライド作成プロンプト

## 📋 基本指示

以下のリリースノート/技術文書から、Quarkdownを使用してプロフェッショナルなプレゼンテーションスライドを作成してください。

```
[ここにリリースノートや技術文書の内容を挿入]
```

## 🎯 要求仕様

### 📄 基本設定
- **文書タイプ**: スライド形式
- **テーマ**: `darko` with `minimal` レイアウト
- **言語**: 日本語
- **自動改ページ**: 最大深度2レベル

### 📱 フッター設定
- 作者名表示
- 文書名を太字で表示
- GitHub/リポジトリリンク

## 🛠️ 使用すべきQuarkdown機能

### ✅ 推奨機能（積極的に使用）

#### 1. **アニメーション効果**
```markdown
.fragment
    内容がアニメーションで表示される
```

#### 2. **ボックス強調**
```markdown
.box
    重要な情報をボックスで囲む
```

#### 3. **レイアウト制御**
```markdown
.row alignment:{spaceevenly} gap:{2cm}
    複数カラムの横並び

.column gap:{12px}
    縦方向の要素配置
```

#### 4. **テキスト装飾**
```markdown
.text {文字列} size:{large} weight:{bold}
```

#### 5. **コンテナ制御**
```markdown
.container alignment:{center} padding:{16px 0}
    中央揃えとパディング調整
```

#### 6. **空白制御**
```markdown
.whitespace
    適切な空白スペース
```

#### 7. **カスタム関数（シンプルなもののみ）**
```markdown
.function {servicebox}
    name port desc:
    .fragment
        .box
            .text {**.name**} size:{large} weight:{bold}
            .text {ポート: .port} size:{small}
            .desc
```

### ❌ 使用禁止機能（エラーの原因）

#### 1. **container関数での色指定**
```markdown
❌ .container background:{#color} color:{white} border:{1px solid #color}
✅ .container padding:{8px 16px}
```

#### 2. **text関数での色指定**
```markdown
❌ .text {文字} color:{#666}
✅ .text {文字} size:{large} weight:{bold}
```

#### 3. **無効なサイズ値**
```markdown
❌ size:{x-large}
✅ size:{huge}
```

#### 4. **複雑なカスタム関数**
```markdown
❌ 引数の多い複雑な関数定義
✅ シンプルな構造の関数のみ
```

## 📐 スライド構成テンプレート

### 1. **タイトルスライド**
```markdown
# 🚀 [プロジェクト名] [バージョン]

.column alignment:{center}
    .fragment
        .text {**[サブタイトル]**} size:{huge} weight:{bold}

    .fragment
        .text {[日付]} size:{large}

    .fragment
        .row alignment:{center} gap:{3cm}
            .box
                **[特徴1]**
            .box
                **[特徴2]**
            .box
                **[特徴3]**
```

### 2. **概要スライド**
```markdown
# 🎉 概要

.fragment
    [プロジェクトの説明文]

.fragment
    .box
        [重要なポイント]

.fragment
    .container alignment:{center} padding:{20px 0}
        .box
            .text {🌟 [主要な価値提案]} weight:{bold}
```

### 3. **機能紹介スライド**
```markdown
# ✨ 主要な新機能

## 🏗️ [カテゴリ名]

.servicebox {[機能名]} port:{[ポート]} desc:{[詳細説明]}

## 🎮 [特別機能] - 🌟 **注目機能**

.fragment
    .container alignment:{center} padding:{16px 0}
        .text {**[機能の説明]**} size:{large} weight:{bold}

.fragment
    .column gap:{8px}
        .box
            **[特徴1]**の説明
        .box
            **[特徴2]**の説明
```

### 4. **技術仕様スライド**
```markdown
# 🛠️ 技術仕様

## [サブセクション]

.fragment
    | 項目 | 値 | 説明 | 技術 |
    |-----|----|----|-----|
    | **[項目1]** | [値1] | [説明1] | [技術1] |
```

### 5. **手順説明スライド**
```markdown
# 🚀 [手順名]

## ステップ [番号]: [手順名]

.fragment
    ```bash
    [コマンド例]
    ```
```

### 6. **利用場面スライド**
```markdown
# 🎯 利用場面

## [対象ユーザー]向け

.column gap:{12px}
    .fragment
        .box
            **[利点1]** - [詳細説明]

    .fragment
        .box
            **[利点2]** - [詳細説明]
```

### 7. **まとめスライド**
```markdown
# まとめ

.fragment
    .container alignment:{center} padding:{20px 0}
        .text {**[重要なメッセージ]**} size:{huge} weight:{bold}

.fragment
    .box
        [締めくくりの文章]

.fragment
    .container alignment:{center} padding:{24px 0}
        .box
            .text {**⭐ [行動促進メッセージ]**} weight:{bold} size:{large}
```

## 🎨 視覚的改善のコツ

### 1. **段階的情報公開**
- ほぼ全ての要素に `.fragment` を使用
- 情報の重要度順に表示

### 2. **視覚的階層**
- 重要な情報は `.box` で囲む
- サイズ（`tiny`, `small`, `normal`, `medium`, `large`, `huge`）を活用
- 太さ（`weight:{bold}`）で重要度を表現

### 3. **レイアウトの工夫**
- 関連情報は `.row` または `.column` でグループ化
- `gap` パラメータで適切な間隔を確保
- `alignment` で整列を統一

### 4. **情報の構造化**
- 表組みは重要な仕様情報に使用
- コードブロックは技術的な内容に使用
- リストは簡潔な項目列挙に使用

## ⚠️ 注意事項

1. **エラー回避**: 色指定やサイズ値は検証済みのもののみ使用
2. **可読性重視**: 情報を詰め込みすぎず、適切な空白を確保
3. **一貫性**: 同種の情報は同じスタイルで統一
4. **アニメーション**: `.fragment` を効果的に使用してストーリー性を演出

## 📋 最終チェックリスト

- [ ] `.doctype {slides}` が設定されている
- [ ] フッターが適切に設定されている
- [ ] 各スライドに適切なタイトルがある
- [ ] `.fragment` でアニメーション効果を追加
- [ ] 重要な情報に `.box` を使用
- [ ] レイアウトが整理されている
- [ ] エラーの原因となる機能を使用していない
- [ ] 目次（`.tableofcontents`）が最後に配置されている
```

## 使い方

1. 上記のプロンプトをAIチャットツールに貼り付け
2. `[ここにリリースノートや技術文書の内容を挿入]` の部分に変換したいテキストを入力
3. 生成されたQuarkdownコードを.qmdファイルとして保存
4. Quarkdownでスライドを生成

## 入力例

```text
# リリースノート: MyApp v2.0

## 新機能
- ユーザー認証の追加
- ダークテーマ対応
- パフォーマンス改善

## 技術仕様
- フレームワーク: React 18
- 認証: OAuth 2.0
- UI: Tailwind CSS
```

## 出力例

```qmd
.docname {MyApp v2.0 リリース}
.docauthor {Development Team}
.doctype {slides}
.doclang {Japanese}
.theme {darko} layout:{minimal}
.autopagebreak maxdepth:{2}

.footer
    .docauthor

    **.docname**

    [GitHub](https://github.com/example/myapp)

# 🚀 MyApp v2.0

.column alignment:{center}
    .fragment
        .text {**次世代アプリ体験**} size:{huge} weight:{bold}

    .fragment
        .text {2026-02-23} size:{large}

    .fragment
        .row alignment:{center} gap:{3cm}
            .box
                **認証**
            .box
                **ダークテーマ**
            .box
                **高速化**

# ✨ 主要な新機能

.fragment
    .box
        ユーザー認証の追加

.fragment
    .box
        ダークテーマ対応

.fragment
    .box
        パフォーマンス改善

.tableofcontents maxdepth:{2}
```

## 注意点

- Quarkdownのバージョンにより使用可能な機能が異なる場合があります
- 色指定はエラーの原因となるため避けてください
- カスタム関数はシンプルな構造のものだけ使用してください
- 日本語を使用する場合は `.doclang {Japanese}` を設定してください
```

---

# Quarkdown Slide Creation V1

Prompt for creating professional presentation slides using Quarkdown from release notes and technical documents.

## Intended Use

- Converting release notes to slides
- Creating technical document presentations
- Creating project overview slides

## Prompt Content

```text
# Quarkdown Slide Creation Prompt

## 📋 Basic Instructions

Create a professional presentation slide using Quarkdown from the following release note/technical document.

```
[Insert release note or technical document content here]
```

## 🎯 Requirements

### 📄 Basic Settings
- **Document Type**: Slide format
- **Theme**: `darko` with `minimal` layout
- **Language**: Japanese
- **Auto page break**: Maximum depth 2 levels

### 📱 Footer Settings
- Display author name
- Display document name in bold
- GitHub/Repository link

## 🛠️ Quarkdown Features to Use

### ✅ Recommended Features (Use Actively)

#### 1. **Animation Effects**
```markdown
.fragment
    Content appears with animation
```

#### 2. **Box Emphasis**
```markdown
.box
    Enclose important information in a box
```

#### 3. **Layout Control**
```markdown
.row alignment:{spaceevenly} gap:{2cm}
    Multiple columns side by side

.column gap:{12px}
    Vertical element arrangement
```

#### 4. **Text Decoration**
```markdown
.text {String} size:{large} weight:{bold}
```

#### 5. **Container Control**
```markdown
.container alignment:{center} padding:{16px 0}
    Center alignment and padding adjustment
```

#### 6. **Whitespace Control**
```markdown
.whitespace
    Appropriate whitespace
```

#### 7. **Custom Functions (Simple Only)**
```markdown
.function {servicebox}
    name port desc:
    .fragment
        .box
            .text {**.name**} size:{large} weight:{bold}
            .text {Port: .port} size:{small}
            .desc
```

### ❌ Prohibited Features (Cause Errors)

#### 1. **Color Specification in Container Function**
```markdown
❌ .container background:{#color} color:{white} border:{1px solid #color}
✅ .container padding:{8px 16px}
```

#### 2. **Color Specification in Text Function**
```markdown
❌ .text {Text} color:{#666}
✅ .text {Text} size:{large} weight:{bold}
```

#### 3. **Invalid Size Values**
```markdown
❌ size:{x-large}
✅ size:{huge}
```

#### 4. **Complex Custom Functions**
```markdown
❌ Complex function definitions with many arguments
✅ Only simple structure functions
```

## 📐 Slide Composition Template

### 1. **Title Slide**
```markdown
# 🚀 [Project Name] [Version]

.column alignment:{center}
    .fragment
        .text {**[Subtitle]**} size:{huge} weight:{bold}

    .fragment
        .text {[Date]} size:{large}

    .fragment
        .row alignment:{center} gap:{3cm}
            .box
                **[Feature 1]**
            .box
                **[Feature 2]**
            .box
                **[Feature 3]**
```

### 2. **Overview Slide**
```markdown
# 🎉 Overview

.fragment
    [Project description]

.fragment
    .box
        [Important points]

.fragment
    .container alignment:{center} padding:{20px 0}
        .box
            .text {🌟 [Main value proposition]} weight:{bold}
```

### 3. **Feature Introduction Slide**
```markdown
# ✨ Main New Features

## 🏗️ [Category Name]

.servicebox {[Feature Name]} port:{[Port]} desc:{[Detailed Description]}

## 🎮 [Special Feature] - 🌟 **Featured**

.fragment
    .container alignment:{center} padding:{16px 0}
        .text {**[Feature Description]**} size:{large} weight:{bold}

.fragment
    .column gap:{8px}
        .box
            **[Feature 1]** description
        .box
            **[Feature 2]** description
```

### 4. **Technical Specifications Slide**
```markdown
# 🛠️ Technical Specifications

## [Subsection]

.fragment
    | Item | Value | Description | Technology |
    |-----|----|----|-----|
    | **[Item 1]** | [Value 1] | [Description 1] | [Technology 1] |
```

### 5. **Procedure Explanation Slide**
```markdown
# 🚀 [Procedure Name]

## Step [Number]: [Procedure Name]

.fragment
    ```bash
    [Command example]
    ```
```

### 6. **Use Cases Slide**
```markdown
# 🎯 Use Cases

## For [Target Users]

.column gap:{12px}
    .fragment
        .box
            **[Benefit 1]** - [Detailed description]

    .fragment
        .box
            **[Benefit 2]** - [Detailed description]
```

### 7. **Summary Slide**
```markdown
# Summary

.fragment
    .container alignment:{center} padding:{20px 0}
        .text {**[Important Message]**} size:{huge} weight:{bold}

.fragment
    .box
        [Closing text]

.fragment
    .container alignment:{center} padding:{24px 0}
        .box
            .text {**⭐ [Call to Action]**} weight:{bold} size:{large}
```

## 🎨 Visual Improvement Tips

### 1. **Progressive Information Disclosure**
- Use `.fragment` on almost all elements
- Display information in order of importance

### 2. **Visual Hierarchy**
- Enclose important information with `.box`
- Utilize sizes (`tiny`, `small`, `normal`, `medium`, `large`, `huge`)
- Express importance with weight (`weight:{bold}`)

### 3. **Layout Creativity**
- Group related information with `.row` or `.column`
- Ensure appropriate spacing with `gap` parameter
- Unify alignment with `alignment`

### 4. **Information Structuring**
- Use tables for important specification information
- Use code blocks for technical content
- Use lists for concise item enumeration

## ⚠️ Important Notes

1. **Error Avoidance**: Use only verified color specifications and size values
2. **Readability First**: Don't overcrowd information, ensure appropriate whitespace
3. **Consistency**: Unify style for same type of information
4. **Animation**: Effectively use `.fragment` to create storytelling

## 📋 Final Checklist

- [ ] `.doctype {slides}` is set
- [ ] Footer is properly configured
- [ ] Each slide has appropriate title
- [ ] Added animation effects with `.fragment`
- [ ] Used `.box` for important information
- [ ] Layout is organized
- [ ] Not using features that cause errors
- [ ] Table of contents (`.tableofcontents`) is placed at the end
```

## How to Use

1. Paste the above prompt into AI chat tool
2. Enter text to convert in `[Insert release note or technical document content here]` section
3. Save generated Quarkdown code as .qmd file
4. Generate slides with Quarkdown

## Input Example

```text
# Release Note: MyApp v2.0

## New Features
- Added user authentication
- Dark theme support
- Performance improvements

## Technical Specs
- Framework: React 18
- Authentication: OAuth 2.0
- UI: Tailwind CSS
```

## Output Example

```qmd
.docname {MyApp v2.0 Release}
.docauthor {Development Team}
.doctype {slides}
.doclang {Japanese}
.theme {darko} layout:{minimal}
.autopagebreak maxdepth:{2}

.footer
    .docauthor

    **.docname**

    [GitHub](https://github.com/example/myapp)

# 🚀 MyApp v2.0

.column alignment:{center}
    .fragment
        .text {**Next-Generation App Experience**} size:{huge} weight:{bold}

    .fragment
        .text {2026-02-23} size:{large}

    .fragment
        .row alignment:{center} gap:{3cm}
            .box
                **Authentication**
            .box
                **Dark Theme**
            .box
                **Performance**

# ✨ Main New Features

.fragment
    .box
        Added user authentication

.fragment
    .box
        Dark theme support

.fragment
    .box
        Performance improvements

.tableofcontents maxdepth:{2}
```

## Notes

- Available features may vary depending on Quarkdown version
- Avoid color specifications as they cause errors
- Use only simple structure custom functions
- Set `.doclang {Japanese}` when using Japanese
```
