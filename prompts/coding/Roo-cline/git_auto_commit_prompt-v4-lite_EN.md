# Git Diff Analysis Auto-Commit Prompt V4.0 lite

Execute the following process:

Analyze the results of git status and git diff, and automatically perform appropriate branch creation, commits, and merges.

## Development Flow Steps

1. 🔍 **Check change status before starting work**
   ```
   git status
   git diff
   ```

2. 🌿 **Check/create/switch to develop branch**
   ```
   # Check if develop branch exists
   git branch -a | grep develop

   # Create develop branch if it doesn't exist
   git checkout -b develop
   git push origin develop

   # Switch to develop branch and update if it exists
   git checkout develop
   git pull origin develop
   ```

3. 🌿 **Create working branch**
   - Suggest an appropriate English branch name based on the changes above
   - Do not add issue numbers
   ```
   git checkout -b feature/[feature-name]-[date]
   ```

4. 💻 **Make fine-grained commits based on changes**
   - Based on changes confirmed with git status and git diff, **make fine-grained commits for each work difference**
   - **So that anyone reviewing later can understand the work history**, divide into work units such as feature additions, fixes, refactoring, etc.
   - Describe content in Japanese so it's understandable when viewed later
   - Add emojis to improve readability
   - Include only related changes in one commit; separate unrelated changes into different commits
   - Use bullet points of about 3 lines to describe changes

   ```
   # Example: Split like file addition → feature implementation → style adjustment
   git add [related files]
   git commit -m "✨ [specific change content in Japanese]"

   # Commit next work unit
   git add [next related files]
   git commit -m "🔧 [next change content in Japanese]"
   ```

5. 🔍 **Check for any missing commits**
   ```
   git status
   git diff
   ```

6. 🔄 **Merge to develop branch**
   ```
   git checkout develop
   git merge --no-ff feature/[feature-name]-[date] -m "🔀 Merge: [task name]"
   git push origin develop
   ```

7. 🗑️ **Delete working branch**
   ```
   git branch -d feature/[feature-name]-[date]
   ```
