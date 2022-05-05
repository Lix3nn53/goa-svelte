<script lang="ts">
	export let type: 'top' | 'bottom';
</script>

{#if type === 'top'}
	<div class="custom-shape-divider-top-1643385455">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{:else}
	<div class="custom-shape-divider-bottom-1643385489">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				class="shape-fill"
			/>
		</svg>
	</div>
{/if}

<style>
	.custom-shape-divider-top-1643385455 {
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.custom-shape-divider-top-1643385455 svg {
		position: relative;
		display: block;
		width: calc(200% + 1.3px);
		height: 100px;
	}

	.custom-shape-divider-top-1643385455 .shape-fill {
		fill: rgb(var(--color-base-900));
	}

	.custom-shape-divider-bottom-1643385489 {
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-bottom-1643385489 svg {
		position: relative;
		display: block;
		width: calc(200% + 1.3px);
		height: 100px;
	}

	.custom-shape-divider-bottom-1643385489 .shape-fill {
		fill: rgb(var(--color-base-900));
	}
</style>
