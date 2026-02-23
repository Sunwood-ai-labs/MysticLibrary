import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
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

const DOCS_ROOT_DIR = path.resolve(process.cwd(), "docs");

const directoryOrderMap: Record<string, string[]> = {
  "prompt-catalog": ["writing", "presentation", "creative", "dev", "docs", "methodology"],
  "prompt-catalog/dev": [
    "python",
    "triage",
    "review",
    "checklists",
    "templates",
    "guidelines",
    "agent-prompts",
    "system-prompts",
    "claude-hands",
    "dev-agent",
    "codex",
    "openhands"
  ],
  "prompt-catalog/dev/system-prompts": ["claude", "windsurf", "mcp"],
  "prompt-catalog/docs": ["graphic-recording", "diagram", "education", "markwhen"],
  "prompt-catalog/creative": ["audio", "video", "visual", "game"],
  "prompt-catalog/methodology": ["abstract-prompting", "mind-mapping", "research", "multi-agent", "meta", "agent"]
};

function sortEntries(entries: string[], directoryPath: string, locale: LocaleCode) {
  const localeDocsRoot = locale === "ja" ? DOCS_ROOT_DIR : path.join(DOCS_ROOT_DIR, "en");
  const relativeDirectory = normalizeRoutePath(path.relative(localeDocsRoot, directoryPath));
  const preferredOrder = directoryOrderMap[relativeDirectory] ?? [];
  const orderIndex = new Map(preferredOrder.map((name, index) => [name, index]));

  return [...entries].sort((a, b) => {
    const aIndex = orderIndex.get(a) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderIndex.get(b) ?? Number.MAX_SAFE_INTEGER;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.localeCompare(b, "en");
  });
}

function normalizeRoutePath(route: string) {
  return route.replace(/\\/g, "/");
}

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function readMarkdownLabel(filePath: string, fallback: string) {
  try {
    const source = readFileSync(filePath, "utf8");
    const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const titleLine = frontmatterMatch[1].match(/^title:\s*(.+)$/m);
      if (titleLine) return stripQuotes(titleLine[1]);
    }

    const headingMatch = source.match(/^#\s+(.+)$/m);
    if (headingMatch) return headingMatch[1].trim();
  } catch {
    // Ignore and fall back.
  }

  return fallback;
}

function humanizeDirName(name: string) {
  return name
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function routeFromMarkdownFile(filePath: string, locale: LocaleCode, base: string) {
  const localeDocsRoot = locale === "ja" ? DOCS_ROOT_DIR : path.join(DOCS_ROOT_DIR, "en");
  const relativePath = normalizeRoutePath(path.relative(localeDocsRoot, filePath));
  const routePath = `/${relativePath.replace(/\.md$/, "")}`;
  const resolvedRoute = routePath.endsWith("/index")
    ? `${routePath.slice(0, -"/index".length) || "/"}/`
    : routePath;
  return withBase(base, resolvedRoute);
}

function buildPromptCatalogDirectoryItems(
  directoryPath: string,
  locale: LocaleCode,
  base: string,
  depth = 0
): DefaultTheme.SidebarItem[] {
  const entries = sortEntries(
    readdirSync(directoryPath).filter((entry) => !entry.startsWith(".")),
    directoryPath,
    locale
  );

  const directories = entries.filter((entry) => statSync(path.join(directoryPath, entry)).isDirectory());
  const files = entries.filter((entry) => {
    const fullPath = path.join(directoryPath, entry);
    return statSync(fullPath).isFile() && entry.endsWith(".md") && entry !== "index.md";
  });

  const items: DefaultTheme.SidebarItem[] = [];

  for (const dirName of directories) {
    const childDir = path.join(directoryPath, dirName);
    const indexFile = path.join(childDir, "index.md");
    const hasIndex = statSync(childDir).isDirectory() && (() => {
      try {
        return statSync(indexFile).isFile();
      } catch {
        return false;
      }
    })();
    const childItems = buildPromptCatalogDirectoryItems(childDir, locale, base, depth + 1);
    const label = hasIndex
      ? readMarkdownLabel(indexFile, humanizeDirName(dirName))
      : humanizeDirName(dirName);

    const item: DefaultTheme.SidebarItem = {
      text: label,
      ...(hasIndex ? { link: routeFromMarkdownFile(indexFile, locale, base) } : {}),
      ...(childItems.length > 0 ? { items: childItems } : {}),
      ...(childItems.length > 0 ? { collapsed: depth >= 1 } : {})
    };

    items.push(item);
  }

  for (const fileName of files) {
    const filePath = path.join(directoryPath, fileName);
    items.push({
      text: readMarkdownLabel(filePath, fileName.replace(/\.md$/, "")),
      link: routeFromMarkdownFile(filePath, locale, base)
    });
  }

  return items;
}

function createPromptCatalogSidebar(base: string, locale: LocaleCode): DefaultTheme.SidebarItem[] {
  const t = localeText[locale];
  const localeDocsRoot = locale === "ja" ? DOCS_ROOT_DIR : path.join(DOCS_ROOT_DIR, "en");
  const promptCatalogDir = path.join(localeDocsRoot, "prompt-catalog");
  const categoryDirectories = buildPromptCatalogDirectoryItems(promptCatalogDir, locale, base);

  return [
    {
      text: t.sidebar.promptCatalog,
      items: [
        { text: t.sidebar.categoryList, link: withBase(base, "/prompt-catalog/") },
        ...categoryDirectories
      ]
    }
  ];
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
    [withBase(base, "/prompt-catalog/")]: createPromptCatalogSidebar(base, locale),
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
