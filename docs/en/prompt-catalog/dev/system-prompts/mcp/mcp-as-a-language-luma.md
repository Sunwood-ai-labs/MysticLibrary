---
title: MCP-as-a-Language Prompt Luma
description: Instruction prompt for developing video generation MCP servers by referencing Luma AI API (with npm package publishing support)
category: dev
intent: mcp-as-a-language-luma
audience:
  - MCP server developers
  - API integration engineers
  - npm package publishers
input_requirements:
  - GitHub CLI authentication
  - npm account and package publishing permissions
  - Luma API documentation
  - LUMA_API_KEY environment variable
tags:
  - mcp
  - api-integration
  - luma-ai
  - video-generation
  - npm-package
  - server-development
status: stable
owner: Roo-Cline
last_reviewed: 2026-02-23
---

# MCP-as-a-Language Prompt Luma

## 想定用途

- Develop MCP servers integrating Luma AI API (Dream Machine)
- Publish packages to both GitHub and npm
- Provide video generation API as MCP tools
- Server implementation using JavaScript SDK

## プロンプト本文

```text
Process according to the following instruction manual

---

# 🛠️ Environment Setup
- GitHub CLI configuration
  - Proceed assuming gh command is authenticated
- For npm package owner names, refer to the following
  - @sunwood-ai-labs/dice-server-mcp
- Repository
  - Use main branch as base
  - Commits are basically made to develop branch

# Instruction Manual

- Name the repository luma-mcp-server
- With this name, create public repositories on GitHub and npm
- After creation, identify necessary tasks below and register them as issues
- It's okay to create multiple issues
- Create an MCP server referring to the following luma documentation
- Use environment variable LUMA_API_KEY
- Make parameter input sections in English

## luma API Documentation

Dream Machine API
...

[Refer to original for API documentation details]
```

## 使い方

1. Confirm npm package scope (@sunwood-ai-labs)
2. Confirm GitHub CLI is authenticated
3. Confirm npm publishing permissions
4. Proceed with implementation referencing Luma API documentation

## 入力例

```text
Develop luma-mcp-server.
Publish as npm package under @sunwood-ai-labs scope.
```

## 出力例

```text
## Identifying tasks and registering as issues:

### Issue #1: Repository and npm package creation
- ✅ Create luma-mcp-server repository on GitHub
- ✅ Create npm package @sunwood-ai-labs/luma-mcp-server
- Configure package.json (for publishing)
- Create README.md

### Issue #2: Luma SDK integration
- Install lumaai package
- Implement LUMA_API_KEY environment variable
- Set up client authentication

### Issue #3: MCP tool implementation
- Implement text-to-video tool
- Implement image-to-video tool
- Implement video-extend tool
- Parameter validation (in English)

### Issue #4: Polling and status management
- Implement generation status polling
- Support callback URLs
- Error handling

### Issue #5: Testing and publishing
- Add unit tests
- Publish npm package
- Create GitHub release

Will implement sequentially.
```

## 注意点

- Use scoped npm package name (@sunwood-ai-labs/xxx)
- Keep parameter names in English
- Note Luma API rate limits
- Video generation is asynchronous, requiring polling
- Include environment variables in .env.example
- Verify package.json settings before npm publishing
