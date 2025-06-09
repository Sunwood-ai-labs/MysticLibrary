import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

// 複数ファイルのGit情報を一括取得する関数
import gitInfo from '../assets/git-info.json';

export async function getMultipleFilesLastModified(filePaths: string[]): Promise<Record<string, Date | null>> {
  // ビルド時に生成されたJSONファイルから日付情報を取得
  const results: Record<string, Date | null> = {};
  for (const path of filePaths) {
    const dateStr = (gitInfo as Record<string, string | undefined>)[path];
    results[path] = dateStr ? new Date(dateStr) : generateFallbackDate(path);
  }
  return results;
}

// フォールバック用の日時生成（Git情報が取得できない場合）
export function generateFallbackDate(filePath: string): Date {
  // ファイル名にバージョン番号がある場合はそれを基準にする
  const fileName = filePath.split('/').pop() || '';
  const versionMatch = fileName.match(/v(\d+(?:\.\d+)?)/);
  if (versionMatch) {
    const version = parseFloat(versionMatch[1]);
    // バージョンが高いほど新しいとする
    const baseTime = new Date('2024-01-01').getTime();
    return new Date(baseTime + version * 30 * 24 * 60 * 60 * 1000);
  }
  
  // ファイル名の文字列をハッシュ化して一意の日時を生成
  let hash = 0;
  for (let i = 0; i < filePath.length; i++) {
    const char = filePath.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32bit整数に変換
  }
  
  // 過去365日間の範囲でランダムな日時を生成
  const now = Date.now();
  const oneYearAgo = now - (365 * 24 * 60 * 60 * 1000);
  return new Date(oneYearAgo + (Math.abs(hash) % (365 * 24 * 60 * 60 * 1000)));
}
