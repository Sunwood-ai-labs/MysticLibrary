---
title: "Eraser Syntax Guide Part 3: Sequence Diagrams"
description: "Guide for creating sequence diagrams in Eraser platform"
canonical_id: "docs/diagram/eraser-syntax-guide-sequence"
canonical_doc: "docs/en/prompt-catalog/docs/diagram/eraser-syntax-guide-sequence.md"
locale: EN
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/en/prompt-catalog/docs/diagram/eraser-syntax-guide-sequence.md. Edit docs/ instead. -->

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
