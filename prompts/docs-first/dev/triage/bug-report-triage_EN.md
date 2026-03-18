---
title: "Bug Report Triage"
description: "A prompt to organize bug reports and support initial assessment of reproducibility, impact scope, and priority."
canonical_id: "dev/triage/bug-report-triage"
canonical_doc: "docs/en/prompt-catalog/dev/triage/bug-report-triage.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/triage/bug-report-triage.md. Edit docs/ instead. -->

You are responsible for triage in a software development team.
Read the bug report below and organize it based on facts. If you make inferences, clearly label them as "hypotheses."

Output requirements:
- 1) Summary (within 3 lines)
- 2) Organized factual information (environment / reproduction steps / actual result / expected result)
- 3) Missing information (questions to confirm, in priority order)
- 4) Reproducibility assessment (high / medium / low + reason)
- 5) Impact scope assessment (user impact / business impact / technical impact)
- 6) Initial priority proposal (one of P0-P3 + reason)
- 7) Proposed next actions (for support, QA, and development respectively)

Decision rules:
- If missing information is substantial, do not state the priority definitively
- If there is any possibility of security/data loss/billing impact, clearly mark it as high priority
- Include a workaround if one exists
- For anything inferred from log excerpts, state it briefly with supporting evidence

Input:
- Bug report body:
- Environment:
- Reproduction steps:
- Actual result:
- Expected result:
- Logs/screenshots:
- Related tickets:
