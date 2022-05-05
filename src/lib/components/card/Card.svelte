<div class="bg-base-800 dark:bg-base-900 text-base-50 rounded-md shadow">
	<div class="bg-base-700 dark:bg-base-800 rounded-t-lg p-2 pl-3">
		<slot name="header" />
	</div>
	<div class="p-6 pl-3"><slot /></div>
	<div class="bg-base-700 dark:bg-base-800 rounded-b-lg p-2 pl-3">
		<slot name="footer" />
	</div>
</div>
