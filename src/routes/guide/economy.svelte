<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("economy.subject")}</h2>
<p>{$_("economy.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h1")}
</h2>
<p>{$_("economy.guide.p1")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908720980778713168/unknown.png",
      alt: "Coin description",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908721396572639305/unknown.png",
      alt: "Bronze, Silver and Gold on ground",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h2")}
</h2>
<p>{$_("economy.guide.p2")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908721645659783168/unknown.png",
      alt: "Item price on shop",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h3")}
</h2>
<p>{$_("economy.guide.p3")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908721943501504622/unknown.png",
      alt: "Selling items to a NPC",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h4")}
</h2>
<p>{$_("economy.guide.p4")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908734408557740032/unknown.png",
      alt: "Interract with another player",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908734796539265084/unknown.png",
      alt: "Trade Gui",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h5")}
</h2>
<p>{$_("economy.guide.p5")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908724450424406086/unknown.png",
      alt: "An open bazaar",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("economy.guide.h6")}
</h2>
<p>{$_("economy.guide.p6")}</p>
