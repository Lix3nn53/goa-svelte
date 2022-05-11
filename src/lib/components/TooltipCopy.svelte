<script lang="ts">
  import Tooltip from "./Tooltip.svelte";
  import CopyToClipboard from "./CopyToClipboard.svelte";
  import Button from "./button/Button.svelte";

  export let textToCopy = "play.guardiansofadelia.com";
  export let textButton = "play.guardiansofadelia.com";

  let text = "Click to copy";

  async function copySuccess() {
    text = "✔ Copied to clipboard!";
    setTimeout(function () {
      text = "Click to copy";
    }, 1200);
  }
</script>

<Tooltip>
  <CopyToClipboard text={textToCopy} let:copy on:copy={copySuccess}>
    <Button
      type="button"
      style="secondary"
      outline
      customClass="w-full"
      on:click={copy}
    >
      {textButton}
    </Button>
  </CopyToClipboard>
  <span slot="tooltip">{text}</span>
</Tooltip>
