---
title: Git自動コミットプロンプト V4.0 Lite PS（PowerShell版）
description: Git statusとdiffの結果を解析して、適切なブランチ作成・細かいコミット・マージを自動実行するプロンプト（PowerShell対応版）
category: dev
intent: git-auto-commit-prompt-v4-lite-ps
audience:
  - 開発者
  - チーム開発メンバー
  - Git運用管理者
  - PowerShellユーザー
input_requirements:
  - Gitリポジトリへのアクセス
  - 作業内容の差分情報
  - PowerShell環境
tags:
  - git
  - commit
  - branch-management
  - workflow
  - automation
  - powershell
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git自動コミットプロンプト V4.0 Lite PS（PowerShell版）

Git差分を解析して自動的に適切なコミットメッセージを作成し、ブランチ作成からマージまでの一連のGit操作を自動化するプロンプトです。PowerShell環境に対応しています。

## 想定用途

- Git差分を解析して自動的に適切なコミットメッセージを作成する
- ブランチ作成からマージまでの一連のGit操作を自動化する
- 作業履歴を明確に残すための細かいコミット分割を実現する
- PowerShell環境でのGit操作を自動化する

## プロンプト本文

```text
# Git 差分解析自動コミット プロンプト V4.0 lite PS

下記の処理を実行して

git statusとgit diffの結果を解析して、自動で適切なブランチ作成・コミット・マージを実行する
必ず下記のようにコマンドの最後に「 ; start-sleep -milliseconds 30」を付けて

## 開発フローステップ

1. 🔍 **作業前に変更状態を確認してください**
   ```
   git status ; start-sleep -milliseconds 30
   git diff ; start-sleep -milliseconds 30
   ```

2. 🌿 **develop ブランチの確認・作成・移動をしてください**
   ```
   # developブランチが存在するか確認
   git branch -a | grep develop ; start-sleep -milliseconds 30
   
   # developブランチが存在しない場合は作成
   git checkout -b develop ; start-sleep -milliseconds 30
   git push origin develop ; start-sleep -milliseconds 30
   
   # developブランチが存在する場合は移動して最新化
   git checkout develop ; start-sleep -milliseconds 30
   git pull origin develop ; start-sleep -milliseconds 30
   ```

3. 🌿 **作業用ブランチを作成してください**
   - ブランチ名は上記の変更の差分から適切な英語のブランチ名を提案するようにして
   - issue番号は付けないでください
   ```
   git checkout -b feature/[機能名]-[日付] ; start-sleep -milliseconds 30
   ```

4. 💻 **変更内容に基づいて細かくコミットしてください**
   - git statusとgit diffで確認した変更をもとに、**作業の差分ごとに細かくコミット**してください
   - **後から見た人でも作業履歴を理解できるよう**に、機能追加・修正・リファクタリングなど作業単位で分割
   - 日本語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - 1つのコミットには関連する変更のみを含め、無関係な変更は別コミットに分ける
   - 3行程度の箇条書きを活用して変更内容を記載して
     
   ```
   # 例：ファイル追加 → 機能実装 → スタイル調整のように分割
   git add [関連ファイル] ; start-sleep -milliseconds 30
   git commit -m "✨ [具体的な変更内容を日本語で]" ; start-sleep -milliseconds 30
   
   # 次の作業単位をコミット
   git add [次の関連ファイル] ; start-sleep -milliseconds 30
   git commit -m "🔧 [次の変更内容を日本語で]" ; start-sleep -milliseconds 30
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status ; start-sleep -milliseconds 30
   git diff ; start-sleep -milliseconds 30
   ```

6. 🔄 **develop ブランチにマージしてください**
   ```
   git checkout develop ; start-sleep -milliseconds 30
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [タスク名]" ; start-sleep -milliseconds 30
   git push origin develop ; start-sleep -milliseconds 30
   ```

7. 🗑️ **作業ブランチを削除してください**
   ```
   git branch -d feature/[機能名]-[日付] ; start-sleep -milliseconds 30
   ```
```

## 使い方

1. プロンプトをAIに貼り付け
2. Gitリポジトリで作業が完了した状態で実行
3. 自動的にブランチ作成からマージまで実行される

## 入力例

特別な入力は不要です。Gitリポジトリで変更が加えられた状態で実行するだけで、自動的に差分が解析されて適切なコミットが作成されます。

## 出力例

- 適切なブランチ名でのブランチ作成
- 作業内容に応じた細かいコミット（絵文字付き）
- developブランチへのマージ
- 作業ブランチの削除

## V4.0 Liteとの違い

- 各コマンドの最後に「 ; start-sleep -milliseconds 30」を付けてPowerShell環境で確実に実行されるようにする

## 注意点

- PowerShell環境用に設計されています
- 各コマンドの後にスリープを入れることで、PowerShellでの実行を安定化させています
- 作業履歴を明確に残すため、機能単位でコミットが分割されます
