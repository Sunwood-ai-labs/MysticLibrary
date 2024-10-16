# MysticLibrary/core.py
import requests
from loguru import logger
import os
from typing import Optional

class MysticLibrary:
    @staticmethod
    def summon_text(url: str, manifest_path: Optional[str] = None) -> str:
        """
        指定されたURLからテキスト内容を召喚し、オプションで物質界に具現化する

        :param url: テキストを召喚するURL
        :param manifest_path: テキストを具現化するファイルパス（オプション）
        :return: 召喚されたテキスト内容
        """
        logger.info(f"異界からテキストを召喚しています: {url}")
        response = requests.get(url)
        response.raise_for_status()
        content = response.text
        logger.success("テキストの召喚に成功しました")

        if manifest_path:
            MysticLibrary.materialize_content(content, manifest_path)

        return content

    @staticmethod
    def materialize_content(content: str, manifest_path: str) -> None:
        """
        テキスト内容を物質界に具現化する

        :param content: 具現化するテキスト内容
        :param manifest_path: 具現化先のファイルパス
        """
        logger.info(f"テキストを物質界に具現化しています: {manifest_path}")
        with open(manifest_path, 'w', encoding='utf-8') as f:
            f.write(content)
        logger.success(f"テキストの具現化が完了しました: {manifest_path}")

# 使用例
if __name__ == "__main__":
    # GitHubのマークダウンファイルを召喚して具現化する例
    github_url = "https://raw.githubusercontent.com/username/repo/master/README.md"
    markdown_content = MysticLibrary.summon_text(github_url, manifest_path="local_readme.md")
    print(markdown_content[:100])  # 最初の100文字を表示

    # 他のURLからテキストを召喚し、具現化しない例
    text_url = "https://example.com/sample.txt"
    text_content = MysticLibrary.summon_text(text_url)
    print(text_content[:100])  # 最初の100文字を表示
