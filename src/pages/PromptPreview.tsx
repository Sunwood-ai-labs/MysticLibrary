import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

// Viteのimport.meta.globで全mdファイルを取得
/** カテゴリごとのグラデーション色マップ（Browse.tsxより流用） */
const CATEGORY_COLORS: Record<string, { from: string; to: string }> = {
  coding:         { from: '#2E578C', to: '#182D40' },
  audio:          { from: '#BF807A', to: '#2E578C' },
  documentation:  { from: '#BF807A', to: '#F2F2F2' },
  image:          { from: '#BF807A', to: '#2E578C' },
  meta:           { from: '#BF807A', to: '#592A2A' },
  methodology:    { from: '#2E578C', to: '#BF807A' },
  'mind-mapping': { from: '#2E578C', to: '#F2F2F2' },
  writing:        { from: '#BF807A', to: '#182D40' },
  'aws-certification': { from: '#182D40', to: '#2E578C' },
  'Company-as-a-Code': { from: '#F2F2F2', to: '#182D40' },
  diagram:        { from: '#2E578C', to: '#BF807A' },
  education:      { from: '#2E578C', to: '#F2F2F2' },
  その他:         { from: '#2E578C', to: '#BF807A' },
};
const mdFiles = import.meta.glob('/prompts/**/*.md', { query: '?raw', import: 'default' });

// デバッグ: 実際のキーを確認
console.log('mdFiles keys:', Object.keys(mdFiles));

export function PromptPreview() {
  // mdPathはcatch-allパラメータ
  // catch-allパラメータで全サブパスを取得
  const { '*' : mdPath = '' } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // mdPathは"xxx/yyy.md"の形で来る。URLデコードも考慮。
    let decoded = mdPath ? decodeURIComponent(mdPath) : '';
    if (decoded.startsWith('/')) decoded = decoded.slice(1);
    const fullPath = `/prompts/${decoded}`;
    const loader = mdFiles[fullPath];
    // デバッグ出力
    console.log('mdPath:', mdPath);
    console.log('decoded:', decoded);
    console.log('fullPath:', fullPath);
    console.log('loader exists:', !!loader);
    if (loader) {
      loader().then((raw: unknown) => {
        setContent(raw as string);
        setLoading(false);
      });
    } else {
      setContent(null);
      setLoading(false);
    }
  }, [mdPath]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <div className="magic-loading">
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
        <p className="text-primary-dark font-zen mt-4 opacity-70">プロンプトを召喚中...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center py-8">
        <p className="text-primary-dark font-zen">該当するプロンプトが見つかりません。</p>
      </div>
    );
  }

  // パスからカテゴリ・タグを抽出
  let category = 'その他';
  let tag: string | null = null;
  if (mdPath) {
    const parts = mdPath.replace(/^\/?/, '').split('/');
    if (parts.length > 0) category = parts[0];
    if (parts.length > 2) tag = parts[1];
    else if (parts.length === 2 && parts[1].endsWith('.md')) tag = null;
    else if (parts.length === 2) tag = parts[1];
  }
  const colorSet = CATEGORY_COLORS[category] || CATEGORY_COLORS['その他'];
  const gradientFrom = colorSet.from;
  const gradientTo = colorSet.to;

  const handleCopy = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-light p-8 mt-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r text-white text-xs font-bold transition-opacity hover:opacity-90"
            style={{
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
            }}
          >
            {category}
          </span>
          {tag && (
            <span
              className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-accent to-primary text-white text-xs font-bold transition-opacity hover:opacity-90"
            >
              {tag}
            </span>
          )}
        </div>
        <div className="relative ml-4">
          <button
            onClick={handleCopy}
            className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow hover:bg-accent transition-colors"
            title="マークダウンをコピー"
          >
            コピー
          </button>
          {copied && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-primary text-white text-xs rounded shadow">
              コピーしました！
            </span>
          )}
        </div>
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-primary font-zen"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
