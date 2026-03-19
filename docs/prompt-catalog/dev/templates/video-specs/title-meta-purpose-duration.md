---
title: "title: \"プリズムノクターン"
description: "CineBurst YAML V1.4 でミュージックビデオ風の作ってみた!2⃣"
category: "dev"
intent: "developer-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - dev
  - templates
  - video-specs
  - title
  - meta
  - purpose
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1980675431285354966"
source_url: "https://x.com/hAru_mAki_ch/status/1980675431285354966"
source_published_at: "2025-10-21T16:39:56.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/10/1980675431285354966.md"
source_note_ids:
  - 1980675430949744644
canonical_id: "dev/templates/video-specs/title-meta-purpose-duration"
prompt_source: "prompts/docs-first/dev/templates/video-specs/title-meta-purpose-duration_JP.md"
---

# title: "プリズムノクターン

CineBurst YAML V1.4 でミュージックビデオ風の作ってみた!2⃣

## プロンプト本文
~~~text
version: "1.4"
meta:
 title: "プリズムノクターン"
 purpose: "アニメーションMV / 映画予告風"
 duration_sec: 15
 aspect_ratio: "2.39:1"
 fps: 24
 style_refs:
 - "fantasy animation"
 - "cinematic music video"
 - "high contrast"
 - "dreamlike lighting"
 campaign:
 use_social_proof: true
 allow_fomo_tone: true
story:
 theme: "幻想的な神作画アニメーションMV:七色に発光するピアノとネオンテトラが奏でる宇宙の旋律"
 genre_auto: true
 logline: "星空の下、発光するピアノで奏でる旋律が、魚たちの光を呼び覚まし、夜を虹に染める。"
 emotion_targets: ["awe","serenity","wonder","hope"]
 info_gaps:
 - "ピアノの光の源は何なのか"
structure:
 beats: ["cold_open","act1","act2_escalation","act3_climax","button"]
 act_map: ["起","承","転","結"]
scene_design:
 locations: ["星空の下の半透明ピアノ","漂うネオンテトラの群れ","宇宙的な海"]
 time_weather: "夜 / 無重力のような静寂"
subject_action:
 description: "少女がピアノに触れるたび、七色の光が指先から広がり、魚たちが旋律に共鳴して舞う。"
 tempo: "lyrical"
camera:
 framing: ["ECU","wide","aerial orbit"]
 moves: ["slow dolly-in","match cut","fluid pan"]
 focus: "rack focus between piano keys and swimming lights"
lighting_color:
 palette: ["prism glow","deep indigo","silver rim"]
 notes: ["光粒子が水のように漂う","指先の発光が空間を染める"]
physics_materials:
 notes: ["光の粒子/水滴/反射/透過する鱗の輝き"]
audio:
 dialogue:
 - type: "rhetorical"
 who: "lead_01"
 text: "この音は...光になるの?"
 start_sec: 1.4
 end_sec: 2.3
 - type: "statement"
 who: "ally_01"
 text: "見て、夜が目を覚ます。"
 start_sec: 10.8
 end_sec: 11.4
 bgm:
 structure:
 intro:
 start_sec: 0.0
 end_sec: 3.0
 notes: ["単音ピアノ→アルペジオ","星の瞬きのようなSE"]
 build:
 start_sec: 3.0
 end_sec: 9.8
 notes: ["ストリングスと電子音層が加速","光が波紋のように広がる"]
 climax:
 start_sec: 9.8
 end_sec: 13.2
 notes: ["全楽器一斉に高揚→無音へドロップ"]
 button:
 start_sec: 13.2
 end_sec: 15.0
 notes: ["余韻のピアノ単音","虹色の光が静かに収束"]
 sfx_palette: ["soft shimmer","reverb pulse","crystal chime","heartbeat echo"]
cards:
 copy:
 - kind: "social_proof"
 text: "“映像美が心を照らす” — 話題の幻想アニメMV"
 in_sec: 4.0
 out_sec: 4.8
 - kind: "title_reveal"
 text: "プリズムノクターン"
 in_sec: 13.3
 out_sec: 13.9
 - kind: "date_or_cta"
 text: "Now Streaming"
 in_sec: 14.2
 out_sec: 14.9
montage:
 cuts_total: 27
 target_cuts_per_sec: 1.8
 rhythm_grid:
 align_to: ["bgm_downbeats","piano_arpeggio"]
 strategic_silence_secs: [3.0, 13.0]
 transitions: ["match cut","light flare","cross dissolve"]
timeline:
 - label: "cold_open"
 start_sec: 0.0
 end_sec: 2.5
 action: "暗闇の中、ピアノの1音と共に七色の光が広がる"
 - label: "act1"
 start_sec: 2.5
 end_sec: 5.0
 action: "少女と発光する魚たちの出会い、旋律が始まる"
 - label: "act2_escalation"
 start_sec: 5.0
 end_sec: 9.8
 action: "音と光の融合、ピアノと魚が空を舞う幻想的モンタージュ"
 - label: "act3_climax"
 start_sec: 9.8
 end_sec: 13.0
 action: "爆発する光の海、全てが無音に溶ける瞬間"
 - label: "button"
 start_sec: 13.0
 end_sec: 15.0
 action: "静かなピアノ音とタイトル、余韻に虹の粒が漂う"
flat_prompt: >
 「七色プリズムLED発光ピアノとネオンテトラが飛び交う幻想アニメーションMV」を15秒で描く映画予告風モンタージュ。
 星空と水中の境界が溶け、光と音が共鳴する世界。ピアノの旋律で夜が目を覚ます。
 神作画の光粒子、高速モンタージュ、宇宙的な静寂と無音のドロップで観る者の心拍を同期させる。
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1980675431285354966" />
</ClientOnly>

### 投稿メモ
~~~text
CineBurst YAML V1.4 でミュージックビデオ風の作ってみた!2⃣
~~~

## 出典
- primary post: [1980675431285354966](https://x.com/hAru_mAki_ch/status/1980675431285354966)
- published at: 2025-10-22 01:39:56 JST
- archive doc: [1980675431285354966](../../../archive/x/2025/10/1980675431285354966.md)
