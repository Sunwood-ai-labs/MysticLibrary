---
title: "Quarkdownスライド作成プロンプト"
sourcePath: "prompts/documentation/quarkdown_slide_prompt-v1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/quarkdown_slide_prompt-v1_JP.md`
> 英語版: [EN](/en/documentation/quarkdown_slide_prompt-v1)

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

---

このプロンプトに従って、提供されたリリースノートや技術文書から魅力的なQuarkdownスライドを作成してください。


# Quarkdownスライドの例

```qmd

.docname {Quarkdown demo}
.docauthor {iamgio}
.doctype {slides}
.doclang {English}
.theme {darko} layout:{minimal}
.autopagebreak maxdepth:{2}

.footer
    .docauthor

    **.docname**

    [GitHub](https://github.com/iamgio/quarkdown)


.column
    !(_x100)[Quarkdown logo](img/banner.svg)

    Markdown with superpowers

# Versatile

**One source code, many use cases.**
Export your Quarkdown project as:

.function {poweredby}
    credits:
    .text {powered by .credits} size:{tiny} variant:{smallcaps}

- .fragment
      beautiful slides for your next presentation, just like this one.  
      .poweredby {[reveal.js](https://revealjs.com/)}
- .fragment
      a distinguished book.  
      .poweredby {[paged.js](https://pagedjs.org/)}
- .fragment
      a plain document.

.fragment
    .whitespace

    *...in just one line, within your code.*

    .row alignment:{center} gap:{5mm}
        ```
        .doctype {slides}
        ```
        ```
        .doctype {paged}
        ```
        ```
        .doctype {plain}
        ```

# Same foundations...

.var {downarrow}
    .container padding:{6px 0 16px 0}
        .text {↓} weight:{bold} size:{large}

.var {rightarrow}
    .text {->} weight:{bold} size:{large}

Quarkdown's base features follow [**CommonMark**](https://spec.commonmark.org/) and [**GitHub Flavored Markdown**](https://github.github.com/gfm/) specifications,  
so that you'll feel at home typing code you're comfortable typing.

<!-- Shows a Quarkdown source as *both* its code AND its visual output. -->
<!-- Parameters: whether the output should be animated on interaction, -->
<!-- and whether the output should be displayed slightly above than expected (resets heading margin) -->

.function {sourceresult}
    shrinkvertical? animated? horizontal? source:
    .node
    ---

    .var {snippet}
        .code {markdown}
            .source

    .var {ishorizontal} {.horizontal::otherwise {no}}

    .var {output}
        .container alignment:{center} fullwidth:{yes}
            .downarrow

        .var {voffset} {.shrinkvertical::ifpresent {@lambda .1::multiply {-1}}::otherwise {0}}

        .container textalignment:{center} margin:{.voffset 0 0 0} fullwidth:{yes}
            .source
            
    .ifnot {.ishorizontal}
        .snippet

        .let {.animated::otherwise {no}}
            .if {.1}
                .fragment
                    .output
            .ifnot {.1}
                .output
    
    .if {.ishorizontal}
        .row alignment:{spacearound}
            .snippet

            .rightarrow

            .container textalignment:{center} width:{50%}
                .source

.sourceresult shrinkvertical:{50} animated:{yes}
    ### Diving into _Quarkdown_
    
    Somebody once said:
    > Write once, run **anywhere**.
    
# ...brand-new everything

Go ahead to discover Quarkdown's capabilities.

# Functions

Call any function from the extensive [standard library](https://github.com/iamgio/quarkdown/tree/main/quarkdown-stdlib/src/main/kotlin/com/quarkdown/stdlib)
from your Markdown code.

```markdown
.somefunction {argument1} {argument2}
    Body argument
