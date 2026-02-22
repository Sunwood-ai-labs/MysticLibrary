import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig, type DefaultTheme } from 'vitepress';

type SidebarItem = DefaultTheme.SidebarItem;
type SidebarGroup = DefaultTheme.SidebarItem[] | DefaultTheme.SidebarMulti;

type ManifestNode =
  | { text: string; link: string }
  | { text: string; collapsed?: boolean; items: ManifestNode[] };

type SidebarManifest = {
  locales?: {
    ja?: { sidebar?: ManifestNode[] };
    en?: { sidebar?: ManifestNode[] };
  };
};

function loadSidebarManifest(): SidebarManifest {
  const configDir = path.dirname(fileURLToPath(import.meta.url));
  const manifestPath = path.resolve(configDir, '../.generated/sidebar-manifest.json');

  try {
    const raw = readFileSync(manifestPath, 'utf8');
    return JSON.parse(raw) as SidebarManifest;
  } catch {
    return {};
  }
}

function toSidebarItems(nodes: ManifestNode[] | undefined): SidebarGroup {
  if (!nodes?.length) return [];

  const convert = (node: ManifestNode): SidebarItem => {
    if ('link' in node) {
      return { text: node.text, link: node.link };
    }
    return {
      text: node.text,
      collapsed: node.collapsed ?? true,
      items: node.items.map(convert),
    };
  };

  return nodes.map(convert) as SidebarGroup;
}

const manifest = loadSidebarManifest();
const rawJaSidebar = toSidebarItems(manifest.locales?.ja?.sidebar);
const rawEnSidebar = toSidebarItems(manifest.locales?.en?.sidebar);
const isProd = process.env.NODE_ENV === 'production';
const base = process.env.VITEPRESS_BASE ?? (isProd ? '/MysticLibrary/' : '/');

function withWikiHome(sidebar: SidebarGroup, locale: 'ja' | 'en'): SidebarGroup {
  const homeItem: DefaultTheme.SidebarItem = {
    text: locale === 'ja' ? 'Wiki Home' : 'Wiki Home',
    link: locale === 'ja' ? '/' : '/en/',
  };

  if (Array.isArray(sidebar)) {
    return [
      {
        text: locale === 'ja' ? 'トップ' : 'Top',
        collapsed: false,
        items: [homeItem],
      },
      ...sidebar,
    ];
  }

  return sidebar;
}

const jaSidebar = withWikiHome(rawJaSidebar, 'ja');
const enSidebar = withWikiHome(rawEnSidebar, 'en');

export default defineConfig({
  base,
  title: 'Mystic Library Prompts',
  description: 'Bilingual prompt documentation prototype',
  lang: 'ja-JP',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/',
      title: 'Mystic Library Prompts',
      description: '日本語プロンプト集 (VitePress prototype)',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Mystic Library Prompts',
      description: 'English prompt collection (VitePress prototype)',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#006a6a' }],
    ['meta', { name: 'color-scheme', content: 'light' }],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    siteTitle: 'Mystic Library Prompts',
    outline: {
      level: [2, 3],
    },
    lastUpdated: {
      text: 'Last updated',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunwood-ai-labs/MysticLibrary' },
    ],
    locales: {
      root: {
        nav: [
          { text: 'ホーム', link: '/' },
          { text: 'Coding', link: '/coding/' },
          { text: 'Documentation', link: '/documentation/' },
          { text: 'GitHub', link: 'https://github.com/Sunwood-ai-labs/MysticLibrary/tree/main/prompts' },
        ],
        sidebar: jaSidebar,
        outlineTitle: '目次',
        docFooter: {
          prev: '前へ',
          next: '次へ',
        },
        darkModeSwitchLabel: 'テーマ',
        lightModeSwitchTitle: 'ライトモード',
        darkModeSwitchTitle: 'ダークモード',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ戻る',
        langMenuLabel: '言語',
        lastUpdated: {
          text: '最終更新',
        },
      },
      en: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Coding', link: '/en/coding/' },
          { text: 'Documentation', link: '/en/documentation/' },
          { text: 'GitHub', link: 'https://github.com/Sunwood-ai-labs/MysticLibrary/tree/main/prompts' },
        ],
        sidebar: enSidebar,
        outlineTitle: 'On this page',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Languages',
        lastUpdated: {
          text: 'Last updated',
        },
      },
    },
    footer: {
      message: 'Generated from `prompts/` (VitePress prototype)',
      copyright: 'Copyright © Sunwood-ai-labs',
    },
  },
});
