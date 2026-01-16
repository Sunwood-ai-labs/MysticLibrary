import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-light mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Orynth Badge */}
        <div className="flex justify-center mb-6">
          <a
            href="https://orynth.dev/projects/mystic-prompt-open-library"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://orynth.dev/api/badge/mystic-prompt-open-library?theme=light&style=minimal"
              alt="Featured on Orynth"
              width="180"
              height="48"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          {/* X (Twitter) Link - Prominently displayed */}
          <a
            href="https://x.com/hAru_mAki_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary-dark hover:text-primary transition-colors group"
          >
            <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-zen font-semibold text-lg">Maki@Sunwood AI Labs. (@hAru_mAki_ch)</span>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/Sunwood-ai-labs/MysticLibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary-dark hover:text-primary transition-colors group"
          >
            <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-zen">Sunwood-ai-labs/MysticLibrary</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-light text-center">
          <div className="flex items-center justify-center space-x-2 text-primary-dark">
            <FontAwesomeIcon icon={faHatWizard} className="h-4 w-4 text-primary" />
            <span className="font-zen text-sm">
              © 2024 Mystic Library. Released under the MIT License.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
