<script lang="ts">
	import { isDarkMode } from '$lib/store';

	import type { SkillType } from '$lib/type';
	import FlexContents from '$components/common/FlexContents.svelte';
	import Container from '$components/common/Container.svelte';
	import Rate from './Rate.svelte';
	import CarrerMeter from './CarrerMeter.svelte';

	export let skillName: string;
	export let rate: number = 3;
	export let icon: any; //NOTE: Tabler Iconの型指定は現状難しい
	export let skillType: SkillType;
	export let month: number | 'private' = 12;

	const backgroundColor = (skillType: SkillType) => {
		switch (skillType) {
			case 'lang':
				return '#faedcb';
			case 'front':
				return '#c9e4de';
			case 'backend':
				return '#c6def1';
			case 'infra':
				return '#dbcdf0';
			case 'other':
				return '#f7d9c4';
			default:
				return '#f2c6de';
		}
	};
</script>

<div
	style="background-color: {$isDarkMode ? 'transparent' : backgroundColor(skillType)}"
	class={`card-${$isDarkMode ? 'dark' : 'light'}`}
>
	<Container flex={true} padding_lr={8} padding_tb={8}>
		<FlexContents position={'left'} margin={4}>
			<svelte:component this={icon} size="24px" stroke="1px" class="icon" />
		</FlexContents>
		<FlexContents position={'left'}>
			{skillName}
		</FlexContents>
		<FlexContents position={'right'}>
			<Container padding_lr={0} padding_tb={0}>
				<Rate {rate} />
				{#if month !== 'private'}
					<CarrerMeter {month} />
				{/if}
			</Container>
		</FlexContents>
	</Container>
</div>

<style lang="scss">
	div {
		width: 100%;
		height: fit-content;
		text-align: center;
	}
	.icon {
		display: flex;
		vertical-align: middle;
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
