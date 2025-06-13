# Project: phidata-cookbook-jp

```plaintext
OS: nt
Directory: C:\Prj\phidata-cookbook-jp

├─ cookbook/
│  ├─ agents/
│  │  ├─ tmp/
│  │  │  ├─ analyze_movie_ratings.py
│  │  │  ├─ analyze_movie_ratings_no_viz.py
│  │  │  ├─ average_rating_analysis.py
│  │  ├─ 01_web_search.py
│  │  ├─ 02_finance_agent.py
│  │  ├─ 03_agent_team.py
│  │  ├─ 04_reasoning_agent.py
│  │  ├─ 05_rag_agent.py
│  │  ├─ 06_playground.py
│  │  ├─ 07_monitoring.py
│  │  ├─ 08_debugging.py
│  │  ├─ 09_python_agent.py
│  │  ├─ 10_data_analyst.py
│  │  ├─ 11_structured_output.py
│  │  ├─ 12_python_function_as_tool.py
│  │  ├─ 13_image_agent.py
│  │  ├─ 14_image_generator.py
│  │  ├─ 15_cli_app.py
│  │  ├─ 16_generate_video.py
│  │  ├─ 17_intermediate_steps.py
│  │  ├─ 18_is_9_11_bigger_than_9_9.py
│  │  ├─ 19_response_as_variable.py
│  │  ├─ 20_system_prompt.py
│  │  ├─ 21_multiple_tools.py
│  │  ├─ 22_agent_metrics.py
│  │  ├─ 23_research_agent.py
│  │  ├─ agents.db
│  │  ├─ README.md
│  │  ├─ requirements.txt
│  │  ├─ zoom.py
│  │  ├─ __init__.py
├─ app.py
├─ README.md
├─ requirements.txt
```

## .

`.env.example`

```plaintext
# GitHubアクセストークン（コラボレーター招待用）
GITHUB_TOKEN=your_github_personal_access_token_here

# 以下は他の機能で使用する可能性のあるトークンの例です。記載しておくと後々便利です。
# GITHUB_ACCESS_TOKEN=ghp_xxxxx
# YOUR_PERSONAL_ACCESS_TOKEN_IRIS=ghp_yyyyy
# GEMINI_API_KEY=AIzzzzz
```

`app.py`

```python
import streamlit as st
import os

try:
    with open("README.md", "r", encoding="utf-8") as f:
        readme_content = f.read()
    st.markdown(readme_content, unsafe_allow_html=True)
except FileNotFoundError:
    st.error("README.mdが見つかりませんでした。")
```

`README.md`

```markdown
<p align="center">
  <img src="docs/phidata-cookbook-jp.png" width="100%">
  <h1 align="center">🌟 phidata-cookbook-jp 🌟</h1>
</p>
<p align="center">
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp">
    <img alt="GitHub Repo" src="https://img.shields.io/badge/github-phidata--cookbook--jp-blue?logo=github">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/Sunwood-ai-labs/phidata-cookbook-jp?color=green">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Sunwood-ai-labs/phidata-cookbook-jp?style=social">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/releases">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/Sunwood-ai-labs/phidata-cookbook-jp?include_prereleases&style=flat-square">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/Sunwood-ai-labs/phidata-cookbook-jp">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/pulls">
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/network/members">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/Sunwood-ai-labs/phidata-cookbook-jp?style=social">
  </a>
  <a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/watchers">
    <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/Sunwood-ai-labs/phidata-cookbook-jp?style=social">
  </a>
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Sunwood-ai-labs/phidata-cookbook-jp">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Sunwood-ai-labs/phidata-cookbook-jp">
</p>
<h2 align="center">
  ～ phidata Cookbook 日本語解説プロジェクト ～

<a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/blob/main/README.md"><img src="https://img.shields.io/badge/ドキュメント-日本語-white.svg" alt="JA doc"/></a>
<a href="https://github.com/Sunwood-ai-labs/phidata-cookbook-jp/blob/main/docs/README.en.md"><img src="https://img.shields.io/badge/english-document-white.svg" alt="EN doc"></a>
</h2>
<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai" alt="OpenAI">
  <img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google" alt="Google Gemini">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github" alt="GitHub">
  <img src="https://img.shields.io/badge/Actions-2088FF?style=for-the-badge&logo=github-actions" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/YAML-CB171E?style=for-the-badge&logo=yaml" alt="YAML">
  <img src="https://img.shields.io/badge/pip-3775A9?style=for-the-badge&logo=pypi" alt="pip">
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown" alt="Markdown">
  <img src="https://img.shields.io/badge/phidata-FF6B6B?style=for-the-badge" alt="phidata">
</p>

> [!IMPORTANT]
> このリポジトリは、[phidata](https://github.com/phidatahq/phidata)の公式cookbookを日本語で解説し、より理解しやすく再構成したものです。AI開発における実践的なサンプルコードと詳細な解説を提供します。

## 🚀 プロジェクト概要

phidata-cookbook-jpは、phidataのcookbookサンプル集を日本語で詳細に解説するプロジェクトです。特にAIエージェントの実装に焦点を当て、基本から応用まで段階的に学べる構成となっています。バージョン: `v0.1.0`

## 🆕 最新情報

- **v0.1.0リリース**: 公式phidata cookbookの`agents`フォルダ内の全サンプルコードを日本語化し、詳細な解説を追加しました。23個のAIエージェント実装例と、セットアップから実行までのステップバイステップガイドを提供しています。英語READMEも更新されました。  レポジトリ名も変更されました。  多くの新機能と改善が加わりました。


## ✨ 主な機能

- 詳細な日本語解説：各サンプルコードに詳細なコメントと説明を追加
- 実践的なサンプル：23種類のAIエージェント実装例を提供
- 段階的な学習構成：基礎から応用まで、順を追って学習可能
- 環境構築ガイド：必要なツールやAPIの設定方法を解説
- 実行手順の詳細化：各サンプルの実行方法を具体的に説明


## 📦 インストール手順

1. リポジトリのクローン:
   ```bash
   git clone https://github.com/Sunwood-ai-labs/phidata-cookbook-jp.git
   cd phidata-cookbook-jp
   ```

2. 仮想環境の作成と有効化:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate     # Windows
   ```

3. 依存パッケージのインストール:
   ```bash
   pip install -r requirements.txt
   ```

4. 環境変数の設定:  `.env.example`を`.env`にコピーして、必要なAPIキーなどを設定してください。


## 🌿 プロジェクト構造

cookbook/
├─ agents/               # AIエージェントのサンプル集
│  ├─ 01_web_search.py  # Webサーチエージェント
│  ├─ 02_finance_agent.py # 金融分析エージェント
│  ├─ ...               # その他のエージェント実装 (23個)
├─ app.py              # Streamlitアプリケーション
├─ requirements.txt    # 依存パッケージリスト


## 📚 学習コンテンツ

`cookbook/agents`フォルダには、様々なAIエージェントの実装例があります。Web検索、金融分析、画像生成、動画生成など、多様なタスクに対応したエージェントが用意されています。詳細は各ファイルのコメントと、`cookbook/agents/README.md`を参照してください。


## 🤝 コントリビューション

本プロジェクトへの貢献を歓迎します。バグ報告、機能提案、コードの改善、解説の改善、新しいサンプルの提案など、様々な貢献をGitHubのIssueやPull Requestでお待ちしております。


## 📄 ライセンス

このプロジェクトはMITライセンスで提供されています。


## 🙏 謝辞

- iris-s-coon
- Maki 

## 🔗 参考リンク

