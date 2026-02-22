---
title: Low-Poly Animal Grid Generator
description: 9つの動物アイコンを3×3グリッドで配置したローポリゴンスタイルのイラストを生成するプロンプト
category: creative
intent: low-poly-animal-grid
audience:
  - イラストレーター
  - デザイナー
  - アイコンデザイナー
  - AI画像生成を活用するクリエイター
input_requirements:
  - 動物の種類
  - カラーパレット（オプション）
tags:
  - 画像生成
  - ローポリゴン
  - アイコン
  - グリッド
  - イラスト
status: stable
owner: creative-team
last_reviewed: 2026-02-23
---

# Low-Poly Animal Grid Generator

## 想定用途

- Webサイトやアプリのアイコンセット作成
- ローポリゴンスタイルのイラストレーション生成
- 統一感のある動物アイコンシリーズの作成
- ベクター品質のクリップアート生成

## プロンプト本文

```text
Create a **low-poly** illustration of nine different [ANIMAL] icons arranged in a crisp **3 × 3 grid** (three rows, three columns).
Each animal occupies its own equal-sized square cell with consistent spacing so the nine cells together form a perfect square.

For every icon
• Model the animal as a **clean triangular-facet low-poly mesh**—think tiny digital sculptures rather than flat cartoons.
• Shade each facet with **solid, flat colors only** (no gradients, smudging, airbrushing, or blur).
• Let the facet planes and subtle **ambient occlusion** provide depth; avoid traditional soft shadows.
• Outline the silhouette and major feature breaks with **thick, bold black strokes** to keep a graphic edge.
• Stick to a **simplified retro palette** (teal, coral, mustard, navy, ivory, and white) for a vintage feel.
• Include a few small **sparkle accents or motion lines** on or around each animal for extra charm, but keep the animal itself the clear focus.

Global requirements
• Place the entire 3 × 3 grid on a **plain white background**.
• Keep all geometry crisp and **vector-friendly**—no textures or raster effects.
• Final output must have a **perfectly square aspect ratio** (the nine cells together forming one square).
• Ensure all edges remain sharp so the artwork scales cleanly at any resolution.
```

## 使い方

1. **動物の種類を指定**: `[ANIMAL]` の部分に生成したい動物の種類を入力
2. **カラーパレット調整**: 必要に応じてカラーパレットをカスタマイズ
3. **画像生成AIに入力**: Midjourney、Stable Diffusion、DALL-E などに入力
4. **生成結果を確認**: 3×3グリッドで9つの動物アイコンを確認

## 入力例

```text
Create a **low-poly** illustration of nine different forest animal icons arranged in a crisp **3 × 3 grid**...
```

または

```text
Create a **low-poly** illustration of nine different sea creature icons arranged in a crisp **3 × 3 grid**...
```

## 出力例

生成されるイラストには以下の特徴が含まれます：

- 9つの異なる動物が3×3のグリッドに配置
- ローポリゴンの三角形ファセットによるモデリング
- ソリッドなフラットカラーによるシェーディング
- 太い黒いストロークによる輪郭線
- レトロなカラーパレット（ティール、コーラル、マスタード、ネイビー、アイボリー、ホワイト）
- 白い背景、ベクターフレンドリーなクリーンなエッジ

## 注意点

- グラデーションやぼかし効果は使用しません
- テクスチャやラスター効果は避けます
- 完全な正方形のアスペクト比を維持します
- ベクター品質のシャープなエッジを目指します
