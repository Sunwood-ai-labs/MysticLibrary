---
title: GitHub Repository Creation Requirements
description: A prompt defining GitHub repository creation procedures with GitFlow support
category: meta
intent: github-repo-creation
audience:
  - Developers
  - Project Managers
input_requirements:
  - Repository name
  - Owner name
  - Repository image URL (optional)
tags:
  - GitHub
  - GitFlow
  - repository-creation
  - initialization
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# GitHub Repository Creation Requirements

A prompt defining GitHub repository creation procedures with GitFlow support.

## Use Cases

- Creating new GitHub repositories
- Implementing GitFlow branching strategy
- Project initialization

## Prompt

```text
# GitHub Repository Creation Requirements (GitFlow Version)

## 📋 1. Purpose
This document defines the requirements for the process of initializing a working folder with git and creating a public repository on GitHub using the repository name, owner name, and optional image URL specified by the user. It also manages branches according to the GitFlow branching strategy.

## 🔧 2. Prerequisites
- GitHub CLI installed
- GitHub account created
- Git installed in local environment

## 📥 3. Input Parameters
- Repository name (specified by user)
- Owner name (specified by user)
- Repository image URL (optional, specified by user)

## 🔄 4. Process Steps
1. Create and initialize working folder
   - Create a new folder with the specified repository name
   - Navigate to the created folder
   - Initialize as a Git repository with `git init` command

2. Create GitHub repository
   - Use `gh repo create` command to create a public repository on GitHub

3. Configure remote repository
   - Add the created GitHub repository as remote

4. Branch setup (GitFlow)
   - Set main branch to `main`
   - Create development branch `develop`

5. Create initial commit
   - Create README.md file
   - Create `.gitignore` file
   - Stage changes and create initial commit

6. Push to remote repository
   - Push initial commit to `main` branch
   - Push `develop` branch

## 🌿 10. GitFlow Branching Strategy
Use the following branches according to GitFlow:

- `main`: Stable branch for product releases
- `develop`: Development branch
- `feature/*`: Branches for new feature development
- `release/*`: Branches for release preparation
- `hotfix/*`: Branches for urgent bug fixes
```

## How to Use

1. Specify input parameters (repository name, owner name)
2. Execute the prompt
3. Repository is automatically created

## Input Example

```
Repository name: my-new-project
Owner name: my-username
Image URL: https://example.com/image.png (optional)
```

## Output Example

- Locally initialized Git repository
- Public repository created on GitHub
- Initial commit pushed (main and develop branches)

## Notes

- GitHub CLI installation required
- Add sensitive information to .gitignore
- Share GitFlow operational rules within the team
