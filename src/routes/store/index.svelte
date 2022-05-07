<script context="module" lang="ts">
  import CardStoreRank from "$lib/components/card/CardStoreRank.svelte";
  import Tabs from "$lib/components/tabs/Tabs.svelte";
  import TabList from "$lib/components/tabs/TabList.svelte";
  import Tab from "$lib/components/tabs/Tab.svelte";
  import TabPanel from "$lib/components/tabs/TabPanel.svelte";

  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Store</title>
</svelte:head>

<section class="container flex flex-col items-center justify-center">
  <h2 class="text-3xl font-bold mb-4">Categories</h2>
  <div
    class="container flex flex-wrap -mx-2 overflow-hidden h-96 w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
  >
    <div class="my-2 px-2 overflow-hidden w-full">
      <a
        href="/store/ranks"
        class="btn flex items-end justify-start btn-secondary h-full w-full ranks"
      >
        <span class="label capitalize text-xl">Ranks</span></a
      >
    </div>

    <div class="my-2 px-2 lg:w-1/2 overflow-hidden w-full">
      <a
        href="/store/crates"
        class="btn flex items-end justify-start btn-secondary h-full w-full crates"
      >
        <span class="label capitalize text-xl">Crates</span></a
      >
    </div>

    <div class="my-2 px-2 lg:w-1/2 overflow-hidden w-full">
      <a
        href="/store/boosts"
        class="btn flex items-end justify-start btn-secondary h-full w-full boosts"
      >
        <span class="label capitalize text-xl">boosts</span></a
      >
    </div>
  </div>
</section>

<style>
  .crates {
    background: url("/img/store/crate_preview.png"),
      linear-gradient(
        345deg,
        rgb(var(--color-secondary-400)) 5%,
        rgb(var(--color-secondary-600)) 100%
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    color: rgb(var(--color-secondary-900));
  }

  .ranks {
    background: url("/img/store/ranks.png"),
      linear-gradient(
        345deg,
        rgb(var(--color-secondary-400)) 5%,
        rgb(var(--color-secondary-600)) 100%
      );
    background-repeat: no-repeat;
    background-position: 90% 80%;
    color: rgb(var(--color-secondary-900));
  }

  .boosts {
    background: url("/img/store/boost.png"),
      linear-gradient(
        345deg,
        rgb(var(--color-secondary-400)) 5%,
        rgb(var(--color-secondary-600)) 100%
      );
    background-repeat: no-repeat;
    background-position: right;
    color: rgb(var(--color-secondary-900));
  }
</style>
