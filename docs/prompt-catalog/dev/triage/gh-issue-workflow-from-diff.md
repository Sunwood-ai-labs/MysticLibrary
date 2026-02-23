---
title: GitHub Issueワークフロー（差分から）
description: Git差分からIssue作成〜コミット〜プッシュ〜クローズまでの一連のワークフロー
category: dev
intent: gh-issue-workflow-from-diff
audience:
  - 開発者
  - プロジェクトマネージャー
  - チームリーダー
input_requirements:
  - Git差分情報
tags:
  - GitHub
  - Issue管理
  - ワークフロー
  - Git
  - チケット駆動開発
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# GitHub Issueワークフロー（差分から）

## 想定用途

- Git差分からIssueを作成
- 進捗管理とIssue報告
- Issue番号付きコミット
- プッシュとIssueクローズ

## プロンプト本文

```text
gitの差分から

ghコマンドでissueを作成してから

進捗レポートをissueに報告して、issue番号を付与したコミットしてからpushしてクローズして

issueやコミットの内容は後から見たときに分かるようにして

絵文字を付与して可読性を上げて

コミットはこまめに分割してコミットして
```

## 使い方

1. Git差分を確認
2. プロンプトをAIに入力
3. Issue作成からクローズまで自動実行

## 入力例

```
[Git diffの出力や変更内容]
```

## 注意点

- Issueには適切なタイトルと説明を付ける
- コミットメッセージにはIssue番号を含める
- 進捗報告をIssueにコメントする
- 絵文字を使って可読性を上げる
- コミットは細かく分ける
