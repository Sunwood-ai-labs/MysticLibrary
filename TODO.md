# TODO - Mystic Library

> プロンプトエンジニアリングの魔法の世界へ 🪄

---

## 🎯 優先度: 高

### 1. 検索機能の強化

現在の検索は入力欄があるだけで、実際の検索機能が未実装。

#### 実装項目

- [ ] **リアルタイム検索**
  - [ ] タイトル・説明文からのキーワード検索
  - [ ] カテゴリ・タグでのフィルタリング
  - [ ] 検索結果のハイライト表示

- [ ] **高度な検索**
  - [ ] 複数キーワードの AND/OR 検索
  - [ ] 正規表現対応
  - [ ] あいまい検索（フリガナ・類義語）

- [ ] **検索結果のソート**
  - [ ] 更新日順
  - [ ] アルファベット順
  - [ ] 人気順（アクセス数）

---

### 2. 画像・動画プロンプトのサンプル表示

視覚的なプロンプト（画像・動画）に、生成サンプルを表示する機能。

#### 実装項目

- [ ] **サンプル画像/動画の表示枠**
  - [ ] プロンプトファイルに `sample` フロントマターを追加
  - [ ] サンプル画像のプレビュー表示
  - [ ] サンプル動画の埋め込み対応

- [ ] **フロントマター構造**
  ```yaml
  ---
  title: プロンプトタイトル
  description: 説明文
  category: image
  samples:
    - image: /assets/samples/sample1.png
      caption: サンプル1
    - image: /assets/samples/sample2.png
      caption: サンプル2
  ---
  ```

- [ ] **ギャラリービュー**
  - [ ] サンプル一覧表示
  - [ ] ライトボックス（拡大表示）
  - [ ] スライドショー機能

---

### 3. カテゴリ・階層設計の最適化

現在 236 個のプロンプトファイルがあるが、カテゴリ構造に改善の余地がある。

#### 現状の問題点

- [ ] **命名規則の不統一**
  - `Company-as-a-Code`（キャメルケース・ハイフン混在）
  - `coding`（小文字）
  - 一貫性のない命名

- [ ] **階層の深さが不統一**
  - 1階層: `audio/`, `education/`
  - 2階層: `coding/Roo-cline/`, `image/cake/`
  - 3階層: `documentation/graphic-recording/slide/`
  - 最大3階層だが、深さにルールがない

- [ ] **用途ベースと形式ベースの混在**
  - `coding/`（用途）と `image/`（形式）が混在
  - ユーザーが探しにくい構造

- [ ] **重複・類似カテゴリの存在**
  - `documentation/graphic-recording/slide/` vs `writing/slide/`
  - `presentation/` との関係が不明確

#### 最適な階層設計の検討

- [ ] **新しいカテゴリ構造の設計**
  - [ ] 用途ベースのカテゴリ分け（推奨）
    - `business/`（ビジネス）
    - `creative/`（クリエイティブ）
    - `development/`（開発・コーディング）
    - `education/`（教育・学習）
    - `research/`（調査・研究）
    - `utility/`（ユーティリティ・ツール）
  - [ ] 形式ベースのカテゴリ分け（代替案）
    - `text/`（テキスト生成）
    - `image/`（画像生成）
    - `video/`（動画生成）
    - `audio/`（音声生成）
    - `code/`（コード生成）
  - [ ] ハイブリッド方式の検討
    - 第1階層: 用途（business, creative...）
    - 第2階層: 形式（text, image, code...）

- [ ] **命名規則の統一**
  - [ ] すべて小文字・ケバブケースを採用
    - 例: `company-as-a-code`（キャメルケース廃止）
  - [ ] 最大階層数の決定（推奨: 2階層）
  - [ ] カテゴリ名のガイドライン策定

- [ ] **ディレクトリ構造の移行**
  - [ ] 移行プランの作成（現在 → 新構造のマッピング）
  - [ ] 移行スクリプトの作成
  - [ ] 既存リンクの互換性維持（リダイレクト）
  - [ ] プロンプトローダーの更新

#### 新しいカテゴリ構造案（実プロンプトベース）

現在のプロンプト内容（236個）に基づいた、実用的なカテゴリ構造:

