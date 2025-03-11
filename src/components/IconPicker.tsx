import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

type IconPickerProps = {
  value: string;
  onChange: (value: string) => void;
};

// Default icons that will be shown initially
const DEFAULT_ICONS = [
  'Wand', 'Sparkles', 'Brain', 'Star', 'Heart', 'Magic', 'Rocket', 'Zap', 'Crown', 'Flame',
  'Book', 'Pen', 'Pencil', 'Palette', 'Brush', 'Image', 'Camera', 'Music', 'Video', 'Microphone',
  'Code', 'Terminal', 'Bot', 'Target', 'Compass', 'Map', 'Globe', 'Cloud', 'Database', 'Sun'
];

// Get all icon names from lucide-react, ensuring proper casing
const ALL_ICONS = Object.keys(Icons).filter(
  key => typeof Icons[key as keyof typeof Icons] === 'function' && key !== 'createLucideIcon'
);

// Function to get a random icon name
function getRandomIcon(): string {
  return DEFAULT_ICONS[Math.floor(Math.random() * DEFAULT_ICONS.length)];
}

export function IconPicker({ value, onChange }: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [displayedIcons, setDisplayedIcons] = useState<string[]>(DEFAULT_ICONS);

  // Set random initial icon if none provided
  useEffect(() => {
    if (!value || value === 'Wand') {
      onChange(getRandomIcon());
    }
  }, []);

  // Update displayed icons based on search
  useEffect(() => {
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      const filtered = ALL_ICONS
        .filter(icon => icon.toLowerCase().includes(searchLower))
        .slice(0, 30);
      setDisplayedIcons(filtered);
    } else {
      setDisplayedIcons(DEFAULT_ICONS);
    }
  }, [search]);

  const IconComponent = Icons[value as keyof typeof Icons] || Icons.Wand;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
      >
        <div className="flex items-center space-x-2">
          <IconComponent className="h-5 w-5" />
          <span>{value}</span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-primary rounded-lg shadow-lg">
          <div className="p-2">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="アイコンを検索..."
                className="w-full pl-10 pr-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            </div>
          </div>

          <div className="p-2">
            <div className="text-sm text-primary-dark font-zen mb-2">
              {search ? 'アイコン検索結果' : 'アイコン一覧'}
            </div>
            <div className="grid grid-cols-5 gap-2 max-h-[400px] overflow-y-auto">
              {displayedIcons.map((iconName) => {
                const Icon = Icons[iconName as keyof typeof Icons];
                return Icon ? (
                  <button
                    key={iconName}
                    type="button"
                    onClick={() => {
                      onChange(iconName);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={cn(
                      "p-3 rounded-md hover:bg-primary hover:bg-opacity-10 flex flex-col items-center justify-center gap-1 group",
                      value === iconName && "bg-primary bg-opacity-10"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-xs font-zen text-primary-dark truncate w-full text-center">
                      {iconName}
                    </span>
                  </button>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}