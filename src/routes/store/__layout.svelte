<script lang="ts">
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";

  let path = "";
  const unsubscribePage = page.subscribe((value) => (path = value.routeId));

  onDestroy(() => {
    unsubscribePage();
  });

  let items: string | any[];
  $: items = path.split("/").filter((item) => item !== "");
</script>

<section class="container mx-auto">
  <Breadcrumb customClass="my-9">
    {#each items as item, i}
      {#if i === 0}
        <BreadcrumbItem first href={`/${item}`}>{item}</BreadcrumbItem>
      {:else if i === items.length - 1}
        <BreadcrumbItem last href={`/${item}`}>{item}</BreadcrumbItem>
      {:else}
        <BreadcrumbItem href={`/${item}`}>{item}</BreadcrumbItem>
      {/if}
    {/each}
  </Breadcrumb>
  <slot />
</section>
