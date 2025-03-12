import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import type { Category, Tag as TagType } from '../../lib/supabase';
import { PromptCustomization } from './PromptCustomization';
import { PromptMetadata } from './PromptMetadata';
import { PromptTags } from './PromptTags';
import { CategoryModal } from './CategoryModal';
import { TagModal } from './TagModal';

export function PromptForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [iconName, setIconName] = useState('Wand');
  const [gradientFrom, setGradientFrom] = useState('#2E578C');
  const [gradientTo, setGradientTo] = useState('#BF807A');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [existingTags, setExistingTags] = useState<TagType[]>([]);
  const [popularTags, setPopularTags] = useState<TagType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesResponse, tagsResponse] = await Promise.all([
          supabase.from('categories').select('*').order('name'),
          supabase.from('tags').select('*').order('name')
        ]);

        if (categoriesResponse.error) throw categoriesResponse.error;
        if (tagsResponse.error) throw tagsResponse.error;

        setCategories(categoriesResponse.data || []);
        setExistingTags(tagsResponse.data || []);
        setPopularTags((tagsResponse.data || []).slice(0, 8));
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent, isDraft: boolean = false) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      // Create the prompt
      const { data: prompt, error: promptError } = await supabase
        .from('prompts')
        .insert([{
          title,
          content,
          description,
          category_id: categoryId || null,
          user_id: user.id,
          is_published: !isDraft,
          icon_name: iconName,
          gradient_from: gradientFrom,
          gradient_to: gradientTo
        }])
        .select()
        .single();

      if (promptError) throw promptError;

      // Process tags sequentially
      for (const tagName of selectedTags) {
        try {
          const { data: existingTags, error: searchError } = await supabase
            .from('tags')
            .select('id')
            .eq('name', tagName);

          if (searchError) throw searchError;

          let tagId;
          
          if (existingTags && existingTags.length > 0) {
            tagId = existingTags[0].id;
          } else {
            // Create new tag
            const { data: newTag, error: createError } = await supabase
              .from('tags')
              .insert([{ name: tagName }])
              .select('id')
              .single();

            if (createError) throw createError;
            tagId = newTag?.id;
          }

          if (!tagId) {
            throw new Error(`タグ "${tagName}" のIDが取得できませんでした`);
          }

          // Link tag to prompt
          const { error: linkError } = await supabase
            .from('prompt_tags')
            .insert([{
              prompt_id: prompt.id,
              tag_id: tagId
            }]);

          if (linkError) throw linkError;
        } catch (tagError) {
          console.error(`Error processing tag "${tagName}":`, tagError);
          throw new Error(`タグ "${tagName}" の処理中にエラーが発生しました`);
        }
      }

      navigate('/profile');
    } catch (err) {
      console.error('Error creating prompt:', err);
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => handleSubmit(e, false)}>
      <PromptMetadata
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        description={description}
        setDescription={setDescription}
      />

      <PromptCustomization
        iconName={iconName}
        setIconName={setIconName}
        gradientFrom={gradientFrom}
        setGradientFrom={setGradientFrom}
        gradientTo={gradientTo}
        setGradientTo={setGradientTo}
      />

      <PromptTags
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        categories={categories}
        setCategories={setCategories}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        existingTags={existingTags}
        setExistingTags={setExistingTags}
        popularTags={popularTags}
        setShowCategoryModal={setShowCategoryModal}
        setShowTagModal={setShowTagModal}
      />

      {error && (
        <div className="text-accent font-zen">
          {error}
        </div>
      )}

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 text-white rounded-lg font-kaisei hover:opacity-90 transition-opacity bg-gradient-to-r from-primary to-accent disabled:opacity-50"
        >
          公開する
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={(e) => handleSubmit(e, true)}
          className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-kaisei disabled:opacity-50"
        >
          下書き保存
        </button>
      </div>

      {showCategoryModal && (
        <CategoryModal
          categories={categories}
          setCategories={setCategories}
          setCategoryId={setCategoryId}
          onClose={() => setShowCategoryModal(false)}
        />
      )}

      {showTagModal && (
        <TagModal
          existingTags={existingTags}
          setExistingTags={setExistingTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onClose={() => setShowTagModal(false)}
        />
      )}
    </form>
  );
}