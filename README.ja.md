# Mystic Library

Mystic Library は VitePress ベースの docs-first プロンプトライブラリです。公開サイトそのものをアプリとみなし、正本は `docs/` に置きます。

## 技術構成

- Node.js 20
- VitePress 1.x
- Docker / Docker Compose

## 正本

- カタログ本文は `docs/prompt-catalog/` と `docs/en/prompt-catalog/` を更新します
- `docs/` を主編集面として扱います
- `prompts/docs-first/` は docs から生成される mirror です
- 旧 prompt を置き換えた履歴だけを `legacy_source` に残します

## ローカル開発

```bash
npm ci
npm run docs:dev
```

よく使うコマンド:

```bash
npm run docs:build
npm run docs:preview
npm run docs:canonical-audit
npm run docs:prompt-mirror-sync
```

Windows で `docs/.vitepress/dist` に対する `EPERM` が出た場合は、そのディレクトリを一度削除してから再実行してください。

## Docker Compose

Docker イメージは VitePress を build し、生成された静的ファイルを nginx で配信します。

```bash
docker compose up --build
```

起動後は `http://localhost:4173` を開いてください。

## ディレクトリ構成

```text
MysticLibrary/
├── docs/                      # VitePress アプリと公開カタログ
├── prompts/docs-first/        # docs から生成する prompt mirror
├── script/                    # canonical 監査と mirror 同期スクリプト
├── nginx/                     # Docker 用の静的配信設定
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.ja.md
```

## 公開

- GitHub Pages では `docs/.vitepress/dist` を配信します
- 公開カスタムドメインは `https://www.mystic-prompt-library.com/` です
- Docker イメージも同じ docs-first ソースから生成します

## コントリビューション

まず `docs/` を更新し、必要なときだけ `npm run docs:prompt-mirror-sync` で mirror を更新してください。

## ライセンス

MIT
