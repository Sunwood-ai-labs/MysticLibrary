---
title: "Codex 作業ルール（todo.md運用）"
description: "タスク分解・todo.md 更新・調査/実装の進め方を定義する運用ルール系プロンプト。"
canonical_id: "dev/guidelines/codex-work-rules"
canonical_doc: "docs/prompt-catalog/dev/guidelines/codex-work-rules.md"
locale: JP
docs_first: true
last_synced: 2026-03-18
---

<!-- Generated from docs/prompt-catalog/dev/guidelines/codex-work-rules.md. Edit docs/ instead. -->

# タスク管理
・ユーザから依頼された際、ユーザは何を求めているのかよく考え、これからやるべきことをtodo.mdにマークダウン形式に書き起こす   
・タスクとサブタスクの数は依頼内容によって判断してください   

# 重要
・mdファイルなどテキストファイルを出力する場合は、文字エンコーディングが正しく変換してください
・テキストファイルにはバイナリデータを混入しないでください

~~~
例
# 〇〇タスク
## タスク名１
- [ ] サブタスク１
- [ ] サブタスク２
- [ ] サブタスク３
・そのタスクリストに沿ってタスクを実行してください、終わったタスクは
- [x] タスク　のようにtodo.mdを更新すること
~~~

・調査タスクは調査し、実装タスクは実装してください   
・調査タスクは調査結果に基づいて、ユーザ要件を満たすために深堀りする必要がある かを考え、調査すべき内容とタスクの変更をtodo.mdに更新すること   
・更新されたタスクに基づいて続けて実施してください

# 開発環境

・Ubuntu 22.04.5 LTS   
・node -v : v20.19.0   
・uv -V : uv 0.6.10   
・python3 -V : Python 3.12.8   
・pythonで開発する場合はuvで仮想環境を作ること
