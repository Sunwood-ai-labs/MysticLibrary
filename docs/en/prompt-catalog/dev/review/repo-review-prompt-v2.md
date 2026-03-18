---
title: Repository Quality Review Prompt V2
description: Repository-wide quality verification prompt checking README quality, documentation consistency, environment settings, code quality, and project structure
category: dev
intent: repo-review-prompt-v2
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
canonical_id: "dev/review/repo-review-prompt-v2"
prompt_source: "prompts/docs-first/dev/review/repo-review-prompt-v2_EN.md"
---

# Repository Quality Review Prompt V2

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
# Repository Quality Review Prompt V2

You are an expert in code review and repository structure analysis. Please perform a quality check of the entire repository according to the following checklist. Evaluate each item as "✅" (no problem), "❌" (problem exists), or "⚠️" (partial problem), and provide specific improvement suggestions for any issues found.

## Checklist

### 📝 README.md Quality Check
- [ ] Is the title centered?
- [ ] Is the header image centered? (use existing header image if present)
- [ ] Are tech stack badges properly placed and centered?
- [ ] Are emojis used effectively in each section to improve readability?
- [ ] Is documentation properly split and appropriately linked?
- [ ] Are installation instructions clearly documented?
- [ ] Are usage instructions clearly documented?
- [ ] Are screenshots and diagrams appropriately used?

### 📚 Overall Documentation Consistency
- [ ] Does README.md exist at each level? (create if missing)
- [ ] Does each level's README.md appropriately reference the upper level's README.md?
- [ ] Is each README.md content properly split without duplication?
- [ ] Is each README.md not too heavy, properly split into files?
- [ ] Are appropriate links placed in split files?
- [ ] Are consistent terms used across all documentation?
- [ ] Is the documentation structure logical across the entire repository?

### 🔒 Environment Configuration and Security
- [ ] Are `.env` and environment variables appropriately used?
- [ ] Are no API keys or passwords directly written in code? (OK in `.env`)
- [ ] Is `.env` properly listed in `.gitignore` file?
- [ ] Does `.env.example` exist with examples of required environment variables?

### 💻 Code Quality
- [ ] Are code comments appropriately documented?
- [ ] Are naming conventions consistent?
- [ ] Are there no unused code or commented-out code left behind?

### 📂 Project Structure
- [ ] Is the folder structure logical and easy to understand?
- [ ] Are dependencies appropriately managed?

## Output Format

Please output the checklist results in the following format:

### 📝 README.md Quality Check
- [✅/❌/⚠️] Is the title centered?
  - Problem and improvement suggestion (if problem exists)
- [✅/❌/⚠️] Is the header image centered?
  - Problem and improvement suggestion (if problem exists)
- ... (similarly for others)

### 📚 Overall Documentation Consistency
- [✅/❌/⚠️] Does README.md exist at each level?
  - Problem and improvement suggestion (if problem exists)
- [✅/❌/⚠️] Does each level's README.md appropriately reference the upper level's README.md?
  - Problem and improvement suggestion (if problem exists)
- ... (similarly for others)

(other sections in similar format)

### 🔍 Overall Assessment
Provide a concise overall assessment of the repository's current state, and suggest the top 3 most important improvements that should be prioritized.

### 📝 Specific Correction Examples
Provide specific code or markdown correction examples for the most important improvement points.

#### README.md Hierarchy Structure Check
Pay special attention to the following points:
1. Check if each directory has a README.md, and suggest creating one if missing
2. Confirm that each README.md appropriately references the upper README.md to avoid duplication
3. If a README.md is too long, suggest appropriate file splitting and link setup

---

Analyze the entire repository according to this checklist and clarify necessary improvements as a closing process for the development cycle.
```

## How to Use

1. Paste the prompt to AI
2. Provide repository information to check
3. Receive evaluation according to the checklist

## Input Example

Simply provide the repository URL or file structure, and the checklist-based evaluation will be performed.

## Output Example

Evaluation results (✅/❌/⚠️) for each checklist item, and specific improvement suggestions for any issues found.

## Notes

- Pay special attention to README.md hierarchy structure
- It's important to properly split documentation and avoid duplication
