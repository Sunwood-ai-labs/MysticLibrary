import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist/assets',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$prompts: path.resolve('../prompts'),
			$components: path.resolve('./src/components')
		}
	}
};

export default config;
