<script lang="ts">
	export let bg = 'bg-base-900';
	export let text = 'text-base-50';
	export let customClass = '';

	let className = `flex-1 p-6 rounded-lg ${bg} ${text} ${customClass}`;
</script>

<form class={className}>
  <slot />
</form>