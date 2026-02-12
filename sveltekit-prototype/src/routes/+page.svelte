<script lang="ts">
	import { Wand, BookOpen, Users, Zap } from 'lucide-svelte';
	import { locale } from '$lib/stores/i18n';

	// 翻訳データをリアクティブに取得
	let t: Record<string, any> = $state({});

	$effect(() => {
		const loadTranslations = async () => {
			try {
				const loc = locale.get();
				const module = await import(`../i18n/${loc}.json`);
				t = module.default;
			} catch (e) {
				console.error('Failed to load translations:', e);
			}
		};
		loadTranslations();

		return locale.subscribe(() => {
			loadTranslations();
		});
	});
</script>

<div class="container mx-auto px-4 py-12 space-y-12 page-enter">
	<section class="text-center space-y-6">
		<h1
			class="text-4xl md:text-5xl font-bold font-kaisei gradient-text flex items-center justify-center gap-4"
		>
			<Wand class="h-8 md:h-10 floating" />
			<span class="fade-in-up">{t?.home?.heroTitle || 'AIの魔法を解き放つ'}</span>
			<Wand class="h-8 md:h-10 floating" />
		</h1>
		<p class="text-xl text-slate-700 max-w-2xl mx-auto font-zen leading-relaxed">
			{t?.home?.heroDescription ||
				'創造的で効果的なAIプロンプトを発見、作成、共有できるプラットフォーム'}
		</p>
	</section>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		<div class="card p-6 rounded-xl shadow-sm fade-in-up" style="animation-delay: 0.1s;">
			<div class="h-12 w-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
				<Wand class="h-6 w-6 text-primary" />
			</div>
			<h3 class="text-lg font-semibold mb-2 font-kaisei text-slate-900">
				{t?.home?.feature1Title || '厳選されたプロンプト'}
			</h3>
			<p class="text-slate-600 font-zen leading-relaxed">
				{t?.home?.feature1Desc ||
					'様々なカテゴリーの高品質なプロンプトコレクションにアクセス'}
			</p>
		</div>

		<div class="card p-6 rounded-xl shadow-sm fade-in-up" style="animation-delay: 0.2s;">
			<div class="h-12 w-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center mb-4">
				<BookOpen class="h-6 w-6 text-accent" />
			</div>
			<h3 class="text-lg font-semibold mb-2 font-kaisei text-slate-900">
				{t?.home?.feature2Title || '学習と上達'}
			</h3>
			<p class="text-slate-600 font-zen leading-relaxed">
				{t?.home?.feature2Desc ||
					'プロンプトエンジニアリングの包括的なガイドで技術を習得'}
			</p>
		</div>

		<div class="card p-6 rounded-xl shadow-sm fade-in-up" style="animation-delay: 0.3s;">
			<div class="h-12 w-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
				<Users class="h-6 w-6 text-primary" />
			</div>
			<h3 class="text-lg font-semibold mb-2 font-kaisei text-slate-900">
				{t?.home?.feature3Title || 'コミュニティ駆動'}
			</h3>
			<p class="text-slate-600 font-zen leading-relaxed">
				{t?.home?.feature3Desc ||
					'活気あるAIエンスージアストとプロンプトエンジニアのコミュニティに参加'}
			</p>
		</div>
	</div>

	<section
		class="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
	>
		<div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
		<div class="relative z-10">
			<div class="flex items-center justify-center mb-6">
				<div class="p-3 bg-white/20 rounded-full backdrop-blur-sm">
					<Zap class="h-8 w-8 floating" />
				</div>
			</div>
			<h2 class="text-2xl md:text-3xl font-bold mb-4 font-kaisei">
				{t?.home?.ctaTitle || 'プロンプトを探す'}
			</h2>
			<p class="mb-8 font-zen text-lg max-w-xl mx-auto opacity-90">
				{t?.home?.ctaDescription ||
					'Mystic Libraryで、あなたのAIとの対話を変革しませんか？'}
			</p>
			<a
				href="/browse"
				class="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-xl font-bold font-kaisei shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 pulse-subtle"
			>
				<Wand class="h-5 w-5" />
				{t?.home?.ctaButton || 'プロンプト一覧を見る'}
			</a>
		</div>
	</section>

	<div class="highlight-box">
		<p class="font-zen text-center text-lg leading-relaxed text-slate-700">
			{t?.home?.highlight || 'あなたのプロンプトが、次のAIイノベーションの鍵となるかもしれません'}
		</p>
	</div>
</div>
