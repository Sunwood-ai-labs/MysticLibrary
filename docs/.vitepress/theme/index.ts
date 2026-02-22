import { h, nextTick, onMounted, watch } from "vue";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./style.css";
import XPostEmbed from "./components/XPostEmbed.vue";

type TwitterWidgetsWindow = Window & {
  twttr?: {
    widgets?: {
      load?: (element?: Element | null) => void;
    };
  };
};

function loadTwitterWidgets(element?: Element | null) {
  if (typeof window === "undefined") return;
  (window as TwitterWidgetsWindow).twttr?.widgets?.load?.(element);
}

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("XPostEmbed", XPostEmbed);
  },
  Layout() {
    const route = useRoute();

    onMounted(() => {
      loadTwitterWidgets();
    });

    watch(
      () => route.path,
      async () => {
        await nextTick();
        loadTwitterWidgets();
      }
    );

    return DefaultTheme.Layout ? h(DefaultTheme.Layout) : null;
  }
};

export default theme;
