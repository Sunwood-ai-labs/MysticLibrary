# Mystic Library API Python サンプル

このサンプルコードは、Mystic Library APIをPythonから利用する方法を示しています。

## セットアップ

1. 必要なパッケージをインストール:
```bash
pip install -r requirements.txt
```

2. 環境変数の設定:
```bash
export MYSTIC_LIBRARY_API_KEY="your-api-key"
```

## 使用方法

```bash
python api_example.py
```

## 機能

このサンプルコードでは以下の機能を実装しています：

- プロンプト一覧の取得
- プロンプトの詳細取得
- プロンプトの作成
- プロンプトの更新
- カテゴリー一覧の取得
- タグ一覧の取得

## コード例

```python
from api_example import MysticLibraryAPI

# APIクライアントの初期化
client = MysticLibraryAPI("your-api-key")

# プロンプト一覧を取得
prompts = client.get_prompts(limit=10)
for prompt in prompts["prompts"]:
    print(f"- {prompt['title']}")

# 新規プロンプトを作成
new_prompt = client.create_prompt(
    title="テストプロンプト",
    content="これはテストプロンプトです。",
    description="APIからの投稿テスト",
    is_published=True
)
```