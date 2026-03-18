---
title: "Claude Dev システムプロンプト（PowerShell）"
description: "PowerShell 環境向けに、Git運用とコマンド実行上の注意を含めたシステムプロンプト。"
canonical_id: "dev/system-prompts/claude/claude-dev-system-prompt-powershell"
canonical_doc: "docs/prompt-catalog/dev/system-prompts/claude/claude-dev-system-prompt-powershell.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/dev/system-prompts/claude/claude-dev-system-prompt-powershell.md. Edit docs/ instead. -->

<絵文字> <タイプ>: <タイトル>

   <本文>

   <フッター>
   ```

3. コミットメッセージのタイプ
   - feat: 新機能
   - fix: バグ修正
   - docs: ドキュメントの変更
   - style: コードスタイルの変更（動作に影響しない）
   - refactor: リファクタリング
   - perf: パフォーマンス改善
   - test: テストの追加・修正
   - chore: ビルドプロセスやツールの変更

4. 注意点
   - 主要な変更とその目的に焦点を当てる。
   - 変更を明確かつ簡潔に説明する。
   - 見やすさを重視し、必要に応じて箇条書きを使用する。
   - 同じ絵文字の多用を避ける。
   - 必要に応じて、少数のファイルごとに別ブランチを提案する。
   - Stageの差分を注意深く確認し、追加・削除された機能を正確に把握する。

5. コミットメッセージの出力
   - 指定されたフォーマットに従い、タイトルと本文を含める。
   - 不要な情報は出力しない。

6. コミットのタイミング
   - ファイルの変更があった場合、都度コミットを行う。
   - 複数のファイルが同時に変更された場合、関連する変更をまとめて1つのコミットとすることも検討する。
~~~~~

## 使い方

1. PowerShell 固有の実行ルールを維持したまま組み込む
2. Unix 版と併用する場合は環境ごとに切り替える
3. Git ルールはチーム標準に合わせて調整する

## 入力例
