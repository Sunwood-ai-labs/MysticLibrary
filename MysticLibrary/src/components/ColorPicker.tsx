import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

type ColorPickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isEdit?: boolean;
};

const PRESET_COLORS = [
  '#2E578C', '#182D40', '#BF807A', '#592A2A',
  '#4A90E2', '#2ECC71', '#E74C3C', '#F1C40F',
  '#9B59B6', '#34495E', '#1ABC9C', '#E67E22',
  '#7F8C8D', '#16A085', '#8E44AD', '#D35400'
];

// Function to get a random color from the preset colors
function getRandomColor(): string {
  return PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)];
}

export function ColorPicker({ label, value, onChange, isEdit = false }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Set random initial color only for new prompts
  useEffect(() => {
    if (!isEdit && (value === '#2E578C' || value === '#BF807A')) {
      onChange(getRandomColor());
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <label className="block text-sm font-medium text-primary-dark font-zen mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center space-x-2 px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen"
      >
        <div
          className="h-6 w-6 rounded-md border border-gray-200"
          style={{ backgroundColor: value }}
        />
        <span>{value}</span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-primary rounded-lg shadow-lg p-3">
          <div className="grid grid-cols-4 gap-2">
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => {
                  onChange(color);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full aspect-square rounded-md border",
                  value === color && "ring-2 ring-primary"
                )}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="mt-3">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="#000000"
              className="w-full px-3 py-1 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}