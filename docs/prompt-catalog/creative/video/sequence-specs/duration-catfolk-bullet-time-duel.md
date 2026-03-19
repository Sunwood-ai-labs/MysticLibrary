---
title: "duration: \"8s"
description: "Catfolk Bullet-Time Duel — cinematic · action · ultra-HD (v1.0)"
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
  - duration
  - catfolk
  - bullet
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1932396026943664280"
source_url: "https://x.com/hAru_mAki_ch/status/1932396026943664280"
source_published_at: "2025-06-10T11:14:49.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/06/1932396026943664280.md"
source_note_ids:
  - 1932396026729820160
canonical_id: "creative/video/sequence-specs/duration-catfolk-bullet-time-duel"
prompt_source: "prompts/docs-first/creative/video/sequence-specs/duration-catfolk-bullet-time-duel_JP.md"
---

# duration: "8s

Catfolk Bullet-Time Duel — cinematic · action · ultra-HD (v1.0)

## プロンプト本文
~~~text
# Catfolk Bullet-Time Duel — cinematic · action · ultra-HD (v1.0)
video_type: catfolk_duel_bullettime_v1

general:
 orientation: horizontal # 16 : 9
 aspect_ratio: 1.7778
 resolution: { width: "3840px", height: "2160px" } # 4K UHD
 duration: "8s"
 frame_rate: 60fps
 file_format: mp4
 audio: false
 quality: ultra_high_definition
 safe_zone: none

scene:
 location:
 type: neon_lit_back_alley
 details: >
 Rain-slick pavement, holographic billboards flickering,
 drifting steam vents, distant skyline silhouette.
 lighting:
 style: high_contrast_cinematic
 rim_light: neon_cyan
 fill_light: magenta_soft
 main_subject:
 identity: "Catfolk Gunslinger"
 species: anthropomorphic_feline
 weapons: [dual_pistols]
 attire: tactical_leather_gear
 movement: acrobatic_dodge_and_fire
 secondary_subjects:
 - identity: "Rival Catfolk Gunslinger"
 positioning: opposite_axis

camera_work:
 rig: bullet_time_orbit
 path: 360_degree_clockwise
 orbit_radius: "3m"
 activation_window: { start: "3s", end: "6s" }
 speed_profile: freeze_then_constant_orbit

effects:
 bullet_time:
 active: true
 time_scale: 0.07
 projectile_trails: glowing
 muzzle_flash: suspended
 color_grade: teal_and_orange

action_sequence:
 - { t: 0-3s, description: real_time_gunfight }
 - { t: 3-6s, description: bullet_time_engaged_with_360°_camera_orbit }
 - { t: 6-8s, description: normal_time_resumes_and_final_exchange }
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1932396026943664280" />
</ClientOnly>

### 投稿メモ
~~~text
Veo3のFast モード触ってみる!
プロンプトの精査はもうちょっと必要だけど結構いいかも??
~~~

## 出典
- primary post: [1932396026943664280](https://x.com/hAru_mAki_ch/status/1932396026943664280)
- published at: 2025-06-10 20:14:49 JST
- archive doc: [1932396026943664280](../../../archive/x/2025/06/1932396026943664280.md)
