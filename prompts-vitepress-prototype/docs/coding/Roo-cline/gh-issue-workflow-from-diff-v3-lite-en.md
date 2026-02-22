---
title: "Git シンプル開発ワークフロー V3 Lite EN"
sourcePath: "prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en_JP.md`
> 英語版: [EN](/en/coding/Roo-cline/gh-issue-workflow-from-diff-v3-lite-en)

# Git シンプル開発ワークフロー V3 Lite EN

下記の処理を実行して

## 開発フローステップ

1. 🔍 **作業前に変更状態を確認してください**
   ```
   git status
   git diff
   ```

2. 🔄 **develop ブランチに移動してください**
   ```
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **作業用ブランチを作成してください**(ブランチ名は上記の変更の差分から適切な英語のブランチ名を提案するようにして)
   ```
   git checkout -b feature/[機能名]-[日付]
   ```

4. 💻 **変更内容に基づいて英語でコミットしてください**
   - git statusとgit diffで確認した変更をもとにコミットメッセージを作成
   - 英語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - こまめに分割してコミットしてください
   - 3行程度の箇条書きを活用して変更内容を記載して
     
   ```
   git add [変更ファイル]
   git commit -m "✨ [変更内容を英語で]"
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status
   git diff
   ```

6. 🚀 **変更をプッシュしてください**
   ```
   git push origin feature/[機能名]-[日付]
   ```

7. 🔄 **最後は develop ブランチにマージしてください**
   ```
   git checkout develop
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [タスク名]"
   git push origin develop
   ```
