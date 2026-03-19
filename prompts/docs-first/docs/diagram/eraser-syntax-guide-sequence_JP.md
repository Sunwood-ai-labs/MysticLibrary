---
title: "Eraser 記法ガイド③ シーケンス図編"
description: "Eraserプラットフォームでシーケンス図を作成するための記法ガイド"
canonical_id: "docs/diagram/eraser-syntax-guide-sequence"
canonical_doc: "docs/prompt-catalog/docs/diagram/eraser-syntax-guide-sequence.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/docs/diagram/eraser-syntax-guide-sequence.md. Edit docs/ instead. -->

# Eraser 記法ガイド③

## シーケンス図

シーケンス図は、システムやソフトウェアの動作を、時間軸に沿って視覚的に表現するための図です。Eraserは、シーケンス図を作成するための記法も提供しています。

### シーケンス図の記法

シーケンス図の記法は、通常のダイアグラム記法と似ていますが、オブジェクトとメッセージを表すためにいくつかの特別な属性と関係の種類を使用します。

* **オブジェクト**:
    * `[icon: layout]`: オブジェクトのアイコンを指定します。
* **メッセージ**:
    * `>`: オブジェクトから別のオブジェクトへのメッセージ
    * `activate`: オブジェクトのアクティブ化
    * `deactivate`: オブジェクトの非アクティブ化
    * `alt [label]:`: 条件分岐
    * `else [label]:`: 条件分岐のelse部分
    * `loop [label]:`: ループ

### シーケンス図の例
