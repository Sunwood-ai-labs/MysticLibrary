---
title: "GitHub リポジトリ作成要件定義書（GitFlow対応版）"
description: "GitHubリポジトリの作成からGitFlowブランチ戦略の初期設定までを網羅したプロンプト"
canonical_id: "dev/git/github-repo-creation-gitflow"
canonical_doc: "docs/prompt-catalog/dev/git/github-repo-creation-gitflow.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/dev/git/github-repo-creation-gitflow.md. Edit docs/ instead. -->

# GitHub リポジトリ作成要件定義書 (GitFlow対応版)

## 📋 目的
ユーザーが指定したリポジトリ名、オーナー名、および任意の画像URLを使用して、作業フォルダをgitで初期化し、GitHubにパブリックリポジトリを作成するプロセスの要件を定義します。また、GitFlowブランチング戦略に従ってブランチを管理します。

## 🔧 前提条件
- GitHub CLIがインストールされていること
- GitHubアカウントが作成されていること
- ローカル環境にGitがインストールされていること

## 📥 入力パラメータ
- リポジトリ名（ユーザーが指定）
- オーナー名（ユーザーが指定）
- リポジトリ画像URL（任意、ユーザーが指定）

## 🔄 プロセス手順
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
   - `.gitignore` ファイルの作成（必要に応じて）
   - 変更をステージングし、初期コミットを作成

6. リモートリポジトリへのプッシュ
   - 初期コミットを`main`ブランチにプッシュ
   - `develop`ブランチをプッシュ

## 📝 リポジトリフォーマット
README.mdファイルには以下を含める：
- プロジェクト名
- 簡単な説明
- インストール方法
- 使用方法
- 貢献方法
- ライセンス情報
- （指定された場合）中央揃えのリポジトリ画像
