---
title: MCP-as-a-Language プロンプト Luma
description: Luma AI APIを参照して動画生成MCPサーバーを開発するための指令書プロンプト（npmパッケージ公開対応）
category: dev
intent: mcp-as-a-language-luma
audience:
  - MCPサーバー開発者
  - API統合エンジニア
  - npmパッケージ公開者
input_requirements:
  - GitHub CLIの認証設定
  - npmアカウントとパッケージ公開権限
  - Luma APIのドキュメント
  - LUMA_API_KEY環境変数
tags:
  - mcp
  - api-integration
  - luma-ai
  - video-generation
  - npm-package
  - server-development
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# MCP-as-a-Language プロンプト Luma

## 想定用途

- Luma AI API（Dream Machine）を統合したMCPサーバーを開発する
- GitHubとnpmの両方にパッケージを公開する
- 動画生成APIをMCPツールとして提供する
- JavaScript SDKを活用したサーバー実装

## プロンプト本文

```text
下記の指令書に従って処理を行って

---

# 🛠️ 環境設定
- GitHub CLI設定
  - ghコマンドは認証済みとして進める
- npmのパッケージのオーナ名は下記を参考にして
  - @sunwood-ai-labs/dice-server-mcp
- リポジトリ
  - main ブランチをベースにする
  - コミットは基本 develop ブランチに行う

# 指令書

- luma-mcp-server という名前のリポジトリ名にして
- これでGithubとnpmに公開リポジトリを作成して
- 作成後に、下記で必要なタスクを洗い出してissueに登録して
- いくつissueを作っても大丈夫です
- 下記の luma のドキュメントを参考にして MCP サーバーを作成して
- 環境変数の LUMA_API_KEY を使用して
- パラメータの入力部分は英語にして

## luma API ドキュメント

Dream Machine API
...

[APIドキュメントの詳細は原文を参照]
```

## 使い方

1. npmパッケージのスコープ（@sunwood-ai-labs）を確認する
2. GitHub CLIが認証済みであることを確認する
3. npmへの公開権限を持っていることを確認する
4. Luma APIドキュメントを参照して実装を進める

## 入力例

```text
luma-mcp-serverを開発してください。
@sunwood-ai-labsスコープでnpmパッケージとして公開します。
```

## 出力例

```text
## タスクを洗い出してissueに登録します：

### Issue #1: リポジトリとnpmパッケージの作成
- ✅ GitHubでluma-mcp-serverリポジトリを作成
- ✅ npmパッケージ@sunwood-ai-labs/luma-mcp-serverを作成
- package.jsonの設定（公開用）
- README.mdの作成

### Issue #2: Luma SDKの統合
- lumaaiパッケージのインストール
- LUMA_API_KEY環境変数の実装
- クライアント認証の設定

### Issue #3: MCPツールの実装
- text-to-videoツールの実装
- image-to-videoツールの実装
- video-extendツールの実装
- パラメーターバリデーション（英語）

### Issue #4: ポーリングとステータス管理
- 生成ステータスのポーリング実装
- コールバックURLのサポート
- エラーハンドリング

### Issue #5: テストと公開
- ユニットテストの追加
- npmパッケージの公開
- GitHubリリースの作成

順次実装を進めます。
```

## 注意点

- npmパッケージ名はスコープ付き（@sunwood-ai-labs/xxx）にする
- パラメータ名は英語にする
- Luma APIのレート制限に注意する
- 動画生成は非同期処理になるため、ポーリングが必要
- 環境変数は.env.exampleに含める
- npm公開前にpackage.jsonの設定を確認する
