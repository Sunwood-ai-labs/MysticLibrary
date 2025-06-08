import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

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

// マークダウンファイルを静的にimport
const mdFiles = import.meta.glob('/prompts/**/*.md', { as: 'raw' });

type LocalPrompt = {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  tag: string | null;
};

export function Browse() {
  const [prompts, setPrompts] = useState<LocalPrompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMarkdownPrompts() {
      const entries = Object.entries(mdFiles);
      const loaded: LocalPrompt[] = [];

      for (const [path, loader] of entries) {
        // Viteのimport.meta.glob({ as: 'raw' })はPromise<string>を返す
        const raw = await loader();
        // タイトル（# ...）と説明（2行目以降の最初の非空行）を抽出
        const lines = raw.split('\n');
        const titleLine = lines.find(line => /^# /.test(line)) || '';
        const title = titleLine.replace(/^# /, '').trim() || path.split('/').pop()?.replace('.md', '') || '';
        const descLine = lines.find((line, idx) => idx > 0 && line.trim() && !/^# /.test(line)) || '';
        const description = descLine.trim();

        // /prompts/カテゴリ/タグ/xxx.md からカテゴリ・タグを抽出
        // 例: /prompts/coding/ai/xxx.md → category: coding, tag: ai
        const relPath = path.replace(/^\/?prompts\//, '');
        const parts = relPath.split('/');
        const category = parts.length > 1 ? parts[0] : 'その他';
        const tag = parts.length > 2 ? parts[1] : (parts.length === 2 && parts[1].endsWith('.md') ? null : parts[1]);

        loaded.push({
          id: path,
          title,
          description,
          path,
          category,
          tag,
        });
      }
      // 新しい順に並べる（ファイル名降順）
      loaded.sort((a, b) => b.path.localeCompare(a.path));
      setPrompts(loaded);
      setLoading(false);
    }
    loadMarkdownPrompts();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
          <FontAwesomeIcon icon={faHatWizard} className="h-8" />
          プロンプト一覧
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="プロンプトを検索..."
            className="pl-10 pr-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin h-8 w-8 mx-auto">
            <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
          </div>
        </div>
      ) : prompts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-primary-dark font-zen">まだプロンプトが投稿されていません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt) => {
            // アイコン・グラデーションはカテゴリごとに色分け
            const IconComponent = Icons.Wand;
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
                    to={`/prompts/preview${prompt.id.replace(/^\/prompts/, '')}`}
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
                        <p className="text-sm text-primary-dark font-zen">
                          カテゴリ：{prompt.category}
                          {prompt.tag && (
                            <>
                              <span className="mx-1 text-gray-400">/</span>
                              タグ：{prompt.tag}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="highlight-box mt-8">
        <p className="font-zen text-center text-lg">
          <span className="keyword">新しいプロンプト</span>は毎日追加されています。
          あなたの<span className="keyword">アイデア</span>も共有してみませんか？
        </p>
      </div>
    </div>
  );
}