---
title: Python Package and Library Development Checklist
description: Comprehensive checklist prompt for developing Python packages and libraries
category: dev
intent: python-package-dev-checklist
audience:
  - Python developers
  - Library developers
  - Package maintainers
input_requirements:
  - Package purpose and functionality
  - Target users
tags:
  - python
  - package-development
  - library
  - checklist
  - PEP8
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Python Package and Library Development Checklist

## 想定用途

- Develop new Python packages or libraries
- Evaluate and improve existing package quality
- Use as a checklist for the development process

## プロンプト本文

```text
# Python Package and Library Development Checklist Prompt

## 1. Package and Library Design
- Clarify Functional Requirements
  - Identify Functions to Provide
    - Example: Data processing, machine learning, API wrappers, etc.
  - Consider Use Cases
    - Example: Data cleansing, model building, integration with external services, etc.
- Design Architecture
  - Determine Module Structure
    - Example: Split into modules for data input, preprocessing, model, evaluation, etc.
  - Design Classes and Functions
    - Example: Classes representing data structures, functions that perform processing, etc.
- Design API
  - Determine Interfaces to Expose
    - Example: Functions providing main functionality, classes for configuration, etc.
  - Create Documentation
    - Example: README, API reference, sample code, etc.

## 2. Coding
- Follow Coding Standards
  - Write code following conventions like PEP 8
    - Example: Proper indentation, naming conventions, comments, etc.
- Add Documentation
  - Explain functions and classes using docstrings
    - Example: Descriptions of arguments, return values, functionality, etc.
- Write Test Code
  - Implement Unit Tests
    - Example: Tests that verify behavior of individual functions and classes
  - Implement Integration Tests
    - Example: Tests that verify behavior when combining multiple modules

## 3. Packaging
- Create setup.py
  - Describe Package Metadata
    - Example: Package name, version, author, license, etc.
  - Specify Dependencies
    - Example: Required Python version, external libraries, etc.

## 4. Maintenance and Updates
- Bug Fixes and Updates
  - Issue Management
    - Example: Track problems using GitHub issue tracker
  - Provide Patch Releases
    - Example: Minor version updates containing only bug fixes
- Feature Addition and Improvement
  - Develop New Features
    - Example: Feature expansion based on user requests
  - Minor Version Updates
    - Example: Releases containing new features
- User Support
  - Enrich Documentation
    - Example: Adding FAQ, troubleshooting guides, etc.
  - Collect and Respond to Feedback
    - Example: Answering questions and requests from users, handling bug reports, etc.
```

## 使い方

1. Check relevant checklist items at each stage of package development
2. Comprehensively review all items when development is complete
3. Share quality standards with team members

## 入力例

```text
I want to develop a Python package for data processing.
Please explain design considerations based on this checklist.
```

## 出力例

```text
## 1. Package and Library Design

### Clarify Functional Requirements
For a data processing package, consider the following:

**Identify Functions to Provide**
- Data loading (CSV, JSON, database, etc.)
- Data transformation and filtering
- Aggregation and statistical processing
- Data output

**Consider Use Cases**
- Data cleansing (missing value handling, outlier detection)
- Feature engineering
- Preprocessing for data visualization

### Design Architecture
Recommended module structure:
```
yourpackage/
├── __init__.py
├── io/          # Data input/output
├── transform/   # Data transformation
├── aggregate/   # Aggregation processing
└── utils/       # Utilities
```

(continued...)
```

## 注意点

- Strictly follow PEP 8 conventions
- Use consistent docstring style (Google or NumPy style)
- Aim for test coverage of 80% or higher
- Consider modern packaging tools like setuptools or poetry
