<script context="module" lang="ts">
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";
  import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";

  let path = "";
  const unsubscribePage = page.subscribe((value) => (path = value.routeId));

  onDestroy(() => {
    unsubscribePage();
  });

  import routes from "./routes";
  let sidebarProps;
  $: sidebarProps = Object.freeze({
    routes: routes,
    activeUrl: path,
  });
</script>

<section
  class="container mx-auto flex flex-col lg:flex-row gap-2 my-9 p-2 bg-base-50/[.8] rounded-lg"
>
  <Sidebar {...sidebarProps} />
  <div>
    <slot />
  </div>
</section>
