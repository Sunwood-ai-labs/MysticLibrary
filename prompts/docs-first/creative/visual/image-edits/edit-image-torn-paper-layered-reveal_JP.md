---
title: "task: \\\"edit-image: torn-paper layered reveal"
description: "task: \\\"edit-image: torn-paper layered reveal\\\""
canonical_id: "creative/visual/image-edits/edit-image-torn-paper-layered-reveal"
canonical_doc: "docs/prompt-catalog/creative/visual/image-edits/edit-image-torn-paper-layered-reveal.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/visual/image-edits/edit-image-torn-paper-layered-reveal.md. Edit docs/ instead. -->

task: "edit-image: torn-paper layered reveal"

base_image:
 use_reference_image: true

rules:
 - Only modify inside the torn areas.
 - Do not change pose, anatomy, proportions, clothing details, shading, or scene elements.

effects:
 - effect: "torn-paper-reveal"
 placement: "across chest"
 interior_style: "line-art"
 - effect: "torn-paper-reveal"
 placement: "lower area"
 interior_style: "watercolor"

style_settings:
 line-art:
 palette: "monochrome"
 paper: "notebook paper with subtle ruled lines"
 watercolor:
 palette: "soft transparent pigments"
 paper: "watercolor paper texture"
