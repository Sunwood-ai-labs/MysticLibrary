// place files you want to import through the `$lib` alias in this folder.

// i18nストアの再エクスポート（最初にエクスポートしてLocale型を定義）
export * from './stores/i18n';

// 型定義の再エクスポート（Locale型は除外）
export type { PromptMetadata, PromptFileInfo, PromptsByCategory } from './types';

// プロンプトリーダーの再エクスポート（Locale型も含む）
export * from './promptLoader';
