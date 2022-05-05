<script lang="ts">
	import { onMount } from 'svelte';

	let isDarkMode = true;

	onMount(() => {
		isDarkMode = document.documentElement.classList.contains('dark');
		// document.documentElement.classList.add('transition-all');
		// document.documentElement.classList.add('ease-in');
		// document.documentElement.classList.add('duration-1000');
	});

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
		isDarkMode = !isDarkMode;

		if (isDarkMode) {
			localStorage.theme = 'dark';
		} else {
			localStorage.theme = 'light';
		}
	}
</script>

<label for="theme" class="switch">
	<input id="theme" type="checkbox" on:click={toggleTheme} checked={!isDarkMode} />
	<span class="switch-button bg-base-100 text-base-700" />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 28px;
		--switch-button-radius: 23px;
		--switch-button-move: 16px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.switch-button {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
		border: 2px solid rgb(var(--color-base-500));
	}

	.switch-button:before {
		position: absolute;
		content: '';
		font-family: 'Font Awesome 5 Free';
		font-size: 21px;
		height: var(--switch-button-radius);
		width: var(--switch-button-radius);
		line-height: var(--switch-button-radius);
		left: 3px;
		top: 1px;
		text-align: center;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .switch-button:before {
		-webkit-transform: translateX(var(--switch-button-move));
		-ms-transform: translateX(var(--switch-button-move));
		transform: translateX(var(--switch-button-move));
	}

	.switch-button:before {
		content: '\f186';
		background-color: transparent;
	}

	input:checked + .switch-button:before {
		content: '\f111';
		background-color: transparent;
	}

	/* Custom Switches */
</style>
