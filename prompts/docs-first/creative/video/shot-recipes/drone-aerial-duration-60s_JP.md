---
title: "duration: \\\"60s"
description: "F1 Race Aerial Commentary — drone · broadcast · 4K (v1.1)"
canonical_id: "creative/video/shot-recipes/drone-aerial-duration-60s"
canonical_doc: "docs/prompt-catalog/creative/video/shot-recipes/drone-aerial-duration-60s.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/shot-recipes/drone-aerial-duration-60s.md. Edit docs/ instead. -->

# F1 Race Aerial Commentary — drone · broadcast · 4K (v1.1)
video_type: f1_race_drone_aerial_commentary_v1

general:
 orientation: horizontal # 16 : 9 landscape
 aspect_ratio: 1.7778
 resolution: { width: "3840px", height: "2160px" } # 4K UHD
 duration: "60s"
 frame_rate: 60fps # smooth high-speed action
 file_format: mp4
 audio: true # live voice-over mix
 quality: ultra_high_definition
 safe_zone: broadcast_safe_margins

scene:
 location:
 type: on-track_aerial
 details: >
 Autodromo Nazionale Monza; sweeping aerial views of Curva Grande,
 Variante Ascari, and the main straight; late-afternoon golden hour
 sunlight casting long shadows across grandstands bursting with red
 and yellow banners.
 main_subject:
 identity: "Aerial Broadcast Drone Feed"
 action: >
 FPV-style drone swoops low over the main straight at 140 km/h,
 climbs to a 40-m altitude for a top-down shot of pit stops, then
 races parallel to the leading car through Parabolica before
 banking away in a cinematic orbit.
 background_activity: >
 Pack of cars jostling for position, DRS flaps opening; tire-smoke at
 turn-in points; crowd waves flags; marshals in orange vests line the
 barriers.
 props: N/A

camera:
 device: DJI Inspire 3 + Zenmuse X9-8K Air
 lens: 18 mm equivalent
 angle: dynamic_chase (varied pitches)
 distance: 5 – 40 m from cars
 movement: >
 high-speed_tracking, rapid_altitude_punch-outs, 270°_orbits,
 smooth_dolly_push-ins toward apex
 stabilization: active_3-axis_gimbal + post_stabilization

lighting:
 key_light: natural_golden_hour_sunlight
 fill_light: none (retain dramatic contrast)
 rim_light: sun_glints_on_car_bodywork
 overall_tone: vibrant_high_contrast

graphics_overlay:
 lower_third:
 text: "LAP 27 | Italian Grand Prix 2025 — DRONE CAM"
 style: matte_black_bg + team_accents
 telemetry_strip:
 position: bottom_center
 data_fields:
 - car_number
 - speed_kmh
 - g_force
 - DRS_status
 minimap_pip:
 source: live_track_map
 position: top_right

audio:
 language: English
 ambience: tuned_engine_roar_fade-in_mix
 dialogue: >
 “Take a look from above—watch Verstappen’s racing line through
 Ascari; he’s using every millimetre of kerb! Our drone shows a
 12-km/h speed delta as he exits and gains on Norris. Keep an eye on
 that slipstream... here comes the move into Parabolica!”
 mic_type: broadcast_commentary_booth
 processing: realtime_compression + noise_gate

mood: adrenaline-soaked_cinematic
style: FPV_drone_aerial × live_sports_broadcast
color_grading: neutral_broadcast_rec709
hashtags:
 - F1DroneCam
 - ItalianGP
 - RaceFromAbove
 - Monza2025
 - MotorsportAerial
