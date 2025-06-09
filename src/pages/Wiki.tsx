import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import * as Icons from 'lucide-react';

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
  const [files, setFiles] = useState<PromptFile[]>([]);
  const [selected, setSelected] = useState<PromptFile | null>(null);
  // 開閉状態: "category", "category/subdir", ... で管理
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function loadAll() {
      const entries = Object.entries(mdFiles);
      const loaded: PromptFile[] = [];
      for (const [path, loader] of entries) {
        const content = await loader() as string;
        const rel = path.replace(/^\/?prompts\//, '');
        const segments = rel.split('/');
        const category = segments[0];
        const file = segments.slice(1).join('/');
        const titleLine = content.split('\n').find(line => /^# /.test(line));
        const title = titleLine ? titleLine.replace(/^# /, '').trim() : file.replace('.md', '');
        loaded.push({ path, category, file, title, content, segments });
      }
      loaded.sort((a, b) => a.path.localeCompare(b.path));
      setFiles(loaded);
      setSelected(loaded[0] || null);
      // 初期状態: すべて閉じる
      setOpenMap({});
    }
    loadAll();
  }, []);

  const tree = buildTree(files);

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
                  onClick={() => setSelected(file)}
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
          <div className="prose prose-primary max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              {CATEGORY_ICONS[selected.category] ? (
                React.createElement(CATEGORY_ICONS[selected.category], { className: "h-6 w-6 text-primary" })
              ) : (
                <Icons.Folder className="h-6 w-6 text-primary" />
              )}
              <h1 className="m-0">{selected.title}</h1>
              <span className="text-xs text-primary-dark bg-light px-2 py-1 rounded ml-2">
                {CATEGORY_LABELS[selected.category] || selected.category}
              </span>
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {selected.content.replace(/^# .*\n?/, '')}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-center text-primary-dark">プロンプトを選択してください</div>
        )}
      </main>
    </div>
  );
}

export default Wiki;