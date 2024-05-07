<script lang="ts">
	export let src: string; // 画像のURL
	export let size: string = '200px';
	export let alt: string = '';
</script>

<div>
	<img {src} {alt} style={`width: ${size}; height: ${size}; object-fit: cover;`} />
</div>

<style lang="scss">
	div {
		width: 100%;
		text-align: center;
	}
	img {
		border: 2px solid white;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}
</style>
