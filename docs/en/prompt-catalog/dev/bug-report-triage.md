---
title: Bug Report Triage
description: A prompt to organize bug reports and support initial assessment of reproducibility, impact scope, and priority.
category: dev
intent: bug_report_triage
audience:
  - Developers
  - QA
  - First-line Support
input_requirements:
  - Bug report body
  - Environment (OS/browser/app version)
  - Reproduction steps (as far as known)
  - Actual result and expected result
  - Logs/screenshots/related tickets (if any)
tags:
  - bug
  - triage
  - qa
  - development
status: active
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Bug Report Triage

This prompt is used to organize incoming bug reports before passing them directly to the development team and to prioritize what should be checked first.

## Intended Use

- Initial handoff from support to development
- Missing-information check before QA ticket creation
- Initial organization for incident investigation

## Demo Video

<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2025574599501713492" />
</ClientOnly>

## Prompt Text

```text
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
```

## How to Use

1. Paste the received report as-is.
2. Blank fields can remain blank (they will be extracted as missing information).
3. Use the generated result to refine inquiry templates or ticket descriptions.
4. Make the final priority decision based on your team's criteria.

## Input Example

```text
- Bug report body: In the admin order list, when changing the status to "Shipped," the screen occasionally freezes and does not save. After reloading, it may revert to the previous state.
- Environment: Windows 11 / Chrome 132 / Admin UI v2.8.1
- Reproduction steps:
  1. Open the order list
  2. Change any order status to "Shipped"
  3. Click Save
  4. After a few seconds, the UI may stop responding
- Actual result: Stuck on loading and cannot operate. After browser reload, the change may not be reflected.
- Expected result: Save completes within a few seconds and is reflected in the list
- Logs/screenshots: Frontend logs contain `PATCH /api/orders/{id}` 504 records (2 occurrences)
- Related tickets: INC-231, CS-882
```

## Output Example

```text
1) Summary
- Report of a case where the UI freezes during order status changes in the admin screen, leaving the save incomplete
- Occurs in Chrome/Windows, with API 504 logs recorded
- Possible causes include order update processing or API timeout

2) Organized factual information
- Environment: Windows 11 / Chrome 132 / Admin UI v2.8.1
- Reproduction steps: Order list > Change status > Save
- Actual result: Loading continues, UI becomes unusable, and in some cases changes are not reflected after reload
- Expected result: Save succeeds and is reflected in the list

3) Missing information (priority order)
- Occurrence frequency (how many cases out of how many attempts)
- Whether specific order conditions are involved (number of items, product count, shipping method, etc.)
- API server logs at the same timestamps
- Reproducibility in other browsers / for other users

4) Reproducibility assessment
- Medium: Steps are clear, but conditions are not fixed because it happens "occasionally"

5) Impact scope assessment
- User impact: Admin users may be unable to update orders
- Business impact: Possible delays in shipping operations
- Technical impact: Suspected timeout or lock contention in the order update API

6) Initial priority proposal
- P1: Impacts order operations and may cause update failures (not data loss, but unsaved changes)

7) Proposed next actions
- Support: Confirm occurrence time, target order IDs, and frequency
- QA: Reproduction testing in staging under high-order-volume / concurrent update conditions
- Development: Check server logs and DB wait status at API 504 timestamps
```

## Notes

- Priority assessment by an LLM is only advisory and must not override operational definitions
- Mask logs if they contain personal or sensitive information
- If there is any possibility of a security incident, skip normal triage and escalate immediately
- The lower the reproducibility, the more important it is to design follow-up questions about occurrence conditions
