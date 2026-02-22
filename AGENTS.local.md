# AGENTS.local.md

このファイルは、MysticLibrary の `docs` / `docs/en` にプロンプトを継続追加していくための、エージェント向け運用メモです。
次回以降の作業で、設計の意図・手順・注意点を短時間で把握できることを目的にしています。

## 目的

- `docs`（日本語）をベースに、`docs/en`（英語）を並行運用する
- `docs/prompt-catalog` に新規プロンプトを継続追加する
- 追加/移動時のリンク切れや sidebar 更新漏れを防ぐ
- 反証役レビューを含む並列作業を再現しやすくする

## 現状の docs 設計（重要）

### 言語構成

- 日本語: `docs/`
- 英語: `docs/en/`
- VitePress locale 切替で `/`（ja）と `/en/`（en）を切り替える

### VitePress 設定

- 設定ファイル: `docs/.vitepress/config.mts`
- `prompt-catalog` の sidebar は手書きではなく、自動生成
- `docs` / `docs/en` の `prompt-catalog` 配下のファイルツリーと `title` / `# 見出し` を読んで sidebar を構築
- locale ごとに sidebar を生成する（`/en` プレフィックス付きリンク対応）

### `dev` カタログの再設計（現状）

`docs/prompt-catalog/dev/` と `docs/en/prompt-catalog/dev/` は、用途別サブカテゴリに再編済み。

- `triage/`
- `review/`
- `checklists/`
- `templates/`
- `guidelines/`
- `agent-prompts/`
- `system-prompts/claude/`
- `system-prompts/windsurf/`

各ディレクトリには原則 `index.md` を置く（sidebar / 導線のため）。

特に `system-prompts/claude/` のようなベンダー階層は重要:

- `index.md` を置かないと vendor ノードの導線が弱くなる
- `title`（frontmatter）または `# 見出し` がないと sidebar 表示名がディレクトリ名ベースになる
- 日英両方で `index.md` をそろえる

## 新しいプロンプトを追加する手順（標準）

### 1. カテゴリを決める

まず「何のためのプロンプトか」で分類する。

- 初期整理・優先度付け: `triage`
- 品質評価・レビュー補助: `review`
- 手順/確認項目の整理: `checklists`
- 記録フォーマット/雛形: `templates`
- 運用ルール/規約: `guidelines`
- 汎用エージェント方針: `agent-prompts`
- ツール別 system prompt: `system-prompts/<vendor>`

迷う場合は、反証役に「他カテゴリとの境界」をレビューさせる。

### 2. 日本語版を追加する（先行）

- 配置先: `docs/prompt-catalog/<category>/...`
- ファイル名は kebab-case（既存に合わせる）
- `docs/templates/prompt-template.md` をベースに作成

最低限そろえるもの:

- frontmatter（`title`, `description`, `category`, `intent`, `audience`, `input_requirements`, `tags`, `status`, `owner`, `last_reviewed`）
- `## 想定用途`
- `## プロンプト本文`
- `## 使い方`
- `## 入力例`
- `## 出力例`
- `## 注意点`

### 3. 英語版を追加する（同パスでミラー）

日本語版と対応する英語版を、`docs/en` 側に同じ相対パスで作る。

例:

- `docs/prompt-catalog/dev/review/new-prompt.md`
- `docs/en/prompt-catalog/dev/review/new-prompt.md`

注意:

- frontmatter のキー名は変更しない
- `intent`, `tags`, `status`, `owner`, `last_reviewed` は原則維持
- 本文、見出し、説明、コードブロック内の自然言語は英訳する
- コマンド、識別子、ID、パス、日付フォーマットは壊さない

### 4. 対応する `index.md` にリンクを追加する

自動生成 sidebar はファイルを拾うが、カテゴリページ（`index.md`）の一覧は手動管理。

必ず更新する:

- 日本語カテゴリ `index.md`
- 英語カテゴリ `index.md`

必要に応じて更新:

- `docs/prompt-catalog/dev/index.md`
- `docs/en/prompt-catalog/dev/index.md`

### 5. 検証する

最低限の確認:

- `npm run docs:build`
- `git diff --check`

