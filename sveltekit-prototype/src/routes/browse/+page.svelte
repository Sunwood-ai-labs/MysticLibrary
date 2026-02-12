<script lang="ts">
	import { Search, Sparkles, Wand, Terminal } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { locale } from '$lib/stores/i18n';
	import { loadPromptsByLocale } from '$lib/promptLoader';
	import type { PromptMetadata } from '$lib/types';

	// カテゴリごとの色マップ
	const CATEGORY_COLORS: Record<string, { from: string; to: string }> = {
		coding: { from: '#2E578C', to: '#182D40' },
		audio: { from: '#BF807A', to: '#2E578C' },
		documentation: { from: '#BF807A', to: '#F2F2F2' },
		image: { from: '#BF807A', to: '#2E578C' },
		meta: { from: '#BF807A', to: '#592A2A' },
		methodology: { from: '#2E578C', to: '#BF807A' },
		'mind-mapping': { from: '#2E578C', to: '#F2F2F2' },
		writing: { from: '#BF807A', to: '#182D40' },
		'aws-certification': { from: '#182D40', to: '#2E578C' },
		'Company-as-a-Code': { from: '#F2F2F2', to: '#182D40' },
		diagram: { from: '#2E578C', to: '#BF807A' },
		education: { from: '#2E578C', to: '#F2F2F2' },
		other: { from: '#2E578C', to: '#BF807A' }
	};

	// ステート
	let prompts: PromptMetadata[] = $state([]);
	let loading = $state(true);
	let t: Record<string, any> = $state({});

	// 翻訳データをロード
	$effect(() => {
		const loadTranslations = async () => {
			try {
				const loc = locale.get();
				const module = await import(`../../i18n/${loc}.json`);
				t = module.default;
			} catch (e) {
				console.error('Failed to load translations:', e);
			}
		};
		loadTranslations();
	});

	// プロンプトを読み込み
	onMount(async () => {
		try {
			const loc = locale.get();
			prompts = await loadPromptsByLocale(loc);
		} catch (e) {
			console.error('Failed to load prompts:', e);
		} finally {
			loading = false;
		}
	});

	// カテゴリラベルを取得
	function getCategoryLabel(category: string): string {
		return t?.categories?.[category] || category;
	}

	// カラーセットを取得
	function getColorSet(category: string) {
		return CATEGORY_COLORS[category] || CATEGORY_COLORS['other'];
	}
</script>

<div class="container mx-auto px-4 py-8 space-y-8 page-enter">
	<div class="flex items-center justify-between">
		<h1 class="text-3xl font-bold font-kaisei gradient-text flex items-center gap-2">
			<Wand class="h-8" />
			{t?.browse?.title || 'プロンプト一覧'}
		</h1>
		<div class="relative">
			<input
				type="text"
				placeholder={t?.browse?.searchPlaceholder || 'プロンプトを検索...'}
				class="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-zen bg-white text-slate-700 placeholder:text-slate-400"
			/>
			<Search class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
		</div>
	</div>

	{#if loading}
		<div class="text-center py-12">
			<div class="magic-loading mx-auto">
				<div class="orbit-ring"></div>
				<div class="magic-trail"></div>
				<div class="magic-wand h-10 w-10">
					<Wand class="text-primary h-full w-full" />
				</div>
				<div class="magic-sparkles">
					<div class="sparkle"></div>
					<div class="sparkle"></div>
					<div class="sparkle"></div>
					<div class="sparkle"></div>
					<div class="sparkle"></div>
				</div>
			</div>
			<p class="text-slate-600 font-zen mt-4 opacity-70">
				{t?.browse?.loading || '魔法の図書館から知識を呼び出し中...'}
			</p>
		</div>
	{:else if prompts.length === 0}
		<div class="text-center py-8 bg-white rounded-xl border border-slate-200 p-12">
			<p class="text-slate-600 font-zen">{t?.browse?.noPrompts || 'まだプロンプトが投稿されていません。'}</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each prompts as prompt, index}
				{@const isShellScript = prompt.path.endsWith('.sh')}
				{@const IconComponent = isShellScript ? Terminal : Wand}
				{@const categoryKey = prompt.category || 'other'}
				{@const colorSet = getColorSet(categoryKey)}
				{@const gradientFrom = colorSet.from}
				{@const gradientTo = colorSet.to}

				<div
					class="card rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group h-full flex flex-col min-h-[260px] fade-in-up"
					style="animation-delay: {index * 0.05}s;"
				>
					<div
						class="absolute inset-0 flowing-background"
						style="--gradient-from: {gradientFrom}; --gradient-to: {gradientTo};"
					>
						<div class="w-full h-full flex items-center justify-center">
							<IconComponent class="h-48 w-48 transform rotate-12" />
						</div>
					</div>
					<div class="relative z-10 flex flex-col flex-1">
						<a href="/wiki/{prompt.path.replace(/^\/+/, '')}" class="block h-full">
							<div class="flex items-start space-x-3 mb-2">
								<div
									class="flowing-icon h-8 w-8 min-w-8 max-w-8 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
									style="--gradient-from: {gradientFrom}; --gradient-to: {gradientTo};"
								>
									<IconComponent class="h-4 w-4 text-white" />
								</div>
								<div class="flex-1 min-w-0">
									<h3 class="font-kaisei text-lg font-bold text-slate-900 leading-snug">
										<span class="keyword line-clamp-2 break-words block">{prompt.title}</span>
									</h3>
									<p class="prose prose-xs prose-primary prose-headings:text-xs prose-p:text-xs text-slate-600 font-zen line-clamp-2 mt-1 max-w-xs">
										{prompt.description}
									</p>
									<div class="flex flex-wrap gap-2 mt-2">
										<span
											class="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r text-white text-xs font-bold transition-opacity hover:opacity-90"
											style="background: linear-gradient(to right, {gradientFrom}, {gradientTo})"
										>
											{getCategoryLabel(categoryKey)}
										</span>
										{#if isShellScript}
											<span
												class="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-slate-600 to-slate-800 text-white text-xs font-bold transition-opacity hover:opacity-90"
											>
												{t?.browse?.script || 'スクリプト'}
											</span>
										{/if}
										{#if prompt.tag}
											<span
												class="inline-flex items-center px-3 py-1 rounded-full shadow bg-gradient-to-r from-accent to-primary text-white text-xs font-bold transition-opacity hover:opacity-90"
											>
												{prompt.tag}
											</span>
										{/if}
									</div>
								</div>
							</div>
						</a>
						<div class="relative z-10 mt-auto pt-2 border-t border-slate-100">
							<div class="text-xs text-slate-500 font-zen">
								{t?.browse?.updated || '更新日'}:
								{new Date(prompt.lastModified).toLocaleDateString(locale.get() === 'ja' ? 'ja-JP' : 'en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<div class="highlight-box mt-8">
		<p class="font-zen text-center text-lg text-slate-700">
			{t?.browse?.highlight || '新しいプロンプトは毎日追加されています。あなたのアイデアも共有してみませんか？'}
		</p>
	</div>
</div>
