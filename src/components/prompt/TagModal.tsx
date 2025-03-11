import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Tag } from '../../lib/supabase';

type TagModalProps = {
  existingTags: Tag[];
  setExistingTags: (tags: Tag[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  onClose: () => void;
};

export function TagModal({
  existingTags,
  setExistingTags,
  selectedTags,
  setSelectedTags,
  onClose
}: TagModalProps) {
  const [newTagName, setNewTagName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      // First check if tag already exists
      const { data: existingTag } = await supabase
        .from('tags')
        .select('id, name')
        .eq('name', newTagName)
        .single();

      if (existingTag) {
        setSelectedTags([...selectedTags, existingTag.name]);
        onClose();
        return;
      }

      // Create new tag if it doesn't exist
      const { data: tag, error: tagError } = await supabase
        .from('tags')
        .insert([{ name: newTagName }])
        .select()
        .single();

      if (tagError) throw tagError;

      setExistingTags([...existingTags, tag]);
      setSelectedTags([...selectedTags, tag.name]);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'タグの作成に失敗しました');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold text-primary-dark font-kaisei mb-4">
          新規タグ作成
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tagName" className="block text-sm font-medium text-primary-dark font-zen mb-1">
              タグ名
            </label>
            <input
              type="text"
              id="tagName"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
              required
            />
          </div>

          {error && (
            <div className="text-accent font-zen">
              {error}
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-primary font-zen hover:bg-primary hover:bg-opacity-10 rounded-lg"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-zen hover:opacity-90"
            >
              作成
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}