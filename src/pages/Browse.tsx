import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getMultipleFilesLastModified, generateFallbackDate } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { getPromptFilesByLanguage, getPromptStatsByLanguage } from '../lib/promptLoader';

// カテゴリごとの色マップ
const CATEGORY_COLORS: Record<string, { from: string; to: string }> = {
  // サイトのカラーマップ（tailwind.config.js）を参考に割り当て
  coding:         { from: '#2E578C', to: '#182D40' }, // primary → primary-dark
  audio:          { from: '#BF807A', to: '#2E578C' }, // accent → primary
  documentation:  { from: '#BF807A', to: '#F2F2F2' }, // accent → light
  image:          { from: '#BF807A', to: '#2E578C' }, // accent → primary
  meta:           { from: '#BF807A', to: '#592A2A' }, // accent → accent-dark
  methodology:    { from: '#2E578C', to: '#BF807A' }, // primary → accent
  'mind-mapping': { from: '#2E578C', to: '#F2F2F2' }, // primary → light
  writing:        { from: '#BF807A', to: '#182D40' }, // accent → primary-dark
  'aws-certification': { from: '#182D40', to: '#2E578C' }, // primary-dark → primary
  'Company-as-a-Code': { from: '#F2F2F2', to: '#182D40' }, // light → primary-dark
  diagram:        { from: '#2E578C', to: '#BF807A' }, // primary → accent
  education:      { from: '#2E578C', to: '#F2F2F2' }, // primary → light
  その他:         { from: '#2E578C', to: '#BF807A' }, // デフォルト
};

type LocalPrompt = {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  tag: string | null;
  lastModified: Date;
};

