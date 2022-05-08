<script>
  export let lazy = true;
  export let imageProps = {};

  export let onClick = () => {};
  let className = "";
  let loaded = !lazy;
  let afterLoad = false;
  function load(img) {
    img.onload = () => {
      loaded = true;
      setTimeout(() => (afterLoad = true), 1500);
    };
  }
</script>

<img
  on:click={onClick}
  use:load
  class:blur={!loaded}
  class:after-load={afterLoad}
  class:loaded
  class="p-1 md:p-2 w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
  {...imageProps}
  alt={imageProps.alt || ""}
/>

<style>
  img {
    opacity: 0;
    transition: all 1s ease;
  }
  .after-load {
    transition: none;
  }
  .loaded {
    opacity: 1;
  }

  img {
    min-height: 50px;
    height: auto !important;
    cursor: pointer;
  }

  img:hover {
    opacity: 0.5;
    transition: none;
    filter: grayscale(0.5) blur(1px);
  }
</style>
