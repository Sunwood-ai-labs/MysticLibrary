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
