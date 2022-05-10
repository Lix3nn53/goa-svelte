<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Mage</h2>
<div class="flex flex-col lg:flex-row justify-between">
  <div class="lg:w-1/2">
    {$_("classes.tier1.mage.playstyle")}
  </div>
  <div class="lg:w-1/2">
    <CardGuideClass
      className="Mage"
      src="/img/guide/classes/fire_mage/icon.png"
      weapons={["Wand", "Staff", "Dagger", "WarHammer"]}
      armors={["Cloth", "Feather", "Light"]}
      health={7}
      mana={2}
      damage={9}
      defense={5}
      crit_chance={2}
    />
  </div>
</div>
<h2 class="text-xl font-semibold pb-2">Gallery</h2>
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
