import os
import requests
from typing import Optional, List, Dict, Any

class MysticLibraryAPI:
    def __init__(self, api_key: str, base_url: str = "https://api.mystic-library.com/v1"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            "X-API-Key": api_key,
            "Content-Type": "application/json"
        }

    def get_prompts(
        self,
        category_id: Optional[str] = None,
        tag_id: Optional[str] = None,
        limit: int = 20,
        offset: int = 0
    ) -> Dict[str, Any]:
        """プロンプト一覧を取得"""
        params = {
            "limit": min(limit, 100),  # 最大100件
            "offset": offset
        }
        if category_id:
            params["category_id"] = category_id
        if tag_id:
            params["tag_id"] = tag_id

        response = requests.get(
            f"{self.base_url}/prompts",
            headers=self.headers,
            params=params
        )
        response.raise_for_status()
        return response.json()

    def get_prompt(self, prompt_id: str) -> Dict[str, Any]:
        """プロンプトの詳細を取得"""
        response = requests.get(
            f"{self.base_url}/prompts/{prompt_id}",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()

    def create_prompt(
        self,
        title: str,
        content: str,
        description: Optional[str] = None,
        category_id: Optional[str] = None,
        tag_ids: Optional[List[str]] = None,
        is_published: bool = True
    ) -> Dict[str, Any]:
        """プロンプトを作成"""
        data = {
            "title": title,
            "content": content,
            "is_published": is_published
        }
        if description:
            data["description"] = description
        if category_id:
            data["category_id"] = category_id
        if tag_ids:
            data["tag_ids"] = tag_ids

        response = requests.post(
            f"{self.base_url}/prompts",
            headers=self.headers,
            json=data
        )
        response.raise_for_status()
        return response.json()

    def update_prompt(
        self,
        prompt_id: str,
        title: Optional[str] = None,
        content: Optional[str] = None,
        description: Optional[str] = None,
        category_id: Optional[str] = None,
        tag_ids: Optional[List[str]] = None,
        is_published: Optional[bool] = None
    ) -> Dict[str, Any]:
        """プロンプトを更新"""
        data = {}
        if title is not None:
            data["title"] = title
        if content is not None:
            data["content"] = content
        if description is not None:
            data["description"] = description
        if category_id is not None:
            data["category_id"] = category_id
        if tag_ids is not None:
            data["tag_ids"] = tag_ids
        if is_published is not None:
            data["is_published"] = is_published

        response = requests.put(
            f"{self.base_url}/prompts/{prompt_id}",
            headers=self.headers,
            json=data
        )
        response.raise_for_status()
        return response.json()

    def get_categories(self) -> Dict[str, Any]:
        """カテゴリー一覧を取得"""
        response = requests.get(
            f"{self.base_url}/categories",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()

    def get_tags(self) -> Dict[str, Any]:
        """タグ一覧を取得"""
        response = requests.get(
            f"{self.base_url}/tags",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()


def main():
    # APIキーを環境変数から取得
    api_key = os.getenv("MYSTIC_LIBRARY_API_KEY")
    if not api_key:
        raise ValueError("環境変数 MYSTIC_LIBRARY_API_KEY が設定されていません")

    # APIクライアントを初期化
    client = MysticLibraryAPI(api_key)

    try:
        # カテゴリー一覧を取得
        categories = client.get_categories()
        print("カテゴリー一覧:")
        for category in categories["categories"]:
            print(f"- {category['name']}")
        print()

        # タグ一覧を取得
        tags = client.get_tags()
        print("タグ一覧:")
        for tag in tags["tags"]:
            print(f"- {tag['name']}")
        print()

        # プロンプトを作成
        new_prompt = client.create_prompt(
            title="テストプロンプト",
            content="これはテストプロンプトです。",
            description="APIからの投稿テスト",
            is_published=True
        )
        print(f"新規プロンプト作成: {new_prompt['title']}")
        print()

        # プロンプト一覧を取得
        prompts = client.get_prompts(limit=5)
        print("最新のプロンプト:")
        for prompt in prompts["prompts"]:
            print(f"- {prompt['title']} (いいね数: {prompt['likes_count']})")

    except requests.exceptions.RequestException as e:
        print(f"APIエラー: {e}")


if __name__ == "__main__":
    main()