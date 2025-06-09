<p align="center">
  <img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/MysticLibrary_icon2.png" width="100%">
  <h1 align="center">Mystic Library</h1>
  <h3 align="center">～ プロンプトエンジニアリングの魔法の世界へ ～</h3>

</p>

---

## 🪄 概要

**Mystic Library** は、AIプロンプトエンジニアリングのための高品質なプロンプト集・テンプレート集を提供するオープンソースプロジェクトです。  
AIと人間の創造性を最大限に引き出すための多様なプロンプトを、静的サイトとして誰でも簡単に閲覧・活用できます。

---

## ✨ 特徴

- 豊富なカテゴリ別プロンプト（音声・コーディング・ドキュメント・画像生成など）
- すべてのプロンプトはMarkdownファイルで管理・バージョン管理
- 静的サイト（GitHub Pages等）で高速・安全に閲覧可能
- コントリビューション歓迎！誰でも新しいプロンプトを追加可能

---

## 🚀 クイックスタート

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-username/MysticLibrary.git
cd MysticLibrary
```

### 2. 依存パッケージのインストール

```bash
npm install
```

### 3. 開発サーバー起動

```bash
npm run dev
```

### 4. ビルド（静的サイト生成）

```bash
npm run build
```

---

## 📁 ディレクトリ構成

```
MysticLibrary/
├── prompts/         # プロンプトMarkdown集（カテゴリ別）
├── public/          # 静的アセット
├── script/          # 開発支援スクリプト
├── src/             # フロントエンド実装
├── README.md        # このファイル
└── ...
```

---

## 📚 代表的なプロンプト

- [エンカ歌詞強化プロンプト](prompts/audio/amped_enka_lyrics.md)
- [ラップ作詞プロンプト](prompts/audio/comprehensive-improved-rap-prompt.md)
- [高品質コードのベストプラクティス](prompts/coding/BEST_PROGRAMMING_PRACTICES_REQUIREMENTS_JA.md)
- [Pythonパッケージ開発チェックリスト](prompts/coding/Checklist_for_Developing_Python_Packages_and_Libraries.md)
- [グラフィックレコーディングスタイル](prompts/documentation/Graphic-recording-style-infographic-v2.md)
- [OpenAI メタプロンプト（日本語）](prompts/meta/openai_meta_prompt/openai_meta_prompt_JP.md)
- [Gitワークフロー用プロンプト（軽量版）](prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite.md)

---

## 🛠️ コントリビューション方法

1. `prompts/`配下の適切なカテゴリにMarkdownファイルを追加
2. ファイル形式: `# タイトル` + 説明文 + プロンプト内容
3. Pull Requestを作成

詳細は [CONTRIBUTING.md] をご参照ください（※未作成の場合はこのREADMEを参考にしてください）。

---

## 📝 技術情報・ビルド詳細

- **静的サイト化**: Supabase等のDBやAPIは不要、すべてローカルファイルで管理
- **GitHub Pages対応**: SPAルーティング・ベースパス設定済み
- **Git情報自動生成**: `script/generate-git-info.js`で各プロンプトの最終更新日を自動取得し、`src/assets/git-info.json`に保存

---

## 🗒️ リリースノート・アップデート情報

- v0.14.0: 静的サイト化・API/DB/認証機能の削除・新プロンプト追加・UI/UX改善
- v0.13.0以前: Supabaseベースの動的サイト

詳細な変更履歴は [CHANGELOG.md] または [GitHubリリース](https://github.com/your-username/MysticLibrary/releases) を参照してください。

---

## 📢 コミュニティ・連絡先

- [GitHub Issues](https://github.com/your-username/MysticLibrary/issues): バグ報告・要望
- [Discussions](https://github.com/your-username/MysticLibrary/discussions): 機能提案・質問
- [公式サイト](https://hamaruki.com/) | [Twitter](https://twitter.com/hAru_mAki_ch)

---

## 📄 ライセンス

MIT License

---

<p align="center">✨ プロンプトの魔法で、AIの可能性を解き放とう！ ✨</p>
