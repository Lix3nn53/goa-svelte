<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Store</title>
</svelte:head>

<div class="flex flex-wrap -mx-2 overflow-hidden h-96 w-full">
  <div class="my-2 px-2 overflow-hidden w-full">
    <a
      href="/store/ranks"
      class="btn flex items-end justify-start h-full w-full ranks duration-200 ease-in-out hover:no-underline rounded-lg"
    >
      <span class="capitalize text-4xl font-bold px-4 py-2">Ranks</span></a
    >
  </div>

  <div class="my-2 px-2 md:w-1/2 overflow-hidden w-full">
    <a
      href="/store/crates"
      class="btn flex items-end justify-start h-full w-full crates duration-200 ease-in-out hover:no-underline rounded-lg"
    >
      <span class="capitalize text-4xl font-bold px-4 py-2">Crates</span></a
    >
  </div>

  <div class="my-2 px-2 md:w-1/2 overflow-hidden w-full">
    <a
      href="/store/boosts"
      class="btn flex items-end justify-start h-full w-full boosts duration-200 ease-in-out hover:no-underline rounded-lg"
    >
      <span class="capitalize text-4xl font-bold px-4 py-2">boosts</span></a
    >
  </div>
</div>

<style>
  .btn {
    border: rgb(var(--color-base-200)) solid 4px;
  }
  .crates:hover {
    background-position: 90%;
    border: #d56df8 solid 4px;
  }
  .ranks:hover {
    background-position: 90%;
    border: #fafa14 solid 4px;
  }
  .boosts:hover {
    background-position: 90%;
    border: #c2ec46 solid 4px;
  }

  .crates {
    background: url("/img/store/crate_preview_purple.png"),
      linear-gradient(345deg, #a855f7 15%, #7c3aed 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-800));
  }

  .ranks {
    background: url("/img/store/ranks.png"),
      linear-gradient(345deg, #facc15 15%, #df9920 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-900));
  }

  .boosts {
    background: url("/img/store/boost.png"),
      linear-gradient(345deg, #9ecb15 15%, #578e0b 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-800));
  }
</style>
