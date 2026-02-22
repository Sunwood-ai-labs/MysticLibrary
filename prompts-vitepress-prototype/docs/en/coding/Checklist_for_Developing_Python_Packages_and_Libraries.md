---
title: "Python Package and Library Development Checklist Prompt"
sourcePath: "prompts/coding/Checklist_for_Developing_Python_Packages_and_Libraries_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/Checklist_for_Developing_Python_Packages_and_Libraries_EN.md`
> Japanese: [JA](/coding/Checklist_for_Developing_Python_Packages_and_Libraries)

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
