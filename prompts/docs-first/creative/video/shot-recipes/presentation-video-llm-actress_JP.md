---
title: "resolution: {width: \\\"3840px\\\", height: \\\"2160px\\\"}"
description: "video_type: llm_presentation_actress_v1"
canonical_id: "creative/video/shot-recipes/presentation-video-llm-actress"
canonical_doc: "docs/prompt-catalog/creative/video/shot-recipes/presentation-video-llm-actress.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/video/shot-recipes/presentation-video-llm-actress.md. Edit docs/ instead. -->

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
