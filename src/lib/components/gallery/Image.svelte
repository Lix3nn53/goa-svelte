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

<div
  class="thumbnails m-1 md:m-2 w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
  on:click={onClick}
>
  <img
    use:load
    class:blur={!loaded}
    class:after-load={afterLoad}
    class:loaded
    {...imageProps}
    alt={imageProps.alt || ""}
  />
  <div class="black" />
  <div class="title">{imageProps.alt}</div>
</div>

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

  .thumbnails {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }

  .thumbnails img {
    width: 100%;
  }

  .black {
    text-align: center;
    background: #000;
    background-blend-mode: multiply;
    color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
  }

  .title {
    color: #fff;
    font-size: 2em;
    align-self: center;
    position: absolute;
    z-index: 10;
  }

  .black,
  .title {
    transition: opacity 0.3s;
  }

  .thumbnails:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 20;
  }

  .thumbnails:hover .black,
  .thumbnails:hover .title {
    opacity: 0;
  }
</style>
