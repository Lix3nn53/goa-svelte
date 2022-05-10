<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("crafting.subject")}</h2>
<p>{$_("crafting.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("crafting.guide.h1")}
</h2>
<p>{$_("crafting.guide.p1")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908125486872424508/unknown.png",
      alt: "Campfire for cooking",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908124751887728640/unknown.png",
      alt: "Grindstone & fletching table",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("crafting.guide.h2")}
</h2>
<p>{$_("crafting.guide.p2")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907955538707496970/unknown.png",
      alt: "Select crafting level",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907955610140692550/unknown.png",
      alt: "Crafting Guide",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("crafting.guide.h3")}
</h2>
<p>{$_("crafting.guide.p3")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907956807824191528/unknown.png",
      alt: "Crafting info",
    },
  ]}
/>
