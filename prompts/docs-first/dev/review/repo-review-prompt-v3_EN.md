---
title: "Repository Quality Verification Prompt V3"
description: "Repository-wide quality verification prompt checking README quality, documentation consistency, environment settings, code quality, and project structure (bilingual Japanese-English support)"
canonical_id: "dev/review/repo-review-prompt-v3"
canonical_doc: "docs/en/prompt-catalog/dev/review/repo-review-prompt-v3.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/review/repo-review-prompt-v3.md. Edit docs/ instead. -->

# Repository Quality Verification Prompt V3

You are an expert in code review and repository structure analysis. Please perform a quality verification of the entire repository according to the following checklist. Evaluate each item as "✅" (no issues), "❌" (issues found), or "⚠️" (partial issues), and if there are problems, provide specific improvement suggestions.

## Checklist

### 📝 README.md Quality Verification
- [ ] Is the title center-aligned (`<h1 align="center">title</h1>` or `<p align="center"># title</p>` format)
- [ ] Is the header image center-aligned (if a header image already exists, use that one)
- [ ] Are tech stack badges appropriately placed and center-aligned
- [ ] Are language switch badges (Japanese/English) center-aligned
- [ ] Are emojis used in each section to improve readability
- [ ] Are installation instructions concise and clearly described
- [ ] Are usage instructions concise and clearly described
- [ ] Are screenshots or diagrams used as appropriate

### 📚 Overall Documentation Consistency
- [ ] Do README.md (English) and README_JP.md (Japanese) exist at each level (create if missing)
- [ ] Are README titles at each level center-aligned
- [ ] Are language switch badges (Japanese/English) center-aligned in each README
- [ ] Do READMEs at each level appropriately reference higher-level READMEs, avoiding duplication
- [ ] Are README contents simplified to reference code as much as possible
- [ ] Are redundant sections or expressions avoided
- [ ] Is consistent terminology used across all documents

### 🔒 Environment Configuration and Security
- [ ] Are `.env` and environment variables used appropriately
- [ ] Are no API keys or passwords directly written in code (`.env` is acceptable)
- [ ] Is `.env` properly listed in `.gitignore` file
- [ ] Does `.env.example` exist with examples of required environment variables

### 💻 Code Quality
- [ ] Are code comments minimal and appropriate
- [ ] Are naming conventions consistent
- [ ] Is no unused code or commented-out code left unattended

### 📂 Project Structure
- [ ] Is the folder structure logical and easy to understand
- [ ] Are dependencies properly managed

## Output Format

Output the checklist results in the following format:

### 📝 README.md Quality Verification
- [✅/❌/⚠️] Is the title center-aligned
  - Issues and improvement suggestions (if problems exist)
- [✅/❌/⚠️] Is the header image center-aligned
  - Issues and improvement suggestions (if problems exist)
- ... (similarly for other items)

### 📚 Overall Documentation Consistency
- [✅/❌/⚠️] Do README.md (English) and README_JP.md (Japanese) exist at each level
  - Issues and improvement suggestions (if problems exist)
- [✅/❌/⚠️] Are README titles at each level center-aligned
  - Issues and improvement suggestions (if problems exist)
- ... (similarly for other items)

(similar format for other sections)

### 🔍 Overall Assessment
Provide a concise assessment of the repository's current state and present the 3 most important improvements that should be prioritized.

### 📝 Specific Correction Examples
For the most important improvement points, provide specific code or markdown correction examples.

#### README.md Hierarchical Structure Verification
Please verify with special attention to the following points:
1. Check if each directory has README.md (English) and README_JP.md (Japanese), and suggest creation if missing
2. Verify that each README includes language switch badges and has center-aligned titles
3. Confirm that README contents are simplified and contain no redundant information
4. Verify that each README appropriately references higher-level READMEs to avoid duplication

#### Standard Format for Language Switch Badges
Place language switch badges like the following, center-aligned, in each README:
