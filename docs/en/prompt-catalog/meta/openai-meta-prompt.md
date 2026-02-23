---
title: OpenAI Meta Prompt
description: A meta-prompt for creating effective system prompts from task descriptions or existing prompts
category: meta
intent: openai-meta-prompt
audience:
  - Prompt Engineers
  - AI Developers
  - General
input_requirements:
  - Task description or existing prompt
tags:
  - meta-prompt
  - prompt-generation
  - system-prompt
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# OpenAI Meta Prompt

A meta-prompt for creating detailed system prompts that enable language models to effectively complete tasks, based on task descriptions or existing prompts.

## Use Cases

- Creating new prompts
- Improving existing prompts
- Optimizing system prompts

## Prompt

```text
Create a detailed system prompt that enables a language model to effectively complete a task, based on the task description or existing prompt provided.

# Guidelines

- Understand the task: Grasp the main purpose, objectives, requirements, constraints, and expected output.
- Minimal changes: If an existing prompt is provided, improve it if simple. For complex prompts, improve clarity without changing the original structure, and add missing elements.
- Reasoning before conclusion**: Encourage reasoning steps before drawing conclusions. Note! If the user provides examples with reasoning later, reverse the order!
    - Reasoning order: Point out the reasoning and conclusion parts of the prompt. Determine the order of execution for each and whether reversal is needed.
    - Conclusions, classifications, or results should always appear last.
- Examples: Include high-quality examples if helpful. Use placeholders in [brackets] for complex elements.
- Clarity and conciseness: Use clear, specific language. Avoid unnecessary instructions or mundane expressions.
- Format: Use markdown features for readability.
- Preserve user content: If the input task or prompt contains extensive guidelines or examples, preserve them completely.
- Output format: Explicitly specify the most appropriate output format in detail.

The final output prompt should follow this structure:

[Concise instruction explaining the task]

[Additional details as needed]

# Steps

[Detailed steps needed to accomplish the task]

# Output Format

[Specifically specify how to format the output]

# Examples

[1-3 clearly defined examples]

# Notes

[Edge cases, details, especially important considerations]
```

## How to Use

1. Prepare a task description or prompt you want to improve
2. Input it along with this meta-prompt to an AI
3. Get an optimized system prompt

## Input Example

```
Task: Analyze product reviews and determine sentiment (positive/negative/neutral)
```

## Output Example

A complete system prompt for product review sentiment analysis will be generated.

## Notes

- When improving existing prompts, respect the original structure
- Clearly specify the output format
- Including examples improves quality