export function Browse() {
  const { language, t } = useLanguage();
  const [prompts, setPrompts] = useState<LocalPrompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrompts() {
      // 言語に応じたファイルを読み込み
      const mdFiles = getPromptFilesByLanguage(language);
      const mdEntries = Object.entries(mdFiles);
      const allPaths = mdEntries.map(([path]) => path);

      // 一括でGit情報を取得
      const gitInfoResults = await getMultipleFilesLastModified(allPaths);
      
      const loaded: LocalPrompt[] = [];

      for (const [path, loader] of allEntries) {
        try {
          // Viteのimport.meta.glob({ query: '?raw', import: 'default' })はPromise<string>を返す
          const raw = await loader() as string;
          
          // Git情報から最終更新日時を取得、取得できない場合はフォールバック
          let lastModified = gitInfoResults[path];
          if (!lastModified) {
            lastModified = generateFallbackDate(path);
          }
          
          const lines = raw.split('\n');
          const fileName = path.split('/').pop() || '';
          const isShellScript = path.endsWith('.sh');
          
          let title = '';
          let description = '';
          
          if (isShellScript) {
            // .shファイルの場合、最初の # から始まる行をタイトルとして使用
            const titleLine = lines.find((line: string) => /^# /.test(line)) || '';
            title = titleLine.replace(/^# /, '').trim() || fileName.replace('.sh', '') || '';
            // 2行目以降のコメント行から説明を抽出
            const descLines = lines.filter((line: string, idx: number) => 
              idx > 0 && line.trim() && /^# /.test(line) && !line.includes('#!/')
            );
            description = descLines.slice(0, 2).map(line => line.replace(/^# /, '')).join(' ').slice(0, 60);
          } else {
            // .mdファイルの場合、従来通り
            const titleLine = lines.find((line: string) => /^# /.test(line)) || '';
            title = titleLine.replace(/^# /, '').trim() || fileName.replace('.md', '') || '';
            // 2行目以降の非空行から2行分を抽出し、60文字程度でカット
            const descLines = lines.filter((line: string, idx: number) => idx > 0 && line.trim() && !/^# /.test(line));
            description = descLines.slice(0, 2).join(' ').slice(0, 60);
          }

          // /prompts/カテゴリ/タグ/xxx.{md|sh} からカテゴリ・タグを抽出
          // 例: /prompts/coding/ai/xxx.md → category: coding, tag: ai
          const relPath = path.replace(/^\/?prompts\//, '');
          const parts = relPath.split('/');
          const category = parts.length > 1 ? parts[0] : 'その他';
          const fileExt = isShellScript ? '.sh' : '.md';
          const tag = parts.length > 2 ? parts[1] : (parts.length === 2 && parts[1].endsWith(fileExt) ? null : parts[1]);

          loaded.push({
            id: path,
            title,
            description,
            path,
            category,
            tag,
            lastModified,
          });
        } catch (error) {
          console.error(`Error loading file ${path}:`, error);
        }
      }
      
      // 最終更新日時の新しい順に並べる
      loaded.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
      setPrompts(loaded);
      setLoading(false);
    }
    loadPrompts();
  }, [language]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
          <FontAwesomeIcon icon={faHatWizard} className="h-8" />
          {t('browse.title')}
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder={t('browse.searchPlaceholder')}
            className="pl-10 pr-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="magic-loading mx-auto">
            <div className="orbit-ring"></div>
            <div className="magic-trail"></div>
            <div className="magic-wand h-10 w-10">
              <FontAwesomeIcon icon={faHatWizard} className="text-primary h-full w-full" />
            </div>
            <div className="magic-sparkles">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
            </div>
          </div>
          <p className="text-primary-dark font-zen mt-4 opacity-70">{t('browse.loading')}</p>
        </div>
      ) : prompts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-primary-dark font-zen">{t('browse.noPrompts')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt) => {
            // アイコン・グラデーションはカテゴリごとに色分け
            // .shファイルの場合は専用のTerminalアイコンを使用
            const isShellScript = prompt.path.endsWith('.sh');
            const IconComponent = isShellScript ? Icons.Terminal : Icons.Wand;
            const categoryKey = prompt.category || 'その他';
            const colorSet = CATEGORY_COLORS[categoryKey] || CATEGORY_COLORS['その他'];
            const gradientFrom = colorSet.from;
            const gradientTo = colorSet.to;

            return (
              <div
                key={prompt.id}
                className="card bg-white rounded-xl shadow-md border border-light p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden group h-full flex flex-col min-h-[260px]"
              >
                <div
                  className="absolute inset-0 flowing-background"
                  style={{
                    '--gradient-from': gradientFrom,
                    '--gradient-to': gradientTo,
                  } as React.CSSProperties}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <IconComponent className="h-48 w-48 transform rotate-12" />
                  </div>
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <Link
                    to={`/wiki/${prompt.path.replace(/^\//, '')}`}
                    className="block h-full"
                  >
                    <div className="flex items-start space-x-3 mb-2">
                      <div
                        className="flowing-icon h-8 w-8 min-w-8 max-w-8 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                        style={{
                          '--gradient-from': gradientFrom,
                          '--gradient-to': gradientTo,
                        } as React.CSSProperties}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-kaisei text-lg font-bold text-primary-dark leading-snug">
                          <span className="keyword line-clamp-2 break-words block">{prompt.title}</span>
                        </h3>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          className="prose prose-xs prose-primary prose-headings:text-xs prose-p:text-xs text-primary-dark font-zen line-clamp-2 mt-1 max-w-xs"
                        >
                          {prompt.description}
                        </ReactMarkdown>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span
                            className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r text-white text-xs font-bold transition-opacity hover:opacity-90"
                            style={{
                              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                            }}
                          >
                            {prompt.category}
                          </span>
                          {isShellScript && (
                            <span
                              className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs font-bold transition-opacity hover:opacity-90"
                            >
                              {t('browse.script')}
                            </span>
                          )}
                          {prompt.tag && (
                            <span
                              className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-accent to-primary text-white text-xs font-bold transition-opacity hover:opacity-90"
                            >
                              {prompt.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="relative z-10 mt-auto pt-2 border-t border-gray-100">
                    <div className="text-xs text-primary-dark opacity-70 font-zen">
                      {t('browse.updated')}: {prompt.lastModified.toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="highlight-box mt-8">
        <p className="font-zen text-center text-lg">
          {t('browse.highlight')}
        </p>
      </div>
    </div>
  );
}
