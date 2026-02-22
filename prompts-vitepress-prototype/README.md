# prompts-vitepress-prototype

VitePress ベースの `prompts` ドキュメントサイトです。

現在の運用方針:

- `prompts-vitepress-prototype/docs/` を直接編集して更新する
- `prompts/` からの自動再生成は通常運用では使わない（必要時のみ手動）

- 日本語: `docs/` (root locale)
- 英語: `docs/en/`
- `prompts/**/*.md` を生成対象（`_JP/_JA/_EN` + 日本語側の無印 `.md` を扱う）
- `prompts/**/*.sh` はコードブロック付きのラッパー `.md` として生成
- サイドバーは `docs/.generated/sidebar-manifest.json` へ生成
- `docs:dev` / `docs:build` では自動生成しない（直接編集内容をそのまま反映）

## 参考にした構成

- `arduino-spresense-wsl2-dev/docs` の VitePress 構成（`docs/.vitepress/config.ts`, `theme/custom.css`, 多言語 locale 設定）

## Scripts

- `npm run docs:generate`: `prompts/` から `docs/` 一式を再生成（手動・必要時のみ）
- `npm run docs:dev`: 再生成して VitePress 起動
- `npm run docs:build`: 再生成して静的ビルド
- `npm run docs:preview`: ビルド結果の preview

## Notes

- `npm run docs:generate` を実行すると `docs/` 配下は `.vitepress/` を除いて再生成され、直接編集内容は上書きされます
- 一部 prompt の生HTML / Vue風構文は、VitePress で壊れないよう最小限エスケープします
- GitHub Pages 配備時は `docs/.vitepress/config.ts` の `base` を確認してください（デフォルトは `/MysticLibrary/`）
