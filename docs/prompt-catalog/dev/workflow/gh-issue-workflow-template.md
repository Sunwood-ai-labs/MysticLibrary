---
title: GitHub Issueワークフローテンプレート
description: ghコマンドを使用してissue作成からクローズまでを行うワークフローテンプレート
category: dev
intent: gh-issue-workflow-template
audience:
  - 開発者
  - チーム開発メンバー
input_requirements:
  - GitHubリポジトリ
  - ghコマンドのインストールと認証
tags:
  - github
  - issue
  - workflow
  - gh
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issueワークフローテンプレート

ghコマンドを使用してissue作成からクローズまでを行うワークフローテンプレートです。

## 想定用途

- GitHub Issueを活用した開発ワークフロー
- 作業内容をissueで管理して進捗を追跡する
- issue番号を付与したコミットで関連付けを明確にする

## プロンプト本文

```text
上記についてghコマンドでissueを作成してから

進捗レポートをissueに報告して、issue番号を付与したコミットをしてからpushしてクローズして

issueやコミットの内容は日本語にして後から見たときに分かるようにして

絵文字を付与して可読性を上げて

コミットはこまめに分割してコミットして
```

## 使い方

1. 作業内容をAIに説明
2. ghコマンドでissueが作成される
3. 進捗レポートがissueに報告される
4. issue番号を付与したコミットが作成される
5. プッシュ後にissueがクローズされる

## 入力例

```
ユーザー認証機能を実装して
```

## 出力例

1. gh issue createでissueが作成される
2. 進捗レポートがissueコメントで報告される
3. #[ISSUE_NUMBER]を付与したコミットが作成される
4. プッシュ後にissueがクローズされる

## 注意点

- ghコマンドがインストールされている必要があります
- ghコマンドが認証されている必要があります
- コミットは細かく分割されます
