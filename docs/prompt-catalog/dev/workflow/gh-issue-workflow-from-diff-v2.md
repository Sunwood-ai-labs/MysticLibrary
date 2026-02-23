---
title: GitHub Issueワークフロー from diff V2
description: Git diffからGitHub Issueを作成し、進捗管理・コミット・クローズまでを行うワークフロー
category: dev
intent: gh-issue-workflow-from-diff-v2
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
  - git-diff
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issueワークフロー from diff V2

Git diffの結果からGitHub Issueを作成し、進捗管理・コミット・クローズまでを行うワークフロープロンプトです。

## 想定用途

- Git diffから作業内容を分析してissueを作成する
- issue番号を付与したコミットで作業を追跡する
- 進捗レポートをissueに報告する

## プロンプト本文

```text
下記の処理を実行して

# Git開発ワークフロー自動化プロンプト

1. 🔍 **作業前に変更状態を確認してください**
    ```
    git status
    git diff
    ```

2. 📝 **変更内容に基づいてissueを作成してください**
    ```
    # git statusとgit diffの結果から、必要な作業を特定してissueを作成
    gh issue create --title "✨ [git statusで確認した変更に関連するタスク名]" --body "## 📋 概要
[git diffで確認した変更の概要]

## 🎯 目的
[変更の目的]

## 📝 詳細
[git diffの結果から詳細な変更内容を記述]

## ⏰ 期限
[期限]"
    ```

3. 📊 **進捗レポートを issue に報告してください**
    ```
    gh issue comment [ISSUE_NUMBER] --body "## 🔄 進捗状況
[git statusで確認した現在の進捗率]%

## ✅ 完了した作業
[git diffで確認した完了済みの変更]

## 🚧 作業中
[git statusで確認した作業中のファイル]

## 🔜 次のステップ
[残りの変更予定]"
    ```

4. 🔄 **develop ブランチに移動してください**
    ```
    git checkout develop
    git pull origin develop
    ```

5. 🌿 **このissue用のブランチを作成してください**
    ```
    git checkout -b feature/[git diffで確認した機能名]-[ISSUE_NUMBER]
    ```

6. 💻 **変更内容に基づいてコミットしてください**
    - git statusとgit diffで確認した変更をもとにコミットメッセージを作成
    - issue番号を付与してください (#[ISSUE_NUMBER])
    - 日本語で内容を記述し、後から見たときに分かるようにしてください
    - 絵文字を付与して可読性を上げてください
    - こまめに分割してコミットしてください
    ```
    git add [git statusで確認した変更ファイル]
    git commit -m "✨ #[ISSUE_NUMBER] [git diffで確認した変更内容を日本語で]"
    ```

7. 🔍 **コミット漏れがないか確認してください**
    ```
    git status
    git diff
    ```

8. 🚀 **変更をプッシュしてください**
    ```
    git push origin feature/[git diffで確認した機能名]-[ISSUE_NUMBER]
    ```

9. ✅ **issue をクローズしてください**
    ```
    gh issue close [ISSUE_NUMBER] --comment "## 🎉 完了しました！

## ✨ 実装内容
[git diffで確認した実装内容の概要]

## 🔍 レビュー結果
[レビュー情報]

## 📈 改善点
[将来的な改善案]"
    ```

10. 🔄 **最後は develop ブランチにマージしてください**
    ```
    git checkout develop
    git merge --no-ff feature/[git diffで確認した機能名]-[ISSUE_NUMBER] -m "🔀 Merge: #[ISSUE_NUMBER] [git statusで確認したタスク名]"
    git push origin develop
    ```

11. 🗑️ **作業ブランチを削除してください**
    ```
    git branch -d feature/[git diffで確認した機能名]-[ISSUE_NUMBER]
    git push origin --delete feature/[git diffで確認した機能名]-[ISSUE_NUMBER]
    ```
```

## 使い方

1. プロンプトをAIに貼り付け
2. Gitリポジトリで作業が完了した状態で実行
3. 自動的にissue作成からマージまで実行される

## 入力例

特別な入力は不要です。Gitリポジトリで変更が加えられた状態で実行するだけで、自動的にdiffが解析されてissueが作成されます。

## 出力例

- Git diffから分析されたissueが作成される
- 進捗レポートがissueに報告される
- issue番号を付与したコミットが作成される
- issueがクローズされる
- developブランチにマージされる

## 注意点

- ghコマンドがインストールされている必要があります
- ghコマンドが認証されている必要があります
