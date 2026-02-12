<script lang="ts">
	import '../app.css';
	import { locale } from '$lib/stores/i18n';
	import { browser } from '$app/environment';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	// 初期言語設定
	if (browser) {
		const saved = localStorage.getItem('mystic-library-language');
		locale.setLocale((saved === 'en' || saved === 'ja') ? saved : 'ja');
	}

	let { children } = $props();
</script>

<svelte:head>
	<title>Mystic Library - AI Prompt Library</title>
	<meta name="description" content="創造的で効果的なAIプロンプトを発見、作成、共有できるプラットフォーム" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-1">{@render children()}</main>
	<Footer />
</div>
