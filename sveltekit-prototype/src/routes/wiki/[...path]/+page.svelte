<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		BookOpenCheck,
		Search,
		Code2,
		Award,
		Building2,
		Network,
		FileText,
		GraduationCap,
		Gamepad2,
		Image,
		Settings2,
		Puzzle,
		Brain,
		Users,
		PenLine,
		Folder,
		Terminal,
		Copy,
		Share2
	} from 'lucide-svelte';
	import { locale } from '$lib/stores/i18n';
	import { loadPromptsByLocale, loadPromptByPath } from '$lib/promptLoader';
	import type { PromptMetadata } from '$lib/types';

	type TreeNode =
		| { type: 'file'; key: string; file: PromptMetadata; isSelected: boolean }
		| {
				type: 'dir';
				key: string;
				label: string;
				isCategory: boolean;
				isOpen: boolean;
				children: TreeNode[];
		  };

	// ステート
	let prompts: PromptMetadata[] = $state([]);
	let selected: PromptMetadata | null = $state(null);
	let loading = $state(true);
	let openMap: Record<string, boolean> = $state({});
	let copied = $state(false);
	let shared = $state(false);
	let t: Record<string, any> = $state({});

	// 翻訳データをロード
	$effect(() => {
		const loadTranslations = async () => {
			try {
				const loc = locale.get();
				const module = await import(`../../../i18n/${loc}.json`);
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

			// URLパスから選択されたプロンプトを取得
			const pathParam = $page.params.path;
			if (pathParam) {
				const targetPath = '/' + pathParam;
				const found = prompts.find((p) => p.path === targetPath || p.path.endsWith(targetPath));
				if (found) {
					selected = found;
					// ツリーを開く
					openTreeForPath(found.path);
				} else {
					// 見つからない場合はロードを試みる
					const loaded = await loadPromptByPath(targetPath, loc);
					if (loaded) {
						selected = loaded;
						prompts.push(loaded);
						openTreeForPath(loaded.path);
					}
				}
			} else if (prompts.length > 0) {
				selected = prompts[0];
				openTreeForPath(prompts[0].path);
			}
		} catch (e) {
			console.error('Failed to load prompts:', e);
		} finally {
			loading = false;
		}
	});

	// ツリーを開く
	function openTreeForPath(filePath: string) {
		const relPath = filePath.replace(/^\/prj\/MysticLibrary\/prompts\//, '');
		const parts = relPath.split('/');
		for (let i = 0; i < parts.length - 1; i++) {
			const key = parts.slice(0, i + 1).join('/');
			openMap[key] = true;
		}
	}

	// ツリーを構築
	function buildTree(): Record<string, any> {
		const tree: Record<string, any> = {};
		for (const p of prompts) {
			const relPath = p.path.replace(/^\/prj\/MysticLibrary\/prompts\//, '');
			const segments = relPath.split('/');
			let node = tree;
			for (let i = 0; i < segments.length; i++) {
				const seg = segments[i];
				if (i === segments.length - 1) {
					node[seg] = p;
				} else {
					if (!node[seg]) node[seg] = {};
					node = node[seg];
				}
			}
		}
		return tree;
	}

	// ツリー描画（再帰）
	function renderTree(node: Record<string, any>, parentKey: string[] = [], depth = 0): TreeNode[] {
		const entries = Object.entries(node).sort((a, b) => a[0].localeCompare(b[0]));
		return entries.map(([key, value]) => {
			const fullKey = [...parentKey, key].join('/');
			if ((value as PromptMetadata).path) {
				// ファイル
				const file = value as PromptMetadata;
				const isSelected = selected?.path === file.path;
				return {
					type: 'file' as const,
					key: fullKey,
					file,
					isSelected
				};
			} else {
				// ディレクトリ
				const isCategory = depth === 0;
				const isOpen = !!openMap[fullKey];
				const children = renderTree(value, [...parentKey, key], depth + 1);
				return {
					type: 'dir' as const,
					key: fullKey,
					label: key,
					isCategory,
					isOpen,
					children
				};
			}
		});
	}

	// カテゴリラベルを取得
	function getCategoryLabel(category: string): string {
		return t?.categories?.[category] || category;
	}

	// 選択時の処理
	function selectFile(file: PromptMetadata) {
		selected = file;
		openTreeForPath(file.path);
	}

	// コピー処理
	async function copyContent() {
		if (selected) {
			await navigator.clipboard.writeText(selected.content || '');
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}

	// 共有処理
	async function shareUrl() {
		await navigator.clipboard.writeText(window.location.href);
		shared = true;
		setTimeout(() => (shared = false), 2000);
	}

	// ツリーノードを開閉
	function toggleNode(key: string) {
		openMap[key] = !openMap[key];
	}

	// カテゴリアイコンコンポーネントの取得（runes mode対応）
	function getCategoryIconComponent(category: string) {
		const iconMap: Record<string, typeof Search> = {
			audio: Search,
			coding: Code2,
			'aws-certification': Award,
			'Company-as-a-Code': Building2,
			'deep-research': Search,
			diagram: Network,
			documentation: FileText,
			education: GraduationCap,
			game: Gamepad2,
			image: Image,
			meta: Settings2,
			methodology: Puzzle,
			'mind-mapping': Brain,
			'pseudo-multi-agent': Users,
			writing: PenLine
		};
		return iconMap[category] || Folder;
	}

	// ツリーデータを派生ステートとして計算
	const treeData = $derived(renderTree(buildTree()));
</script>

<svelte:head>
	<title>{selected?.title || 'Wiki'} - Mystic Library</title>
</svelte:head>

{#if loading}
	<div class="text-center py-12">
		<div class="magic-loading mx-auto">
			<div class="orbit-ring"></div>
			<div class="magic-trail"></div>
			<div class="magic-wand h-10 w-10">
				<BookOpenCheck class="text-primary h-full w-full" />
			</div>
			<div class="magic-sparkles">
				<div class="sparkle"></div>
				<div class="sparkle"></div>
				<div class="sparkle"></div>
				<div class="sparkle"></div>
				<div class="sparkle"></div>
			</div>
		</div>
		<p class="text-slate-900 font-zen mt-4">
			{t?.wiki?.loading || 'プロンプトを召喚中...'}
		</p>
	</div>
{:else}
	<div class="flex min-h-[80vh]">
		<!-- サイドバー -->
		<aside class="w-80 bg-white border-r border-slate-200 p-4 overflow-y-auto text-xs">
			<div class="flex items-center gap-2 mb-6">
				<BookOpenCheck class="h-6 w-6 text-primary" />
				<span class="font-bold text-lg text-slate-900">{t?.wiki?.title || 'プロンプトWiki'}</span>
			</div>
			<ul class="space-y-2">
				{#each treeData as node}
					{#if node.type === 'file'}
						<li>
							<button
								onclick={() => selectFile(node.file)}
								class="text-left w-full px-2 py-1 rounded hover:bg-primary/10 transition {node.isSelected
									? 'bg-primary/10 font-bold text-primary'
									: 'text-slate-900'}"
							>
								{node.file.title}
							</button>
						</li>
					{:else}
						<li>
							<button
								onclick={() => toggleNode(node.key)}
								class="flex items-center gap-2 w-full font-semibold text-slate-900 mb-1 hover:bg-primary/10 rounded px-2 py-1 transition"
							>
								{#if node.isCategory}
									{@const IconComp = getCategoryIconComponent(node.label)}
									<IconComp class="h-4 w-4" />
								{:else}
									<Folder class="h-4 w-4" />
								{/if}
								<span>{node.isCategory ? getCategoryLabel(node.label) : node.label}</span>
								<span class="ml-auto text-[10px] text-slate-600"
									>{node.isOpen ? '▼' : '▶'}</span
								>
							</button>
							{#if node.isOpen}
								<ul class="ml-4 space-y-1">
									{#each node.children as child}
										{#if child.type === 'file'}
											<li>
												<button
													onclick={() => selectFile(child.file)}
													class="text-left w-full px-2 py-1 rounded hover:bg-primary/10 transition {child.isSelected
														? 'bg-primary/10 font-bold text-primary'
														: 'text-slate-900'}"
												>
													{child.file.title}
												</button>
											</li>
										{:else}
											<li>
												<button
													onclick={() => toggleNode(child.key)}
													class="flex items-center gap-2 w-full font-semibold text-slate-900 mb-1 hover:bg-primary/10 rounded px-2 py-1 transition"
												>
													{#if child.isCategory}
														{@const ChildIconComp = getCategoryIconComponent(child.label)}
														<ChildIconComp class="h-4 w-4" />
													{:else}
														<Folder class="h-4 w-4" />
													{/if}
													<span
														>{child.isCategory
															? getCategoryLabel(child.label)
															: child.label}</span
													>
													<span class="ml-auto text-[10px] text-slate-600"
														>{child.isOpen ? '▼' : '▶'}</span
													>
												</button>
												{#if child.isOpen}
													<ul class="ml-4 space-y-1">
														{#each child.children as grandchild}
															{#if grandchild.type === 'file'}
																<li>
																	<button
																		onclick={() => selectFile(grandchild.file)}
																		class="text-left w-full px-2 py-1 rounded hover:bg-primary/10 transition {grandchild.isSelected
																			? 'bg-primary/10 font-bold text-primary'
																			: 'text-slate-900'}"
																	>
																		{grandchild.file.title}
																	</button>
																</li>
															{/if}
														{/each}
													</ul>
												{/if}
											</li>
										{/if}
									{/each}
								</ul>
							{/if}
						</li>
					{/if}
				{/each}
			</ul>
		</aside>

		<!-- プレビュー -->
		<main class="flex-1 p-8 overflow-y-auto">
			{#if selected}
				<div class="prose prose-primary max-w-5xl mx-auto">
					<div class="flex flex-col gap-2 mb-4">
						<div class="flex items-center gap-2 flex-wrap">
							{#if selected.path.endsWith('.sh')}
								<Terminal class="h-6 w-6 text-primary" />
							{:else}
								{@const SelectedIconComp = getCategoryIconComponent(selected.category)}
								<SelectedIconComp class="h-6 w-6 text-primary" />
							{/if}
							<h1 class="m-0">{selected.title}</h1>
							<span class="text-xs text-slate-900 bg-light px-2 py-1 rounded ml-2">
								{getCategoryLabel(selected.category)}
							</span>
							{#if selected.path.endsWith('.sh')}
								<span class="text-xs text-white bg-gray-700 px-2 py-1 rounded ml-2">
									{t?.browse?.script || 'スクリプト'}
								</span>
							{/if}
							<div class="flex gap-2 ml-4">
								<button
									onclick={copyContent}
									class="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow hover:bg-accent transition-colors"
									title={t?.wiki?.copyTooltip || 'マークダウンをコピー'}
								>
									<Copy class="h-3 w-3 inline mr-1" />
									{t?.wiki?.copy || 'コピー'}
								</button>
								<button
									onclick={shareUrl}
									class="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow hover:bg-accent transition-colors"
									title={t?.wiki?.shareTooltip || 'ページURLを共有'}
								>
									<Share2 class="h-3 w-3 inline mr-1" />
									{t?.wiki?.share || '共有'}
								</button>
							</div>
							{#if copied}
								<span class="ml-2 px-2 py-1 bg-primary text-white text-xs rounded shadow">
									{t?.wiki?.copied || 'コピーしました！'}
								</span>
							{/if}
							{#if shared}
								<span class="ml-2 px-2 py-1 bg-accent text-white text-xs rounded shadow">
									{t?.wiki?.shared || 'URLをコピーしました！'}
								</span>
							{/if}
						</div>
						<div class="text-xs text-slate-900 font-mono">
							{t?.wiki?.filePath || 'ファイルパス'}:
							<a
								href="https://github.com/Sunwood-ai-labs/MysticLibrary/blob/main/prompts/{selected.path
									.replace(/^\/prj\/MysticLibrary\/prompts\//, '')
									.replace(/^\/+/, '')}"
								target="_blank"
								rel="noopener noreferrer"
								class="bg-slate-50 px-1 rounded underline hover:text-accent"
							>
								prompts/{selected.path.replace(/^\/prj\/MysticLibrary\/prompts\//, '').replace(/^\/+/, '')}
							</a>
						</div>
					</div>

					{#if selected.path.endsWith('.sh')}
						<pre class="bg-slate-50 p-4 rounded-lg overflow-x-auto"><code>{selected.content}</code></pre>
					{:else}
						<!-- マークダウンレンダリング: 簡易実装として生のHTMLを表示 -->
						<!-- 本番ではmdsvexのプリプロセッサを使用 -->
						<div class="prose prose-primary max-w-none">
							{#if selected.content}
								{@html selected.content
									.replace(/^# .*\n?/, '')
									.replace(/\n/g, '<br>')
									.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
									.replace(/`([^`]+)`/g, '<code>$1</code>')
									.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
									.replace(/\*([^*]+)\*/g, '<em>$1</em>')
									.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')}
							{/if}
						</div>
					{/if}
				</div>
			{:else}
				<div class="text-center text-slate-900">
					{t?.wiki?.selectPrompt || 'プロンプトを選択してください'}
				</div>
			{/if}
		</main>
	</div>
{/if}
