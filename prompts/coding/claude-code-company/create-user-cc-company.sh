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
    cat "$SSH_DIR/id_ed25519.pub"
    echo
fi

echo -e "${CYAN}🚀 使用方法:${RESET}"
echo -e "${YELLOW}1. ユーザー切り替え:${RESET}"
echo -e "${CYAN}   su - $USERNAME${RESET}"
echo -e "${CYAN}   # または${RESET}"
echo -e "${CYAN}   $USERNAME${RESET}"
echo
echo -e "${YELLOW}2. Claude Code設定:${RESET}"
echo -e "${CYAN}   ./setup-claude.sh${RESET}"
echo

echo -e "${GREEN}✅ セットアップ完了！${RESET}"
