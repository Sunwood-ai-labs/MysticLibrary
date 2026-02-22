---
title: "インフォグラフィックサムネプロンプト V1"
sourcePath: "prompts/documentation/Infographic_Thumbnail_Prompt_V1_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Infographic_Thumbnail_Prompt_V1_JP.md`

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
<link rel="preconnect" href="https ://fonts.googleapis.com">
<link rel="preconnect" href="https ://fonts.gstatic.com" crossorigin>
<link href="https ://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@700&family=Zen+Kurenaido&display=swap" rel="stylesheet">
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
# 内容
ーーー
```

```
