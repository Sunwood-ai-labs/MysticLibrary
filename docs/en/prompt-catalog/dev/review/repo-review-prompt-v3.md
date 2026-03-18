---
title: Repository Quality Verification Prompt V3
description: Repository-wide quality verification prompt checking README quality, documentation consistency, environment settings, code quality, and project structure (bilingual Japanese-English support)
category: dev
intent: repo-review-prompt-v3
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
  - bilingual
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
canonical_id: "dev/review/repo-review-prompt-v3"
prompt_source: "prompts/docs-first/dev/review/repo-review-prompt-v3_EN.md"
---

# Repository Quality Verification Prompt V3

A prompt for performing repository-wide quality verification in checklist format. V3 adds bilingual support for Japanese-English (README.md and README_JP.md).

## Intended Use

- Repository-wide quality verification
- README.md quality check (bilingual support)
- Documentation consistency verification
- Environment settings and security check
- Code quality check
- Project structure evaluation

## Prompt Text

```text
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

```markdown
<p align="center">
    <a href="README_JP.md"><img src="https://img.shields.io/badge/ドキュメント-日本語-white.svg" alt="JA doc"/></a>
	<a href="README.md"><img src="https://img.shields.io/badge/english-document-white.svg" alt="EN doc"></a>
</p>
```

---

Analyze the entire repository according to this checklist and clarify necessary improvements as part of the development cycle closing process.
```

## How to Use

1. Paste the prompt to AI
2. Provide repository information to check
3. Receive evaluation according to the checklist

## Input Example

Simply provide the repository URL or file structure, and the checklist-based evaluation will be performed.

## Output Example

Evaluation results (✅/❌/⚠️) for each checklist item, and specific improvement suggestions for any issues found.

## Differences from V2

- Bilingual support for Japanese-English (README.md and README_JP.md)
- Added standard format for language switch badges
- Emphasis on documentation simplification and duplication elimination

## Notes

- Pay special attention to README.md hierarchy structure
- Verify that both Japanese and English READMEs exist
- Check that language switch badges are properly placed
