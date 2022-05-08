<script>
  import { _ } from "svelte-i18n";
  import { afterUpdate, createEventDispatcher } from "svelte";
  import { activeUrl, onLinkClick } from "./SidebarStore";

  export let name;
  export let route;
  export let disabled = false;
  export let activeGroup = false; // Whether the link is part of an active `NavigationLinkGroup`.

  let link;
  /*
   * Whether the link is active is computed comparing the route
   * with `activeRoute` from `SidebarStore`.
   */
  $: active = `/${$activeUrl}` === route;

  const onClick = (event) => {
    if (disabled) {
      event.preventDefault();
    } else if ($onLinkClick) {
      event.preventDefault();
      $onLinkClick(event);
    }
  };

  const scrollIntoView = () =>
    link && link.scrollIntoView({ block: "end", behavior: "smooth" });

  const dispatch = createEventDispatcher();

  afterUpdate(() => {
    if (active) {
      /*
       * `NavigationLink` informs the parent "bottom up", that it became
       * active. That way, `Sidebar` can have an O(n) performance:
       * When n `NavigationLink`s render, no additional iteration
       * over the nested route-structure is required to determine,
       * which `NavigationLink` is active.
       */
      dispatch("active", { activeSubRoute: route });
      /*
       * Scroll component into view when it becomes active.
       * The delay is to wait for the rendering to be finished.
       * Without it, there is cases where the scrolling
       * is triggered before the DOM is ready.
       */
      setTimeout(scrollIntoView, 250);
    }
  });
</script>

<a
  on:click={onClick}
  href={route}
  class:active
  aria-current={active}
  {disabled}
  class:activeGroup
  bind:this={link}
  tabindex="0"
>
  {$_(name)}
</a>

<style>
  a {
    display: inline-block;
    text-decoration: none;
    opacity: var(--opacity_linkInactive);
    word-wrap: break-word;
    outline: none;
    padding-block-start: calc(var(--fontSize) / 4);
    padding-block-end: calc(var(--fontSize) / 4);
  }

  a.activeGroup,
  a:hover,
  a:active,
  a:focus {
    opacity: 1;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
    color: rgb(var(--color-primary-400));
  }

  a.active {
    color: rgb(var(--color-primary-500));
    font-weight: bold;
  }

  a.active:hover,
  a:active:focus {
    color: rgb(var(--color-primary-400));
  }

  a[disabled="true"] {
    opacity: var(--opacity_linkDisabled);
    cursor: not-allowed;
  }
</style>
