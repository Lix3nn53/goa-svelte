<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("guide.introduction.subject")}</h2>
<p class="pb-4">{$_("guide.introduction.p0")}</p>
<p>
  {$_("guide.introduction.p1.text1")}<Link
    href="/guide/how-to-play"
    style="primary">{$_("guide.introduction.p1.link1")}</Link
  >{$_("guide.introduction.p1.text2")}<Link
    href="/guide/classes"
    style="primary">{$_("guide.introduction.p1.link2")}</Link
  >
</p>
