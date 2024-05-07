<script lang="ts">
	export let columns: number = 4;
	export let gap: number = 10;
</script>

<div class="grid-container" style="grid-template-columns: repeat({columns}, 1fr); gap: {gap}px;">
	<slot />
</div>

<style lang="scss">
	.grid-container {
		display: grid;
	}
</style>
