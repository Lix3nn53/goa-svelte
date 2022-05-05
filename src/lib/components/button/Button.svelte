<script lang="ts">
  export let type: "button" | "menu" | "reset" | "submit";
  export let disabled = false;
  export let style:
    | "primary"
    | "secondary"
    | "base"
    | "accent"
    | "ghost"
    | "link" = "primary";
  export let outline = false;

  let styleClass = `btn-${style}`;

  let className = `btn ${styleClass} ${outline ? "btn-outline" : ""} ${
    disabled ? "btn-disabled" : ""
  }`;
</script>

<button on:click class={className} {type} {disabled}>
  <slot />
</button>
