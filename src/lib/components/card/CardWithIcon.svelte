<div class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 border-transparent" id="parent">
	{#if $$slots.icon}
	<div class="flex justify-center items-center w-12 h-8 flex-shrink-0 ml-2 mr-8">
		<slot name="icon" />
	</div>
	{/if}
	<div>
		<div class="leading-snug tracking-tight mb-1"><slot name="title" /></div>
		<div class="text-base">
			<slot name="body" />
		</div>
	</div>
</div>

<style>
	#parent {
		background: rgba(0,0,0,0.25);
	}
</style>