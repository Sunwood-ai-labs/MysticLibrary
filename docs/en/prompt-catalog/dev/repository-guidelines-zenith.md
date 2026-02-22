---
title: Zenith Repository Operations Guidelines
description: Repository operations guidelines defining README structure, design principles, commit conventions, and more.
category: dev
intent: repository_guidelines_zenith
audience:
  - Development team
  - Repository administrators
  - AI coding agents
input_requirements:
  - Target repository
  - Commit conventions
  - README/documentation policy
tags:
  - repository
  - guidelines
  - standards
  - git
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Zenith Repository Operations Guidelines

## Intended Use

- Establishing operating rules for new/existing repositories
- Sharing as an agent work standard

## Prompt Body

~~~~~md
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

~~~~~

## How to Use

1. Review it together as a base for team conventions
2. Remove unnecessary/excessive rules and narrow the scope of application
3. Convert automatically verifiable items into CI rules

## Input Example

```text
Target: TypeScript web application repository
Operation: PR-based development / Conventional Commits
```

## Output Example

```text
Draft of unified operating rules for README/code/commits
```

## Notes

- Adding too many rules increases operational overhead
- Adjust visual requirements to match product characteristics
