<script lang="ts">
	export let icon: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<div class="flex flex-row items-center rounded-lg bg-base-100 shadow px-8 text-center">
  <div class="text-5xl text-primary-600">
    <i class={icon}></i>
  </div>
  <div class="pl-4 pt-4 flex flex-col justify-start">
      <h5 class="text-blue-500 text-base font-bold mb-2 justify-start">{title}</h5>
      <p class="text-gray-700 text-sm mb-4">
          {description}
      </p>
  </div>
</div>