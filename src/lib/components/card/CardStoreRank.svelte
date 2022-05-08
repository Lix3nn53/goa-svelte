<script lang="ts">
  export let price = 1;
  export let name = "Hero";

  import ButtonBlock from "../button/ButtonBlock.svelte";
</script>

<div
  class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
>
  <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
    {name}
  </h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">$</span>
    <span class="text-5xl font-extrabold tracking-tight">{price}</span>
    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
      >/month</span
    >
  </div>
  <!-- List -->
  <ul class="my-7 space-y-5">
    <slot />
  </ul>
  <slot name="button" />
</div>
