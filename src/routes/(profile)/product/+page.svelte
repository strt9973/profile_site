<script lang="ts">
	import ContentCard from '$components/profile/ContentCard.svelte';
	import Container from '$components/common/Container.svelte';
	import FlexContents from '$components/common/FlexContents.svelte';
	import FlameImg from '$components/common/FlameImg.svelte';
	import blog from '$lib/assets/blog.png';
	import webworkbook from '$lib/assets/webworkbook.png';
</script>

<ContentCard title="Product">
	<div>ここでは、プライベートで開発したものを紹介します。</div>
</ContentCard>

<ContentCard title="このサイト">
	<Container padding_lr={0}>
		<div>
			コミュニティに参加した際の自己紹介をサクッとやったり、アプリをリリースする際の紹介ページなどをつくる目的で作りました。<br
			/>
			SvelteやCloudflareを触ってみたかったので技術スタックとして採用しました。<br />
			また、業務ではReact + UIコンポーネントを使って作ることが多いので、SCSSを採用しています。<br />
			ダークモードではブループリントっぽく、ライトモードでは方眼紙っぽくしています。
		</div>
		<div>利用技術: Svelte/SvelteKit/SCSS/Cloudflare Pages</div>
	</Container>
</ContentCard>
<ContentCard title="ブログ(リファクタ中)">
	<Container padding_lr={0}>
		<FlameImg src={blog} />
		<div>
			勉強したことや趣味などをまとめておく場所が欲しかったので作りました。Next.jsを触っておきたかったので技術スタックとして採用しました。<br
			/>
			また、Contentfulはある程度自由にContent Modelを作れて無料なので、取り回し良さそうと思ったのが採用理由です。<br
			/>
			App RouterなのにUIコンポーネント(Chakra)を入れてしまい全部クライアントコンポーネントになっちゃってるので、置き換えたりする予定です。
		</div>
		<div>利用技術: Next.js(App Router)/Contentful/Vercel</div>
	</Container>
</ContentCard>
<ContentCard title="Web問題集管理アプリ(開発中)">
	<Container padding_lr={0}>
		<FlameImg src={webworkbook} />
		<div>
			LeetCodeを解くようになってから、一度解いた問題をある程度忘却曲線に添いつつ復習したりするために作っています。<br
			/>
			Web公開しないでいいデスクトップアプリをWeb技術で作りたい+あわよくばスマホアプリも作れるようになっておきたい、という理由でTauriを使っています。
		</div>
	</Container>
	<div>利用技術: Tauri/React/Mantine UI/SQLite</div>
</ContentCard>

<style lang="scss">
	div {
		padding: 16px;
	}
</style>
