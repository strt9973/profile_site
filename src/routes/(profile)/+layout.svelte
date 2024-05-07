<script lang="ts">
	import Header from '$components/profile/Header.svelte';
	import Menu from '$components/profile/Menu.svelte';
	import { isDarkMode } from '$lib/store';
</script>

<div id={$isDarkMode ? 'dark' : 'light'} class={'content-root'}>
	<div>
		<Header />
		<Menu />
		<slot />
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/global.scss';
	.content-root {
		margin: 0;
		min-width: 100vw;
		min-height: 100vh;
	}
</style>
