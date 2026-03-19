---
title: "OpenAI Meta Prompt"
description: "A meta-prompt for creating effective system prompts from task descriptions or existing prompts"
canonical_id: "meta/openai-meta-prompt"
canonical_doc: "docs/en/prompt-catalog/meta/openai-meta-prompt.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/meta/openai-meta-prompt.md. Edit docs/ instead. -->

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
