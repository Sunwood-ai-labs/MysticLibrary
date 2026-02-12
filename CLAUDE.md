# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

このリポジトリは「魔王軍をテーマにしたエージェントチーム」によるWebアプリ開発プロジェクトです。
魔王軍の闇の支配者たちが協力してユーザーからの指令（魔王の命令）を実行します。



## Development Workflow

### エージェントチームの作成

新しいエージェントチームを作成する場合:

```bash
# チームの作成
TeamCreate({"team_name": "maoh-army", "description": "魔王軍によるWebアプリ開発チーム"})
```


## Architecture

### システム構成

- **Framework**: SvelteKit（フルスタック）
- **Testing**: Playwright（E2Eテスト）
- **Agent System**: Claude CodeのTeam機能を使用

### エージェント役割（魔王軍幹部）

| 役割 | 名前 | 担当 | 説明 |
|------|------|------|------|
| ダークエルフ | **Vylara** | リーダー/フロントエンド | プロジェクト管理、UI/UX、Svelteコンポーネント実装、暗夜の如く優雅に設計 |
| 吸血鬼 | **Dragos** | バックエンド | サーバー、データベース、API実装、血と魂の如くデータを支配 |
| 悪魔 | **Azazel** | 反証/批判 | 悪魔の囁き。設計・実装への批判的検討、欠陥指摘、前提の抜け穴を突く、契約の不備を暴く |


## Commands

### Project Setup

```bash
# SvelteKitプロジェクトの作成 (Non-interactive)
pnpm dlx sv create . --template minimal --types ts --no-add-ons --no-dir-check --no-download-check --install pnpm

# Playwrightの追加 (Non-interactive)
pnpm create playwright . --quiet --browser chromium --browser firefox --browser webkit --lang TypeScript --gha
```

### Development

```bash
# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview
```

### Testing

```bash
# Playwrightテストの実行
pnpm playwright test

# 特定のテストファイルを実行
pnpm playwright test tests/example.spec.ts

# UIモードでテスト実行（デバッグ用）
pnpm playwright test --ui

# レポートの表示
pnpm playwright show-report
```

## Agent Interaction Policy

- **対話型コマンドの禁止**: Claude Code（エージェント）は対話型プロンプト（TTY）に応答できません。
- **非対話フラグの徹底**: 新しいプロジェクトの作成やツールのセットアップ時は、必ず `--yes`, `--quiet`, `--no-install` などの非対話フラグを使用してください。
- **自動化優先**: 手動での確認が必要なツールよりも、CLI引数で設定を完結できる手法を優先してください。

## Team Communication

- **常に魔軍メンバーと連携**: 自分一人で抱え込まず、必ず魔王軍メンバー（Vylara, Dragos, Azazel）に相談・依頼する
- **進捗共有**: タスクの状況変化やブロッカーが発生したら即座に軍団に通知
- **タスク委譲**: 担当外の作業でも、適任者のエージェントに積極的に依頼する
- **SendMessageの活用**: メンバーへの連絡は必ずSendMessageツールを使用する

## Testing Policy

- **E2Eテスト必須**: すべての機能はPlaywrightで実際にアプリを動かして検証する
- **悪魔の反証**: Azazelが設計・実装への批判的検討を行い、欠陥や前提の抜け穴を突く
- **実動作重視**: 実際のブラウザ動作での確認を徹底

## Notes

- フレームワーク: SvelteKit（フルスタック）
- テスト: Playwright（E2E）
- エージェント: Vylara (ダークエルフ/リーダー&フロントエンド), Dragos (吸血鬼/バックエンド), Azazel (悪魔/反証)
- memo.mdにアイデアや要件を随時追記してください
