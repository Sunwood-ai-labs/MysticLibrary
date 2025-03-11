import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faTrophy, faMedal, faCrown } from '@fortawesome/free-solid-svg-icons';
import { Eye, Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Category, Tag, Prompt } from '../lib/supabase';
import { Link } from 'react-router-dom';

type RankingType = 'likes' | 'views';
type FilterType = 'all' | 'category' | 'tag';

export function Rankings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [rankingType, setRankingType] = useState<RankingType>(
    (searchParams.get('type') as RankingType) || 'likes'
  );
  const [filterType, setFilterType] = useState<FilterType>(
    (searchParams.get('filter') as FilterType) || 'all'
  );
  const [selectedFilter, setSelectedFilter] = useState<string>(
    searchParams.get('value') || ''
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesRes, tagsRes] = await Promise.all([
          supabase.from('categories').select('*').order('name'),
          supabase.from('tags').select('*').order('name')
        ]);

        if (categoriesRes.error) throw categoriesRes.error;
        if (tagsRes.error) throw tagsRes.error;

        setCategories(categoriesRes.data || []);
        setTags(tagsRes.data || []);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPrompts() {
      setLoading(true);
      try {
        let query = supabase
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
            category:categories(id, name),
            user:profiles!prompts_user_id_fkey(username),
            tags:prompt_tags(
              tag:tags(id, name)
            )
          `)
          .eq('is_published', true)
          .order(rankingType === 'likes' ? 'likes_count' : 'views_count', { ascending: false });

        if (filterType === 'category' && selectedFilter) {
          query = query.eq('category_id', selectedFilter);
        } else if (filterType === 'tag' && selectedFilter) {
          // Use a subquery to filter by tag
          const { data: promptIds } = await supabase
            .from('prompt_tags')
            .select('prompt_id')
            .eq('tag_id', selectedFilter);

          if (promptIds) {
            query = query.in('id', promptIds.map(p => p.prompt_id));
          }
        }

        let { data, error } = await query.limit(100);

        if (error) throw error;

        // Transform the data to match the expected format
        const transformedData = data?.map(prompt => ({
          ...prompt,
          tags: prompt.tags
            .filter((t: any) => t.tag) // Filter out null tags
            .map((t: any) => t.tag)
        }));

        setPrompts(transformedData || []);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPrompts();
  }, [rankingType, filterType, selectedFilter]);

  const updateFilters = (type: RankingType, filter: FilterType, value: string = '') => {
    setRankingType(type);
    setFilterType(filter);
    setSelectedFilter(value);
    
    const params = new URLSearchParams();
    params.set('type', type);
    params.set('filter', filter);
    if (value) params.set('value', value);
    setSearchParams(params);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <FontAwesomeIcon icon={faCrown} className="text-yellow-400" />;
      case 2:
        return <FontAwesomeIcon icon={faTrophy} className="text-gray-400" />;
      case 3:
        return <FontAwesomeIcon icon={faMedal} className="text-amber-600" />;
      default:
        return rank;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
          <FontAwesomeIcon icon={faHatWizard} className="h-8" />faHatWizard
          ランキング
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-light p-6">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={() => updateFilters(rankingType, 'all')}
              className={`px-4 py-2 rounded-lg font-zen transition-colors ${
                filterType === 'all'
                  ? 'bg-primary text-white'
                  : 'text-primary hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              全体
            </button>
            <button
              onClick={() => updateFilters(rankingType, 'category')}
              className={`px-4 py-2 rounded-lg font-zen transition-colors ${
                filterType === 'category'
                  ? 'bg-primary text-white'
                  : 'text-primary hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              カテゴリー
            </button>
            <button
              onClick={() => updateFilters(rankingType, 'tag')}
              className={`px-4 py-2 rounded-lg font-zen transition-colors ${
                filterType === 'tag'
                  ? 'bg-primary text-white'
                  : 'text-primary hover:bg-primary hover:bg-opacity-10'
              }`}
            >
              タグ
            </button>
          </div>

          {filterType === 'category' && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => updateFilters(rankingType, 'category', category.id)}
                  className={`px-3 py-1 rounded-full text-sm font-zen transition-colors ${
                    selectedFilter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-primary bg-opacity-10 text-primary hover:bg-opacity-20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {filterType === 'tag' && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => updateFilters(rankingType, 'tag', tag.id)}
                  className={`px-3 py-1 rounded-full text-sm font-zen transition-colors ${
                    selectedFilter === tag.id
                      ? 'bg-accent text-white'
                      : 'bg-accent bg-opacity-10 text-accent hover:bg-opacity-20'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={() => updateFilters('likes', filterType, selectedFilter)}
              className={`px-4 py-2 rounded-lg font-zen transition-colors flex items-center gap-2 ${
                rankingType === 'likes'
                  ? 'bg-accent text-white'
                  : 'text-accent hover:bg-accent hover:bg-opacity-10'
              }`}
            >
              <Heart className="h-4 w-4" />
              いいね数
            </button>
            <button
              onClick={() => updateFilters('views', filterType, selectedFilter)}
              className={`px-4 py-2 rounded-lg font-zen transition-colors flex items-center gap-2 ${
                rankingType === 'views'
                  ? 'bg-accent text-white'
                  : 'text-accent hover:bg-accent hover:bg-opacity-10'
              }`}
            >
              <Eye className="h-4 w-4" />
              閲覧数
            </button>
          </div>
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
          <p className="text-primary-dark font-zen">プロンプトが見つかりませんでした。</p>
        </div>
      ) : (
        <div className="space-y-4">
          {prompts.map((prompt, index) => {
            const IconComponent = Icons[prompt.icon_name as keyof typeof Icons] || Icons.Wand;
            const gradientFrom = prompt.gradient_from || '#2E578C';
            const gradientTo = prompt.gradient_to || '#BF807A';

            return (
              <Link
                key={prompt.id}
                to={`/prompts/${prompt.id}`}
                className="block bg-white rounded-xl shadow-sm border border-light hover:shadow-md transition-all overflow-hidden"
              >
                <div className="flex items-center p-4">
                  <div className="w-12 flex items-center justify-center font-kaisei text-xl">
                    {getRankIcon(index + 1)}
                  </div>
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                    }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-kaisei text-lg font-bold text-primary-dark">
                      {prompt.title}
                    </h3>
                    <p className="text-sm text-primary-dark font-zen">
                      作成者：{prompt.user?.username}
                    </p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-primary-dark">
                      <Heart className={`h-5 w-5 ${rankingType === 'likes' ? 'text-accent' : ''}`} />
                      <span className="font-kaisei">{prompt.likes_count}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-dark">
                      <Eye className={`h-5 w-5 ${rankingType === 'views' ? 'text-accent' : ''}`} />
                      <span className="font-kaisei">{prompt.views_count}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}