```
prompts/
├── content-generation/     # コンテンツ生成（何かを作り出す）
│   ├── html-design/      # HTML/デザイン生成
│   │   ├── graphic-recording/   # グラレコ風HTML
│   │   ├── comic/                # コミック調HTML
│   │   ├── infographic/          # インフォグラフィック
│   │   └── thumbnail/            # サムネイル生成
│   ├── image-generation/  # 画像生成
│   │   ├── low-poly/             # ローポリゴン
│   │   ├── artistic/             # アート系
│   │   └── concept/              # コンセプト系（素数理論等）
│   ├── video-generation/  # 動画生成
│   │   ├── asmr/                 # ASMR動画
│   │   └── cinematic/            # 映画風
│   ├── audio-generation/  # 音声生成
│   │   ├── lyrics/               # 歌詞
│   │   └── speech/               # スピーチ
│   └── text-generation/    # テキスト生成
│       ├── article/              # 記事
│       └── creative/             # クリエイティブライティング
├── development-support/    # 開発支援（コーディング・開発作業）
│   ├── ai-assistants/     # AIアシスタント
│   │   ├── claude-hands/         # Claude用
│   │   ├── gyaru-dev/            # ギャル開発者
│   │   └── general/              # 汎用
│   ├── coding-tools/      # コーディングツール
│   │   ├── roo-cline/            # Roo-cline
│   │   ├── codex/                # Codex
│   │   ├── openhands/            # OpenHands
│   │   └── windsurf/             # Windsurf
│   ├── agents/            # AIエージェント
│   │   ├── minecraft/            # Minecraftエージェント
│   │   └── general/              # 汎用エージェント
│   ├── repository/        # リポジトリ管理
│   │   ├── guidelines/           # ガイドライン
│   │   ├── company-as-code/      # Company-as-a-Code
│   │   └── naming/               # 命名規則
│   └── safety/            # 安全・憲章
│       └── ai-coding-charter/    # AIコーディング憲章
├── meta-methodology/       # メタ・方法論（システムやプロセス）
│   ├── meta-prompts/      # メタプロンプト
│   │   └── openai-meta/          # OpenAIメタプロンプト
│   ├── methodology/       # 方法論
│   │   └── abstract-prompting/   # 抽象プロンプティング
│   └── frameworks/        # フレームワーク
│       └── pseudo-multi-agent/   # 擬似マルチエージェント
├── presentation/          # プレゼンテーション（既存維持）
│   ├── vrm-auto/         # VRM自動プレゼン
│   └── voicevox/         # VOICEVOX自動
├── diagrams-maps/         # 図解・マップ
│   ├── diagrams/         # 図解生成
│   │   ├── eraser/               # Eraser
│   │   ├── drawio/               # drawio
│   │   └── aws-architecture/     # AWSアーキテクチャ
│   └── mind-maps/        # マインドマップ
│       └── markdown-for-mindmaps/
├── education-certification/# 教育・資格
│   ├── certification/     # 資格試験
│   │   └── aws/                  # AWS認定
│   └── tutorials/        # チュートリアル
│       └── code-notebook/        # 教育用コードノート
└── research-analysis/     # 調査・分析
    ├── deep-research/     # ディープリサーチ
    └── analysis/          # 分析ツール
```

#### 既存カテゴリのマッピング表

