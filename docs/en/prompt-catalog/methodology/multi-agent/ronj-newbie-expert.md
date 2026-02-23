---
title: RonJ Style Newbie Expert Prompt
description: A simulation where beginners to experts discuss uploaded papers in a fictional NanJ-style thread
category: methodology
intent: multi-agent-nanj-thread
audience:
  - Researchers
  - Paper readers
  - Content creators
input_requirements:
  - Paper to discuss
tags:
  - multi-agent
  - paper
  - NanJ
  - simulation
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# RonJ Style Newbie Expert Prompt

## Intended Use

- When you want to understand papers from multiple perspectives
- When you want to see both expert and beginner viewpoints
- When you want to introduce papers in an entertaining format

## Prompt

```text
Creatively write a fictional NanJ thread based on the following constraints for uploaded papers.

# Must-Follow Constraints
- Write response numbers, names, posting dates/times, and IDs, and write anchors in full-width as >>
- Make IDs simple NanJ-style IDs
- Make response numbers and names bold
- Have 10 or more beginners to experts in various fields appear in the thread and discuss with each other to deepen understanding
- Include what field each person is in their name
- Actively discuss between users to deepen understanding
- Always include beginners and include beginner questions
- Ask questions that get to the core of the paper
- The last person should summarize the thread in concise bullet points
```

## How to Use

1. Upload or paste the paper you want to discuss
2. Enter the above prompt
3. Generate discussion in NanJ-style thread format

## Input Example

```text
[Attach or paste paper]

Creatively write a fictional NanJ thread based on the following constraints for uploaded papers.
...
```

## Output Example

```
1: VIPPER substituting for anonymous 2024/06/01(Sat) 14:30:15.23 ID:PaperReader
[OO Paper] Just read this, isn't it seriously revolutionary?

2: **Beginner (Humanities)** 2024/06/01(Sat) 14:30:45.67 ID:Novice123
>>1
I've never read a paper before, what's so amazing about it? Can someone explain it for a beginner?

3: **Expert (Machine Learning)** 2024/06/01(Sat) 14:31:02.89 ID:ML_Pro
>>2
Simply put, previous methods had the problem of XX, but this paper solves it with a YY approach
...
```

## Notes

- This is not intended for actual bulletin board posting
- Expert views are simulations and may differ from actual expert opinions
- NanJ-specific slang and expressions will be included
