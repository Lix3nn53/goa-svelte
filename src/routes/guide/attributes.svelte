<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("attribute.subject")}</h2>
<p>{$_("attribute.guide.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("attribute.guide.h1")}</h2>
<div class="flex flex-row gap-2">
  <p><span style="font-weight: bold;">{$_("attribute.health")}: </span></p>
  <p>{$_("attribute.guide.table.health")}</p>
</div>
<div class="flex flex-row gap-2">
  <p><span style="font-weight: bold;">{$_("attribute.mana")}: </span></p>
  <p>{$_("attribute.guide.table.mana")}</p>
</div>
<div class="flex flex-row gap-2">
  <p><span style="font-weight: bold;">{$_("attribute.damage")}: </span></p>
  <p>{$_("attribute.guide.table.damage")}</p>
</div>
<div class="flex flex-row gap-2">
  <p><span style="font-weight: bold;">{$_("attribute.defense")}: </span></p>
  <p>{$_("attribute.guide.table.defense")}</p>
</div>
<div class="flex flex-row gap-2">
  <p><span style="font-weight: bold;">{$_("attribute.crit_chance")}: </span></p>
  <p>{$_("attribute.guide.table.crit_chance")}</p>
</div>
<div class="flex flex-row gap-2">
  <p>
    <span style="font-weight: bold;">{$_("attribute.crit_damage")}: </span>
  </p>
  <p>{$_("attribute.guide.table.crit_damage")}</p>
</div>
<div class="flex flex-row gap-2">
  <p>
    <span style="font-weight: bold;">{$_("attribute.ability_haste")}: </span>
  </p>
  <p>{$_("attribute.guide.table.ability_haste")}</p>
</div>
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("attribute.guide.h2")}</h2>
<p>{$_("attribute.guide.p2")}</p>
<p class="pt-4">
  <span style="padding: 0px 4px;">{$_("element.fire")}</span><span
    style="padding: 0px 4px;">{$_("element.water")}</span
  ><span style="padding: 0px 4px;">{$_("element.earth")}</span><span
    style="padding: 0px 4px;">{$_("element.lightning")}</span
  ><span style="padding: 0px 4px;">{$_("element.air")}</span>
</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("attribute.guide.h3")}
</h2>
<p>{$_("attribute.guide.p3.text1")}{$_("element.fire")}</p>
<div class="flex gap-1 pt-4">
  <p class="font-bold">{$_("attribute.guide.p3.text2.part1")}</p>
  <p>{$_("attribute.guide.p3.text2.part2")}</p>
  <p>{$_("element.fire")}{$_("attribute.guide.p3.text2.part3")}</p>
</div>
<div class="flex gap-1">
  <p class="font-bold">{$_("attribute.guide.p3.text3.part1")}</p>
  <p>{$_("attribute.guide.p3.text3.part2")}</p>
  <p>{$_("element.fire")}{$_("attribute.guide.p3.text3.part3")}</p>
</div>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("attribute.guide.h4")}
</h2>
<p>{$_("attribute.guide.p4")}</p>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/824373707593220168/unknown.png",
      alt: "Hover on player head",
    },
  ]}
/>
