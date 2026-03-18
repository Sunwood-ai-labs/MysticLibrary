---
title: Roo-Cline Issue Close エラー修正タスク
description: gh issue close と issue ベース運用を前提に、Issue クローズ失敗の原因調査と修正を進めるためのタスクプロンプト。
category: dev
intent: roo-cline-issue-close-error-task
audience:
  - 開発者
  - MCP ツール保守者
  - GitHub CLI 利用者
input_requirements:
  - 対象リポジトリ
  - 発生しているエラー
  - 実行ログ
tags:
  - roo-cline
  - workflow
  - issue-driven
status: active
owner: prompt-lb-team
last_reviewed: 2026-03-18
canonical_id: "dev/workflow/roo-cline-issue-close-error-task"
legacy_source: "prompts/coding/Roo-cline/task1_JP.md"
prompt_source: "prompts/docs-first/dev/workflow/roo-cline-issue-close-error-task_JP.md"
---

# Roo-Cline Issue Close エラー修正タスク

## 想定用途

- Issue 登録と進捗報告を前提に、GitHub CLI の失敗原因を切り分けたいとき
- 既存コマンドの代替案や修正案まで一気に整理したいとき

## プロンプト本文

````text
下記の指令を遂行するために、まずはタスクを洗い出してissueに登録して

ファイルを変更した場合はissue番号を付与してコミットして

また、進捗報告はコメントで実施して

## 指令

update_issue で下記のエラーがでます
```
{
  "repo": "Sunwood-ai-labs/github-kanban-mcp-server",
  "issue_number": 6,
  "state": "closed"
}
```

```
Error
Error executing MCP tool:
MCP error -32603: MCP error -32603: GitHub API error: Command failed: gh issue edit 6 --repo Sunwood-ai-labs/github-kanban-mcp-server   --state closed  
unknown flag: --state

Usage:  gh issue edit {<numbers> | <urls>} [flags]

Flags:
      --add-assignee login      Add assigned users by their login. Use "@me" to assign yourself.
      --add-label name          Add labels by name
      --add-project name        Add the issue to projects by name
  -b, --body string             Set the new body.
  -F, --body-file file          Read body text from file (use "-" to read from standard input)
  -m, --milestone name          Edit the milestone the issue belongs to by name
      --remove-assignee login   Remove assigned users by their login. Use "@me" to unassign yourself.
      --remove-label name       Remove labels by name
      --remove-project name     Remove the issue from projects by name
  -t, --title string            Set the new title.
  
```

下記のコマンドならできました
```
PS C:\Prj\MCP\kanban-server> gh issue close 6 --repo Sunwood-ai-labs/github-kanban-mcp-server
✓ Closed issue Sunwood-ai-labs/github-kanban-mcp-server#6 (READMEの改善：タイトル、バッジの中央揃え対応)
PS C:\Prj\MCP\kanban-server>
```


## プロジェクトの参考情報

---


。。。
````

## 注意点

- Issue 化、進捗コメント、コミット規約まで含む運用タスクなので、単なるコマンド修正より広い前提があります。