```

.fragment
    Or define your own:
    ```markdown
    .function {greet}
        to from:
        **Hello, .to** from .from!

    .greet {world} from:{Giorgio}
    ```

.fragment
    .text {**Hello, world** from Giorgio!} size:{small}

## Full layout control 

.sourceresult shrinkvertical:{50}
    .row alignment:{center} gap:{1cm}
        !(150x150)[Quarkdown](img/icon.png)
        
        .column cross:{start}
            .text {**Quarkdown is on GitHub!**} size:{large} variant:{smallcaps}
    
            https://github.com/iamgio/quarkdown

## Multi-file project

.sourceresult shrinkvertical:{40}
    .include {sources/other.qmd}

.whitespace

.fragment
    > Tip: functions declared in included files are imported as well.  
    > Use it to your advantage to make awesome libraries!

## File data: code

.sourceresult
    The constructor of the class `Point` is as follows:

    .code {java}
        .read {code/Point.java} lines:{5..8}

## File data: CSV

.sourceresult
    .csv {csv/people.csv}

## File data: Mermaid diagrams

.sourceresult
    .mermaid
        .read {mermaid/flow.mmd}

## Math

.sourceresult
    .var {radius} {8}

    If we try to calculate the **surface** of a circle of **radius .radius**,
    we'll find out it's **.pow {.radius} to:{2}::multiply {.pi}::truncate {2}**

## Charts

.sourceresult horizontal:{yes}
    .var {n} {100}
    
    .xychart
        .repeat {.n}
            .1::pow {2}::divide {100}
    
        .repeat {.n}
            .1::logn::multiply {10}

<<<

.column gap:{16px}
    ## Scripting {#scripting-basic}

    .text {Basic algorithm} size:{small}

.sourceresult
    .row alignment:{spacearound}
        .repeat {10}
            n:
            .if {.n::iseven}
                **.n** is even

<<<

.column gap:{12px}
    ## Scripting {#scripting-fibonacci}

    .text {Fibonacci sequence} size:{small}

.sourceresult shrinkvertical:{25}
    .var {t1} {0}
    .var {t2} {1}

    .table
        .foreach {0..8}
            n:
            | $ F_{.n} $ |
            |:----------:|
            |    .t1     |
            .var {tmp} {.sum {.t1} {.t2}}
            .t1 {.t2}
            .t2 {.tmp}

## Document customization

---

.container fullwidth:{yes}
    .grid columns:{2} gap:{1cm}
        **Metadata**
    
        ```markdown
        .docname {Quarkdown demo}
        .docauthor {iamgio}
        .doctype {slides}
        .doclang {english}
        ```
    
        **Layout and aesthetics**
    
        ```markdown
        .theme {darko} layout:{minimal}
        .pageformat {A4} orientation:{landscape}
        .slides transition:{zoom} speed:{fast}
        ```
    
        **Fixed content on each page**
    
        ```markdown
        .footer
            .docauthor
            
            **.docname**
            
            [GitHub](https://github.com/iamgio/quarkdown)
        ```

## Intuitive error handling

.sourceresult shrinkvertical:{30}
    .divide {x} by:{.pi}

    .grid columns:{3} alignment:{right}
        Hello, world!

# Enhanced base Markdown

**Not just functions.**  
The Quarkdown flavor introduces new features to the standard Markdown syntax.

## TeX formulas

.sourceresult
    Let $ F(u) $ be the ***Fourier Transform*** of the function $ f(x) $:
    
    $ F(u) = \int^{+\infty}_{-\infty} f(x) e^{-i 2\pi x} dx $

.poweredby {[KaTeX](https://katex.org)}

## Alerts

.sourceresult shrinkvertical:{25}
    > Note: did you know Quarkdown is a flexible tool to generate modern documents?

    > Tip: you might want to try it out. Feedback and suggestions are welcome!

    > Warning: it's a young project and some things may change in the near future.

## Quotation source

.sourceresult
    > To be, or not to be, that is the question.
    > - William Shakespeare, Hamlet

## Image size

.var {sizedimages}
    <\!-- 200px width, auto height -->
    !(200)[Quarkdown](img/banner.png)

    <\!-- auto width, 2cm height -->
    !(_*2cm)[Quarkdown](img/banner.png)
    
    <\!-- 2-inch width, 2-centimeter height -->
    !(2in*2cm)[Quarkdown](img/banner.png)

---

.code {markdown}
    .sizedimages

.downarrow

.row alignment:{spaceevenly} cross:{center}
    .sizedimages

## Labeled figure

.sourceresult shrinkvertical:{30}
    !(150x_)[Quarkdown](https://iamgio.eu/quarkdown/img/icon-light.png "The Quarkdown icon")

## Color preview

.sourceresult
    The color magenta's hexadecimal representation is `#FF00FF`.  
    The following are equivalent:
    - `rgb(255, 0, 255)`
    - `hsl(300, 100, 50)`
    - `hsv(300, 100, 100)`

# It's a wrap

You've seen the **key features** of Quarkdown - the door to making stunning documents is now open.  
The project is [open source](https://github.com/iamgio/quarkdown), still in development and **open to feedback and contributions**!

.box
    The **source code** of this presentation is available [**here**](https://github.com/iamgio/quarkdown/tree/main/demo).

Future plans include tutorials, wikis and docs. But for now, happy coding!

.tableofcontents maxdepth:{2}

```