| 既存カテゴリ | 新カテゴリ | 移行先 |
|------------|----------|--------|
| `documentation/` | `content-generation/html-design/` | HTMLデザイン生成に統合 |
| `documentation/comic/` | `content-generation/html-design/comic/` | コミック調HTML |
| `documentation/graphic-recording/` | `content-generation/html-design/graphic-recording/` | グラレコ風HTML |
| `image/` | `content-generation/image-generation/` | 画像生成に統合 |
| `image/cake/` | `content-generation/image-generation/artistic/` | アート系 |
| `video/` | `content-generation/video-generation/` | 動画生成に統合 |
| `audio/` | `content-generation/audio-generation/` | 音声生成に統合 |
| `coding/` | `development-support/` | 開発支援に統合 |
| `coding/claude-hands/` | `development-support/ai-assistants/claude-hands/` | AIアシスタント |
| `coding/Roo-cline/` | `development-support/coding-tools/roo-cline/` | コーディングツール |
| `coding/dev-agent/` | `development-support/ai-assistants/` | AIアシスタント |
| `coding/ai-coding-agent-safety-charter/` | `development-support/safety/` | 安全 |
| `coding/Zenith-Excellence-Repository-Guidelines/` | `development-support/repository/guidelines/` | リポジトリ管理 |
| `coding/Company-as-a-Code` | `development-support/repository/company-as-code/` | リポジトリ管理（小文字化） |
| `agent/` | `development-support/agents/` | AIエージェント |
| `meta/` | `meta-methodology/meta-prompts/` | メタプロンプト |
| `methodology/` | `meta-methodology/methodology/` | 方法論 |
| `pseudo-multi-agent/` | `meta-methodology/frameworks/pseudo-multi-agent/` | フレームワーク |
| `presentation/` | `presentation/` | 変更なし |
| `diagram/` | `diagrams-maps/diagrams/` | 図解生成 |
| `mind-mapping/` | `diagrams-maps/mind-maps/` | マインドマップ |
| `aws-certification/` | `education-certification/certification/aws/` | AWS資格 |
| `education/` | `education-certification/tutorials/` | チュートリアル |
| `deep-research/` | `research-analysis/deep-research/` | ディープリサーチ |
| `colormap/` | `content-generation/html-design/` | カラーマップはHTMLデザインに含める |
| `game/` | `content-generation/video-generation/` または削除 | 動画生成に含めるか別途検討 |
| `multimodal/` | `content-generation/` | マルチモーダルはコンテンツ生成全体に |

#### 命名規則の統一

- [ ] **ディレクトリ名: 小文字・ケバブケース**
  - `Company-as-a-Code` → `company-as-code`
  - `pseudo-multi-agent` → `pseudo-multi-agent`（既に正しい）

- [ ] **最大階層数: 3階層**
  - 第1階層: 用途カテゴリ（`content-generation/`, `development-support/`）
  - 第2階層: サブカテゴリ（`html-design/`, `ai-assistants/`）
  - 第3階層: 具体的なツールやスタイル（`graphic-recording/`, `claude-hands/`）

- [ ] **プロンプトファイルの命名規則**
  - 形式: `{カテゴリ}-{説明}-{バージョン}_{言語}.md`
  - 例: `graphic-recording-infographic-v3.1_JP.md`

---

### 4. プロンプトの拡充

既存プロンプトの充実と新しいカテゴリの追加。

#### 拡張項目

- [ ] **既存カテゴリの強化**
  - [ ] コーディングプロンプトの追加（Rust, Go, Kotlin 等）
  - [ ] 画像生成プロンプトのバリエーション増加
  - [ ] 動画生成プロンプトの追加

- [ ] **新しいカテゴリ**
  - [ ] **ビジネス向け**
    - [ ] メール作成
    - [ ] 議事録作成
    - [ ] プレゼンテーション構成
  - [ ] **マーケティング向け**
    - [ ] SNS投稿作成
    - [ ] 広告コピー作成
    - [ ] SEO記事作成
  - [ ] **教育向け**
    - [ ] 問題作成
    - [ ] 解説生成
    - [ ] カリキュラム作成

- [ ] **多言語対応の強化**
  - [ ] 英語プロンプトの追加
  - [ ] 中国語・韓国語など他言語への対応

---

## 🔥 優先度: 中

### 5. エンタープライズ機能の強化

社内導入向けの機能追加。

- [ ] **認証・認可機能**
  - [ ] ベーシック認証対応
  - [ ] OAuth/OIDC 連携（オプション）
  - [ ] アクセス制御（閲覧・編集権限）

- [ ] **プロンプトの評価・フィードバック**
  - [ ] レーティング機能（星評価）
  - [ ] コメント機能
  - [ ] 「使った」数のカウント

- [ ] **プロンプトのバージョニング**
  - [ ] Git ベースのバージョン管理強化
  - [ ] 変更履歴の表示
  - [ ] 差分表示機能

---

### 6. UI/UX の改善

- [ ] **ダークモード対応**
- [ ] **レスポンシブデザインの強化**
  - [ ] モバイルビューの最適化
  - [ ] タブレット対応
- [ ] **キーボードショートカット**
  - [ ] 検索フォーカス（Ctrl/Cmd + K）
  - [ ] ナビゲーションショートカット

