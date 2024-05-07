<script lang="ts">
	export let position: 'left' | 'right' = 'left';
	export let margin: number | 'auto' = 'auto';
	const margin_text = margin === 'auto' ? 'auto' : `${margin}px`;
</script>

<div class={position} style="margin-{position === 'left' ? 'right' : 'left'}: {margin_text}">
	<slot />
</div>

<style lang="scss">
	div {
		&.left {
			display: flex;
			align-items: center;
		}
		&.right {
			display: flex;
			align-items: center;
		}
	}
</style>
