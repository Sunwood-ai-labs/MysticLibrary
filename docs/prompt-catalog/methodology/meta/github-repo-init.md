---
title: GitHubリポジトリ初期化
description: GitHubリポジトリの作成要件定義書に基づいてGitの初期化とリポジトリ作成を行うプロンプト
category: methodology
intent: github-repo-initialization
audience:
  - 開発者
  - チームリーダー
  - プロジェクトマネージャー
input_requirements:
  - リポジトリ名
  - オーナー名
  - 参考リポジトリ（任意）
tags:
  - GitHub
  - Git
  - リポジトリ作成
  - プロジェクト管理
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# GitHubリポジトリ初期化

## 想定用途

- 新規GitHubリポジトリをGitFlow対応で作成したい場合
- リポジトリの初期設定を自動化したい場合
- チームで一貫したリポジトリ構造を作りたい場合

## プロンプト本文

```text
下記のリポジトリ作成要件定義書を参考に下記の入力パラメータとリポジトリのフォーマットを参考にしてGitの初期化とリポジトリの作成を行って

# 入力パラメータ
- リポジトリ名：{リポジトリ名}
- オーナー名：{オーナー名}

# リポジトリ作成要件定義書

@https://raw.githubusercontent.com/Sunwood-ai-labs/MysticLibrary/refs/heads/main/prompts/meta/GITHUB-REPO-CREATION-REQUIREMENTS.md のGitHub

# 参考リポジトリ

@https://raw.githubusercontent.com/Sunwood-ai-labs/HarmonAI_II/refs/heads/main/README.md
```

## 使い方

1. `{リポジトリ名}`に作成したいリポジトリ名を入力
2. `{オーナー名}`にGitHubのオーナー名を入力
3. 必要に応じて参考リポジトリを変更

## 入力例

```text
# 入力パラメータ
- リポジトリ名：my-awesome-project
- オーナー名：your-org-name
```

## 出力例

以下の手順でリポジトリが作成されます：

1. 作業フォルダの作成と初期化
2. GitHubリポジトリの作成（gh repo create）
3. リモートリポジトリの設定
4. GitFlowブランチの設定（main、develop）
5. 初期コミットの作成
6. リモートへのプッシュ

## リポジトリ作成要件定義書の内容

- **目的**: GitFlow対応のリポジトリ作成
- **前提条件**: GitHub CLI、Gitのインストール
- **ブランチ戦略**: GitFlow（main、develop、feature/*、release/*、hotfix/*）
- **初期ファイル**: README.md、.gitignore

## 注意点

- GitHub CLI（`gh`）がインストールされている必要があります
- リポジトリはパブリックで作成されます
- GitFlowブランチング戦略に従ってブランチが作成されます
