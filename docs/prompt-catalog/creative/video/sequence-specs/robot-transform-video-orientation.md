---
title: "resolution: {width: \"3840px\", height: \"2160px\"},"
description: "robot_transform_4s — 約1⁄2サイズ"
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - video
  - sequence-specs
  - robot
  - transform
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1929565771778474158"
source_url: "https://x.com/hAru_mAki_ch/status/1929565771778474158"
source_published_at: "2025-06-02T15:48:24.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/06/1929565771778474158.md"
source_note_ids:
  - 1929565771589619712
canonical_id: "creative/video/sequence-specs/robot-transform-video-orientation"
prompt_source: "prompts/docs-first/creative/video/sequence-specs/robot-transform-video-orientation_JP.md"
---

# resolution: &#123;width: "3840px", height: "2160px"&#125;,

robot_transform_4s — 約1⁄2サイズ

## プロンプト本文
~~~text
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
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1929565771778474158" />
</ClientOnly>

### 投稿メモ
~~~text
Kling AI 2.1 master使ってみる6⃣
トランスフォーマーやってみた!!!!
~~~

## 出典
- primary post: [1929565771778474158](https://x.com/hAru_mAki_ch/status/1929565771778474158)
- published at: 2025-06-03 00:48:24 JST
- archive doc: [1929565771778474158](../../../archive/x/2025/06/1929565771778474158.md)
