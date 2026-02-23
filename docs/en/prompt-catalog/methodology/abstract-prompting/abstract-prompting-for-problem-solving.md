---
title: Problem Solving with Abstraction Prompts
description: A prompt for systematic problem-solving by abstractly representing thinking processes using symbols and abbreviations
category: methodology
intent: abstract-prompting-problem-solving
audience:
  - Prompt engineers
  - Problem solvers
input_requirements:
  - Issues or problems to solve
tags:
  - abstraction
  - symbols
  - problem solving
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# Problem Solving with Abstraction Prompts

## Intended Use

- When you want to systematically solve complex problems
- When you want to clarify your thinking process
- When you want to share a common understanding of problem-solving processes in a team

## Structure and Meaning of Abstraction Prompts

### Symbol Meanings

| Symbol | Meaning |
|--------|---------|
| ΣΣΣΣΣ | Information Gathering and Analysis |
| , , , , , | Idea Generation (Divergent Thinking) |
| =<> | Idea Evaluation (Convergent Thinking) |
| ∵... ∴... | Logical Thinking and Causal Analysis |
| QED | Conclusion and Decision Making |
| '''' | Action Plan Formulation and Execution |

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
```

## How to Use

1. Enter the problem you want to solve in `{Task Content}`
2. Enter the specific goal you want to achieve in `{Goal}`
3. Adjust the priority (numbers) of each step as needed

## Input Example

```text
A to Z [E-commerce Site Conversion Rate Improvement]:
[5] ΣΣΣΣΣ Information Gathering and Analysis: Please collect and analyze information related to improving e-commerce site conversion rates. Include background of the problem, relevant data, and stakeholder opinions.
...

Goal: Improve conversion rate from current 2% to 5%
```

## Output Example

```text
## Information Gathering and Analysis
- Current conversion rate is 2%
- Bounce rate is high at 60%
- Cart addition rate is 15% but purchase completion rate is 13%
...
```

## Notes

- The numbers preceding each symbol represent priority/importance (higher = more important)
- Steps are intended to be executed in sequence
- For complex problems, iterating through each step multiple times can be effective
