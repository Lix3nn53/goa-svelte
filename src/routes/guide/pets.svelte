<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("pet.subject")}</h2>
<p>{$_("pet.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("pet.guide.h1")}
</h2>
<p>{$_("pet.guide.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("pet.guide.h2")}
</h2>
<p>{$_("pet.guide.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/908731000425701506/unknown.png",
      alt: "Equiping an egg",
    },
    {
      src: "https://media.giphy.com/media/emp3uLQ0hPfEC873wk/giphy.gif",
      alt: "Minidragon GIF",
    },
    {
      src: "https://media.giphy.com/media/egUf00meY4Pv6M20yr/giphy-downsized-large.gif",
      alt: "Pet Follow GIF",
    },
  ]}
/>
