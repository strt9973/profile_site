<script lang="ts">
	import ContentCard from '$components/profile/ContentCard.svelte';
	import Container from '$components/common/Container.svelte';
	import FlameImg from '$components/common/FlameImg.svelte';
	import blog from '$lib/assets/blog.png';
	import webworkbook from '$lib/assets/webworkbook.png';
</script>

<ContentCard title="Product">
	<div>ここでは、プライベートで開発して公開しているものを紹介します。</div>
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
<ContentCard title="ブログ">
	<Container padding_lr={0}>
		<FlameImg src={blog} />
		<div>
			勉強したことや趣味などをまとめておく場所が欲しかったので作りました。Next.jsを触っておきたかったので技術スタックとして採用しました。<br
			/>
			また、Contentfulはある程度自由にContent Modelを作れて無料なので、取り回し良さそうと思ったのが採用理由です。<br
			/>
		</div>
		<div>利用技術: Next.js(App Router)/Contentful/Vercel</div>
	</Container>
</ContentCard>
<ContentCard title="Web問題集管理アプリ">
	<Container padding_lr={0}>
		<FlameImg src={webworkbook} />
		<div>
			LeetCodeを解くようになってから、一度解いた問題をある程度忘却曲線に添いつつ復習したりするために作っています。<br
			/>
			Web公開しないでいいデスクトップアプリをWeb技術で作りたい+あわよくばスマホアプリも作れるようになっておきたい、という理由でTauriを使っています。<br
			/>
			詳細・ダウンロードは<a
				href="https://github.com/strt9973/web_workbook_management_app"
				target="_blank"
				rel="noopener noreferrer"
			>
				こちら(Github)
			</a>から可能です。
		</div>
	</Container>
	<div>利用技術: Tauri/React/Mantine UI/SQLite</div>
</ContentCard>
<ContentCard title="アイコン作成ツール">
	<Container padding_lr={0}>
		<div>
			PWAで個人用ツールを作ろうと思った時に、PWA用のアイコンへの加工を手軽に実施するためにGoの勉強がてら作りました。<br
			/>正方形の画像を、複数のサイズの角丸アイコンに変換できるツールです。<br />
			<a href="https://github.com/strt9973/icon-maker" target="_blank" rel="noopener noreferrer">
				こちら(Github)
			</a>から利用可能です。
		</div>
		<div>利用技術:Golang</div>
	</Container>
</ContentCard>

<style lang="scss">
	div {
		padding: 16px;
	}
	a {
		color: inherit;
	}
</style>
