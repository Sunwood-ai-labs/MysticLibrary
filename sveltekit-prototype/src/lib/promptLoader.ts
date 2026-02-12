// マークダウンローダー
// import.meta.globを使用してプロンプトファイルを読み込み、言語別フィルタリングとメタデータ抽出を行う

import type { PromptMetadata, PromptsByCategory } from './types';

// Locale型は i18n.ts からインポートするため、ここでは再定義しない
export type { Locale } from './stores/i18n';
import type { Locale } from './stores/i18n';

// プロンプトファイルをViteのimport.meta.globで読み込み
// /prj/MysticLibrary/prompts/**/*.md と **/*.sh を対象とする
type ModuleLoader = () => Promise<string>;

const mdModules = import.meta.glob('/prj/MysticLibrary/prompts/**/*.md', {
	query: '?raw',
	import: 'default'
}) as Record<string, ModuleLoader>;

const shModules = import.meta.glob('/prj/MysticLibrary/prompts/**/*.sh', {
	query: '?raw',
	import: 'default'
}) as Record<string, ModuleLoader>;

// 統合したモジュールマップ
const allModules: Record<string, ModuleLoader> = { ...mdModules, ...shModules };

/**
 * 言語別にプロンプトファイルをフィルタリングする
 * @param locale - 言語 ('ja' | 'en')
 * @returns フィルタリングされたファイル情報のマップ
 */
export function getPromptFilesByLocale(locale: Locale): Record<string, ModuleLoader> {
	const filtered: Record<string, ModuleLoader> = {};

	for (const [path, loader] of Object.entries(allModules)) {
		// ファイル名のサフィックスをチェック
		const isEnglish = path.endsWith('_EN.md');
		const isJapanese = path.endsWith('_JP.md');
		const isShellScript = path.endsWith('.sh');
		const isMarkdown = path.endsWith('.md');

		if (isShellScript) {
			// シェルスクリプトは全言語で共通
			filtered[path] = loader;
		} else if (isMarkdown && (isEnglish || isJapanese)) {
			// マークダウンファイルは言語別にフィルタリング
			if (locale === 'en' && isEnglish) {
				const basePath = path.replace('_EN.md', '.md');
				filtered[basePath] = loader;
			} else if (locale === 'ja' && isJapanese) {
				const basePath = path.replace('_JP.md', '.md');
				filtered[basePath] = loader;
			}
		}
	}

	return filtered;
}

/**
 * マークダウンまたはシェルスクリプトのコンテンツからメタデータを抽出する
 * @param content - ファイルの生のコンテンツ
 * @param path - ファイルパス
 * @returns 抽出されたメタデータ
 */
