---
title: Phidata Multi-Agent Template
description: Template for automatically designing and implementing multi-agent AI systems using Phidata framework
category: dev
intent: phidata-multi-agent-template
audience:
  - AI agent developers
  - System architects
  - Team builders
input_requirements:
  - Project purpose
  - Business domain to organize
tags:
  - phidata
  - multi-agent
  - system-design
  - python
  - agent-framework
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Phidata Multi-Agent Template

## 想定用途

- Design and implement multi-agent systems with Phidata framework
- Mimic/automate organizational structures as AI agent teams
- Define collaboration and data flow between multiple AI agents

## プロンプト本文

```text
# 🤖 Phidata Multi-Agent Prompt Template

Template for automatically designing and implementing multi-agent AI systems using Phidata framework

## Project Purpose

【Enter project purpose here】

Example: "Want to establish a consulting company using AI for real estate price prediction and market analysis"

## Desired Content
- Organizational structure
- Responsibility scope of each department/role
- Complete set of required AI agents
- Processing flow
- Code implementation

# Output Format

## 1. Organizational Analysis
【LLM analyzes organizational requirements and proposes optimal structure】

### 1.1 Organizational Structure
【Display department composition and hierarchy in tree format】

### 1.2 Roles and Responsibilities
【Detailed responsibility scope of each department/position】

## 2. AI Agent Design
【Identification and design of required AI agents】

### 2.1 Agent Composition
【Definition of agent types and roles】

### 2.2 Data Flow
【Collaboration and information flow between agents】

## 3. Implementation Code

```python
# Enter code implementation here
```
```

## 使い方

1. Describe project purpose specifically
2. Imagine types of agents needed
3. Execute prompt to generate organizational structure and code
4. Customize generated code for use

## 入力例

```text
## Project Purpose
Want to establish a consulting company using AI for real estate price prediction and market analysis

## Desired Content
- Organizational structure
- Responsibility scope of each department/role
- Complete set of required AI agents
- Processing flow
- Code implementation
```

## 出力例

```text
## 1. Organizational Analysis

### 1.1 Organizational Structure
```
RealEstate AI Consulting
├── Market Analysis Department
│   ├── Data Science Team
│   └── Market Research Team
├── Consulting Department
│   ├── Customer Service Team
│   └── Report Creation Team
└── System Operations Department
    ├── AI Operations Team
    └── Infrastructure Management Team
```

### 1.2 Roles and Responsibilities
- Market Analysis Department
  - Data collection and preprocessing
  - Prediction model development and validation
  - Market trend analysis
[...]

## 2. AI Agent Design

### 2.1 Agent Composition
- Data Collection Agent
- Market Analysis Agent
- Prediction Model Agent
- Report Generation Agent
- Client Service Agent

### 2.2 Data Flow
```mermaid
graph TD
    A[Data Collection] --> B[Market Analysis]
    B --> C[Prediction Model]
    C --> D[Report Generation]
    D --> E[Client Service]
```

## 3. Implementation Code

```python
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.yfinance import YFinanceTools
from phi.storage.agent.sqlite import SqlAgentStorage

# Data Collection Agent
data_collector = Agent(
    name="data_collector",
    role="Data Collection Specialist",
    model=OpenAIChat(id="gpt-4"),
    tools=[
        DuckDuckGo(),
        YFinanceTools(enable_all=True)
    ],
    instructions=[
        "不動産市場データを収集",
        "信頼性の高いソースを優先",
        "データの前処理と整形を行う"
    ],
    storage=SqlAgentStorage(
        table_name="data_collector",
        db_file="real_estate.db"
    )
)
[...continues...]
```
```

## 注意点

- Support latest version of Phidata framework
- Clearly define data flow between agents
- Clarify roles and responsibility scope of each agent
- Configure storage settings appropriately
- Define team leader agent
