import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import * as Icons from 'lucide-react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const CATEGORY_LABELS: Record<string, string> = {
  audio: '音声',
  coding: 'コーディング',
  'aws-certification': 'AWS認定',
  'Company-as-a-Code': 'Company as a Code',
  'deep-research': 'リサーチ',
  diagram: 'ダイアグラム',
  documentation: 'ドキュメント',
  education: '教育',
  game: 'ゲーム',
  image: '画像生成',
  meta: 'メタ',
  methodology: '手法',
  'mind-mapping': 'マインドマップ',
  'pseudo-multi-agent': '疑似マルチエージェント',
  writing: 'ライティング',
};

const CATEGORY_ICONS: Record<string, React.ComponentType<any>> = {
  audio: Icons.Mic,
  coding: Icons.Code2,
  'aws-certification': Icons.Award,
  'Company-as-a-Code': Icons.Building2,
  'deep-research': Icons.Search,
  diagram: Icons.Network,
  documentation: Icons.BookOpen,
  education: Icons.GraduationCap,
  game: Icons.Gamepad2,
  image: Icons.Image,
  meta: Icons.Settings2,
  methodology: Icons.Puzzle,
  'mind-mapping': Icons.Brain,
  'pseudo-multi-agent': Icons.Users,
  writing: Icons.PenLine,
};

type PromptFile = {
  path: string;
  category: string;
  file: string;
  title: string;
  content: string;
  segments: string[]; // ["category", "subdir1", ..., "filename.md"]
};

const mdFiles = import.meta.glob('/prompts/**/*.md', { query: '?raw', import: 'default' });
const shFiles = import.meta.glob('/prompts/**/*.sh', { query: '?raw', import: 'default' });

function buildTree(files: PromptFile[]) {
  // category > subdir... > file というツリーを構築
  const tree: any = {};
  for (const f of files) {
    let node = tree;
    for (let i = 0; i < f.segments.length; ++i) {
      const seg = f.segments[i];
      if (i === f.segments.length - 1) {
        // ファイル
        node[seg] = f;
      } else {
        if (!node[seg]) node[seg] = {};
        node = node[seg];
      }
    }
  }
  return tree;
}

