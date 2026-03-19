---
title: "対象人物を「RPGキャラクター」として再解釈し、"
description: "nanobanana pro RPGステータス画面Xプロフプロンプト爆誕🔥"
canonical_id: "creative/visual/character-styles/business-card-character"
canonical_doc: "docs/prompt-catalog/creative/visual/character-styles/business-card-character.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/creative/visual/character-styles/business-card-character.md. Edit docs/ instead. -->

GENERAL STYLE & MOOD:
1980〜90年代の日本製RPG(ファミコン〜スーファミ世代)にインスパイアされた
「キャラクターステータス画面」風の名刺ビジュアル。
全体はピクセルアート(8bit〜16bit)調で構成し、
レトロでありながら洗練されたUIデザイン。
ゲーム内メニュー画面のように、情報が整理された構図。
ノスタルジックだが現代的な解像感を保つ。

SUBJECT:
添付画像(Image 1)のアイコンと指定されたプロフィール情報をもとに、
対象人物を「RPGキャラクター」として再解釈し、
名刺情報をステータス画面形式で表現する。

1. キャラクター表示:
 - 添付画像(Image 1)のアイコンを、ドット絵(ピクセル変換)として再構成。
 - ステータス画面左側にキャラクターポートレートとして配置。
 - 枠線はRPG風UI(角丸 or ドット罫線)。

2. 情報ソースとキャラクター解析:
 - 対象者: {argument name="profile_source" default="hAru_mAki_ch (https://t.co/AfDkdOaTPw)"}
 - 上記プロフィールおよび直近の活動内容(投稿頻度、技術分野、発言内容、評価)を解析し、
 RPGの各種パラメータを自動算出する。

3. キャラクター名・称号:
 - NAME: {argument name="display_name" default="Maki @ Sunwood AI Labs."}
 - HANDLE: {argument name="handle_name" default="hAru_mAki_ch"}
 - CLASS(職業):
 活動内容から推定される職業をRPG風に命名
 例:
 - AI Mage
 - Prompt Alchemist
 - Tech Sage
 - Digital Architect

STATUS PARAMETERS(活動量ベース算出):
以下のパラメータは、実際の活動状況を解析して数値化(1〜99)すること。

- LV(Level):
 活動年数 × 発信頻度 × 継続性 から算出

- INT(知力):
 技術的投稿、専門用語の使用頻度、思考の抽象度から算出

- TEC(技術力):
 AI / 開発 / 研究 / 実装系のアウトプット量から算出

- CRE(創造力):
 独自視点、プロンプト設計、アイデア投稿の多さから算出

- COM(発信力):
 フォロワー数、エンゲージメント、投稿拡散力から算出

- EXP(経験値):
 過去の実績・プロジェクト・継続的活動量を総合評価

※ 各数値はRPGらしい相対バランスを持たせること(全ステが均一にならない)

UI & TYPOGRAPHY:
- フォントはドットフォント(8bit RPG風)
- 文字は完全に判読可能で、にじみや崩れがないこと
- 日本語UIを基本とし、一部英語ステータス名を併用

COLOR PALETTE:
- 添付画像(Image 1)から抽出したカラーパレットを使用
- 16bit RPGを想起させる制限色数で構成
- 背景はダークトーン、文字とゲージは高コントラスト

GRAPHIC ELEMENTS:
- ステータスバーはピクセルゲージ表示
- アイコン(剣・本・歯車・星など)もドット絵で統一
- UI枠線、区切り線はRPGメニュー風

COMPOSITION:
- 全体は「ゲーム内ステータス画面のスクリーンショット」構図
- 名刺サイズ比率を意識しつつ、情報密度は高め
- 背景にうっすらドットパターン or グリッドを敷く

CONSTRAINTS:
- 名前・ハンドル・URLは完全一致で正確に表記
- 意味不明な文字列や崩れた文字を排除
- ピクセルアート調を厳守し、フォトリアル禁止
- RPG UIとして一貫した世界観を維持
- 入力された {argument} と Image 1 に応じて動的に再構成すること
