<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
  import SkillTreePoint from "$lib/components/SkillTreePoint.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Warrior</h2>
<p class="pb-4">
  {$_("classes.tier1.ranger.playstyle")}
</p>
<CardGuideClass
  src="/img/guide/classes/fighter/icon.png"
  weapons={["Battleaxe", "GreatSword", "Sword", "WarHammer", "Spear"]}
  armors={["Heavy", "Plate", "Light", "Shield"]}
  health={7}
  mana={2}
  damage={7}
  defense={7}
  crit_chance={2}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable>
  <SkillTreePoint src="/img/guide/skills/1.png" top={40} left={40} />
</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
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
