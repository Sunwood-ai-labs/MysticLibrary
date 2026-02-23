---
title: CodeX Rules
description: Rules for task management, development environment, and character encoding in CodeX
category: dev
intent: codex-rules
audience:
  - CodeX users
  - AI development agent users
input_requirements:
  - User development requirements
tags:
  - codex
  - task-management
  - development-environment
  - character-encoding
status: stable
owner: dev-team
last_reviewed: 2025-02-23
---

# CodeX Rules

## Intended Use

- Task management in CodeX
- Proper character encoding handling
- Unified development environment

## Prompt Content

```text
# Task Management
- When receiving a request from a user, carefully consider what the user is asking for and write down what needs to be done in todo.md in markdown format
- Please judge the number of tasks and subtasks based on the request content

# Important
- When outputting text files such as md files, please ensure that character encoding is correctly converted
- Do not mix binary data into text files

~~~
Example
# XX Task
## Task Name 1
- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3
- Please execute tasks along this task list, and for completed tasks update todo.md like
- [x] Task
~~~

- For investigation tasks, investigate; for implementation tasks, implement
- For investigation tasks, based on the investigation results, consider whether deeper investigation is necessary to meet user requirements, and update todo.md with what should be investigated and any task changes
- Continue execution based on the updated tasks

# Development Environment

- Ubuntu 22.04.5 LTS
- node -v : v20.19.0
- uv -V : uv 0.6.10
- python3 -V : Python 3.12.8
- When developing in Python, create a virtual environment with uv
```

## Usage

1. Set as system prompt in CodeX
2. Convey development requirements to the user
3. todo.md will be automatically generated and tasks will be managed

## Input Example

```
User: "Create a To-Do app"
```

## Output Example

```
# To-Do App Development Task

## Task Name 1
- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3
```

## Notes

- Attention must be paid to character encoding
- Do not mix binary data into text files
