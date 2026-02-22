---
title: Quarkdown Slide Creation V1
description: Prompt for creating professional presentation slides using Quarkdown from release notes or technical documentation
category: docs
intent: quarkdown-slide-prompt
audience:
  - Presenters
  - Technical writers
  - Release managers
input_requirements:
  - Release notes or technical documentation content
tags:
  - Quarkdown
  - Slides
  - Presentation
  - Release notes
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Quarkdown Slide Creation V1

A prompt for creating professional presentation slides using Quarkdown from release notes or technical documentation.

## Intended Use

- Converting release notes to slides
- Creating presentations from technical documentation
- Making project overview slides

## Prompt Content

```text
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
```

## How to Use

1. Paste the above prompt into your AI chat tool
2. Replace `[Insert release notes or technical documentation content here]` with your text
3. Save the generated Quarkdown code as a .qmd file
4. Generate slides with Quarkdown

## Input Example

```text
# Release Notes: MyApp v2.0

## New Features
- User authentication added
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
        .text {**Next Generation App Experience**} size:{huge} weight:{bold}

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

# ✨ Major New Features

.fragment
    .box
        User authentication added

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
- Avoid color specifications as they can cause errors
- Only use custom functions with simple structures
- Set `.doclang {Japanese}` when using Japanese text
```
