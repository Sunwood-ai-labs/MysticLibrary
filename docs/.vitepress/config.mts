import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "Prompt Library",
  description: "日本語のプロンプトライブラリ",
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    siteTitle: "Prompt Library",
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
          items: [
            {
              text: "フォローアップメール作成",
              link: "/prompt-catalog/writing/email-followup"
            },
            {
              text: "バグ報告トリアージ",
              link: "/prompt-catalog/dev/bug-report-triage"
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
