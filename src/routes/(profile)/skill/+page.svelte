<script lang="ts">
	import ContentCard from '$components/profile/ContentCard.svelte';
	import { SkillCard, SkillCardSample } from '$components/profile/SkillCard';
	import { work_skills, private_skills } from './skill';

	import Grid from '$components/common/Grid.svelte';
	import GridItem from '$components/common/GridItem.svelte';
	import Container from '$components/common/Container.svelte';
	import FlexContents from '$components/common/FlexContents.svelte';
</script>

<ContentCard title="Skill">
	<div>ここでは、主に技術の使用経験を紹介します。</div>

	<Container flex={true} padding_lr={0}>
		<FlexContents>
			<SkillCardSample />
		</FlexContents>
		<FlexContents>
			<ul>
				<li>
					慣れ度合い: 5段階での評価で、経験年数があってもブランクがあるなどの場合は下がります。
				</li>
				<li>経験年数: Maxを5年とおいて、大体どのくらいの期間業務での経験があるかを示します。</li>
			</ul>
		</FlexContents>
	</Container>
</ContentCard>

<ContentCard title="業務での使用経験">
	<Grid>
		{#each work_skills as skill}
			<GridItem>
				<SkillCard
					skillName={skill.skill_name}
					rate={skill.rate}
					icon={skill.icon}
					skillType={skill.skill_type}
					month={skill.month}
				/>
			</GridItem>
		{/each}
	</Grid>
</ContentCard>
<ContentCard title="プライベートでの使用経験">
	<Grid>
		{#each private_skills as skill}
			<GridItem>
				<SkillCard
					skillName={skill.skill_name}
					rate={skill.rate}
					icon={skill.icon}
					skillType={skill.skill_type}
					month={'private'}
				/>
			</GridItem>
		{/each}
	</Grid>
</ContentCard>

<style lang="scss">
</style>
