---
title: "resolution: {width: \\\"3840px\\\", height: \\\"2160px\\\"},"
description: "robot_transform_4s — 約1⁄2サイズ"
canonical_id: "creative/video/sequence-specs/robot-transform-video-orientation"
canonical_doc: "docs/prompt-catalog/creative/video/sequence-specs/robot-transform-video-orientation.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/sequence-specs/robot-transform-video-orientation.md. Edit docs/ instead. -->

# robot_transform_4s — 約1⁄2サイズ
video_type: robot_transform_v2
general: {orientation: horizontal, aspect_ratio: 1.7778,
 resolution: {width: "3840px", height: "2160px"},
 duration: "4s", frame_rate: 24fps, file_format: mp4}

scene:
 location: {type: neon_city_backstreet_night}
 lighting: {match: transform_vehicle_before_v1}
 transformation_sequence:
 - {t: 0-0.6s, cam: low_angle_car_front,
 action: "car idling ⇒ wheels split"}
 - {t: 0.6-1.6s, cam_move: push_in,
 action: "doors form arms, legs unfold"}
 - {t: 1.6-3s, cam_move: crane_up,
 action: "torso rises, head emerges"}
 - {t: 3-4s, cam_move: pull_back,
 action: "robot strikes heroic pose, steam burst"}

rendering: {motion_interpolation: ease_in_out, texture_quality: 8K_PBR}
