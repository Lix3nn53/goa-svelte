<script lang="ts">
  import { page } from "$app/stores";
  import { user } from "./../../stores";
  import { onDestroy } from "svelte";
  import { locale } from "svelte-i18n";
  import Button from "./button/Button.svelte";

  import Dropdown from "./Dropdown.svelte";
  import Link from "./link/Link.svelte";
  import LinkButton from "./link/LinkButton.svelte";

  let user_value;

  const unsubscribe = user.subscribe((value) => {
    user_value = value;
  });

  let path = "";
  const unsubscribePage = page.subscribe((value) => (path = value.routeId));

  let localeName = "en";
  const unsubscribeLocale = locale.subscribe((value) => (localeName = value));

  onDestroy(() => {
    unsubscribe();
    unsubscribePage();
    unsubscribeLocale();
  });

  let routes = ["guide", "news", "map", "store"];

  let navigation;
  function toggle() {
    navigation.classList.toggle("hidden");
  }
</script>

<nav class="px-2 sm:px-4 py-2.5 rounded ">
  <div class="md:container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex flex-row gap-0 md:gap-4">
      <button
        data-collapse-toggle="mobile-menu-4"
        type="button"
        class="inline-flex items-center rounded-lg px-4 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-4"
        aria-expanded="false"
        on:click={() => toggle()}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          /></svg
        >
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </button>
      <Link href="/">
        <img src="/img/favicon.webp" class="h-14" alt="Logo" />
      </Link>
      <div class="my-auto">
        <Dropdown>
          <li>
            <Button
              type="button"
              on:click={() => locale.set("en")}
              style="ghost"
              customClass="w-full">EN</Button
            >
          </li>
          <li>
            <Button
              type="button"
              on:click={() => locale.set("tr")}
              style="ghost"
              customClass="w-full">TR</Button
            >
          </li>
        </Dropdown>
      </div>
    </div>
    <div class="flex md:order-2">
      <LinkButton href="/login">Login</LinkButton>
    </div>
    <div
      class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      id="mobile-menu-4"
      bind:this={navigation}
    >
      <ul
        class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium"
      >
        {#each routes as route, i}
          {#if path === route}
            <li class="py-4 md:py-0 text-right">
              <LinkButton href={`/${route}`} style="ghost"
                ><span class="label capitalize text-primary-400 font-semibold"
                  >{route}</span
                ></LinkButton
              >
            </li>
          {:else}
            <li class="py-4 md:py-0">
              <LinkButton href={`/${route}`} style="ghost"
                ><span class="label capitalize">{route}</span></LinkButton
              >
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</nav>
