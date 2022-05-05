<script lang="ts">
	export let href: string;
	export let customClass: string = '';
	export let type: 'normal' | 'cta' | 'cta-empty' = 'normal';
	export let color: 'normal' | 'light' = 'normal';

	let textColor = 'text-base-500';
	let textColorHover = 'hover:text-base-600';
	let bg = '';
	let bgHover = 'hover:bg-base-100';
	let border = '';
	let borderHover = '';
	if (color == 'light') {
		textColor = 'text-base-50';
		textColorHover = 'hover:text-primary-400';
		bg = '';
		bgHover = '';
		border = '';
	}

	if (type === 'cta-empty') {
		textColor = 'text-primary-600';
		textColorHover = 'hover:text-base-50';
		bg = '';
		bgHover = 'hover:bg-primary-600';
		border = 'border border-solid border-primary-600';
	} else if (type === 'cta') {
		textColor = 'text-base-50';
		textColorHover = 'hover:text-base-50';
		bg = 'bg-primary-600';
		bgHover = 'hover:bg-primary-500';
		border = 'border border-solid border-primary-600';
		borderHover = 'hover:border-primary-500';
	}

	let className = `p-2 px-4 mx-2 rounded transition-colors duration-200 hover:no-underline ${textColor} ${textColorHover} ${bg} ${bgHover} ${border} ${borderHover} ${customClass}`;
</script>

<a {href} class={className}><slot /></a>
