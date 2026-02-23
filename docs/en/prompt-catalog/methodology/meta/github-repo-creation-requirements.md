---
title: GitHub Repository Creation Requirements
description: GitHub repository creation requirements specification (GitFlow compatible)
category: methodology
intent: github-repo-requirements
audience:
  - Developers
  - Team leaders
  - DevOps engineers
input_requirements:
  - None (reference document)
tags:
  - GitHub
  - GitFlow
  - repository management
  - requirements specification
status: published
owner: methodology-worker
last_reviewed: 2026-02-23
---

# GitHub Repository Creation Requirements (GitFlow Compatible)

## Intended Use

- When standardizing GitHub repository creation procedures across teams
- When adopting GitFlow branching strategy
- When referring to guidelines for initial repository setup

## Requirements Specification Content

### 1. Purpose
This document defines the requirements for the process of initializing a working folder with git and creating a public repository on GitHub using a user-specified repository name, owner name, and optional image URL. It also manages branches following the GitFlow branching strategy.

### 2. Prerequisites
- GitHub CLI installed
- GitHub account created
- Git installed in local environment

### 3. Input Parameters
- Repository name (user-specified)
- Owner name (user-specified)
- Repository image URL (optional, user-specified)

### 4. Process Steps

#### 4.1 Create and Initialize Working Folder
- Create a new folder with the specified repository name
- Navigate to the created folder
- Initialize as a Git repository with `git init` command

#### 4.2 Create GitHub Repository
- Create a public repository on GitHub using `gh repo create` command
```bash
gh repo create owner-name/repository-name --public
```

#### 4.3 Configure Remote Repository
- Add the created GitHub repository as a remote
```bash
git remote add origin https://github.com/owner-name/repository-name.git
```

#### 4.4 Configure Branches (GitFlow)
- Set main branch to `main`
```bash
git branch -M main
```
- Create `develop` branch for development
```bash
git branch develop
```

#### 4.5 Create Initial Commit
- Create README.md file
- Create `.gitignore` file (as needed)
- Stage changes and create initial commit
```bash
git add .
git commit -m "Initial commit"
```

#### 4.6 Push to Remote Repository
- Push initial commit to `main` branch
```bash
git push -u origin main
```
- Push `develop` branch
```bash
git checkout develop
git push -u origin develop
```

### 5. Repository Format

Format repository structure and README.md file referring to the following URL:
```
https://raw.githubusercontent.com/Sunwood-ai-labs/HarmonAI_II/refs/heads/main/README.md
```

**Main elements:**
- Project name
- Brief description
- Installation instructions
- Usage instructions
- Contribution guidelines
- License information

**Image display:**
If an image URL is specified, display it centered at the top of the README.md file as follows:
```markdown
<p align="center">
  <img src="imageURL" alt="repository image">
</p>
```

### 6. Output
- Git repository initialized locally
- Public repository created on GitHub
- Remote repository with initial commit pushed (`main` and `develop` branches)

### 7. Error Handling
When an error occurs at any step, display appropriate error messages and suggest recovery procedures when possible

### 8. Security Considerations
Add sensitive information (API keys, etc.) to `.gitignore` file and avoid committing to repository

### 9. Extensibility
Design to allow implementation of additional features in the future, such as template selection and branch protection rule configuration

### 10. GitFlow Branching Strategy

Use the following branches following GitFlow:

- `main`: Stable branch for product releases
- `develop`: Development branch
- `feature/*`: Branches for new feature development
- `release/*`: Branches for release preparation
- `hotfix/*`: Branches for emergency bug fixes

Share usage methods and operational rules for each branch within the team to maintain consistency.

## Notes

- This document is a requirements specification, not an executable prompt
- For actual repository creation, use the "GitHub Repository Initialization" prompt
- GitHub CLI (`gh`) installation is a prerequisite
