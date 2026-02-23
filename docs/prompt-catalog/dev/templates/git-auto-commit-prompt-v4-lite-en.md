---
title: Git自動コミットプロンプト V4.0 Lite EN（英語コミット版）
description: Git statusとdiffの結果を解析して、適切なブランチ作成・細かいコミット・マージを自動実行するプロンプト（英語コミットメッセージ版）
category: dev
intent: git-auto-commit-prompt-v4-lite-en
audience:
  - 開発者
  - チーム開発メンバー
  - Git運用管理者
input_requirements:
  - Gitリポジトリへのアクセス
  - 作業内容の差分情報
tags:
  - git
  - commit
  - branch-management
  - workflow
  - automation
  - english
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git自動コミットプロンプト V4.0 Lite EN（英語コミット版）

Git差分を解析して自動的に適切な英語のコミットメッセージを作成し、ブランチ作成からマージまでの一連のGit操作を自動化するプロンプトです。

## 想定用途

- Git差分を解析して自動的に適切な英語のコミットメッセージを作成する
- ブランチ作成からマージまでの一連のGit操作を自動化する
- 作業履歴を明確に残すための細かいコミット分割を実現する
- 国際チームでの開発に対応する

## プロンプト本文

```text
# Git 差分解析自動コミット プロンプト V4.0 lite EN

下記の処理を実行して

git statusとgit diffの結果を解析して、自動で適切なブランチ作成・コミット・マージを実行する

## 開発フローステップ

1. 🔍 **作業前に変更状態を確認してください**
   ```
   git status
   git diff
   ```

2. 🌿 **develop ブランチの確認・作成・移動をしてください**
   ```
   # developブランチが存在するか確認
   git branch -a | grep develop
   
   # developブランチが存在しない場合は作成
   git checkout -b develop
   git push origin develop
   
   # developブランチが存在する場合は移動して最新化
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **作業用ブランチを作成してください**
   - ブランチ名は上記の変更の差分から適切な英語のブランチ名を提案するようにして
   - issue番号は付けないでください
   ```
   git checkout -b feature/[機能名]-[日付]
   ```

4. 💻 **変更内容に基づいて細かくコミットしてください**
   - git statusとgit diffで確認した変更をもとに、**作業の差分ごとに細かくコミット**してください
   - **後から見た人でも作業履歴を理解できるよう**に、機能追加・修正・リファクタリングなど作業単位で分割
   - 英語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - 1つのコミットには関連する変更のみを含め、無関係な変更は別コミットに分ける
   - 3行程度の箇条書きを活用して変更内容を記載して
     
   ```
   # 例：ファイル追加 → 機能実装 → スタイル調整のように分割
   git add [関連ファイル]
   git commit -m "✨ Add new feature: [specific change description in English]
   - Implement core functionality
   - Add validation logic
   - Update documentation"
   
   # 次の作業単位をコミット
   git add [次の関連ファイル]
   git commit -m "🔧 Fix issue: [specific fix description in English]
   - Resolve bug in validation
   - Update error handling
   - Add unit tests"
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status
   git diff
   ```

6. 🔄 **develop ブランチにマージしてください**
   ```
   git checkout develop
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [Task description in English]"
   git push origin develop
   ```

7. 🗑️ **作業ブランチを削除してください**
   ```
   git branch -d feature/[機能名]-[日付]
   ```
```

## 使い方

1. プロンプトをAIに貼り付け
2. Gitリポジトリで作業が完了した状態で実行
3. 自動的にブランチ作成からマージまで実行される

## 入力例

特別な入力は不要です。Gitリポジトリで変更が加えられた状態で実行するだけで、自動的に差分が解析されて適切な英語のコミットが作成されます。

## 出力例

- 適切なブランチ名でのブランチ作成
- 作業内容に応じた細かい英語コミット（絵文字付き）
- developブランチへのマージ
- 作業ブランチの削除

## V4.0 Lite（日本語版）との違い

- コミットメッセージが英語になる
- 国際チームでの開発に対応

## 注意点

- コミットメッセージが英語で作成されます
- 作業履歴を明確に残すため、機能単位でコミットが分割されます
