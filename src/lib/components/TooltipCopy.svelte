<script lang="ts">
  import { clickToCopy } from "$lib/clickToCopy";

  let text = "Click to copy";
  let copy;

  async function copySuccess() {
    text = "✔ Copied to clipboard!";
    setTimeout(function () {
      text = "Click to copy";
    }, 1000);
  }
</script>

<span use:clickToCopy={copy} on:copysuccess={copySuccess} data-tooltip={text}>
  <slot /></span
>
