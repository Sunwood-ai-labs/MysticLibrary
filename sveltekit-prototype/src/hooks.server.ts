import type { Handle } from '@sveltejs/kit';
import { locale, getLocaleFromHeader } from '$lib/stores/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	// Accept-Languageヘッダーから言語を判定
	const acceptLanguage = event.request.headers.get('accept-language');
	const detectedLocale = getLocaleFromHeader(acceptLanguage);

	// サーバーサイドでlocaleを設定
	// Note: これはサーバーサイドでのレンダリングにのみ使用される
	event.locals.locale = detectedLocale;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// HTMLのlang属性を設定
			return html.replace('%lang%', detectedLocale);
		}
	});

	return response;
};
