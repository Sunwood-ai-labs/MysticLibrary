---
title: "Quarkdown Slide Creation Prompt"
sourcePath: "prompts/documentation/quarkdown_slide_prompt-v1_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/quarkdown_slide_prompt-v1_EN.md`
> Japanese: [JA](/documentation/quarkdown_slide_prompt-v1)

# Quarkdown Slide Creation Prompt

## 📋 Basic Instructions

Please create professional presentation slides using Quarkdown from the following release notes/technical documentation.

```
[Insert release notes or technical documentation content here]
```

## 🎯 Requirements

### 📄 Basic Settings
- **Document Type**: Slide format
- **Theme**: `darko` with `minimal` layout
- **Language**: Japanese
- **Auto Page Break**: Max depth 2 levels

### 📱 Footer Settings
- Display author name
- Display document name in bold
- GitHub/repository link

## 🛠️ Quarkdown Functions to Use

### ✅ Recommended Functions (Use Actively)

#### 1. **Animation Effects**
```markdown
.fragment
    Content is displayed with animation
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
.text {string} size:{large} weight:{bold}
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

#### 7. **Custom Functions (Simple Ones Only)**
```markdown
.function {servicebox}
    name port desc:
    .fragment
        .box
            .text {**.name**} size:{large} weight:{bold}
            .text {Port: .port} size:{small}
            .desc
```

### ❌ Prohibited Functions (Cause Errors)

#### 1. **Color Specification in Container Function**
```markdown
❌ .container background:{#color} color:{white} border:{1px solid #color}
✅ .container padding:{8px 16px}
```

#### 2. **Color Specification in Text Function**
```markdown
❌ .text {text} color:{#666}
✅ .text {text} size:{large} weight:{bold}
```

#### 3. **Invalid Size Values**
```markdown
❌ size:{x-large}
✅ size:{huge}
```

#### 4. **Complex Custom Functions**
```markdown
❌ Complex function definitions with many arguments
✅ Only functions with simple structure
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
            .text {🌟 [Main Value Proposition]} weight:{bold}
```

### 3. **Feature Introduction Slide**
```markdown
# ✨ Major New Features

## 🏗️ [Category Name]

.servicebox {[Feature Name]} port:{[Port]} desc:{[Detailed Description]}

## 🎮 [Special Feature] - 🌟 **Featured Feature**

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
        [Closing sentence]

.fragment
    .container alignment:{center} padding:{24px 0}
        .box
            .text {**⭐ [Call to Action Message]**} weight:{bold} size:{large}
```

## 🎨 Visual Improvement Tips

### 1. **Progressive Information Disclosure**
- Use `.fragment` on almost all elements
- Display information in order of importance

### 2. **Visual Hierarchy**
- Enclose important information with `.box`
- Utilize sizes (`tiny`, `small`, `normal`, `medium`, `large`, `huge`)
- Express importance with weight (`weight:{bold}`)

### 3. **Layout Innovation**
- Group related information with `.row` or `.column`
- Ensure appropriate spacing with `gap` parameter
- Unify alignment with `alignment`

### 4. **Information Structuring**
- Use tables for important specification information
- Use code blocks for technical content
- Use lists for concise item enumeration

## ⚠️ Notes

1. **Error Avoidance**: Use only verified color specifications and size values
2. **Readability Priority**: Don't cram too much information, ensure appropriate whitespace
3. **Consistency**: Unify same type of information with same style
4. **Animation**: Use `.fragment` effectively to create storytelling

## 📋 Final Checklist

- [ ] `.doctype {slides}` is set
- [ ] Footer is properly configured
- [ ] Each slide has appropriate title
- [ ] Animation effects added with `.fragment`
- [ ] `.box` used for important information
- [ ] Layout is organized
- [ ] Not using functions that cause errors
- [ ] Table of contents (`.tableofcontents`) is placed at the end

---

Please create attractive Quarkdown slides from the provided release notes or technical documentation following this prompt.


# Quarkdown Slide Example

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
    <!-- 200px width, auto height -->
    !(200)[Quarkdown](img/banner.png)

    <!-- auto width, 2cm height -->
    !(_*2cm)[Quarkdown](img/banner.png)

    <!-- 2-inch width, 2-centimeter height -->
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
