---
title: "High-Quality Code Requirements"
description: "A requirement list for checking code quality from perspectives such as readability, maintainability, extensibility, and security."
canonical_id: "dev/review/high-quality-code-requirements"
canonical_doc: "docs/en/prompt-catalog/dev/review/high-quality-code-requirements.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/review/high-quality-code-requirements.md. Edit docs/ instead. -->

# Prompt for Excellent Program Requirements

## 1. Readability
- Code should be easy to understand and clear
- Give variables and functions descriptive, meaningful names
- Code formatting should be consistent and easy to read
- Use comments and documentation appropriately to clarify the intent of the code

## 2. Efficiency
- Optimize code to improve performance
- Avoid redundant or unnecessary operations
- Choose appropriate algorithms and data structures for efficient implementation
- Minimize memory usage and CPU utilization

## 3. Modularity
- Organize code by dividing it into logical functions and classes
- Properly separate concerns so each module has a single responsibility
- Keep coupling low between modules and aim for loose coupling
- Define interfaces clearly to simplify interactions between modules

## 4. Extensibility
- Use flexible design to make future changes and new features easy to add
- Apply the Open/Closed Principle (OCP) so code can be extended without modifying existing code
- Use Dependency Injection (DI) to manage dependencies between modules
- Use design patterns appropriately to improve extensibility and maintainability

## 5. Best Practices and Design Patterns
- Follow established best practices for the specific programming language
- Apply the DRY (Don't Repeat Yourself) principle to avoid code duplication
- Respect SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
- Use appropriate design patterns (Singleton, Factory, Observer, etc.) to improve code structure and reusability

## 6. Testing
- Properly conduct unit tests, integration tests, and system tests to ensure code quality
- Adopt Test-Driven Development (TDD) and develop tests and code together
- Use mocks and stubs to improve test independence
- Increase test coverage and confirm all parts of the code are sufficiently tested

## 7. Security
- Follow secure coding practices and avoid common vulnerabilities
- Properly validate and sanitize user input
- Encrypt sensitive information and store it securely
- Apply the principle of least privilege so each component has only the minimum necessary permissions
