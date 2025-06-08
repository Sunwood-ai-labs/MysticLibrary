import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

// Viteのimport.meta.globで全mdファイルを取得
const mdFiles = import.meta.glob('/prompts/**/*.md', { as: 'raw' });

// デバッグ: 実際のキーを確認
console.log('mdFiles keys:', Object.keys(mdFiles));

export function PromptPreview() {
  // mdPathはcatch-allパラメータ
  // catch-allパラメータで全サブパスを取得
  const { '*' : mdPath = '' } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
      loader().then((raw: string) => {
        setContent(raw);
        setLoading(false);
      });
    } else {
      setContent(null);
      setLoading(false);
    }
  }, [mdPath]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8">
          <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
        </div>
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

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-light p-8 mt-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}