---
title: "Zenith Repository Operations Guidelines"
description: "Repository operations guidelines defining README structure, design principles, commit conventions, and more."
canonical_id: "dev/guidelines/repository-guidelines-zenith"
canonical_doc: "docs/en/prompt-catalog/dev/guidelines/repository-guidelines-zenith.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/dev/guidelines/repository-guidelines-zenith.md. Edit docs/ instead. -->

## Repository Requirements Definition Prompt

### Basic Policy

- **Language Policy**  
  - Code elements such as variable names, function names, class names, and file names in code: English  
  - Comments, README, documentation, and commit messages: Japanese

- **README Creation and Maintenance**  
  - Always create `README.md` and write it in Japanese.  
  - In `README.md`, use an SVG header image stored in the `assets` directory and place it centered.  
    - The SVG should have rounded corners, gradients, and animations for shapes/text/gradients, and include polished English wording.  
  - Update `README.md` whenever changes occur.  
  - Avoid duplicate content and centralize sources of truth.
  - Add emojis to README sections to improve readability

### Coding Principles

1. **DRY (Don't Repeat Yourself)**  
   - Improve reusability by turning identical/similar processing into functions or modules.

2. **Separation of Concerns**  
   - Clarify a single responsibility for each module/class/function, and separate presentation, logic, and data processing.

3. **KISS (Keep It Simple, Stupid)**  
   - Keep code as simple as possible and avoid excessive complexity.

4. **Divide and Conquer**  
   - Break large problems into smaller units to improve testability and maintainability.

5. **Defensive Programming**  
   - Perform input validation, exception handling, and error countermeasures to ensure robustness and security.

6. **YAGNI (You Aren't Gonna Need It)**  
   - Focus on current requirements and avoid over-implementation based on unnecessary future speculation.

7. **Readability and Documentation**  
   - Use English for variable/function/class names, with naming that clearly shows their roles at a glance.  
   - Clearly explain code intent and logic in Japanese via comments and the README.

8. **Test-Driven Development (TDD) and Unit Tests**  
   - Provide unit tests for core functionality.  
   - Recommend TDD and establish the cycle of requirements definition -> tests -> implementation -> refactoring.

9. **Version Control and Code Review**  
   - Manage change history with Git and conduct code reviews through pull requests.  
   - When files are changed, commit per changed file to keep history management clear.

10. **Applying SOLID Principles**  
    - Consider SRP, OCP, LSP, ISP, and DIP to create designs with high extensibility and maintainability.

### Commit Message Format

- Commit messages must follow the format below:

  ```
  <emoji> <type>: <title>

  <body>

  <footer>
  ```

- The title (the first line of the commit message) must always start with an emoji and be written in Japanese.  
- The type must be one of the following:

  - **feat**: New feature  
  - **fix**: Bug fix  
  - **docs**: Documentation changes  
  - **style**: Code style changes (no behavior impact)  
  - **refactor**: Refactoring  
  - **perf**: Performance improvement  
  - **test**: Add/modify tests  
  - **chore**: Build process or tooling changes

### Additional Requirements (As Needed)

- **CI/CD Introduction**: Establish pipelines for automated testing, builds, and deployment to achieve quality and rapid releases.  
- **Performance Optimization**: Measure and improve as needed to achieve efficient scaling.  
- **Accessibility / Internationalization Support**: Consider i18n and accessibility support according to target users.
