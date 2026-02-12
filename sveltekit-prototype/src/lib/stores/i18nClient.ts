// クライアントサイドでのi18n初期化処理
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { locale, preloadTranslations } from './i18n';

/**
 * クライアントコンポーネントでi18nを初期化するフック
 * 使用例:
 * ```svelte
 * <script lang="ts">
 *   import { useI18n } from '$lib/stores/i18nClient';
 *   useI18n();
 * </script>
 * ```
 */
export function useI18n() {
	if (browser) {
		onMount(async () => {
			await preloadTranslations();

			// HTML lang属性を設定
			const currentLocale = locale.get();
			document.documentElement.lang = currentLocale;
		});
	}
}

/**
 * Svelte 5のrunesを使用した初期化フック
 * $effectを使用してリアクティブに言語変更を監視
 */
export function useI18nEffect() {
	if (browser) {
		// 初期化時に翻訳をプリロード
		preloadTranslations();
	}

	return {
		locale,
		setLocale: locale.setLocale
	};
}
