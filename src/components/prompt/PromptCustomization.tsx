import * as Icons from 'lucide-react';
import { IconPicker } from '../IconPicker';
import { ColorPicker } from '../ColorPicker';
import { isValidHexColor } from '../../lib/utils';

type PromptCustomizationProps = {
  iconName: string;
  setIconName: (value: string) => void;
  gradientFrom: string;
  setGradientFrom: (value: string) => void;
  gradientTo: string;
  setGradientTo: (value: string) => void;
};

export function PromptCustomization({
  iconName,
  setIconName,
  gradientFrom,
  setGradientFrom,
  gradientTo,
  setGradientTo
}: PromptCustomizationProps) {
  const IconComponent = Icons[iconName as keyof typeof Icons] || Icons.Wand;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-primary-dark font-zen">
            アイコン
          </label>
          <IconPicker value={iconName} onChange={setIconName} />
        </div>
        <div className="space-y-4">
          <ColorPicker
            label="グラデーション開始色"
            value={gradientFrom}
            onChange={setGradientFrom}
          />
          <ColorPicker
            label="グラデーション終了色"
            value={gradientTo}
            onChange={setGradientTo}
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
                background: `linear-gradient(to right, ${
                  isValidHexColor(gradientFrom) ? gradientFrom : '#2E578C'
                }, ${
                  isValidHexColor(gradientTo) ? gradientTo : '#BF807A'
                })`
              }}
            >
              <IconComponent className="h-10 w-10 text-white" />
            </div>
            <div
              className="absolute -z-10 inset-0 opacity-10 scale-150 blur-sm"
              style={{
                background: `linear-gradient(to right, ${
                  isValidHexColor(gradientFrom) ? gradientFrom : '#2E578C'
                }, ${
                  isValidHexColor(gradientTo) ? gradientTo : '#BF807A'
                })`
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}