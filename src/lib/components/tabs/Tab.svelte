<script>
  import { getContext, onMount, tick } from "svelte";

  import getId from "./id";
  import { TABS } from "./Tabs.svelte";

  let tabEl;

  const tab = {
    id: getId(),
  };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } =
    getContext(TABS);

  let isSelected;
  $: isSelected = $selectedTab === tab;

  registerTab(tab);

  onMount(async () => {
    await tick();
    registerTabElement(tabEl);
  });
</script>

<li
  bind:this={tabEl}
  role="tab"
  id={tab.id}
  aria-controls={$controls[tab.id]}
  aria-selected={isSelected}
  tabindex={isSelected ? 0 : -1}
  class:tab-active={isSelected}
  class="tab tab-bordered"
  on:click={() => selectTab(tab)}
>
  <slot />
</li>
