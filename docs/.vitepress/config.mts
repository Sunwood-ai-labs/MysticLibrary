import { defineConfig, type DefaultTheme } from "vitepress";

type LocaleCode = "ja" | "en";

const localeText = {
  ja: {
    description: "Mystic Library - 日本語のプロンプトライブラリ",
    nav: {
      home: "ホーム",
      catalog: "カタログ",
      template: "テンプレート",
      operation: "運用"
    },
    sidebar: {
      promptCatalog: "プロンプトカタログ",
      categoryList: "カテゴリ一覧",
      recordedPrompts: "収録プロンプト",
      templates: "テンプレート",
      promptTemplate: "プロンプトテンプレート",
      operation: "運用",
      operationRules: "運用ルール",
      changeLog: "変更履歴",
      updateLog: "更新ログ"
    },
    promptItems: {
      followupEmail: "フォローアップメール作成",
      bugTriage: "バグ報告トリアージ",
      agentOpsNote: "Agent Ops Note（作業記録テンプレート）",
      codexWorkRules: "Codex 作業ルール（todo.md運用）",
      highQualityCode: "高品質コード要件",
      pythonChecklist: "Python パッケージ開発チェックリスト",
      zenithGuidelines: "Zenith リポジトリ運用ガイドライン",
      claudeUnix: "Claude Dev システムプロンプト（Unix系）",
      claudePowershell: "Claude Dev システムプロンプト（PowerShell）",
      devAgentPrompt: "Dev Agent Prompt v1（簡潔開発原則）",
      windsurfPrompt: "Windsurf システムプロンプト 01",
      repoReviewPrompt: "リポジトリ品質レビュー V4"
    },
    outline: "このページ",
    prev: "前へ",
    next: "次へ",
    returnToTop: "上へ戻る",
    sidebarMenu: "メニュー",
    darkModeSwitch: "テーマ",
    lightMode: "ライト",
    darkMode: "ダーク",
    langMenu: "言語"
  },
  en: {
    description: "Mystic Library - Prompt library with Japanese-first docs and English navigation",
    nav: {
      home: "Home",
      catalog: "Catalog",
      template: "Templates",
      operation: "Operations"
    },
    sidebar: {
      promptCatalog: "Prompt Catalog",
      categoryList: "Categories",
      recordedPrompts: "Included Prompts",
      templates: "Templates",
      promptTemplate: "Prompt Template",
      operation: "Operations",
      operationRules: "Rules",
      changeLog: "Changelog",
      updateLog: "Updates"
    },
    promptItems: {
      followupEmail: "Follow-up Email Drafting",
      bugTriage: "Bug Report Triage",
      agentOpsNote: "Agent Ops Note (Work Log Template)",
      codexWorkRules: "Codex Work Rules (todo.md workflow)",
      highQualityCode: "High-quality Code Requirements",
      pythonChecklist: "Python Package Development Checklist",
      zenithGuidelines: "Zenith Repository Guidelines",
      claudeUnix: "Claude Dev System Prompt (Unix)",
      claudePowershell: "Claude Dev System Prompt (PowerShell)",
      devAgentPrompt: "Dev Agent Prompt v1 (Concise Dev Principles)",
      windsurfPrompt: "Windsurf System Prompt 01",
      repoReviewPrompt: "Repository Quality Review V4"
    },
    outline: "On this page",
    prev: "Previous",
    next: "Next",
    returnToTop: "Back to top",
    sidebarMenu: "Menu",
    darkModeSwitch: "Appearance",
    lightMode: "Light",
    darkMode: "Dark",
    langMenu: "Language"
  }
} as const;

function withBase(base: string, path: string) {
  if (!base) return path;
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}

function createNav(base: string, locale: LocaleCode): DefaultTheme.NavItem[] {
  const t = localeText[locale];

  return [
    { text: t.nav.home, link: withBase(base, "/") },
    { text: t.nav.catalog, link: withBase(base, "/prompt-catalog/") },
    { text: t.nav.template, link: withBase(base, "/templates/prompt-template") },
    { text: t.nav.operation, link: withBase(base, "/operation/rules") }
  ];
}

