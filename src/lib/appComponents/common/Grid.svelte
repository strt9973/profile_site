<script lang="ts">
	export let gap: number = 10;
</script>

<div class="grid-container" style="gap: {gap}px;">
	<slot />
</div>

<style lang="scss">
	.grid-container {
		display: grid;
		@include respond-to('sm') {
			grid-template-columns: repeat(2, 1fr);
		}
		@include respond-to('md') {
			grid-template-columns: repeat(3, 1fr);
		}
		@include respond-to('lg') {
			grid-template-columns: repeat(4, 1fr);
		}
		@include respond-to('xl') {
			grid-template-columns: repeat(5, 1fr);
		}
	}
</style>
