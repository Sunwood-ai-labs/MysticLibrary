# Git 差分解析自動コミット プロンプト

下記の処理を実行して

git statusとgit diffの結果を解析して、自動で適切なブランチ作成・コミット・マージを実行する

## 開発フローステップ

1. 🔍 **作業前に変更状態を確認してください**
   ```
   git status
   git diff
   ```

2. 🌿 **develop ブランチの確認・作成・移動をしてください**
   ```
   # developブランチが存在するか確認
   git branch -a | grep develop
   
   # developブランチが存在しない場合は作成
   git checkout -b develop
   git push origin develop
   
   # developブランチが存在する場合は移動して最新化
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **作業用ブランチを作成してください**
   - ブランチ名は上記の変更の差分から適切な英語のブランチ名を提案するようにして
   - issue番号は付けないでください
   ```
   git checkout -b feature/[機能名]-[日付]
   ```

4. 💻 **変更内容に基づいて細かくコミットしてください**
   - git statusとgit diffで確認した変更をもとに、**作業の差分ごとに細かくコミット**してください
   - **後から見た人でも作業履歴を理解できるよう**に、機能追加・修正・リファクタリングなど作業単位で分割
   - 日本語で内容を記述し、後から見たときに分かるようにしてください
   - 絵文字を付与して可読性を上げてください
   - 1つのコミットには関連する変更のみを含め、無関係な変更は別コミットに分ける
   - 3行程度の箇条書きを活用して変更内容を記載して
     
   ```
   # 例：ファイル追加 → 機能実装 → スタイル調整のように分割
   git add [関連ファイル]
   git commit -m "✨ [具体的な変更内容を日本語で]"
   
   # 次の作業単位をコミット
   git add [次の関連ファイル]
   git commit -m "🔧 [次の変更内容を日本語で]"
   ```

5. 🔍 **コミット漏れがないか確認してください**
   ```
   git status
   git diff
   ```

6. 🔄 **develop ブランチにマージしてください**
   ```
   git checkout develop
   git merge --no-ff feature/[機能名]-[日付] -m "🔀 Merge: [タスク名]"
   git push origin develop
   ```

7. 🗑️ **作業ブランチを削除してください**
   ```
   git branch -d feature/[機能名]-[日付]
   ```
