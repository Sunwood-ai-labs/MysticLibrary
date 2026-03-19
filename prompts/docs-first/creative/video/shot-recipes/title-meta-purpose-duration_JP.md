---
title: "title: \\\"蒼穹のウィッチユニット"
description: "CineBurst YAML V1.4 で航空魔導士の予告映画作ってみた!"
canonical_id: "creative/video/shot-recipes/title-meta-purpose-duration"
canonical_doc: "docs/prompt-catalog/creative/video/shot-recipes/title-meta-purpose-duration.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/shot-recipes/title-meta-purpose-duration.md. Edit docs/ instead. -->

version: "1.4"
meta:
 title: "蒼穹のウィッチユニット"
 purpose: "映画予告"
 duration_sec: 15
 aspect_ratio: "2.39:1"
 fps: 24
 style_refs:
 - "epic cinematic"
 - "rapid montage"
 - "high contrast"
 - "emotional lighting"
 campaign:
 use_social_proof: true
 allow_fomo_tone: true
story:
 theme: "神作画アニメーションの航空魔導士による空戦"
 genre_auto: true
 logline: "落ちこぼれの航空魔導士パイロットが、突如出現した正体不明の“無徽章編隊”に挑み、行方不明の姉の痕跡を追う中で、空と自分の限界を越える。"
 emotion_targets: ["awe","tension","urgency","hope"]
 info_gaps:
 - "無徽章編隊の正体と目的"
 - "姉の失踪の真相"
 - "禁忌魔導推進の代償"
structure:
 beats: ["cold_open","act1","act2_escalation","act3_climax","button"]
 act_map: ["起","承","転","結"]
scene_design:
 locations: ["雲海上のドッグファイト","浮遊都市の格納庫","雷雲の戦域"]
 time_weather: "薄明の蒼/高層雷雲/乱気流と氷結霧"
subject_action:
 description: "新人魔導士の主人公が初実戦で恐怖→決意へシフト。味方の損耗と姉の通信断片で感情が爆発し、禁忌の魔導加速を選ぶ。"
 tempo: "breathless"
camera:
 framing: ["ECU","wide","handheld"]
 moves: ["whip pan","crash zoom","dolly-in"]
 focus: "rack focus through chaos and emotion"
lighting_color:
 palette: ["cool blue backlight","amber practicals","hard rim"]
 notes: ["逆光で粒子を拾う","カラーコントラストで対立を強調"]
physics_materials:
 notes: ["魔力の残光","火花/破片","雨粒と氷結霧","呼気の白さ","レンズの水滴"]
audio:
 dialogue:
 - type: "rhetorical"
 who: "lead_01"
 text: "墜ちるのは、空か、私か?"
 start_sec: 1.2
 end_sec: 2.2
 - type: "statement"
 who: "ally_01"
 text: "翼を信じろ。魔力、全開!"
 start_sec: 10.6
 end_sec: 11.2
 bgm:
 structure:
 intro:
 start_sec: 0.0
 end_sec: 3.0
 notes: ["静→心拍/クリックで期待形成"]
 build:
 start_sec: 3.0
 end_sec: 9.8
 notes: ["レイヤー増/テンポ段階的上昇","一拍の“間”を挿入"]
 climax:
 start_sec: 9.8
 end_sec: 13.2
 notes: ["最大音圧→ドロップ(無音/減衰)"]
 button:
 start_sec: 13.2
 end_sec: 15.0
 notes: ["ウィット/余韻/タイトル提示"]
 sfx_palette: ["whoosh","impact hit","braaam","glass crack","heartbeat","metal scrape","afterburner flare"]
cards:
 copy:
 - kind: "social_proof"
 text: "“圧巻の空戦作画—視界が震える” とSNSで話題"
 in_sec: 4.0
 out_sec: 4.8
 - kind: "title_reveal"
 text: "蒼穹のウィッチユニット"
 in_sec: 13.3
 out_sec: 13.9
 - kind: "date_or_cta"
 text: "Coming Soon"
 in_sec: 14.2
 out_sec: 14.9
montage:
 cuts_total: 27
 target_cuts_per_sec: 1.8
 rhythm_grid:
 align_to: ["bgm_downbeats","dialogue_stings"]
 strategic_silence_secs: [3.0, 13.0]
 transitions: ["hard cut","whip pan","match cut"]
timeline:
 - label: "cold_open"
 start_sec: 0.0
 end_sec: 2.5
 action: "雲間で失速警報→操縦桿のECU→雷鳴フラッシュ、機体がスピン寸前"
 - label: "act1"
 start_sec: 2.5
 end_sec: 5.0
 action: "浮遊都市の格納庫で出撃準備/紋章点火→初交戦へ—修辞疑問が重なる"
 - label: "act2_escalation"
 start_sec: 5.0
 end_sec: 9.8
 action: "敵編隊の矢面で旋回戦→味方被弾→姉の断片通信“......聞こえる?”→カード挿入→急降下と反転の断片連打"
 - label: "act3_climax"
 start_sec: 9.8
 end_sec: 13.0
 action: "禁忌推進を起動:空が裂ける光跡→至近ミサイル回避→至近距離で魔導槍を展開→無音の暗転"
 - label: "button"
 start_sec: 13.0
 end_sec: 15.0
 action: "黒味からタイトル/コクピットで主人公が小さく笑う→HUDに“姉の識別信号:???”→CTA"
flat_prompt: >
 "テーマ『神作画アニメーションの航空魔導士による空戦』を15秒で描く映画予告風モンタージュ。
 コールドオープンで掴み、三幕で加速し、クライマックス後に無音の一撃を置いて
 タイトルと決め台詞で締める。ウィップパン/クラッシュズーム/ハードカットを軸に、
 逆光と粒子、重低音インパクトと心拍で緊張を設計。情報は断片化し、核心は伏せる。"
