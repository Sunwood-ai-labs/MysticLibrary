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
