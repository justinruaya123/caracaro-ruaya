import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	
	kit: {
		appDir: 'app',
		adapter: adapter()	
	},
	paths: {
		base: process.argv.includes('dev') ? '' : '/pokemon-search/'
	}
};
export default config;