---
title: "Codex Work Rules (todo.md Workflow)"
description: "An operational rules prompt that defines task breakdown, todo.md updates, and how to proceed with investigation/implementation."
canonical_id: "dev/guidelines/codex-work-rules"
canonical_doc: "docs/en/prompt-catalog/dev/guidelines/codex-work-rules.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/guidelines/codex-work-rules.md. Edit docs/ instead. -->

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
