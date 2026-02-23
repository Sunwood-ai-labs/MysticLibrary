---
title: Self-Improvement Implementation Prompt
description: An iterative development prompt that cycles through requirements definition, implementation, criticism, and improvement
category: dev
intent: self-improvement-implementation
audience:
  - Developers
  - Product Owners
  - Project Managers
input_requirements:
  - Description of the feature to implement
  - Current system status
tags:
  - development
  - iterative-improvement
  - requirements-definition
  - code-review
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# Self-Improvement Implementation Prompt

## Use Cases

- Requirements definition and implementation of new features
- Code criticism and improvement
- Iterative development cycles
- Quality improvement

## Prompt

```text
# Self-Improvement Implementation Prompt

Define the requirements for features missing in this system, implement them step by step. After implementation, criticize it harshly and provide improvement points, then re-implement. Continue this loop to produce the best possible deliverable.
```

## How to Use

1. Explain the feature you want to implement and the current system status
2. Execute the prompt
3. The loop runs: Requirements → Implementation → Criticism → Improvement

## Input Example

```
Current System: [Description]
Feature to Implement: [Description]
Constraints: [If any]
```

## Output Example

1. Requirements Definition: Detailed feature specifications
2. Implementation: Code creation
3. Criticism: Identification of issues
4. Improvement: Re-implementation
5. (Loop continues)

## Notes

- Harsh criticism is important
- Provide clear improvement points
- Continue the loop to improve quality
- Aim for the best final deliverable
