import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	define: {
		'process.env': {
			IPFS_GATEWAY: JSON.stringify('https://ipfs.io/ipfs/')
		}
	},
	plugins: [sveltekit()]
});
