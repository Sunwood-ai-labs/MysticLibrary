---
title: プレゼンテーション
description: 自動プレゼンテーションやピッチデッキ作成のためのプロンプト
category: writing
intent: presentation-index
audience:
  - プレゼンテーション作成者
  - スタートアップ創業者
  - MCPユーザー
input_requirements: []
tags:
  - プレゼンテーション
  - MCP
  - ピッチデッキ
  - 自動化
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# プレゼンテーションプロンプト

自動プレゼンテーションやピッチデッキ作成を支援するプロンプト群です。

## 一覧

### MCP自動プレゼンテーション

- [Agent VRM MCP 自動プレゼンテーション](./agent-vrm-auto-presenter.md) - Playwright MCPとAgentVRM MCPを使用した自動ナレーション付きプレゼンテーション
- [VoiceVox MCP 自動プレゼンテーション](./voicevox-auto-presenter.md) - Playwright MCPとVoiceVox MCPを使用した自動ナレーション付きプレゼンテーション

### ピッチデッキ作成

- [PitchCast Maker](./pitchcast-maker.md) - ビジネスアイデアからReactピッチデッキアプリケーションを生成

## 利用時のポイント

### MCP自動プレゼンテーション
- Playwright MCPと音声合成MCPの両方が利用可能である必要がある
- スライドはキーボード操作で遷移可能である必要がある
- URLとスライド枚数をプロンプトに合わせて調整する

### PitchCast Maker
- 完全なリファレンスコードをプロンプトに含める必要がある
- Gemini APIキーが実行時に必要
- 対談スクリプトは2〜4ラリーで構成する
