// プロンプトデータの型定義

// Locale型は i18n.ts から再エクスポートされるため、ここでは定義しない

// プロンプトメタデータ
export interface PromptMetadata {
	id: string; // ファイルパス
	title: string;
	description: string;
	path: string;
	category: string;
	tag: string | null;
	lastModified: Date;
	content?: string; // オプションでコンテンツ全体も保持
}

// カテゴリ別プロンプトリスト
export interface PromptsByCategory {
	category: string;
	prompts: PromptMetadata[];
}

// プロンプトファイル情報
export interface PromptFileInfo {
	path: string;
	loader: () => Promise<string>;
}
