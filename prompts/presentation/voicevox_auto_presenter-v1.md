# VoiceVox MCP自動プレゼンテーション プロンプト

http://127.0.0.1:5500/voicevox_mcp_slides_improved-v2.html 
 のスライドを自動プレゼンしてください。

1. Playwright MCPでブラウザを開いてURLにアクセス
2. 各スライドで：
   - 画面の内容を読み取り
   - VoiceVox MCPで30秒程度に要約して音声合成
   - 音声再生後、下矢印キーまたはwindow.nextSlide()で次のスライドへ
3. 全6スライドを順番に実行