export function extractPromptMetadata(content: string, path: string): {
	title: string;
	description: string;
} {
	const lines = content.split('\n');
	const fileName = path.split('/').pop() || '';
	const isShellScript = path.endsWith('.sh');

	let title = '';
	let description = '';

	if (isShellScript) {
		// .shファイル: 最初の # から始まる行をタイトルとして使用
		const titleLine = lines.find((line) => /^# /.test(line)) || '';
		title = titleLine.replace(/^# /, '').trim() || fileName.replace('.sh', '') || '';
		// 2行目以降のコメント行から説明を抽出
		const descLines = lines.filter(
			(line, idx) => idx > 0 && line.trim() && /^# /.test(line) && !line.includes('#!/')
		);
		description = descLines.slice(0, 2).map((line) => line.replace(/^# /, '')).join(' ').slice(0, 60);
	} else {
		// .mdファイル: 最初の # 見出しをタイトルとして使用
		const titleLine = lines.find((line) => /^# /.test(line)) || '';
		title = titleLine.replace(/^# /, '').trim() || fileName.replace('.md', '') || '';
		// 2行目以降の非空行から2行分を抽出し、60文字程度でカット
		const descLines = lines.filter((line, idx) => idx > 0 && line.trim() && !/^# /.test(line));
		description = descLines.slice(0, 2).join(' ').slice(0, 60);
	}

	return { title, description };
}

/**
 * ファイルパスからカテゴリとタグを抽出する
 * @param path - ファイルパス
 * @returns カテゴリとタグ
 */
export function extractCategoryAndTag(path: string): { category: string; tag: string | null } {
	// /prj/MysticLibrary/prompts/カテゴリ/タグ/xxx.{md|sh} からカテゴリ・タグを抽出
	const relPath = path.replace(/^\/prj\/MysticLibrary\/prompts\//, '');
	const parts = relPath.split('/');
	const category = parts.length > 1 ? parts[0] : 'other';
	const isShellScript = path.endsWith('.sh');
	const fileExt = isShellScript ? '.sh' : '.md';

	// タグの判定: parts[1]がファイル拡張子で終わっている場合はタグなし
	const tag =
		parts.length > 2
			? parts[1]
			: parts.length === 2 && parts[1].endsWith(fileExt)
				? null
				: parts[1];

	return { category, tag };
}

/**
 * Git情報から最終更新日時を取得する
 * 注: 現在のプロトタイプではダミーの日時を返す
 * 本番環境ではビルド時に生成されたgit-info.jsonを使用
 */
export async function getLastModifiedDate(path: string): Promise<Date> {
	// TODO: ビルド時に生成されたgit-info.jsonから日付情報を取得
	// 現在はフォールバック用のダミー日時を生成
	return generateFallbackDate(path);
}

/**
 * フォールバック用の日時生成（Git情報が取得できない場合）
 * @param filePath - ファイルパス
 * @returns 生成された日時
 */
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
	const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000;
	return new Date(oneYearAgo + (Math.abs(hash) % (365 * 24 * 60 * 60 * 1000)));
}

/**
 * 指定された言語の全プロンプトメタデータを読み込む
 * @param locale - 言語
 * @returns プロンプトメタデータの配列
 */
export async function loadPromptsByLocale(locale: Locale): Promise<PromptMetadata[]> {
	const files = getPromptFilesByLocale(locale);
	const entries = Object.entries(files);

	const loaded: PromptMetadata[] = [];

	for (const [path, loader] of entries) {
		try {
			const raw = await loader();
			const { title, description } = extractPromptMetadata(raw, path);
			const { category, tag } = extractCategoryAndTag(path);
			const lastModified = await getLastModifiedDate(path);

			loaded.push({
				id: path,
				title,
				description,
				path,
				category,
				tag,
				lastModified,
				content: raw
			});
		} catch (error) {
			console.error(`Error loading file ${path}:`, error);
		}
	}

	// 最終更新日時の新しい順に並べる
	loaded.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

	return loaded;
}

/**
 * カテゴリ別にプロンプトをグループ化する
 * @param locale - 言語
 * @returns カテゴリ別プロンプトリストの配列
 */
export async function loadPromptsByCategory(
	locale: Locale
): Promise<PromptsByCategory[]> {
	const prompts = await loadPromptsByLocale(locale);

	// カテゴリ別にグループ化
	const categoryMap = new Map<string, PromptMetadata[]>();

	for (const prompt of prompts) {
		const category = prompt.category || 'other';
		if (!categoryMap.has(category)) {
			categoryMap.set(category, []);
		}
		categoryMap.get(category)!.push(prompt);
	}

	// PromptsByCategory配列に変換
	const result: PromptsByCategory[] = [];
	for (const [category, prompts] of categoryMap.entries()) {
		result.push({
			category,
			prompts
		});
	}

	// カテゴリ名でソート
	result.sort((a, b) => a.category.localeCompare(b.category));

	return result;
}

/**
 * 特定のカテゴリのプロンプトのみを読み込む
 * @param locale - 言語
 * @param category - カテゴリ名
 * @returns プロンプトメタデータの配列
 */
export async function loadPromptsByCategoryOnly(
	locale: Locale,
	category: string
): Promise<PromptMetadata[]> {
	const allPrompts = await loadPromptsByLocale(locale);
	return allPrompts.filter((p) => p.category === category);
}

/**
 * 特定のプロンプトファイルを読み込む
 * @param path - ファイルパス
 * @param locale - 言語
 * @returns プロンプトメタデータまたはnull
 */
export async function loadPromptByPath(
	path: string,
	locale: Locale
): Promise<PromptMetadata | null> {
	// 言語サフィックスを考慮してパスを解決
	const basePath = path.replace(/^\/+/, '');
	let targetPath = basePath;

	if (path.endsWith('.md')) {
		// マークダウンファイルの場合、言語サフィックスを追加
		const langSuffix = locale === 'en' ? '_EN.md' : '_JP.md';
		targetPath = basePath.replace('.md', langSuffix);
	}

	// モジュールを探す
	const loader = allModules[`/prj/MysticLibrary/prompts/${targetPath}`];
	if (!loader) {
		// フォールバック: 元のパスを試す
		const fallbackLoader = allModules[`/prj/MysticLibrary/prompts/${basePath}`];
		if (!fallbackLoader) {
			return null;
		}
	}

	try {
		const raw = await loader();
		const { title, description } = extractPromptMetadata(raw, path);
		const { category, tag } = extractCategoryAndTag(path);
		const lastModified = await getLastModifiedDate(path);

		return {
			id: path,
			title,
			description,
			path,
			category,
			tag,
			lastModified,
			content: raw
		};
	} catch (error) {
		console.error(`Error loading file ${path}:`, error);
		return null;
	}
}

/**
 * 利用可能なカテゴリ一覧を取得する
 * @param locale - 言語
 * @returns カテゴリ名の配列（ソート済み）
 */
export async function getAvailableCategories(locale: Locale): Promise<string[]> {
	const prompts = await loadPromptsByLocale(locale);
	const categories = new Set(prompts.map((p) => p.category));
	categories.add('other'); // デフォルトカテゴリを追加
	return Array.from(categories).sort();
}
