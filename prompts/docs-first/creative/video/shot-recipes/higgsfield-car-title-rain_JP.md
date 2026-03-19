---
title: "title: \\\"Rain Battle BRZ"
description: "Higgsfield Sora 2 Pro やってみた1⃣"
canonical_id: "creative/video/shot-recipes/higgsfield-car-title-rain"
canonical_doc: "docs/prompt-catalog/creative/video/shot-recipes/higgsfield-car-title-rain.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/shot-recipes/higgsfield-car-title-rain.md. Edit docs/ instead. -->

version: "1.0"
meta:
 title: "Rain Battle BRZ"
 purpose: "映画風カーアクション短編"
 duration_sec: 12
 aspect_ratio: "21:9"
 fps: 24
 style_refs: ["cinematic", "rain soaked", "dynamic motion blur"]
scene:
 description: "夜の山道、激しい雨。霧を伴う峠道の連続カーブ。街灯が途切れ途切れに濡れた路面を照らす。"
subject_action:
 description: "赤と青のスバルBRZが限界まで攻め合う。ドライバーの集中と緊張、ヘッドライトが雨煙を切り裂く。"
camera:
 framing: ["wide", "medium", "close-up"]
 moves: ["tracking", "low angle chase", "aerial pan", "slow motion drift shot"]
 lens_mm: 35
 focus: "rack focus between cars"
lighting_style:
 description: "冷たいブルーのトーン。ヘッドライトの光が雨を透かし、強いコントラストとシネマ的なウェットグレーディング。"
physics_materials:
 notes: ["タイヤが水を弾き飛ばす", "雨粒がボンネットを滑り落ちる", "濡れた路面がヘッドライトを反射する", "排気熱で蒸気が立ちのぼる"]
audio:
 ambience: ["heavy rain", "distant thunder", "engine echo through valley"]
 sfx: ["tire screech", "gear shift click", "splashing water", "rev limiter blip"]
 bgm:
 mood: "intense orchestral hybrid score"
 start_sec: 0
 end_sec: 12
timeline:
 - start_sec: 0
 end_sec: 3
 action: "トンネルを抜けた赤と青のBRZ。ヘッドライトの光が雨粒を切り裂く。エンジン音が山に反響。"
 camera: ["wide", "tracking", "low angle chase"]
 audio_cues: ["ambience on", "bgm start"]
 - start_sec: 4
 end_sec: 7
 action: "コーナー進入。赤のBRZがドリフト、青がインを狙う。水しぶきがカメラを覆う。"
 camera: ["medium", "slow motion drift shot", "rack focus between cars"]
 audio_cues: ["sfx: tire screech", "sfx: splashing water"]
 - start_sec: 8
 end_sec: 10
 action: "激しい雨煙の中、二台が並走しながらスピードを上げる。排気の熱で蒸気が舞い上がる。"
 camera: ["aerial pan", "tracking"]
 audio_cues: ["bgm intensifies", "ambience with thunder"]
 - start_sec: 11
 end_sec: 12
 action: "カメラがゆっくり引き、ヘッドライトの光跡が霧の中に消えていく。"
 camera: ["wide", "gentle pull back"]
 audio_cues: ["bgm fade out", "ambience rain only"]
exclusions:
 - "on-screen text overlays"
 - "過剰なモーションブラー"
 - "派手な爆発エフェクト"
safety_notes:
 - "公道走行描写は実際の危険行為を助長しない演出とする"
 - "実車識別が可能なロゴやナンバーは再現しない"
negative_prompts:
 - "unrealistic physics"
 - "overexposed reflections"
flat_prompt: >
 "激しい雨の夜、山間の峠道を赤と青のBRZが駆け抜ける。トンネルを抜け、雨粒を切り裂くヘッドライト。
 タイヤが水を弾き、濡れた路面が光を反射する。赤がドリフトでアウトを攻め、青がインを差す。
 水しぶきがカメラを覆い、排気熱が霧を巻き上げる。冷たいブルー調の映画的ライティングと、
 シネマティックなスローモーションで雨とスピードの緊迫感を描く。最後にヘッドライトの光跡が霧に消える。
 12秒、21:9。"

#HiggsfieldSora2
