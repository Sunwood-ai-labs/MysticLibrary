---
title: Eraser Syntax Guide Part 3: Sequence Diagrams
description: Guide for creating sequence diagrams in Eraser platform
category: docs
intent: eraser-syntax-guide-sequence
audience:
  - Eraser users
  - System designers
  - Software engineers
input_requirements:
  - Scenario for the sequence diagram to be created
  - Definitions of objects and messages
tags:
  - eraser
  - sequence diagram
  - system design
  - notation
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser Syntax Guide Part 3: Sequence Diagrams

## Intended Use

- Create sequence diagrams in Eraser platform
- Visualize system or software behavior along a timeline
- Represent message exchanges between objects

## Prompt

```text
# Eraser Notation Guide Part 3

## Sequence Diagrams

Sequence diagrams are diagrams that visually represent the behavior of systems or software along a timeline. Eraser also provides notation for creating sequence diagrams.

### Sequence Diagram Notation

Sequence diagram notation is similar to regular diagram notation, but uses some special attributes and relationship types to represent objects and messages.

* **Objects**:
    * `[icon: layout]`: Specifies the icon for an object.
* **Messages**:
    * `>`: Message from one object to another
    * `activate`: Activation of an object
    * `deactivate`: Deactivation of an object
    * `alt [label]:`: Conditional branch
    * `else [label]:`: Else part of conditional branch
    * `loop [label]:`: Loop

### Sequence Diagram Example

```yaml
Web App [icon: layout] > DB [icon: database]: Start transaction
Web App > Cloud Fx [icon: function]: Call function
Cloud Fx > API [icon: cloud-cog]: Create session
API > Cloud Fx: Session info
Cloud Fx > DB: Create tx record
Cloud Fx > API: Request access token
API > Cloud Fx: Access token
Cloud Fx > Web App: Token and transaction info
Web App > API: Complete transaction
alt [label: If successful]{
  API > Web App: Transaction confirmation
}
else [label: If failed]{
  API > Web App: Transaction cancellation
}
Web App > DB: Create tx record
Web App > API: Subscribe to transaction changes
activate API
API > API: Ongoing events
API > Web App: Push events
deactivate API
```

## Summary

Eraser's notation enables the creation of various types of diagrams by combining simple syntax with rich attributes and relationship types. By utilizing the sequence diagram notation introduced in this guide, try creating more effective documentation.
```

## Usage

1. Open Eraser platform
2. Define objects and messages in YAML format following sequence diagram notation
3. Paste into Eraser to generate diagram

## Input Example

```text
Create a sequence diagram for the user purchase flow.
The following objects are involved:
- User (user)
- Frontend (frontend)
- Backend (backend)
- Payment API (payment-api)
- Database (database)
```

## Output Example

```yaml
User [icon: user] > Frontend [icon: layout]: Purchase request
Frontend > Backend [icon: server]: Create order
Backend > Database [icon: database]: Check inventory
Database > Backend: Inventory status
Backend > Payment API [icon: credit-card]: Payment request
Payment API > Backend: Payment result
alt [label: Payment successful]{
  Backend > Database: Save order record
  Backend > Frontend: Order completion notice
}
else [label: Payment failed]{
  Backend > Frontend: Error notice
}
Frontend > User: Result display
```

## Notes

- Use `activate`/`deactivate` to clarify object active states
- Use `alt`/`else` to represent conditional branches
- Use `loop` to represent repetitive processes
- Set appropriate icons to improve visibility
- Keep messages concise
