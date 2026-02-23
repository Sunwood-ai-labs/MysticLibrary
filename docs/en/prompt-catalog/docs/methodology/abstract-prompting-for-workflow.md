---
title: Abstract Prompting Workflow Generation
description: Problem-solving workflow generation using abstract prompt notation
category: docs
intent: abstract-prompting-for-workflow
audience:
  - Problem solvers
  - Project managers
  - Consultants
input_requirements:
  - Task content
  - Goal
tags:
  - methodology
  - problem-solving
  - workflow
  - abstraction
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# Abstract Prompting Workflow Generation

## Intended Use

- Generating problem-solving workflows
- Utilizing abstract prompt notation
- Designing systematic problem-solving processes

## Prompt Content

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

## Usage

1. Prepare task content and goal
2. Input prompt to AI
3. Generate workflow

## Input Example

```
Task Content: Formulate marketing strategy for new product
Goal: Achieve 10% market share within 3 months
```

## Notes

- Numbers in each step indicate priority
- Uses abstract prompt notation
- Requires specific and logical explanations
