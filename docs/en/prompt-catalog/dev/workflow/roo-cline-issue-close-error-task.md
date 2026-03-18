---
title: Roo-Cline Issue Close Error Task
description: Task prompt for investigating and fixing an issue-close failure while following issue-based execution and reporting workflow.
category: dev
intent: roo-cline-issue-close-error-task
audience:
  - Developers
  - MCP tool maintainers
  - GitHub CLI users
input_requirements:
  - Target repository
  - Observed error
  - Execution logs
tags:
  - roo-cline
  - workflow
  - issue-driven
status: active
owner: prompt-lb-team
last_reviewed: 2026-03-18
canonical_id: "dev/workflow/roo-cline-issue-close-error-task"
legacy_source: "prompts/coding/Roo-cline/task1_EN.md"
prompt_source: "prompts/docs-first/dev/workflow/roo-cline-issue-close-error-task_EN.md"
---

# Roo-Cline Issue Close Error Task

## Intended Use

- When you want to diagnose a GitHub CLI failure while keeping issue registration and progress reporting in the loop
- When you want to propose both the root cause and a workable replacement command

## Prompt Body

````text
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
````

## Notes

- This prompt assumes issue registration, progress comments, and commit hygiene, so it is broader than a simple command fix.
