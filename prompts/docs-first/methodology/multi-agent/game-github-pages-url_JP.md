---
title: "このゲームを GitHub Pages で公開して “URLを開けば遊べる” 状態にしたい。"
description: "Codex CLI の MULTI-AGENT 使ってみた❹"
canonical_id: "methodology/multi-agent/game-github-pages-url"
canonical_doc: "docs/prompt-catalog/methodology/multi-agent/game-github-pages-url.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/methodology/multi-agent/game-github-pages-url.md. Edit docs/ instead. -->

このゲームを GitHub Pages で公開して “URLを開けば遊べる” 状態にしたい。
さらに gh コマンドで v0.1.0 の GitHub Release を作成し、リリースノートは --generate-notes で自動生成するところまで完了させたい。

spawn explorer(読み取りのみ):
- index.html / game.js / sprites のパスが Pages(/repo-name/ サブパス)でも壊れないか確認
- いまの機能一覧(操作、スコア、ゲームオーバー、リスタート等)を “リリース概要” 用に整理
- 既存のタグ/リリースがあるか確認(v0.1.0 が衝突しないように)

spawn worker:
A) Pages 公開の準備
- Pages 用に相対パスを壊れない形に修正(サブパスでも sprites が 404 にならないように)
- GitHub Actions で Pages デプロイ(静的)を用意(main push で自動デプロイ)
- README に「公開URL」「遊び方」「更新/デプロイ手順」を追記

B) リリース(gh で “リリースノート作成” まで)
- まず gh が使えるか確認(gh auth status)。未ログインなら "gh auth login" が必要と明示して中断(勝手にログインしない)
- VERSION=v0.1.0 とする(衝突するなら v0.1.1 へ繰り上げ)
- 変更を commit/push した後、タグを作って push:
 - git tag -a "$VERSION" -m "$VERSION"
 - git push origin "$VERSION"

- Pages URL を owner/repo から組み立てる:
 - FULL=$(gh repo view --json nameWithOwner --jq .nameWithOwner) # "owner/repo"
 - OWNER=${FULL%/*}; REPO=${FULL#*/}
 - PAGES_URL="https://${OWNER}.github.io/${REPO}/"

- gh でリリース作成(自動生成ノート+先頭にURLを差し込み):
 - gh release create "$VERSION" --verify-tag --generate-notes --title "$VERSION" --notes "Play: ${PAGES_URL}"
 ※ --generate-notes は GitHub Release Notes API でタイトル/本文を自動生成でき、--notes は自動生成ノートの先頭に追記できる :contentReference[oaicite:1]{index=1}

spawn reviewer:
- Pages のサブパスで画像が 404 にならないか、初回ロードで真っ白にならないか確認
- リリース本文が実装と矛盾してないか確認
- gh release create がタグ未作成で暴走しないよう --verify-tag が効いているか確認 :contentReference[oaicite:2]{index=2}

最後に:
- 公開URL(PAGES_URL)と、Settings側で必要な設定があれば具体的に
- 追加/変更したファイル一覧
- 実行したコマンドログ(タグ作成、リリース作成)をそのまま貼る
