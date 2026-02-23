---
title: MCP-as-a-Language Prompt 01 (Ideogram)
description: Instruction prompt for developing MCP servers by referencing external API documentation (Ideogram)
category: dev
intent: mcp-as-a-language-ideogram
audience:
  - MCP server developers
  - API integration engineers
  - Infrastructure developers
input_requirements:
  - GitHub CLI authentication
  - Target API documentation
  - Environment variables like API keys
tags:
  - mcp
  - api-integration
  - ideogram
  - image-generation
  - server-development
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# MCP-as-a-Language Prompt 01 (Ideogram)

## 想定用途

- Develop MCP servers by referencing external API documentation
- Automate complete workflow from GitHub repository creation to issue management
- Build server including environment variable setup using API keys

## プロンプト本文

```text
Please process according to the following instructions:

---

# 🛠️ Environment Setup
- GitHub CLI Configuration
  - Proceed assuming gh command is authenticated

- Repository
  - Base on main branch
  - Commits are basically made to develop branch

# Instructions

- Name the repository [repository_name]
- Create a public repository on GitHub with this name
- After creation, identify necessary tasks below and register them as issues
- You may create as many issues as needed
- Create an MCP server by referring to the following [API_service] documentation
- Use the environment variable [API_KEY]

## [API_service] API Documentation

[Paste API documentation here]
```

## 使い方

1. Replace `[repository_name]` with the repository name to create
2. Replace `[API_service]` with the target API service name
3. Replace `[API_KEY]` with the environment variable name to use
4. Paste appropriate API documentation
5. Confirm GitHub CLI is authenticated

## 入力例

```text
Create a repository named ideogram-mcp-server and
develop an image generation MCP server referencing Ideogram API.
Use IDEOGRAM_API_KEY environment variable.
```

## 出力例

```text
## Identifying tasks and registering as issues:

### Issue #1: Repository Creation and Initial Setup
- ✅ Create ideagram-mcp-server repository on GitHub
- Create README.md
- Set up basic project structure

### Issue #2: MCP Server Basic Structure Implementation
- Configure package.json
- Create server entry point
- Define basic MCP tools

### Issue #3: Ideogram API Integration
- Implement IDEOGRAM_API_KEY environment variable
- Implement image generation endpoint
- Parameter validation

### Issue #4: Testing and Documentation
- Add unit tests
- Document usage

Will implement sequentially.
```

## 注意点

- GitHub CLI must be authenticated
- API documentation should be complete
- Handle environment variables carefully (include .env.example)
- Split issues finely when creating
- Write commit messages in Japanese with emojis
