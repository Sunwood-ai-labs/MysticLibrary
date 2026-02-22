---
title: "setup cc company"
sourcePath: "prompts/coding/claude-code-company/setup-cc-company.sh"
locale: "en"
contentKind: "script"
---
> This page is generated from the prompts source tree.
> Source: `prompts/coding/claude-code-company/setup-cc-company.sh`

```bash
#!/bin/bash

# 🚀 Claude Code Company セットアップ
set -e

# 基本チェック
if ! command -v tmux &> /dev/null; then
    echo "❌ tmuxがインストールされていません"
    exit 1
fi

# シェル設定
RC_FILE="$HOME/.bashrc"
[[ $SHELL == *"zsh"* ]] && RC_FILE="$HOME/.zshrc"

# Claude設定を追加
cat >> "$RC_FILE" << 'EOF'

# Claude Company
alias cc="claude --dangerously-skip-permissions"

start_claude_company() {
    local session="claude-company"
    
    # tmuxセッション内チェック
    if [[ -n "$TMUX" ]]; then
        echo "❌ tmuxセッション内では実行できません。exitしてから実行してください。"
        return 1
    fi
    
    # セッション削除・作成
    tmux kill-session -t "$session" 2>/dev/null || true
    tmux new-session -d -s "$session"
    
    # 基本セットアップ（5つのpaneに分割）
    tmux split-window -h -t "$session"
    tmux split-window -v -t "$session"
    tmux select-pane -t "$session:0.0"
    tmux split-window -v -t "$session"
    tmux select-pane -t "$session:0.2"
    tmux split-window -v -t "$session"
    tmux select-layout -t "$session" tiled
    
    # pane IDを取得
    local pane_ids=($(tmux list-panes -t "$session" -F "#{pane_id}"))
    echo "Pane IDs: ${pane_ids[@]}"
    echo "Pane count: ${#pane_ids[@]}"
    
    # Claude起動（pane 1以降、メインpane 0は除く）
    for i in $(seq 1 $((${#pane_ids[@]} - 1))); do
        local pane_id="${pane_ids[$i]}"
        echo "Starting Worker $i on pane $pane_id"
        tmux send-keys -t "$pane_id" "clear && echo '🤖 Worker $i ($pane_id) Ready!' && cc" C-m
        sleep 0.3
    done
    
    echo "🎉 Claude Company 起動完了！"
    tmux attach-session -t "$session"
}

send_task() {
    local pane_num="$1"
    shift
    local task="$*"
    local session="claude-company"
    
    local pane_ids=($(tmux list-panes -t "$session" -F "#{pane_id}"))
    local main_pane="${pane_ids[0]}"
    local target_pane="${pane_ids[$pane_num]}"
    
    echo "📋 Worker $pane_num にタスク送信..."
    tmux send-keys -t "$target_pane" "$task。完了時: tmux send-keys -t $main_pane '[Worker$pane_num] 完了' C-m" C-m
}

clear_workers() {
    local session="claude-company"
    local pane_ids=($(tmux list-panes -t "$session" -F "#{pane_id}"))
    
    for i in $(seq 1 $((${#pane_ids[@]} - 1))); do
        local pane_id="${pane_ids[$i]}"
        tmux send-keys -t "$pane_id" "/clear" C-m
        sleep 0.1
    done
    echo "🧹 全ワーカークリア完了"
}

alias cstart='start_claude_company'
alias ctask='send_task'
alias cclear='clear_workers'
EOF

echo "✅ セットアップ完了！"
echo
echo "使用方法:"
echo "  source ~/.bashrc"
echo "  cstart"
echo "  ctask 1 ファイル一覧作成して"
```
