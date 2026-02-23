---
title: GitHub Issueワークフロー from diff V2 Lite
description: Git diffから簡易的なGitHub Issueワークフローを実行するプロンプト（Lite版）
category: dev
intent: gh-issue-workflow-from-diff-v2-lite
audience:
  - 開発者
  - チーム開発メンバー
input_requirements:
  - GitHubリポジトリ
tags:
  - github
  - workflow
  - git
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# GitHub Issueワークフロー from diff V2 Lite

Git diffの結果から簡易的な開発ワークフローを実行するプロンプトです（Lite版）。

## 想定用途

- シンプルなGitワークフローを実行する
- developブランチをベースにした開発を行う
- 細かいコミットで作業履歴を残す

## プロンプト本文

```text
下記の処理を実行して

# Git シンプル開発ワークフロー Lite

## 開発フローステップ

1. 🔍 **作業前に変更状態を確認してください**
   ```
   git status
   git diff
   ```

2. 🔄 **develop ブランチに移動してください**
   ```
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **作業用ブランチを作成してください**(ブランチ名は上記の変更の差分から適切な英語のブランチ名を提案するようにして)
   ```
   git checkout -b feature/[機能名]-[日付]
   ```

4. 💻 **変更内容に基づいてコミットしてください**
   - git statusとgit diffで確認した変更をもとにコミットメッセージを作成
   - 日本語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - こまめに分割してコミットしてください
   ```
   git add [変更ファイル]
   git commit -m "✨ [変更内容を日本語で]"
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status
   git diff
   ```

6. 🚀 **変更をプッシュしてください**
   ```
   git push origin feature/[機能名]-[日付]
   ```

7. 🔄 **最後は develop ブランチにマージしてください**
   ```
   git checkout develop
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [タスク名]"
   git push origin develop
   ```

8. 🗑️ **作業ブランチを削除してください**
   ```
   git branch -d feature/[機能名]-[日付]
   git push origin --delete feature/[機能名]-[日付]
   ```
```

## 使い方

1. プロンプトをAIに貼り付け
2. Gitリポジトリで作業が完了した状態で実行
3. 自動的にブランチ作成からマージまで実行される

## 入力例

特別な入力は不要です。Gitリポジトリで変更が加えられた状態で実行するだけで、自動的にワークフローが実行されます。

## 出力例

- 適切なブランチ名でのブランチ作成
- 作業内容に応じた細かいコミット（絵文字付き）
- developブランチへのマージ
- 作業ブランチの削除

## V2との違い

- V2: GitHub Issueを活用したワークフロー
- V2 Lite: Issueを使用しないシンプルなワークフロー

## 注意点

- GitHub APIやghコマンドは不要です
- 作業履歴を明確に残すため、機能単位でコミットが分割されます
