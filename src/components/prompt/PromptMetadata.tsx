type PromptMetadataProps = {
  title: string;
  setTitle: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
};

export function PromptMetadata({
  title,
  setTitle,
  content,
  setContent,
  description,
  setDescription
}: PromptMetadataProps) {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-primary-dark font-zen">
          タイトル
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          placeholder="プロンプトのタイトルを入力"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="block text-sm font-medium text-primary-dark font-zen">
          プロンプト内容
        </label>
        <textarea
          id="content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          placeholder="プロンプトを入力してください..."
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-primary-dark font-zen">
          説明
        </label>
        <textarea
          id="description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          placeholder="このプロンプトの使い方や効果を説明してください..."
        />
      </div>
    </>
  );
}