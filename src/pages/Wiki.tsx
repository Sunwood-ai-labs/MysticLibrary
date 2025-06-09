import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
};

const mdFiles = import.meta.glob('/prompts/**/*.md', { query: '?raw', import: 'default' });

export function Wiki() {
  const [files, setFiles] = useState<PromptFile[]>([]);
  const [selected, setSelected] = useState<PromptFile | null>(null);
  const [openCats, setOpenCats] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function loadAll() {
      const entries = Object.entries(mdFiles);
      const loaded: PromptFile[] = [];
      for (const [path, loader] of entries) {
        const content = await loader() as string;
        const rel = path.replace(/^\/?prompts\//, '');
        const [category, ...rest] = rel.split('/');
        const file = rest.join('/');
        const titleLine = content.split('\n').find(line => /^# /.test(line));
        const title = titleLine ? titleLine.replace(/^# /, '').trim() : file.replace('.md', '');
        loaded.push({ path, category, file, title, content });
      }
      loaded.sort((a, b) => {
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        return a.file.localeCompare(b.file);
      });
      setFiles(loaded);
      setSelected(loaded[0] || null);
      // 初期状態で全カテゴリを開く
      const cats: Record<string, boolean> = {};
      loaded.forEach(f => { cats[f.category] = true; });
      setOpenCats(cats);
    }
    loadAll();
  }, []);

  // カテゴリごとにグループ化
  const grouped: Record<string, PromptFile[]> = {};
  for (const f of files) {
    if (!grouped[f.category]) grouped[f.category] = [];
    grouped[f.category].push(f);
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
        <ul className="space-y-2">
          {Object.entries(grouped).map(([cat, files]) => {
            const Icon = CATEGORY_ICONS[cat] || Icons.Folder;
            const isOpen = openCats[cat];
            return (
              <li key={cat}>
                <button
                  className="flex items-center gap-2 w-full font-semibold text-primary-dark mb-1 hover:bg-primary/10 rounded px-2 py-1 transition"
                  onClick={() => setOpenCats(prev => ({ ...prev, [cat]: !prev[cat] }))}
                  aria-expanded={isOpen}
                >
                  <Icon className="h-4 w-4" />
                  <span>{CATEGORY_LABELS[cat] || cat}</span>
                  <span className="ml-auto text-[10px] text-primary-dark opacity-60">{isOpen ? '▼' : '▶'}</span>
                </button>
                {isOpen && (
                  <ul className="ml-6 space-y-1">
                    {files.map(f => (
                      <li key={f.path}>
                        <button
                          className={`text-left w-full px-2 py-1 rounded hover:bg-primary/10 transition ${
                            selected?.path === f.path ? 'bg-primary/10 font-bold text-primary' : 'text-primary-dark'
                          }`}
                          onClick={() => setSelected(f)}
                        >
                          {f.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
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