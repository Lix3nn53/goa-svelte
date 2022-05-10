<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-2 pt-8">{$_("skill.subject")}</h2>
<p>{$_("skill.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("skill.guide.h1")}</h2>
<p>{$_("skill.guide.p1")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("skill.guide.h2")}</h2>
<p>{$_("skill.guide.p2")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("skill.guide.h3")}</h2>
<p>{$_("skill.guide.p3")}</p>
