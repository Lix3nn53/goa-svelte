<script lang="ts">
  export let src = "/img/guide/skills/1.png";
  export let top = 0;
  export let left = 0;
  export let name = "Name";
  export let type = "type";
  export let description = "Description";

  let card;

  function toggleCard() {
    card.classList.toggle("hidden");
  }
</script>

<div
  class="point border-4 w-16 h-16 rounded border-white/[.6] hover:border-white"
  style="background-image: url('{src}'); top: {top}px; left: {left}px;"
  on:click={toggleCard}
>
  <div class="card hidden rounded-lg p-2 bg-base-50/[.8]" bind:this={card}>
    <h3 class="text-xl font-bold">{name}</h3>
    <div class="text-sm">
      <p class="font-semibold pb-4">
        Type: <span class="font-normal">{type}</span>
      </p>
      <p>
        {description}
      </p>
    </div>
  </div>
</div>

<style>
  .point {
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
  }

  .point:hover {
    box-shadow: 0 0 36px 8px rgba(255, 253, 150, 0.5);
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
