---
title: Workflow Generation with Abstraction Prompts
description: Automatically generate workflows for task execution using abstraction prompts
category: methodology
intent: abstract-prompting-workflow
audience:
  - Project managers
  - Task owners
input_requirements:
  - Task content
  - Goals
tags:
  - abstraction
  - workflow
  - task management
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# Workflow Generation with Abstraction Prompts

## Intended Use

- When you want to systematically plan task execution steps
- When you want to automatically generate workflows
- When you want to standardize processes

## Prompt

```text
A to Z [{Task Content}]:
[5] ΣΣΣΣΣ Information Gathering and Analysis: Please collect and analyze information related to {Task Content}. Include background of the problem, relevant data, and stakeholder opinions.
[4] , , , , , Idea Generation: Based on the collected information, please generate various ideas to achieve {Task Content}. Aim for creative and innovative thinking.
[5] =<> Idea Evaluation: Please evaluate the generated ideas and select the optimal solution from perspectives of feasibility, effectiveness, and efficiency.
[3] ∵... ∴... Logical Thinking: Please explain logically why the selected solution is effective. Consider relationship to the problem, strengths and weaknesses, and conditions for implementation.
[6] QED Conclusion and Decision Making: Based on the above analysis and evaluation, please state a conclusion for {Task Content} and make a decision.
[4] '''' Action Plan Formulation: Based on the decision, please formulate a concrete action plan. Include steps, schedule, and necessary resources to achieve the task.
[5] '''' Execution: Please proceed to execute the formulated action plan. Regularly check progress and make steady progress on the task, revising the plan as necessary.

Goal: {Goal}

Following the above procedure, please derive a solution to achieve {Goal}. Please provide specific and logical explanations for analysis, evaluation, and decision making at each step. The final solution must effectively solve the problem, be feasible, and provide value to stakeholders.

Generate Workflow
```

## How to Use

1. Enter the task you want to execute in `{Task Content}`
2. Enter the goal you want to achieve in `{Goal}`
3. Use "Generate Workflow" at the end to explicitly request workflow output

## Input Example

```text
A to Z [New Feature Release]:
...
Goal: Smooth release and proper user notification
Generate Workflow
```

## Output Example

```text
# Workflow: New Feature Release

## Phase 1: Information Gathering and Analysis
- [ ] Review relevant documentation
- [ ] Interview stakeholders
...

## Phase 2: Idea Generation
- [ ] Brainstorm release methods
...
```

## Notes

- The numbers preceding each step represent priority (range of 3-6)
- The instruction "Generate Workflow" explicitly requests workflow-formatted output
- Adjust the generated workflow according to your actual project needs
