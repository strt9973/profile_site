<script lang="ts">
	import { IconMoon, IconSun } from '@tabler/icons-svelte';
	import { isDarkMode } from '$lib/store';

	function toggleDarkMode() {
		isDarkMode.toggleDarkMode();
	}
</script>

{#if $isDarkMode}
	<button on:click={toggleDarkMode}><IconSun color="yellow" /></button>
{:else}
	<button on:click={toggleDarkMode}><IconMoon color="#192c64" /></button>
{/if}

<style :lang(scss)>
	button {
		padding: 0;
		margin: 0;
		background-color: inherit;
		color: inherit;
		border: none;
	}
</style>
