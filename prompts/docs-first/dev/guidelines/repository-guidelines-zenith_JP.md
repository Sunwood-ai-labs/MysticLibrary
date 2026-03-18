---
title: "Zenith リポジトリ運用ガイドライン"
description: "README構成、設計原則、コミット規約などを定義するリポジトリ運用ガイドライン。"
canonical_id: "dev/guidelines/repository-guidelines-zenith"
canonical_doc: "docs/prompt-catalog/dev/guidelines/repository-guidelines-zenith.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/dev/guidelines/repository-guidelines-zenith.md. Edit docs/ instead. -->

<絵文字> <タイプ>: <タイトル>

  <本文>

  <フッター>
  ```

- タイトル（コミットメッセージの1行目）の先頭には必ず絵文字を付与し、日本語で記述すること。  
- タイプは以下のいずれかとする：

  - **feat**: 新機能  
  - **fix**: バグ修正  
  - **docs**: ドキュメントの変更  
  - **style**: コードスタイルの変更（動作に影響しない）  
  - **refactor**: リファクタリング  
  - **perf**: パフォーマンス改善  
  - **test**: テストの追加・修正  
  - **chore**: ビルドプロセスやツールの変更

### 追加要件（必要に応じて）

- **CI/CD導入**: 自動テスト、ビルド、デプロイを行うパイプラインを整備し、品質と迅速なリリースを実現する。  
- **パフォーマンス最適化**: 必要に応じて計測・改善を行い、効率的なスケールを実現する。  
- **アクセシビリティ・国際化対応**: ターゲットユーザに応じてi18nやアクセシビリティ対応を検討する。

~~~~~

## 使い方

1. チーム規約のベースとして読み合わせる
2. 不要/過剰なルールを削って適用範囲を絞る
3. 自動検査可能な項目は CI ルール化する

## 入力例
