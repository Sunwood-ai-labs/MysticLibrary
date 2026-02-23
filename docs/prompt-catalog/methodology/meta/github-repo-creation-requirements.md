---
title: GitHubリポジトリ作成要件
description: GitHubリポジトリの作成要件定義書（GitFlow対応版）
category: methodology
intent: github-repo-requirements
audience:
  - 開発者
  - チームリーダー
  - DevOpsエンジニア
input_requirements:
  - なし（参考ドキュメント）
tags:
  - GitHub
  - GitFlow
  - リポジトリ管理
  - 要件定義
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# GitHubリポジトリ作成要件定義書（GitFlow対応版）

## 想定用途

- チームでGitHubリポジトリの作成手順を標準化したい場合
- GitFlowブランチング戦略を採用する場合
- リポジトリ初期設定のガイドラインとして参照する場合

## 要件定義書の内容

### 1. 目的
ユーザーが指定したリポジトリ名、オーナー名、および任意の画像URLを使用して、作業フォルダをgitで初期化し、GitHubにパブリックリポジトリを作成するプロセスの要件を定義します。また、GitFlowブランチング戦略に従ってブランチを管理します。

### 2. 前提条件
- GitHub CLIがインストールされていること
- GitHubアカウントが作成されていること
- ローカル環境にGitがインストールされていること

### 3. 入力パラメータ
- リポジトリ名（ユーザーが指定）
- オーナー名（ユーザーが指定）
- リポジトリ画像URL（任意、ユーザーが指定）

### 4. プロセス手順

#### 4.1 作業フォルダの作成と初期化
- 指定されたリポジトリ名で新しいフォルダを作成
- 作成したフォルダに移動
- `git init` コマンドでGitリポジトリとして初期化

#### 4.2 GitHubリポジトリの作成
- `gh repo create` コマンドを使用してGitHubにパブリックリポジトリを作成
```bash
gh repo create オーナー名/リポジトリ名 --public
```

#### 4.3 リモートリポジトリの設定
- 作成したGitHubリポジトリをリモートとして追加
```bash
git remote add origin https://github.com/オーナー名/リポジトリ名.git
```

#### 4.4 ブランチの設定（GitFlow）
- メインブランチを`main`に設定
```bash
git branch -M main
```
- 開発用の`develop`ブランチを作成
```bash
git branch develop
```

#### 4.5 初期コミットの作成
- README.mdファイルの作成
- `.gitignore` ファイルの作成（必要に応じて）
- 変更をステージングし、初期コミットを作成
```bash
git add .
git commit -m "Initial commit"
```

#### 4.6 リモートリポジトリへのプッシュ
- 初期コミットを`main`ブランチにプッシュ
```bash
git push -u origin main
```
- `develop`ブランチをプッシュ
```bash
git checkout develop
git push -u origin develop
```

### 5. リポジトリフォーマット

リポジトリの構造とREADME.mdファイルは、以下のURLを参考にフォーマットしてください：
```
https://raw.githubusercontent.com/Sunwood-ai-labs/HarmonAI_II/refs/heads/main/README.md
```

**主な要素：**
- プロジェクト名
- 簡単な説明
- インストール方法
- 使用方法
- 貢献方法
- ライセンス情報

**画像の表示：**
指定された画像URLがある場合、README.mdファイルの先頭に以下のようにして中央揃えで表示する：
```markdown
<p align="center">
  <img src="画像URL" alt="リポジトリ画像">
</p>
```

### 6. 出力
- ローカルに初期化されたGitリポジトリ
- GitHubに作成されたパブリックリポジトリ
- 初期コミットがプッシュされた状態のリモートリポジトリ（`main`と`develop`ブランチ）

### 7. エラー処理
各ステップでエラーが発生した場合、適切なエラーメッセージを表示し、可能な場合は回復手順を提案する

### 8. セキュリティ考慮事項
センシティブな情報（APIキーなど）は`.gitignore`ファイルに追加し、リポジトリにコミットしないようにする

### 9. 拡張性
将来的に、テンプレートの選択やブランチ保護ルールの設定など、追加機能を実装できるようにする

### 10. GitFlowブランチング戦略

GitFlowに従って以下のブランチを使用します：

- `main`: 製品リリース用の安定ブランチ
- `develop`: 開発用のブランチ
- `feature/*`: 新機能開発用のブランチ
- `release/*`: リリース準備用のブランチ
- `hotfix/*`: 緊急バグ修正用のブランチ

各ブランチの使用方法と運用ルールについては、チーム内で共有し、一貫性を保つようにしてください。

## 注意点

- このドキュメントは要件定義書であり、実行可能なプロンプトではありません
- 実際のリポジトリ作成には「GitHubリポジトリ初期化」プロンプトを使用してください
- GitHub CLI（`gh`）のインストールが前提条件です
