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

  let items: string | any[];
  $: items = path.split("/").filter((item) => item !== "");

  import { exampleRoutes } from "./routes";
  const exampleSidebarProps = Object.freeze({
    routes: exampleRoutes,
    theme: {
      backgroundColor_linkActive: "#F4442E",
      backgroundColor_nav: "#1E1E1E",
      color_link: "#F7F7F2",
      color_linkHover: "#FCA311",
      fontSize: "1rem",
      maxWidth_nav: "18vw",
      minWidth_nav: "240px",
      opacity_linkDisabled: "0.5",
      opacity_linkInactive: "0.75",
    },
    activeUrl: path,
  });
</script>

<section class="container mx-auto flex gap-2 my-9">
  <Sidebar {...exampleSidebarProps} />
  <div>
    <slot />
  </div>
</section>
