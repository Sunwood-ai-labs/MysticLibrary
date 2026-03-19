---
title: "title: \\\"シネマティックな猫の日常"
description: "Higgsfield Sora 2 Pro やってみた2⃣"
canonical_id: "creative/video/shot-recipes/higgsfield-title-meta-purpose-sns-duration-fps"
canonical_doc: "docs/prompt-catalog/creative/video/shot-recipes/higgsfield-title-meta-purpose-sns-duration-fps.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/shot-recipes/higgsfield-title-meta-purpose-sns-duration-fps.md. Edit docs/ instead. -->

version: "1.0"
meta:
 title: "シネマティックな猫の日常"
 purpose: "SNS短編"
 duration_sec: 10
 aspect_ratio: "16:9"
 fps: 24
 style_refs: ["cinematic", "soft natural light", "shallow depth of field"]
scene:
 description: "午前の柔らかな日差しが差し込むリビング。木漏れ日が床を照らし、穏やかな空気が漂う。"
subject_action:
 description: "白と灰色の猫が窓辺で伸びをし、ゆっくりと毛づくろいをする。リラックスした様子で周囲を見回す。"
camera:
 framing: ["close-up", "medium"]
 moves: ["slow pan", "gentle dolly-in"]
 lens_mm: 50
 focus: "rack focus between cat and sunlight pattern"
lighting_style:
 description: "自然光主体。暖かく柔らかいトーンで、窓越しの光が毛並みにハイライトを作る。微細なダストが浮遊。"
physics_materials:
 notes: ["猫の毛が光を受けてふんわり揺れる", "カーテンが微風でわずかに揺れる"]
audio:
 ambience: ["morning breeze through window", "distant birds chirping"]
 sfx: ["soft purring", "subtle rustle of fabric"]
 bgm:
 mood: "gentle piano"
 start_sec: 0
 end_sec: 10
timeline:
 - start_sec: 0
 end_sec: 3
 action: "猫のCUで目を閉じて伸びをする。柔らかな光が差し込み、環境音とピアノが始まる。"
 camera: ["close-up", "slow pan"]
 audio_cues: ["ambience on", "bgm on"]
 - start_sec: 4
 end_sec: 7
 action: "猫がゆっくり毛づくろい。被写界深度を浅くして毛並みの質感を強調。"
 camera: ["medium", "rack focus between fur and background"]
 - start_sec: 8
 end_sec: 10
 action: "窓の外を見つめる猫。逆光でシルエット気味に映し、BGMが静かにフェード。"
 camera: ["medium", "gentle dolly-in"]
 audio_cues: ["bgm fade out"]
exclusions:
 - "on-screen text overlays"
 - "cartoonish exaggeration"
safety_notes:
 - "実在の飼い猫の映像を使用する場合は飼い主の許諾を得る"
 - "動物にストレスを与える演出は禁止"
negative_prompts:
 - "overexposed highlights"
 - "harsh shadows"
flat_prompt: >
 "午前の柔らかな日差しが差し込むリビングで、白と灰色の猫が伸びをし、毛づくろいをする。
 カメラはクローズアップから中距離へ、ゆっくりパンしながら毛並みにラックフォーカス。
 暖かい自然光が猫の毛を照らし、カーテンが微風で揺れる。環境音は穏やかな風と遠くの鳥のさえずり。
 ピアノのBGMが静かに流れ、最後に猫が窓の外を見つめて終わる。シネマティックな質感、10秒、16:9。"

#HiggsfieldSora2
