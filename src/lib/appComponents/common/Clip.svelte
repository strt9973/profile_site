<script lang="ts">
	export let src: string; // 画像のURL
	export let size: string = '100px';
	export let alt: string = '';
</script>

<img
	{src}
	{alt}
	style={`width: ${size}; height: ${size}; border-radius: 50%; object-fit: cover;`}
/>

<style lang="scss">
	img {
		border: 2px solid white;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}
</style>
