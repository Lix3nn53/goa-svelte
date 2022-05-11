<script lang="ts">
  export let src = "/img/guide/skills/1.png";
  export let top = 0;
  export let left = 0;

  let card;

  function toggleCard() {
    card.classList.toggle("hidden");
  }
</script>

<div
  class="point border-4 w-16 h-16 rounded"
  style="background-image: url('{src}'); top: {top}px; left: {left}px;"
  on:click={toggleCard}
>
  <div class="card hidden rounded-lg p-2 bg-base-50/[.8]" bind:this={card}>
    <h3 class="text-lg font-semibold pb-2">Expertise</h3>
    <div class="text-sm">
      <span
        >At 1st level, choose two of your skill Proficiencies, or one of your
        skill Proficiencies and your proficiency with Thieves' Tools. Your
        Proficiency Bonus is doubled for any ability check you make that uses
        either of the chosen Proficiencies.</span
      >
    </div>
  </div>
</div>

<style>
  .point {
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 8px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(245, 175, 25, 0.5), 0 0 30px rgba(245, 175, 25, 0.5),
      0 0 40px rgba(245, 175, 25, 0.5), 0 0 50px rgba(245, 175, 25, 0.2),
      0 0 80px rgba(245, 175, 25, 0.2);
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
  }

  .point:hover .card {
    display: block;
    z-index: 3;
    overflow-y: auto;
  }
  .card {
    width: 215px;
    height: auto;
    min-height: 215px;
    color: rgb(var(--color-base-900));
    position: relative;
    margin-left: 48px;
    margin-top: 16px;
  }
</style>
