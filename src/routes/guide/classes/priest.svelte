<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Priest</h2>
<div class="flex flex-col lg:flex-row justify-between">
  <div>{$_("classes.tier1.paladin.playstyle")}</div>
  <CardGuideClass
    className="Priest"
    src="/img/guide/classes/paladin/icon.png"
    weapons={["Wand", "Staff", "Sword", "GreatSword", "WarHammer"]}
    armors={["Heavy", "Plate", "Light", "Cloth", "Shield"]}
    health={7}
    mana={4}
    damage={5}
    defense={7}
    crit_chance={2}
  />
</div>
<h2 class="text-xl font-semibold pb-2">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/794042194674712586/unknown.png",
      alt: "Totem",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839424808550531072/unknown.png",
      alt: "Polymorph",
    },
    {
      src: "https://media.giphy.com/media/0vjorN1Lxi1m3PkIU6/giphy.gif",
      alt: "Surf",
    },
  ]}
/>
