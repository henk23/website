import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;
