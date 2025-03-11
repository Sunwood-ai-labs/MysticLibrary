import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

type LikeButtonProps = {
  promptId: string;
  initialLikes: number;
  size?: 'sm' | 'md';
};

export function LikeButton({ promptId, initialLikes, size = 'md' }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLikeStatus() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setLoading(false);
          return;
        }

        const { data: likes } = await supabase
          .from('likes')
          .select('prompt_id')
          .eq('user_id', user.id)
          .eq('prompt_id', promptId)
          .maybeSingle();

        setIsLiked(!!likes);
      } catch (error) {
        console.error('Error checking like status:', error);
      } finally {
        setLoading(false);
      }
    }

    checkLikeStatus();
  }, [promptId]);

  const handleLike = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // TODO: Redirect to login or show login modal
        return;
      }

      setLoading(true);

      if (isLiked) {
        // Unlike
        const { error: deleteError } = await supabase
          .from('likes')
          .delete()
          .eq('user_id', user.id)
          .eq('prompt_id', promptId);

        if (deleteError) throw deleteError;

        const { error: updateError } = await supabase
          .from('prompts')
          .update({ likes_count: likesCount - 1 })
          .eq('id', promptId);

        if (updateError) throw updateError;

        setLikesCount(prev => prev - 1);
        setIsLiked(false);
      } else {
        // Like
        const { error: insertError } = await supabase
          .from('likes')
          .insert({ user_id: user.id, prompt_id: promptId });

        if (insertError) throw insertError;

        const { error: updateError } = await supabase
          .from('prompts')
          .update({ likes_count: likesCount + 1 })
          .eq('id', promptId);

        if (updateError) throw updateError;

        setLikesCount(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const textSize = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={`flex items-center space-x-1 transition-colors ${
        isLiked
          ? 'text-accent hover:text-accent-dark'
          : 'text-primary-dark hover:text-primary'
      }`}
    >
      <Heart
        className={`${iconSize} ${isLiked ? 'fill-current' : ''} ${
          loading ? 'animate-pulse' : ''
        }`}
      />
      <span className={`font-kaisei ${textSize}`}>{likesCount}</span>
    </button>
  );
}