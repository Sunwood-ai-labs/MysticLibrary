from MysticLibrary import MysticLibrary

# GitHubのマークダウンファイルを召喚して具現化する例
github_url = "https://raw.githubusercontent.com/Sunwood-ai-labs/MysticLibrary/main/prompts/coding/Requirements_for_High-Quality_Code.md"
markdown_content = MysticLibrary.summon_text(github_url, manifest_path="local_readme.md")
print(markdown_content[:100])  # 最初の100文字を表示

# 他のURLからテキストを召喚し、具現化しない例
text_url = "https://raw.githubusercontent.com/Sunwood-ai-labs/MysticLibrary/main/prompts/coding/Requirements_for_High-Quality_Code.md"
text_content = MysticLibrary.summon_text(text_url)
print(text_content[:100])  # 最初の100文字を表示
