<script lang="ts">
  export let href: string;
  export let customClass: String = "";
  export let target: "_self" | "_blank" = "_self";
  export let style: "ghost" | "primary" | "secondary" = "ghost";

  let className = `${customClass}`;

  if (style === "primary") {
    className += ` text-primary-500`;
  } else if (style === "secondary") {
    className += ` text-secondary-500`;
  }
</script>

<a {href} class={className} {target} rel="noreferrer">
  <slot />
</a>
