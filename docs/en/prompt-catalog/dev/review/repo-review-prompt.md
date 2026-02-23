---
title: Repository Quality Review Prompt
description: Repository-wide quality verification prompt checking README quality, documentation consistency, environment settings, code quality, and project structure
category: dev
intent: repo-review-prompt
audience:
  - Developers
  - Code Reviewers
  - Project Managers
input_requirements:
  - Repository access
tags:
  - repository
  - review
  - documentation
  - quality
  - checklist
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# Repository Quality Review Prompt

A prompt for performing repository-wide quality verification in checklist format.

## Intended Use

- Repository-wide quality verification
- README.md quality check
- Documentation consistency verification
- Environment settings and security check
- Code quality check
- Project structure evaluation

## Prompt Text

```text
# Repository Quality Review Prompt

You are an expert in code review and repository structure analysis. Please perform a quality review of the entire repository according to the following checklist. Evaluate each item with "✅" (no issues), "❌" (issues found), or "⚠️" (partial issues), and if there are problems, provide specific improvement suggestions.

## Checklist

### 📝 README.md Quality Check
- [ ] Is the title centered?
- [ ] Is the header image centered?
- [ ] Are technology stack badges properly placed and centered?
- [ ] Are emojis utilized in each section to improve readability?
- [ ] Does a table of contents exist and is it properly linked?
- [ ] Are installation instructions clearly documented?
- [ ] Are usage instructions clearly documented?
- [ ] Are screenshots and diagrams appropriately used?

### 📚 Overall Documentation Consistency
- [ ] Is there no duplication in content across markdown files at each level (README.md, CONTRIBUTING.md, docs/, etc.)?
- [ ] Are consistent terms used across all documentation?
- [ ] Is the documentation structure across the repository logical?

### 🔒 Environment Configuration and Security
- [ ] Are `.env` and environment variables appropriately used?
- [ ] Are no API keys or passwords or other sensitive information directly written in code?
- [ ] Is `.env` properly documented in the `.gitignore` file?
- [ ] Does `.env.example` exist with examples of required environment variables?

### 💻 Code Quality
- [ ] Are code comments appropriately documented?
- [ ] Are naming conventions consistent?
- [ ] Is there no unused code or commented-out code left behind?
- [ ] Are tests appropriately written and executable?

### 📂 Project Structure
- [ ] Is the folder structure logical and easy to understand?
- [ ] Are dependencies appropriately managed?

## Output Format

Please output the checklist results in the following format:

### 📝 README.md Quality Check
- [✅/❌/⚠️] Is the title centered?
  - Issues and improvement suggestions (if there are problems)
- [✅/❌/⚠️] Is the header image centered?
  - Issues and improvement suggestions (if there are problems)
- ... (and so on)

### 📚 Overall Documentation Consistency
- [✅/❌/⚠️] Is there no duplication in content across markdown files at each level?
  - Issues and improvement suggestions (if there are problems)
- ... (and so on)

(Other sections in the same format)

### 🔍 Overall Assessment
Please provide a concise assessment of the repository's current state and present the 3 most important improvements that should be prioritized.

### 📝 Specific Correction Examples
Please provide specific code or markdown correction examples for the most important improvements.

---

Analyze the entire repository according to this checklist and clarify necessary improvements as the closing process of the development cycle.
```

## How to Use

1. Paste the prompt to AI
2. Provide repository information to check
3. Receive evaluation according to the checklist

## Input Example

Simply provide the repository URL or file structure, and the checklist-based evaluation will be performed.

## Output Example

Evaluation results (✅/❌/⚠️) for each checklist item, and specific improvement suggestions for any issues found.

## Version Differences

- V1: Basic checklist
- V2: Enhanced README hierarchy structure check
- V3: Bilingual Japanese-English support
- V4: More advanced checklist items

## Notes

- Pay special attention to README.md quality
- It's important to avoid documentation duplication
