---
title: インフォグラフィックサムネイル V1
description: 一流コンサルタント風の高品質なブログ記事サムネイル（16:9）を生成するプロンプト
category: docs
intent: infographic-thumbnail
audience:
  - ブログ運営者
  - コンテンツクリエイター
  - SNS運用者
input_requirements:
  - サムネイル化したい記事のタイトルと内容
tags:
  - サムネイル
  - 16:9
  - インフォグラフィック
  - グラフィックデザイン
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# インフォグラフィックサムネイル V1

## 想定用途

- 一流コンサルタントが作成するような高品質なブログ記事サムネイルを生成したい
- 視覚的に洗練され、内容が一目で伝わる16:9アスペクト比のサムネイルを作りたい
- Font Awesomeアイコンを活用したインフォグラフィックな可読性を高めたい

## プロンプト本文

```text
# インフォグラフィックサムネプロンプト V1

## 概要
このプロンプトは、一流コンサルタントが作成するような高品質なブログ記事サムネイルを生成するためのものです。視覚的に洗練され、内容が一目で伝わる16:9アスペクト比のインフォグラフィックなサムネイルを作成します。

## 基本構成
```
[記事タイトル]のサムネイルをHTML/CSSで作成して
16:9のサイズ（1920x1080px）にして
Font Awesome アイコンを活用してインフォグラフィックな可読性と専門性を高めて
また、下記のカラーマップとフォントを使用してください
```

## カラーパレット定義（カスタマイズ可能）
```
<palette>
<color name='グラフィックデザイン-1' rgb='21403A' r='33' g='63' b='58' />
<color name='グラフィックデザイン-2' rgb='F2F2F2' r='242' g='242' b='242' />
<color name='グラフィックデザイン-3' rgb='D9D9D9' r='216' g='216' b='216' />
<color name='グラフィックデザイン-4' rgb='404040' r='63' g='63' b='63' />
<color name='グラフィックデザイン-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

## フォント定義（日本語フォント推奨）
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@700&family=Zen+Kurenaido&display=swap" rel="stylesheet">

Kaisei Decol: CSS class
.kaisei-decol-bold {
  font-family: "Kaisei Decol", serif;
  font-weight: 700;
  font-style: normal;
}

Zen Kurenaido: CSS class
.zen-kurenaido-regular {
  font-family: "Zen Kurenaido", sans-serif;
  font-weight: 400;
  font-style: normal;
}
```

## デザイン要素
以下の要素を含めてください：
1. **タイトルセクション**:
   - メインタイトル（大きく目立つフォント - Kaisei Decolを使用）
   - サブタイトル（補足情報 - Zen Kurenaidoを使用）
   - 関連するFont Awesomeアイコン
2. **ビジュアル要素**:
   - 右側に関連するグラフィック/イラスト
   - バッジやラベル（トピックやカテゴリを示す）
3. **コンテンツ特徴**:
   - 3-4つの主要ポイントをアイコン付きで表示
   - 各ポイントは短く簡潔に
4. **プロフェッショナル要素**:
   - グラデーションの背景
   - 微妙なグリッドパターン
   - 適切な影効果
```

## 使い方

1. 記事タイトルを準備
2. プロンプトを AI に入力
3. HTML/CSS でサムネイルを生成

## 入力例

```
「効率的なタスク管理のための5つのコツ」のサムネイルを作成して
```

## 出力例

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <!-- 上記フォント定義 -->
</head>
<body>
  <div class="thumbnail">
    <!-- サムネイルデザイン -->
  </div>
</body>
</html>
```

## 注意点

- アスペクト比は 16:9 (1920x1080px) で作成
- Font Awesome のアイコンを活用
- 日本語フォントを使用することで可読性向上
