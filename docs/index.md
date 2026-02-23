---
layout: home

hero:
  name: Mystic Library
  text: プロンプトエンジニアリングのためのオープンソースなプロンプト集
  tagline: プロンプトを Markdown で管理し、カテゴリ別に整理して、静的サイトとして公開・共有するためのドキュメント
  actions:
    - theme: brand
      text: プロンプトを探す
      link: /prompt-catalog/
    - theme: alt
      text: Dev プロンプトを見る
      link: /prompt-catalog/dev/
    - theme: alt
      text: テンプレートを使う
      link: /templates/prompt-template
    - theme: alt
      text: 運用ルール
      link: /operation/rules

features:
  - icon: 🧭
    title: DBなし、Markdownだけ
    details: プロンプトは Markdown ファイルで管理。Git でのバージョン管理やレビュー運用に乗せやすい構成です。
  - icon: 👥
    title: セルフホスト対応
    details: 社内向け運用も想定し、外部に出せないプロンプトも含めて整理・共有しやすい設計です。
  - icon: 🛠️
    title: 静的サイト運用しやすい
    details: VitePress でビルドして配布できる構成。テンプレート・運用ルール・FAQ もあわせて管理できます。
---

## これは何？

AI を使っていると「このプロンプト、前にも書いたな…」という場面が繰り返し発生します。Mystic Library は、そうしたプロンプトを Markdown で管理し、カテゴリ別に整理して、静的サイトとして公開・共有できるようにしたライブラリです。

文章作成・開発支援・各種業務用途のプロンプトを、入力要件・例・注意点つきでチーム運用しやすい形にまとめています。

## 特徴

- **DBなし、Markdownだけ**: Git で差分管理・レビューしやすい
- **カテゴリ整理 + 個別ページ運用**: `intent` / `input_requirements` / 例 / 注意点を揃えやすい
- **テンプレート付き**: 新規追加時のフォーマットを統一しやすい
- **運用ルール付き**: レビュー・更新・履歴管理の基準を揃えやすい

## はじめ方（最短）

1. [`プロンプトカタログ`](/prompt-catalog/) からカテゴリを選ぶ
2. 個別ページの `intent` / `input_requirements` を確認する
3. 入力例を参考に必要情報を埋める
4. 出力例と注意点を確認して実運用へ載せる

## おすすめ導線

### まず使いたい人

- [`プロンプトカタログ`](/prompt-catalog/) からカテゴリを選ぶ
- `Writing` / `Dev` のカテゴリページで一覧を見る
- 個別ページの入力例をコピーして使う

### 追加・整備したい人

- [`プロンプトテンプレート`](/templates/prompt-template) を使って新規ページを作成
- [`運用ルール`](/operation/rules) でレビュー観点と更新ルールを確認
- [`FAQ`](/operation/faq) で運用時のよくある疑問を確認

### 最近の変更を追いたい人

- [`更新ログ`](/log/update) を確認する

## 対象読者

- 社内で LLM を使った文章作成・開発支援を行うメンバー
- チームでプロンプトをレビュー・共有したい運用担当

## 主要ページ

- [プロンプトカタログ](/prompt-catalog/)
- [プロンプトテンプレート](/templates/prompt-template)
- [運用ルール](/operation/rules)
- [FAQ](/operation/faq)
- [更新ログ](/log/update)
