<p align="center">
  <img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/MysticLibrary_icon2.png" width="100%" alt="Mystic Library Logo">
</p>

<h1 align="center">Mystic Library</h1>
<h3 align="center">～ プロンプトエンジニアリングの魔法の世界へ ～</h3>

<p align="center">
  <!-- 技術スタックバッジ -->
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-20.x-green?logo=node.js" alt="Node.js"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-purple?logo=vite" alt="Vite"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss" alt="TailwindCSS"></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-ready-blue?logo=docker" alt="Docker"></a>
  <a href="https://github.com/features/actions"><img src="https://img.shields.io/badge/GitHub%20Actions-CI-blue?logo=githubactions" alt="GitHub Actions"></a>
</p>

---

## 🪄 概要

**Mystic Library** は、AIプロンプトエンジニアリングのための高品質なプロンプト集・テンプレート集を提供するオープンソースプロジェクトです。  
AIと人間の創造性を最大限に引き出すための多様なプロンプトを、静的サイトとして誰でも簡単に閲覧・活用できます。

---

## ✨ 特徴

- 🗂️ **豊富なカテゴリ別プロンプト**（音声・コーディング・ドキュメント・画像生成など）
- 📝 **すべてのプロンプトはMarkdownファイルで管理・バージョン管理**
- ⚡ **静的サイト（GitHub Pages等）で高速・安全に閲覧可能**
- 🤝 **コントリビューション歓迎！誰でも新しいプロンプトを追加可能**

---

## 🏆 なぜ Mystic Library なのか？

### 🔒 完全セルフホスト可能・社内導入に最適

> **「自社独自のプロンプトライブラリを構築できる」**

Mystic Library は完全にセルフホスト可能です。社内サーバーやプライベートクラウドにデプロイすることで、外部に公開できない機密性の高いプロンプトや、業界固有・社内固有のノウハウを安全に管理・共有できます。

- ✅ **プライベートなプロンプトを社内だけで閉覧・管理**
- ✅ **チーム固有のカスタムプロンプトを独自ライブラリとして蓄積**
- ✅ **GitHub Enterprise / GitLab / Azure DevOps など既存のGitインフラと統合可能**

### 🚀 データベース不要・環境に依存しない軽量設計

> **「Markdown + Git だけで動く、シンプルで強力な設計」**

Mystic Library はデータベースを一切使用しません。すべてのプロンプトは Markdown ファイルとして管理され、Git によるバージョン管理がそのまま活用できます。

- ✅ **DB サーバーの構築・メンテナンスが不要**
- ✅ **環境依存がないため、どのインフラでも簡単にデプロイ可能**
- ✅ **Git ベースのバージョン管理で、プロンプトの変更履歴を完全追跡**
- ✅ **軽量・高速でリソース消費が最小限**

### 🎓 エンタープライズ向けプロンプト知識の資産化

プロンプトエンジニアリングの知見を組織的な資産として蓄積・継承できます。

- 📚 ベストプラクティスの共有・標準化
- 👥 チームメンバー間でのナレッジ共有
- 🔄 プロンプトの進化・改善を継続的に管理

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
├── src/             # フロントエンドソース
├── nginx/           # Docker用nginx設定
├── examples/        # サンプルコード
├── Dockerfile       # Dockerビルド用
├── docker-compose.yml
└── README.md
```

---

## 🖼️ スクリーンショット

![alt text](assets/image.png)

---

## 📚 ドキュメント・リンク

- [プロンプト集（prompts/）](./prompts/)
- [サンプルコード（examples/）](./examples/)
- [Wiki（src/pages/Wiki.tsx）](./src/pages/Wiki.tsx)
- [プロジェクト構成・開発ガイド（今後追加予定）](#)

---

## 🛠️ 開発・コントリビューション

1. Issue・Pull Request歓迎！
2. 新しいプロンプトは `prompts/` 配下にMarkdownで追加してください。
3. 詳細なコントリビューションガイドは今後追加予定です。

---

## 📝 ライセンス

MIT License

---

## 💬 お問い合わせ

ご質問・ご要望は [GitHub Issues](https://github.com/your-username/MysticLibrary/issues) までお気軽にどうぞ。
