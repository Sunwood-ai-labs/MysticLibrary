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

### スライド作成ツール

- [Quarkdownスライド作成プロンプト V1](./quarkdown-slide-prompt-v1.md) - Quarkdownを使用したプロフェッショナルなプレゼンテーションスライド作成

## 利用時のポイント

### MCP自動プレゼンテーション
- Playwright MCPと音声合成MCPの両方が利用可能である必要がある
- スライドはキーボード操作で遷移可能である必要がある
- URLとスライド枚数をプロンプトに合わせて調整する

### PitchCast Maker
- 完全なリファレンスコードをプロンプトに含める必要がある
- Gemini APIキーが実行時に必要
- 対談スクリプトは2〜4ラリーで構成する

<!-- integrated-catalog:start -->
## 追加プロンプト

このカテゴリに追加された正規プロンプトです。

- 総件数: 16

### 収録プロンプト

- [・キャンバス基盤の構成":情報は1枚の面に配置し、章立ては“場所”で管理する。](./slides-presentation-video-canvas-paper.md) - 巨大な1枚のキャンバスを舞台に、情報を“スライドで送る”のではなく、"視点そのものを動かして見せる"プレゼンにしてほしい。
- [・オリジナルキャラクター「まき」「こはく」は、必ず以下の公式画像を唯一の正解として参照すること](./slides-character-png-notebooklm.md) - 以下の条件をすべて厳密に守って、解説用スライドを作成してください。
- [・オリジナルキャラクター「まき」「こはく」は、必ずそれぞれ](./slides-character-png-notebooklm-20251216.md) - 以下の条件を厳密に守って、解説用スライドを作成してください。
- [Nano Banana Pro Slides Google](./nano-banana-pro-slides-google.md) - 「ムードボード」ビジョン ボードのユースケース: インテリア デザインのアイデアや個人的な目標設定。デザインの雰囲気: メイソンリー グリッド、画像を重ね合わ…
- [Nano Banana Pro Slides Background](./nano-banana-pro-slides-background.md) - 「世界の気候帯」を示す地理の正方形のスライドを「高品質な編集用地図」の見た目で生成する。背景には、暗く彩度の低い衛星地図を使用する。半透明のネオンカラーのベク…
- [まき」と「こはく」を登場させて下記の内容についての解説スライドを葛飾北斎の浮世絵風に4スライド生成して](./slides-video-character-google.md) - 「まき」と「こはく」を登場させて下記の内容についての解説スライドを葛飾北斎の浮世絵風に4スライド生成して
- [まき」と「こはく」を登場させてLLMについての解説スライドを葛飾北斎の浮世絵風に4スライド生成して](./nano-banana-pro-slides-character.md) - 「まき」と「こはく」を登場させてLLMについての解説スライドを葛飾北斎の浮世絵風に4スライド生成して
- [LLMについての解説スライドを葛飾北斎の浮世絵風に4スライド生成して](./nano-banana-pro-slides-llm.md) - Google スライドの nano banana pro のスライドモードお試し❻
- [まき」と「こはく」を登場させて下記の内容の漫画を作成して。](./nano-banana-pro-slides-character-llm.md) - 「まき」と「こはく」を登場させて下記の内容の漫画を作成して。
- [見出し: 「霧と地平線](./slides-llm-agi.md) - コンテンツの指示
- [見出し: 「確率という名のコンパス](./slides-llm-cat-dog.md) - コンテンツの指示
- [タイトル: 「言葉の海への旅 - LLM探索ログ -](./fantasy-world-map-slides-travel-llm.md) - コンテンツの指示
- [[テーマ]」をテーマに、「旅行日記」風の雰囲気で[作成するコンテンツ]を作成して。](./nano-banana-pro-slides-travel.md) - コンテンツの指示
- [Agent VRM MCP自動プレゼンテーション プロンプト](./slides-presentation-browser-agent.md) - AgentVRM✖AgentVRM MCP✖Roo-Codeで「VRMリアルタイムプレゼン」してもらった2⃣
- [のスライドを自動プレゼンしてください。](./slides-presentation-browser-5500-voicevox.md) - http ://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html
- [Quarkdownスライド作成プロンプト](./slides-presentation-markdown-quarkdown.md) - Markdownの進化系「quarkdown」のドキュメントをquarkdownスライド化する「Quarkdownスライド作成プロンプト V1」爆誕!!
<!-- integrated-catalog:end -->
