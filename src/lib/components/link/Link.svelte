<script lang="ts">
  export let href: string;
  export let customClass: String = "";
  export let target: "_self" | "_blank" = "_self";

  let className = `${customClass}`;
</script>

<a {href} class={className} {target} rel="noreferrer">
  <slot />
</a>
