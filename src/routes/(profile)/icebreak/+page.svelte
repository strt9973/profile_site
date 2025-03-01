<script lang="ts">
	import ContentCard from '$components/profile/ContentCard.svelte';
	import Clip from '$components/common/Clip.svelte';
	import profile from '$lib/assets/profile.png';
	import Container from '$components/common/Container.svelte';
	import FlexContents from '$components/common/FlexContents.svelte';
</script>

<ContentCard title="Icebreak">
	<Container flex={true} padding_lr={0}>
		<FlexContents>
			<Clip src={profile} alt="profile" />
			<div>
				東京近郊でWebアプリケーションエンジニアをしています。
				スタートは運用保守から入り、今はプロダクト開発や社内アプリケーションなどの開発をしています。
				フロントもバックエンドもやることが多いです。
			</div>
		</FlexContents>
		<FlexContents></FlexContents>
	</Container>
</ContentCard>
<ContentCard title="経歴">
	<ul>
		<li>現職: Webアプリケーションエンジニア</li>
		<li>経歴1: インフラ運用保守エンジニアとして勤務(2014〜2018)</li>
		<li>経歴2: システムエンジニアとして受託開発会社で勤務(2018〜2021)</li>
		<li>経歴3: 開発エンジニアとしてBtoB自社開発企業で勤務(2021〜2024)</li>
		<li>経歴4: 開発エンジニアとしてCtoCプラットフォーム企業で勤務(2024〜)</li>
	</ul>
</ContentCard>
<ContentCard title="趣味">
	<ul>
		<li>タコス作り</li>
		<li>ボードゲーム</li>
		<li>DIY</li>
	</ul>
</ContentCard>

<style lang="scss">
</style>
