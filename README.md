<p align="center">
  <img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/MysticLibrary_icon2.png" width="100%">
  <br>
  <h1 align="center">Mystic Library</h1>
  <h2 align="center">
    ～ プロンプトエンジニアリングの魔法の世界へ ～
  </h2>
  <br>
  <span align="center"><b>静的サイト版</b> | <a href="https://github.com/your-username/MysticLibrary/releases/tag/v0.14.0">v0.14.0</a></span>
</p>

---

# 🎉 主要なアップデート

## 📖 静的サイト化への移行
- **Supabaseからローカルファイルシステムへ**: データベース依存を完全に排除し、プロンプトはMarkdownファイルとして直接管理
- **GitHub Pages対応**: 静的ホスティングに最適化されたビルド設定
- **APIエンドポイント削除**: バックエンドAPIを廃止し、フロントエンドのみの構成に変更

## 🔧 技術的な改善

### GitHub Pages最適化
- **クライアントサイドルーティング**: SPA（Single Page Application）対応の404.htmlを追加
- **ベースパス設定**: `/MysticLibrary`でのホスティングに対応
- **ビルドプロセス改善**: Vite設定の最適化とアセット管理の強化

### Git情報統合システム
- **自動Git情報生成**: `script/generate-git-info.js`により、各プロンプトファイルの最終更新日時を自動取得
- **更新日時表示**: プロンプト一覧で各アイテムの最新更新日が表示
- **フォールバック機能**: Git情報が取得できない場合の代替日時生成

## 📝 コンテンツ追加
- **新プロンプト追加**: [`gh-issue-workflow-from-diff-v3-lite.md`](prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite.md) - Gitワークフロー用の軽量版プロンプト

## 🗂️ ファイル整理

### 削除されたコンポーネント・機能
- **API関連**: 全てのAPI関連ファイル（routes, middleware, swagger等）を削除
- **認証機能**: Auth.tsx、Profile.tsx等のユーザー認証関連機能を削除
- **データベース機能**: Supabase関連の全機能を削除
- **フォーム機能**: プロンプト作成・編集用のフォームコンポーネントを削除

### パッケージ依存関係の整理
- **削除**: `@supabase/supabase-js`, `cors`, `dotenv`, `swagger-jsdoc`, `swagger-ui-express`
- **保持**: React、Vite、TailwindCSS、Lucide React等のフロントエンド必須パッケージ

## 🎨 UI/UX改善
- **ナビゲーション更新**: APIリンクを削除し、「静的サイト版」のバッジを追加
- **ホームページ更新**: 新規登録リンクをプロンプト一覧への誘導に変更
- **レスポンシブ対応**: GitHub Pagesでの表示最適化

---

# 🔄 マイグレーション情報

## v0.13.0からの主な変更点
1. **データストレージ**: Supabaseデータベース → Markdownファイル
2. **ホスティング**: 動的サイト → 静的サイト（GitHub Pages）
3. **認証**: ユーザー認証機能 → 認証不要の公開サイト
4. **プロンプト管理**: WebUI作成・編集 → ファイルベース管理

## 既存ユーザーへの影響
- **プロンプト閲覧**: 引き続き全プロンプトの閲覧が可能
- **プロンプト作成**: Web UIでの作成機能は廃止、GitHubでのPull Request方式に変更
- **ユーザーアカウント**: アカウント機能は廃止

---

# 🚀 技術仕様

## ビルド・デプロイ
```bash
# 開発環境
npm run dev

# ビルド（Git情報生成含む）
npm run build

# GitHub Actions自動デプロイ対応
```

## ファイル構造
```
prompts/
├── カテゴリ名/
│   ├── サブカテゴリ/
│   │   └── プロンプト.md
│   └── プロンプト.md
└── ...

script/
└── generate-git-info.js  # Git情報生成スクリプト

src/assets/
└── git-info.json        # 自動生成されるGit情報
```

---

# 📚 代表的なプロンプト

- [エンカ歌詞強化プロンプト](prompts/audio/amped_enka_lyrics.md)
- [ラップ作詞プロンプト](prompts/audio/comprehensive-improved-rap-prompt.md)
- [高品質コードのベストプラクティス](prompts/coding/BEST_PROGRAMMING_PRACTICES_REQUIREMENTS_JA.md)
- [Pythonパッケージ開発チェックリスト](prompts/coding/Checklist_for_Developing_Python_Packages_and_Libraries.md)
- [グラフィックレコーディングスタイル](prompts/documentation/Graphic-recording-style-infographic-v2.md)
- [OpenAI メタプロンプト（日本語）](prompts/meta/openai_meta_prompt/openai_meta_prompt_JP.md)
- [Gitワークフロー用プロンプト（軽量版）](prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite.md)

---

# 🛠️ 開発者向け情報

## 新しいプロンプト追加方法
1. `prompts/`配下の適切なカテゴリフォルダにMarkdownファイルを配置
2. ファイル形式: `# タイトル` + 説明文 + プロンプト内容
3. Pull Requestでの提出

## Git情報システム
- **自動実行**: ビルド時に`script/generate-git-info.js`が実行
- **情報取得**: `git log`コマンドで各ファイルの最終更新日時を取得
- **JSON出力**: `src/assets/git-info.json`に結果を保存

---

# 📋 今後の予定

## v0.15.0 予定機能
- **検索機能強化**: フルテキスト検索の実装
- **タグフィルタリング**: より詳細なカテゴリ・タグ絞り込み
- **プロンプトテンプレート**: 標準的なプロンプト形式の提供

## コミュニティ貢献
- **プロンプト投稿**: GitHubでのPull Request歓迎
- **バグ報告**: GitHub Issuesでの報告をお願いします
- **機能要望**: Discussionsでのご提案をお待ちしています

---

**ダウンロード**: [v0.14.0](https://github.com/your-username/MysticLibrary/releases/tag/v0.14.0)  
**変更差分**: [v0.13.0...v0.14.0](https://github.com/your-username/MysticLibrary/compare/v0.13.0...v0.14.0)

---

<p align="center">✨ プロンプトの魔法で、AIの可能性を解き放とう！ ✨</p>
