<p align="center">
<img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/MysticLibrary_icon2.png" width="100%">
<br>
<h1 align="center">Mystic Library</h1>
<h2 align="center">
  ～ Unlock the magic of AI ～
</h2>

<p align="center">
  <a href="https://hamaruki.com/"><b>[🌐 Website]</b></a> •
  <!-- <a href="https://arxiv.org/abs/2309.17452"><b>[📜 Paper]</b></a> • -->
  <!-- <a href="https://huggingface.co/llm-agents"><b>[🤗 HF Models]</b></a> • -->
  <a href="https://github.com/Sunwood-ai-labs/Gaiah"><b>[🐱 GitHub]</b></a>
  <!-- <a href="https://9557c5365a6f44dc84.gradio.live"><b>[🐯 Gradio Demo]</b></a> -->
  <a href="https://twitter.com/hAru_mAki_ch"><b>[🐦 Twitter]</b></a> •
  <!-- <a href="https://www.reddit.com/r/LocalLLaMA/comments/1703k6d/tora_a_toolintegrated_reasoning_agent_for/"><b>[💬 Reddit]</b></a> • -->
  <a href="https://hamaruki.com/how-to-control-git-with-python-example-of-using-the-gaiah-library/">[🍀 Official Blog]</a>
  <!-- <a href="#-quick-start">Quick Start</a> • -->
  <!-- <a href="#%EF%B8%8F-citation">Citation</a> -->
</p>

</p>

# 🌟 概要

Mystic Libraryは、AIを活用したプロンプトのライブラリです。開発者や創作者が、より効率的かつ高品質なプロンプトを作成するためのリソースを提供します。

## ✨ 特徴

- 📚 多様なカテゴリのプロンプトテンプレート
  - 分析、コーディング、マインドマップ、ライティングなど
- 🎯 プロンプトエンジニアリングのベストプラクティス
  - 効果的なプロンプトの書き方のヒントとコツ
- 🤖 LLMとの統合
  - LLMとのシームレスな連携を想定したプロンプトの設計

## 📁 リポジトリの構造

```plaintext
MysticLibrary/
├─ docs/                                   # ドキュメント
├─ example/                                # 使用例
│  └─ example_usage.py                     # サンプルコード
├─ MysticLibrary/                          # メインパッケージ
│  ├─ core.py                              # コア機能
│  └─ __init__.py                          # パッケージ初期化
├─ prompts/                                # プロンプトテンプレート
│  ├─ audio/                               # 音声関連
│  │  ├─ amped_enka_lyrics.md
│  │  └─ comprehensive-improved-rap-prompt.md
│  ├─ aws-certification/                   # AWS認定関連
│  │  └─ AWS_CERTIFICATION_EXAM_GUIDE_TEMPLATE.md
│  ├─ coding/                              # コーディング関連
│  │  ├─ BEST_PROGRAMMING_PRACTICES_REQUIREMENTS_JA.md
│  │  ├─ Checklist_for_Developing_Python_Packages_and_Libraries.md
│  │  └─ Requirements_for_High-Quality_Code.md
│  ├─ Company-as-a-Code/                   # 企業コード化
│  ├─ diagram/                             # 図表関連
│  ├─ documentation/                       # ドキュメント関連
│  ├─ image/                               # 画像生成関連
│  ├─ meta/                                # メタプロンプト
│  ├─ methodology/                         # 方法論
│  ├─ mind-mapping/                        # マインドマップ
│  └─ writing/                             # ライティング
│     └─ slide/                            # プレゼン資料
├─ script/                                 # スクリプト
│  └─ MysticLibrary-dev.bat               # 開発用スクリプト
├─ .gitignore                              # Git除外設定
├─ README.md                               # プロジェクト説明
└─ setup.py                                # パッケージ設定
```

## 📦 パッケージの構成

### 🔧 コアモジュール
- `MysticLibrary/core.py`: ライブラリのコア機能を提供
- `MysticLibrary/__init__.py`: パッケージの初期化と公開インターフェース

### 📚 プロンプトカテゴリ
- `prompts/audio/`: 音声・音楽関連のプロンプト
- `prompts/coding/`: プログラミング関連のプロンプト
- `prompts/documentation/`: ドキュメント作成用プロンプト
- `prompts/image/`: 画像生成用プロンプト
- `prompts/meta/`: メタプロンプトとプロンプト設計
- `prompts/methodology/`: 方法論とベストプラクティス
- `prompts/mind-mapping/`: マインドマップ作成用プロンプト
- `prompts/writing/`: 文章作成用プロンプト

## 🚀 利用方法

1. リポジトリのクローン:
```bash
git clone https://github.com/yourusername/MysticLibrary.git
cd MysticLibrary
```

2. パッケージのインストール:
```bash
pip install -e .
```

3. プロンプトの使用:
```python
from MysticLibrary import core

# プロンプトの使用例は example/example_usage.py を参照
```

## 🤝 コントリビューション

Mystic Libraryは、コミュニティからの貢献を歓迎します：

1. 新しいプロンプトテンプレートの追加
2. 既存プロンプトの改善
3. ドキュメントの充実化
4. バグ修正や機能改善

コントリビューションの詳細については、[CONTRIBUTING.md](CONTRIBUTING.md)を参照してください。

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 📞 連絡先

- 🌐 公式サイト: [https://hamaruki.com/](https://hamaruki.com/)
- 🐦 Twitter: [@hAru_mAki_ch](https://twitter.com/hAru_mAki_ch)
- 🐱 GitHub: [Sunwood-ai-labs/Gaiah](https://github.com/Sunwood-ai-labs/Gaiah)
- 📝 ブログ: [Official Blog](https://hamaruki.com/how-to-control-git-with-python-example-of-using-the-gaiah-library/)

---

<p align="center">✨ Mystic Libraryで、AIの魔法を解き放ちましょう！ ✨</p>
