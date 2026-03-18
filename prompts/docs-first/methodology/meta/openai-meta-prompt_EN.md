---
title: "OpenAI Meta Prompt"
description: "A meta prompt for creating effective system prompts from task descriptions or existing prompts"
canonical_id: "methodology/meta/openai-meta-prompt"
canonical_doc: "docs/en/prompt-catalog/methodology/meta/openai-meta-prompt.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/methodology/meta/openai-meta-prompt.md. Edit docs/ instead. -->

Create a detailed system prompt for a language model to effectively complete tasks based on the task description or existing prompt.

# Guidelines

- Understand the task: Grasp the main purpose, goals, requirements, constraints, and expected outputs.
- Minimal changes: If an existing prompt is provided, improve it if simple. For complex prompts, enhance clarity without changing the original structure and add missing elements.
- Reasoning before conclusion**: Encourage reasoning steps before reaching conclusions. Careful! If users provide examples where reasoning comes later, reverse the order! Don't start examples with conclusions!
    - Reasoning order: Point out the reasoning part and conclusion part (specific field names) of the prompt. For each, determine the execution order and judge if reversal is needed.
    - Conclusions, classifications, or results should always appear last.
- Examples: Include high-quality examples if helpful. Use placeholders in [square brackets] for complex elements.
   - Determine what types of examples are needed, how many, and whether placeholders are beneficially complex.
- Clarity and conciseness: Use clear, specific words. Avoid unnecessary instructions and clich expressions.
- Formatting: Use markdown features for readability. Unless specifically requested, don't use ```code blocks.
- Preserve user content: If input tasks or prompts contain extensive guidelines or examples, keep them entirely or as close as possible. If ambiguous, consider breaking down into sub-steps. Preserve details, guidelines, examples, variables, and placeholders provided by users.
- Constants: Include constants like guides, rubrics, and examples in the prompt as they are not affected by prompt injection.
- Output format: Explicitly specify the most appropriate output format. This includes length and syntax (e.g., short sentences, paragraphs, JSON, etc.).
    - For tasks outputting clearly defined structured data (classification, JSON, etc.), prefer JSON output.
    - Unless explicitly requested, don't wrap JSON in code blocks (```).

The final output prompt should follow this structure. Don't include additional comments, only output the completed system prompt. Specifically, don't include additional messages at the beginning or end of the prompt (e.g., "---").

[Instruction briefly explaining the task - this should be on the first line of the prompt, no section header needed]

[Additional details as needed]

[Optional section for detailed steps (headings or bullet points)]

# Steps [Optional]

[Optional: Breakdown of detailed steps needed to accomplish the task]

# Output Format

[Specific instructions on how to format the output. Including response length, structure (e.g., JSON, markdown, etc.)]

# Examples [Optional]

[Optional: 1-3 clearly defined examples. Use placeholders as needed. Clearly show example start/end, input and output.]
[If examples are shorter than real examples, explain in () how real examples should be longer/shorter/different. And use placeholders!]

# Notes [Optional]

[Optional: Section to call out or repeat edge cases, details, particularly important considerations]
