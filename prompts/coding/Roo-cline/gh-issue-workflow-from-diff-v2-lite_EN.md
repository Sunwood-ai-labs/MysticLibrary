
Execute the following process

# Git Simple Development Workflow Lite

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```
   git status
   git diff
   ```

2. 🔄 **Switch to develop branch**
   ```
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **Create working branch** (suggest an appropriate English branch name based on the above changes)
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Commit based on changes**
   - Create commit messages based on changes confirmed with git status and git diff
   - Write descriptions in Japanese so they can be understood later
   - Add emojis to improve readability
   - Commit frequently in small increments
   ```
   git add [changed files]
   git commit -m "✨ [change content in Japanese]"
   ```

5. 🔍 **Check for missing commits**
   ```
   git status
   git diff
   ```

6. 🚀 **Push changes**
   ```
   git push origin feature/[feature-name]-[date]
   ```

7. 🔄 **Finally merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```

8. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   git push origin --delete feature/[feature-name]-[date]
   ```
