---
title: "title: \\\"ARENA RUSH"
description: "HiggsfieldSora2"
canonical_id: "dev/templates/video-specs/higgsfield-title-arena-rush"
canonical_doc: "docs/prompt-catalog/dev/templates/video-specs/higgsfield-title-arena-rush.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/dev/templates/video-specs/higgsfield-title-arena-rush.md. Edit docs/ instead. -->

#HiggsfieldSora2 
version: "1.1"
meta:
 title: "ARENA RUSH"
 purpose: "SNS短編/Vlog予告"
 duration_sec: 12
 aspect_ratio: "2.39:1"
 fps: 24
 style_refs: ["epic cinematic", "rapid montage", "high contrast", "emotional lighting"]
story:
 theme: "バスケのアリーナのVlog映像"
 logline: "新人Vloggerが満員のアリーナで試合前からブザービーターまでの熱狂を一気に体験し、カメラ越しの自分を見つける。"
 act_map: ["起:導入", "承:葛藤", "転:破局", "結:再生"]
scene:
 description: "夜のアリーナ外観→入場ゲートとコンコース→コートサイドとロッカールーム前→観客席最前列→コート中央"
 time_weather: "夜・屋内(LEDリボン光/スモーク微量)"
subject_action:
 description: "主人公がPOVで走り込み、観客とハイタッチ、選手入場を撮影。興奮→圧倒→集中→達成へ感情が遷移。"
 tempo: "breathless"
camera:
 framing: ["POV", "wide", "extreme close-up", "handheld", "gimbal follow"]
 moves: ["whip pan", "crash zoom", "dolly-in", "arc move", "hyperlapse"]
 focus: "rack focus through chaos and emotion"
lighting_style:
 description: "冷たいアリーナ白色光×コートの琥珀色スポット。LEDスクリーンの彩度高め。観客の顔にストロボ状の反射。"
physics_materials:
 notes: ["紙吹雪が宙を舞う", "汗の微粒がライトで煌めく", "床の樹脂光沢にリフレクション", "ポップコーンの欠片が足元で跳ねる"]
audio:
 dialogue:
 - who: "lead_01"
 text: "ここが、音が心臓になる場所。"
 start_sec: 10
 end_sec: 11
 bgm:
 mood: "trap build → bass drop → silence+歓声"
 start_sec: 0
 end_sec: 12
 sfx: ["観客の大歓声", "スニーカーのキュッ", "ブザー", "ネットのスウィッシュ", "フロアのドンドン踏み鳴らし", "whoosh cuts"]
montage:
 cuts_total: 22
 target_cuts_per_sec: 1.8
 transition_types: ["hard cut", "whip pan", "match cut"]
timeline:
 - start_sec: 0
 end_sec: 4
 action: "起: 外観のネオン→ゲートでチケットスキャン→コンコースの屋台を手持ちPOVで通過。観客とハイタッチ、レンズフレアで掴む。"
 - start_sec: 4
 end_sec: 9
 action: "承転: 会場暗転→火柱エフェクトと選手紹介。クラッシュズーム連発、1拍スロー→リバース→スリーのスウィッシュで群衆が爆発。"
 - start_sec: 9
 end_sec: 12
 action: "結: 心拍に合わせて環境音だけに。主人公がコート中央へドリーイン、ささやく台詞→ブザービーターの瞬間でフリーズ→暗転。"
flat_prompt: >
 "テーマ『バスケのアリーナのVlog映像』を12秒で描く映画予告風モンタージュ。
 超高速カットで外観→入場→選手紹介→決定的瞬間までを圧縮し、カメラはPOVのウィップパンとクラッシュズームを多用。
 冷たいアリーナ光とLEDの色彩、汗と紙吹雪の物理感、trapビートのビルドと歓声のドロップで熱狂を可視化し、
 最後に静寂の中「ここが、音が心臓になる場所。」の一言で余韻を残す。"
