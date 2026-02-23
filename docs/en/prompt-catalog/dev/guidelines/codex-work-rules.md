---
title: Codex Work Rules (todo.md Workflow)
description: An operational rules prompt that defines task breakdown, todo.md updates, and how to proceed with investigation/implementation.
category: dev
intent: codex_work_rules_todo
audience:
  - AI Agent Operators
  - Developers
input_requirements:
  - User request details
  - Target repository for the work
  - todo.md operation policy
tags:
  - codex
  - workflow
  - todo
  - agent-ops
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Codex Work Rules (todo.md Workflow)

## Intended Use

- Enforce task breakdown and progress updates for agents
- Standardize handling of investigation tasks and implementation tasks

## Prompt Text

~~~~~md
# Task Management
・When a request is received from a user, think carefully about what the user is asking for and write what should be done next in `todo.md` in Markdown format
・Decide the number of tasks and subtasks based on the request details

# Important
・When outputting text files such as `.md` files, ensure character encoding is converted correctly
・Do not mix binary data into text files

~~~
Example
# XX Task
## Task Name 1
- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3
・Execute tasks according to that task list, and update `todo.md` for completed tasks
- [x] Task  (for example)
~~~

・Investigate investigation tasks, and implement implementation tasks
・For investigation tasks, based on the findings, consider whether deeper investigation is needed to satisfy the user requirements, and update `todo.md` with what should be investigated and any task changes
・Continue working based on the updated tasks

# Development Environment

・Ubuntu 22.04.5 LTS
・node -v : v20.19.0
・uv -V : uv 0.6.10
・python3 -V : Python 3.12.8
・When developing in Python, create a virtual environment with `uv`
~~~~~

## How to Use

1. Integrate it into the system/developer prompt
2. Make updating `todo.md` mandatory before starting work
3. Reflect replanning based on investigation results in `todo.md`

## Input Example

```text
Request: Investigate and fix the cause of an API timeout
Expectation: Manage investigation and implementation separately in todo.md
```

## Output Example

```text
Tasks/subtasks are created in todo.md, and their checkboxes are updated upon completion
```

## Notes

- Confirm that the documented environment versions match the current environment
- Define a separate rule for how to create `todo.md` if it does not exist
