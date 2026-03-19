---
title: "size: { width: \\\"2048px\\\", height: \\\"3640px\\\" }"
description: "Android Head Continent Diorama — hyper-realistic · isometric · high-detail (v1.…"
canonical_id: "creative/visual/character-styles/diorama-android-head-continent"
canonical_doc: "docs/prompt-catalog/creative/visual/character-styles/diorama-android-head-continent.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/visual/character-styles/diorama-android-head-continent.md. Edit docs/ instead. -->

# Android Head Continent Diorama — hyper-realistic · isometric · high-detail (v1.0)
image_type: android_head_continent_diorama_v1

general:
 orientation: vertical # 9 : 16 portrait
 aspect_ratio: 0.5625
 size: { width: "2048px", height: "3640px" }
 quality: ultra_high_resolution
 file_format: png
 safe_zone: none
 typography: {} # no text overlays

# ─ Theme ─
theme:
 name: AndroidHeadContinent
 background:
 type: pure_white_surface
 colors: pristine_white
 transparent: false
 overlays:
 - { type: subtle_soft_shadow, opacity: 0.05 }

 focal_motif:
 - translucent_android_head_shell_with_front_panel_removed # ant-farm-style cutaway

# == Scene ==
scene:
 main_subject: >
 A meticulously crafted isometric 3D miniature of an entire
 continent—featuring towering mountain ranges, winding rivers, lush
 forests, arid deserts, and a rugged coastline—encased inside a
 clear futuristic android head standing upright. The lower half
 displays a geological cross-section with layered strata of fertile
 topsoil, sandstone, granite bedrock, and a gentle amber-glow magma
 layer, all rendered with lifelike textures and depth.
 perspective: slightly_elevated_isometric
 mood: awe_inspiring_and_playful
 style: hyper_realistic_handcrafted_model
 lighting:
 type: cinematic_softbox
 direction: 45_degree_key_light
 color_temperature: 5600
 depth_of_field: shallow

# == Materials & Details ==
materials:
 head_shell: clear_borosilicate_with_subtle_caustics
 terrain: hand_painted_resin_and_static_grass
 water_bodies: translucent_epoxy_with_micro_bubbles
 strata_layers:
 - fertile_soil_with_root_fibers
 - reddish_sandstone
 - weathered_granite
 - amber_toned_magma_glow

# == Post-processing ==
post_processing:
 color_grading: vibrant_but_natural
 vignette: soft_radial
 grain: minimal
