<script lang="ts">
  import { _ } from "svelte-i18n";

  export let src = "/img/guide/classes/fighter/icon.png";
  export let weapons: string[] = [];
  export let armors: string[] = [];
  export let health: number = 0;
  export let mana: number = 0;
  export let damage: number = 0;
  export let defense: number = 0;
  export let crit_chance: number = 0;
</script>

<div class="flex flex-col">
  <img {src} alt="icon" class="pixel-icon" style="width: 150px;" />
  <h3 class="font-semibold text-lg pt-4">Weapons</h3>
  <table class="flex flex-wrap gap-4">
    {#each weapons as weapon}
      <p class="text-center">{weapon}</p>
    {/each}
  </table>
  <h3 class="font-semibold text-lg pt-4">Armors</h3>
  <table class="flex flex-wrap gap-4">
    {#each armors as armor}
      <p class="text-center">{armor}</p>
    {/each}
  </table>
  <h3 class="font-semibold text-lg pt-4">Attributes</h3>
  <div class="">
    <div class="flex flex-row gap-2">
      <p>Health:</p>
      <p>{health}</p>
    </div>
    <div class="flex flex-row gap-2">
      <p>Mana:</p>
      <p>{mana}</p>
    </div>
    <div class="flex flex-row gap-2">
      <p>Damage:</p>
      <p>{damage}</p>
    </div>
    <div class="flex flex-row gap-2">
      <p>Defense:</p>
      <p>{defense}</p>
    </div>
    <div class="flex flex-row gap-2">
      <p>Critical Chance:</p>
      <p>{crit_chance}</p>
    </div>
  </div>
</div>

<style>
  .pixel-icon {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
</style>
