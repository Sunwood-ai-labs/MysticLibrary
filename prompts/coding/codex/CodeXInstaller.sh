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
