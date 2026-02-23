---
title: Agent Ops Note (Work Log Template)
description: A template prompt for organizing and recording work background, plan, execution, verification, and next actions.
category: dev
intent: agent_ops_note_template
audience:
  - Developers
  - AI agent operators
  - Reviewers
input_requirements:
  - Task ID / owner / date and time
  - Background and objective
  - Work performed and verification results
  - Remaining issues and next actions
tags:
  - agent
  - ops
  - worklog
  - template
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Agent Ops Note (Work Log Template)

## Intended Use

- Leave work summaries in PRs and tickets
- Share background, decisions, and remaining issues during handoff

## Prompt Body

~~~~~md
# Agent Ops Note (AON)
- **Task ID / Owner / Date & Time**
- **TL;DR** (2-3 lines: goal -> key actions -> results/impact)

## 🎯 1. Context & Objective
- Why this work was done (background / constraints / goal)

## 📝 2. Plan
- Brief approach and points kept in mind

## 🔧 3. Execution (Do)
- Retrieve Git diff (3 files changed)
- Generate a summary with an LLM
- Attach the report to the PR

## ✅ 4. Results & Verification (Check)
- Expected vs actual (test results, review status, etc.)
- Deliverable links (PR/files/screenshots, etc.)

## 💡 5. Decision (Act)
- Summarize this decision in one line  
  (Example: "We removed the old procedure and decided to support only the latest API.")

## 🚧 6. Issues, Risks, and Next Actions
- Open issues, risks, and who handles the next step

## 🔥 7. Only if an incident/deviation occurred: Postmortem
- What happened / cause / recurrence prevention measures
~~~~~

## How to Use

1. Fill each section with fact-based information
2. Include metrics, logs, and links for verification results
3. Clearly specify the owner and deadline for next actions

## Input Example

```text
Task ID: FE-142
Objective: Improve search response
Execution: Query review / added index
Verification: p95 1.8s -> 0.7s
```

## Output Example

```text
Work log Markdown with organized background/plan/execution/verification/decision/open issues
```

## Notes

- Clearly label speculation as a "hypothesis"
- Do not write unperformed verification as if it was completed
