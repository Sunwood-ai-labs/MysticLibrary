import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

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
    // supabase依存部分をダミー処理に置き換え
    setIsLiked(false);
    setLoading(false);
  }, [promptId]);

  const handleLike = () => {
    setLoading(true);
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    }
    setLoading(false);
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