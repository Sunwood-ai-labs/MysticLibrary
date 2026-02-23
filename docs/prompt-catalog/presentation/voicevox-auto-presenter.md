---
title: VoiceVox MCP 自動プレゼンテーション
description: Playwright MCPとVoiceVox MCPを使用してスライドを自動ナレーション付きでプレゼンテーションするプロンプト
category: writing
intent: voicevox-auto-presenter
audience:
  - プレゼンテーション自動化担当者
  - MCPユーザー
  - VoiceVoxユーザー
input_requirements:
  - スライドのURL（reveal.js等のWebスライド）
  - Playwright MCP（ブラウザ操作）
  - VoiceVox MCP（音声合成）
tags:
  - MCP
  - VoiceVox
  - プレゼンテーション
  - 自動化
  - Playwright
  - 音声合成
status: stable
owner: writing-team
last_reviewed: 2026-02-23
---

# VoiceVox MCP 自動プレゼンテーション

## 想定用途

- Webスライドを自動でナレーション付きでプレゼンテーションする
- VoiceVoxの音声合成で内容を説明する
- プレゼンテーションの自動実行・録画などに活用

## プロンプト本文

```text
# VoiceVox MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html
のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - VoiceVox MCPで30秒程度に要約して音声合成
   - 音声再生後、下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
```

## 使い方

1. プレゼンテーション対象のスライドURLを準備する
2. URLをプロンプト内のURLに置き換える
3. Playwright MCPとVoiceVox MCPが有効な環境で実行する
4. スライド枚数に応じて「全6スライド」の箇所を調整する

## 入力例

```text
# VoiceVox MCP自動プレゼンテーション プロンプト

https://example.com/presentation.html
のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - VoiceVox MCPで30秒程度に要約して音声合成
   - 音声再生後、下矢印キーで次のスライドへ
3. 全10スライドを順番に実行
```

## 出力例

AIが以下の手順で自動実行します：
1. ブラウザを起動し、指定URLを開く
2. スライドの内容を読み取り、要約テキストを生成
3. VoiceVox MCPで音声合成・再生を実行
4. 音声再生完了後に次のスライドへ移動

## 注意点

- Playwright MCPとVoiceVox MCPの両方が利用可能である必要がある
- スライドはキーボード操作（下矢印キー）で遷移可能である必要がある
- 音声再生完了を待ってから次のスライドへ進む
- 30秒程度に要約するよう指示しているが、内容量に応じて調整する
- AgentVRM版とは異なり、音声再生もプロンプト実行側が制御する
