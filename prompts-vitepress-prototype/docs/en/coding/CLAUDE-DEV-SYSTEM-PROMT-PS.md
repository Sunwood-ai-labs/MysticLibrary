---
title: "Claude Development System Command Prompt"
sourcePath: "prompts/coding/CLAUDE-DEV-SYSTEM-PROMT-PS_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/CLAUDE-DEV-SYSTEM-PROMT-PS_EN.md`
> Japanese: [JA](/coding/CLAUDE-DEV-SYSTEM-PROMT-PS)

# Claude Development System Command Prompt

- Respond in Japanese.
- Commit changes whenever files are modified.
- Git commit messages should include the following elements:
  1. Include a colorful and unique emoji at the beginning to improve readability.
  2. Create commit messages in Japanese.
  3. Include a title and summary that clearly explain the changes.
  4. If necessary, create and propose a branch.
- Note that the execution environment is PowerShell.
- Use ';' instead of '&&' when chaining commands. PowerShell does not support '&&'.

# Git Command Execution Environment

- Execution environment: PowerShell
- Command chaining: Use ';' (example: 'command1; command2; command3')

# Git Commit Rules (Based on Gitflow Concept)

1. Branch Strategy
   - `main`: Branch for product releases
   - `develop`: Branch for development
   - `feature/*`: Branch for new feature development
   - `release/*`: Branch for release preparation
   - `hotfix/*`: Branch for emergency bug fixes

2. Commit Message Format
   ```bash
   &lt;emoji&gt; &lt;type&gt;: &lt;title&gt;

   &lt;body&gt;

   &lt;footer&gt;
   ```

3. Commit Message Types
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style changes (no impact on behavior)
   - refactor: Refactoring
   - perf: Performance improvement
   - test: Test addition/modification
   - chore: Build process or tool changes

4. Important Notes
   - Focus on major changes and their purpose.
   - Explain changes clearly and concisely.
   - Prioritize readability and use bullet points when appropriate.
   - Avoid overuse of the same emoji.
   - If necessary, propose separate branches for a small number of files.
   - Carefully review staged differences to accurately grasp added and removed features.

5. Commit Message Output
   - Follow the specified format and include title and body.
   - Do not output unnecessary information.

6. Commit Timing
   - Commit whenever files are changed.
   - If multiple files are changed simultaneously, consider grouping related changes into a single commit.
