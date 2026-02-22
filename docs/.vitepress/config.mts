import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "Mystic Library",
  description: "Mystic Library - 日本語のプロンプトライブラリ",
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ["script", { async: "", src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
  ],
  themeConfig: {
    siteTitle: "Mystic Library",
    nav: [
      { text: "ホーム", link: "/" },
      { text: "カタログ", link: "/prompt-catalog/" },
      { text: "テンプレート", link: "/templates/prompt-template" },
      { text: "運用", link: "/operation/rules" }
    ],
    sidebar: {
      "/prompt-catalog/": [
        {
          text: "プロンプトカタログ",
          items: [
            { text: "カテゴリ一覧", link: "/prompt-catalog/" },
            { text: "Writing", link: "/prompt-catalog/writing/" },
            { text: "Dev", link: "/prompt-catalog/dev/" }
          ]
        },
        {
          text: "収録プロンプト",
          collapsed: false,
          items: [
            {
              text: "Writing",
              collapsed: false,
              items: [
                {
                  text: "フォローアップメール作成",
                  link: "/prompt-catalog/writing/email-followup"
                }
              ]
            },
            {
              text: "Dev",
              collapsed: false,
              items: [
                {
                  text: "バグ報告トリアージ",
                  link: "/prompt-catalog/dev/bug-report-triage"
                },
                {
                  text: "Agent Ops Note（作業記録テンプレート）",
                  link: "/prompt-catalog/dev/agent-ops-note"
                },
                {
                  text: "Codex 作業ルール（todo.md運用）",
                  link: "/prompt-catalog/dev/codex-work-rules"
                },
                {
                  text: "高品質コード要件",
                  link: "/prompt-catalog/dev/high-quality-code-requirements"
                },
                {
                  text: "Python パッケージ開発チェックリスト",
                  link: "/prompt-catalog/dev/python-package-development-checklist"
                },
                {
                  text: "Zenith リポジトリ運用ガイドライン",
                  link: "/prompt-catalog/dev/repository-guidelines-zenith"
                },
                {
                  text: "Claude Dev システムプロンプト（Unix系）",
                  link: "/prompt-catalog/dev/claude-dev-system-prompt-unix"
                },
                {
                  text: "Claude Dev システムプロンプト（PowerShell）",
                  link: "/prompt-catalog/dev/claude-dev-system-prompt-powershell"
                },
                {
                  text: "Dev Agent Prompt v1（簡潔開発原則）",
                  link: "/prompt-catalog/dev/dev-agent-prompt-v1"
                },
                {
                  text: "Windsurf システムプロンプト 01",
                  link: "/prompt-catalog/dev/windsurf-system-prompt-01"
                },
                {
                  text: "リポジトリ品質レビュー V4",
                  link: "/prompt-catalog/dev/repo-review-prompt-v4"
                }
              ]
            }
          ]
        }
      ],
      "/templates/": [
        {
          text: "テンプレート",
          items: [{ text: "プロンプトテンプレート", link: "/templates/prompt-template" }]
        }
      ],
      "/operation/": [
        {
          text: "運用",
          items: [
            { text: "運用ルール", link: "/operation/rules" },
            { text: "FAQ", link: "/operation/faq" }
          ]
        }
      ],
      "/log/": [
        {
          text: "変更履歴",
          items: [{ text: "更新ログ", link: "/log/update" }]
        }
      ]
    },
    search: {
      provider: "local"
    },
    outline: {
      label: "このページ"
    },
    docFooter: {
      prev: "前へ",
      next: "次へ"
    },
    returnToTopLabel: "上へ戻る",
    sidebarMenuLabel: "メニュー",
    darkModeSwitchLabel: "テーマ",
    lightModeSwitchTitle: "ライト",
    darkModeSwitchTitle: "ダーク"
  }
});
