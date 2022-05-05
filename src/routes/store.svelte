<script context="module" lang="ts">
	import CardWithIcon from '$lib/components/card/CardWithIcon.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Guardians of Adelia - Store</title>
</svelte:head>

<div class="w-full flex flex-col items-center bg-base-200">
	<!-- Section 1 -->
	<section class="w-full bg-base-100">
		<div class="container flex flex-row items-center pt-8 pb-8 lg:pb-16">
			<div class="flex-1">
				<h2 class="text-3xl 2xl:text-4xl font-bold">OPEN AN ACCOUNT NOW AND <br />START EARNING!</h2>
				<p class="my-4 font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				</p>

				<div class="flex gap-4">
				</div>
			</div>
			<div class="flex-1 hidden lg:block">
				<img src="images/home_slider_img.jpg" alt="home_slider_img" class="w-4/5 rounded ml-auto" />
			</div>
		</div>
	</section>
</div>
