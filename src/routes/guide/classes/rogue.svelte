<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Rogue</h2>
<div class="flex flex-col lg:flex-row justify-between">
  <div>{$_("classes.tier1.ranger.playstyle")}</div>
  <CardGuideClass
    className="Rogue"
    src="/img/guide/classes/ranger/icon.png"
    weapons={["Bow", "Crossbow", "Dagger"]}
    armors={["Light", "Feather", "Cloth"]}
    health={4}
    mana={4}
    damage={6}
    defense={4}
    crit_chance={7}
  />
</div>
