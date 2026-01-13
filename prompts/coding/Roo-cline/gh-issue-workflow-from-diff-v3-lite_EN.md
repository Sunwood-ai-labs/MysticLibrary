# Git Simple Development Workflow V3 Lite

Execute the following process:

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

3. 🌿 **Create a working branch**
   - Suggest an appropriate English branch name based on the changes shown above
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Commit based on the changes**
   - Create commit messages based on changes confirmed with git status and git diff
   - Describe content in Japanese so it's understandable when viewed later
   - Add emojis to improve readability
   - Commit frequently, splitting changes into small increments
   - Use bullet points of about 3 lines to describe the changes

   ```
   git add [changed files]
   git commit -m "✨ [change description in Japanese]"
   ```

5. 🔍 **Check for missing commits**
   ```
   git status
   git diff
   ```

6. 🚀 **Push the changes**
   ```
   git push origin feature/[feature-name]-[date]
   ```

7. 🔄 **Finally merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```

8. 🗑️ **Delete the working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   git push origin --delete feature/[feature-name]-[date]
   ```
