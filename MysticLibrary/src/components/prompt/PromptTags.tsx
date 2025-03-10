import { useState, useEffect } from 'react';
import { Tag, Plus } from 'lucide-react';
import type { Category, Tag as TagType } from '../../lib/supabase';

type PromptTagsProps = {
  categoryId: string;
  setCategoryId: (value: string) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  existingTags: TagType[];
  setExistingTags: (tags: TagType[]) => void;
  popularTags: TagType[];
  setShowCategoryModal: (show: boolean) => void;
  setShowTagModal: (show: boolean) => void;
};

export function PromptTags({
  categoryId,
  setCategoryId,
  categories,
  selectedTags,
  setSelectedTags,
  existingTags,
  popularTags,
  setShowCategoryModal,
  setShowTagModal
}: PromptTagsProps) {
  const [tagInput, setTagInput] = useState('');
  const [suggestedTags, setSuggestedTags] = useState<TagType[]>([]);

  useEffect(() => {
    if (tagInput.trim()) {
      const suggestions = existingTags
        .filter(tag => 
          tag.name.toLowerCase().includes(tagInput.toLowerCase()) &&
          !selectedTags.includes(tag.name)
        )
        .slice(0, 5);
      setSuggestedTags(suggestions);
    } else {
      setSuggestedTags([]);
    }
  }, [tagInput, existingTags, selectedTags]);

  const handleTagSelect = (tagName: string) => {
    if (!selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
    }
    setTagInput('');
    setSuggestedTags([]);
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (suggestedTags.length > 0) {
        handleTagSelect(suggestedTags[0].name);
      } else {
        handleTagSelect(tagInput.trim());
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="category" className="block text-sm font-medium text-primary-dark font-zen">
            カテゴリー
          </label>
          <button
            type="button"
            onClick={() => setShowCategoryModal(true)}
            className="text-sm text-primary hover:text-accent font-zen flex items-center gap-1"
          >
            <Plus className="h-4 w-4" />
            新規カテゴリー
          </button>
        </div>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
        >
          <option value="">カテゴリーを選択</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-primary-dark font-zen">
            タグ
          </label>
          <button
            type="button"
            onClick={() => setShowTagModal(true)}
            className="text-sm text-primary hover:text-accent font-zen flex items-center gap-1"
          >
            <Plus className="h-4 w-4" />
            新規タグ
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 min-h-[2rem]">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-zen bg-primary bg-opacity-10 text-primary"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-primary hover:text-accent"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInputKeyDown}
              className="w-full pl-10 pr-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
              placeholder="タグを入力または選択"
            />
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            {suggestedTags.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-primary rounded-lg shadow-lg">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => handleTagSelect(tag.name)}
                    className="w-full px-4 py-2 text-left hover:bg-primary hover:bg-opacity-10 font-zen"
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {popularTags.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-primary-dark font-zen">人気のタグ</p>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => handleTagSelect(tag.name)}
                    disabled={selectedTags.includes(tag.name)}
                    className={`px-3 py-1 rounded-full text-sm font-zen transition-colors ${
                      selectedTags.includes(tag.name)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-primary bg-opacity-10 text-primary hover:bg-opacity-20'
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}