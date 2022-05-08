<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("guide.how-to-play.subject")}</h2>
<p class="pb-4">{$_("guide.how-to-play.p0")}</p>
<ol class="list-decimal">
  <li>
    {$_("guide.how-to-play.step1.text1")} play.guardiansofadelia.com {$_(
      "guide.how-to-play.step1.text2"
    )}
  </li>
  <li>
    {$_("guide.how-to-play.step2")}
    <Gallery
      images={[
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/839775943789903873/unknown.png",
          alt: "Step 2",
        },
      ]}
    />
  </li>
  <li>
    {$_("guide.how-to-play.step3")}
  </li>
</ol>
<h2 class="text-2xl font-semibold py-4">{$_("guide.how-to-play.h1")}</h2>
<ol class="list-decimal">
  <li>
    {$_("guide.how-to-play.p1.step1")}
  </li>
  <li>
    {$_("guide.how-to-play.p1.step2")}
  </li>
</ol>
