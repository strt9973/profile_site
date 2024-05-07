<script lang="ts">
	import Container from '$components/common/Container.svelte';
	import MenuCard from '$components/profile/MenuCard.svelte';
</script>

<Container flex={true} padding_lr={0}>
	<MenuCard title="About" color="red" path="/" />
	<MenuCard title="Icebreak" color="orange" path="/icebreak" />
	<MenuCard title="Skill" color="yellow" path="/skill" />
	<MenuCard title="Product" color="green" path="/product" />
	<MenuCard title="Blog" color="blue" path="https://blog.strt9973.net/" path_target="blank" />
</Container>

<style lang="scss">
</style>
