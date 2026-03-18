---
title: Roo-Cline リリースヘッダー SVG 作成タスク
description: 既存 SVG を参考に、リポジトリ名とバージョン表記を含むリリースノート用ヘッダー画像を作るためのタスクプロンプト。
category: dev
intent: roo-cline-release-header-svg-task
prompt_source: prompts/coding/Roo-cline/task2_JP.md
audience:
  - 開発者
  - リリース担当者
  - デザイナー
input_requirements:
  - 参考 SVG パス
  - 対象リポジトリ名
  - 表示したいバージョン
tags:
  - roo-cline
  - workflow
  - issue-driven
status: active
owner: prompt-lb-team
last_reviewed: 2026-03-18
---

# Roo-Cline リリースヘッダー SVG 作成タスク

## 想定用途

- リリースノートの見出しアセットを issue 駆動で作りたいとき
- 既存ヘッダー資産を流用しつつリポジトリごとに出し分けたいとき

## プロンプト本文

````text
下記の指令を遂行するために、まずはタスクを洗い出してissueに登録して

ファイルを変更した場合はissue番号を付与してコミットして

また、進捗報告はコメントで実施して

## 指令

リリースノートのヘッダー画像を作成して

ヘッダー画像のSVGは
C:\Prj\MCP\command-executor\assets\header.svg

を参考にしてリリースノート用にVerが大きく書かれたSVGをアセットフォルダに作成して
サブタイトルにはリポジトリ名を記載して
````

## 注意点

- 画像制作そのものだけでなく、Issue 登録と進捗報告の運用前提が含まれています。
