---
title: "Roo-Cline 日本語リリースノート作成タスク"
description: "git diff とヘッダー画像を使い、日本語のリリースノートを issue ベースで作成するためのタスクプロンプト。"
canonical_id: "dev/workflow/roo-cline-ja-release-notes-task"
canonical_doc: "docs/prompt-catalog/dev/workflow/roo-cline-ja-release-notes-task.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/dev/workflow/roo-cline-ja-release-notes-task.md. Edit docs/ instead. -->

下記の指令を遂行するために、まずはタスクを洗い出してissueに登録して

ファイルを変更した場合はissue番号を付与してコミットして

また、進捗報告はコメントで実施して

## 指令

下記のコマンドを使用してv0.1.0の日本語のリリースノートを作成して

git diff --name-only --diff-filter=AMCRD tag1 tag2 > ./tmp/list.txt
git diff --diff-filter=AMCRD tag1 tag2 > ./tmp/diff.txt

リポジトリは下記です
https://github.com/Sunwood-ai-labs/command-executor-mcp-server

ヘッダー画像のSVGは下記を使用して
![](https://raw.githubusercontent.com/Sunwood-ai-labs/command-executor-mcp-server/refs/heads/master/assets/release-header-v0.1.0.svg)

## リリースノートのテンプレート
```
# 🚀 リポジトリ名：v[x.y.z] - [YYYY-MM-DD]

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
