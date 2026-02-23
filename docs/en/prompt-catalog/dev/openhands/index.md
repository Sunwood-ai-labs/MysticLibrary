---
title: OpenHands
description: Prompts related to automated development workflows using OpenHands AI
category: dev
---

# OpenHands

A category of prompts related to automated development workflows using OpenHands AI.

## Included Prompts

- [OpenHands Issue Resolver GitHub Actions Workflow](./openhands-resolver-workflow.md) - GitHub Actions workflow for automatic code fixes using OpenHands AI on GitHub/Forgejo from issues and PR comments

## Features

- **Label-based Trigger**: Start automatic resolution with `fix-me` label
- **Comment-based Trigger**: Execute with `@openhands-agent` mention
- **Automatic PR Creation**: Automatically create changes as draft PRs
- **Experimental Version Support**: Use latest version with `fix-me-experimental`

## Usage

1. Place at `.github/workflows/openhands-resolver.yml` in your repository
2. Set `ANTHROPIC_API_KEY` in GitHub Secrets
3. Add `fix-me` label to Issue or comment `@openhands-agent`

## Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `ANTHROPIC_API_KEY` | Anthropic API key (required) | - |
| `LLM_MODEL` | LLM model to use | `anthropic/claude-sonnet-4-20250514` |
