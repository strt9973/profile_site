<script lang="ts">
	import { isDarkMode } from '$lib/store';

	import type { SkillType } from '$lib/type';
	import FlexContents from '$components/common/FlexContents.svelte';
	import Container from '$components/common/Container.svelte';
	import IconBrandReact from '@tabler/icons-svelte/IconBrandReact.svelte';
</script>

<div
	style="background-color: {$isDarkMode ? 'transparent' : '#c9e4de'}"
	class={`card-${$isDarkMode ? 'dark' : 'light'}`}
>
	<Container flex={true} padding_lr={8} padding_tb={8}>
		<FlexContents position={'left'} margin={4}>
			<IconBrandReact size="36px" stroke="1px" class="icon" />
		</FlexContents>
		<FlexContents position={'left'}><p class="name">スキル名</p></FlexContents>
		<FlexContents position={'right'}>
			<Container padding_lr={0} padding_tb={0}>
				<p class="rate">慣れ度合い</p>
				<p class="meter">経験年数</p>
			</Container>
		</FlexContents>
	</Container>
</div>

<style lang="scss">
	div {
		width: 300px;
		height: fit-content;
		text-align: center;
	}
	.icon {
		display: flex;
		vertical-align: middle;
	}
	.name {
		font-size: 24px;
	}
	.name,
	.rate,
	.meter {
		padding: 0;
		margin: 0;
	}
	.card-dark {
		border: 0.5px solid $dark-text-color;
		border-radius: 1px;
	}
	.card-light {
		border: 0.5px solid transparent;
		border-radius: 2px;
		transform: perspective(100px) rotateY(-1deg);
		box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
	}
</style>
