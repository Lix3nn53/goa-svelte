<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.enchanting")}</h2>
<p>{$_("item.guide.enchanting.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.enchanting.h1")}
</h2>
<p>{$_("item.guide.enchanting.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.enchanting.h2")}
</h2>
<p>{$_("item.guide.enchanting.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/840582831532670985/unknown.png",
      alt: "Enchant Stones",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/840582138351845406/unknown.png",
      alt: "Step 1: Click enchant items on smith NPC gui",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/840582983827718164/unknown.png",
      alt: "Step 2: Place your item and enchant stone and click on emerald",
    },
  ]}
/>
