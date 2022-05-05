<script lang="ts">
	export let customClass: string = '';

	let className = `border-1 border-base-200 rounded-full w-full ${customClass}`;
</script>

<hr class={className} />
