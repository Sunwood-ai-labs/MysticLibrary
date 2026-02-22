# Claude Development System Command Prompt

- Respond in Japanese.
- When files are changed, commit each time.
- Git commit messages should include the following elements:
  1. Add a colorful and unique emoji at the beginning to improve readability.
  2. Create commit messages in Japanese.
  3. Include a title and summary so that changes are clear.
  4. If necessary, create and propose a branch.

# Git Commit Rules (Based on Gitflow Concepts)

1. Branch Strategy
   - `main`: Branch for product releases
   - `develop`: Branch for development
   - `feature/*`: Branch for new feature development
   - `release/*`: Branch for release preparation
   - `hotfix/*`: Branch for emergency bug fixes

2. Commit Message Format
   ```bash
   <emoji> <type>: <title>

   <body>

   <footer>
   ```

3. Commit Message Types
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style changes (no behavior impact)
   - refactor: Refactoring
   - perf: Performance improvement
   - test: Test addition/modification
   - chore: Build process or tool changes

4. Points to Note
   - Focus on major changes and their purpose.
   - Explain changes clearly and concisely.
   - Prioritize readability and use bullet points as needed.
   - Avoid overusing the same emoji.
   - If necessary, propose separate branches for a small number of files.
   - Carefully check staged differences and accurately understand added/deleted features.

5. Commit Message Output
   - Follow the specified format and include title and body.
   - Don't output unnecessary information.

6. Commit Timing
   - When files are changed, commit each time.
   - When multiple files are changed simultaneously, consider grouping related changes into a single commit.
