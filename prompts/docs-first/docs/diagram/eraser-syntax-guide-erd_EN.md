---
title: "Eraser Syntax Guide ② ERD"
description: "Syntax guide for creating Entity Relationship Diagrams (ERD) on Eraser platform"
canonical_id: "docs/diagram/eraser-syntax-guide-erd"
canonical_doc: "docs/en/prompt-catalog/docs/diagram/eraser-syntax-guide-erd.md"
locale: EN
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/en/prompt-catalog/docs/diagram/eraser-syntax-guide-erd.md. Edit docs/ instead. -->

# Eraser Syntax Guide ②

## Entity Relationship Diagram (ERD)

Eraser also provides syntax for creating Entity Relationship Diagrams (ERD). ERDs are diagrams for visually representing database structures.

### ERD Syntax

ERD syntax is similar to regular diagram syntax, but uses special attributes and relationship types to represent entities and relationships.

* **Entity**:
    * `[icon: user, color: blue]`: Specify entity icon and color.
    * `{ ... }`: Describe entity attributes.
    * `id string pk`: Specify primary key attribute.
* **Relationships**:
    * `>`: One-to-one relationship
    * `<>`: One-to-many relationship
    * `<> *`: Many-to-many relationship

### ERD Example

#### RPG Game ERD
