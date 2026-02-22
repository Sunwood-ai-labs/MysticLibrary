---
title: GitHub Repository Initialization
description: A prompt for initializing Git and creating repositories based on GitHub repository creation requirements specification
category: methodology
intent: github-repo-initialization
audience:
  - Developers
  - Team leaders
  - Project managers
input_requirements:
  - Repository name
  - Owner name
  - Reference repository (optional)
tags:
  - GitHub
  - Git
  - repository creation
  - project management
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# GitHub Repository Initialization

## Intended Use

- When creating a new GitHub repository with GitFlow support
- When automating initial repository setup
- When creating consistent repository structure across teams

## Prompt

```text
Refer to the repository creation requirements specification below and initialize Git and create a repository based on the following input parameters and repository format

# Input Parameters
- Repository name: {repository_name}
- Owner name: {owner_name}

# Repository Creation Requirements Specification

@https://raw.githubusercontent.com/Sunwood-ai-labs/MysticLibrary/refs/heads/main/prompts/meta/GITHUB-REPO-CREATION-REQUIREMENTS.md GitHub

# Reference Repository

@https://raw.githubusercontent.com/Sunwood-ai-labs/HarmonAI_II/refs/heads/main/README.md
```

## How to Use

1. Enter the desired repository name in `{repository_name}`
2. Enter your GitHub owner name in `{owner_name}`
3. Optionally change the reference repository

## Input Example

```text
# Input Parameters
- Repository name: my-awesome-project
- Owner name: your-org-name
```

## Output Example

The repository will be created following these steps:

1. Create and initialize working folder
2. Create GitHub repository (gh repo create)
3. Configure remote repository
4. Set up GitFlow branches (main, develop)
5. Create initial commit
6. Push to remote

## Repository Creation Requirements Specification

- **Purpose**: Create GitFlow-compatible repository
- **Prerequisites**: GitHub CLI, Git installed
- **Branching Strategy**: GitFlow (main, develop, feature/*, release/*, hotfix/*)
- **Initial Files**: README.md, .gitignore

## Notes

- GitHub CLI (`gh`) must be installed
- Repository will be created as public
- Branches are created following GitFlow branching strategy
