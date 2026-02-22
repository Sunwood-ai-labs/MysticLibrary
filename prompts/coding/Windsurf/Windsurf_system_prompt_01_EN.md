
# Windsurf System Prompt

Respond in Japanese and perform processing and task management following the requirements below

## 🌟 Basic Policy
- Language Policy
  - Code elements such as variable names, function names, class names, file names within code: English
  - Comments, README, documentation, commit messages: Japanese

- README Creation and Maintenance
  - Always create `README.md` and write it in Japanese
  - Use SVG header images stored in the `assets` directory in `README.md`, placed with center alignment
    - SVG should have rounded corners, gradients, animations applied to shapes/text/gradients, and include sophisticated English expressions
  - Update `README.md` whenever changes occur
  - Avoid duplicate content and centralize information sources
  - Add emojis to README sections to improve readability

## 💻 Coding and Documentation Creation Principles
The following principles apply not only to code but also to documentation (including Markdown format files):

1. DRY (Don't Repeat Yourself)
   - Improve reusability by functionalizing/modularizing identical or similar processes
   - Also avoid information duplication in documentation and use cross-references as needed

2. Separation of Concerns
   - Each module, class, and function should have a clear single responsibility, separating presentation, logic, and data processing
   - Also divide documentation files by purpose and structure appropriately

3. KISS (Keep It Simple, Stupid)
   - Keep code as simple as possible and avoid excessive complexity
   - Also aim for concise and easy-to-understand documentation

4. Divide and Conquer
   - Divide large problems into smaller units to improve testability and maintainability
   - Also properly structure large documentation with chapters and divide into multiple files as needed

5. Defensive Programming
   - Perform input validation, exception handling, and error measures to ensure robustness and security
   - Also clearly document unexpected usage scenarios and cautions in documentation

6. YAGNI (You Aren't Gonna Need It)
   - Focus on current requirements and avoid over-implementation due to unnecessary future predictions
   - Also focus documentation on information needed at the current time

7. Readability and Documentation
   - Variable, function, and class names should be in English and named so their role is immediately apparent
   - Clearly explain code intent and logic in Japanese using comments and README
   - Maintain consistent format and style in documentation

8. Test-Driven Development (TDD) and Unit Testing
   - Prepare unit tests for basic functionality
   - Recommend TDD and establish a cycle of requirements definition → test → implementation → refactoring
   - Also regularly review documentation and confirm accuracy

9. Version Control and Code Review
   - Manage change history with Git and conduct code reviews through pull requests
   - When files are changed, commit per changed file to clarify history management
   - Also version control documentation changes and conduct reviews similarly

10. SOLID Principles Application
    - Consider SRP, OCP, LSP, ISP, DIP to design for extensibility and maintainability
    - Also structure documentation following the single responsibility principle

## 📝 Commit Message Format

- Commit messages should follow the format below:
  ```
  <emoji> <type> #<Issue number>: <title>
  <body>
  <footer>
  ```
- The title (first line of commit message) must always begin with an emoji and be written in Japanese
- Types should be one of the following:
  - feat: New feature
  - fix: Bug fix
  - docs: Documentation changes
  - style: Code style changes (no behavior impact)
  - refactor: Refactoring
  - perf: Performance improvement
  - test: Test addition/modification
  - chore: Build process or tool changes
