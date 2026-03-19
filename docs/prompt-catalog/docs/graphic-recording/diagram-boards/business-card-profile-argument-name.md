---
title: "指定されたプロフィール情報に基づき、その人物の専門性とアイデンティティを視覚化した名刺。"
description: "テツメモさんのXのプロフインフォグラフィックプロンプトをさらに改造して「古文書スタイル」で自分のプロフを可視化してみた!!"
category: "docs"
intent: "documentation-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - docs
  - graphic-recording
  - diagram-boards
  - business
  - card
  - profile
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2001932303770276012"
source_url: "https://x.com/hAru_mAki_ch/status/2001932303770276012"
source_published_at: "2025-12-19T08:27:09.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2025/12/2001932303770276012.md"
source_note_ids:
  - 2001932303556345856
canonical_id: "docs/graphic-recording/diagram-boards/business-card-profile-argument-name"
prompt_source: "prompts/docs-first/docs/graphic-recording/diagram-boards/business-card-profile-argument-name_JP.md"
---

# 指定されたプロフィール情報に基づき、その人物の専門性とアイデンティティを視覚化した名刺。

テツメモさんのXのプロフインフォグラフィックプロンプトをさらに改造して「古文書スタイル」で自分のプロフを可視化してみた!!

## プロンプト本文
~~~text
GENERAL STYLE & MOOD:
日本のハイエンド・テクノロジー企業やクリエイティブ・エージェンシーが採用する、極限まで洗練されたプロフェッショナルな名刺デザイン。知的でモダン、かつ信頼感のあるプレミアムなエディトリアル・スタイル。

SUBJECT:
指定されたプロフィール情報に基づき、その人物の専門性とアイデンティティを視覚化した名刺。
1. 情報ソース:
 - 対象者: {argument name="profile_source" default="https://t.co/gzuz3imy9H"}
 - 上記リンクまたは提供された情報の最新の活動、肩書き、評価を解析し、名刺構成に反映させること。
2. タイポグラフィ:
 - メイン氏名: {argument name="display_name" default="Maki @ Sunwood AI Labs."}
 - サブテキスト: {argument name="handle_name" default="hAru_mAki_ch"} および解析された専門職種(例:Engineer, Designer, Researcher等)を、極小ながらも鮮明なフォントで黄金比に基づき配置。

PICTOGRAPH SYSTEM(専門性の可視化):
{argument name="icon_instructions" default="対象者の主要なスキルや専門領域(AI、開発、研究、創造性など)を象徴する、幾何学的で極細ラインのミニマルなピクトグラムを4つ、等間隔に配置すること。"}

COMPOSITION & LIGHTING:
高級感のあるテクスチャを持つデスク(ダークグレーの石材、あるいは重厚なウッド材)の上に置かれた名刺のクローズアップ(Macro View)。
光は鋭い指向性を持つサイドライトを採用し、活版印刷(Letterpress)による文字の僅かな沈み込みや、特定の要素に施された「透明な厚盛りUV加工(Spot UV)」の艶やかな反射を物理的に正しく描写する。

ENVIRONMENT:
背景には、ハイエンドなノートPCや洗練されたガジェットが極めて浅い被写界深度(Bokeh)で写り込み、プロフェッショナルな作業環境を演出。

MATERIAL & TEXTURE:
日本の最高級特殊紙(特厚のコットンペーパーやマットコート紙)の質感。文字とピクトグラムは「銀の箔押し(Silver Foil Stamping)」、または高精細なオフセット印刷。フォントのカーニングは1ピクセル単位で完璧に調整されていること。

CONSTRAINTS:
- テキストの完全一致: 名前、ハンドルネーム、URL等の指定文言は正確に綴り、意味不明な文字列(Gibberish)を徹底排除する。
- 物理的整合性: アイコンの細いラインが潰れず、シャープに描画されていること。文字の重なりやレイアウトの破綻がないこと。
- 言語仕様: 補足テキストや肩書きは、文脈に合わせ「自然で正しい日本語(モダンゴシック体)」または「洗練された英語」を適切に使い分けること。
- 汎用性の維持: 特定の個人に固執せず、入力された {argument} の内容に従って動的にデザインを最適化すること。
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2001932303770276012" />
</ClientOnly>

### 投稿メモ
~~~text
テツメモさんのXのプロフインフォグラフィックプロンプトをさらに改造して「古文書スタイル」で自分のプロフを可視化してみた!! 
一旦これで発注してもいいかも??!!
~~~

## 出典
- primary post: [2001932303770276012](https://x.com/hAru_mAki_ch/status/2001932303770276012)
- published at: 2025-12-19 17:27:09 JST
- archive doc: [2001932303770276012](../../../archive/x/2025/12/2001932303770276012.md)