function createSidebar(base: string, locale: LocaleCode): DefaultTheme.Sidebar {
  const t = localeText[locale];

  return {
    [withBase(base, "/prompt-catalog/")]: [
      {
        text: t.sidebar.promptCatalog,
        items: [
          { text: t.sidebar.categoryList, link: withBase(base, "/prompt-catalog/") },
          { text: "Writing", link: withBase(base, "/prompt-catalog/writing/") },
          { text: "Dev", link: withBase(base, "/prompt-catalog/dev/") }
        ]
      },
      {
        text: t.sidebar.recordedPrompts,
        collapsed: false,
        items: [
          {
            text: "Writing",
            collapsed: false,
            items: [
              {
                text: t.promptItems.followupEmail,
                link: withBase(base, "/prompt-catalog/writing/email-followup")
              }
            ]
          },
          {
            text: "Dev",
            collapsed: false,
            items: [
              {
                text: t.promptItems.bugTriage,
                link: withBase(base, "/prompt-catalog/dev/bug-report-triage")
              },
              {
                text: t.promptItems.agentOpsNote,
                link: withBase(base, "/prompt-catalog/dev/agent-ops-note")
              },
              {
                text: t.promptItems.codexWorkRules,
                link: withBase(base, "/prompt-catalog/dev/codex-work-rules")
              },
              {
                text: t.promptItems.highQualityCode,
                link: withBase(base, "/prompt-catalog/dev/high-quality-code-requirements")
              },
              {
                text: t.promptItems.pythonChecklist,
                link: withBase(base, "/prompt-catalog/dev/python-package-development-checklist")
              },
              {
                text: t.promptItems.zenithGuidelines,
                link: withBase(base, "/prompt-catalog/dev/repository-guidelines-zenith")
              },
              {
                text: t.promptItems.claudeUnix,
                link: withBase(base, "/prompt-catalog/dev/claude-dev-system-prompt-unix")
              },
              {
                text: t.promptItems.claudePowershell,
                link: withBase(base, "/prompt-catalog/dev/claude-dev-system-prompt-powershell")
              },
              {
                text: t.promptItems.devAgentPrompt,
                link: withBase(base, "/prompt-catalog/dev/dev-agent-prompt-v1")
              },
              {
                text: t.promptItems.windsurfPrompt,
                link: withBase(base, "/prompt-catalog/dev/windsurf-system-prompt-01")
              },
              {
                text: t.promptItems.repoReviewPrompt,
                link: withBase(base, "/prompt-catalog/dev/repo-review-prompt-v4")
              }
            ]
          }
        ]
      }
    ],
    [withBase(base, "/templates/")]: [
      {
        text: t.sidebar.templates,
        items: [
          { text: t.sidebar.promptTemplate, link: withBase(base, "/templates/prompt-template") }
        ]
      }
    ],
    [withBase(base, "/operation/")]: [
      {
        text: t.sidebar.operation,
        items: [
          { text: t.sidebar.operationRules, link: withBase(base, "/operation/rules") },
          { text: "FAQ", link: withBase(base, "/operation/faq") }
        ]
      }
    ],
    [withBase(base, "/log/")]: [
      {
        text: t.sidebar.changeLog,
        items: [{ text: t.sidebar.updateLog, link: withBase(base, "/log/update") }]
      }
    ]
  };
}

function createThemeConfig(base: string, locale: LocaleCode): DefaultTheme.Config {
  const t = localeText[locale];

  return {
    siteTitle: "Mystic Library",
    nav: createNav(base, locale),
    sidebar: createSidebar(base, locale),
    search: {
      provider: "local"
    },
    outline: {
      label: t.outline
    },
    docFooter: {
      prev: t.prev,
      next: t.next
    },
    returnToTopLabel: t.returnToTop,
    sidebarMenuLabel: t.sidebarMenu,
    darkModeSwitchLabel: t.darkModeSwitch,
    lightModeSwitchTitle: t.lightMode,
    darkModeSwitchTitle: t.darkMode,
    langMenuLabel: t.langMenu
  };
}

export default defineConfig({
  lang: "ja-JP",
  title: "Mystic Library",
  description: localeText.ja.description,
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ["script", { async: "", src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
  ],
  themeConfig: createThemeConfig("", "ja"),
  locales: {
    root: {
      label: "日本語",
      lang: "ja-JP",
      title: "Mystic Library",
      description: localeText.ja.description
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "Mystic Library",
      description: localeText.en.description,
      themeConfig: createThemeConfig("/en", "en")
    }
  }
});
