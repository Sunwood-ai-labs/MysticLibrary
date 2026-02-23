---
title: MCP-as-a-Language プロンプト 01 (Ideogram)
description: 外部API（Ideogram）を参照してMCPサーバーを開発するための指令書プロンプト
category: dev
intent: mcp-as-a-language-ideogram
audience:
  - MCPサーバー開発者
  - API統合エンジニア
  - インフラ開発者
input_requirements:
  - GitHub CLIの認証設定
  - 対象APIのドキュメント
  - APIキーなどの環境変数
tags:
  - mcp
  - api-integration
  - ideogram
  - image-generation
  - server-development
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# MCP-as-a-Language プロンプト 01 (Ideogram)

## 想定用途

- 外部APIドキュメントを参照してMCPサーバーを開発する
- GitHubリポジトリ作成からissue管理までの一連のフローを自動化する
- APIキーを使用した環境変数設定を含むサーバー構築

## プロンプト本文

```text
下記の指令書に従って処理を行って

---

# 🛠️ 環境設定
- GitHub CLI設定
  - ghコマンドは認証済みとして進める

- リポジトリ
  - main ブランチをベースにする
  - コミットは基本 develop ブランチに行う

# 指令書

- [リポジトリ名] という名前のリポジトリ名にして
- これでGithubに公開リポジトリを作成して
- 作成後に、下記で必要なタスクを洗い出してissueに登録して
- いくつissueを作っても大丈夫です
- 下記の [APIサービス] のドキュメントを参考にして MCP サーバーを作成して
- 環境変数の [API_KEY] を使用して

## [APIサービス] API ドキュメント

[ここにAPIドキュメントを貼り付ける]
```

## 使い方

1. `[リポジトリ名]`を作成するリポジトリ名に置き換える
2. `[APIサービス]`を対象のAPIサービス名に置き換える
3. `[API_KEY]`を使用する環境変数名に置き換える
4. APIドキュメントを適切に貼り付ける
5. GitHub CLIで認証済みであることを確認する

## 入力例

```text
ideogram-mcp-server という名前のリポジトリを作成し、
Ideogram APIを参照して画像生成MCPサーバーを開発してください。
IDEOGRAM_API_KEY環境変数を使用します。
```

## 出力例

```text
## タスクを洗い出してissueに登録します：

### Issue #1: リポジトリの作成と初期設定
- ✅ GitHubでideagram-mcp-serverリポジトリを作成
- README.mdの作成
- 基本的なプロジェクト構造のセットアップ

### Issue #2: MCPサーバーの基本構造実装
- package.jsonの設定
- サーバーエントリーポイントの作成
- 基本的なMCPツール定義

### Issue #3: Ideogram API連携
- IDEOGRAM_API_KEY環境変数の実装
- 画像生成エンドポイントの実装
- パラメーターバリデーション

### Issue #4: テストとドキュメント
- ユニットテストの追加
- 使用方法のドキュメント化

順次実装を進めます。
```

## 注意点

- GitHub CLIが認証済みである必要がある
- APIドキュメントは完全に記載する
- 環境変数の扱いには注意する（.env.exampleを含める）
- issueは細かく分割して作成する
- コミットメッセージは日本語で絵文字を付ける
