---
title: "task: \"edit-image: torn-paper layered reveal"
description: "task: \"edit-image: torn-paper layered reveal\""
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - visual
  - image-edits
  - edit
  - image
  - torn
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2000839126233571758"
source_url: "https://x.com/hAru_mAki_ch/status/2000839126233571758"
source_published_at: "2025-12-16T08:03:16.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/12/2000839126233571758.md"
source_note_ids:
  - 2000839126137102341
canonical_id: "creative/visual/image-edits/edit-image-torn-paper-layered-reveal"
prompt_source: "prompts/docs-first/creative/visual/image-edits/edit-image-torn-paper-layered-reveal_JP.md"
---

# task: "edit-image: torn-paper layered reveal

task: "edit-image: torn-paper layered reveal"

## プロンプト本文
~~~text
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
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2000839126233571758" />
</ClientOnly>

### 投稿メモ
~~~text
YAML構造:破れ紙レイヤー演出
~~~

## 出典
- primary post: [2000839126233571758](https://x.com/hAru_mAki_ch/status/2000839126233571758)
- published at: 2025-12-16 17:03:16 JST
- archive doc: [2000839126233571758](../../../archive/x/2025/12/2000839126233571758.md)
