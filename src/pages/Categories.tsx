import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { Category, Prompt } from '../lib/supabase';

export function Categories() {
  const [categories, setCategories] = useState<(Category & { prompts: Prompt[] })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select(`
            *,
            prompts (
              id,
              title,
              description,
              views_count,
              likes_count,
              icon_name,
              gradient_from,
              gradient_to
            )
          `)
          .order('name');

        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8">
          <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
          <FontAwesomeIcon icon={faHatWizard} className="h-8" />
          カテゴリー一覧
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-sm border border-light p-6 space-y-4"
          >
            <h2 className="text-xl font-bold text-primary-dark font-kaisei">
              {category.name}
            </h2>
            {category.description && (
              <p className="text-primary-dark font-zen">{category.description}</p>
            )}
            <div className="space-y-4">
              {category.prompts?.slice(0, 3).map((prompt) => {
                const IconComponent = Icons[prompt.icon_name as keyof typeof Icons] || Icons.Wand;
                return (
                  <Link
                    key={prompt.id}
                    to={`/prompts/${prompt.id}`}
                    className="block p-4 rounded-lg bg-light hover:bg-primary hover:bg-opacity-10 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="h-8 w-8 rounded-lg flex items-center justify-center flowing-icon"
                        style={{
                          '--gradient-from': prompt.gradient_from || '#2E578C',
                          '--gradient-to': prompt.gradient_to || '#BF807A',
                        } as React.CSSProperties}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-kaisei text-primary-dark">
                          {prompt.title}
                        </h3>
                        {prompt.description && (
                          <p className="text-sm text-primary-dark font-zen line-clamp-1">
                            {prompt.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}