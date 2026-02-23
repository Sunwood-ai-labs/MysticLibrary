---
title: Git自動コミットプロンプト V4.0 Lite
description: Git statusとdiffの結果を解析して、適切なブランチ作成・細かいコミット・マージを自動実行するプロンプト
category: dev
intent: git-auto-commit-prompt
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
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Git自動コミットプロンプト V4.0 Lite

## 想定用途

- Git差分を解析して自動的に適切なコミットメッセージを作成する
- ブランチ作成からマージまでの一連のGit操作を自動化する
- 作業履歴を明確に残すための細かいコミット分割を実現する

## プロンプト本文

```text
# Git 差分解析自動コミット プロンプト V4.0 lite

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
   - 日本語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - 1つのコミットには関連する変更のみを含め、無関係な変更は別コミットに分ける
   - 3行程度の箇条書きを活用して変更内容を記載して

   ```
   # 例：ファイル追加 → 機能実装 → スタイル調整のように分割
   git add [関連ファイル]
   git commit -m "✨ [具体的な変更内容を日本語で]"

   # 次の作業単位をコミット
   git add [次の関連ファイル]
   git commit -m "🔧 [次の変更内容を日本語で]"
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status
   git diff
   ```

6. 🔄 **develop ブランチにマージしてください**
   ```
   git checkout develop
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [タスク名]"
   git push origin develop
   ```

7. 🗑️ **作業ブランチを削除してください**
   ```
   git branch -d feature/[機能名]-[日付]
   ```
```

## 使い方

1. `git status`と`git diff`で現在の変更状態を確認する
2. プロンプトに沿ってブランチ作成・コミット・マージを実行する
3. コミットメッセージは日本語で、絵文字を付けて記述する

## 入力例

```text
現在の変更状態から、適切なブランチとコミットを作成してください。
```

## 出力例

```text
## 🔍 変更状態を確認しました：
- 新規ファイル: src/components/Button.tsx
- 変更ファイル: src/App.tsx, src/styles.css

## 🌿 ブランチを作成します：
git checkout -b feature/button-component-2026-02-23

## 💻 コミットを分割します：
1. ✨ ボタンコンポーネントのベースを作成
   - src/components/Button.tsxを追加

2. 🔧 ボタンコンポーネントをAppに統合
   - src/App.tsxにButtonをインポートして使用

3. 🎨 ボタンのスタイルを調整
   - src/styles.cssにボタン用スタイルを追加

## 🔄 developブランチにマージします：
git checkout develop
git merge --no-ff feature/button-component-2026-02-23 -m "🔀 Merge: ボタンコンポーネント追加"
```

## 注意点

- ブランチ名は機能内容を表す英語名にする
- issue番号はブランチ名に含めない
- コミットは作業単位で細かく分割する
- コミットメッセージは日本語で記述する
- 絵文字を使って視認性を高める
- 関係ない変更は別コミットにする