export function Wiki() {
  // URLパラメータ取得
  // react-router-dom v6: catch-allは useParams().['*']
  const { '*': wikiPath = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [files, setFiles] = useState<PromptFile[]>([]);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // ファイル一覧ロード
  useEffect(() => {
    async function loadAll() {
      // マークダウンファイルとシェルスクリプトファイルの両方を読み込み
      const mdEntries = Object.entries(mdFiles);
      const shEntries = Object.entries(shFiles);
      const allEntries = [...mdEntries, ...shEntries];
      
      const loaded: PromptFile[] = [];
      for (const [path, loader] of allEntries) {
        const content = await loader() as string;
        const rel = path.replace(/^\/?prompts\//, '');
        const segments = rel.split('/');
        const category = segments[0];
        const file = segments.slice(1).join('/');
        const isShellScript = path.endsWith('.sh');
        
        let title = '';
        if (isShellScript) {
          // .shファイルの場合、最初の # から始まる行をタイトルとして使用
          const titleLine = content.split('\n').find(line => /^# /.test(line));
          title = titleLine ? titleLine.replace(/^# /, '').trim() : file.replace('.sh', '');
        } else {
          // .mdファイルの場合、従来通り
          const titleLine = content.split('\n').find(line => /^# /.test(line));
          title = titleLine ? titleLine.replace(/^# /, '').trim() : file.replace('.md', '');
        }
        
        loaded.push({ path, category, file, title, content, segments });
      }
      loaded.sort((a, b) => a.path.localeCompare(b.path));
      setFiles(loaded);
    }
    loadAll();
  }, []);

  // URLパスから該当プロンプトを特定
  const selected: PromptFile | null = useMemo(() => {
    if (!files.length) return null;
    if (!wikiPath) return files[0];
    // wikiPath: "prompts/..." 形式
    const relPath = wikiPath.replace(/^\/?/, '');
    // files[].path: "/prompts/..." なので先頭スラッシュを除去して比較
    return files.find(f => f.path.replace(/^\//, '') === relPath) || null;
  }, [files, wikiPath]);

  // サイドバーで選択時にURLを変更
  const handleSelect = (file: PromptFile) => {
    const relPath = file.path.replace(/^\//, '');
    // すでに選択中なら何もしない
    if (selected && selected.path === file.path) return;
    navigate(`/wiki/${relPath}`, { replace: false });
    // openMapも自動で開く
    const keys: string[] = [];
    for (let i = 0; i < file.segments.length - 1; ++i) {
      keys.push(file.segments.slice(0, i + 1).join('/'));
    }
    setOpenMap(prev => {
      const next = { ...prev };
      keys.forEach(k => { next[k] = true; });
      return next;
    });
  };

  // URL直アクセス時も自動でopenMapを開く
  useEffect(() => {
    if (!selected) return;
    const keys: string[] = [];
    for (let i = 0; i < selected.segments.length - 1; ++i) {
      keys.push(selected.segments.slice(0, i + 1).join('/'));
    }
    setOpenMap(prev => {
      const next = { ...prev };
      keys.forEach(k => { next[k] = true; });
      return next;
    });
    // eslint-disable-next-line
  }, [selected?.path]);

  const tree = useMemo(() => buildTree(files), [files]);

  // ツリー描画（再帰）
  function renderTree(node: any, parentKey: string[] = [], depth = 0) {
    return (
      <ul className={depth === 0 ? "space-y-2" : "ml-4 space-y-1"}>
        {Object.entries(node).map(([key, value]) => {
          const fullKey = [...parentKey, key].join('/');
          if ((value as PromptFile).path) {
            // ファイル
            const file = value as PromptFile;
            return (
              <li key={fullKey}>
                <button
                  className={`text-left w-full px-2 py-1 rounded hover:bg-primary/10 transition ${
                    selected?.path === file.path ? 'bg-primary/10 font-bold text-primary' : 'text-primary-dark'
                  }`}
                  onClick={() => handleSelect(file)}
                  style={{ fontSize: '0.9em' }}
                >
                  {file.title}
                </button>
              </li>
            );
          } else {
            // ディレクトリ or カテゴリ
            const isCategory = depth === 0;
            const Icon = isCategory
              ? (CATEGORY_ICONS[key] || Icons.Folder)
              : Icons.Folder;
            const label = isCategory
              ? (CATEGORY_LABELS[key] || key)
              : key;
            const isOpen = !!openMap[fullKey];
            return (
              <li key={fullKey}>
                <button
                  className="flex items-center gap-2 w-full font-semibold text-primary-dark mb-1 hover:bg-primary/10 rounded px-2 py-1 transition"
                  onClick={() => setOpenMap(prev => ({ ...prev, [fullKey]: !prev[fullKey] }))}
                  aria-expanded={isOpen}
                  style={{ fontSize: isCategory ? '1em' : '0.95em' }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  <span className="ml-auto text-[10px] text-primary-dark opacity-60">{isOpen ? '▼' : '▶'}</span>
                </button>
                {isOpen && renderTree(value, [...parentKey, key], depth + 1)}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  // Wikiタイトル用アイコン
  const WikiIcon = Icons.BookOpenCheck;

  return (
    <div className="flex min-h-[80vh]">
      {/* サイドバー */}
      <aside className="w-80 bg-white border-r border-light p-4 overflow-y-auto text-xs">
        <div className="flex items-center gap-2 mb-6">
          <WikiIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary-dark">プロンプトWiki</span>
        </div>
        {renderTree(tree)}
      </aside>
      {/* プレビュー */}
      <main className="flex-1 p-8 overflow-y-auto">
        {selected ? (
          <div className="prose prose-primary max-w-5xl mx-auto">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                {CATEGORY_ICONS[selected.category] ? (
                  React.createElement(CATEGORY_ICONS[selected.category], { className: "h-6 w-6 text-primary" })
                ) : (
                  <Icons.Folder className="h-6 w-6 text-primary" />
                )}
                <h1 className="m-0">{selected.title}</h1>
                <span className="text-xs text-primary-dark bg-light px-2 py-1 rounded ml-2">
                  {CATEGORY_LABELS[selected.category] || selected.category}
                </span>
                {/* コピーボタン・共有ボタン */}
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={async () => {
                      await navigator.clipboard.writeText(selected.content);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow hover:bg-accent transition-colors"
                    title="マークダウンをコピー"
                  >
                    コピー
                  </button>
                  <button
                    onClick={async () => {
                      await navigator.clipboard.writeText(window.location.href);
                      setShared(true);
                      setTimeout(() => setShared(false), 2000);
                    }}
                    className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow hover:bg-accent transition-colors"
                    title="ページURLを共有"
                  >
                    共有
                  </button>
                </div>
                {/* コピー・共有トースト */}
                {copied && (
                  <span className="ml-2 px-2 py-1 bg-primary text-white text-xs rounded shadow">
                    コピーしました！
                  </span>
                )}
                {shared && (
                  <span className="ml-2 px-2 py-1 bg-accent text-white text-xs rounded shadow">
                    URLをコピーしました！
                  </span>
                )}
              </div>
              <div className="text-xs text-primary-dark opacity-70 font-mono">
                ファイルパス: <a
                  href={`https://github.com/Sunwood-ai-labs/MysticLibrary/blob/main/prompts/${selected.segments.join('/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-light px-1 rounded underline hover:text-accent"
                >
                  prompts/{selected.segments.join('/')}
                </a>
              </div>
            </div>
            {selected.path.endsWith('.sh') ? (
              <div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                  {`\`\`\`sh\n${selected.content}\n\`\`\``}
                </ReactMarkdown>
              </div>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {selected.content.replace(/^# .*\n?/, '')}
              </ReactMarkdown>
            )}
          </div>
        ) : (
          <div className="text-center text-primary-dark">プロンプトを選択してください</div>
        )}
      </main>
    </div>
  );
}

export default Wiki;