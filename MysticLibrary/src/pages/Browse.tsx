import { Search, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import type { Prompt } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { LikeButton } from '../components/LikeButton';
import * as Icons from 'lucide-react';

export function Browse() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrompts() {
      try {
        const { data, error } = await supabase
          .from('prompts')
          .select(`
            id,
            title,
            description,
            views_count,
            likes_count,
            icon_name,
            gradient_from,
            gradient_to,
            category:categories(name),
            user:profiles!prompts_user_id_fkey(username),
            tags!prompt_tags(
              id,
              name
            )
          `)
          .eq('is_published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPrompts(data || []);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrompts();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
          <FontAwesomeIcon icon={faHatWizard} className="h-8" />
          プロンプト一覧
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="プロンプトを検索..."
            className="pl-10 pr-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin h-8 w-8 mx-auto">
            <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
          </div>
        </div>
      ) : prompts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-primary-dark font-zen">まだプロンプトが投稿されていません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt) => {
            const IconComponent = Icons[prompt.icon_name as keyof typeof Icons] || Icons.Wand;
            const gradientFrom = prompt.gradient_from || '#2E578C';
            const gradientTo = prompt.gradient_to || '#BF807A';
            
            return (
              <div 
                key={prompt.id} 
                className="card bg-white rounded-xl shadow-md border border-light p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 flowing-background"
                  style={{
                    '--gradient-from': gradientFrom,
                    '--gradient-to': gradientTo,
                  } as React.CSSProperties}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <IconComponent className="h-48 w-48 transform rotate-12" />
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  <Link
                    to={`/prompts/${prompt.id}`}
                    className="block"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="flowing-icon h-8 w-8 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                        style={{
                          '--gradient-from': gradientFrom,
                          '--gradient-to': gradientTo,
                        } as React.CSSProperties}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-kaisei text-lg font-bold text-primary-dark">
                          <span className="keyword">{prompt.title}</span>
                        </h3>
                        <p className="text-sm text-primary-dark font-zen">
                          作成者：{prompt.user?.username}
                        </p>
                      </div>
                    </div>
                    <p className="text-primary-dark line-clamp-3 font-zen mt-2">{prompt.description}</p>
                  </Link>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {prompt.category && (
                        <span className="px-3 py-1 rounded-full text-sm font-zen bg-primary bg-opacity-10 text-primary transition-colors duration-300 hover:bg-opacity-20">
                          {prompt.category.name}
                        </span>
                      )}
                      {prompt.tags && prompt.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="px-3 py-1 rounded-full text-sm font-zen bg-accent bg-opacity-10 text-accent transition-colors duration-300 hover:bg-opacity-20"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-end space-x-4 text-sm text-primary-dark">
                      <span className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span className="font-kaisei">{prompt.views_count}</span>
                      </span>
                      <LikeButton promptId={prompt.id} initialLikes={prompt.likes_count || 0} size="sm" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="highlight-box mt-8">
        <p className="font-zen text-center text-lg">
          <span className="keyword">新しいプロンプト</span>は毎日追加されています。
          あなたの<span className="keyword">アイデア</span>も共有してみませんか？
        </p>
      </div>
    </div>
  );
}