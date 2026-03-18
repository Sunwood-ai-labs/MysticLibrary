---
title: "Repository Quality Review V4"
description: "A review prompt for checklist-based evaluation of README, documentation consistency, security, code quality, and structure."
canonical_id: "dev/review/repo-review-prompt-v4"
canonical_doc: "docs/en/prompt-catalog/dev/review/repo-review-prompt-v4.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/review/repo-review-prompt-v4.md. Edit docs/ instead. -->

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
