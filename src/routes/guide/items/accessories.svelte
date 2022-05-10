<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.accessory")}</h2>
<p>{$_("item.guide.accessory.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("item.guide.accessory.h1")}</h2>
<p>{$_("item.guide.accessory.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("item.guide.accessory.h2")}</h2>
<p>{$_("item.guide.accessory.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/840504455727284254/unknown.png",
      alt: "Equip the accessory",
    },
  ]}
/>
