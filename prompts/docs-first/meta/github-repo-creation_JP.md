---
title: "GitHubリポジトリ作成要件定義書"
description: "GitFlow対応版のGitHubリポジトリ作成手順を定義したプロンプト"
canonical_id: "meta/github-repo-creation"
canonical_doc: "docs/prompt-catalog/meta/github-repo-creation.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/meta/github-repo-creation.md. Edit docs/ instead. -->

# GitHub リポジトリ作成要件定義書 (GitFlow対応版)

## 📋 1. 目的
このドキュメントは、ユーザーが指定したリポジトリ名、オーナー名、および任意の画像URLを使用して、作業フォルダをgitで初期化し、GitHubにパブリックリポジトリを作成するプロセスの要件を定義します。また、GitFlowブランチング戦略に従ってブランチを管理します。

## 🔧 2. 前提条件
- GitHub CLIがインストールされていること
- GitHubアカウントが作成されていること
- ローカル環境にGitがインストールされていること

## 📥 3. 入力パラメータ
- リポジトリ名（ユーザーが指定）
- オーナー名（ユーザーが指定）
- リポジトリ画像URL（任意、ユーザーが指定）

## 🔄 4. プロセス手順
1. 作業フォルダの作成と初期化
   - 指定されたリポジトリ名で新しいフォルダを作成
   - 作成したフォルダに移動
   - `git init` コマンドでGitリポジトリとして初期化

2. GitHubリポジトリの作成
   - `gh repo create` コマンドを使用してGitHubにパブリックリポジトリを作成

3. リモートリポジトリの設定
   - 作成したGitHubリポジトリをリモートとして追加

4. ブランチの設定（GitFlow）
   - メインブランチを`main`に設定
   - 開発用の`develop`ブランチを作成

5. 初期コミットの作成
   - README.mdファイルの作成
   - `.gitignore` ファイルの作成
   - 変更をステージングし、初期コミットを作成

6. リモートリポジトリへのプッシュ
   - 初期コミットを`main`ブランチにプッシュ
   - `develop`ブランチをプッシュ

## 🌿 10. GitFlowブランチング戦略
GitFlowに従って以下のブランチを使用します：

- `main`: 製品リリース用の安定ブランチ
- `develop`: 開発用のブランチ
- `feature/*`: 新機能開発用のブランチ
- `release/*`: リリース準備用のブランチ
- `hotfix/*`: 緊急バグ修正用のブランチ
