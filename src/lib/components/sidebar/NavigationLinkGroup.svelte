<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { activeUrl, transitionDurationInMs } from "./SidebarStore";
  import NavigationLink from "./NavigationLink.svelte";

  export let routes = [];
  export let name = null;
  export let route = null;
  export let disabled = false;
  export let collapseTree = false;

  $: isGroupOpenByDefault = collapseTree !== true;
  $: groupOpen = isGroupOpenByDefault;

  let activeSubRoute = null;

  const dispatch = createEventDispatcher();

  const toggleGroup = () => (groupOpen = !groupOpen);

  /*
   * A child route of this `NavigationLinkGroup` is active,
   * which it signalled by dispatching the `active` event.
   * As the current `NavigationLinkGroup` is part of the active navigation
   * tree, it's supposed to be opened.
   * As the navigation tree can have deep nestings, this
   * `NavigationLinkGroup` in turn signals to its parent,
   * that it is part of the active tree.
   */
  const handleActiveChange = (event) => {
    // Open current group, as it's part of the active tree.
    groupOpen = true;
    /*
     * Allow child `NavigationLink`s to know that they are part
     * of the same group as the active `NavigationLink`.
     */
    activeSubRoute = event.detail.activeSubRoute;
    /*
     * Escalate the `active` event to the parent to inform it
     * that it is part of the active tree.
     */
    dispatch(event.type, { activeSubRoute: route });
  };

  /*
   * Whenever the active URL changes in the store, the active subroutes
   * will change too, which is why the existing active subroute is reset.
   * The new active subroute is determined in `handleActiveChange`.
   */
  const unsubscribeFromActiveSubRoute = activeUrl.subscribe(() => {
    activeSubRoute = null;
  });

  // The active unsubscribe is required due the usage of a callback function.
  onDestroy(unsubscribeFromActiveSubRoute);
</script>

<!-- A groups heading is differentiated by having a name and a route -->
{#if name && route}
  <!--
		If a group's root route is part of the active tree,
		the root link considers itself to be "active".
	-->
  <div class="flex flex-row">
    <NavigationLink
      {name}
      {route}
      {disabled}
      activeGroup={Boolean(activeSubRoute)}
      on:active={handleActiveChange}
    />
    <!--
		Don't allow disabled groups to be opened:
		Child routes are considered disabled when their parent is.
	-->
    {#if !disabled}
      <button
        class="group-toggle w-full text-left pl-4"
        class:open={groupOpen}
        on:click={toggleGroup}
        aria-expanded={groupOpen}
        aria-controls={`${route}-group`}
        aria-label="Toggle the visibility of child navigation links"
        title="Toggle the visibility of child navigation links"
      >
        {#if groupOpen}
          <i class="fa-solid fa-chevron-down" />
        {:else}
          <i class="fa-solid fa-chevron-right" />
        {/if}
      </button>
    {/if}
  </div>
{/if}

<!-- Child routes of the group -->
<!--
	Add redundant `role="list"` to counter this behavior of Safari:
	https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
	svelte-ignore a11y-no-redundant-roles
-->
<ul
  id={`${route ? route : "root"}-group`}
  hidden={!groupOpen || disabled}
  transition:fly={{ duration: $transitionDurationInMs }}
  role="list"
>
  {#each routes as route (route.route)}
    <li class:group={route.childRoutes}>
      {#if route.childRoutes}
        <!--
					If the child route has children in return,
					render a nested `NavigationLinkGroup`.
					It's crucial that `NavigationLinkGroup`s
					pass on the active change event to their parent.
				-->
        <svelte:self
          routes={route.childRoutes}
          name={route.name}
          route={route.route}
          disabled={route.disabled}
          on:active={handleActiveChange}
          collapseTree={route.collapseTree}
        />
      {:else}
        <NavigationLink
          {...route}
          activeGroup={activeSubRoute === route.route}
          on:active={handleActiveChange}
        />
      {/if}
    </li>
  {/each}
</ul>

<style>
  .group-toggle {
    display: inline-block;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .group-toggle::-moz-focus-inner {
    border: 0;
  }

  /* .group-toggle.open {
    transform: rotate(90deg);
  } */

  .group-toggle:hover,
  .group-toggle:focus {
    font-weight: bold;
    color: rgb(var(--color-primary-400));
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-inline-start: 16px;
    line-height: 2.4;
  }

  .group {
    padding-block-end: var(--fontSize);
  }
</style>
