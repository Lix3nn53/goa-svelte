<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("social.subject")}</h2>
<p>{$_("social.guide.p0")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908734452941881374/unknown.png",
      alt: "Character Info",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908734408557740032/unknown.png",
      alt: "Trade Invite",
    },
  ]}
/>

<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("social.guide.h1")}
</h2>
<p>{$_("social.guide.p1")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908736318056583188/unknown.png",
      alt: "Party Scoreboard",
    },
  ]}
/>

<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("social.guide.h2")}
</h2>
<p>{$_("social.guide.p2")}</p>
