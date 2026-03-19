---
title: "MCP-as-a-Language Prompt 01 (Ideogram)"
description: "Instruction prompt for developing MCP servers by referencing external API documentation (Ideogram)"
canonical_id: "dev/system-prompts/mcp/mcp-as-a-language-01"
canonical_doc: "docs/en/prompt-catalog/dev/system-prompts/mcp/mcp-as-a-language-01.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/dev/system-prompts/mcp/mcp-as-a-language-01.md. Edit docs/ instead. -->

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
