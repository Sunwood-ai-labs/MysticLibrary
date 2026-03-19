---
title: "Agent Ops Note (Work Log Template)"
description: "A template prompt for organizing and recording work background, plan, execution, verification, and next actions."
canonical_id: "dev/templates/agent-ops-note"
canonical_doc: "docs/en/prompt-catalog/dev/templates/agent-ops-note.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/templates/agent-ops-note.md. Edit docs/ instead. -->

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
