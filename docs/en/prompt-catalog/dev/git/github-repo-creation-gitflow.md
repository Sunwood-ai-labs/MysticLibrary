---
title: GitHub Repository Creation Requirements (GitFlow Edition)
description: Comprehensive prompt for GitHub repository creation with GitFlow branching strategy
category: dev
intent: github-repo-creation-gitflow
audience:
  - Developers
  - Project managers
  - DevOps engineers
input_requirements:
  - Repository name
  - Owner name
  - (Optional) Repository image URL
tags:
  - GitHub
  - Git
  - GitFlow
  - repository-creation
  - branching-strategy
status: stable
owner: docs-team
last_reviewed: 2026-02-23
---

# GitHub Repository Creation Requirements (GitFlow Edition)

## Intended Use

- Creating new GitHub repositories
- Initial GitFlow branching strategy setup
- Remote repository configuration
- Initial commit and push

## Prompt Content

```text
# GitHub Repository Creation Requirements (GitFlow Edition)

## 📋 Purpose
This document defines requirements for creating a GitHub repository with a specified repository name, owner name, and optional image URL. It initializes the working folder with git, creates a public repository on GitHub, and manages branches according to GitFlow branching strategy.

## 🔧 Prerequisites
- GitHub CLI installed
- GitHub account created
- Git installed in local environment

## 📥 Input Parameters
- Repository name (specified by user)
- Owner name (specified by user)
- Repository image URL (optional, specified by user)

## 🔄 Process Steps
1. Create and initialize working folder
   - Create new folder with specified repository name
   - Navigate to created folder
   - Initialize as Git repository with `git init` command

2. Create GitHub repository
   - Use `gh repo create` command to create public repository on GitHub

3. Configure remote repository
   - Add created GitHub repository as remote

4. Configure branches (GitFlow)
   - Set main branch to `main`
   - Create `develop` branch for development

5. Create initial commit
   - Create README.md file
   - Create `.gitignore` file (if needed)
   - Stage changes and create initial commit

6. Push to remote repository
   - Push initial commit to `main` branch
   - Push `develop` branch

## 📝 Repository Format
README.md file should include:
- Project name
- Brief description
- Installation instructions
- Usage instructions
- Contribution guidelines
- License information
- (If specified) Centered repository image
```

## Usage

1. Prepare repository name and owner name
2. Input prompt to AI
3. Follow instructions to create repository

## Input Example

```
Repository name: my-awesome-project
Owner name: username
Image URL: https://example.com/image.png (optional)
```

## Notes

- GitHub CLI installation required
- Follow GitFlow branching strategy
- Create both main and develop branches
