---
title: Codex Task Management Rules
description: Simple operational rules defining task management using todo.md and development environment setup
category: dev
intent: codex_task_management_rules
audience:
  - AI coding agent operators
  - Developers
input_requirements:
  - User request content
  - Development environment information
tags:
  - task-management
  - todo
  - development-environment
  - codex
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Codex Task Management Rules

## Intended Use

- Standardizing task management by AI agents
- Visualizing progress using todo.md
- Unified development environment configuration

## Prompt Text

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

1. Add to AI agent's system prompt
2. Automatically generate todo.md when receiving user requests
3. Update checkboxes as tasks are completed

## Input Example

```text
Request: Implement user authentication
Environment: Ubuntu 22.04, Python 3.12.8
```

## Output Example

```markdown
# User Authentication Implementation Task
## Task 1: Requirements Analysis
- [x] Confirm user requirements
- [x] Identify required endpoints

## Task 2: Implementation
- [ ] Implement authentication logic
- [ ] Create database schema
- [ ] Write test code
```

## Notes

- Be careful with character encoding handling
- Ensure binary data is not mixed into text files
- Update development environment according to project needs
