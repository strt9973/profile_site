<script lang="ts">
	import { isDarkMode } from '$lib/store';
	export let title: string;
</script>

<div class="{`card-${$isDarkMode ? 'dark' : 'light'}`} card-root">
	<div class="subtitle">
		<h2>{title}</h2>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	div {
		width: 100%;
		height: 100%;
		.content {
			padding: 16px;
			box-sizing: border-box;
			margin-bottom: 0px;
		}
	}
	.card-root {
		margin-bottom: 16px;
	}
	h2 {
		margin: 0;
		font-size: 1.2rem;
		padding: 8px;
		width: fit-content;
	}
	.card-dark {
		border: 0.5px solid $dark-text-color;
		border-radius: 1px;
		box-sizing: border-box;
		.subtitle {
			border-bottom: 0.5px solid $dark-text-color;
		}
	}
	.card-light {
		background-color: 'transparent';
		.content {
			border: 0.25px solid #999;
		}
		border-radius: 2px;
		.subtitle {
			h2 {
				position: relative;
				z-index: 1;
			}
			h2::after {
				content: '';
				position: absolute;
				left: 8px;
				right: 8px;
				bottom: 8px;
				height: 10px;
				background: rgba(255, 255, 0, 0.3);
				transform: rotate(-1deg);
				z-index: -1;
			}
		}
	}
</style>
