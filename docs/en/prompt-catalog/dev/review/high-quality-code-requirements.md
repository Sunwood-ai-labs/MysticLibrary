---
title: High-Quality Code Requirements
description: A requirement list for checking code quality from perspectives such as readability, maintainability, extensibility, and security.
category: dev
intent: high_quality_code_requirements
audience:
  - Developers
  - Code reviewers
  - AI coding agents
input_requirements:
  - Target code or design
  - Quality evaluation perspectives
  - Team conventions
tags:
  - code-quality
  - checklist
  - review
  - development
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# High-Quality Code Requirements

## Intended Use

- Self-check before a PR
- Standardizing review perspectives

## Prompt Body

~~~~~md

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
~~~~~

## How to Use

1. Share the target code and constraints first
2. Specify important perspectives (e.g., security/maintainability) with priorities
3. Make final decisions on findings based on team standards

## Input Example

```text
Target: PR for authentication processing changes
Focus: Security, testability, readability
```

## Output Example

```text
Strengths/gaps by quality perspective and prioritized fixes
```

## Notes

- Checklist compliance alone does not guarantee requirement fit
- Always verify performance through measurement
