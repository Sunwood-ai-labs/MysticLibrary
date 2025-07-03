# forgejo openhands-resolver.yml

```yaml
name: OpenHands Issue Resolver (Ultra Simple)

on:
  issues:
    types: [labeled]
  pull_request:
    types: [labeled]
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  pull_request_review:
    types: [submitted]

jobs:
  openhands-resolver:
    if: |
      github.event.label.name == 'fix-me' ||
      github.event.label.name == 'fix-me-experimental' ||
      (
        ((github.event_name == 'issue_comment' || github.event_name == 'pull_request_review_comment') &&
        contains(github.event.comment.body, vars.OPENHANDS_MACRO || '@openhands-agent')
        ) ||
        (github.event_name == 'pull_request_review' &&
        contains(github.event.review.body, vars.OPENHANDS_MACRO || '@openhands-agent')
        )
      )
    runs-on: docker
    container:
      image: python:3.12-bookworm
    
    permissions:
      contents: write
      pull-requests: write
      issues: write
    
    steps:
      - name: Install dependencies
        run: |
          echo "🔧 Installing dependencies..."
          apt-get update
          apt-get install -y curl git jq ca-certificates
          
          # Node.js 20をインストール（actions/checkout@v4に必要）
          curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
          apt-get install -y nodejs
          
          # uvをインストール
          curl -LsSf https://astral.sh/uv/install.sh | sh
          
          # PATHを正しく設定
          export PATH="/root/.local/bin:$PATH"
          echo "/root/.local/bin" >> $GITHUB_PATH
          
          echo "✅ Dependencies installed"
          python --version
          node --version
          npm --version
          /root/.local/bin/uv --version

      - name: Add eyes reaction
        run: |
          echo "👀 Adding eyes reaction..."
          
          case "${{ github.event_name }}" in
            "issue_comment")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/comments/${{ github.event.comment.id }}/reactions"
              ;;
            "issues")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/${{ github.event.issue.number }}/reactions"
              ;;
            "pull_request"|"pull_request_review"|"pull_request_review_comment")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/${{ github.event.pull_request.number }}/reactions"
              ;;
          esac
          
          if [ -n "$REACTION_URL" ]; then
            curl -X POST \
              -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
              -H "Content-Type: application/json" \
              -d '{"content":"eyes"}' \
              "$REACTION_URL" || echo "⚠️ Failed to add reaction"
          fi

      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Extract issue content and run OpenHands
        id: openhands
        run: |
          # PATHを確実に設定
          export PATH="/root/.local/bin:$PATH"
          
          echo "🚀 Extracting issue content and running OpenHands..."
          
          # Issue/PR番号とタスク内容を特定
          if [ -n "${{ github.event.pull_request.number }}" ]; then
            ISSUE_NUMBER="${{ github.event.pull_request.number }}"
            TASK_CONTENT="${{ github.event.pull_request.body }}"
          elif [ -n "${{ github.event.issue.number }}" ]; then
            ISSUE_NUMBER="${{ github.event.issue.number }}"
            if [ "${{ github.event_name }}" = "issue_comment" ]; then
              TASK_CONTENT="${{ github.event.comment.body }}"
            else
              TASK_CONTENT="${{ github.event.issue.body }}"
            fi
          fi
          
          # @openhands-agentを除去してタスク内容をクリーンアップ
          CLEAN_TASK=$(echo "$TASK_CONTENT" | sed 's/@openhands-agent[^[:space:]]*//' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
          
          # 空の場合はデフォルトタスクを設定
          if [ -z "$CLEAN_TASK" ]; then
            CLEAN_TASK="Issue #${ISSUE_NUMBER}を解決してください"
          fi
          
          echo "📝 Task: $CLEAN_TASK"
          echo "🏃 Running OpenHands with headless mode..."
          
          # Git設定
          git config --global user.name "OpenHands Agent"
          git config --global user.email "openhands-agent@users.noreply.github.com"
          
          # OpenHands設定ディレクトリを作成
          mkdir -p ~/.config/openhands
          mkdir -p .openhands
          
          # 設定ファイルを作成（信頼済みディレクトリ設定）
          cat > ~/.config/openhands/config.toml << 'EOF'
          [sandbox]
          trusted_dirs = [ "/workspace", "/prj", "/home", "/tmp" ]
          EOF
          
          # settings.jsonを環境変数から作成
          cat > .openhands/settings.json << EOF
          {
              "language": null,
              "agent": "CodeActAgent",
              "max_iterations": ${MAX_ITERATIONS},
              "security_analyzer": null,
              "confirmation_mode": false,
              "llm_model": "${LLM_MODEL}",
              "llm_api_key": "${ANTHROPIC_API_KEY}",
              "llm_base_url": null,
              "remote_runtime_resource_factor": null,
              "secrets_store": {
                  "provider_tokens": {}
              },
              "enable_default_condenser": true,
              "enable_sound_notifications": false,
              "enable_proactive_conversation_starters": false,
              "user_consents_to_analytics": null,
              "sandbox_base_container_image": null,
              "sandbox_runtime_container_image": null,
              "mcp_config": null,
              "search_api_key": null,
              "email": null,
              "email_verified": null
          }
          EOF
          
          # 実験版かどうか判定
          IS_EXPERIMENTAL=false
          if [ "${{ github.event.label.name }}" = "fix-me-experimental" ]; then
            IS_EXPERIMENTAL=true
          elif [[ "$TASK_CONTENT" == *"@openhands-agent-exp"* ]]; then
            IS_EXPERIMENTAL=true
          fi
          
          # OpenHandsを uvx で headless mode 実行（自動実行）
          if [ "$IS_EXPERIMENTAL" = "true" ]; then
            echo "🧪 Using experimental version with uvx headless mode..."
            /root/.local/bin/uvx --python 3.12 --from "git+https://github.com/all-hands-ai/openhands.git" python -m openhands.core.main -t "$CLEAN_TASK" || OPENHANDS_EXIT_CODE=$?
          else
            echo "🔧 Using stable version with uvx headless mode..."
            /root/.local/bin/uvx --python 3.12 --from openhands-ai python -m openhands.core.main -t "$CLEAN_TASK" || OPENHANDS_EXIT_CODE=$?
          fi
          
          # 変更があるかチェック
          CHANGES=$(git status --porcelain)
          if [ -n "$CHANGES" ]; then
            echo "RESOLUTION_SUCCESS=true" >> $GITHUB_OUTPUT
            echo "HAS_CHANGES=true" >> $GITHUB_OUTPUT
            echo "✅ OpenHands completed with changes"
          else
            echo "RESOLUTION_SUCCESS=false" >> $GITHUB_OUTPUT
            echo "HAS_CHANGES=false" >> $GITHUB_OUTPUT
            echo "⚠️ OpenHands completed without changes"
          fi
          
          echo "ISSUE_NUMBER=$ISSUE_NUMBER" >> $GITHUB_OUTPUT
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          LLM_MODEL: ${{ vars.LLM_MODEL || 'anthropic/claude-sonnet-4-20250514' }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Create Pull Request
        if: steps.openhands.outputs.HAS_CHANGES == 'true'
        id: create_pr
        run: |
          # PATHを確実に設定
          export PATH="/root/.local/bin:$PATH"
          
          echo "🔧 Creating Pull Request..."
          
          ISSUE_NUMBER="${{ steps.openhands.outputs.ISSUE_NUMBER }}"
          TIMESTAMP=$(date -u +"%Y%m%d-%H%M%S")
          BRANCH_NAME="openhands/fix-issue-${ISSUE_NUMBER}-${TIMESTAMP}"
          
          # 新しいブランチを作成してコミット
          git checkout -b "$BRANCH_NAME"
          git add .
          git commit -m "🤖 OpenHands: Fix for issue #${ISSUE_NUMBER}"
          git push origin "$BRANCH_NAME"
          
          # シンプルなPR作成
          curl -X POST \
            -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
            -H "Content-Type: application/json" \
            -d "{\"title\":\"🤖 OpenHands: Fix for issue #${ISSUE_NUMBER}\",\"head\":\"${BRANCH_NAME}\",\"base\":\"main\",\"body\":\"🤖 OpenHands による自動修正\",\"draft\":true}" \
            "${{ github.api_url }}/repos/${{ github.repository }}/pulls" > pr_response.json
          
          PR_NUMBER=$(grep -o '"number":[0-9]*' pr_response.json | cut -d':' -f2 | head -1)
          echo "PR_NUMBER=${PR_NUMBER}" >> $GITHUB_OUTPUT
          echo "✅ PR created: #${PR_NUMBER}"

      - name: Post results
        if: always()
        run: |
          echo "📝 Posting results..."
          
          ISSUE_NUMBER="${{ steps.openhands.outputs.ISSUE_NUMBER }}"
          HAS_CHANGES="${{ steps.openhands.outputs.HAS_CHANGES }}"
          PR_NUMBER="${{ steps.create_pr.outputs.PR_NUMBER }}"
          
          if [ "$HAS_CHANGES" = "true" ] && [ -n "$PR_NUMBER" ]; then
            COMMENT_BODY="🎉 OpenHands完了！ドラフトPR #${PR_NUMBER} を作成しました。"
          elif [ "$HAS_CHANGES" = "true" ]; then
            COMMENT_BODY="🎉 OpenHandsが変更を作成しましたが、PR作成に失敗しました。"
          else
            COMMENT_BODY="⚠️ OpenHandsを実行しましたが、変更は検出されませんでした。"
          fi
          
          curl -X POST \
            -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
            -H "Content-Type: application/json" \
            -d "{\"body\":\"${COMMENT_BODY}\"}" \
            "${{ github.api_url }}/repos/${{ github.repository }}/issues/${ISSUE_NUMBER}/comments"

      - name: Add completion reaction
        if: always()
        run: |
          echo "🎯 Adding completion reaction..."
          
          SUCCESS="${{ steps.openhands.outputs.RESOLUTION_SUCCESS }}"
          HAS_CHANGES="${{ steps.openhands.outputs.HAS_CHANGES }}"
          
          if [ "$SUCCESS" = "true" ] && [ "$HAS_CHANGES" = "true" ]; then
            REACTION_CONTENT="+1"
          else
            REACTION_CONTENT="-1"
          fi
          
          case "${{ github.event_name }}" in
            "issue_comment")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/comments/${{ github.event.comment.id }}/reactions"
              ;;
            "issues")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/${{ github.event.issue.number }}/reactions"
              ;;
            "pull_request"|"pull_request_review"|"pull_request_review_comment")
              REACTION_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/${{ github.event.pull_request.number }}/reactions"
              ;;
          esac
          
          if [ -n "$REACTION_URL" ]; then
            curl -X POST \
              -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
              -H "Content-Type: application/json" \
              -d "{\"content\":\"${REACTION_CONTENT}\"}" \
              "$REACTION_URL" || echo "⚠️ Failed to add reaction"
            echo "✅ Added ${REACTION_CONTENT} reaction"
          fi
```
