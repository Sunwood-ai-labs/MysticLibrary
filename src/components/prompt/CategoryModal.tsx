import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Category } from '../../lib/supabase';

type CategoryModalProps = {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  setCategoryId: (id: string) => void;
  onClose: () => void;
};

export function CategoryModal({
  categories,
  setCategories,
  setCategoryId,
  onClose
}: CategoryModalProps) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');
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

      const { data: category, error: categoryError } = await supabase
        .from('categories')
        .insert([{
          name: newCategoryName,
          description: newCategoryDescription || null
        }])
        .select()
        .single();

      if (categoryError) throw categoryError;

      setCategories([...categories, category]);
      setCategoryId(category.id);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'カテゴリーの作成に失敗しました');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold text-primary-dark font-kaisei mb-4">
          新規カテゴリー作成
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium text-primary-dark font-zen mb-1">
              カテゴリー名
            </label>
            <input
              type="text"
              id="categoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
              required
            />
          </div>
          <div>
            <label htmlFor="categoryDescription" className="block text-sm font-medium text-primary-dark font-zen mb-1">
              説明（任意）
            </label>
            <textarea
              id="categoryDescription"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
              rows={3}
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