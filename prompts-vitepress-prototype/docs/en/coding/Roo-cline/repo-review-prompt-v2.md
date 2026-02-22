---
title: "Repository Quality Review Prompt V2"
sourcePath: "prompts/coding/Roo-cline/repo-review-prompt-v2_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Roo-cline/repo-review-prompt-v2_EN.md`
> Japanese: [JA](/coding/Roo-cline/repo-review-prompt-v2)

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
