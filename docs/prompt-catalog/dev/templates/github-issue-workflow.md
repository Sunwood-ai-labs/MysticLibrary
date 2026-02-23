---
title: GitHub Issueワークフローテンプレート
description: Git差分からGitHub issueを作成し、進捗報告・コミット・プッシュ・クローズまでの一連のフローを管理するテンプレート
category: dev
intent: github-issue-workflow
audience:
  - チーム開発メンバー
  - OSS開発者
  - プロジェクト管理者
input_requirements:
  - Gitリポジトリへのアクセス
  - ghコマンドの認証設定
  - 作業内容の差分情報
tags:
  - github
  - issue-management
  - workflow
  - git
  - task-management
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issueワークフローテンプレート

## 想定用途

- Git差分からGitHub issueを自動作成する
- Issueベースのタスク管理フローを確立する
- 進捗報告とコミット履歴を紐付ける

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

1. Git差分を確認する
2. `gh issue create`でissueを作成する
3. 作業中の進捗をissueコメントで報告する
4. Issue番号を含むコミットメッセージでコミットする
5. Pushしてissueをクローズする

## 入力例

```text
現在のGit差分からissueを作成し、作業を管理してください。
```

## 出力例

```text
## Git差分を確認しました：
- src/utils.ts: 新しいヘルパー関数を追加
- tests/utils.test.ts: テストを追加

## Issueを作成しました：
#12 - ✨ ユーティリティ関数の追加とテスト実装

## 進捗報告：
ヘルパー関数の実装を完了しました。次にテストを実装します。

## コミット：
✨ ユーティリティ関数を実装 #12
📝 テストを追加 #12
```

## 注意点

- Issueタイトルは具体的に記述する
- コミットメッセージには必ずissue番号を含める
- 進捗報告はこまめに行う
- 絵文字を使って視認性を高める
- コミットは論理的に分割する
