// Svelte 5 runesを使用したi18nストア
// SSR対応: ブラウザとサーバーの両方で動作

import { browser } from '$app/environment';
import { writable, derived, get } from 'svelte/store';

// サポートされる言語タイプ
export type Locale = 'ja' | 'en';

// デフォルト言語
const DEFAULT_LOCALE: Locale = 'ja';

// localStorageキー
const LOCALE_STORAGE_KEY = 'mystic-library-locale';

// 翻訳データのインポート
const translations: Record<Locale, Record<string, unknown>> = {
	ja: {},
	en: {}
};

// 動的に翻訳データをロードする関数
async function loadTranslations(locale: Locale): Promise<Record<string, unknown>> {
	if (translations[locale] && Object.keys(translations[locale]).length > 0) {
		return translations[locale];
	}

	try {
		const module = await import(`../../i18n/${locale}.json`);
		translations[locale] = module.default;
		return module.default;
	} catch (e) {
		console.error(`Failed to load translations for ${locale}:`, e);
		return {};
	}
}

// 初期言語の決定
function getInitialLocale(): Locale {
	if (browser) {
		// 1. localStorageから取得
		const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (stored && (stored === 'ja' || stored === 'en')) {
			return stored as Locale;
		}

		// 2. ブラウザ言語から判定
		const browserLang = navigator.language.split('-')[0];
		if (browserLang === 'ja' || browserLang === 'en') {
			return browserLang as Locale;
		}
	}

	return DEFAULT_LOCALE;
}

// 言語ストアの作成
function createLocaleStore() {
	const { subscribe, set, update } = writable<Locale>(getInitialLocale());

	return {
		subscribe,

		// 言語を設定し、localStorageに保存
		setLocale: async (locale: Locale) => {
			// 翻訳データを先にロード
			await loadTranslations(locale);

			set(locale);

			if (browser) {
				localStorage.setItem(LOCALE_STORAGE_KEY, locale);
				// HTML lang属性も更新
				document.documentElement.lang = locale;
			}
		},

		// 現在の言語を取得
		get: () => get({ subscribe }),

		// 翻訳データを取得
		getTranslations: async () => {
			const currentLocale = get({ subscribe });
			return await loadTranslations(currentLocale);
		}
	};
}

export const locale = createLocaleStore();

// 型安全な翻訳関数の型定義
// ネストされたキーパスをサポート: "nav.promptList" -> translations.nav.promptList
type PathImpl<T, Key extends string> =
	Key extends `${infer K}.${infer Rest}`
		? K extends keyof T
			? `${K}.${PathImpl<T[K], Rest>}`
			: never
		: Key extends keyof T
			? Key
			: never;

type Path<T> = PathImpl<T, string> | string;

// 翻訳関数ストア
export const t = derived(locale, ($locale) => {
	return async (key: string, fallback?: string): Promise<string> => {
		const messages = await loadTranslations($locale);

		// ドット区切りのキーを解決
		const keys = key.split('.');
		let result: unknown = messages;

		for (const k of keys) {
			if (result && typeof result === 'object' && k in result) {
				result = (result as Record<string, unknown>)[k];
			} else {
				// キーが見つからない場合
				console.warn(`Translation key not found: ${key} for locale: ${$locale}`);
				return fallback || key;
			}
		}

		return typeof result === 'string' ? result : fallback || key;
	};
});

// 同期版の翻訳関数（SSR用、または事前にロード済みの場合）
export function tSync(key: string, fallback?: string): string {
	const $locale = get(locale);
	const messages = translations[$locale];

	// ドット区切りのキーを解決
	const keys = key.split('.');
	let result: unknown = messages;

	for (const k of keys) {
		if (result && typeof result === 'object' && k in result) {
			result = (result as Record<string, unknown>)[k];
		} else {
			return fallback || key;
		}
	}

	return typeof result === 'string' ? result : fallback || key;
}

// 初期化時に翻訳データをプリロード
export async function preloadTranslations() {
	const currentLocale = get(locale);
	await loadTranslations(currentLocale);
}

// サーバーサイド用：リクエストヘッダーから言語を判定
export function getLocaleFromHeader(acceptLanguage: string | null): Locale {
	if (!acceptLanguage) return DEFAULT_LOCALE;

	const header = acceptLanguage.split(',')[0].split('-')[0];
	return (header === 'ja' || header === 'en') ? (header as Locale) : DEFAULT_LOCALE;
}
