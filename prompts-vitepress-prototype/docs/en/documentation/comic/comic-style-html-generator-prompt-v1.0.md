---
title: "Comic-style HTML Generator Prompt V1.0"
sourcePath: "prompts/documentation/comic/comic-style-html-generator-prompt-v1.0_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/comic/comic-style-html-generator-prompt-v1.0_EN.md`
> Japanese: [JA](/documentation/comic/comic-style-html-generator-prompt-v1.0)

# Comic-style HTML Generator Prompt V1.0

## Instructions
Please convert the following text into an HTML page with a manga-style/comic-style design. Express technical documents and explanatory texts attractively with a fun and readable design.

## Design Requirements

### 🎨 Overall Style
- **Comic/manga-style** design
- **Colorful gradient** background
- **Panel-style layout** to separate each section
- **Speech bubble-style** important boxes
- **Handwritten-style** fonts recommended

### 📦 Panel Design
- Express each section as a **comic panel**
- **Thick borders** (4px or more) and **drop shadows**
- **Colorful borders** (gradients recommended)
- **Rounded corners** for a friendly feel

### 💬 Text Area
- Highlight important information in **speech bubble-style boxes**
- **Keywords** and **commands** in standout styles
- Use numbers and emojis for **step-by-step explanations**
- Dedicated boxes for **warnings** and **success** messages

### 🌈 Color Palette
- **Main color**: #ff6b6b (red system)
- **Accent**: #4ecdc4 (teal system)
- **Sub-colors**: #45b7d1 (blue system), #96ceb4 (green system)
- **Gradients**: Combinations of 2 or more colors
- **Code blocks**: Black background + green text

### ⚡ Interactive Elements
- Add movement to elements with **hover effects**
- **Animations** to make titles stand out
- **Responsive** design for mobile compatibility
- Actively use **emojis**

### 📱 Layout Structure
1. **Hero section**: Large title + subtitle
2. **Table of contents**: Easy-to-read navigation with emojis
3. **Content panels**: Panel-divided sections
4. **Code blocks**: Terminal-style
5. **Summary**: Emphasize important points

### 🔧 Technical Requirements
- Use only **HTML5** + **CSS3**
- Japanese fonts from **Google Fonts** (Noto Sans JP recommended)
- **Pure CSS** animations
- Layout with **Flexbox** or **Grid**
- Container width limit **max-width: 1000px**

### 📝 Content Conversion Rules
- **Headings** → Colorful titles + emojis
- **Paragraphs** → Styled with readable line spacing
- **Lists** → With emojis or special styles
- **Code** → Terminal-style black background boxes
- **Important information** → Speech bubble-style boxes
- **Warnings/Notes** → Dedicated warning boxes
- **Success/Completion** → Dedicated success boxes

## 🎯 Output Format
Output as a complete HTML file including:
- `&lt;!DOCTYPE html&gt;` declaration
- Appropriate `&lt;head&gt;` section (meta, title, style)
- Responsive design support
- Active use of emojis and icons
- Fun and readable layout

## 📖 Input Text
Please convert the following text to comic-style HTML:

---

[Paste the text you want to convert here]

---

## 💡 Additional Instructions
- Maintain the **structure and content** of the original text
- Maintain **technical accuracy**
- Maximize **visual appeal**
- Prioritize **usability**
- Provide a **fun learning experience**

## 🏗️ HTML Template Example

Please generate HTML with the following structure and style:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Title]</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        .hero {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            padding: 40px;
            margin-bottom: 30px;
            border: 5px solid #ff6b6b;
            position: relative;
        }

        h1 {
            font-size: 3em;
            font-weight: 900;
            color: #ff6b6b;
            text-align: center;
            text-shadow: 3px 3px 0px #333;
            transform: rotate(-2deg);
        }

        .comic-panel {
            background: white;
            border: 4px solid #333;
            border-radius: 15px;
            margin: 20px 0;
            padding: 25px;
            box-shadow: 5px 5px 0px #333;
            position: relative;
        }

        .comic-panel::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 20px;
            z-index: -1;
        }

        .speech-bubble {
            background: #fff;
            border: 3px solid #333;
            border-radius: 20px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
            box-shadow: 3px 3px 0px #333;
        }

        .speech-bubble::before {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 30px;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid #333;
        }

        .code-block {
            background: #1a1a1a;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            border: 3px solid #333;
            box-shadow: inset 0 0 20px rgba(0,255,0,0.1);
        }

        .warning-box {
            background: #fff3cd;
            border: 3px solid #ffc107;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }

        .success-box {
            background: #d4edda;
            border: 3px solid #28a745;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎯 Title</h1>
            <p class="subtitle">Subtitle</p>
        </div>

        <div class="comic-panel">
            <h2>📖 Section 1</h2>
            <div class="speech-bubble">
                <p>Important explanation here</p>
            </div>

            <div class="code-block">
Commands or code here
            </div>

            <div class="warning-box">
                <p>⚠️ Notes</p>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🎨 Styling Element Usage

### Class Names and Uses
- `.hero` - Main title area
- `.comic-panel` - Each content section
- `.speech-bubble` - Important explanations/points
- `.code-block` - Commands/code examples
- `.warning-box` - Note/warning messages
- `.success-box` - Success/completion messages
- `.feature-list` - Feature list
- `.toc` - Table of contents

### Emoji Usage Examples
- 🎯 - Main points
- 📖 - Explanations/descriptions
- 🔧 - Settings/tools
- ⚡ - Important features
- 💡 - Hints/tips
- ⚠️ - Warnings/notes
- ✅ - Success/completion
- 🎮 - Operations/commands

Using this prompt and template, any text can be converted into an attractive comic-style HTML page!
