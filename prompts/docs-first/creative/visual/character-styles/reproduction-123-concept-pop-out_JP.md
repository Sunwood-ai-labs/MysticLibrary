---
title: "layout_reproduction\\\": {"
description: "&#123;"
canonical_id: "creative/visual/character-styles/reproduction-123-concept-pop-out"
canonical_doc: "docs/prompt-catalog/creative/visual/character-styles/reproduction-123-concept-pop-out.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/visual/character-styles/reproduction-123-concept-pop-out.md. Edit docs/ instead. -->

{
 "layout_reproduction": {
 "concept": "3D Pop-out / Breaking the Grid",
 "total_size": {
 "aspect_ratio": "4:3",
 "orientation": "landscape"
 },
 "layer_structure": {
 "layer_1_background": "Grid Tiles (Face & Body)",
 "layer_2_foreground": "Floating Element (Hand Only)"
 },
 "grid_structure": {
 "rows": 2,
 "columns": 2,
 "gap_size": "15px",
 "gap_behavior": "Rendered BEHIND the hand, but IN FRONT of the face",
 "background_color": "#FFFFFF"
 },
 "image_source": {
 "count": 1,
 "description": "POV dynamic hand reaching, young female subject, dark aesthetic"
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
 "id": "hand-overlay",
 "description": "The female hand extracted from the original image to overlay the grid gaps",
 "css_properties": {
 "position": "absolute",
 "top": "0",
 "left": "0",
 "width": "100%",
 "height": "100%",
 "background_image": "url('same-image-but-masked-to-female-hand-only.png')",
 "background_size": "cover",
 "z_index": "10", 
 "pointer_events": "none",
 "filter": "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))"
 }
 },
 "global_style": {
 "masking": "Dual-layer approach required: Base grid masks the female image, Overlay layer masks everything EXCEPT the female hand",
 "corner_radius": "20px (applied to grid tiles only)"
 }
 }
}
