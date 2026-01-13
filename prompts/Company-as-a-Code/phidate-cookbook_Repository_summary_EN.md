# phidata-cookbook AI Agent List

phidata-cookbook-jp is an AI development learning project that explains phidata's official cookbook in Japanese and reorganizes it for better understanding. Focused on AI agent implementation, it provides a step-by-step learning structure from basics to applications.

# Project: phidata-cookbook-jp

```plaintext
OS: nt
Directory: C:\Prj\phidata-cookbook-jp

|- cookbook/
|  |- agents/
|  |  |- tmp/
|  |  |  |- analyze_movie_ratings.py
|  |  |  |- analyze_movie_ratings_no_viz.py
|  |  |  |- average_rating_analysis.py
|  |  |- 01_web_search.py
|  |  |- 02_finance_agent.py
|  |  |- 03_agent_team.py
|  |  |- 04_reasoning_agent.py
|  |  |- 05_rag_agent.py
|  |  |- 06_playground.py
|  |  |- 07_monitoring.py
|  |  |- 08_debugging.py
|  |  |- 09_python_agent.py
|  |  |- 10_data_analyst.py
|  |  |- 11_structured_output.py
|  |  |- 12_python_function_as_tool.py
|  |  |- 13_image_agent.py
|  |  |- 14_image_generator.py
|  |  |- 15_cli_app.py
|  |  |- 16_generate_video.py
|  |  |- 17_intermediate_steps.py
|  |  |- 18_is_9_11_bigger_than_9_9.py
|  |  |- 19_response_as_variable.py
|  |  |- 20_system_prompt.py
|  |  |- 21_multiple_tools.py
|  |  |- 22_agent_metrics.py
|  |  |- 23_research_agent.py
|  |  |- agents.db
|  |  |- README.md
|  |  |- requirements.txt
|  |  |- zoom.py
|  |  |- __init__.py
|- app.py
|- README.md
|- requirements.txt
```

## .

`.env.example`

```plaintext
# GitHub access token (for collaborator invitation)
GITHUB_TOKEN=your_github_personal_access_token_here

# Below are example tokens that might be used for other features. Useful to document for later.
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
    st.error("README.md not found.")
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
  ～ phidata Cookbook Japanese Translation Project ～

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
> This repository is a Japanese translation and reorganization of [phidata](https://github.com/phidatahq/phidata)'s official cookbook for better understanding. It provides practical sample code for AI development with detailed explanations.

## 🚀 Project Overview

phidata-cookbook-jp is a project that provides detailed Japanese explanations of phidata's cookbook samples. Focused particularly on AI agent implementation, it offers a step-by-step learning structure from basics to applications. Version: `v0.1.0`

## 🆕 Latest Information

- **v0.1.0 Release**: Fully Japanese-translated all sample codes from the official phidata cookbook's `agents` folder with detailed explanations added. Provided 23 AI agent implementation examples and step-by-step guides from setup to execution. English README also updated. Repository name changed. Many new features and improvements added.


## ✨ Main Features

- Detailed Japanese explanations: Added detailed comments and explanations to each sample code
- Practical samples: Provided 23 types of AI agent implementation examples
- Progressive learning structure: Learn step-by-step from basics to applications
- Environment setup guide: Explains setup of necessary tools and APIs
- Detailed execution instructions: Specifically explains how to run each sample


## 📦 Installation Instructions

1. Clone repository:
   ```bash
   git clone https://github.com/Sunwood-ai-labs/phidata-cookbook-jp.git
   cd phidata-cookbook-jp
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   .venv\Scripts\activate     # Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set environment variables: Copy `.env.example` to `.env` and configure necessary API keys etc.


## 🌿 Project Structure

cookbook/
|- agents/               # AI agent sample collection
|  |- 01_web_search.py  # Web search agent
|  |- 02_finance_agent.py # Financial analysis agent
|  |- ...               # Other agent implementations (23 total)
|- app.py              # Streamlit application
|- requirements.txt    # Dependency package list


## 📚 Learning Content

The `cookbook/agents` folder contains various AI agent implementation examples. Agents are prepared for diverse tasks including web search, financial analysis, image generation, video generation, etc. For details, refer to comments in each file and `cookbook/agents/README.md`.


## 🤝 Contribution

We welcome contributions to this project. Bug reports, feature proposals, code improvements, explanation improvements, and new sample proposals are all accepted via GitHub Issues or Pull Requests.


## 📄 License

This project is provided under the MIT License.


## 🙏 Acknowledgments

- iris-s-coon
- Maki

## 🔗 Related Links