---

### 7. エクスポート・インポート機能

- [ ] **プロンプトのエクスポート**
  - [ ] 単一プロンプトのダウンロード（Markdown/PDF）
  - [ ] カテゴリ単位のエクスポート
  - [ ] 全プロンプトのバックアップ

- [ ] **プロンプトのインポート**
  - [ ] Markdown ファイルのドラッグ&ドロップ
  - [ ] Zip アーカイブからの一括インポート
  - [ ] Notion/Scrapbox などからの移行ツール

---

## 📝 優先度: 低

### 8. ドキュメント・チュートリアル

- [ ] **ユーザーガイド**
  - [ ] 初心者向けチュートリアル
  - [ ] プロンプトの書き方ガイド
  - [ ] よくある質問（FAQ）

- [ ] **管理者ガイド**
  - [ ] セルフホスト手順
  - [ ] Docker デプロイ手順
  - [ ] カスタマイズガイド

- [ ] **API ドキュメント**
  - [ ] プログラムからのアクセス方法
  - [ ] Webhook 機能（将来実装時）

---

### 9. パフォーマンス最適化

現在の React + Vite 構成から、より高速なフレームワークへの移行を検討。

#### フレームワーク移行

- [ ] **React → Svelte への移行**
  - [ ] プロジェクト構成の変更（SvelteKit 導入）
  - [ ] コンポーネントの書き換え（TSX → Svelte）
  - [ ] ルーティングの移行（React Router → SvelteKit）
  - [ ] i18n 機能の移行（svelte-i18n）
  - [ ] スタイルシステムの移行（TailwindCSS 互換性確認）
  - [ ] ビルド設定の変更（Vite → SvelteKit）
  - [ ] 既存機能の動作確認
  - [ ] パフォーマンス比較検証

#### 即時改善策（移行前）

- [ ] **React の最適化**
  - [ ] Virtualization（react-window）導入
  - [ ] Memo/UseMemo の適切な使用
  - [ ] コード分割（Code Splitting）
  - [ ] 画像の遅延読み込み（Lazy Loading）

---

### 10. テスト・品質保証

- [ ] **ユニットテスト**
  - [ ] プロンプトローダーのテスト
  - [ ] 検索機能のテスト
  - [ ] i18n 機能のテスト

- [ ] **E2E テスト**
  - [ ] 主要ユーザーフローのテスト
  - [ ] クロスブラウザテスト

---

### 11. CI/CD の強化

- [ ] **自動テスト**
  - [ ] プルリクエスト時の自動テスト
  - [ ] Markdown リント（markdownlint）
  - [ ] TypeScript 型チェック

- [ ] **自動デプロイ**
  - [ ] GitHub Pages への自動デプロイ
  - [ ] Docker イメージの自動ビルド
  - [ ] リリースノートの自動生成

---

## 🚀 将来の機能

### 12. コラボレーション機能

- [ ] **マルチユーザー編集**
  - [ ] 同時編集ロック
  - [ ] 変更のマージ

- [ ] **レビュー機能**
  - [ ] プルリクエスト形式のレビュー
  - [ ] コメント機能

---

## 📊 進捗管理

| カテゴリ | 完了 / 全体 | 進捗率 |
|---------|-----------|--------|
| 検索機能 | 0 / 15 | 0% |
| サンプル表示 | 0 / 9 | 0% |
| **カテゴリ設計** | 0 / 14 | 0% |
| プロンプト拡充 | 0 / 12 | 0% |
| エンタープライズ | 0 / 9 | 0% |
| UI/UX | 0 / 5 | 0% |
| エクスポート | 0 / 6 | 0% |
| パフォーマンス最適化 | 0 / 11 | 0% |
| テスト・品質保証 | 0 / 6 | 0% |
| CI/CD | 0 / 6 | 0% |
| コラボレーション | 0 / 4 | 0% |
| **全体** | **0 / 97** | **0%** |

---

## 💡 貢献の仕方

1. このファイルを Fork して編集
2. 実装したい項目にチェックを入れる
3. プルリクエストを送信

もしくは、[GitHub Issues](https://github.com/your-username/MysticLibrary/issues) で実装リクエストを送信してください。

---

*最終更新: 2026-01-14*
