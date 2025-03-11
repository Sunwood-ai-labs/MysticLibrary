import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isSignUp) {
        const { data: { user }, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) throw signUpError;
        if (!user) throw new Error('ユーザー登録に失敗しました');

        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: user.id, username }]);

        if (profileError) throw profileError;

        navigate('/profile');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) throw signInError;
        navigate('/profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 opacity-5">
          <FontAwesomeIcon icon={faHatWizard} className="h-32 w-32 transform rotate-12 text-primary" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <FontAwesomeIcon icon={faHatWizard} className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold font-kaisei gradient-text">
              {isSignUp ? 'アカウント作成' : 'おかえりなさい'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-primary-dark font-zen mb-1">
                  ユーザーネーム
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-dark font-zen mb-1">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary-dark font-zen mb-1">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm font-zen">{error}</div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-kaisei"
            >
              {isSignUp ? '新規登録' : 'ログイン'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-accent text-sm font-zen"
            >
              {isSignUp ? 'アカウントをお持ちの方はこちら' : 'アカウントをお持ちでない方はこちら'}
            </button>
          </div>

          <div className="highlight-box mt-8">
            <p className="font-zen text-center text-sm">
              <span className="keyword">Mystic Library</span>に参加して、
              あなたの<span className="keyword">魔法のプロンプト</span>を共有しましょう
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}