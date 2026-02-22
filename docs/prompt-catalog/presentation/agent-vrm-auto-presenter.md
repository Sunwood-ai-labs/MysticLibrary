---
title: Agent VRM MCP 自動プレゼンテーション
description: Playwright MCPとAgentVRM MCPを使用してスライドを自動ナレーション付きでプレゼンテーションするプロンプト
category: writing
intent: agent-vrm-auto-presenter
audience:
  - プレゼンテーション自動化担当者
  - MCPユーザー
input_requirements:
  - スライドのURL（reveal.js等のWebスライド）
  - Playwright MCP（ブラウザ操作）
  - AgentVRM MCP（音声合成・アバター表示）
tags:
  - MCP
  - AgentVRM
  - プレゼンテーション
  - 自動化
  - Playwright
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# Agent VRM MCP 自動プレゼンテーション

## 想定用途

- Webスライドを自動でナレーション付きでプレゼンテーションする
- AgentVRMのVRMアバターが音声で内容を説明する
- プレゼンテーションの自動実行・録画などに活用

## プロンプト本文

```text
# Agent VRM MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/agentvrm_slides.html
のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - AgentVRM MCPで30秒程度に要約して音声合成（＊AgentVRM 側で音声の再生はします）
   - 下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
4. タイトルスライドは簡潔でザックリでいいよ！
```

## 使い方

1. プレゼンテーション対象のスライドURLを準備する
2. URLをプロンプト内のURLに置き換える
3. Playwright MCPとAgentVRM MCPが有効な環境で実行する
4. スライド枚数に応じて「全6スライド」の箇所を調整する

## 入力例

```text
# Agent VRM MCP自動プレゼンテーション プロンプト

https://example.com/presentation.html
のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - AgentVRM MCPで30秒程度に要約して音声合成
   - 下矢印キーで次のスライドへ
3. 全10スライドを順番に実行
```

## 出力例

AIが以下の手順で自動実行します：
1. ブラウザを起動し、指定URLを開く
2. スライドの内容を読み取り、要約テキストを生成
3. AgentVRM MCPで音声合成を実行
4. 音声再生完了後に次のスライドへ移動

## 注意点

- Playwright MCPとAgentVRM MCPの両方が利用可能である必要がある
- スライドはキーボード操作（下矢印キー）で遷移可能である必要がある
- 音声合成はAgentVRM側で行われるため、プロンプトではテキスト生成のみを担当
- 30秒程度に要約するよう指示しているが、内容量に応じて調整する
