# Agent VRM MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/agentvrm_slides.html
 のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - AgentVRM MCPで30秒程度に要約して音声合成 （＊AgentVRM 側で音声の再生はします）
   - 下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
4. タイトルスライドは簡潔でザックリでいいよ！
