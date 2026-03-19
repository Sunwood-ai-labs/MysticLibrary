---
title: "title: \\\"虚構セミナーの真実"
description: "私も情報商材の啓蒙動画作ってみた2⃣"
canonical_id: "dev/templates/video-specs/video-title-meta-purpose"
canonical_doc: "docs/prompt-catalog/dev/templates/video-specs/video-title-meta-purpose.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/dev/templates/video-specs/video-title-meta-purpose.md. Edit docs/ instead. -->

version: "1.0"
meta:
 title: "虚構セミナーの真実"
 purpose: "SNS短編・啓蒙動画"
 duration_sec: 10
 aspect_ratio: "9:16"
 fps: 24
 style_refs: ["mock seminar", "documentary tone", "cinematic realism"]
scene:
 description: "白い壁とプロジェクターのある小会議室。架空のビジネスセミナーが進行中。照明は明るく人工的。"
subject_action:
 description: "講師が自信満々に成功話を語るが、後列の若者が疑いの目で見つめる。空気に違和感が漂う。"
camera:
 framing: ["wide", "medium", "close-up"]
 moves: ["handheld", "cut-in to reaction shot"]
 lens_mm: 40
 focus: "rack focus between speaker and listener"
lighting_style:
 description: "クールな白色ライトで過剰に明るい室内。後半で自然光が差し込む変化を演出。"
physics_materials:
 notes: ["プロジェクターの光が空中の埃を照らし、観客の視線が揺れる"]
audio:
 dialogue:
 - who: "male_speaker"
 text: "このノウハウで、誰でも月収100万です!"
 start_sec: 2
 end_sec: 4
 - who: "male_listener"
 text: "......本当に?"
 start_sec: 7
 end_sec: 8
 ambience: ["room tone", "murmuring audience"]
 sfx: ["projector hum", "paper rustle"]
 bgm:
 mood: "minimal tension underscore"
 start_sec: 0
 end_sec: 10
timeline:
 - start_sec: 0
 end_sec: 3
 action: "講師がホワイトボード前で自信満々に話し始める。"
 camera: ["wide", "handheld"]
 audio_cues: ["ambience on", "bgm start", "dialogue: male_speaker『このノウハウで、誰でも月収100万です!』"]
 - start_sec: 4
 end_sec: 6
 action: "後列の若者が眉をひそめ、周囲を見渡す。プロジェクターの光に埃が舞う。"
 camera: ["medium", "cut-in to reaction shot"]
 audio_cues: ["ambience continue", "sfx: projector hum"]
 - start_sec: 7
 end_sec: 10
 action: "若者の目が講師からスライドの小さな注意書きに移り、『......本当に?』と呟く。"
 camera: ["close-up", "rack focus between text and face"]
 audio_cues: ["dialogue: male_listener『......本当に?』"]
exclusions:
 - "特定企業ロゴや実在商材の名前"
 - "過度なコメディ演出"
safety_notes:
 - "教育的・啓蒙目的に限定"
 - "実在人物・団体を模倣しない"
negative_prompts:
 - "satirical exaggeration"
 - "overexposed lighting"
flat_prompt: >
 "白い壁の小会議室で、架空のビジネスセミナーが行われている。
 講師は『このノウハウで誰でも月収100万です!』と自信満々に語るが、
 後列の若者は静かに眉をひそめ、疑念を抱く。プロジェクター光に舞う埃が不穏な空気を演出。
 終盤、若者がスライドの注意書きを見て『......本当に?』と呟く。
 教育的な啓蒙目的で、実在商材や企業名は登場しない。10秒、9:16。"
