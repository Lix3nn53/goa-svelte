<script context="module" lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Background from "$lib/components/Background.svelte";
  import BackgroundColor from "$lib/components/BackgroundColor.svelte";

  import { initLocale } from "$lib/locale";
  import { waitLocale } from "svelte-i18n";

  export async function load() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    initLocale();

    await waitLocale();

    return true;
  }
</script>

<Background />
<BackgroundColor />
<Header />

<main>
  <slot />
</main>

<Footer />

<style>
</style>
