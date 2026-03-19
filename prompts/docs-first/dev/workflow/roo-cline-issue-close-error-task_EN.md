---
title: "Roo-Cline Issue Close Error Task"
description: "Task prompt for investigating and fixing an issue-close failure while following issue-based execution and reporting workflow."
canonical_id: "dev/workflow/roo-cline-issue-close-error-task"
canonical_doc: "docs/en/prompt-catalog/dev/workflow/roo-cline-issue-close-error-task.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/workflow/roo-cline-issue-close-error-task.md. Edit docs/ instead. -->

First, identify tasks and register them as issues to execute the following instructions

When changing files, commit with the issue number assigned

Also, report progress via comments

## Instructions

The following error occurs with update_issue
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

The following command worked
```
PS C:\Prj\MCP\kanban-server> gh issue close 6 --repo Sunwood-ai-labs/github-kanban-mcp-server
✓ Closed issue Sunwood-ai-labs/github-kanban-mcp-server#6 (READMEの改善：タイトル、バッジの中央揃え対応)
PS C:\Prj\MCP\kanban-server>
```


## Project Reference Information

---


。。。
