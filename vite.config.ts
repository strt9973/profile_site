import { defineConfig } from 'vitest/config';

import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "$lib/scss/variables.scss" as *; @use "$lib/scss/mixins.scss" as *;'
			}
		}
	},
	ssr: {
		noExternal: ['three']
	}
});
