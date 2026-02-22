---
title: Eraser Syntax Guide ② ERD
description: Syntax guide for creating Entity Relationship Diagrams (ERD) on Eraser platform
category: docs
intent: eraser-syntax-guide-erd
audience:
  - Eraser users
  - Database designers
  - System architects
input_requirements:
  - Structure of ERD to create
  - Entity and relationship definitions
tags:
  - eraser
  - erd
  - database-design
  - syntax
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser Syntax Guide ② ERD

## 想定用途

- Create Entity Relationship Diagrams (ERD) on Eraser platform
- Visually represent database structures
- Define entities and relationships

## プロンプト本文

```text
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

```yaml
// 1. users: The adventurers exploring this world!
users [icon: user, color: blue] {
  id string pk
  displayName string
  level int
  experience int
  gold int
  currentLocation string
}

// 2. teams: Companions for adventurers to adventure together
teams [icon: users, color: blue] {
  id string pk
  name string
  leaderId string
}

// 3. characters: Individual companions with unique personalities!
characters [icon: warrior, color: green] {
  id string pk
  name string
  level int
  stats json
  skills json
  userId string
}

// 4. items: Tools and weapons useful for adventures!
items [icon: sword, color: orange] {
  id string pk
  name string
  type string
  rarity string
  stats json
}

// 5. quests: Trials given to adventurers!
quests [icon: quest, color: purple] {
  id string pk
  name string
  description string
  reward json
  status string
}

// 6. enemies: Powerful foes blocking adventurers!
enemies [icon: monster, color: red] {
  id string pk
  name string
  level int
  stats json
  skills json
  location string
}

// 7. locations: Fields and dungeons for adventure
locations [icon: map, color: grey] {
  id string pk
  name string
  description string
  enemies json
  items json
}

// Entity relationships

users.teams <> teams.id // Users can belong to multiple parties, one party can have multiple adventurers
characters.userId > users.id // Characters are owned by users
items.userId > users.id // Items are owned by users
quests.userId > users.id // Quests are assigned to users
enemies.location > locations.id // Enemies appear at specific locations
```
```

## 使い方

1. Open Eraser platform
2. Define entities and relationships in YAML format following ERD syntax
3. Paste into Eraser to generate diagram

## 入力例

```text
Create an ERD for a user management system.
Required entities:
- users
- posts
- comments
- likes
```

## 出力例

```yaml
users [icon: user, color: blue] {
  id string pk
  username string
  email string
  created_at datetime
}

posts [icon: document, color: green] {
  id string pk
  user_id string
  title string
  content text
  created_at datetime
}

comments [icon: chat, color: orange] {
  id string pk
  post_id string
  user_id string
  content text
  created_at datetime
}

likes [icon: heart, color: red] {
  id string pk
  user_id string
  post_id string
  created_at datetime
}

// Relationships
posts.user_id > users.id
comments.post_id > posts.id
comments.user_id > users.id
likes.user_id > users.id
likes.post_id > posts.id
```

## 注意点

- Use `id string pk` for primary keys
- Relationships: `>` (one-to-many), `<>` (one-to-many), `<> *` (many-to-many)
- Set appropriate icons and colors for better visualization
- Split complex ERDs into manageable entity groups
