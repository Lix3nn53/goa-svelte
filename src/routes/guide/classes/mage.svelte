<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Mage</h2>
<div class="flex flex-col lg:flex-row justify-between">
  <div class="lg:w-1/2">{$_("classes.tier1.mage.playstyle")}</div>
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
