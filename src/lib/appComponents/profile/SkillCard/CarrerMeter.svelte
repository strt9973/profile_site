<script lang="ts">
	import { isDarkMode } from '$lib/store';
	export let month: number;
</script>

<meter class={`meter-${$isDarkMode ? 'dark' : 'light'}`} min={0} max={60} value={month} />

<style lang="scss">
	.meter-light {
		width: 100%;
		height: 12px;
		border: 1px solid $meter-color;
		background: transparent;
		border-radius: 0;
		overflow: hidden;
		&::-webkit-meter-bar {
			background: transparent;
			border-radius: 0;
		}
		&::-webkit-meter-optimum-value {
			background: $meter-color;
			border-radius: 0;
		}
		&::-moz-meter-bar {
			background: $meter-color;
			border-radius: 0;
		}
	}
	.meter-dark {
		width: 100%;
		height: 12px;
		border: 1px solid $dark-text-color;
		background: transparent;
		border-radius: 0;
		overflow: hidden;
		&::-webkit-meter-bar {
			background: transparent;
			border-radius: 0;
		}
		&::-webkit-meter-optimum-value {
			background: $dark-text-color;
			border-radius: 0;
		}
		&::-moz-meter-bar {
			background: $dark-text-color;
			border-radius: 0;
		}
	}
</style>
