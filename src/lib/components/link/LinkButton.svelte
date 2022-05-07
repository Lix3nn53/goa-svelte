<script lang="ts">
  export let href: string;
  export let target: "_self" | "_blank" = "_self";
  export let style: "primary" | "secondary" | "ghost" = "primary";
  export let outline = false;
  export let customClass: String = "";

  let styleClass = "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300";
  if (style === "secondary") {
    styleClass =
      "bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-300";
  } else if (style === "ghost") {
    styleClass =
      "hover:bg-base-200/[.2] focus:ring-base-300/[.2] dark:hover:bg-base-700/[.2] dark:focus:ring-base-800/[.2]";
  }

  if (outline) {
    styleClass += " border bg-transparent";
    if (style === "primary") {
      styleClass += " border-primary-600 text-primary-600";
    } else if (style === "secondary") {
      styleClass +=
        " border-secondary-600 text-secondary-600 hover:border-secondary-700 hover:text-base-50";
    }
  }

  let className = `hover:no-underline focus:ring-4 focus:outline-none px-5 py-3 text-center mr-3 md:mr-0 font-medium rounded-lg ${styleClass} ${customClass}`;
</script>

<a {href} class={className} {target} rel="noreferrer">
  <slot />
</a>
