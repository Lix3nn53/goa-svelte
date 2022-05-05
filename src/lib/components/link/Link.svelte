<script lang="ts">
  export let href: string;
  export let customClass: String = "";

  let className = `link link-hover ${customClass}`;
</script>

<a {href} class={className}>
  <slot />
</a>
