<script lang="ts">
  export let customClass: string = "";

  let className = `flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${customClass}`;
</script>

<nav class={className} aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <slot />
  </ol>
</nav>
