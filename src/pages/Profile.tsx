import { Settings, BookOpen, Heart, Eye, Key } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Profile as ProfileType, Prompt } from '../lib/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { ApiKeys } from '../components/profile/ApiKeys';

export function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'prompts' | 'api-keys'>('prompts');

  useEffect(() => {
    async function getProfile() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          navigate('/auth');
          return;
        }

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;
        setProfile(profileData);

        const { data: promptsData, error: promptsError } = await supabase
          .from('prompts')
          .select(`
            id,
            title,
            description,
            views_count,
            likes_count,
            category:categories(name),
            is_published
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (promptsError) throw promptsError;
        setPrompts(promptsData || []);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8">
          <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.username}
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <FontAwesomeIcon icon={faHatWizard} className="h-8 w-8 text-white" />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-dark font-kaisei">{profile.username}</h1>
            <p className="text-primary-dark font-zen">
              {new Date(profile.created_at!).toLocaleDateString('ja-JP')}に参加
            </p>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-zen">
          <Settings className="h-5 w-5" />
          <span>プロフィール編集</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-light p-6">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <div className="text-2xl font-bold text-primary-dark font-kaisei">{prompts.length}</div>
              <div className="text-sm text-primary-dark font-zen">プロンプト</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-accent" />
            <div>
              <div className="text-2xl font-bold text-primary-dark font-kaisei">
                {prompts.reduce((sum, prompt) => sum + (prompt.likes_count || 0), 0)}
              </div>
              <div className="text-sm text-primary-dark font-zen">いいね</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex space-x-4 border-b border-light">
          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-4 py-2 font-zen transition-colors relative ${
              activeTab === 'prompts'
                ? 'text-primary'
                : 'text-primary-dark hover:text-primary'
            }`}
          >
            マイプロンプト
            {activeTab === 'prompts' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('api-keys')}
            className={`px-4 py-2 font-zen transition-colors relative ${
              activeTab === 'api-keys'
                ? 'text-primary'
                : 'text-primary-dark hover:text-primary'
            }`}
          >
            APIキー
            {activeTab === 'api-keys' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {activeTab === 'prompts' ? (
          prompts.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-xl shadow-sm border border-light">
              <p className="text-primary-dark font-zen">まだプロンプトを投稿していません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prompts.map((prompt) => (
                <div key={prompt.id} className="bg-white rounded-xl shadow-sm border border-light p-6 hover:shadow-md transition-all">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary-dark font-kaisei">{prompt.title}</h3>
                    <p className="text-primary-dark line-clamp-2 font-zen">{prompt.description}</p>
                    <div className="flex items-center justify-between">
                      {prompt.category && (
                        <span className="px-3 py-1 rounded-full text-sm font-zen bg-primary bg-opacity-10 text-primary">
                          {prompt.category.name}
                        </span>
                      )}
                      <div className="flex items-center space-x-4 text-sm text-primary-dark">
                        <span className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="font-kaisei">{prompt.views_count}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="font-kaisei">{prompt.likes_count}</span>
                        </span>
                      </div>
                    </div>
                    {!prompt.is_published && (
                      <div className="mt-2">
                        <span className="text-sm text-accent font-zen">下書き</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <ApiKeys />
        )}
      </div>
    </div>
  );
}