---
title: Python Package Development Checklist
description: A checklist covering design, implementation, distribution, and maintenance perspectives for Python packages/libraries.
category: dev
intent: python_package_development_checklist
audience:
  - Python developers
  - Library maintainers
input_requirements:
  - Package purpose
  - Supported Python versions
  - Distribution method
  - Maintenance setup
tags:
  - python
  - package
  - library
  - checklist
status: draft
owner: prompt-lb-team
last_reviewed: 2026-02-22
---

# Python Package Development Checklist

## Intended Use

- Prevent omissions when starting a new library
- Final checks before public/internal distribution

## Prompt Body

~~~~~md
# Python Package/Library Development Checklist Prompt

## 1. Package/Library Design
- Clarify functional requirements
  - Identify the functions to provide
    - Example: data processing, machine learning, API wrappers, etc.
  - Consider use cases
    - Example: data cleansing, model building, integration with external services, etc.
- Architecture design
  - Decide the module structure
    - Example: split into modules such as data input, preprocessing, model, evaluation, etc.
  - Design classes/functions
    - Example: classes representing data structures, functions that perform processing, etc.
- API design
  - Decide the public interfaces
    - Example: functions providing key capabilities, configuration classes, etc.
  - Create documentation
    - Example: README, API reference, sample code, etc.

## 2. Coding
- Follow coding conventions
  - Write code according to standards such as PEP 8
    - Example: proper indentation, naming conventions, comments, etc.
- Add documentation
  - Describe functions/classes using docstrings
    - Example: arguments, return values, feature descriptions, etc.
- Create test code
  - Implement unit tests
    - Example: tests that verify the behavior of individual functions/classes
  - Implement integration tests
    - Example: tests that verify behavior across combined modules

## 3. Packaging
- Create `setup.py`
  - Describe package metadata
    - Example: package name, version, author, license, etc.
  - Specify dependencies
    - Example: required Python version, external libraries, etc.

## 4. Maintenance and Updates
- Bug fixes and updates
  - Manage issues
    - Example: track problems using GitHub issue tracker
  - Provide patch releases
    - Example: minor version updates containing only bug fixes
- Feature additions and improvements
  - Develop new features
    - Example: feature enhancements based on user requests
  - Minor version upgrades
    - Example: releases that include new features
- User support
  - Enhance documentation
    - Example: add FAQs, troubleshooting guides, etc.
  - Collect and respond to feedback
    - Example: answer user questions/requests and handle bug reports, etc.
~~~~~

## Usage

1. Identify unresolved items during the design phase
2. Re-check before release
3. Add your team-standard lint/test/release procedures before use

## Input Example

```text
Package name: acme-utils
Purpose: Standardize internal shared utilities
Python: 3.10+
Distribution: Private PyPI
```

## Output Example

```text
Checklist of verification items from design to implementation, distribution, and maintenance, plus unfinished items
```

## Notes

- Align license/distribution policy with organizational rules
- Do not skip runtime checks for README and sample code
