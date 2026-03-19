---
title: "ssh maki-jetson で接続できるマシン上で作業する。"
description: "ssh maki-jetson で接続できるマシン上で作業する。"
category: "dev"
intent: "developer-prompt"
audience:
  - 利用者
input_requirements:
  - 依頼内容
tags:
  - dev
  - agent-prompts
  - openclaw
  - ssh
  - maki
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-03-19
source_platform: x
source_author: "hAru_mAki_ch"
source_post_id: "2018343568428183886"
source_url: "https://x.com/hAru_mAki_ch/status/2018343568428183886"
source_published_at: "2026-02-02T15:19:40.000Z"
source_archive_path: "docs/prompt-catalog/archive/x/2026/02/2018343568428183886.md"
source_note_ids:
  - 2018343568285618176
canonical_id: "dev/agent-prompts/openclaw-ssh-maki-jetson-openclaw-docker"
prompt_source: "prompts/docs-first/dev/agent-prompts/openclaw-ssh-maki-jetson-openclaw-docker_JP.md"
---

# ssh maki-jetson で接続できるマシン上で作業する。

ssh maki-jetson で接続できるマシン上で作業する。

## プロンプト本文
~~~text
ssh maki-jetson で接続できるマシン上で作業する。

1) ssh maki-jetson で対象マシンに接続する
2) 接続後、OpenClaw を一括セットアップできる下記リポジトリを利用して環境構築する
- https://t.co/d5eRAj182j
3) 手順の詳細は OpenClaw-Docker の README に従う
4) Bot は 1 体のみ起動すればよい
5) リポジトリは ~/Prj/ 配下にクローンする
6) 環境変数(.env)は D:\Prj\jetson-nano-ws\.env を使用する
~~~

## ソース文脈
<ClientOnly>
  <XPostEmbed url="https://x.com/hAru_mAki_ch/status/2018343568428183886" />
</ClientOnly>

## 出典
- primary post: [2018343568428183886](https://x.com/hAru_mAki_ch/status/2018343568428183886)
- published at: 2026-02-03 00:19:40 JST
- archive doc: [2018343568428183886](../../archive/x/2026/02/2018343568428183886.md)
