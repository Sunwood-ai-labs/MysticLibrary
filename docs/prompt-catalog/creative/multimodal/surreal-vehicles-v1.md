---
title: 現実×シュール乗り物 一括生成プロンプト
description: 現実世界に突如現れるシュールな乗り物を静止画と動画で超高品質に描写するプロンプト
category: creative
intent: surreal-vehicles-v1
audience:
  - イラストレーター
  - 動画クリエイター
  - AIアーティスト
input_requirements:
  - 乗り物の種類と設定
  - 場所と時間帯
  - 全体の雰囲気・スタイル
tags:
  - シュール
  - 乗り物
  - 画像生成
  - 動画生成
  - Midjourney
  - Runway
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# 現実×シュール乗り物 一括生成プロンプト V1.0

## 想定用途

- 現実世界にシュールな乗り物を配置した画像・動画を生成する
- MidjourneyやSDXL、Runway Gen-3等のAIツールで使用する
- ハイパーリアリスティックな質感と映画のような構図を目指す

## プロンプト本文

```text
# 現実×シュール乗り物 一括生成プロンプト V1.0

## テーマ
"現実世界に突如現れるシュールな乗り物" を静止画と動画の両方で超高品質に描写するプロンプトを作成します。

---

## 🎨 画像＋動画プロンプト作成
あなたは、画像／動画生成 AI でこのテーマを表現するためのプロンプトを設計する AI です。
以下の **入力フィールド** を日本語で埋め、プロンプトを提案して
①画像用英語プロンプト → ②動画用英語プロンプト の順に生成して。

### ✅ 入力フィールド（日本語で記入）
- **乗り物の種類と設定**（例：巨大な目玉焼きが屋根に載った二階建てバス）
- **乗り物に関わる人物の詳細**（服装・感情・ポーズなど）
- **乗り物の外観と小道具**（色・質感・ディテール）
- **移動している場所／時間帯**（街中・高速道路・夜明けなど）
- **シュールさを増幅する演出**（飛散物・爆風・無重力など）
- **全体の雰囲気・スタイル**（フォトリアル／フィルム調／ネオンサイバーパンク等）
- **動画ならではのカメラワーク＆技術**（スローモーション／ドローン追尾／手持ち揺れ等）

---

### 🔧 英語プロンプト両方に必ず含める共通キーワード
- **hyper-realistic texture and lighting**
- **surreal yet grounded in a modern real-world setting**
- **dynamic motion blur & wind effects**
- **cinematic composition, wide-angle lens**
- **expressive yet subtly offbeat facial expression(s)**
- **background: [location specified above], objects related to the vehicle concept flying / reacting to speed**
- **whimsical realism, slight absurdist tone**

---

## 📝 出力フォーマット（ChatGPT が自動生成）
1. **IMAGE PROMPT (for Midjourney / SDXL etc.)**
   ```text
   <English prompt auto-generated here>
   ```

2. **VIDEO PROMPT (for Runway Gen-3, Pika, Stable Video Diffusion etc.)**

   ```text
   <English prompt auto-generated here>
   ```

   **Recommended technical options**

   * <option 1>
   * <option 2>
   * <option 3>

---

## 🔍 例（記入サンプル）

* **乗り物** : ジャイアント回転寿司コンベアに乗った赤い郵便ポストの車
* **人物** : 和装の青年、無表情でポストの投函口から上半身だけ覗く
* **外観** : ポストは光沢朱色、寿司皿が高速回転しネタが飛び散る
* **場所** : 深夜の渋谷スクランブル交差点
* **演出** : 醤油のしぶきと散ったガリが空中を舞う
* **雰囲気** : ネオンサイバーパンク＋フィルムグレイン
* **動画技術** : 360° オービットカメラ＋ハイスピード 120 fps スローモーション
```

## 使い方

1. 入力フィールドに希望する乗り物と設定を記入する
2. AIが画像用と動画用の英語プロンプトを自動生成する
3. 生成されたプロンプトを各AIツールに入力する

## 入力例

```text
乗り物：巨大な浮遊ドーナツが操縦席となっている飛行機
人物：パイロットヘルメットを着た女性、リラックスした表情
外観：ピンク色のグレーズ、スプリンクルが散りばめられる
場所：サンフランシスのゴールデンゲートブリッジ上空、夕暮れ
演出：砂糖の粉が風に舞い、虹色のトレイルが残る
雰囲気：フォトリアル＋ファンタジー調和
動画技術：ドローンによる横追尾から急上昇へ
```

## 出力例

```text
IMAGE PROMPT:
A floating donut piloted aircraft with pink glaze and scattered sprinkles, female pilot in helmet looking relaxed, Golden Gate Bridge backdrop at sunset, hyper-realistic texture and lighting, surreal yet grounded in modern real-world setting, cinematic composition wide-angle lens, whimsical realism slight absurdist tone --ar 16:9 --v 6.0

VIDEO PROMPT:
A pink glazed donut aircraft soaring over Golden Gate Bridge at sunset, female pilot visible through transparent cockpit, sprinkles trailing behind like rainbow dust, drone tracking shot transitioning to rapid ascent, 120fps slow motion, hyper-realistic texture and lighting, dynamic motion blur and wind effects, cinematic composition
```

## 注意点

- 共通キーワードは必ず両方のプロンプトに含める
- 動画プロンプトにはカメラワーク技術を具体的に指定する
- 現実的な質感とシュールさのバランスを重視する