- [phidata公式ドキュメント](https://docs.phidata.com)
- [phidata GitHub](https://github.com/phidatahq/phidata)
- [コミュニティフォーラム](https://community.phidata.com/)

---

phidata-cookbook-jpで、実践的なAIエージェント開発のスキルを身につけましょう！
```

`requirements.txt`

```plaintext
aira
sourcesage
```

## prompts

### prompts\coding\codex

`prompts\coding\codex\CodeXInstaller.sh`

```sh
#!/bin/bash
# Codex セットアップスクリプト
# Ubuntu/WSLに開発環境をセットアップするためのカラフルなインストーラー

# カラー設定
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}Codex セットアップスクリプトを開始します${NC}"
echo -e "${YELLOW}===========================================${NC}"

# システムアップデート
echo -e "${CYAN}システムを更新しています...${NC}"
sudo apt update && sudo apt upgrade -y

# Pythonとpipのインストール
echo -e "${CYAN}Pythonとpipをインストールしています...${NC}"
sudo apt install -y python3 python3-pip
echo -e "${GREEN}Python $(python3 --version) インストール完了!${NC}"
echo -e "${GREEN}Pip $(pip3 --version | awk '{print $2}') インストール完了!${NC}"

# nmonのインストール
echo -e "${CYAN}nmonをインストールしています...${NC}"
sudo apt install -y nmon
echo -e "${GREEN}nmon インストール完了!${NC}"

# Node Version Manager (nvm)のインストール
echo -e "${CYAN}nvmをインストールしています...${NC}"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# nvmの設定を反映させる
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 最新のLTS版Nodeをインストール
echo -e "${CYAN}Node.js (LTS)をインストールしています...${NC}"
nvm install --lts
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
echo -e "${GREEN}Node.js ${NODE_VERSION} インストール完了!${NC}"
echo -e "${GREEN}npm ${NPM_VERSION} インストール完了!${NC}"

# @openai/codexとopen-codexをインストール
echo -e "${CYAN}Codex関連パッケージをグローバルにインストールしています...${NC}"
npm install -g @openai/codex
npm install -g open-codex
echo -e "${GREEN}@openai/codex インストール完了!${NC}"
echo -e "${GREEN}open-codex インストール完了!${NC}"

# GitHub CLI (gh)のインストール - 修正版
echo -e "${CYAN}GitHub CLIをインストールしています...${NC}"
# 古い方法ではなく、公式の新しい方法を使用
type -p curl >/dev/null || sudo apt install curl -y
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
echo -e "${GREEN}GitHub CLI $(gh --version | head -n 1) インストール完了!${NC}"

# uvのインストール
echo -e "${CYAN}uv (Python高速パッケージマネージャー)をインストールしています...${NC}"
# 必要な依存関係をインストール
sudo apt install -y build-essential curl

# インストールスクリプトを使用
curl -sSf https://astral.sh/uv/install.sh | sh

# パスを通す
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
export PATH="$HOME/.cargo/bin:$PATH"

echo -e "${GREEN}uv インストール完了!${NC}"
echo -e "${MAGENTA}注意: uvを使用するには新しいターミナルを開くか、'source ~/.bashrc'を実行してください${NC}"

# 結果の表示
echo -e "${YELLOW}===========================================${NC}"
echo -e "${BLUE}インストール結果:${NC}"
echo -e "${GREEN}Python バージョン: $(python3 --version)${NC}"
echo -e "${GREEN}pip バージョン: $(pip3 --version | awk '{print $2}')${NC}"
echo -e "${GREEN}Node バージョン: ${NODE_VERSION}${NC}"
echo -e "${GREEN}npm バージョン: ${NPM_VERSION}${NC}"
echo -e "${GREEN}@openai/codex: $(npm list -g @openai/codex | grep @openai/codex || echo 'インストール済み')${NC}"
echo -e "${GREEN}open-codex: $(npm list -g open-codex | grep open-codex || echo 'インストール済み')${NC}"
echo -e "${GREEN}GitHub CLI バージョン: $(gh --version | head -n 1)${NC}"
echo -e "${GREEN}nmon: $(which nmon)${NC}"
echo -e "${GREEN}uv: $(which uv 2>/dev/null || echo 'インストール後に新しいターミナルで利用可能になります')${NC}"

echo -e "${MAGENTA}Codex セットアップが完了しました!${NC}"
echo -e "${CYAN}新しいターミナルを開くか、以下のコマンドを実行して変更を適用してください:${NC}"
echo -e "${YELLOW}source ~/.bashrc${NC}"
```

### prompts\coding\claude-code-company

`prompts\coding\claude-code-company\setup-cc-company.sh`

```sh
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

`prompts\coding\claude-code-company\create-user-cc-company.sh`

```sh
#!/bin/bash

# 🚀 Claude Code ユーザー作成スクリプト
# 使用方法: sudo ./create-user.sh

set -e

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# root権限チェック
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ このスクリプトはroot権限で実行してください${RESET}"
   echo -e "${YELLOW}   sudo $0${RESET}"
   exit 1
fi

echo -e "${BOLD}${CYAN}"
echo "╔══════════════════════════════════════════════════════════╗"
echo "║           🚀 Claude Code User Setup 🚀                ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo -e "${RESET}"

# ユーザー名を引数から取得、デフォルトは cc-company
USERNAME="${1:-cc-company}"
USER_HOME="/home/$USERNAME"

echo -e "${BLUE}📋 設定情報:${RESET}"
echo -e "${CYAN}  ユーザー名: $USERNAME${RESET}"
echo -e "${CYAN}  ホーム: $USER_HOME${RESET}"
echo

# 既存ユーザーチェック
if id "$USERNAME" &>/dev/null; then
    echo -e "${YELLOW}⚠️  ユーザー '$USERNAME' が既に存在します${RESET}"
    echo -e "${RED}削除して再作成しますか？ (y/N): ${RESET}"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo -e "${RED}🗑️  既存ユーザーを削除中...${RESET}"
        
        # プロセス終了
        pkill -9 -u "$USERNAME" 2>/dev/null || true
        sleep 1
        
        # ユーザー削除
        userdel -r "$USERNAME" 2>/dev/null || true
        groupdel "$USERNAME" 2>/dev/null || true
        
        echo -e "${GREEN}✅ 既存ユーザーを削除しました${RESET}"
    else
        echo -e "${YELLOW}⚠️  処理を中止します${RESET}"
        exit 0
    fi
fi

# ユーザー作成
echo -e "${BLUE}👤 ユーザー作成中...${RESET}"
useradd -m -s /bin/bash "$USERNAME"
usermod -aG sudo "$USERNAME"

# パスワード設定
echo -e "${BLUE}🔑 パスワードを設定してください:${RESET}"
passwd "$USERNAME"

# sudo権限（パスワードなし）
echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > "/etc/sudoers.d/$USERNAME"
chmod 440 "/etc/sudoers.d/$USERNAME"

# SSH設定
echo -e "${BLUE}🔐 SSH設定中...${RESET}"
SSH_DIR="$USER_HOME/.ssh"
mkdir -p "$SSH_DIR"

# rootのSSHキーをコピー
if [[ -f "/root/.ssh/authorized_keys" ]]; then
    cp "/root/.ssh/authorized_keys" "$SSH_DIR/authorized_keys"
    echo -e "${GREEN}✅ SSH鍵をコピーしました${RESET}"
else
    touch "$SSH_DIR/authorized_keys"
    echo -e "${YELLOW}⚠️  SSH鍵が見つかりません。手動で設定してください${RESET}"
fi

# 権限設定（SSH鍵生成前に実行）
chown -R "$USERNAME:$USERNAME" "$SSH_DIR"
chmod 700 "$SSH_DIR"
chmod 600 "$SSH_DIR/authorized_keys"

# SSH鍵生成
sudo -u "$USERNAME" ssh-keygen -t ed25519 -f "$SSH_DIR/id_ed25519" -N '' -C "$USERNAME@$(hostname)"

# 生成後の権限設定
chmod 600 "$SSH_DIR/id_ed25519"
chmod 644 "$SSH_DIR/id_ed25519.pub"

# 基本ディレクトリ作成
echo -e "${BLUE}📁 ディレクトリ作成中...${RESET}"
DIRS=("projects" "scripts" "logs" "sessions")
for dir in "${DIRS[@]}"; do
    mkdir -p "$USER_HOME/$dir"
done

chown -R "$USERNAME:$USERNAME" "$USER_HOME"

# 基本パッケージインストール
echo -e "${BLUE}📦 必要パッケージインストール中...${RESET}"
apt-get update -qq
apt-get install -y tmux curl wget git

# ユーザー初期設定
echo -e "${BLUE}⚙️  ユーザー設定中...${RESET}"
sudo -u "$USERNAME" bash << 'USERSETUP'
# .bashrc設定
cat >> ~/.bashrc << 'EOF'

# ═══════════════════════════════════════════════════════════════
# 🚀 CC Company User Settings
# ═══════════════════════════════════════════════════════════════

# 基本エイリアス
alias ll='ls -alF'
alias c='clear'
alias ..='cd ..'

# 色付きプロンプト
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '

# 作業ディレクトリ
export PROJECTS_DIR="$HOME/projects"
export LOGS_DIR="$HOME/logs"

# 便利エイリアス
alias projects='cd $PROJECTS_DIR'
alias logs='cd $LOGS_DIR'

echo "🚀 Welcome to CC Company!"
echo "   Projects: $PROJECTS_DIR"
echo "   Logs: $LOGS_DIR"

# ═══════════════════════════════════════════════════════════════
EOF

# git設定
git config --global user.name "CC Company"
git config --global user.email "$USER@cc-company.local"
git config --global init.defaultBranch main
USERSETUP

# 切り替えスクリプト作成
echo -e "${BLUE}🔧 切り替えスクリプト作成中...${RESET}"
cat > "/usr/local/bin/switch-to-$USERNAME" << EOF
#!/bin/bash
echo "🚀 Switching to $USERNAME..."
sudo -i -u $USERNAME
EOF
chmod +x "/usr/local/bin/switch-to-$USERNAME"

# rootエイリアス追加
if [[ -f "/root/.bashrc" ]]; then
    if ! grep -q "alias $USERNAME=" "/root/.bashrc"; then
        echo >> "/root/.bashrc"
        echo "# CC Company User" >> "/root/.bashrc"
        echo "alias $USERNAME='switch-to-$USERNAME'" >> "/root/.bashrc"
    fi
fi

echo
echo -e "${BOLD}${GREEN}🎉 ユーザー作成完了！${RESET}"
echo
echo -e "${CYAN}📋 作成情報:${RESET}"
echo -e "${YELLOW}  ユーザー名: $USERNAME${RESET}"
echo -e "${YELLOW}  ホーム: $USER_HOME${RESET}"
echo -e "${YELLOW}  パスワードなしsudo: 有効${RESET}"
echo

echo -e "${CYAN}🔑 SSH公開鍵:${RESET}"
if [[ -f "$SSH_DIR/id_ed25519.pub" ]]; then
    # SSH公開鍵をマスク表示
    pub_key=$(cat "$SSH_DIR/id_ed25519.pub")
    key_type=$(echo "$pub_key" | cut -d' ' -f1)
    key_comment=$(echo "$pub_key" | cut -d' ' -f3-)
    key_body=$(echo "$pub_key" | cut -d' ' -f2)
    key_start=${key_body:0:8}
    key_end=${key_body: -8}
    masked_key="$key_type ${key_start}...${key_end} $key_comment"
    
    echo -e "${YELLOW}  $masked_key${RESET}"
    echo -e "${CYAN}  📁 完全な公開鍵: $SSH_DIR/id_ed25519.pub${RESET}"
    echo
else
    echo -e "${RED}  SSH鍵の生成に失敗しました${RESET}"
fi

echo -e "${CYAN}🚀 使用方法:${RESET}"
echo -e "${YELLOW}1. ユーザー切り替え:${RESET}"
echo -e "${CYAN}   su - $USERNAME${RESET}"
echo -e "${CYAN}   # または${RESET}"
echo -e "${CYAN}   $USERNAME${RESET}"
echo
echo -e "${YELLOW}2. SSH公開鍵の確認:${RESET}"
echo -e "${CYAN}   cat $SSH_DIR/id_ed25519.pub${RESET}"
echo
echo -e "${YELLOW}3. Claude Code設定:${RESET}"
echo -e "${CYAN}   ./setup-claude.sh${RESET}"
echo

echo -e "${GREEN}✅ セットアップ完了！${RESET}"
```

## cookbook

### cookbook\agents

`cookbook\agents\01_web_search.py`

```python
"""
Webサーチ機能を持つAIアシスタントのデモンストレーション

このスクリプトは、Web検索機能を活用してユーザーの質問に回答する
AIアシスタントの基本的な使用方法を示します。

主な機能:
- Web検索ツールの統合
- 検索結果に基づく回答生成
- 情報の正確性と最新性の確保
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo

# Web検索機能を持つエージェントの作成
web_agent = Agent(
    name="web_agent",
    model=OpenAIChat(id="gpt-4o"),  # または "gpt-3.5-turbo" を使用
    tools=[DuckDuckGo()],
    instructions=[
        "あなたは優秀なリサーチ専門家です。",
        "Web検索を活用して最新の情報を収集します",
        "信頼できる情報源からデータを取得します",
        "検索結果を分析し、正確な回答を提供します",
        "情報の出典を明確に示します"
    ],
    show_tool_calls=True,
    markdown=True,
)

# エージェントの実行例
if __name__ == "__main__":
    web_agent.print_response(
        "2024年の人工知能の主要なトレンドについて教えてください。",
        stream=True
    )
```

`cookbook\agents\02_finance_agent.py`

```python
"""
金融分析AIアシスタントのデモンストレーション

このスクリプトは、金融データの分析と投資アドバイスを提供する
専門的なAIアシスタントの実装例を示します。
実行前に以下のパッケージのインストールが必要です：
pip install yfinance

主な機能:
- 株価データの取得と分析
- アナリストの推奨事項の確認
- 企業情報の取得
- 企業ニュースの分析
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# 金融アシスタントの作成
finance_agent = Agent(
    name="finance_agent",
    model=OpenAIChat(id="gpt-4o"),  # または "gpt-3.5-turbo" を使用
    tools=[YFinanceTools(
        stock_price=True,           # 株価データの取得を有効化
        analyst_recommendations=True,# アナリスト推奨の取得を有効化
        company_info=True,          # 企業情報の取得を有効化
        company_news=True           # 企業ニュースの取得を有効化
    )],
    instructions=[
        "あなたは経験豊富な金融アドバイザーです。",
        "データはできるだけ表形式で表示します",
        "株価データと市場動向を分析します",
        "アナリストの推奨事項を考慮します",
        "企業の財務情報と最新ニュースを確認します",
        "客観的なデータに基づいた判断を提供します",
        "投資リスクについての注意事項を必ず含めます",
        "専門用語には簡単な説明を添えます"
    ],
    show_tool_calls=True,
    markdown=True,
)

# アシスタントの実行例
if __name__ == "__main__":
    # 例: NVIDIAの分析を要求
    finance_agent.print_response(
        """
        NVIDIAの投資分析をお願いします：
        1. 現在の株価と推移
        2. アナリストの推奨事項
        3. 最近の重要ニュース
        4. 投資リスクの評価
        """,
        stream=True
    )
```

`cookbook\agents\03_agent_team.py`

```python
"""
AIエージェントチームのデモンストレーション

このスクリプトは、複数のAIエージェントが協力して問題を解決する方法を示します。
各エージェントは特定の役割を持ち、チームとして効率的に作業を進めます。

実行前に必要なパッケージのインストール：
pip install yfinance duckduckgo-search

主な機能:
- 複数のエージェントによるチーム編成
- 役割に基づいた作業分担
- Web検索と金融データの統合分析
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.yfinance import YFinanceTools

# リサーチャーエージェントの定義
researcher = Agent(
    name="researcher",
    role="Research Expert",
    model=OpenAIChat(id="gpt-4"),  # または "gpt-3.5-turbo" を使用
    tools=[DuckDuckGo()],
    instructions=[
        "あなたは優秀なリサーチアシスタントです。",
        "与えられたトピックについて詳細な調査を行います",
        "信頼できる情報源から正確な情報を収集します",
        "重要なポイントを簡潔にまとめます",
        "必ず情報源を含めます",
        "データは可能な限り表形式で表示します"
    ],
    show_tool_calls=True,
    markdown=True,
)

# 金融アナリストエージェントの定義
finance_analyst = Agent(
    name="finance_analyst",
    role="Financial Expert",
    model=OpenAIChat(id="gpt-4o"),  # または "gpt-3.5-turbo" を使用
    tools=[YFinanceTools(
        stock_price=True,
        analyst_recommendations=True,
        company_info=True,
        company_news=True
    )],
    instructions=[
        "あなたは金融分析の専門家です",
        "データは必ず表形式で表示します",
        "株価データと市場動向を分析します",
        "アナリストの推奨事項を考慮します",
        "企業の財務情報と最新ニュースを確認します",
        "投資リスクについての注意事項を含めます"
    ],
    show_tool_calls=True,
    markdown=True,
)

# チームエージェントの作成
agent_team = Agent(
    name="research_team",
    team=[researcher, finance_analyst],
    instructions=[
        "情報源を必ず含めて報告してください",
        "データは表形式で表示してください",
        "分析結果は簡潔に要約してください",
        "専門用語には説明を添えてください",
        "重要なポイントは箇条書きでまとめてください"
    ],
    show_tool_calls=True,
    markdown=True,
)

# メイン処理
if __name__ == "__main__":
    # チームによる分析の実行例
    agent_team.print_response(
        """
        NVIDIAについて以下の分析をお願いします：
        1. 最新の市場動向とニュース
        2. 株価分析とアナリストの推奨事項
        3. 今後の成長機会とリスク要因
        
        総合的な分析と投資判断のポイントをまとめてください。
        """,
        stream=True
    )
```

`cookbook\agents\04_reasoning_agent.py`

```python
"""
推論エージェントのデモンストレーション

このスクリプトは、複雑な問題に対して論理的な推論を行い、
段階的に解決策を導き出すAIエージェントの実装例を示します。

主な機能:
- 論理的思考プロセスの展開
- 段階的な問題解決
- 推論過程の明確な説明
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat

# 推論エージェントの設定
reasoning_agent = Agent(
    name="Reasoning Agent",
    model=OpenAIChat(id="gpt-4o"),
    instructions=[
        "問題を段階的に分析してください",
        "各ステップでの推論過程を明確に説明してください",
        "結論に至るまでの思考の流れを示してください",
        "必要に応じて複数の視点から検討してください"
    ],
    show_tool_calls=True,
    markdown=True,
)

# 実行例：論理パズルの解決
query = """
以下の論理パズルを解いてください：

3つの箱があり、1つには金貨、1つには銀貨、1つは空です。
各箱には表示があり、以下のうち1つだけが真実です：

箱1: 「この箱には金貨が入っている」
箱2: 「この箱は空である」
箱3: 「銀貨は箱1に入っている」

各箱の中身を論理的に導き出してください。
"""

reasoning_agent.print_response(query, stream=True)
```

`cookbook\agents\05_rag_agent.py`

```python
"""
AI駆動のレシピ推薦システム

このスクリプトは、PDFから料理レシピの知識を抽出し、
OpenAIのGPT-4を使用して料理のレシピや手順について
インタラクティブな質問応答を行うシステムを実装します。

主な機能:
- PDF形式のレシピ本からの知識抽出
- ベクトルデータベースを使用した効率的な検索
- 自然言語での料理手順の説明
- コンテキストを考慮した質問応答

必要なパッケージのインストール:
pip install openai lancedb tantivy pypdf sqlalchemy
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.embedder.openai import OpenAIEmbedder
from phi.knowledge.pdf import PDFUrlKnowledgeBase
from phi.vectordb.lancedb import LanceDb, SearchType

# PDFからレシピの知識ベースを作成
knowledge_base = PDFUrlKnowledgeBase(
    # タイ料理のレシピPDFを指定
    urls=["https://phi-public.s3.amazonaws.com/recipes/ThaiRecipes.pdf"],
    # ベクトルデータベースにLanceDBを使用
    vector_db=LanceDb(
        table_name="recipes",  # テーブル名の設定
        uri="tmp/lancedb",     # データベースの保存先
        search_type=SearchType.vector,  # ベクトル検索の使用
        # テキスト埋め込みモデルの設定
        embedder=OpenAIEmbedder(model="text-embedding-3-small"),
    ),
)
# 初回実行後はコメントアウトしてください（知識ベースは既にロード済み）
knowledge_base.load()

# エージェントの設定
agent = Agent(
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # 知識ベースの追加
    knowledge=knowledge_base,
    # 以下の指示をエージェントに与える
    instructions=[
        "レシピの手順を分かりやすく説明してください",
        "材料の代替案があれば提案してください",
        "調理のコツやポイントも含めて説明してください",
        "質問に応じて具体的なアドバイスを提供してください"
    ],
    show_tool_calls=True,  # ツール呼び出しの表示
    markdown=True,         # マークダウン形式での出力
)

# ココナッツミルクスープのレシピについて質問
agent.print_response(
    "ガラムガルとチキンのココナッツミルクスープの作り方を教えてください",
    stream=True  # 回答をストリーミング形式で表示
)
```

`cookbook\agents\06_playground.py`

```python
"""
マルチエージェント分析プレイグラウンド

このスクリプトは、Web検索と金融データ分析が可能な
2つの特化型AIエージェントを実装し、それらを
インタラクティブなプレイグラウンドで利用できるようにします。

主な機能:
- Webからの情報収集と分析
- 株式市場データのリアルタイム分析
- 会社情報や市場ニュースの取得
- 過去の対話履歴の保存と参照
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.storage.agent.sqlite import SqlAgentStorage
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.yfinance import YFinanceTools
from phi.playground import Playground, serve_playground_app

# Web検索特化型エージェントの設定
web_agent = Agent(
    name="Web Agent",  # エージェント名
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルの使用
    # DuckDuckGoを使用したWeb検索ツールの追加
    tools=[DuckDuckGo()],
    # エージェントへの指示
    instructions=[
        "回答には必ず情報源を含めてください",
        "信頼性の高いソースを優先して参照してください",
        "最新の情報を提供するよう心がけてください",
        "複数の情報源を比較検証してください"
    ],
    # 対話履歴のSQLiteでの保存設定
    storage=SqlAgentStorage(
        table_name="web_agent",
        db_file="agents.db"
    ),
    add_history_to_messages=True,  # 過去の対話履歴を考慮
    markdown=True,  # マークダウン形式での出力
)

# 金融分析特化型エージェントの設定
finance_agent = Agent(
    name="Finance Agent",  # エージェント名
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルの使用
    # 金融データ分析ツールの設定
    tools=[YFinanceTools(
        stock_price=True,          # 株価データの取得
        analyst_recommendations=True,  # アナリスト推奨
        company_info=True,         # 企業情報
        company_news=True          # 企業ニュース
    )],
    # エージェントへの指示
    instructions=[
        "データは表形式で分かりやすく表示してください",
        "重要な財務指標を強調して説明してください",
        "市場動向との関連性を考慮して分析してください",
        "リスク要因についても言及してください"
    ],
    # 対話履歴のSQLiteでの保存設定
    storage=SqlAgentStorage(
        table_name="finance_agent",
        db_file="agents.db"
    ),
    add_history_to_messages=True,  # 過去の対話履歴を考慮
    markdown=True,  # マークダウン形式での出力
)

# プレイグラウンドアプリケーションの設定
app = Playground(
    agents=[finance_agent, web_agent]  # 両エージェントを統合
).get_app()

# アプリケーションの起動
if __name__ == "__main__":
    # 開発モードでプレイグラウンドを起動
    serve_playground_app(
        "06_playground:app",
        reload=True  # コード変更時の自動リロード
    )
```

`cookbook\agents\07_monitoring.py`

```python
"""
AIによるクリエイティブライティング

このスクリプトは、AIエージェントを使用して
創造的な短編ホラーストーリーを生成する
シンプルな実装例を示します。

主な機能:
- 短編ホラー作品の自動生成
- マークダウン形式での出力
- エージェントの動作モニタリング
"""

from phi.agent import Agent

# クリエイティブライティング用エージェントの設定
agent = Agent(
    # 基本設定
    markdown=True,     # マークダウン形式での出力を有効化
    monitoring=True,   # エージェントの動作モニタリングを有効化
    # エージェントへの指示
    instructions=[
        "独創的で印象的な展開を心がけてください",
        "読者の感情に訴えかける表現を使用してください",
        "簡潔ながら余韻の残る結末を目指してください",
        "視覚的なイメージを喚起する描写を心がけてください"
    ]
)

# 2文のホラーストーリーを生成
agent.print_response(
    "2文で表現する恐怖の物語を作成してください",
    stream=True  # 生成過程をリアルタイムで表示
)
```

`cookbook\agents\08_debugging.py`

```python
"""
デバッグモード付きクリエイティブAIシステム

このスクリプトは、AIエージェントの動作を詳細に
モニタリングしながら、創造的な文章生成を
行うシステムの実装例を示します。

主な機能:
- 短編ホラー作品の自動生成
- 詳細なデバッグ情報の表示
- マークダウン形式での出力
- エージェントの思考プロセスの可視化
"""

from phi.agent import Agent

# デバッグ機能付きクリエイティブエージェントの設定
agent = Agent(
    # 基本設定
    markdown=True,    # マークダウン形式での出力を有効化
    debug_mode=True,  # デバッグモードを有効化
    # エージェントへの指示
    instructions=[
        "独創的で印象的な展開を心がけてください",
        "読者の感情に訴えかける表現を使用してください",
        "簡潔ながら余韻の残る結末を目指してください",
        "視覚的なイメージを喚起する描写を心がけてください"
    ]
)

# 2文のホラーストーリーを生成
agent.print_response(
    "2文で表現する恐怖の物語を作成してください",
    stream=True  # 生成過程をリアルタイムで表示
)
```

`cookbook\agents\09_python_agent.py`

```python
"""
IMDBデータ分析エージェント

このスクリプトは、IMDBの映画データを分析する
Pythonコードを自動生成・実行できるAIエージェントを
実装したシステムです。

主な機能:
- CSVファイルからの映画データの読み込み
- 統計分析の自動実行
- 必要なパッケージの自動インストール
- 分析結果の可視化と説明
"""

from pathlib import Path

from phi.agent.python import PythonAgent
from phi.model.openai import OpenAIChat
from phi.file.local.csv import CsvFile

# 作業ディレクトリの設定
cwd = Path(__file__).parent.resolve()
# 一時ファイル用ディレクトリの作成
tmp = cwd.joinpath("tmp")
if not tmp.exists():
    tmp.mkdir(exist_ok=True, parents=True)

# Python実行可能なAIエージェントの設定
python_agent = PythonAgent(
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # 作業ディレクトリの指定
    base_dir=tmp,
    # 分析対象ファイルの設定
    files=[
        CsvFile(
            path="https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv",
            description="IMDBから取得した映画情報のデータセット。" \
                      "評価、ジャンル、監督、出演者などの情報を含む。",
        )
    ],
    # エージェントへの指示
    instructions=[
        "データの前処理手順を説明してください",
        "分析結果は視覚的に分かりやすく表示してください",
        "統計的な考察も含めて解説してください",
        "異常値や欠損値の処理方法も明示してください"
    ],
    markdown=True,         # マークダウン形式での出力
    pip_install=True,     # 必要なパッケージの自動インストール
    show_tool_calls=True  # ツール呼び出しの表示
)

# 映画の平均評価点を分析
python_agent.print_response(
    "映画の平均評価点を分析してください",
    stream=True  # 分析過程をリアルタイムで表示
)
```

`cookbook\agents\10_data_analyst.py`

```python
"""
DuckDBを使用した映画データ分析システム

このスクリプトは、DuckDBを使用してIMDBの映画データを
分析し、統計情報をアスキーアートで可視化する
データアナリストエージェントを実装します。

主な機能:
- DuckDBによる効率的なデータ分析
- ヒストグラムのアスキーアート表示
- 最適なバケットサイズの自動選択
- 分析プロセスの詳細な説明

必要なパッケージのインストール:
pip install duckdb
"""

import json

from phi.model.openai import OpenAIChat
from phi.agent.duckdb import DuckDbAgent

# データアナリストエージェントの設定
data_analyst = DuckDbAgent(
    # GPT-4モデルの使用
    model=OpenAIChat(model="gpt-4o"),
    markdown=True,  # マークダウン形式での出力
    # データモデルの定義
    semantic_model=json.dumps(
        {
            "tables": [
                {
                    "name": "movies",
                    "description": "IMDBから取得した映画情報のデータセット。" \
                                "評価点、公開年、ジャンルなどの情報を含む。",
                    "path": "https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv",
                }
            ]
        },
        indent=2,
    ),
    # エージェントへの指示
    instructions=[
        "分析手法の選択理由を明確に説明してください",
        "データの特性を考慮した可視化を行ってください",
        "統計的な意味を持つバケットサイズを選択してください",
        "視覚的に分かりやすい表示を心がけてください",
        "日本語で応答してください"
    ]
)

# 評価点の分布を分析
data_analyst.print_response(
    """
    映画の評価点についてヒストグラムを作成してください。
    適切なバケットサイズを選択し、その選択理由も説明してください。
    結果はアスキーアートで見やすく表示してください。
    """,
    stream=True  # 分析過程をリアルタイムで表示
)
```

`cookbook\agents\11_structured_output.py`

```python
"""
AIによる映画脚本生成システム

このスクリプトは、OpenAIのGPT-4を使用して
映画の脚本アイデアを自動生成する高度な
システムを実装します。同期・非同期両方の
実行モードをサポートし、構造化された出力を
リッチなフォーマットで表示します。

主な機能:
- 映画脚本の自動生成
- JSONモードと構造化出力の比較
- 非同期処理のサポート
- リッチな表示形式での出力
"""

import asyncio
from typing import List, Optional

from rich.align import Align
from rich.console import Console
from rich.panel import Panel
from rich.pretty import Pretty
from rich.spinner import Spinner
from rich.text import Text
from pydantic import BaseModel, Field

from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat

# コンソール出力の設定
console = Console()


# 映画脚本のデータモデルを定義
class MovieScript(BaseModel):
    setting: str = Field(..., description="ブロックバスター映画にふさわしい舞台設定を提供してください。")
    ending: str = Field(..., description="映画のエンディング。指定がない場合はハッピーエンドにしてください。")
    genre: str = Field(
        ..., description="映画のジャンル。指定がない場合はアクション、スリラー、ロマンティックコメディから選択してください。"
    )
    name: str = Field(..., description="この映画のタイトルを設定してください")
    characters: List[str] = Field(..., description="この映画の登場人物名のリスト。")
    storyline: str = Field(..., description="映画のストーリーラインを3文で表現してください。エキサイティングな内容にしてください！")


# JSONモードを使用するエージェントの設定
json_mode_agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    description="映画脚本を作成するAIアシスタントです。",
    response_model=MovieScript,
)

# 構造化出力を使用するエージェントの設定
structured_output_agent = Agent(
    model=OpenAIChat(id="gpt-4o-2024-08-06"),
    description="映画脚本を作成するAIアシスタントです。",
    response_model=MovieScript,
    structured_outputs=True,
)


# 出力表示用のヘルパー関数群
def display_header(
    message: str,
    style: str = "bold cyan",
    panel_title: Optional[str] = None,
    subtitle: Optional[str] = None,
    border_style: str = "bright_magenta",
):
    """
    スタイル付きヘッダーをパネル内に表示します。
    """
    title = Text(message, style=style)
    panel = Panel(Align.center(title), title=panel_title, subtitle=subtitle, border_style=border_style, padding=(1, 2))
    console.print(panel)


def display_spinner(message: str, style: str = "green"):
    """
    メッセージ付きのスピナーを表示します。
    """
    spinner = Spinner("dots", text=message, style=style)
    console.print(spinner)


def display_content(content, title: str = "Content"):
    """
    Richライブラリを使用してコンテンツを表示します。
    """
    pretty_content = Pretty(content, expand_all=True)
    panel = Panel(pretty_content, title=title, border_style="blue", padding=(1, 2))
    console.print(panel)


# 同期実行用の関数
def run_agents():
    try:
        # JSONモードエージェントの実行
        display_header("MovieScriptモデルを使用したエージェントを実行", panel_title="エージェント1")
        with console.status("エージェント1を実行中...", spinner="dots"):
            run_json_mode_agent: RunResponse = json_mode_agent.run("ニューヨーク")
        display_content(run_json_mode_agent.content, title="エージェント1の応答")

        # 構造化出力エージェントの実行
        display_header(
            "MovieScriptモデルと構造化出力を使用したエージェントを実行", panel_title="エージェント2"
        )
        with console.status("エージェント2を実行中...", spinner="dots"):
            run_structured_output_agent: RunResponse = structured_output_agent.run("ニューヨーク")
        display_content(run_structured_output_agent.content, title="エージェント2の応答")
    except Exception as e:
        console.print(f"[bold red]エージェントの実行中にエラーが発生しました: {e}[/bold red]")


# 非同期実行用の関数
async def run_agents_async():
    try:
        # JSONモードエージェントの非同期実行
        display_header("MovieScriptモデルを使用したエージェントを非同期実行", panel_title="非同期エージェント1")
        with console.status("エージェント1を実行中...", spinner="dots"):
            async_run_json_mode_agent: RunResponse = await json_mode_agent.arun("ニューヨーク")
        display_content(async_run_json_mode_agent.content, title="非同期エージェント1の応答")

        # 構造化出力エージェントの非同期実行
        display_header(
            "MovieScriptモデルと構造化出力を使用したエージェントを非同期実行",
            panel_title="非同期エージェント2",
        )
        with console.status("エージェント2を実行中...", spinner="dots"):
            async_run_structured_output_agent: RunResponse = await structured_output_agent.arun("ニューヨーク")
        display_content(async_run_structured_output_agent.content, title="非同期エージェント2の応答")
    except Exception as e:
        console.print(f"[bold red]非同期エージェントの実行中にエラーが発生しました: {e}[/bold red]")


# メイン実行部分
if __name__ == "__main__":
    # 同期実行
    run_agents()
    # 非同期実行
    asyncio.run(run_agents_async())
```

`cookbook\agents\12_python_function_as_tool.py`

```python
"""
Hacker Newsトップ記事分析システム

このスクリプトは、Hacker Newsのトップ記事を
自動取得し、AIエージェントが内容を要約・分析する
システムを実装します。

主な機能:
- Hacker News APIからのリアルタイムデータ取得
- トップ記事の自動収集と整形
- AI による記事の要約と分析
- ストリーミング形式での結果表示
"""

import json
import httpx

from phi.agent import Agent


def get_top_hackernews_stories(num_stories: int = 10) -> str:
    """Hacker Newsのトップ記事を取得する関数

    Args:
        num_stories (int): 取得する記事数（デフォルト: 10）

    Returns:
        str: トップ記事のJSON文字列
    """

    # トップ記事のIDを取得
    response = httpx.get("https://hacker-news.firebaseio.com/v0/topstories.json")
    story_ids = response.json()

    # 記事の詳細情報を取得
    stories = []
    for story_id in story_ids[:num_stories]:
        # 各記事の詳細情報をAPI経由で取得
        story_response = httpx.get(
            f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json"
        )
        story = story_response.json()
        # 本文テキストは除外（要約対象外）
        if "text" in story:
            story.pop("text", None)
        stories.append(story)
    return json.dumps(stories)


# ニュース分析用エージェントの設定
agent = Agent(
    # ツールの設定
    tools=[get_top_hackernews_stories],
    # 動作の可視化設定
    show_tool_calls=True,  # ツール呼び出しを表示
    markdown=True,         # マークダウン形式で出力
    # エージェントへの指示
    instructions=[
        "記事の要点を簡潔に抽出してください",
        "重要なトピックスを優先的に取り上げてください",
        "技術的な内容は分かりやすく説明してください",
        "記事間の関連性があれば言及してください"
    ]
)

# トップ5記事の要約を生成
agent.print_response(
    "Hacker Newsのトップ5記事を要約してください",
    stream=True  # 要約をストリーミング形式で表示
)
```

`cookbook\agents\13_image_agent.py`

```python
"""
画像比較分析システム

このスクリプトは、OpenAIのGPT-4を使用して
画像の内容を分析し、画像間の違いを
検出・説明するシステムを実装します。

主な機能:
- 画像内容の詳細な分析
- 複数画像の比較検証
- 視覚的特徴の言語化
- マークダウン形式での結果表示
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat

# 画像分析用エージェントの設定
agent = Agent(
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # マークダウン形式での出力を有効化
    markdown=True,
    # エージェントへの指示
    instructions=[
        "画像の視覚的特徴を詳細に説明してください",
        "特徴的な要素や目立つ部分に注目してください",
        "画像間の違いを細かく分析してください",
        "自然な言葉で分かりやすく説明してください"
    ]
)

# 画像分析と比較を実行
agent.print_response(
    "これらの画像には何が写っていますか？画像間に違いはありますか？",
    # 分析対象の画像を指定
    images=[
        # ウィスコンシン州マディソンの自然遊歩道の画像
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/" \
        "Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
        # 同じ画像を比較のために再度指定
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/" \
        "Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
    ],
    stream=True  # 分析結果をストリーミング形式で表示
)
```

`cookbook\agents\14_image_generator.py`

```python
"""
DALL-E画像生成システム

このスクリプトは、OpenAIのGPT-4とDALL-Eを組み合わせて
自然言語の説明から画像を生成する
AIシステムを実装します。

主な機能:
- 自然言語による画像生成
- GPT-4による生成指示の最適化
- デバッグモードでの詳細な動作確認
- 生成画像のURL提供
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.dalle import Dalle

# 画像生成エージェントの設定
agent = Agent(
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # DALL-E画像生成ツールの追加
    tools=[Dalle()],
    # 出力設定
    markdown=True,      # マークダウン形式での出力
    debug_mode=True,    # デバッグモードの有効化
    # エージェントへの指示
    instructions=[
        "DALL-Eを使用して画像を生成するAIアシスタントとして動作します",
        "生成された画像のURLを必ず応答に含めてください",
        "生成画像の特徴や意図した表現について説明を添えてください",
        "画像生成の過程で考慮した要素についても言及してください",
        "生成された画像の品質や特徴を確認し、フィードバックを提供してください"
    ],
)

# シャム猫の画像を生成
agent.print_response(
    "白いシャム猫の画像を生成してください。" \
    "優雅で気品のある雰囲気を表現してください。",
    stream=True  # 生成過程をリアルタイムで表示
)
```

`cookbook\agents\15_cli_app.py`

```python
"""
インタラクティブ検索アシスタント

このスクリプトは、GPT-4とDuckDuckGoを組み合わせた
対話型の検索・情報分析システムを実装します。
チャット履歴を保持し、文脈を考慮した
インテリジェントな応答を提供します。

主な機能:
- Web検索との連携
- チャット履歴の管理
- 文脈を考慮した応答
- デバッグ情報の表示
- CLIベースの対話インターフェース
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo

# 検索対話エージェントの設定
agent = Agent(
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # DuckDuckGo検索ツールの追加
    tools=[DuckDuckGo()],
    # 動作設定
    show_tool_calls=True,          # ツール呼び出しの表示
    read_chat_history=True,        # チャット履歴の読み込み
    add_history_to_messages=True,  # 履歴を応答に反映
    num_history_responses=3,       # 保持する履歴応答数
    # add_history_to_messages_num=True,  # 履歴番号の付与（必要に応じて有効化）
    debug_mode=True,               # デバッグモードの有効化
    # エージェントへの指示
    instructions=[
        "ユーザーの質問に応じて適切な検索を行ってください",
        "検索結果を要約し、関連情報を整理して提供してください",
        "過去の会話文脈を考慮して応答を生成してください",
        "情報源を明確に示し、信頼性の高い情報を優先してください",
        "必要に応じて追加の質問や確認を行ってください"
    ],
)

# CLIアプリケーションの起動
agent.cli_app(
    markdown=True,  # マークダウン形式での出力を有効化
)
```

`cookbook\agents\16_generate_video.py`

```python
"""
AI動画生成システム

このスクリプトは、ModelsLabsのVideoGen APIを使用して
自然言語の説明から動画を自動生成する
システムを実装します。

主な機能:
- テキストプロンプトからの動画生成
- 生成過程のリアルタイム監視
- 詳細なデバッグ情報の表示
- 生成動画のURL提供
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.models_labs import ModelsLabs

# 動画生成エージェントの設定
agent = Agent(
    # エージェントの基本設定
    name="Video Generation Agent",         # エージェント名
    agent_id="video-generation-agent",     # エージェントID
    # GPT-4モデルの使用
    model=OpenAIChat(id="gpt-4o"),
    # VideoGen APIツールの追加
    tools=[ModelsLabs()],
    # 出力設定
    markdown=True,       # マークダウン形式での出力
    debug_mode=True,     # デバッグモードの有効化
    show_tool_calls=True,  # ツール呼び出しの表示
    # エージェントへの指示
    instructions=[
        "VideoGen APIを使用して動画を生成するアシスタントとして動作します",
        "動画生成要求には generate_video 関数を使用してください",
        "特に指定がない限り、generate_video 関数には 'prompt' パラメータのみを渡してください",
        "生成状況（status）と推定所要時間（eta）を応答に含めてください",
        "生成完了後は、APIからの動画URLのみを返してください"
    ],
    # システムメッセージ
    system_message="ユーザーから明示的な指定がない限り、" \
                  "generate_video 関数のデフォルトパラメータは変更しないでください。"
)

# 猫の動画を生成
agent.print_response(
    "ボールで遊ぶ猫の動画を生成してください。" \
    "可愛らしく楽しげな雰囲気を演出してください。",
    stream=True  # 生成過程をリアルタイムで表示
)
```

`cookbook\agents\17_intermediate_steps.py`

```python
"""
株価取得エージェントのデモンストレーション

このスクリプトは、YFinance APIを使用して株価データを取得し、
ストリーミング形式でレスポンスを返すエージェントの実装例を示します。

主な機能:
- リアルタイムの株価データ取得
- ストリーミング形式でのレスポンス
- 中間処理ステップの表示
"""

# 必要なライブラリのインポート
from typing import Iterator
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# エージェントの設定
# YFinance APIを使用して株価データを取得するエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[YFinanceTools(stock_price=True)],  # 株価取得ツールを有効化
    markdown=True,  # マークダウン形式での出力を有効化
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
)

# エージェントの実行とストリーミングレスポンスの取得
run_stream: Iterator[RunResponse] = agent.run(
    "NVDAの現在の株価を教えてください",  # 株価照会クエリ
    stream=True,  # ストリーミングを有効化
    stream_intermediate_steps=True  # 中間ステップの表示を有効化
)

# ストリーミングレスポンスの処理と表示
for chunk in run_stream:
    # messagesを除外したレスポンスデータを表示
    pprint(chunk.model_dump(exclude={"messages"}))
    # 区切り線の表示
    print("---" * 20)
```

`cookbook\agents\18_is_9_11_bigger_than_9_9.py`

```python
"""
計算エージェントのデモンストレーション

このスクリプトは、基本的な数値計算と比較を行うエージェントの実装例を示します。
四則演算（加減乗除）の機能を持ち、数値の大小比較などの判断を行います。

主な機能:
- 四則演算の実行
- 数値の比較分析
- 結果の論理的な説明
"""

# 必要なライブラリのインポート
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.calculator import Calculator

# 計算エージェントの設定
# 四則演算と比較分析が可能なエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[Calculator(
        add=True,      # 加算機能を有効化
        subtract=True, # 減算機能を有効化
        multiply=True, # 乗算機能を有効化
        divide=True    # 除算機能を有効化
    )],
    instructions=[
        "数値の比較には計算ツールを使用してください",
        "結果の根拠を明確に説明してください"
    ],
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
    markdown=True,         # マークダウン形式での出力を有効化
)

# 数値比較の実行例1
agent.print_response("9.11は9.9より大きいですか？")

# 数値比較の実行例2
agent.print_response("9.11と9.9のどちらが大きいですか？")
```

`cookbook\agents\19_response_as_variable.py`

```python
"""
総合株式情報取得エージェントのデモンストレーション

このスクリプトは、YFinance APIを使用して以下の株式関連情報を
包括的に取得・分析するエージェントの実装例を示します。

取得可能な情報:
- 株価データ
- アナリストの推奨情報
- 企業情報
- 企業ニュース

出力形式:
- 表形式での情報表示
- 整形されたマークダウン形式
"""

# 必要なライブラリのインポート
from typing import Iterator  # noqa
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# 総合株式情報エージェントの設定
# 複数の株式情報取得機能を持つエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[YFinanceTools(
        stock_price=True,              # 株価取得機能を有効化
        analyst_recommendations=True,   # アナリスト推奨情報取得を有効化
        company_info=True,             # 企業情報取得を有効化
        company_news=True              # 企業ニュース取得を有効化
    )],
    instructions=[
        "可能な限り情報を表形式で表示してください",
        "データは見やすく整理して提示してください"
    ],
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
    markdown=True,         # マークダウン形式での出力を有効化
)

# 単一レスポンスでの株価情報取得
run_response: RunResponse = agent.run("NVDAの現在の株価を教えてください")
pprint(run_response)

# ストリーミングレスポンスでの株価情報取得（コメントアウト状態）
# run_response_stream: Iterator[RunResponse] = agent.run(
#     "NVDAの現在の株価を教えてください", 
#     stream=True  # ストリーミングモードを有効化
# )
# for response in run_response_stream:
#     pprint(response)  # 逐次的にレスポンスを表示
```

`cookbook\agents\20_system_prompt.py`

```python
"""
ストーリー生成エージェントのデモンストレーション

このスクリプトは、与えられたテーマに基づいて
2文の短いストーリーを生成するエージェントの実装例を示します。

主な機能:
- 指定されたテーマでの物語生成
- 簡潔な2文構成
- 創造的なストーリーテリング
"""

# 必要なライブラリのインポート
from phi.agent import Agent

# ストーリー生成エージェントの設定
# 2文のストーリーを生成するエージェントを初期化
agent = Agent(
    system_prompt="以下のテーマについて2文のストーリーを作成してください："  # システムプロンプトの設定
)

# ストーリー生成の実行
agent.print_response("西暦12000年の愛のかたち。")
```

`cookbook\agents\21_multiple_tools.py`

```python
"""
総合企業分析レポート生成エージェントのデモンストレーション

このスクリプトは、企業の財務情報とニュースを統合し、
包括的な分析レポートを生成するエージェントの実装例を示します。

必要なパッケージのインストール:
pip install openai duckduckgo-search yfinance

主な機能:
- 株式市場データの取得と分析
- ウェブ検索によるニュース収集
- 表形式でのデータ表示
- ストリーミング形式でのレポート生成
"""

# 必要なライブラリのインポート
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools
from phi.tools.duckduckgo import DuckDuckGo

# 総合レポート生成エージェントの設定
# 財務情報とニュース検索機能を持つエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[
        DuckDuckGo(),                    # ウェブ検索機能を有効化
        YFinanceTools(enable_all=True)   # 全ての財務情報取得機能を有効化
    ],
    instructions=[
        "データは表形式で分かりやすく表示してください",
        "財務情報とニュースを適切に整理して提示してください"
    ],
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
    markdown=True,         # マークダウン形式での出力を有効化
)

# 総合企業分析レポートの生成
agent.print_response(
    "NVDAについて、財務情報と最新ニュースを含む詳細なレポートを作成してください",
    stream=True  # ストリーミング形式での出力を有効化
)
```

`cookbook\agents\22_agent_metrics.py`

```python
"""
メトリクス分析付き株価取得エージェントのデモンストレーション

このスクリプトは、株価データの取得に加えて、
実行時の詳細なメトリクス情報を表示するエージェントの実装例を示します。

主な機能:
- 株価データの取得
- ストリーミング形式でのレスポンス
- メッセージごとのメトリクス表示
- 集計メトリクスの分析
"""

# 必要なライブラリのインポート
from typing import Iterator
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools
from phi.utils.pprint import pprint_run_response

# 株価取得エージェントの設定
# メトリクス分析機能を含むエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[YFinanceTools(stock_price=True)],  # 株価取得ツールを有効化
    markdown=True,  # マークダウン形式での出力を有効化
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
)

# ストリーミング形式での株価情報取得
run_stream: Iterator[RunResponse] = agent.run(
    "NVDAの現在の株価を教えてください",
    stream=True  # ストリーミングモードを有効化
)
# レスポンスの表示（マークダウン形式）
pprint_run_response(run_stream, markdown=True)

# メッセージごとのメトリクス表示
if agent.run_response.messages:
    for message in agent.run_response.messages:
        if message.role == "assistant":
            # メッセージ内容の表示
            if message.content:
                print(f"メッセージ内容: {message.content}")
            # ツール呼び出し情報の表示
            elif message.tool_calls:
                print(f"使用ツール: {message.tool_calls}")
            # メッセージごとのメトリクス表示
            print("---" * 5, "個別メトリクス", "---" * 5)
            pprint(message.metrics)
            print("---" * 20)

# 集計メトリクスの表示
print("---" * 5, "総合メトリクス", "---" * 5)
pprint(agent.run_response.metrics)
```

`cookbook\agents\23_research_agent.py`

```python
"""
ニュース記事作成エージェントのデモンストレーション

このスクリプトは、指定されたトピックについて包括的な調査を行い、
ニューヨークタイムズスタイルの記事を生成するエージェントの実装例を示します。

必要なパッケージのインストール:
pip install openai duckduckgo-search newspaper4k lxml_html_clean phidata

主な機能:
- ウェブ検索による情報収集
- 記事本文の抽出と分析
- 高品質な記事の生成
- ストリーミング形式での出力
"""

# 必要なライブラリのインポート
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.newspaper4k import Newspaper4k

# ニュース記事作成エージェントの設定
# 検索と記事抽出機能を持つエージェントを初期化
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[
        DuckDuckGo(),   # ウェブ検索機能を有効化
        Newspaper4k()    # 記事抽出機能を有効化
    ],
    description="ニューヨークタイムズの上級調査記者として記事を執筆します。",
    instructions=[
        "指定されたトピックについて、上位5つの関連リンクを検索してください。",
        "各URLから記事本文を抽出してください（アクセス不可能なURLは無視します）。",
        "収集した情報を分析し、ニューヨークタイムズ水準の記事を作成してください。",
        "日本語で応答して"
    ],
    markdown=True,  # マークダウン形式での出力を有効化
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
    add_datetime_to_instructions=True,  # 指示に日時情報を追加
    # debug_mode=True,  # デバッグモードの有効化（必要に応じてコメント解除）
)

# 記事生成の実行
agent.print_response(
    "シミュレーション理論について",  # 記事のトピック
    stream=True  # ストリーミング形式での出力を有効化
)
```

`cookbook\agents\agents.db` - Error reading file: 'utf-8' codec can't decode byte 0xf8 in position 102: invalid start byte

`cookbook\agents\README.md`

```markdown
<div align="center">
  <img src="https://raw.githubusercontent.com/Sunwood-ai-labs/phidata-cookbook-jp/refs/heads/main/docs/74ccfadcf3dc58a1d3d695087ba3c01e8818ff97ebb8457de21a464e.png" width="100%">

# 🚀 phidata Agents クックブック

</div>

このリポジトリは、[phidata](https://github.com/phidatahq/phidata)の[Agentsサンプル](https://github.com/phidatahq/phidata/tree/main/cookbook/agents)集を日本語化し、実践的なチュートリアルとして再構成したものです。AIエージェントの基本から応用まで、ステップバイステップで学ぶことができます。

## 📚 学習コンテンツ

### 基礎編: AIエージェントの基本
1. [Webサーチエージェント](01_web_search.py)
   - Web検索機能を持つ基本的なAIエージェントの実装
   - 検索結果の整形と表示方法の習得
   - 情報源の適切な引用方法

2. [金融分析エージェント](02_finance_agent.py)
   - 株式市場データの取得と分析
   - 投資戦略の提案機能の実装
   - 財務データの視覚化

3. [エージェントチーム](03_agent_team.py)
   - 複数エージェントの協調動作
   - 役割分担と情報共有の実装
   - チームワークフローの設計

### 発展編: 特殊機能の実装
4. [推論エージェント](04_reasoning_agent.py)
   - 段階的な問題解決プロセス
   - 論理的思考の実装方法
   - 推論過程の可視化

5. [RAGエージェント](05_rag_agent.py)
   - PDFからの知識ベース構築
   - ベクトルデータベースの活用
   - コンテキストを考慮した回答生成

6. [プレイグラウンド](06_playground.py)
   - インタラクティブなUIの実装
   - 複数エージェントの統合管理
   - 対話履歴の保存と参照

### 監視・デバッグ編
7. [モニタリング](07_monitoring.py)
   - エージェントの動作監視
   - パフォーマンス分析
   - ログ管理の実装

8. [デバッグ機能](08_debugging.py)
   - エラー検出と対処
   - デバッグ情報の表示
   - トラブルシューティング手法

### 実践編: 特化型エージェント
9. [Pythonエージェント](09_python_agent.py)
   - IMDBデータの分析
   - Pythonコードの自動生成と実行
   - データ可視化の実装

10. [データアナリスト](10_data_analyst.py)
    - DuckDBを使用したSQL分析
    - データの統計処理
    - アスキーアートでの可視化

### 応用編: 高度な機能実装
11. [構造化出力](11_structured_output.py)
    - Pydanticモデルの活用
    - 映画脚本生成システム
    - 非同期処理の実装

12. [Python関数ツール](12_python_function_as_tool.py)
    - Hacker Newsデータの取得と分析
    - カスタムツールの実装
    - リアルタイムデータ処理

13. [画像分析エージェント](13_image_agent.py)
    - 画像内容の分析
    - 視覚的特徴の言語化
    - 複数画像の比較

14. [画像生成エージェント](14_image_generator.py)
    - DALL-Eを使用した画像生成
    - 生成プロセスの制御
    - 画像品質の最適化

### 実用編: 実践的なアプリケーション
15. [CLIアプリケーション](15_cli_app.py)
    - コマンドライン対話の実装
    - 検索履歴の管理
    - ユーザー入力の処理

16. [動画生成](16_generate_video.py)
    - VideoGen APIの活用
    - 動画生成プロセスの制御
    - 進捗状況の監視

17. [中間処理ステップ](17_intermediate_steps.py)
    - 処理過程の可視化
    - 段階的な結果の表示
    - デバッグ情報の活用

### 特殊編: 特定タスク向けエージェント
18. [数値比較](18_is_9_11_bigger_than_9_9.py)
    - 数値計算の実装
    - 比較ロジックの構築
    - 結果の説明生成

19. [レスポンス変数](19_response_as_variable.py)
    - 応答データの構造化
    - 変数としての処理
    - データ型の最適化

20. [システムプロンプト](20_system_prompt.py)
    - プロンプトエンジニアリング
    - システム設定の最適化
    - 応答品質の向上

### エンタープライズ編: ビジネス向け機能
21. [複数ツール統合](21_multiple_tools.py)
    - 複数APIの統合
    - データソースの連携
    - 総合分析機能の実装

22. [エージェントメトリクス](22_agent_metrics.py)
    - パフォーマンス測定
    - メトリクスの可視化
    - 最適化の指標設定

23. [リサーチエージェント](23_research_agent.py)
    - 包括的な情報収集
    - 記事生成機能
    - 信頼性の評価

## 🎯 前提条件

- Python 3.8以上
- OpenAI APIキー
- 必要に応じて各種APIキー（DALL-E, Zoom等）

## 🛠️ セットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/your-username/phidata-cookbook-jp.git
```

2. 依存パッケージのインストール:
```bash
PS C:\Prj\phidata-cookbook-jp> uv venv 
Using Python 3.10.15
Creating virtualenv at: .venv
Activate with: .venv\Scripts\activate
PS C:\Prj\phidata-cookbook-jp> .venv\Scripts\activate
(phidata-cookbook-jp) PS C:\Prj\phidata-cookbook-jp> uv pip install -U phidata

```



3. 環境変数の設定:
```bash
cp .env.example .env
# .envファイルを編集して必要なAPIキーを設定
```

## 📖 使用方法

1. 各サンプルは独立して実行可能です
2. サンプルコードには詳細なコメントが付与されています
3. 段階的に基礎から応用へと進むことをお勧めします

## 🤝 コントリビューション

- バグ報告や機能要望はIssueで受け付けています
- プルリクエストも歓迎します
- コードの改善案や新しいサンプルの提案も歓迎します

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🔗 参考リンク

- [phidata公式ドキュメント](https://docs.phidata.com)
- [phidata GitHub](https://github.com/phidatahq/phidata)
- [コミュニティフォーラム](https://community.phidata.com/)
```

`cookbook\agents\requirements.txt`

```plaintext
aira
sourcesage

phidata
duckduckgo-search
yfinance

# 10_data_analyst.py
duckdb

# 23_research_agent.py
newspaper4k 
lxml_html_clean
```

`cookbook\agents\zoom.py`

```python
"""
Zoomミーティング自動スケジューリングエージェントのデモンストレーション

このスクリプトは、Zoom APIを使用して会議を自動的にスケジュールし、
会議の詳細情報を管理するエージェントの実装例を示します。

必要な環境変数:
- ZOOM_ACCOUNT_ID: ZoomアカウントID
- ZOOM_CLIENT_ID: ZoomクライアントID
- ZOOM_CLIENT_SECRET: Zoomクライアントシークレット

主な機能:
- Zoomミーティングの自動スケジュール
- 会議詳細情報の取得と表示
- エラーハンドリング
"""

# 必要なライブラリのインポート
import os
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.zoom import ZoomTool

# Zoom API認証情報の取得
ACCOUNT_ID = os.getenv("ZOOM_ACCOUNT_ID")
CLIENT_ID = os.getenv("ZOOM_CLIENT_ID")
CLIENT_SECRET = os.getenv("ZOOM_CLIENT_SECRET")

# カスタムZoomツールクラスの定義
class CustomZoomTool(ZoomTool):
    def schedule_meeting(self, topic: str, start_time: str, duration: int) -> str:
        """
        ミーティングをスケジュールし、詳細情報を整形して返却します
        
        Parameters:
            topic (str): ミーティングの題目
            start_time (str): 開始時刻（ISO 8601形式）
            duration (int): 所要時間（分）
        
        Returns:
            str: フォーマットされたミーティング情報
        """
        response = super().schedule_meeting(topic, start_time, duration)

        if isinstance(response, str):
            import json
            try:
                meeting_info = json.loads(response)
            except json.JSONDecodeError:
                return "ミーティング情報の解析に失敗しました。"
        else:
            meeting_info = response

        if meeting_info:
            meeting_id = meeting_info.get("id")
            join_url = meeting_info.get("join_url")
            start_time = meeting_info.get("start_time")
            return (
                f"ミーティングが正常にスケジュールされました！\n\n"
                f"**ミーティングID:** {meeting_id}\n"
                f"**参加URL:** {join_url}\n"
                f"**開始時刻:** {start_time}"
            )
        else:
            return "申し訳ありません。ミーティングのスケジュールに失敗しました。"

# Zoomツールのインスタンス化
zoom_tool = CustomZoomTool(
    account_id=ACCOUNT_ID,
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET
)

# スケジューリングエージェントの設定
agent = Agent(
    name="Zoom Scheduling Agent",  # エージェント名
    agent_id="zoom-scheduling-agent",  # エージェントID
    model=OpenAIChat(id="gpt-4o"),  # GPT-4モデルを使用
    tools=[zoom_tool],  # カスタムZoomツールを使用
    markdown=True,  # マークダウン形式での出力を有効化
    debug_mode=True,  # デバッグモードを有効化
    show_tool_calls=True,  # ツール呼び出しの表示を有効化
    instructions=[
        "ZoomミーティングをスケジュールするためのエージェントとしてZoom APIを使用します。",
        "ミーティングのスケジュール時には、ZoomToolのschedule_meeting関数を使用します。",
        "特に指定がない限り、schedule_meeting関数には必要最小限のパラメータのみを渡します。",
        "スケジュール後は、ミーティングID、参加URL、開始時刻などの詳細情報を提供します。",
        "時刻は全てISO 8601形式で指定してください（例：'2024-12-28T10:00:00Z'）。",
        "エラーが発生した場合は適切に対応し、ユーザーに通知します。"
    ],
    system_message=(
        "ユーザーから明示的な指定がない限り、schedule_meeting関数のデフォルトパラメータは"
        "変更しないでください。ユーザーに確認する前に、必ずミーティングが正常に"
        "スケジュールされたことを確認してください。"
    ),
)

# エージェントを使用してミーティングをスケジュール
user_input = "「Pythonオートメーション会議」というタイトルで、2024年11月1日の午前11時（UTC）から60分間の会議をスケジュールしてください。"
response = agent.run(user_input)
```

`cookbook\agents\__init__.py`

```python

```

#### cookbook\agents\tmp

`cookbook\agents\tmp\analyze_movie_ratings.py`

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Read the dataset
data_url = 'https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv'
df = pd.read_csv(data_url)

# Check if there are any missing values in the ratings
df['Rating'].isnull().sum()

# Handle missing values by removing them as the number is manageable
df_cleaned = df.dropna(subset=['Rating'])

# Calculate the mean rating
mean_rating = df_cleaned['Rating'].mean()

# Plot the distribution of ratings
plt.figure(figsize=(10, 6))
sns.histplot(df_cleaned['Rating'], bins=30, kde=True)
plt.title('Distribution of Movie Ratings')
plt.xlabel('Rating')
plt.ylabel('Frequency')
plt.axvline(mean_rating, color='r', linestyle='--', label=f'Mean Rating: {mean_rating:.2f}')
plt.legend()
plt.grid(True)
plt.show()

mean_rating
```

`cookbook\agents\tmp\analyze_movie_ratings_no_viz.py`

```python
import pandas as pd

# Step 1: Load data
data_url = "https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv"
data = pd.read_csv(data_url)

# Step 2: Data preprocessing
# Check for missing values in the 'Rating' column
missing_values = data['Rating'].isnull().sum()

# Fill or drop missing values (here we choose to drop them for simplicity)
data = data.dropna(subset=['Rating'])

# Step 3: Statistical Analysis
mean_rating = data['Rating'].mean()
median_rating = data['Rating'].median()
variance_rating = data['Rating'].var()

results = {
    'mean_rating': mean_rating,
    'median_rating': median_rating,
    'variance_rating': variance_rating,
    'missing_values': missing_values
}
```

`cookbook\agents\tmp\average_rating_analysis.py`

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Read the dataset
df = pd.read_csv('https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv')

# Display columns and check for missing values
def preprocess_data(data):
    # Check for missing values in 'Rating' column
    if data['Rating'].isnull().sum() > 0:
        # Fill missing values with the median of the column
        data['Rating'].fillna(data['Rating'].median(), inplace=True)
    return data

# Calculate basic statistics for ratings
def basic_statistics(data):
    mean_rating = data['Rating'].mean()
    median_rating = data['Rating'].median()
    mode_rating = data['Rating'].mode().iloc[0]
    return mean_rating, median_rating, mode_rating

# Visualize the distribution of ratings
def visualize_data(data):
    plt.figure(figsize=(14, 6))
    plt.subplot(1, 2, 1)
    sns.histplot(data['Rating'], kde=True, bins=30)
    plt.title('Distribution of Movie Ratings')
    plt.xlabel('Rating')
    plt.ylabel('Frequency')
    
    plt.subplot(1, 2, 2)
    sns.boxplot(data['Rating'])
    plt.title('Boxplot of Movie Ratings')
    plt.xlabel('Rating')
    
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    # Data Preprocessing
    df = preprocess_data(df)
    
    # Calculate basic statistics
    mean, median, mode = basic_statistics(df)
    
    # Print statistics
    print(f"Mean Rating: {mean:.2f}")
    print(f"Median Rating: {median:.2f}")
    print(f"Mode Rating: {mode:.2f}")
    
    # Visualize
    visualize_data(df)
```



