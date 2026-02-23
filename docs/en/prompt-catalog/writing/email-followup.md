---
title: Follow-up Email Writing
description: A prompt for drafting polite, goal-oriented follow-up emails for cases awaiting a reply.
category: writing
intent: business_email_followup
audience:
  - Sales representatives
  - Customer success
  - Project managers
input_requirements:
  - Recipient information (company name, contact name)
  - Key points of the previous email or sent date/time
  - Current purpose (confirmation, reminder, scheduling, etc.)
  - Desired reply deadline
  - Style preference (polite, concise, slightly softer, etc.)
tags:
  - email
  - follow-up
  - business-writing
status: active
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Follow-up Email Writing

Create an email that politely restates key points to someone whose reply is pending and encourages the next action.

## Intended Use

- Follow-up after sending a proposal
- Re-contact for schedule coordination
- Reminder to submit required information

## Prompt Body

```text
You are a Japanese writer experienced in business communication.
Based on the information below, write a polite follow-up email in Japanese that is not rude to the recipient.

Requirements:
- Provide 3 subject line options
- Structure the body with "greeting", "reference to previous contact", "current request", "deadline/desired action", and "closing"
- Avoid verbose phrasing and keep it readable and concise
- Avoid wording that sounds accusatory toward the recipient
- Propose alternatives when needed (e.g., candidate dates, a short meeting)
- At the end, add one line each for "Tone adjustment idea (slightly stronger / slightly softer)"

Input information:
- Recipient:
- Relationship with recipient:
- Date/time of previous contact:
- Key points of previous contact:
- Current purpose:
- Desired reply deadline:
- Our constraints/background:
- Writing style:
- Prohibited expressions:
```

## Usage

1. Fill in `Input information` with specific details
2. Instead of pasting the original email body, key points alone are acceptable
3. Put phrases you want to avoid into `Prohibited expressions`
4. After generation, a human should verify facts (dates/times, deadlines, proposal details)

## Input Example

```text
- Recipient: ABC Corp., Mr. Yamada
- Relationship with recipient: Prospect currently reviewing a proposal
- Date/time of previous contact: 2026-02-15
- Key points of previous contact: Sent a proposal and rough estimate for an inventory management system renewal. Requested review within this week.
- Current purpose: Ask about the review status of the proposal and propose scheduling a 30-minute Q&A meeting
- Desired reply deadline: 2026-02-25
- Our constraints/background: We need rough agreement by the end of February to secure an early-March project start slot
- Writing style: Polite, concise
- Prohibited expressions: "urgent", "please reply immediately", "no reply"
```

## Output Example

```text
Subject line options:
1. Checking on the review status of our proposal (Inventory Management System Renewal)
2. Request for confirmation regarding the proposal sent recently
3. About the proposal we sent / Consultation on a meeting to review any questions

Body:
ABC Corp.
Mr. Yamada

Thank you as always for your support. This is Sato from XX Corp.

I am contacting you to ask about the review status of the proposal and rough estimate for the inventory management system renewal that I sent on February 15, 2026.

If you have any questions or points you would like to confirm, I would be happy to explain them in a 30-minute meeting.
Please let me know if any of the following times work for you. (Alternative times are also welcome.)

- 2/24 (Tue) 14:00-17:00
- 2/25 (Wed) 10:00-12:00

If possible, I would appreciate it if you could share your availability or review status by Wednesday, 2/25.

Thank you for your time and consideration.

Tone adjustment idea (slightly stronger): Add one sentence noting that a response by the deadline is needed to secure the project start slot
Tone adjustment idea (slightly softer): Rephrase the request as a reply at the recipient's convenience within a reasonable range
```

## Notes

- Avoid expressions that blame the recipient for not replying
- If you include a deadline, also include the background reason
- Always verify auto-generated candidate times against real availability
- Before sending external email, recheck proper nouns, dates, and amounts
