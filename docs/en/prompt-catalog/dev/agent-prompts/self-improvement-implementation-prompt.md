---
title: Self-Improvement Implementation Prompt
description: Iterative development prompt that cycles through requirements definition, implementation, criticism, and improvement to produce the best deliverable
category: dev
intent: self-improvement-implementation
audience:
  - Developers
  - Product owners
  - AI agent users
input_requirements:
  - Overview of system or functionality to develop
  - Purpose and goals for improvement
tags:
  - iterative-development
  - self-improvement
  - quality-improvement
  - review-cycle
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Self-Improvement Implementation Prompt

## 想定用途

- Identify and implement missing features in a system
- Critique implementation strictly and find improvements
- Iterate improvement loops to create the best deliverable
- Perform iterative development

## プロンプト本文

```text
# Self-Improvement Feature Implementation Prompt

Define requirements for missing features in this system, implement them step by step. After implementing features, critique strictly and give improvement points, then reimplement. Continue this loop to output the best deliverable.
```

## 使い方

1. Explain the overview of the system or functionality to develop
2. Set the purpose and goals for improvement
3. AI automatically executes requirements definition → implementation → criticism → improvement loop

## 入力例

```text
Please improve a web application with user management functionality.
```

## 出力例

```text
## Requirements Definition
After analyzing the current system, the following features are missing:
1. Password reset functionality
2. User profile editing
3. Login history display

## Implementation (Iteration 1)
[Implementation code]

## Critique
Good points:
- Basic functionality is implemented
- Error handling is appropriate

Improvement points:
- Security measures insufficient (need CSRF protection)
- Room for UI/UX improvement
- Performance optimization possible

## Implementation (Iteration 2)
[Improved implementation code]
```

## 注意点

- Criticize strictly (avoid lenient evaluation)
- List improvement points specifically
- End the loop after appropriate iterations
- Final deliverable should be practical and high-quality
