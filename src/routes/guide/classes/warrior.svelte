<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Warrior</h2>
<div class="flex flex-col lg:flex-row justify-between">
  <div>{$_("classes.tier1.fighter.playstyle")}</div>
  <CardGuideClass
    className="Warrior"
    src="/img/guide/classes/fighter/icon.png"
    weapons={["Battleaxe", "GreatSword", "Sword", "WarHammer", "Spear"]}
    armors={["Heavy", "Plate", "Light", "Shield"]}
    health={7}
    mana={2}
    damage={7}
    defense={7}
    crit_chance={2}
  />
</div>
<h2 class="text-xl font-semibold pb-2">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/833656796135686164/unknown.png",
      alt: "Power Slash",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/832086714927153152/unknown.png",
      alt: "Dragon's Charge",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839421166622998558/unknown.png",
      alt: "Leap of Doom",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png",
      alt: "Aqua Prison",
    },
  ]}
/>
