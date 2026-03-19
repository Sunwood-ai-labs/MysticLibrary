---
title: "resolution: {width: \"3840px\", height: \"2160px\"}"
description: "video_type: llm_presentation_actress_v1"
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
  - presentation
  - llm
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1926994900928606684"
source_url: "https://x.com/hAru_mAki_ch/status/1926994900928606684"
source_published_at: "2025-05-26T13:32:40.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/05/1926994900928606684.md"
source_note_ids:
  - 1926994900714663936
canonical_id: "creative/video/shot-recipes/presentation-video-llm-actress"
prompt_source: "prompts/docs-first/creative/video/shot-recipes/presentation-video-llm-actress_JP.md"
---

# resolution: &#123;width: "3840px", height: "2160px"&#125;

video_type: llm_presentation_actress_v1

## プロンプト本文
~~~text
video_type: llm_presentation_actress_v1
general:
 orientation: horizontal
 resolution: {width: "3840px", height: "2160px"}
 duration: "90s"
 frame_rate: 30fps
 file_format: mp4
 audio: true
layers:
 presenter_cam:
 location: modern_loft_studio
 action: >
 Hollywood-level actress stands beside a wall-mounted 85" display,
 explaining large language models—tokenization, transformer blocks,
 fine-tuning, alignment—while gesturing to each slide.
 camera:
 device: cinema_cam_4k
 lens: 35mm_prime
 movement: slow_dolly_in_out
 lighting: three_point_soft_5600k
 slide_feed:
 content: >
 Animated infographics: token flow diagram, attention heatmap,
 scaling curve, safety checklist.
 pip:
 position: top_right
 size: {width: 640px, height: 360px}
graphics:
 lower_third: "Intro to Large Language Models"
 bullet_overlay: ["Tokens", "Attention", "Training", "Safety"]
audio_mix:
 commentary:
 source: presenter_cam
 duck_targets: [ambient_music]
 ambient_music:
 track: subtle_uplifting_synth_pad
 mix_level: -14dB
subtitles: |
 “Large language models predict the next token in a sequence...”
 “Transformers let the model focus attention across the entire context...”
 “Fine-tuning adapts the base model to specialized tasks...”
 “Alignment ensures outputs remain helpful and safe.”
style: cinematic_educational_presenter
mood: inspiring_informative
color_grading: warm_studio
hashtags: [LLM, AI, TechExplained, ActressPresenter, KnowledgeDrop]
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1926994900928606684" />
</ClientOnly>

### 投稿メモ
~~~text
Veo3でLLMについてのプレゼンしてもらった!!!
普通に良いのでは!!!これは拡張したい!!
~~~

## 出典
- primary post: [1926994900928606684](https://x.com/hAru_mAki_ch/status/1926994900928606684)
- published at: 2025-05-26 22:32:40 JST
- archive doc: [1926994900928606684](../../../archive/x/2025/05/1926994900928606684.md)
