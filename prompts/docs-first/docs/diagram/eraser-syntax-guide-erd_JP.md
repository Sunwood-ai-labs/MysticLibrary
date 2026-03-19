---
title: "Eraser 記法ガイド② ERD編"
description: "Eraserプラットフォームでエンティティ関係図（ERD）を作成するための記法ガイド"
canonical_id: "docs/diagram/eraser-syntax-guide-erd"
canonical_doc: "docs/prompt-catalog/docs/diagram/eraser-syntax-guide-erd.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/docs/diagram/eraser-syntax-guide-erd.md. Edit docs/ instead. -->

# Eraser 記法ガイド②

## エンティティ関係図 (ERD)

Eraserは、エンティティ関係図 (ERD) を作成するための記法も提供しています。ERDは、データベースの構造を視覚的に表現するための図です。

### ERDの記法

ERDの記法は、通常のダイアグラム記法と似ていますが、エンティティと関係を表すためにいくつかの特別な属性と関係の種類を使用します。

* **エンティティ**:
    * `[icon: user, color: blue]`: エンティティのアイコンと色を指定します。
    * `{ ... }`: エンティティの属性を記述します。
    * `id string pk`: 主キーとなる属性を指定します。
* **関係**:
    * `>`: 一対一の関係
    * `<>`: 一対多の関係
    * `<> *`: 多対多の関係

### ERDの例

#### RPGゲームのERD
