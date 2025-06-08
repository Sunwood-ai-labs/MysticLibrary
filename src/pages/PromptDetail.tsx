import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Prompt } from '../lib/supabase';
import { Edit, Copy, Share2, Eye, Trash2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LikeButton } from '../components/LikeButton';
import { IconPicker } from '../components/IconPicker';
import { ColorPicker } from '../components/ColorPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

export function PromptDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedIconName, setEditedIconName] = useState('Wand');
  const [editedGradientFrom, setEditedGradientFrom] = useState('#2E578C');
  const [editedGradientTo, setEditedGradientTo] = useState('#BF807A');
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    async function fetchPrompt() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setCurrentUser(user?.id || null);

        const { data, error } = await supabase
          .from('prompts')
          .select(`
            *,
            category:categories(name),
            user:profiles!prompts_user_id_fkey(username),
            tags!prompt_tags(
              id,
              name
            )
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setPrompt(data);
        setEditedTitle(data.title);
        setEditedContent(data.content);
        setEditedDescription(data.description || '');
        setEditedIconName(data.icon_name || 'Wand');
        setEditedGradientFrom(data.gradient_from || '#2E578C');
        setEditedGradientTo(data.gradient_to || '#BF807A');

        // Increment views count
        const { error: updateError } = await supabase
          .from('prompts')
          .update({ views_count: (data.views_count || 0) + 1 })
          .eq('id', id);

        if (updateError) console.error('Error updating views count:', updateError);
      } catch (error) {
        console.error('Error fetching prompt:', error);
        navigate('/browse');
      } finally {
        setLoading(false);
      }
    }

    fetchPrompt();
  }, [id, navigate]);

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from('prompts')
        .update({
          title: editedTitle,
          content: editedContent,
          description: editedDescription,
          icon_name: editedIconName,
          gradient_from: editedGradientFrom,
          gradient_to: editedGradientTo,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;

      setPrompt(prev => prev ? {
        ...prev,
        title: editedTitle,
        content: editedContent,
        description: editedDescription,
        icon_name: editedIconName,
        gradient_from: editedGradientFrom,
        gradient_to: editedGradientTo
      } : null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating prompt:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('prompts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      navigate('/profile');
    } catch (error) {
      console.error('Error deleting prompt:', error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt?.content || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (error) {
      console.error('Error copying share link:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8">
          <FontAwesomeIcon icon={faHatWizard} className="text-primary" />
        </div>
      </div>
    );
  }

  if (!prompt) return null;

  const IconComponent = (Icons[prompt.icon_name as keyof typeof Icons] as React.ElementType) || Icons.Wand;
  const EditIconComponent = (Icons[editedIconName as keyof typeof Icons] as React.ElementType) || Icons.Wand;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-light p-8">
        {isEditing ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="flex-1 text-2xl font-bold font-kaisei px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="ml-4 p-2 text-accent hover:bg-accent hover:bg-opacity-10 rounded-lg transition-colors"
                title="削除"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-dark font-zen">
                  アイコン
                </label>
                <IconPicker value={editedIconName} onChange={setEditedIconName} />
              </div>
              <div className="space-y-4">
                <ColorPicker
                  label="グラデーション開始色"
                  value={editedGradientFrom}
                  onChange={setEditedGradientFrom}
                  isEdit={true}
                />
                <ColorPicker
                  label="グラデーション終了色"
                  value={editedGradientTo}
                  onChange={setEditedGradientTo}
                  isEdit={true}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-light p-6">
              <div className="text-center mb-4">
                <p className="text-sm text-primary-dark font-zen mb-2">プレビュー</p>
                <div className="inline-block relative">
                  <div
                    className="h-20 w-20 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(to right, ${editedGradientFrom}, ${editedGradientTo})`
                    }}
                  >
                    <EditIconComponent className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full font-zen px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={3}
              placeholder="プロンプトの説明..."
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full font-zen px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={10}
              placeholder="プロンプト内容..."
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-primary font-zen hover:bg-primary hover:bg-opacity-10 rounded-lg"
              >
                キャンセル
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-zen hover:opacity-90"
              >
                保存
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold font-kaisei text-primary-dark">
                {prompt.title}
              </h1>
              <div className="flex items-center space-x-2">
                {currentUser === prompt.user_id && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-colors"
                    title="編集"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={handleCopy}
                  className="p-2 text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-colors relative"
                  title="コピー"
                >
                  <Copy className="h-5 w-5" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded">
                      コピーしました！
                    </span>
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg transition-colors relative"
                  title="共有"
                >
                  <Share2 className="h-5 w-5" />
                  {shared && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded">
                      URLをコピーしました！
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to right, ${prompt.gradient_from || '#2E578C'}, ${prompt.gradient_to || '#BF807A'})`
                  }}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-primary-dark font-zen">
                  作成者：{prompt.user?.username}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-primary-dark">
                <span className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span className="font-kaisei">{prompt.views_count}</span>
                </span>
                <LikeButton promptId={prompt.id} initialLikes={prompt.likes_count || 0} />
              </div>
            </div>

            {prompt.description && (
              <p className="text-primary-dark font-zen">{prompt.description}</p>
            )}

            <div className="flex flex-wrap gap-2">
              {prompt.category && (
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r text-white text-xs font-bold transition-opacity hover:opacity-90"
                  style={{
                    background: `linear-gradient(to right, ${prompt.gradient_from || '#2E578C'}, ${prompt.gradient_to || '#BF807A'})`
                  }}
                >
                  {prompt.category.name}
                </span>
              )}
              {prompt.tags && prompt.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-accent to-primary text-white text-xs font-bold transition-opacity hover:opacity-90"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <div className="prose prose-primary max-w-none font-zen">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {prompt.content}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-primary-dark font-kaisei mb-4">
              プロンプトを削除
            </h2>
            <p className="text-primary-dark font-zen mb-6">
              このプロンプトを削除してもよろしいですか？この操作は取り消せません。
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-primary font-zen hover:bg-primary hover:bg-opacity-10 rounded-lg"
              >
                キャンセル
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-accent text-white rounded-lg font-zen hover:opacity-90"
              >
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}