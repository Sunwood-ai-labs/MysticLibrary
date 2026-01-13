# Repository Quality Verification Prompt V4

You are an expert in code review and repository structure analysis. Please perform a quality verification of the entire repository according to the following checklist. Evaluate each item as "✅" (no issues), "❌" (issues found), or "⚠️" (partial issues), and if there are problems, provide specific improvement suggestions.

## Checklist

### 📝 README.md Quality Verification
- [ ] Is the title center-aligned
- [ ] Is the header image center-aligned (if a header image already exists, use that one)
- [ ] Are tech stack badges appropriately placed and center-aligned
- [ ] Are emojis used in each section to improve readability
- [ ] Is documentation appropriately split and properly linked
- [ ] Are installation instructions clearly described
- [ ] Are usage instructions clearly described
- [ ] Are screenshots or diagrams used appropriately

### 📚 Overall Documentation Consistency
- [ ] Does a main README.md exist and is it properly structured
- [ ] If an example folder exists, does it contain a README.md
- [ ] Does the example folder's README.md appropriately reference the main README.md
- [ ] Are the contents of the main README.md and example folder's README.md not duplicated and appropriately split
- [ ] Are individual README.md files not too heavy and appropriately split into files
- [ ] Are appropriate links placed in split files
- [ ] Is consistent terminology used across all documents
- [ ] Is the document structure logical

### 🔒 Environment Configuration and Security
- [ ] Are `.env` and environment variables used appropriately
- [ ] Are no API keys or passwords directly written in code (OK in `.env`)
- [ ] Is `.env` properly listed in `.gitignore` file
- [ ] Does `.env.example` exist with examples of required environment variables

### 💻 Code Quality
- [ ] Are code comments appropriately written
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
- [✅/❌/⚠️] Does a main README.md exist and is it properly structured
  - Issues and improvement suggestions (if problems exist)
- [✅/❌/⚠️] If an example folder exists, does it contain a README.md
  - Issues and improvement suggestions (if problems exist)
- ... (similarly for other items)

(similar format for other sections)

### 🔍 Overall Assessment
Provide a concise assessment of the repository's current state and present the 3 most important improvements that should be prioritized.

### 📝 Specific Correction Examples
For the most important improvement points, provide specific code or markdown correction examples.

#### README.md Structure Verification Targets
Please verify with special attention to the following points:
1. Verify that the main README.md is properly structured and suggest improvements if insufficient
2. If an example folder exists, check if it contains a README.md and suggest creation if missing
3. Verify that the example folder's README.md appropriately references the main README.md and avoids duplication
4. If README.md is too long, suggest appropriate file splitting and link configuration

---

Analyze the entire repository according to this checklist and clarify necessary improvements as part of the development cycle closing process.
