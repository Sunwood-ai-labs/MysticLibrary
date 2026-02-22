---
title: "🚀 Repository Name: v[x.y.z] - [YYYY-MM-DD]"
sourcePath: "prompts/coding/Roo-cline/task3_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/task3_EN.md`
> Japanese: [JA](/coding/Roo-cline/task3)


To execute the following command, first identify tasks and register them as issues,

When changing files, commit with the issue number,

Also, report progress via comments,

## Command

Create Japanese release notes for v0.1.0 using the following commands:

git diff --name-only --diff-filter=AMCRD tag1 tag2 > ./tmp/list.txt
git diff --diff-filter=AMCRD tag1 tag2 > ./tmp/diff.txt

Repository is below:
https://github.com/Sunwood-ai-labs/command-executor-mcp-server

Use the following SVG for header image:
![](https://raw.githubusercontent.com/Sunwood-ai-labs/command-executor-mcp-server/refs/heads/master/assets/release-header-v0.1.0.svg)

## Release Note Template
```
# 🚀 Repository Name: v[x.y.z] - [YYYY-MM-DD]

![](https://raw.githubusercontent.com/Sunwood-ai-labs/command-executor-mcp-server/refs/heads/master/assets/release-header-v0.1.0.svg)

## 主な変更点 / Highlights

製品バージョン `x.y.z` では以下の改善が行われました：

- 🎯 [主要な変更点1]
- ⚡️ [主要な変更点2]
- 🔧 [主要な変更点3]

## ✨ 新機能 / New Features

### ⭐️ [新機能タイトル]
- 機能の詳細説明
- 関連Issue: #xxx
- 関連PR: #xxx

## 🔧 改善 / Improvements

- [改善内容1] (#PR番号)
- [改善内容2] (#PR番号)

## 🐛 バグ修正 / Bug Fixes

- [修正内容1] (#Issue番号)
- [修正内容2] (#Issue番号)

## ⚠️ Breaking Changes

このバージョンには以下の破壊的変更が含まれています：

- [破壊的変更の内容]
- 移行方法: [説明]

## 📝 その他の変更 / Other Changes

- [その他の変更内容]
- [ドキュメントの更新]
- [依存関係の更新]

## 📦 アップグレード方法 / How to Upgrade

```bash
# パッケージマネージャーを使用している場合
npm install [パッケージ名]@latest

# または
yarn add [パッケージ名]@latest
```

## 🙏 謝辞 / Acknowledgements

このリリースに貢献してくださった皆様に感謝いたします：

- @username1
- @username2

---
**Full Changelog**: [v1.0.0...v1.1.0](リンク)
```
