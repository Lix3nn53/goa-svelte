<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("dungeon.subject")}</h2>
<p>{$_("dungeon.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h1")}
</h2>
<p>{$_("dungeon.guide.p1")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907403880466358272/unknown.png",
      alt: "Dungeon Portal",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h2")}
</h2>
<p>{$_("dungeon.guide.p2")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907404159840567296/unknown.png",
      alt: "Join GUI",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907408801613881434/unknown.png",
      alt: "Countdown",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h3")}
</h2>
<p>{$_("dungeon.guide.p3")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907406476308533278/unknown.png",
      alt: "Scoreboard",
    },
  ]}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h4")}
</h2>
<p>{$_("dungeon.guide.p4")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h5")}
</h2>
<p>{$_("dungeon.guide.p5")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("dungeon.guide.h6")}
</h2>
<p>{$_("dungeon.guide.p6")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907421567867310100/unknown.png",
      alt: "On complete messages",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907421677066018836/unknown.png",
      alt: "Prize chests to pick up",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907425519098802226/unknown.png",
      alt: "Player holding prize chest",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/907422460507467826/unknown.png",
      alt: "Opening prize chest",
    },
  ]}
/>
