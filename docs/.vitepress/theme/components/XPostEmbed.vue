<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";

type TwitterWidgetsWindow = Window & {
  twttr?: {
    widgets?: {
      load?: (element?: Element | null) => void;
    };
  };
};

const props = withDefaults(
  defineProps<{
    url: string;
    width?: number;
  }>(),
  {
    width: 800
  }
);

const root = ref<HTMLElement | null>(null);
const couldBeTweetUrl = computed(() => /https?:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+/.test(props.url));
const fallbackUrl = computed(() => props.url.replace("x.com/", "twitter.com/"));

async function loadEmbed() {
  await nextTick();
  if (!root.value) return;
  (window as TwitterWidgetsWindow).twttr?.widgets?.load?.(root.value);
}

onMounted(() => {
  void loadEmbed();
});

watch(
  () => props.url,
  () => {
    if (root.value) void loadEmbed();
  }
);
</script>

<template>
  <div class="x-post-embed">
    <div v-if="!couldBeTweetUrl" class="x-post-embed__error">
      <p>有効なX投稿URLではありません。</p>
      <a :href="url" target="_blank" rel="noreferrer noopener">Xで開く</a>
    </div>
    <div v-else ref="root" class="x-post-embed__frame">
      <blockquote class="twitter-tweet" :data-media-max-width="String(width)">
        <a :href="fallbackUrl" target="_blank" rel="noreferrer noopener">{{ url }}</a>
      </blockquote>
      <noscript>
        <a :href="fallbackUrl" target="_blank" rel="noreferrer noopener">Xで開く</a>
      </noscript>
    </div>
  </div>
</template>

<style scoped>
.x-post-embed {
  margin: 1rem 0;
}

.x-post-embed__error {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 86%, white);
  padding: 0.9rem 1rem;
  color: var(--vp-c-text-2);
}

.x-post-embed__error p {
  margin: 0 0 0.4rem;
}
</style>
