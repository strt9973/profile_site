<script lang="ts">
	export let span: number = 1;
</script>

<div class="grid-item" style="grid-column: span ${span};">
	<slot />
</div>
