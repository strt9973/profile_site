<script lang="ts">
	import Container from '$components/common/Container.svelte';
	import FlexContents from '$components/common/FlexContents.svelte';
	import ModeSwitcher from '$components/common/ModeSwitcher.svelte';
</script>

<header>
	<Container flex={true} padding_lr={0} padding_tb={0}>
		<FlexContents><h1>strt's profile site</h1></FlexContents>
		<FlexContents position="right"><ModeSwitcher /></FlexContents>
	</Container>
</header>

<style lang="scss">
	h1 {
		margin: 0;
		font-size: 1.5rem;
	}
</style>
