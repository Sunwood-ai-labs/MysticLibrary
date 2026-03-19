---
title: "layout_reproduction\": {"
description: "&#123;"
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - visual
  - brand-assets
  - reproduction
  - 123
  - concept
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2012134066855063958"
source_url: "https://x.com/hAru_mAki_ch/status/2012134066855063958"
source_published_at: "2026-01-16T12:05:19.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/01/2012134066855063958.md"
source_note_ids:
  - 2012134066527899648
canonical_id: "creative/visual/brand-assets/reproduction-123-concept-pop-out"
prompt_source: "prompts/docs-first/creative/visual/brand-assets/reproduction-123-concept-pop-out_JP.md"
---

# layout_reproduction": &#123;

&#123;

## プロンプト本文
~~~text
{
 "layout_reproduction": {
 "concept": "3D Pop-out / Breaking the Grid (Cat Version)",
 "total_size": {
 "aspect_ratio": "4:3",
 "orientation": "landscape"
 },
 "layer_structure": {
 "layer_1_background": "Grid Tiles (Cat Face & Body)",
 "layer_2_foreground": "Floating Element (Cat Paw Only)"
 },
 "grid_structure": {
 "rows": 2,
 "columns": 2,
 "gap_size": "15px",
 "gap_behavior": "Rendered BEHIND the paw, but IN FRONT of the cat's face",
 "background_color": "# FFFFFF"
 },
 "image_source": {
 "count": 1,
 "description": "POV close-up of a cat reaching towards camera, focus on the paw, cute/dynamic aesthetic"
 },
 "tiles_configuration": [
 {
 "note": "These tiles form the background layer (Layer 1)",
 "id": "top-left",
 "css_properties": {
 "border_radius": "20px 0 0 0",
 "background_position": "0% 0%",
 "background_size": "200% 200%",
 "z_index": "1"
 }
 },
 {
 "id": "top-right",
 "css_properties": {
 "border_radius": "0 20px 0 0",
 "background_position": "100% 0%",
 "background_size": "200% 200%",
 "z_index": "1"
 }
 },
 {
 "id": "bottom-left",
 "css_properties": {
 "border_radius": "0 0 0 20px",
 "background_position": "0% 100%",
 "background_size": "200% 200%",
 "z_index": "1"
 }
 },
 {
 "id": "bottom-right",
 "css_properties": {
 "border_radius": "0 0 20px 0",
 "background_position": "100% 100%",
 "background_size": "200% 200%",
 "z_index": "1"
 }
 }
 ],
 "breakout_element": {
 "id": "paw-overlay",
 "description": "The cat's paw (and maybe whiskers) extracted to overlay the grid gaps",
 "css_properties": {
 "position": "absolute",
 "top": "0",
 "left": "0",
 "width": "100%",
 "height": "100%",
 "background_image": "url('cat-paw-masked-transparent.png')",
 "background_size": "cover",
 "z_index": "10", 
 "pointer_events": "none",
 "filter": "drop-shadow(0px 5px 15px rgba(0,0,0,0.3))" // Soft shadow for fluffy depth
 }
 },
 "global_style": {
 "masking": "Dual-layer approach: Grid masks the cat's face, Overlay layer displays the unmasked paw extending over the lines",
 "corner_radius": "20px (applied to grid tiles only)"
 }
 }
}
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2012134066855063958" />
</ClientOnly>

### 投稿メモ
~~~text
私も 飛び出し画像やってみた!!!!
これめちゃ面白いぞ!!
~~~

## 出典
- primary post: [2012134066855063958](https://x.com/hAru_mAki_ch/status/2012134066855063958)
- published at: 2026-01-16 21:05:19 JST
- archive doc: [2012134066855063958](../../../archive/x/2026/01/2012134066855063958.md)
