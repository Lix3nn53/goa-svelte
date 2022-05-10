<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("monster.subject")}</h2>
<p>{$_("monster.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("monster.guide.h1")}
</h2>
<p>{$_("monster.guide.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("monster.guide.h2")}
</h2>
<p>{$_("monster.guide.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("monster.guide.h3")}
</h2>
<p>{$_("monster.guide.p3")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "TODO",
      alt: "TODO",
    },
  ]}
/>
