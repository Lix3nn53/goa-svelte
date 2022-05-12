<script>
  import { onMount } from "svelte";
  export let width = 2560;
  export let height = 1440;
  export let startX = 0;
  export let startY = 0;

  let ele;

  onMount(() => {
    if (startX === 0 && startY === 0) {
      return;
    }

    ele.scrollTop = startY;
    ele.scrollLeft = startX;
  });

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  const mouseDownHandler = function (e) {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";

    pos = {
      // The current scroll
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
</script>

<div
  class="w-full relative rounded-lg overflow-auto lg:overflow-hidden"
  id="outer"
  bind:this={ele}
  on:mousedown={mouseDownHandler}
>
  <div id="inner" style="width: {width}px; height: {height}px;">
    <slot />
  </div>
</div>

<style>
  #outer {
    height: 720px;
    position: relative;
  }

  #inner {
    position: absolute;
    background: radial-gradient(
      closest-side,
      rgb(var(--color-base-300)),
      rgb(var(--color-base-100))
    );
    background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(https://i.imgur.com/oxVKKsi.jpg);
    background-size: cover;
  }
</style>
