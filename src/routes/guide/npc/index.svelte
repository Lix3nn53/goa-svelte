<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("npc.subject")}</h2>
<p>{$_("npc.guide.p0")}</p>
<p>{$_("npc.guide.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "TODO",
      alt: "TODO",
    },
  ]}
/>
