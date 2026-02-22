---
title: "下記の指令を遂行するために、まずはタスクを洗い出してissueに登録して"
sourcePath: "prompts/coding/Roo-cline/task1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/coding/Roo-cline/task1_JP.md`
> 英語版: [EN](/en/coding/Roo-cline/task1)


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
