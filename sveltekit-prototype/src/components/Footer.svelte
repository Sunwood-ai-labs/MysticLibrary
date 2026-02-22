<script lang="ts">
	import { Github, Twitter } from 'lucide-svelte';
	import { tSync } from '$lib/stores/i18n';
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

<footer class="bg-white border-t border-slate-200 mt-auto">
	<div class="container mx-auto px-4 py-8">
		<!-- Orynth Badge -->
		<div class="flex justify-center mb-6">
			<a
				href="https://orynth.dev/projects/mystic-prompt-open-library"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:opacity-80 transition-opacity"
			>
				<img
					src="https://orynth.dev/api/badge/mystic-prompt-open-library?theme=light&style=minimal"
					alt="Featured on Orynth"
					width="180"
					height="48"
				/>
			</a>
		</div>

		<!-- Social Links -->
		<div class="flex flex-col items-center space-y-4">
			<!-- X (Twitter) Link -->
			<a
				href="https://x.com/hAru_mAki_ch"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center space-x-2 text-slate-900 hover:text-primary transition-colors group"
			>
				<Twitter class="h-6 w-6 group-hover:scale-110 transition-transform" />
				<span class="font-zen font-semibold text-lg">Maki@Sunwood AI Labs. (@hAru_mAki_ch)</span>
			</a>

			<!-- GitHub Link -->
			<a
				href="https://github.com/Sunwood-ai-labs/MysticLibrary"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center space-x-2 text-slate-900 hover:text-primary transition-colors group"
			>
				<Github class="h-5 w-5 group-hover:scale-110 transition-transform" />
				<span class="font-zen">Sunwood-ai-labs/MysticLibrary</span>
			</a>
		</div>

		<!-- Copyright -->
		<div class="mt-6 pt-6 border-t border-light text-center">
			<div class="flex items-center justify-center space-x-2 text-slate-900">
				<span class="font-zen text-sm">
					© 2024 Mystic Library. Released under the MIT License.
				</span>
			</div>
		</div>
	</div>
</footer>