- [phidata official documentation](https://docs.phidata.com)
- [phidata GitHub](https://github.com/phidatahq/phidata)
- [Community forum](https://community.phidata.com/)

---

Master practical AI agent development skills with phidata-cookbook-jp!
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
# Codex setup script
# Colorful installer for setting up development environment on Ubuntu/WSL

# Color settings
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Codex setup script${NC}"
echo -e "${YELLOW}===========================================${NC}"

# System update
echo -e "${CYAN}Updating system...${NC}"
sudo apt update && sudo apt upgrade -y

# Install Python and pip
echo -e "${CYAN}Installing Python and pip...${NC}"
sudo apt install -y python3 python3-pip
echo -e "${GREEN}Python $(python3 --version) installation complete!${NC}"
echo -e "${GREEN}Pip $(pip3 --version | awk '{print $2}') installation complete!${NC}"

# Install nmon
echo -e "${CYAN}Installing nmon...${NC}"
sudo apt install -y nmon
echo -e "${GREEN}nmon installation complete!${NC}"

# Install Node Version Manager (nvm)
echo -e "${CYAN}Installing nvm...${NC}"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Apply nvm settings
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install latest LTS Node
echo -e "${CYAN}Installing Node.js (LTS)...${NC}"
nvm install --lts
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
echo -e "${GREEN}Node.js ${NODE_VERSION} installation complete!${NC}"
echo -e "${GREEN}npm ${NPM_VERSION} installation complete!${NC}"

# Install @openai/codex and open-codex
echo -e "${CYAN}Installing Codex packages globally...${NC}"
npm install -g @openai/codex
npm install -g open-codex
echo -e "${GREEN}@openai/codex installation complete!${NC}"
echo -e "${GREEN}open-codex installation complete!${NC}"

# Install GitHub CLI (gh) - Fixed version
echo -e "${CYAN}Installing GitHub CLI...${NC}"
# Use new official method instead of old one
type -p curl >/dev/null || sudo apt install curl -y
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
echo -e "${GREEN}GitHub CLI $(gh --version | head -n 1) installation complete!${NC}"

# Install uv
echo -e "${CYAN}Installing uv (Python high-speed package manager)...${NC}"
# Install necessary dependencies
sudo apt install -y build-essential curl

# Use installation script
curl -sSf https://astral.sh/uv/install.sh | sh

# Add to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
export PATH="$HOME/.cargo/bin:$PATH"

echo -e "${GREEN}uv installation complete!${NC}"
echo -e "${MAGENTA}Note: Open new terminal or run 'source ~/.bashrc' to use uv${NC}"

# Display results
echo -e "${YELLOW}===========================================${NC}"
echo -e "${BLUE}Installation Results:${NC}"
echo -e "${GREEN}Python version: $(python3 --version)${NC}"
echo -e "${GREEN}pip version: $(pip3 --version | awk '{print $2}')${NC}"
echo -e "${GREEN}Node version: ${NODE_VERSION}${NC}"
echo -e "${GREEN}npm version: ${NPM_VERSION}${NC}"
echo -e "${GREEN}@openai/codex: $(npm list -g @openai/codex | grep @openai/codex || echo 'Installed')${NC}"
echo -e "${GREEN}open-codex: $(npm list -g open-codex | grep open-codex || echo 'Installed')${NC}"
echo -e "${GREEN}GitHub CLI version: $(gh --version | head -n 1)${NC}"
echo -e "${GREEN}nmon: $(which nmon)${NC}"
echo -e "${GREEN}uv: $(which uv 2>/dev/null || echo 'Available in new terminal after installation')${NC}"

echo -e "${MAGENTA}Codex setup complete!${NC}"
echo -e "${CYAN}Open a new terminal or run the following command to apply changes:${NC}"
echo -e "${YELLOW}source ~/.bashrc${NC}"
```

### prompts\coding\claude-code-company

`prompts\coding\claude-code-company\setup-cc-company.sh`

```sh
#!/bin/bash

# 🚀 Claude Code Company Setup
set -e

# Basic check
if ! command -v tmux &> /dev/null; then
    echo "❌ tmux is not installed"
    exit 1
fi

# Shell configuration
RC_FILE="$HOME/.bashrc"
[[ $SHELL == *"zsh"* ]] && RC_FILE="$HOME/.zshrc"

# Add Claude settings
cat >> "$RC_FILE" << 'EOF'

# Claude Company
alias cc="claude --dangerously-skip-permissions"

start_claude_company() {
    local session="claude-company"

    # Check if inside tmux session
    if [[ -n "$TMUX" ]]; then
        echo "❌ Cannot run inside tmux session. exit first then run."
        return 1
    fi

    # Delete/create session
    tmux kill-session -t "$session" 2>/dev/null || true
    tmux new-session -d -s "$session"

    # Basic setup (split into 5 panes)
    tmux split-window -h -t "$session"
    tmux split-window -v -t "$session"
    tmux select-pane -t "$session:0.0"
    tmux split-window -v -t "$session"
    tmux select-pane -t "$session:0.2"
    tmux split-window -v -t "$session"
    tmux select-layout -t "$session" tiled

    # Get pane IDs
    local pane_ids=($(tmux list-panes -t "$session" -F "#{pane_id}"))
    echo "Pane IDs: ${pane_ids[@]}"
    echo "Pane count: ${#pane_ids[@]}"

    # Start Claude (on panes 1+, excluding main pane 0)
    for i in $(seq 1 $((${#pane_ids[@]} - 1))); do
        local pane_id="${pane_ids[$i]}"
        echo "Starting Worker $i on pane $pane_id"
        tmux send-keys -t "$pane_id" "clear && echo '🤖 Worker $i ($pane_id) Ready!' && cc" C-m
        sleep 0.3
    done

    echo "🎉 Claude Company startup complete!"
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

    echo "📋 Sending task to Worker $pane_num..."
    tmux send-keys -t "$target_pane" "$task。Complete时: tmux send-keys -t $main_pane '[Worker$pane_num] Complete' C-m" C-m
}

clear_workers() {
    local session="claude-company"
    local pane_ids=($(tmux list-panes -t "$session" -F "#{pane_id}"))

    for i in $(seq 1 $((${#pane_ids[@]} - 1))); do
        local pane_id="${pane_ids[$i]}"
        tmux send-keys -t "$pane_id" "/clear" C-m
        sleep 0.1
    done
    echo "🧹 All workers cleared"
}

alias cstart='start_claude_company'
alias ctask='send_task'
alias cclear='clear_workers'
EOF

echo "✅ Setup complete!"
echo
echo "Usage:"
echo "  source ~/.bashrc"
echo "  cstart"
echo "  ctask 1 Create file list"
```

`prompts\coding\claude-code-company\create-user-cc-company.sh`

```sh
#!/bin/bash

# 🚀 Claude Code User Creation Script
# Usage: sudo ./create-user.sh

set -e

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# Root privilege check
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ This script must be run with root privileges${RESET}"
   echo -e "${YELLOW}   sudo $0${RESET}"
   exit 1
fi

echo -e "${BOLD}${CYAN}"
echo "╔══════════════════════════════════════════════════════════╗"
echo "║           🚀 Claude Code User Setup 🚀                ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo -e "${RESET}"

# Get username from argument, default is cc-company
USERNAME="${1:-cc-company}"
USER_HOME="/home/$USERNAME"

echo -e "${BLUE}📋 Configuration:${RESET}"
echo -e "${CYAN}  Username: $USERNAME${RESET}"
echo -e "${CYAN}  Home: $USER_HOME${RESET}"
echo

# Existing user check
if id "$USERNAME" &>/dev/null; then
    echo -e "${YELLOW}⚠️  User '$USERNAME' already exists${RESET}"
    echo -e "${RED}Delete and recreate? (y/N): ${RESET}"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo -e "${RED}🗑️  Deleting existing user...${RESET}"

        # Terminate processes
        pkill -9 -u "$USERNAME" 2>/dev/null || true
        sleep 1

        # Delete user
        userdel -r "$USERNAME" 2>/dev/null || true
        groupdel "$USERNAME" 2>/dev/null || true

        echo -e "${GREEN}✅ Deleted existing user${RESET}"
    else
        echo -e "${YELLOW}⚠️  Aborting operation${RESET}"
        exit 0
    fi
fi

# Create user
echo -e "${BLUE}👤 Creating user...${RESET}"
useradd -m -s /bin/bash "$USERNAME"
usermod -aG sudo "$USERNAME"

# Set password
echo -e "${BLUE}🔑 Please set password:${RESET}"
passwd "$USERNAME"

# Sudo privilege (passwordless)
echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > "/etc/sudoers.d/$USERNAME"
chmod 440 "/etc/sudoers.d/$USERNAME"

# SSH configuration
echo -e "${BLUE}🔐 Configuring SSH...${RESET}"
SSH_DIR="$USER_HOME/.ssh"
mkdir -p "$SSH_DIR"

# Copy root's SSH key
if [[ -f "/root/.ssh/authorized_keys" ]]; then
    cp "/root/.ssh/authorized_keys" "$SSH_DIR/authorized_keys"
    echo -e "${GREEN}✅ Copied SSH key${RESET}"
else
    touch "$SSH_DIR/authorized_keys"
    echo -e "${YELLOW}⚠️  SSH key not found. Please configure manually${RESET}"
fi

# Set permissions (before SSH key generation)
chown -R "$USERNAME:$USERNAME" "$SSH_DIR"
chmod 700 "$SSH_DIR"
chmod 600 "$SSH_DIR/authorized_keys"

# SSH key generation
sudo -u "$USERNAME" ssh-keygen -t ed25519 -f "$SSH_DIR/id_ed25519" -N '' -C "$USERNAME@$(hostname)"

# Post-generation permission settings
chmod 600 "$SSH_DIR/id_ed25519"
chmod 644 "$SSH_DIR/id_ed25519.pub"

# Create basic directories
echo -e "${BLUE}📁 Creating directories...${RESET}"
DIRS=("projects" "scripts" "logs" "sessions")
for dir in "${DIRS[@]}"; do
    mkdir -p "$USER_HOME/$dir"
done

chown -R "$USERNAME:$USERNAME" "$USER_HOME"

# Install basic packages
echo -e "${BLUE}📦 Installing necessary packages...${RESET}"
apt-get update -qq
apt-get install -y tmux curl wget git

# User initial setup
echo -e "${BLUE}⚙️  Configuring user...${RESET}"
sudo -u "$USERNAME" bash << 'USERSETUP'
# .bashrc settings
cat >> ~/.bashrc << 'EOF'

# ═══════════════════════════════════════════════════════════════
# 🚀 CC Company User Settings
# ═══════════════════════════════════════════════════════════════

# Basic aliases
alias ll='ls -alF'
alias c='clear'
alias ..='cd ..'

# Colored prompt
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '

# Work directories
export PROJECTS_DIR="$HOME/projects"
export LOGS_DIR="$HOME/logs"

# Convenient aliases
alias projects='cd $PROJECTS_DIR'
alias logs='cd $LOGS_DIR'

echo "🚀 Welcome to CC Company!"
echo "   Projects: $PROJECTS_DIR"
echo "   Logs: $LOGS_DIR"

# ═══════════════════════════════════════════════════════════════
EOF

# git configuration
git config --global user.name "CC Company"
git config --global user.email "$USER@cc-company.local"
git config --global init.defaultBranch main
USERSETUP

# Create switch script
echo -e "${BLUE}🔧 Creating switch script...${RESET}"
cat > "/usr/local/bin/switch-to-$USERNAME" << EOF
#!/bin/bash
echo "🚀 Switching to $USERNAME..."
sudo -i -u $USERNAME
EOF
chmod +x "/usr/local/bin/switch-to-$USERNAME"

# Add root alias
if [[ -f "/root/.bashrc" ]]; then
    if ! grep -q "alias $USERNAME=" "/root/.bashrc"; then
        echo >> "/root/.bashrc"
        echo "# CC Company User" >> "/root/.bashrc"
        echo "alias $USERNAME='switch-to-$USERNAME'" >> "/root/.bashrc"
    fi
fi

echo
echo -e "${BOLD}${GREEN}🎉 User creation complete!${RESET}"
echo
echo -e "${CYAN}📋 Creation Info:${RESET}"
echo -e "${YELLOW}  Username: $USERNAME${RESET}"
echo -e "${YELLOW}  Home: $USER_HOME${RESET}"
echo -e "${YELLOW}  Passwordless sudo: Enabled${RESET}"
echo

echo -e "${CYAN}🔑 SSH Public Key:${RESET}"
if [[ -f "$SSH_DIR/id_ed25519.pub" ]]; then
    # Mask display SSH public key
    pub_key=$(cat "$SSH_DIR/id_ed25519.pub")
    key_type=$(echo "$pub_key" | cut -d' ' -f1)
    key_comment=$(echo "$pub_key" | cut -d' ' -f3-)
    key_body=$(echo "$pub_key" | cut -d' ' -f2)
    key_start=${key_body:0:8}
    key_end=${key_body: -8}
    masked_key="$key_type ${key_start}...${key_end} $key_comment"

    echo -e "${YELLOW}  $masked_key${RESET}"
    echo -e "${CYAN}  📁 Full public key: $SSH_DIR/id_ed25519.pub${RESET}"
    echo
else
    echo -e "${RED}  SSH key generation failed${RESET}"
fi

echo -e "${CYAN}🚀 Usage:${RESET}"
echo -e "${YELLOW}1. Switch user:${RESET}"
echo -e "${CYAN}   su - $USERNAME${RESET}"
echo -e "${CYAN}   # or${RESET}"
echo -e "${CYAN}   $USERNAME${RESET}"
echo
echo -e "${YELLOW}2. Verify SSH public key:${RESET}"
echo -e "${CYAN}   cat $SSH_DIR/id_ed25519.pub${RESET}"
echo
echo -e "${YELLOW}3. Configure Claude Code:${RESET}"
echo -e "${CYAN}   ./setup-claude.sh${RESET}"
echo


echo -e "${GREEN}✅ Setup complete!${RESET}"
```

## cookbook

### cookbook\agents

`cookbook\agents\01_web_search.py`

```python
"""
Demonstration of AI Assistant with Web Search Functionality

This script demonstrates the basic usage of an AI assistant
that uses web search capabilities to answer user questions.

Main Features:
- Integration of web search tools
- Answer generation based on search results
- Ensuring information accuracy and currency
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo

# Create agent with web search functionality
web_agent = Agent(
    name="web_agent",
    model=OpenAIChat(id="gpt-4o"),  # or "gpt-3.5-turbo"
    tools=[DuckDuckGo()],
    instructions=[
        "You are an excellent research expert.",
        "Use web search to gather the latest information",
        "Get data from trusted sources",
        "Analyze search results and provide accurate answers",
        "Clearly indicate information sources"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Agent execution example
if __name__ == "__main__":
    web_agent.print_response(
        "Please tell me about the major trends in artificial intelligence in 2024.",
        stream=True
    )
```

`cookbook\agents\02_finance_agent.py`

```python
"""
Demonstration of Financial Analysis AI Assistant

This script demonstrates an implementation example of a specialized
AI assistant that provides financial data analysis and investment advice.

Requires the following packages before execution:
pip install yfinance

Main Features:
- Stock price data acquisition and analysis
- Analyst recommendations verification
- Company information acquisition
- Company news analysis
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# Create finance assistant
finance_agent = Agent(
    name="finance_agent",
    model=OpenAIChat(id="gpt-4o"),  # or "gpt-3.5-turbo"
    tools=[YFinanceTools(
        stock_price=True,           # Enable stock price acquisition
        analyst_recommendations=True,# Enable analyst recommendations
        company_info=True,          # Enable company information
        company_news=True           # Enable company news
    )],
    instructions=[
        "You are an experienced financial advisor.",
        "Display data in table format as much as possible",
        "Analyze stock price data and market trends",
        "Consider analyst recommendations",
        "Verify company financial information and latest news",
        "Provide judgments based on objective data",
        "Always include investment risk warnings",
        "Add simple explanations for technical terms"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Assistant execution example
if __name__ == "__main__":
    # Example: Request NVIDIA analysis
    finance_agent.print_response(
        """
        Please provide investment analysis for NVIDIA:
        1. Current stock price and trends
        2. Analyst recommendations
        3. Recent important news
        4. Investment risk assessment
        """,
        stream=True
    )
```

`cookbook\agents\03_agent_team.py`

```python
"""
Demonstration of AI Agent Team

This script demonstrates how multiple AI agents work together
to solve problems. Each agent has a specific role and
the team works efficiently.

Requires the following packages before execution:
pip install yfinance duckduckgo-search

Main Features:
- Team formation with multiple agents
- Task division based on roles
- Integrated analysis of web search and financial data
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.yfinance import YFinanceTools

# Define researcher agent
researcher = Agent(
    name="researcher",
    role="Research Expert",
    model=OpenAIChat(id="gpt-4"),  # or "gpt-3.5-turbo"
    tools=[DuckDuckGo()],
    instructions=[
        "You are an excellent research assistant.",
        "Conduct detailed investigation on given topics",
        "Collect accurate information from trusted sources",
        "Summarize important points concisely",
        "Always include information sources",
        "Display data in table format as much as possible"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Define financial analyst agent
finance_analyst = Agent(
    name="finance_analyst",
    role="Financial Expert",
    model=OpenAIChat(id="gpt-4o"),  # or "gpt-3.5-turbo"
    tools=[YFinanceTools(
        stock_price=True,
        analyst_recommendations=True,
        company_info=True,
        company_news=True
    )],
    instructions=[
        "You are a financial analysis expert",
        "Always display data in table format",
        "Analyze stock price data and market trends",
        "Consider analyst recommendations",
        "Verify company financial information and latest news",
        "Include investment risk warnings"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Create team agent
agent_team = Agent(
    name="research_team",
    team=[researcher, finance_analyst],
    instructions=[
        "Always include information sources in your reports",
        "Display data in table format",
        "Summarize analysis results concisely",
        "Add explanations for technical terms",
        "Summarize important points in bullet lists"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Main processing
if __name__ == "__main__":
    # Example of team-based analysis execution
    agent_team.print_response(
        """
        Please provide the following analysis for NVIDIA:
        1. Latest market trends and news
        2. Stock price analysis and analyst recommendations
        3. Future growth opportunities and risk factors

        Summarize comprehensive analysis and investment decision points.
        """,
        stream=True
    )
```

`cookbook\agents\04_reasoning_agent.py`

```python
"""
Demonstration of Reasoning Agent

This script demonstrates an implementation example of an AI agent
that performs logical reasoning on complex problems and
derives solutions step by step.

Main Features:
- Unfolding logical thinking processes
- Step-by-step problem solving
- Clear explanation of reasoning processes
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat

# Reasoning agent configuration
reasoning_agent = Agent(
    name="Reasoning Agent",
    model=OpenAIChat(id="gpt-4o"),
    instructions=[
        "Analyze problems step by step",
        "Clearly explain the reasoning process at each step",
        "Show the flow of thought leading to conclusions",
        "Consider from multiple perspectives when necessary"
    ],
    show_tool_calls=True,
    markdown=True,
)

# Execution example: Solving logic puzzle
query = """
Please solve the following logic puzzle:

There are 3 boxes, one contains a gold coin, one contains a silver coin, and one is empty.
Each box has a sign, and only one of the following is true:

Box 1: "This box contains a gold coin"
Box 2: "This box is empty"
Box 3: "The silver coin is in Box 1"

Logically deduce the contents of each box.
"""

reasoning_agent.print_response(query, stream=True)
```

`cookbook\agents\05_rag_agent.py`

```python
"""
AI-Powered Recipe Recommendation System

This script implements a system that extracts recipe knowledge
from PDF and provides interactive Q&A about cooking recipes
and procedures using OpenAI's GPT-4.

Main Features:
- Knowledge extraction from PDF recipe books
- Efficient search using vector database
- Natural language explanation of cooking procedures
- Context-aware Q&A

Required package installation:
pip install openai lancedb tantivy pypdf sqlalchemy
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.embedder.openai import OpenAIEmbedder
from phi.knowledge.pdf import PDFUrlKnowledgeBase
from phi.vectordb.lancedb import LanceDb, SearchType

# Create recipe knowledge base from PDF
knowledge_base = PDFUrlKnowledgeBase(
    # Specify Thai recipe PDF
    urls=["https://phi-public.s3.amazonaws.com/recipes/ThaiRecipes.pdf"],
    # Use LanceDB as vector database
    vector_db=LanceDb(
        table_name="recipes",  # Set table name
        uri="tmp/lancedb",     # Database save location
        search_type=SearchType.vector,  # Use vector search
        # Set text embedding model
        embedder=OpenAIEmbedder(model="text-embedding-3-small"),
    ),
)
# Comment out after first run (knowledge base already loaded)
knowledge_base.load()

# Agent configuration
agent = Agent(
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Add knowledge base
    knowledge=knowledge_base,
    # Give following instructions to agent
    instructions=[
        "Explain recipe procedures in an easy-to-understand manner",
        "Suggest ingredient substitutes when available",
        "Include cooking tips and points in explanation",
        "Provide specific advice in response to questions"
    ],
    show_tool_calls=True,  # Show tool calls
    markdown=True,         # Output in markdown format
)

# Ask about coconut soup recipe
agent.print_response(
    "Please tell me how to make Galangal Chicken Coconut Soup",
    stream=True  # Display answer in streaming format
)
```

`cookbook\agents\06_playground.py`

```python
"""
Multi-Agent Analysis Playground

This script implements two specialized AI agents capable of
web search and financial data analysis, and makes them
available in an interactive playground.

Main Features:
- Information collection and analysis from web
- Real-time analysis of stock market data
- Company information and market news acquisition
- Saving and referencing conversation history
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.storage.agent.sqlite import SqlAgentStorage
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.yfinance import YFinanceTools
from phi.playground import Playground, serve_playground_app

# Web search specialized agent configuration
web_agent = Agent(
    name="Web Agent",  # Agent name
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    # Add DuckDuckGo web search tool
    tools=[DuckDuckGo()],
    # Instructions to agent
    instructions=[
        "Always include information sources in your answers",
        "Prioritize trusted sources",
        "Strive to provide latest information",
        "Compare and verify multiple information sources"
    ],
    # Save conversation history in SQLite
    storage=SqlAgentStorage(
        table_name="web_agent",
        db_file="agents.db"
    ),
    add_history_to_messages=True,  # Consider past conversation history
    markdown=True,  # Output in markdown format
)

# Financial analysis specialized agent configuration
finance_agent = Agent(
    name="Finance Agent",  # Agent name
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    # Financial data analysis tool configuration
    tools=[YFinanceTools(
        stock_price=True,          # Get stock prices
        analyst_recommendations=True,  # Analyst recommendations
        company_info=True,         # Company information
        company_news=True          # Company news
    )],
    # Instructions to agent
    instructions=[
        "Display data in table format for easy understanding",
        "Explain important financial indicators with emphasis",
        "Analyze considering relationship with market trends",
        "Also mention risk factors"
    ],
    # Save conversation history in SQLite
    storage=SqlAgentStorage(
        table_name="finance_agent",
        db_file="agents.db"
    ),
    add_history_to_messages=True,  # Consider past conversation history
    markdown=True,  # Output in markdown format
)

# Playground application configuration
app = Playground(
    agents=[finance_agent, web_agent]  # Integrate both agents
).get_app()

# Application startup
if __name__ == "__main__":
    # Start playground in development mode
    serve_playground_app(
        "06_playground:app",
        reload=True  # Auto-reload on code changes
    )
```

`cookbook\agents\07_monitoring.py`

```python
"""
AI Creative Writing

This script demonstrates a simple implementation example of
an AI agent that uses AI to generate creative short horror stories.

Main Features:
- Automatic short horror story generation
- Output in markdown format
- Agent operation monitoring
"""

from phi.agent import Agent

# Creative writing agent configuration
agent = Agent(
    # Basic settings
    markdown=True,     # Enable markdown format output
    monitoring=True,   # Enable agent operation monitoring
    # Instructions to agent
    instructions=[
        "Strive for original and impressive developments",
        "Use expressions that appeal to reader emotions",
        "Aim for concise yet lingering endings",
        "Focus on descriptions that evoke visual imagery"
    ]
)

# Generate 2-sentence horror story
agent.print_response(
    "Create a horror story expressed in 2 sentences",
    stream=True  # Display generation process in real-time
)
```

`cookbook\agents\08_debugging.py`

```python
"""
Debug Mode Creative AI System

This script demonstrates an implementation example of a system
that performs creative writing generation while monitoring
the AI agent's behavior in detail.

Main Features:
- Automatic short horror story generation
- Display of detailed debug information
- Output in markdown format
- Visualization of agent thinking processes
"""

from phi.agent import Agent

# Debug-enabled creative agent configuration
agent = Agent(
    # Basic settings
    markdown=True,    # Enable markdown format output
    debug_mode=True,  # Enable debug mode
    # Instructions to agent
    instructions=[
        "Strive for original and impressive developments",
        "Use expressions that appeal to reader emotions",
        "Aim for concise yet lingering endings",
        "Focus on descriptions that evoke visual imagery"
    ]
)

# Generate 2-sentence horror story
agent.print_response(
    "Create a horror story expressed in 2 sentences",
    stream=True  # Display generation process in real-time
)
```

`cookbook\agents\09_python_agent.py`

```python
"""
IMDB Data Analysis Agent

This script implements a system with an AI agent capable of
automatically generating and executing Python code to analyze
IMDB movie data.

Main Features:
- Read movie data from CSV files
- Automatic statistical analysis execution
- Automatic installation of necessary packages
- Visualization and explanation of analysis results
"""

from pathlib import Path

from phi.agent.python import PythonAgent
from phi.model.openai import OpenAIChat
from phi.file.local.csv import CsvFile

# Set working directory
cwd = Path(__file__).parent.resolve()
# Create directory for temporary files
tmp = cwd.joinpath("tmp")
if not tmp.exists():
    tmp.mkdir(exist_ok=True, parents=True)

# Python-executable AI agent configuration
python_agent = PythonAgent(
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Specify working directory
    base_dir=tmp,
    # Target file configuration
    files=[
        CsvFile(
            path="https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv",
            description="IMDB movie information dataset. " \
                      "Contains ratings, genres, directors, cast, etc.",
        )
    ],
    # Instructions to agent
    instructions=[
        "Explain data preprocessing procedures",
        "Display analysis results visually for easy understanding",
        "Include statistical interpretation in explanation",
        "Explicitly show how to handle outliers and missing values"
    ],
    markdown=True,         # Output in markdown format
    pip_install=True,     # Auto-install necessary packages
    show_tool_calls=True  # Show tool calls
)

# Analyze average movie ratings
python_agent.print_response(
    "Please analyze average movie ratings",
    stream=True  # Display analysis process in real-time
)
```

`cookbook\agents\10_data_analyst.py`

```python
"""
Movie Data Analysis System Using DuckDB

This script implements a data analyst agent that uses DuckDB
to analyze IMDB movie data and visualize statistics with ASCII art.

Main Features:
- Efficient data analysis using DuckDB
- ASCII art histogram display
- Automatic optimal bucket size selection
- Detailed analysis process explanation

Required package installation:
pip install duckdb
"""

import json

from phi.model.openai import OpenAIChat
from phi.agent.duckdb import DuckDbAgent

# Data analyst agent configuration
data_analyst = DuckDbAgent(
    # Use GPT-4 model
    model=OpenAIChat(model="gpt-4o"),
    markdown=True,  # Output in markdown format
    # Data model definition
    semantic_model=json.dumps(
        {
            "tables": [
                {
                    "name": "movies",
                    "description": "IMDB movie information dataset. " \
                                "Contains ratings, release year, genres, etc.",
                    "path": "https://phidata-public.s3.amazonaws.com/demo_data/IMDB-Movie-Data.csv",
                }
            ]
        },
        indent=2,
    ),
    # Instructions to agent
    instructions=[
        "Clearly explain reasons for analysis method selection",
        "Perform visualization considering data characteristics",
        "Choose bucket size with statistical meaning",
        "Strive for visually easy-to-understand display",
        "Respond in Japanese"
    ]
)

# Analyze rating distribution
data_analyst.print_response(
    """
    Please create a histogram of movie ratings.
    Choose appropriate bucket size and explain your selection reason.
    Display result in easy-to-see ASCII art.
    """,
    stream=True  # Display analysis process in real-time
)
```

`cookbook\agents\11_structured_output.py`

```python
"""
AI Movie Script Generation System

This script implements an advanced system that automatically
generates movie script ideas using OpenAI's GPT-4.
Supports both synchronous and asynchronous execution modes,
and displays structured output in rich format.

Main Features:
- Automatic movie script generation
- Comparison of JSON mode and structured output
- Asynchronous processing support
- Output in rich display format
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

# Console output configuration
console = Console()


# Define movie script data model
class MovieScript(BaseModel):
    setting: str = Field(..., description="Provide a setting appropriate for a blockbuster movie.")
    ending: str = Field(..., description="The movie's ending. Make it happy ending if not specified.")
    genre: str = Field(
        ..., description="Movie genre. Choose from action, thriller, or romantic comedy if not specified."
    )
    name: str = Field(..., description="Set the title of this movie")
    characters: List[str] = Field(..., description="List of character names in this movie.")
    storyline: str = Field(..., description="Express movie storyline in 3 sentences. Make it exciting!")


# JSON mode agent configuration
json_mode_agent = Agent(
    model=OpenAIChat(id="gpt-4o"),
    description="AI assistant that creates movie scripts.",
    response_model=MovieScript,
)

# Structured output agent configuration
structured_output_agent = Agent(
    model=OpenAIChat(id="gpt-4o-2024-08-06"),
    description="AI assistant that creates movie scripts.",
    response_model=MovieScript,
    structured_outputs=True,
)


# Output display helper functions
def display_header(
    message: str,
    style: str = "bold cyan",
    panel_title: Optional[str] = None,
    subtitle: Optional[str] = None,
    border_style: str = "bright_magenta",
):
    """
    Display styled header in panel.
    """
    title = Text(message, style=style)
    panel = Panel(Align.center(title), title=panel_title, subtitle=subtitle, border_style=border_style, padding=(1, 2))
    console.print(panel)


def display_spinner(message: str, style: str = "green"):
    """
    Display spinner with message.
    """
    spinner = Spinner("dots", text=message, style=style)
    console.print(spinner)


def display_content(content, title: str = "Content"):
    """
    Display content using Rich library.
    """
    pretty_content = Pretty(content, expand_all=True)
    panel = Panel(pretty_content, title=title, border_style="blue", padding=(1, 2))
    console.print(panel)


# Synchronous execution function
def run_agents():
    try:
        # Execute JSON mode agent
        display_header("Executing agent using MovieScript model", panel_title="Agent 1")
        with console.status("Executing agent 1...", spinner="dots"):
            run_json_mode_agent: RunResponse = json_mode_agent.run("New York")
        display_content(run_json_mode_agent.content, title="Agent 1 Response")

        # Execute structured output agent
        display_header(
            "Executing agent using MovieScript model and structured output", panel_title="Agent 2"
        )
        with console.status("Executing agent 2...", spinner="dots"):
            run_structured_output_agent: RunResponse = structured_output_agent.run("New York")
        display_content(run_structured_output_agent.content, title="Agent 2 Response")
    except Exception as e:
        console.print(f"[bold red]Error executing agent: {e}[/bold red]")


# Asynchronous execution function
async def run_agents_async():
    try:
        # Asynchronous execution of JSON mode agent
        display_header("Asynchronously executing agent using MovieScript model", panel_title="Async Agent 1")
        with console.status("Executing agent 1...", spinner="dots"):
            async_run_json_mode_agent: RunResponse = await json_mode_agent.arun("New York")
        display_content(async_run_json_mode_agent.content, title="Async Agent 1 Response")

        # Asynchronous execution of structured output agent
        display_header(
            "Asynchronously executing agent using MovieScript model and structured output",
            panel_title="Async Agent 2",
        )
        with console.status("Executing agent 2...", spinner="dots"):
            async_run_structured_output_agent: RunResponse = await structured_output_agent.arun("New York")
        display_content(async_run_structured_output_agent.content, title="Async Agent 2 Response")
    except Exception as e:
        console.print(f"[bold red]Error executing async agent: {e}[/bold red]")


# Main execution part
if __name__ == "__main__":
    # Synchronous execution
    run_agents()
    # Asynchronous execution
    asyncio.run(run_agents_async())
```

`cookbook\agents\12_python_function_as_tool.py`

```python
"""
Hacker News Top Article Analysis System

This script implements a system that automatically retrieves
Hacker News top articles and has an AI agent summarize and
analyze their content.

Main Features:
- Real-time data acquisition from Hacker News API
- Automatic collection and formatting of top articles
- AI article summarization and analysis
- Streaming format result display
"""

import json
import httpx

from phi.agent import Agent


def get_top_hackernews_stories(num_stories: int = 10) -> str:
    """Function to get Hacker News top articles

    Args:
        num_stories (int): Number of articles to get (default: 10)

    Returns:
        str: JSON string of top articles
    """

    # Get top article IDs
    response = httpx.get("https://hacker-news.firebaseio.com/v0/topstories.json")
    story_ids = response.json()

    # Get article details
    stories = []
    for story_id in story_ids[:num_stories]:
        # Get each article's details via API
        story_response = httpx.get(
            f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json"
        )
        story = story_response.json()
        # Exclude body text (not for summarization)
        if "text" in story:
            story.pop("text", None)
        stories.append(story)
    return json.dumps(stories)


# News analysis agent configuration
agent = Agent(
    # Tool configuration
    tools=[get_top_hackernews_stories],
    # Visualization configuration
    show_tool_calls=True,  # Show tool calls
    markdown=True,         # Output in markdown format
    # Instructions to agent
    instructions=[
        "Briefly extract article points",
        "Prioritize important topics",
        "Explain technical content understandably",
        "Mention relationships between articles if any"
    ]
)

# Generate summary of top 5 articles
agent.print_response(
    "Please summarize Hacker News top 5 articles",
    stream=True  # Display summary in streaming format
)
```

`cookbook\agents\13_image_agent.py`

```python
"""
Image Comparison Analysis System

This script implements a system that uses OpenAI's GPT-4 to
analyze image content and detect/explain differences
between images.

Main Features:
- Detailed analysis of image content
- Multiple image comparison verification
- Verbalizing visual features
- Result display in markdown format
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat

# Image analysis agent configuration
agent = Agent(
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Enable markdown format output
    markdown=True,
    # Instructions to agent
    instructions=[
        "Explain visual features of images in detail",
        "Focus on characteristic and notable elements",
        "Analyze differences between images in detail",
        "Explain in natural, understandable language"
    ]
)

# Execute image analysis and comparison
agent.print_response(
    "What is shown in these images? Are there any differences between them?",
    # Specify images to analyze
    images=[
        # Wisconsin Madison nature trail image
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/" \
        "Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
        # Same image specified again for comparison
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/" \
        "Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
    ],
    stream=True  # Display analysis results in streaming format
)
```

`cookbook\agents\14_image_generator.py`

```python
"""
DALL-E Image Generation System

This script implements an AI system that generates images
from natural language descriptions by combining OpenAI's
GPT-4 with DALL-E.

Main Features:
- Natural language image generation
- GPT-4 generation instruction optimization
- Detailed operation confirmation in debug mode
- Generated image URL provision
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.dalle import Dalle

# Image generation agent configuration
agent = Agent(
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Add DALL-E image generation tool
    tools=[Dalle()],
    # Output settings
    markdown=True,      # Output in markdown format
    debug_mode=True,    # Enable debug mode
    # Instructions to agent
    instructions=[
        "Act as AI assistant that uses DALL-E to generate images",
        "Always include generated image URL in response",
        "Add description of generated image features and intended expression",
        "Mention elements considered during image generation process",
        "Provide feedback on generated image quality and features"
    ],
)

# Generate siamese cat image
agent.print_response(
    "Please generate an image of a white siamese cat." \
    "Express an elegant and classy atmosphere.",
    stream=True  # Display generation process in real-time
)
```

`cookbook\agents\15_cli_app.py`

```python
"""
Interactive Search Assistant

This script implements an interactive search and information
analysis system combining GPT-4 with DuckDuckGo.
Maintains chat history and provides intelligent
context-aware responses.

Main Features:
- Web search integration
- Chat history management
- Context-aware responses
- Debug information display
- CLI-based conversation interface
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo

# Search conversation agent configuration
agent = Agent(
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Add DuckDuckGo search tool
    tools=[DuckDuckGo()],
    # Operation settings
    show_tool_calls=True,          # Show tool calls
    read_chat_history=True,        # Load chat history
    add_history_to_messages=True,  # Reflect history in responses
    num_history_responses=3,       # Number of history responses to keep
    # add_history_to_messages_num=True,  # Add history numbers (enable if needed)
    debug_mode=True,               # Enable debug mode
    # Instructions to agent
    instructions=[
        "Perform appropriate searches according to user questions",
        "Summarize search results and provide organized related information",
        "Generate responses considering past conversation context",
        "Clearly indicate information sources and prioritize trusted information",
        "Perform additional questions or confirmations as needed"
    ],
)

# CLI application startup
agent.cli_app(
    markdown=True,  # Enable markdown format output
)
```

`cookbook\agents\16_generate_video.py`

```python
"""
AI Video Generation System

This script implements a system that automatically generates
videos from natural language descriptions using
ModelsLabs' VideoGen API.

Main Features:
- Video generation from text prompts
- Real-time monitoring of generation process
- Detailed debug information display
- Generated video URL provision
"""

from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.models_labs import ModelsLabs

# Video generation agent configuration
agent = Agent(
    # Agent basic settings
    name="Video Generation Agent",         # Agent name
    agent_id="video-generation-agent",     # Agent ID
    # Use GPT-4 model
    model=OpenAIChat(id="gpt-4o"),
    # Add VideoGen API tool
    tools=[ModelsLabs()],
    # Output settings
    markdown=True,       # Output in markdown format
    debug_mode=True,     # Enable debug mode
    show_tool_calls=True,  # Show tool calls
    # Instructions to agent
    instructions=[
        "Act as assistant that uses VideoGen API to generate videos",
        "Use generate_video function for video generation requests",
        "Unless specified, pass only 'prompt' parameter to generate_video function",
        "Include generation status (status) and estimated time (eta) in response",
        "After generation complete, return only video URL from API"
    ],
    # System message
    system_message="Unless user explicitly specifies, " \
                  "do not change generate_video function default parameters."
)

# Generate cat video
agent.print_response(
    "Please generate a video of a cat playing with a ball." \
    "Create a cute and fun atmosphere.",
    stream=True  # Display generation process in real-time
)
```

`cookbook\agents\17_intermediate_steps.py`

```python
"""
Stock Price Acquisition Agent Demonstration

This script demonstrates an implementation example of an agent
that retrieves stock price data using YFinance API and
returns responses in streaming format.

Main Features:
- Real-time stock price data acquisition
- Streaming format responses
- Display of intermediate processing steps
"""

# Import necessary libraries
from typing import Iterator
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# Agent configuration
# Initialize agent that acquires stock price data using YFinance API
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[YFinanceTools(stock_price=True)],  # Enable stock price acquisition tool
    markdown=True,  # Enable markdown format output
    show_tool_calls=True,  # Enable tool call display
)

# Agent execution and streaming response acquisition
run_stream: Iterator[RunResponse] = agent.run(
    "Please tell me NVDA's current stock price",  # Stock price query
    stream=True,  # Enable streaming
    stream_intermediate_steps=True  # Enable intermediate step display
)

# Processing and displaying streaming responses
for chunk in run_stream:
    # Display response data excluding messages
    pprint(chunk.model_dump(exclude={"messages"}))
    # Display separator line
    print("---" * 20)
```

`cookbook\agents\18_is_9_11_bigger_than_9_9.py`

```python
"""
Calculation Agent Demonstration

This script demonstrates an implementation example of an agent
that performs basic numeric calculations and comparisons.
Handles four arithmetic operations (addition, subtraction,
multiplication, division) and makes numeric comparisons.

Main Features:
- Four arithmetic operations execution
- Numeric comparison analysis
- Logical explanation of results
"""

# Import necessary libraries
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.calculator import Calculator

# Calculation agent configuration
# Initialize agent capable of four arithmetic operations and numeric comparisons
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[Calculator(
        add=True,      # Enable addition
        subtract=True, # Enable subtraction
        multiply=True, # Enable multiplication
        divide=True    # Enable division
    )],
    instructions=[
        "Use calculation tools for numeric comparisons",
        "Clearly explain basis for results"
    ],
    show_tool_calls=True,  # Enable tool call display
    markdown=True,         # Enable markdown format output
)

# Numeric comparison execution example 1
agent.print_response("Is 9.11 greater than 9.9?")

# Numeric comparison execution example 2
agent.print_response("Which is larger, 9.11 or 9.9?")
```

`cookbook\agents\19_response_as_variable.py`

```python
"""
Comprehensive Stock Information Acquisition Agent Demonstration

This script demonstrates an implementation example of an agent
that comprehensively acquires and analyzes the following
stock-related information using YFinance API:

Acquirable Information:
- Stock price data
- Analyst recommendations
- Company information
- Company news

Output Format:
- Information display in table format
- Formatted markdown format
"""

# Import necessary libraries
from typing import Iterator  # noqa
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools

# Comprehensive stock information agent configuration
# Initialize agent with multiple stock information acquisition functions
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[YFinanceTools(
        stock_price=True,              # Enable stock price acquisition
        analyst_recommendations=True,   # Enable analyst recommendation acquisition
        company_info=True,             # Enable company information acquisition
        company_news=True              # Enable company news acquisition
    )],
    instructions=[
        "Display information in table format as much as possible",
        "Present data in an organized and easy-to-understand manner"
    ],
    show_tool_calls=True,  # Enable tool call display
    markdown=True,         # Enable markdown format output
)

# Single response stock price information acquisition
run_response: RunResponse = agent.run("Please tell me NVDA's current stock price")
pprint(run_response)

# Streaming response stock price information acquisition (commented out)
# run_response_stream: Iterator[RunResponse] = agent.run(
#     "Please tell me NVDA's current stock price",
#     stream=True  # Enable streaming mode
# )
# for response in run_response_stream:
#     pprint(response)  # Display responses sequentially
```

`cookbook\agents\20_system_prompt.py`

```python
"""
Story Generation Agent Demonstration

This script demonstrates an implementation example of an agent
that generates short 2-sentence stories based on given themes.

Main Features:
- Story generation on specified themes
- Concise 2-sentence structure
- Creative storytelling
"""

# Import necessary libraries
from phi.agent import Agent

# Story generation agent configuration
# Initialize agent that generates 2-sentence stories
agent = Agent(
    system_prompt="Please create a 2-sentence story about the following theme: "  # System prompt configuration
)

# Story generation execution
agent.print_response("The shape of love in the year 12000 AD.")
```

`cookbook\agents\21_multiple_tools.py`

```python
"""
Comprehensive Company Analysis Report Generation Agent Demonstration

This script demonstrates an implementation example of an agent
that integrates company financial information and news to
generate comprehensive analysis reports.

Required package installation:
pip install openai duckduckgo-search yfinance

Main Features:
- Stock market data acquisition and analysis
- Web search news collection
- Data display in table format
- Report generation in streaming format
"""

# Import necessary libraries
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools
from phi.tools.duckduckgo import DuckDuckGo

# Comprehensive report generation agent configuration
# Initialize agent with financial information and news search functions
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[
        DuckDuckGo(),                    # Enable web search function
        YFinanceTools(enable_all=True)   # Enable all financial information acquisition functions
    ],
    instructions=[
        "Display data in table format for easy understanding",
        "Organize and present financial information and news appropriately"
    ],
    show_tool_calls=True,  # Enable tool call display
    markdown=True,         # Enable markdown format output
)

# Comprehensive company analysis report generation
agent.print_response(
    "Please create a detailed report including financial information and latest news for NVDA",
    stream=True  # Enable streaming format output
)
```

`cookbook\agents\22_agent_metrics.py`

```python
"""
Stock Price Acquisition Agent with Metrics Analysis Demonstration

This script demonstrates an implementation example of an agent
that displays detailed metrics information at execution time
in addition to acquiring stock price data.

Main Features:
- Stock price data acquisition
- Streaming format responses
- Per-message metrics display
- Aggregate metrics analysis
"""

# Import necessary libraries
from typing import Iterator
from rich.pretty import pprint
from phi.agent import Agent, RunResponse
from phi.model.openai import OpenAIChat
from phi.tools.yfinance import YFinanceTools
from phi.utils.pprint import pprint_run_response

# Stock price acquisition agent configuration
# Initialize agent with metrics analysis function
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[YFinanceTools(stock_price=True)],  # Enable stock price acquisition tool
    markdown=True,  # Enable markdown format output
    show_tool_calls=True,  # Enable tool call display
)

# Streaming format stock price information acquisition
run_stream: Iterator[RunResponse] = agent.run(
    "Please tell me NVDA's current stock price",
    stream=True  # Enable streaming mode
)
# Display response (markdown format)
pprint_run_response(run_stream, markdown=True)

# Per-message metrics display
if agent.run_response.messages:
    for message in agent.run_response.messages:
        if message.role == "assistant":
            # Display message content
            if message.content:
                print(f"Message content: {message.content}")
            # Display tool call information
            elif message.tool_calls:
                print(f"Tools used: {message.tool_calls}")
            # Per-message metrics display
            print("---" * 5, "Individual Metrics", "---" * 5)
            pprint(message.metrics)
            print("---" * 20)

# Aggregate metrics display
print("---" * 5, "Aggregate Metrics", "---" * 5)
pprint(agent.run_response.metrics)
```

`cookbook\agents\23_research_agent.py`

```python
"""
News Article Creation Agent Demonstration

This script demonstrates an implementation example of an agent
that conducts comprehensive research on specified topics and
generates New York Times style articles.

Required package installation:
pip install openai duckduckgo-search newspaper4k lxml_html_clean phidata

Main Features:
- Information collection via web search
- Article body extraction and analysis
- High-quality article generation
- Streaming format output
"""

# Import necessary libraries
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.duckduckgo import DuckDuckGo
from phi.tools.newspaper4k import Newspaper4k

# News article creation agent configuration
# Initialize agent with search and article extraction functions
agent = Agent(
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[
        DuckDuckGo(),   # Enable web search function
        Newspaper4k()    # Enable article extraction function
    ],
    description="Write articles as senior New York Times investigative reporter.",
    instructions=[
        "Please search for top 5 related links on the specified topic.",
        "Extract article body from each URL (ignore inaccessible URLs).",
        "Analyze collected information and create New York Times quality articles.",
        "Respond in Japanese"
    ],
    markdown=True,  # Enable markdown format output
    show_tool_calls=True,  # Enable tool call display
    add_datetime_to_instructions=True,  # Add datetime information to instructions
    # debug_mode=True,  # Enable debug mode (uncomment if needed)
)

# Article generation execution
agent.print_response(
    "About simulation theory",  # Article topic
    stream=True  # Enable streaming format output
)
```

`cookbook\agents\agents.db` - Error reading file: 'utf-8' codec can't decode byte 0xf8 in position 102: invalid start byte

`cookbook\agents\README.md`

```markdown
<div align="center">
  <img src="https://raw.githubusercontent.com/Sunwood-ai-labs/phidata-cookbook-jp/refs/heads/main/docs/74ccfadcf3dc58a1d3d695087ba3c01e8818ff97ebb8457de21a464e.png" width="100%">

# 🚀 phidata Agents Cookbook

</div>

This repository reorganizes [phidata](https://github.com/phidatahq/phidata)'s [Agents Samples](https://github.com/phidatahq/phidata/tree/main/cookbook/agents) into Japanese as a practical tutorial. You can learn step-by-step from AI agent basics to applications.

## 📚 Learning Content

### Basics: AI Agent Fundamentals
1. [Web Search Agent](01_web_search.py)
   - Implementation of basic AI agent with web search functionality
   - Master search result formatting and display methods
   - Appropriate citation of information sources

2. [Finance Analysis Agent](02_finance_agent.py)
   - Acquisition and analysis of stock market data
   - Implementation of investment strategy proposal functionality
   - Financial data visualization

3. [Agent Team](03_agent_team.py)
   - Multi-agent cooperative operation
   - Implementation of role division and information sharing
   - Team workflow design

### Advanced: Special Feature Implementation
4. [Reasoning Agent](04_reasoning_agent.py)
   - Step-by-step problem-solving process
   - Logical thinking implementation method
   - Reasoning process visualization

5. [RAG Agent](05_rag_agent.py)
   - Knowledge base construction from PDF
   - Vector database utilization
   - Context-aware response generation

6. [Playground](06_playground.py)
   - Interactive UI implementation
   - Multi-agent integrated management
   - Conversation history saving and referencing

### Monitoring/Debugging
7. [Monitoring](07_monitoring.py)
   - Agent operation monitoring
   - Performance analysis
   - Log management implementation

8. [Debugging Function](08_debugging.py)
   - Error detection and handling
   - Debug information display
   - Troubleshooting techniques

### Practical: Specialized Agents
9. [Python Agent](09_python_agent.py)
   - IMDB data analysis
   - Python code automatic generation and execution
   - Data visualization implementation

10. [Data Analyst](10_data_analyst.py)
    - SQL analysis using DuckDB
    - Data statistical processing
    - ASCII art visualization

### Application: Advanced Feature Implementation
11. [Structured Output](11_structured_output.py)
    - Pydantic model utilization
    - Movie script generation system
    - Asynchronous processing implementation

12. [Python Function Tool](12_python_function_as_tool.py)
    - Hacker News data acquisition and analysis
    - Custom tool implementation
    - Real-time data processing

13. [Image Analysis Agent](13_image_agent.py)
    - Image content analysis
    - Visual feature verbalization
    - Multiple image comparison

14. [Image Generation Agent](14_image_generator.py)
    - Image generation using DALL-E
    - Generation process control
    - Image quality optimization

### Practical: Real-World Applications
15. [CLI Application](15_cli_app.py)
    - Command-line conversation implementation
    - Search history management
    - User input processing

16. [Video Generation](16_generate_video.py)
    - VideoGen API utilization
    - Video generation process control
    - Progress monitoring

17. [Intermediate Processing Steps](17_intermediate_steps.py)
    - Process visualization
    - Step-by-step result display
    - Debug information utilization

### Special: Task-Specific Agents
18. [Numeric Comparison](18_is_9_11_bigger_than_9_9.py)
    - Numeric calculation implementation
    - Comparison logic construction
    - Result explanation generation

19. [Response Variable](19_response_as_variable.py)
    - Response data structuring
    - Variable handling
    - Data type optimization

20. [System Prompt](20_system_prompt.py)
    - Prompt engineering
    - System settings optimization
    - Response quality improvement

### Enterprise: Business-Oriented Features
21. [Multi-Tool Integration](21_multiple_tools.py)
    - Multi-API integration
    - Data source linkage
    - Comprehensive analysis function implementation

22. [Agent Metrics](22_agent_metrics.py)
    - Performance measurement
    - Metrics visualization
    - Optimization indicator setting

23. [Research Agent](23_research_agent.py)
    - Comprehensive information collection
    - Article generation function
    - Reliability evaluation

## 🎯 Prerequisites

- Python 3.8 or higher
- OpenAI API key
- Various API keys as needed (DALL-E, Zoom, etc.)

## 🛠️ Setup

1. Clone repository:
```bash
git clone https://github.com/your-username/phidata-cookbook-jp.git
```

2. Install dependencies:
```bash
PS C:\Prj\phidata-cookbook-jp> uv venv
Using Python 3.10.15
Creating virtualenv at: .venv
Activate with: .venv\Scripts\activate
PS C:\Prj\phidata-cookbook-jp> .venv\Scripts\activate
(phidata-cookbook-jp) PS C:\Prj\phidata-cookbook-jp> uv pip install -U phidata

```



3. Set environment variables:
```bash
cp .env.example .env
# Edit .env file to set necessary API keys
```

## 📖 Usage

1. Each sample can be executed independently
2. Sample code includes detailed comments
3. Recommended to progress from basics to applications sequentially

## 🤝 Contribution

- Bug reports and feature requests accepted via Issues
- Pull requests also welcome
- Code improvement proposals and new sample proposals also welcome

## 📝 License

This project is published under MIT License.

## 🔗 Related Links

- [phidata official documentation](https://docs.phidata.com)
- [phidata GitHub](https://github.com/phidatahq/phidata)
- [Community forum](https://community.phidata.com/)
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
Zoom Meeting Auto-Scheduling Agent Demonstration

This script demonstrates an implementation example of an agent
that uses Zoom API to automatically schedule meetings and
manage meeting detail information.

Required Environment Variables:
- ZOOM_ACCOUNT_ID: Zoom Account ID
- ZOOM_CLIENT_ID: Zoom Client ID
- ZOOM_CLIENT_SECRET: Zoom Client Secret

Main Features:
- Automatic Zoom meeting scheduling
- Meeting detail acquisition and display
- Error handling
"""

# Import necessary libraries
import os
from phi.agent import Agent
from phi.model.openai import OpenAIChat
from phi.tools.zoom import ZoomTool

# Get Zoom API authentication credentials
ACCOUNT_ID = os.getenv("ZOOM_ACCOUNT_ID")
CLIENT_ID = os.getenv("ZOOM_CLIENT_ID")
CLIENT_SECRET = os.getenv("ZOOM_CLIENT_SECRET")

# Define custom Zoom tool class
class CustomZoomTool(ZoomTool):
    def schedule_meeting(self, topic: str, start_time: str, duration: int) -> str:
        """
        Schedule meeting and return formatted meeting details

        Parameters:
            topic (str): Meeting title
            start_time (str): Start time (ISO 8601 format)
            duration (int): Duration (minutes)

        Returns:
            str: Formatted meeting information
        """
        response = super().schedule_meeting(topic, start_time, duration)

        if isinstance(response, str):
            import json
            try:
                meeting_info = json.loads(response)
            except json.JSONDecodeError:
                return "Failed to parse meeting information."
        else:
            meeting_info = response

        if meeting_info:
            meeting_id = meeting_info.get("id")
            join_url = meeting_info.get("join_url")
            start_time = meeting_info.get("start_time")
            return (
                f"Meeting scheduled successfully!\n\n"
                f"**Meeting ID:** {meeting_id}\n"
                f"**Join URL:** {join_url}\n"
                f"**Start Time:** {start_time}"
            )
        else:
            return "Sorry. Meeting scheduling failed."

# Instantiate Zoom tool
zoom_tool = CustomZoomTool(
    account_id=ACCOUNT_ID,
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET
)

# Scheduling agent configuration
agent = Agent(
    name="Zoom Scheduling Agent",  # Agent name
    agent_id="zoom-scheduling-agent",  # Agent ID
    model=OpenAIChat(id="gpt-4o"),  # Use GPT-4 model
    tools=[zoom_tool],  # Use custom Zoom tool
    markdown=True,  # Enable markdown format output
    debug_mode=True,  # Enable debug mode
    show_tool_calls=True,  # Enable tool call display
    instructions=[
        "Act as agent that uses Zoom API to schedule Zoom meetings.",
        "Use ZoomTool's schedule_meeting function when scheduling meetings.",
        "Unless specified, pass only minimum necessary parameters to schedule_meeting function.",
        "After scheduling, provide detailed information including meeting ID, join URL, and start time.",
        "Specify all times in ISO 8601 format (example: '2024-12-28T10:00:00Z').",
        "Respond appropriately to errors and notify user."
    ],
    system_message=(
        "Unless user explicitly specifies, do not change schedule_meeting function "
        "default parameters. Always confirm meeting was successfully scheduled "
        "before confirming with user."
    ),
)

# Use agent to schedule meeting
user_input = "Please schedule a 60-minute meeting titled 'Python Automation Conference' for November 1, 2024 at 11:00 AM (UTC)."
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



