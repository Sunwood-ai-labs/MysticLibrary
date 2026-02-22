---
title: "Repository Quality Review Prompt"
sourcePath: "prompts/coding/Roo-cline/repo-review-prompt_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/repo-review-prompt_EN.md`
> Japanese: [JA](/coding/Roo-cline/repo-review-prompt)

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
