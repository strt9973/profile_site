<script lang="ts">
	export let flex: boolean = false;
	export let padding_tb: number = 16;
	export let padding_lr: number = 16;
	let containerStyle = flex ? 'flexEnabled' : '';
</script>

<div class:containerStyle style="padding: {padding_tb}px {padding_lr}px;">
	<slot />
</div>

<style lang="scss">
	div {
		&.containerStyle {
			display: flex;
			justify-content: center;
			@include respond-to('sm') {
				justify-content: space-between;
			}
			flex-wrap: wrap;
		}
	}
</style>
