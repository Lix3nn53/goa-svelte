<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("npc.merchants")}</h2>
<p>{$_("npc.guide.merchant.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("npc.guide.merchant.h1")}
</h2>
<p>
  {$_("npc.guide.merchant.p1.part1")}
  <Link href="/guide/items/enchanting" customClass="text-primary-400">
    enchanting
  </Link>
  {$_("npc.guide.merchant.p1.part2")}
</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("npc.guide.merchant.h2")}
</h2>
<p>
  {$_("npc.guide.merchant.p2.part1")}
  <Link href="/guide/items/enchanting" customClass="text-primary-400">
    enchanting
  </Link>
  {$_("npc.guide.merchant.p2.part2")}
</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("npc.guide.merchant.h3")}
</h2>
<p>{$_("npc.guide.merchant.p3")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("npc.guide.merchant.h4")}
</h2>
<p>{$_("npc.guide.merchant.p4")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("npc.guide.merchant.h5")}
</h2>
<p>{$_("npc.guide.merchant.p5")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "TODO",
      alt: "TODO",
    },
  ]}
/>
