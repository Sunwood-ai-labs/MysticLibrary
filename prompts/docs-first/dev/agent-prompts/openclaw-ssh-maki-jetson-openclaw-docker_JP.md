---
title: "ssh maki-jetson で接続できるマシン上で作業する。"
description: "ssh maki-jetson で接続できるマシン上で作業する。"
canonical_id: "dev/agent-prompts/openclaw-ssh-maki-jetson-openclaw-docker"
canonical_doc: "docs/prompt-catalog/dev/agent-prompts/openclaw-ssh-maki-jetson-openclaw-docker.md"
locale: JP
docs_first: true
last_synced: 2026-03-19
---

<!-- Generated from docs/prompt-catalog/dev/agent-prompts/openclaw-ssh-maki-jetson-openclaw-docker.md. Edit docs/ instead. -->

ssh maki-jetson で接続できるマシン上で作業する。

1) ssh maki-jetson で対象マシンに接続する
2) 接続後、OpenClaw を一括セットアップできる下記リポジトリを利用して環境構築する
- https://t.co/d5eRAj182j
3) 手順の詳細は OpenClaw-Docker の README に従う
4) Bot は 1 体のみ起動すればよい
5) リポジトリは ~/Prj/ 配下にクローンする
6) 環境変数(.env)は D:\Prj\jetson-nano-ws\.env を使用する
