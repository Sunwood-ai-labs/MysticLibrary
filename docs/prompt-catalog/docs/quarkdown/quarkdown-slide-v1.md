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
