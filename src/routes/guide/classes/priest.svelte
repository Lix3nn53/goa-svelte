<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Paladin</h2>
<p class="pb-4">
  {$_("classes.tier1.paladin.playstyle")}
</p>
<CardGuideClass
  src="/img/guide/classes/paladin/icon.png"
  weapons={["Wand", "Staff", "Sword", "GreatSword", "WarHammer"]}
  armors={["Heavy", "Plate", "Light", "Cloth", "Shield"]}
  health={7}
  mana={4}
  damage={5}
  defense={7}
  crit_chance={2}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable>AAAAAAAAA</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/795582339786473472/unknown.png",
      alt: "A Frozen Enemy",
    },
    {
      src: "https://media.giphy.com/media/bMZwOUeocIxMXZ934o/giphy.gif",
      alt: "Turret",
    },
    {
      src: "https://media.giphy.com/media/VpgG19d7GYvXNSLhEd/giphy.gif",
      alt: "Bomb",
    },
    {
      src: "https://media.giphy.com/media/Ap3Lfh2nJZ2l2ywuay/giphy.gif",
      alt: "Missile",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/795268511130714152/unknown.png",
      alt: "Skeleton Army",
    },
  ]}
/>
