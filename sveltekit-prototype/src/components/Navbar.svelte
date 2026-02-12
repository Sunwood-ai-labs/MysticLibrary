<script lang="ts">
	import { Search, BookOpenCheck, Languages, Wand2 } from 'lucide-svelte';
	import { locale } from '$lib/stores/i18n';
	import { browser } from '$app/environment';

	type Locale = 'ja' | 'en';

	// 翻訳データをリアクティブに取得
	let t: Record<string, any> = $state({});
	let currentLocale: Locale = $state('ja');

	// 初期化とリッスン
	$effect(() => {
		const loadTranslations = async () => {
			const loc = locale.get();
			currentLocale = loc;
			try {
				const module = await import(`../i18n/${loc}.json`);
				t = module.default;
			} catch (e) {
				console.error('Failed to load translations:', e);
			}
		};
		loadTranslations();

		// localeの変更を監視
		return locale.subscribe(() => {
			loadTranslations();
		});
	});

	function setLanguage(lang: Locale) {
		locale.setLocale(lang);
		if (browser) {
			localStorage.setItem('mystic-library-language', lang);
		}
		currentLocale = lang;
	}

	const languages = [
		{ code: 'ja' as Locale, label: 'JP' },
		{ code: 'en' as Locale, label: 'EN' }
	];
</script>

<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<a href="/" class="flex items-center space-x-2 group">
				<Wand2 class="h-6 w-6 text-primary animate-bounce group-hover:scale-110 transition-transform" />
				<span class="text-xl font-bold font-kaisei gradient-text">Mystic Library</span>
			</a>

			<div class="flex items-center space-x-2">
				<a
					href="/browse"
					class="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-700 font-zen font-medium hover:bg-slate-100 hover:text-primary transition-all duration-200"
				>
					<Search class="h-5 w-5" />
					<span class="font-semibold">{t?.nav?.promptList || 'プロンプト一覧'}</span>
				</a>
				<a
					href="/wiki"
					class="flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-700 font-zen font-medium hover:bg-slate-100 hover:text-primary transition-all duration-200"
				>
					<BookOpenCheck class="h-5 w-5" />
					<span class="font-semibold">{t?.nav?.wiki || 'Wiki'}</span>
				</a>

				<div class="flex items-center space-x-1.5 border-l border-slate-200 pl-4 ml-2">
					<div class="p-1.5 rounded-lg bg-primary/5">
						<Languages class="h-4 w-4 text-primary" />
					</div>
					{#each languages as { code, label }}
						<button
							onclick={() => setLanguage(code)}
							class="px-3 py-1.5 rounded-lg text-sm font-bold font-zen transition-all duration-200 {currentLocale === code
								? 'bg-primary text-white shadow-md'
								: 'text-slate-700 hover:bg-slate-100'}"
						>
							{label}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
