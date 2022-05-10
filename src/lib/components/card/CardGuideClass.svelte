<script lang="ts">
  import { _ } from "svelte-i18n";

  export let className: string;
  export let src = "/img/guide/classes/fighter/icon.png";
  export let weapons: string[] = [];
  export let armors: string[] = [];
  export let health: number = 0;
  export let mana: number = 0;
  export let damage: number = 0;
  export let defense: number = 0;
  export let crit_chance: number = 0;
</script>

<div class="flex-container column bg-base-50 rounded-lg p-9 w-full">
  <h2 class="font-bold text-xl text-center pb-2">{className}</h2>
  <img
    {src}
    alt="icon"
    class="pixel-icon"
    style="width: 150px; margin: auto;"
  />
  <h3 class="text-center font-semibold text-lg pt-4">Weapons</h3>
  <table class="w-full flex flex-wrap gap-4 justify-center">
    {#each weapons as weapon}
      <p class="text-center">{weapon}</p>
    {/each}
  </table>
  <h3 class="text-center font-semibold text-lg pt-4">Armors</h3>
  <table class="w-full flex flex-wrap gap-4 justify-center">
    {#each armors as armor}
      <p class="text-center">{armor}</p>
    {/each}
  </table>
  <h3 class="text-center font-semibold text-lg pt-4">Attributes</h3>
  <div class="w-full">
    <div class="border-b flex flex-row justify-between">
      <p>Health:</p>
      <p>{health}</p>
    </div>
    <div class="border-b flex flex-row justify-between">
      <p>Mana:</p>
      <p>{mana}</p>
    </div>
    <div class="border-b flex flex-row justify-between">
      <p>Damage:</p>
      <p>{damage}</p>
    </div>
    <div class="border-b flex flex-row justify-between">
      <p>Defense:</p>
      <p>{defense}</p>
    </div>
    <div class="border-b flex flex-row justify-between">
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
