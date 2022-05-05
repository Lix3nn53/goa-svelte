<script lang="ts">
  import { page } from "$app/stores";
  import { user } from "./../../stores";
  import { onDestroy } from "svelte";
  import { locale } from "svelte-i18n";
  import Button from "./button/Button.svelte";

  import Dropdown from "./Dropdown.svelte";
  import Link from "./link/Link.svelte";

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
</script>

<nav class="navbar container">
  <div class="navbar-start">
    <Dropdown
      iconClass="fa-solid fa-align-left"
      text=""
      btnCustomClass="lg:hidden"
    >
      {#each routes as route, i}
        {#if path === route}
          <li>
            <Link
              href={`/${route}`}
              customClass="text-primary-400 hover:no-underline"
              >{route.charAt(0).toUpperCase() + route.slice(1)}</Link
            >
          </li>
        {:else}
          <li>
            <Link href={`/${route}`} customClass="hover:no-underline"
              >{route.charAt(0).toUpperCase() + route.slice(1)}</Link
            >
          </li>
        {/if}
      {/each}
    </Dropdown>
    <div class="flex flex-row flex-nowrap gap-2 lg:gap-4">
      <Link href="/">
        <img src="/img/favicon.webp" class="h-14" alt="Logo" />
      </Link>
      <div class="my-auto">
        <Dropdown text={localeName}>
          <li>
            <Button
              type="button"
              on:click={() => locale.set("en")}
              style="ghost">EN</Button
            >
          </li>
          <li>
            <Button
              type="button"
              on:click={() => locale.set("tr")}
              style="ghost">TR</Button
            >
          </li>
        </Dropdown>
      </div>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {#each routes as route, i}
        {#if path === route}
          <li>
            <Link
              href={`/${route}`}
              customClass="text-primary-400 hover:no-underline"
              >{route.charAt(0).toUpperCase() + route.slice(1)}</Link
            >
          </li>
        {:else}
          <li>
            <Link href={`/${route}`} customClass="hover:no-underline"
              >{route.charAt(0).toUpperCase() + route.slice(1)}</Link
            >
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  <div class="navbar-end">
    <Link href="/login" customClass="btn btn-primary">Login</Link>
  </div>
</nav>
