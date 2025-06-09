import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

// Gitの情報を取得してファイルの更新日時を取得する関数
export async function getFileLastModified(filePath: string): Promise<Date | null> {
  try {
    // ローカルAPIエンドポイントを使用してGit情報を取得
    const response = await fetch(`/api/files/git-info?path=${encodeURIComponent(filePath)}`);
    
    if (!response.ok) {
      console.warn(`Git API request failed for ${filePath}:`, response.status);
      return null;
    }
    
    const data = await response.json();
    
    if (data.lastModified) {
      return new Date(data.lastModified);
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching git info for ${filePath}:`, error);
    return null;
  }
}

// 複数ファイルのGit情報を一括取得する関数
export async function getMultipleFilesLastModified(filePaths: string[]): Promise<Record<string, Date | null>> {
  try {
    const response = await fetch('/api/files/batch-git-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paths: filePaths }),
    });
    
    if (!response.ok) {
      console.warn('Batch git info request failed:', response.status);
      return {};
    }
    
    const data = await response.json();
    const results: Record<string, Date | null> = {};
    
    for (const [path, info] of Object.entries(data)) {
      if (info && typeof info === 'object' && 'lastModified' in info) {
        results[path] = new Date((info as any).lastModified);
      } else {
        results[path] = null;
      }
    }
    
    return results;
  } catch (error) {
    console.error('Error fetching batch git info:', error);
    return {};
  }
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
