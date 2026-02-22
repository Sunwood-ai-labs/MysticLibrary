---
title: Repository Quality Review V4
description: A review prompt for checklist-based evaluation of README, documentation consistency, security, code quality, and structure.
category: dev
intent: repository_quality_review_v4
audience:
  - Reviewer
  - Tech Lead
  - AI review operator
input_requirements:
  - Target repository
  - Review scope
  - Output format requirements
tags:
  - repo-review
  - checklist
  - documentation
  - security
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Repository Quality Review V4

## Intended Use

- Pre-release quality checks
- Periodic repository health audits

## Prompt Body

~~~~~md
# Repository Quality Check Prompt V4

You are an expert in code review and repository structure analysis. Please perform a quality review of the entire repository using the checklist below. For each item, evaluate it as one of the following: "✅" (no issue), "❌" (issue found), or "⚠️" (partially problematic). If there is a problem, provide specific improvement suggestions.

## Checklist

### 📝 README.md Quality Review
- [ ] Is the title center-aligned?
- [ ] Is the header image center-aligned? (If a header image already exists, use it.)
- [ ] Are technology stack badges placed appropriately and center-aligned?
- [ ] Are emojis used effectively in each section to improve readability?
- [ ] Is the documentation appropriately split and properly cross-linked?
- [ ] Are installation steps clearly documented?
- [ ] Is usage clearly documented?
- [ ] Are screenshots or diagrams used appropriately?

### 📚 Overall Documentation Consistency
- [ ] Does a top-level README.md exist and is it properly structured?
- [ ] If an `example` folder exists, does it contain a README.md?
- [ ] Does the README.md in the `example` folder properly reference the top-level README.md?
- [ ] Are the top-level README.md and the `example` folder README.md properly divided without overlapping content?
- [ ] Is each README.md kept from becoming too large, with appropriate file splitting?
- [ ] Are proper links added to the split files?
- [ ] Is consistent terminology used across all documentation?
- [ ] Is the documentation structure logical?

### 🔒 Environment Configuration and Security
- [ ] Are `.env` files and environment variables used appropriately?
- [ ] Are sensitive values such as API keys or passwords not written directly in code? (`.env` is allowed)
- [ ] Is `.env` properly listed in the `.gitignore` file?
- [ ] Does `.env.example` exist and include examples of required environment variables?

### 💻 Code Quality
- [ ] Are code comments written appropriately?
- [ ] Are naming conventions consistent?
- [ ] Is unused code or commented-out code not left behind?

### 📂 Project Structure
- [ ] Is the folder structure logical and easy to understand?
- [ ] Are dependencies managed appropriately?

## Output Format

Please output the checklist results in the following format:

### 📝 README.md Quality Review
- [✅/❌/⚠️] Is the title center-aligned?
  - Issues and improvement suggestions (if there is a problem)
- [✅/❌/⚠️] Is the header image center-aligned?
  - Issues and improvement suggestions (if there is a problem)
- ... (same for the remaining items)

### 📚 Overall Documentation Consistency
- [✅/❌/⚠️] Does a top-level README.md exist and is it properly structured?
  - Issues and improvement suggestions (if there is a problem)
- [✅/❌/⚠️] If an `example` folder exists, does it contain a README.md?
  - Issues and improvement suggestions (if there is a problem)
- ... (same for the remaining items)

(Use the same format for the other sections as well.)

### 🔍 Overall Assessment
Provide a brief overall assessment of the repository's current state and the top 3 most important improvements to prioritize.

### 📝 Concrete Fix Examples
For the most important improvement, provide concrete code or Markdown fix examples.

#### README.md Structure Review Focus
Pay special attention to the following points:
1. Check whether the top-level README.md is properly structured, and propose improvements if anything is missing.
2. If an `example` folder exists, check whether it contains a README.md; if not, propose creating one.
3. Check whether the README.md in the `example` folder properly references the top-level README.md and avoids duplication.
4. If the README.md is too long, propose appropriate file splitting and link organization.

---

Analyze the entire repository using this checklist, and clearly identify the improvements needed as part of the development cycle closing process.
~~~~~

## Usage

1. Specify the target scope (entire repository / partial) before running.
2. Keep the output format (`✅/⚠️/❌`, overall assessment, fix examples).
3. Validate findings against actual files before adopting them.

## Input Example

```text
Target: entire monorepo
Focus: README consistency / secret leakage / project structure
Output: checklist + overall assessment + fix examples
```

## Output Example

```text
Per-item evaluations and improvement suggestions, top 3 priority improvements, concrete fix examples
```

## Notes

- LLM reviews may include false positives/oversights, so human verification is required.
- Use dedicated tools together with this prompt for secret scanning.
