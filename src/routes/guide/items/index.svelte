<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.subject")}</h2>
<p>{$_("item.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("item.guide.h1")}</h2>
<p>{$_("item.guide.p1.part1")}</p>
<ol class="list-disc pt-2">
  <li>
    {$_("item.guide.p1.part2")}
  </li>
  <li>
    {$_("item.guide.p1.part3")}
  </li>
  <li>
    {$_("item.guide.p1.part4")}
  </li>
</ol>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("item.guide.h2")}</h2>
<p>{$_("item.guide.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://media.giphy.com/media/1mhU3YqvhgLv2utfKv/giphy.gif",
      alt: "Great Sword",
    },
    {
      src: "https://media.giphy.com/media/8YKZGnI8Eb6qD83tLa/giphy.gif",
      alt: "Staff",
    },
    {
      src: "https://media.giphy.com/media/5nbDogvtGpAtQBsaMF/giphy.gif",
      alt: "Wand",
    },
    {
      src: "https://media.giphy.com/media/QZVdlEQuLzxLlTdCGl/giphy.gif",
      alt: "Spear",
    },
  ]}
/>