あるとよい確認:

- 日本語残存チェック（英語ページ追加時）
  - `rg -n "[ぁ-んァ-ン一-龥]" docs/en/prompt-catalog/...`
- リンク確認（移動時）
  - `rg` で旧パス参照が残っていないか確認

## 既存プロンプトを移動/再分類する手順

`dev` のように再編する場合は、以下をセットで行う。

1. `git mv` で `docs/...` を移動
2. 同じ構造で `docs/en/...` も `git mv`
3. 新しい階層に `index.md`（日英）を追加
4. 上位 `index.md`（日英）のリンク構造を更新
5. 旧パス参照が残っていないか `rg` で確認
6. `npm run docs:build`

注意:

- VitePress の sidebar はファイルツリーから生成されるため、`index.md` がないと導線が弱くなる
- 「カテゴリ順」は `docs/.vitepress/config.mts` の `directoryOrderMap` で制御している
- 新カテゴリ追加時は、該当階層の `directoryOrderMap` を更新する
- `system-prompts/<vendor>` のような階層を増やした場合は、親階層（例: `prompt-catalog/dev/system-prompts`）の順序定義も更新する

## sidebar 自動生成の運用ルール（重要）

### 何が自動で行われるか

- `prompt-catalog` 以下のディレクトリ/Markdown を走査
- `title`（frontmatter）または `# 見出し` を sidebar 表示名に使う
- `index.md` はカテゴリノードのリンクとして扱う
- locale ごとにリンク生成（日本語 `/...` / 英語 `/en/...`）

### 何が手動か

- 各 `index.md` の本文中の一覧リンク
- カテゴリ構造の設計（どこに何を置くか）
- 新カテゴリ追加時の順序定義（並び順を維持したい場合）

### 新カテゴリ追加時に確認する場所

- `docs/.vitepress/config.mts`
  - `directoryOrderMap`（順序。ネストした階層も対象）
  - 自動生成ロジック（壊れていないか）

## 並列作業の推奨パターン（このリポジトリ向け）

### チーム構成（必須）

- 実装 worker（複数）
- 反証役（explorer / reviewer）

ユーザー要望により、反証役は毎回入れる。

### 分担の仕方

- ファイル単位で ownership を固定して割り当てる
- 「この3ファイルだけ触る」を明示
- 共有ワークスペースなので他者の変更は無視させる

### 反証役に見てもらう観点（テンプレ）

- frontmatter / YAML 崩れ
- must/should/禁止事項の意味改変
- コード/コマンド/識別子の破壊
- Markdown 見出し/コードフェンス崩れ
- リンク切れ
- カテゴリ分けの曖昧さ（再設計時）

## コミットと push（このリポジトリ運用）

`AGENTS.md` の方針に従う。

- 論理的に小さくコミットを分ける
- コミットメッセージタイトルは英語 + 絵文字
- 原則、作業完了後に `origin` へ push（明示的に止められていない限り）

推奨コミット分割例:

- `🗂️` 構成変更（`git mv`, `index.md` 追加）
- `⚙️` 設定変更（VitePress config, sidebar ロジック）
- `🌐` 翻訳追加（英語 docs）
- `📝` ドキュメント運用メモ更新（このファイル等）

## よくあるハマりどころ

- `docs/en` 側だけ追加して `docs` 側を忘れる（または逆）
- `index.md` を更新せず、カテゴリページから辿れない
- 移動後に旧パス参照が残る
- 英語翻訳で `intent` やタグまで変えてしまう
- コードブロック内のコマンド/識別子を自然言語として翻訳して壊す
- 自動生成 sidebar の順序が意図とずれる（順序定義を更新していない）

## 次回エージェントの開始チェック（短縮版）

1. `git status --short` で作業ツリー確認（未コミット変更に注意）
2. `docs/.vitepress/config.mts` の sidebar 自動生成ロジックを前提として扱う
3. 追加対象のカテゴリを先に確定（必要なら反証役に分類レビュー）
4. `docs` と `docs/en` をペアで作業
5. `index.md` を更新
6. `npm run docs:build` と `git diff --check`
7. 論理コミット分割 + push
