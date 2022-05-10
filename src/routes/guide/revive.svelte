<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("revive.subject")}</h2>
<p>{$_("revive.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908739209026740254/unknown.png",
      alt: "Soul Choice on death",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908739337884143626/unknown.png",
      alt: "Tomb model",
    },
  ]}
/>
