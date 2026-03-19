---
title: "resolution: {width: \"3840px\", height: \"2160px\"}"
description: "video_type: mountain_pass_drift_duel_v2"
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - video
  - shot-recipes
  - aerial
  - mountain
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1926982698616115681"
source_url: "https://x.com/hAru_mAki_ch/status/1926982698616115681"
source_published_at: "2025-05-26T12:44:11.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/05/1926982698616115681.md"
source_note_ids:
  - 1926982698226049024
canonical_id: "creative/video/shot-recipes/aerial-video-mountain-pass"
prompt_source: "prompts/docs-first/creative/video/shot-recipes/aerial-video-mountain-pass_JP.md"
---

# resolution: &#123;width: "3840px", height: "2160px"&#125;

video_type: mountain_pass_drift_duel_v2

## プロンプト本文
~~~text
video_type: mountain_pass_drift_duel_v2
general:
 orientation: horizontal
 resolution: {width: "3840px", height: "2160px"}
 duration: "60s"
 frame_rate: 60fps
 file_format: mp4
 audio: true
layers:
 drone_feed:
 location: misty_mountain_pass
 action: >
 FPV drone shadows two drifting cars—white-black AE86 and red 86—through
 hairpins and switchbacks, alternating bumper-level chases with overhead
 orbits, climaxing in a synchronized smoke-filled slide.
 camera:
 device: cinema_fpv_drone_cam
 lens: ultra_wide_18mm
 movement: lock_on, altitude_punch, 360_orbit
 distance: 3-25m
 lighting: sodium_streetlights + moon_fill
 commentator_cam:
 location: roadside_tent
 appearance: presenter_headshot_with_headset
 camera:
 device: mirrorless_4k
 framing: head_and_shoulders
 lighting: soft_led_5600k
graphics:
 lower_third: "Drift Duel — Drone Cam"
 telemetry: [lead_car, chase_car, speed_kmh, drift_angle_deg]
 pip_commentator:
 source: commentator_cam
 position: bottom_left
 size: {width: 320px, height: 180px}
audio_mix:
 commentary:
 source: commentator_cam
 duck_targets: [engine, crowd]
 engine:
 source: drone_feed
 crowd:
 source: roadside_mics
subtitles: |
 “AE86 flicks it in—86 degrees of angle!”
 “Red 86 matches the smoke, door-to-door!”
 “Side-by-side exit—who dares later into the switchback?”
style: fpv_aerial_broadcast
mood: nighttime_high_adrenaline
color_grading: teal_orange_night
hashtags: [MountainDrift, AE86, Red86, TandemBattle, DroneCam]
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1926982698616115681" />
</ClientOnly>

### 投稿メモ
~~~text
Veo3で86でドリフト対決の空撮+実況!!! 
ここまで上手にドリフトできたのは初めてかも!!!
~~~

## 出典
- primary post: [1926982698616115681](https://x.com/hAru_mAki_ch/status/1926982698616115681)
- published at: 2025-05-26 21:44:11 JST
- archive doc: [1926982698616115681](../../../archive/x/2025/05/1926982698616115681.md)
