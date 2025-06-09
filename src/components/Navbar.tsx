import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
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
            <span className="text-primary-dark text-sm font-zen px-3 py-1 bg-gray-100 rounded-lg">
              📚 静的サイト版
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
