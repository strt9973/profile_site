<script lang="ts">
	import { isDarkMode } from '$lib/store';
	import type { ColorType } from '$lib/type';
	import { goto } from '$app/navigation';
	export let path: string;
	export let path_target: 'self' | 'blank' = 'self';
	export let color: ColorType;
	export let title: string;
	const backgroundColor = (color: ColorType) => {
		switch (color) {
			case 'red':
				return '#f2c6de';
			case 'orange':
				return '#f7d9c4';
			case 'yellow':
				return '#faedcb';
			case 'green':
				return '#c9e4de';
			case 'blue':
				return '#c6def1';
			case 'purple':
				return '#dbcdf0';
			default:
				return '#f2c6de';
		}
	};
	function navigateTo(path: string) {
		goto(path);
	}
</script>

{#if path_target == 'self'}
	<button on:click={() => navigateTo(path)}>
		<div
			style="background-color: {$isDarkMode ? 'transparent' : backgroundColor(color)}"
			class={`card-${$isDarkMode ? 'dark' : 'light'}`}
		>
			<p>{title}</p>
		</div>
	</button>
{:else}
	<a href={path} target={path_target === 'blank' ? '_blank' : '_self'} rel="noopener noreferrer">
		<div
			style="background-color: {$isDarkMode ? 'transparent' : backgroundColor(color)}"
			class={`card-${$isDarkMode ? 'dark' : 'light'}`}
		>
			<p>{title}</p>
		</div>
	</a>
{/if}

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
	}
	button {
		font: inherit;
		color: inherit;
		padding: 0;
		background-color: inherit;
		border: none;
	}
	div {
		min-width: 100px;
		height: 50px;
		text-align: center;
	}
	p {
		margin: 0;
		line-height: 50px;
		font-size: 1.2rem;
	}
	.card-dark {
		border: 0.5px double $dark-text-color;
		border-radius: 1px;
	}
	.card-light {
		border: 0.5px solid transparent;
		border-radius: 2px;
		transform: perspective(100px) rotateY(-1deg);
		box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
	}
</style>
