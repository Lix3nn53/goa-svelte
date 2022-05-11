<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Rogue</h2>
<p class="pb-4">
  {$_("classes.tier1.ranger.playstyle")}
</p>
<CardGuideClass
  src="/img/guide/classes/ranger/icon.png"
  weapons={["Bow", "Crossbow", "Dagger"]}
  armors={["Light", "Feather", "Cloth"]}
  health={4}
  mana={4}
  damage={6}
  defense={4}
  crit_chance={7}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable>AAAAAAAAA</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839433556718911528/unknown.png",
      alt: "Bear Trap",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/901783690995171328/unknown.png",
      alt: "Bat Form",
    },
    {
      src: "https://media.giphy.com/media/vVnIh1ZhwHmrasKKlE/giphy.gif",
      alt: "Assassin's Execution",
    },
  ]}
/>
