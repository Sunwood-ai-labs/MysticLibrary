# Mystic Library API ガイド

Mystic Library APIを使用すると、プログラムからプロンプトの取得や作成、更新が可能になります。

## 認証

APIを使用するには、APIキーが必要です。APIキーは以下の手順で取得できます：

1. Mystic Libraryにログイン
2. プロフィールページに移動
3. 「APIキー」タブを選択
4. 「新規作成」ボタンをクリック
5. キーの名前を入力して作成

APIキーは、リクエストヘッダーの`X-API-Key`に設定して使用します：

```bash
curl -H "X-API-Key: your-api-key" https://api.mystic-library.com/v1/prompts
```

## エンドポイント

### プロンプト

#### プロンプト一覧の取得

```http
GET /v1/prompts
```

クエリパラメータ：
- `category_id`: カテゴリーでフィルター
- `tag_id`: タグでフィルター
- `limit`: 取得件数（デフォルト: 20, 最大: 100）
- `offset`: オフセット（ページネーション用）

レスポンス例：
```json
{
  "prompts": [
    {
      "id": "uuid",
      "title": "プロンプトのタイトル",
      "content": "プロンプトの内容",
      "description": "説明",
      "category": {
        "id": "uuid",
        "name": "カテゴリー名"
      },
      "tags": [
        {
          "id": "uuid",
          "name": "タグ名"
        }
      ],
      "views_count": 100,
      "likes_count": 50,
      "created_at": "2024-03-15T00:00:00Z"
    }
  ],
  "total": 1000
}
```

#### プロンプトの取得

```http
GET /v1/prompts/:id
```

レスポンス例：
```json
{
  "id": "uuid",
  "title": "プロンプトのタイトル",
  "content": "プロンプトの内容",
  "description": "説明",
  "category": {
    "id": "uuid",
    "name": "カテゴリー名"
  },
  "tags": [
    {
      "id": "uuid",
      "name": "タグ名"
    }
  ],
  "views_count": 100,
  "likes_count": 50,
  "created_at": "2024-03-15T00:00:00Z"
}
```

#### プロンプトの作成

```http
POST /v1/prompts
```

リクエストボディ：
```json
{
  "title": "プロンプトのタイトル",
  "content": "プロンプトの内容",
  "description": "説明（任意）",
  "category_id": "カテゴリーID（任意）",
  "tag_ids": ["タグID1", "タグID2"],
  "is_published": true
}
```

#### プロンプトの更新

```http
PUT /v1/prompts/:id
```

リクエストボディ：
```json
{
  "title": "新しいタイトル",
  "content": "新しい内容",
  "description": "新しい説明",
  "category_id": "新しいカテゴリーID",
  "tag_ids": ["新しいタグID1", "新しいタグID2"],
  "is_published": true
}
```

### カテゴリー

#### カテゴリー一覧の取得

```http
GET /v1/categories
```

レスポンス例：
```json
{
  "categories": [
    {
      "id": "uuid",
      "name": "カテゴリー名",
      "description": "説明"
    }
  ]
}
```

### タグ

#### タグ一覧の取得

```http
GET /v1/tags
```

レスポンス例：
```json
{
  "tags": [
    {
      "id": "uuid",
      "name": "タグ名"
    }
  ]
}
```

## エラーレスポンス

エラーが発生した場合、以下のような形式でレスポンスが返されます：

```json
{
  "error": {
    "code": "error_code",
    "message": "エラーメッセージ"
  }
}
```

主なエラーコード：
- `invalid_api_key`: APIキーが無効
- `not_found`: リソースが見つからない
- `validation_error`: リクエストパラメータが不正
- `unauthorized`: 権限がない
- `rate_limit_exceeded`: レートリミット超過