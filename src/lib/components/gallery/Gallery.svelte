<script>
  import { onMount } from "svelte";
  import Image from "./Image.svelte";
  import { Modal, open, close } from "./carousel";

  export let images = [];
  const popModal = (idx) =>
    setTimeout(() => {
      open(images, idx);
    }, 0);

  let galleryElems;
  let galleryElem;
  let showModal;
  onMount(() => {
    galleryElems = document.getElementsByClassName("svelte-images-gallery");
    const index = Array.prototype.findIndex.call(
      galleryElems,
      (elem) => elem === galleryElem
    );
    showModal = index === 0;
  });
</script>

<div class="svelte-images-gallery flex flex-wrap" bind:this={galleryElem}>
  {#each images as image, i}
    <Image
      imageProps={{
        ...image,
        src: image.thumbnail || image.src,
        alt: image.alt || "",
      }}
      onClick={() => popModal(i)}
    />
  {/each}
</div>

{#if showModal}
  <Modal />
{/if}
