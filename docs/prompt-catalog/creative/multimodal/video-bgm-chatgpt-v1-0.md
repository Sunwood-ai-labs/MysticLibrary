---
title: "任意の題材を 黒白線画 の「静止画+動画+BGM」の三要素で高品質に表現します。"
description: "汎用 線画ビジュアル一括生成プロンプト V1.0"
category: "creative"
intent: "creative-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - creative
  - multimodal
  - video
  - bgm
  - chatgpt
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "1933851662978085118"
source_url: "https://x.com/hAru_mAki_ch/status/1933851662978085118"
source_published_at: "2025-06-14T11:39:00.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/06/1933851662978085118.md"
source_note_ids:
  - 1933851662697017344
canonical_id: "creative/multimodal/video-bgm-chatgpt-v1-0"
prompt_source: "prompts/docs-first/creative/multimodal/video-bgm-chatgpt-v1-0_JP.md"
---

# 任意の題材を 黒白線画 の「静止画+動画+BGM」の三要素で高品質に表現します。

汎用 線画ビジュアル一括生成プロンプト V1.0

## プロンプト本文
~~~text
# 汎用 線画ビジュアル一括生成プロンプト V1.0

## テーマ
任意の題材を **黒白線画** の「静止画+動画+BGM」の三要素で高品質に表現します。

---

## 🛠️ あなた(ChatGPT 等)への指示
あなたは 画像/動画/音楽生成 AI 向けプロンプトを設計する AI です。 
下記 **入力フィールド**(日本語)を受け取り、 
1 IMAGE PROMPT → 2 VIDEO PROMPT → 3 BGM PROMPT の順で英語出力してください。

---

### ✅ 入力フィールド(日本語で記入)
- **メインテーマ・モチーフ**(例:月光の下で舞う龍、空飛ぶティーカップ列車 等) 
- **登場人物・生き物**(服装・感情・ポーズなど) 
- **小物・マテリアル・質感**(例:万年筆インク滴、紙吹雪、歯車 など) 
- **シーン(背景・ロケーション)/時間帯**(都市/森/宇宙、夜明け/夕暮れ など) 
- **ダイナミック演出**(スロー、無重力、パーティクル爆散 等) 
- **全体の雰囲気・スタイル**(テクニカルペン画/マンガ調/フィルムノワール 等) 
- **動画特有カメラワーク・技術**(ドローン追尾、360°オービット、手描きタッチ揺れ 等) 
- **BGM イメージ** 
 - 楽器構成・ジャンル(例:Lo-fi×琴、8-bit チップチューン 等) 
 - テンポ・キー(例:95 BPM A minor) 
 - 演出ポイント(例:クライマックスでドラムブレイク) 

---

### 🔧 IMAGE / VIDEO 共通で必ず含めるキーワード
- **black-and-white line-art, crisp micron-pen strokes** 
- **surreal yet grounded (現実味+少し不条理)** 
- **dynamic motion-line accents & wind effects** 
- **cinematic wide-angle composition** 
- **expressive yet subtly off-beat facial / body language** 
- **background: [入力したロケーション], objects reacting to motion** 
- **whimsical realism, slight absurdist tone**

---

## 📝 出力フォーマット(ChatGPT が自動生成)
IMAGE PROMPT (for Midjourney / SDXL etc.)
<English line-art image prompt generated here>

VIDEO PROMPT (for Runway Gen-3, Pika, Stable Video Diffusion etc.)
<English line-art video prompt generated here>
Recommended technical options
Resolution / aspect (e.g., 4 K 16:9)
Frame-rate / slow-motion specs
Rendering style / post-effects

BGM PROMPT (for Suno AI, Soundraw, AIVA etc.)
<English BGM prompt generated here>
Recommended technical options
Key / BPM / length (loop or single pass)
Audio format (e.g., 48 kHz 24-bit WAV)
Stem delivery requirements

---

🔍 記入サンプル

メインテーマ : 星明かりの図書館を漂う巨大クラゲ 
登場人物 : マントを羽織った司書、驚き顔で本を抱える 
小物 : 漂う古書のページ、万華鏡状の光粒 
シーン : 夜の空中図書館(浮遊島) 
演出 : 無重力で本のページがゆっくり舞う、クラゲ触手に電光走る 
雰囲気 : テクニカルペン画+レトロスクリーントーン 
カメラ : ゆるやかなドリーイン → ページが止まる瞬間 120 fps スロー 
BGM : Ambient Lo-fi × ハープ, 80 BPM C minor, スロー部で深いリバーブ
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/1933851662978085118" />
</ClientOnly>

### 投稿メモ
~~~text
現実×シュール乗り物の一括生成プロンプトを参考にして、線画の動画一括生成プロンプト「汎用 線画ビジュアル一括生成プロンプト」も作ってみた!!!
これは結構イメージ通りかも!
~~~

## 出典
- primary post: [1933851662978085118](https://x.com/hAru_mAki_ch/status/1933851662978085118)
- published at: 2025-06-14 20:39:00 JST
- archive doc: [1933851662978085118](../../archive/x/2025/06/1933851662978085118.md)
