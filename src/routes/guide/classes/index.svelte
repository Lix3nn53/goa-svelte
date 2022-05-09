<script lang="ts">
  import { _ } from "svelte-i18n";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("classes.subject")}</h2>
<p class="pb-4">{$_("classes.guide.p0")}</p>
<h2 class="text-2xl font-semibold pb-4">{$_("classes.guide.h1")}</h2>
<p class="pb-4">{$_("classes.guide.p1")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467612349005844/unknown.png",
      alt: "Step 1: Open the menu",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839470177640906782/unknown.png",
      alt: "Step 2: Click on Character",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467838255267890/unknown.png",
      alt: "Step 3: Click on Class",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467967615074304/unknown.png",
      alt: "Step 4: Select Class Tier",
    },
  ]}
/>
<h2 class="text-2xl font-semibold pb-4">{$_("classes.guide.h2")}</h2>
<p class="pb-4">{$_("classes.guide.p2")}</p>
<h2 class="text-2xl font-semibold pb-4">{$_("classes.guide.h3")}</h2>
<p class="pb-4">{$_("classes.guide.p3")}</p>
