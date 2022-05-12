<script lang="ts">
  export let top = 0;
  export let left = 0;
  export let direction:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright" = "top";
</script>

<i
  class="fa-solid fa-arrow-down-long text-2xl {direction}"
  style="top: {top}px; left: {left}px;"
/>

<style>
  i {
    position: absolute;
  }

  .right {
    transform: rotate(-90deg);
  }

  .left {
    transform: rotate(90deg);
  }

  .top {
    transform: rotate(180deg);
  }

  .topleft {
    transform: rotate(180deg);
  }

  .topright {
    transform: rotate(225deg);
  }

  .bottomleft {
    transform: rotate(180deg);
  }

  .bottomright {
    transform: rotate(-45deg);
  }
</style>
