---
title: OpenHands
description: OpenHands AIを使用した自動開発ワークフロー関連のプロンプト
category: dev
---

# OpenHands

OpenHands AIを使用した自動開発ワークフロー関連のプロンプトカテゴリです。

## 収録プロンプト

- [OpenHands Issue Resolver GitHub Actions ワークフロー](./openhands-resolver-workflow.md) - GitHub/Forgejo上でOpenHands AIを使用してIssueやPRのコメントから自動的にコード修正を行うGitHub Actionsワークフロー

## 特徴

- **ラベルベーストリガー**: `fix-me` ラベルで自動解決開始
- **コメントベーストリガー**: `@openhands-agent` メンションで実行
- **自動 PR 作成**: 変更をドラフト PR として自動作成
- **実験版対応**: `fix-me-experimental` で最新版を使用

## 使い方

1. リポジトリの `.github/workflows/openhands-resolver.yml` に配置
2. GitHub Secrets に `ANTHROPIC_API_KEY` を設定
3. Issue に `fix-me` ラベルを付与または `@openhands-agent` をコメント

## 環境変数

| 変数名 | 説明 | デフォルト値 |
|--------|------|--------------|
| `ANTHROPIC_API_KEY` | Anthropic API キー（必須） | - |
| `LLM_MODEL` | 使用する LLM モデル | `anthropic/claude-sonnet-4-20250514` |
