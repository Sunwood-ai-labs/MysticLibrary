---
title: 現実×シュール乗り物 一括生成プロンプト
description: 現実世界に突如現れるシュールな乗り物を静止画と動画の両方で超高品質に描写するプロンプト
category: creative
intent: surreal-vehicle-generation
audience:
  - クリエイティブディレクター
  - AIアーティスト
  - ビデオクリエイター
  - コンセプトアーティスト
input_requirements:
  - 乗り物の種類と設定
  - 乗り物に関わる人物の詳細
  - 場所と時間帯
tags:
  - 画像生成
  - 動画生成
  - シュール
  - マルチモーダル
status: stable
owner: creative-team
last_reviewed: 2026-02-23
---

# 現実×シュール乗り物 一括生成プロンプト

## 想定用途

- AIアートのためのシュールなコンセプト創作
- 画像・動画生成AIでのクリエイティブ作品制作
- 広告やコンテンツでのインパクトのある映像制作
- コンセプトアートのブレインストーミング

## プロンプト本文

```text
テーマ: "現実世界に突如現れるシュールな乗り物" を静止画と動画の両方で超高品質に描写するプロンプトを作成します。

あなたは、画像／動画生成 AI でこのテーマを表現するためのプロンプトを設計する AI です。
以下の入力フィールドを日本語で埋め、プロンプトを提案して
①画像用英語プロンプト → ②動画用英語プロンプト の順に生成してください。

## 入力フィールド（日本語で記入）
- 乗り物の種類と設定（例：巨大な目玉焼きが屋根に載った二階建てバス）
- 乗り物に関わる人物の詳細（服装・感情・ポーズなど）
- 乗り物の外観と小道具（色・質感・ディテール）
- 移動している場所／時間帯（街中・高速道路・夜明けなど）
- シュールさを増幅する演出（飛散物・爆風・無重力など）
- 全体の雰囲気・スタイル（フォトリアル／フィルム調／ネオンサイバーパンク等）
- 動画ならではのカメラワーク＆技術（スローモーション／ドローン追尾／手持ち揺れ等）

## 英語プロンプト両方に必ず含める共通キーワード
- hyper-realistic texture and lighting
- surreal yet grounded in a modern real-world setting
- dynamic motion blur & wind effects
- cinematic composition, wide-angle lens
- expressive yet subtly offbeat facial expression(s)
- background: [location specified above], objects related to the vehicle concept flying / reacting to speed
- whimsical realism, slight absurdist tone

## 出力フォーマット
1. IMAGE PROMPT (for Midjourney / SDXL etc.)
   <英語プロンプト>

2. VIDEO PROMPT (for Runway Gen-3, Pika, Stable Video Diffusion etc.)
   <英語プロンプト>

   Recommended technical options:
   - <option 1>
   - <option 2>
   - <option 3>
```

## 使い方

1. **コンセプトを考える**: シュールな乗り物のアイデアを入力フィールドに記入
2. **プロンプトを生成**: AIに画像用・動画用プロンプトを生成させる
3. **画像生成AIに入力**: Midjourney、Stable Diffusionなどで画像を生成
4. **動画生成AIに入力**: Runway Gen-3、Pikaなどで動画を生成

## 入力例

```
乗り物: ジャイアント回転寿司コンベアに乗った赤い郵便ポストの車
人物: 和装の青年、無表情でポストの投函口から上半身だけ覗く
外観: ポストは光沢朱色、寿司皿が高速回転しネタが飛び散る
場所: 深夜の渋谷スクランブル交差点
演出: 醤油のしぶきと散ったガリが空中を舞う
雰囲気: ネオンサイバーパンク＋フィルムグレイン
動画技術: 360° オービットカメラ＋ハイスピード 120 fps スローモーション
```

## 出力例

生成されるプロンプトには以下の要素が含まれます：

**IMAGE PROMPT**:
- Midjourney/SDXL用の英語プロンプト
- 共通キーワード（ハイパーリアリスティック、シネマティック構図など）
- 乗り物の詳細な視覚的描写

**VIDEO PROMPT**:
- Runway Gen-3/Pika用の英語プロンプト
- 動画特有のカメラワーク指定
- おすすめ技術オプション（fps、解像度など）

## 注意点

- 入力フィールドはすべて日本語で記入してください
- 画像・動画両方のプロンプトが生成されます
- 共通キーワードは両方のプロンプトに必ず含めます
- シュールさとリアリズムのバランスを重視してください
