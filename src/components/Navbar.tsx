import { Link, useNavigate } from 'react-router-dom';
import { Search, PlusCircle, User, LogOut, Trophy, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

export function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FontAwesomeIcon 
              icon={faHatWizard} 
              className="h-6 w-6 text-primary animate-bounce"
            />
            <span className="text-xl font-bold font-kaisei gradient-text">
              Mystic Library
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/browse" 
              className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="font-zen">プロンプト一覧</span>
            </Link>
            <Link 
              to="/rankings" 
              className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
            >
              <Trophy className="h-5 w-5" />
              <span className="font-zen">ランキング</span>
            </Link>
            <Link 
              to="/docs" 
              className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span className="font-zen">API</span>
            </Link>
            {user && (
              <Link 
                to="/create" 
                className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
              >
                <PlusCircle className="h-5 w-5" />
                <span className="font-zen">新規作成</span>
              </Link>
            )}
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="font-zen">プロフィール</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-zen">ログアウト</span>
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity font-zen"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}