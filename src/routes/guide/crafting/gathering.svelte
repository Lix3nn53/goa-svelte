<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("crafting.gathering")}</h2>
<p>{$_("crafting.guide.gathering.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("crafting.guide.gathering.h1")}
</h2>
<p>{$_("crafting.guide.gathering.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://media.giphy.com/media/ptyfS1B477AGZ0pQhC/giphy.gif",
      alt: "Gathering copper mine",
    },
  ]}
/>
