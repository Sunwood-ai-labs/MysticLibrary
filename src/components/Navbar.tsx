import { Link } from 'react-router-dom';
import { Search, BookOpenCheck, Languages } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

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
              to="/wiki"
              className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="font-zen">{t('nav.promptList')}</span>
            </Link>
            <Link
              to="/wiki"
              className="flex items-center space-x-1 text-primary-dark hover:text-primary transition-colors"
            >
              <BookOpenCheck className="h-5 w-5" />
              <span className="font-zen">{t('nav.wiki')}</span>
            </Link>

            <div className="flex items-center space-x-2 border-l border-gray-300 pl-6">
              <Languages className="h-5 w-5 text-primary" />
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'ja'
                    ? 'bg-primary text-white'
                    : 'text-primary-dark hover:bg-gray-100'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-primary-dark hover:bg-gray-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
