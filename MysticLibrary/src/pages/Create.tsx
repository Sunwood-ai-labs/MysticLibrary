import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { PromptForm } from '../components/prompt/PromptForm';
import type { Category, Tag } from '../lib/supabase';

export function Create() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [existingTags, setExistingTags] = useState<Tag[]>([]);
  const [popularTags, setPopularTags] = useState<Tag[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const [categoriesResponse, tagsResponse] = await Promise.all([
          supabase.from('categories').select('*').order('name'),
          supabase.from('tags').select('*').order('name')
        ]);

        if (categoriesResponse.error) throw categoriesResponse.error;
        if (tagsResponse.error) throw tagsResponse.error;

        setCategories(categoriesResponse.data || []);
        setExistingTags(tagsResponse.data || []);
        // Get the 8 most recently created tags as popular tags
        setPopularTags((tagsResponse.data || []).slice(0, 8));
      } catch (err) {
        console.error('Error fetching initial data:', err);
      } finally {
        setInitialLoading(false);
      }
    }

    fetchInitialData();
  }, []);

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8">
          <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-primary-dark font-kaisei">新規プロンプト作成</h1>
      <PromptForm />
    </div>
  );
}