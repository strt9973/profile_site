<script lang="ts">
	import { isDarkMode } from '$lib/store';
	import IconStar from '@tabler/icons-svelte/IconStar.svelte';
	import IconStarFilled from '@tabler/icons-svelte/IconStarFilled.svelte';
	export let rate: number;
</script>

<div class={`rate-${$isDarkMode ? 'dark' : 'light'}`}>
	{#each [1, 2, 3, 4, 5] as i}
		{#if i <= rate}
			<IconStarFilled size={'12px'} color={$isDarkMode ? 'currentColor' : '#f57f17'} />
		{:else}
			<IconStar size={'12px'} color={$isDarkMode ? 'currentColor' : '#f57f17'} />
		{/if}
	{/each}
</div>
