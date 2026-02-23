---
title: Requirements for High-Quality Programs
description: Core requirements definition prompt for creating high-quality programs with 7 key areas
category: dev
intent: high-quality-code-requirements
audience:
  - Programmers
  - Developers
  - Software engineers
input_requirements:
  - Programming language to apply
  - Project type
tags:
  - code-quality
  - best-practices
  - security
  - testing
  - design-principles
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Requirements for High-Quality Programs

## 想定用途

- Define requirements for high-quality software development
- Use as a checklist for code reviews
- Unify quality standards across development teams

## プロンプト本文

```text
# Requirements for High-Quality Programs Prompt

## 1. Readability
- Code should be understandable and clear
- Use descriptive and meaningful names for variables and functions
- Code formatting should be consistent and readable
- Use comments and documentation appropriately to clarify code intent

## 2. Efficiency
- Optimize code to improve performance
- Avoid redundant or unnecessary operations
- Select appropriate algorithms and data structures for efficient implementation
- Minimize memory usage and CPU usage

## 3. Modularity
- Divide code into logical functions and classes
- Practice proper separation of concerns, ensuring each module has a single responsibility
- Keep coupling between modules low, aiming for loose coupling
- Clearly define interfaces to simplify interactions between modules

## 4. Extensibility
- Design flexibly to facilitate future changes and addition of new features
- Apply the Open/Closed Principle (OCP) to enable extension without modifying existing code
- Utilize dependency injection (DI) to manage dependencies between modules
- Use appropriate design patterns to improve extensibility and maintainability

## 5. Best Practices and Design Patterns
- Follow established best practices for the specific programming language
- Apply the DRY (Don't Repeat Yourself) principle to avoid code duplication
- Respect SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
- Use appropriate design patterns (singleton, factory, observer, etc.) to improve code structure and reusability

## 6. Testing
- Properly conduct unit tests, integration tests, and system tests to ensure code quality
- Adopt test-driven development (TDD), developing tests and code simultaneously
- Utilize mocks and stubs to enhance test independence
- Increase test coverage to ensure all parts of the code are adequately tested

## 7. Security
- Follow secure coding practices to avoid common vulnerabilities
- Properly validate and sanitize user input
- Encrypt and securely store sensitive information
- Apply the principle of least privilege, ensuring each component has only the minimum necessary permissions
```

## 使い方

1. Use as requirements definition when starting development projects
2. Use as quality checklist during code reviews
3. Adopt as foundation for team coding standards

## 入力例

```text
Review the authentication code based on these requirements.
```

## 出力例

```text
## Review Results Based on High-Quality Program Requirements

### 1. Readability
- ✅ Function names are descriptive and meaningful
- ⚠️ Some variable names are unclear (`tmp`, `data2`, etc.)

### 2. Efficiency
- ✅ Appropriate algorithm selection
- ⚠️ Unnecessary loops exist

### 3. Modularity
- ✅ Proper separation of concerns
- ⚠️ Authentication logic tightly coupled with data access

(continued...)
```

## 注意点

- Don't try to meet all requirements at once; apply them according to project stages
- Consider trade-offs between readability and efficiency
- Apply security requirements particularly strictly
