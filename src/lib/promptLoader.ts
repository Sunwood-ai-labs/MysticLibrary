import { Language } from '../types/i18n';

const mdFiles = import.meta.glob('/prompts/**/*.md', { query: '?raw', import: 'default' });
const shFiles = import.meta.glob('/prompts/**/*.sh', { query: '?raw', import: 'default' });
const mdFilesStats = import.meta.glob('/prompts/**/*.md', { query: '?url' });
const shFilesStats = import.meta.glob('/prompts/**/*.sh', { query: '?url' });

export function getPromptFilesByLanguage(language: Language) {
  const allMdFiles = { ...mdFiles };
  const filtered: Record<string, () => Promise<string>> = {};
  const fallback: Record<string, () => Promise<string>> = {};

  for (const [path, loader] of Object.entries(allMdFiles)) {
    const isEnglish = path.endsWith('_EN.md');
    const isJapanese = path.endsWith('_JP.md') || (!path.endsWith('_EN.md') && path.endsWith('.md'));

    if (language === 'en') {
      if (isEnglish) {
        const basePath = path.replace('_EN.md', '.md');
        filtered[basePath] = loader;
      }
    } else {
      if (isJapanese) {
        if (path.endsWith('_JP.md')) {
          const basePath = path.replace('_JP.md', '.md');
          filtered[basePath] = loader;
        } else {
          fallback[path] = loader;
        }
      }
    }
  }

  if (language === 'ja') {
    return { ...shFiles, ...fallback, ...filtered };
  }

  return { ...shFiles, ...filtered };
}

export function getPromptStatsByLanguage(language: Language) {
  const allMdStats = { ...mdFilesStats };
  const allShStats = { ...shFilesStats };
  const filtered: Record<string, string> = {};
  const fallback: Record<string, string> = {};

  for (const [path, url] of Object.entries(allMdStats)) {
    const isEnglish = path.endsWith('_EN.md');
    const isJapanese = path.endsWith('_JP.md') || (!path.endsWith('_EN.md') && path.endsWith('.md'));

    if (language === 'en') {
      if (isEnglish) {
        const basePath = path.replace('_EN.md', '.md');
        filtered[basePath] = url as string;
      }
    } else {
      if (isJapanese) {
        if (path.endsWith('_JP.md')) {
          const basePath = path.replace('_JP.md', '.md');
          filtered[basePath] = url as string;
        } else {
          fallback[path] = url as string;
        }
      }
    }
  }

  if (language === 'ja') {
    return { ...allShStats, ...fallback, ...filtered };
  }

  return { ...allShStats, ...filtered };
}
