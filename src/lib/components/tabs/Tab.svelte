<script>
  import { getContext, onMount, tick } from 'svelte';

  import getId from './id';
  import { TABS } from './Tabs.svelte';

  let tabEl;

  const tab = {
    id: getId()
  };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } = getContext(TABS);

  let isSelected;
  $: isSelected = $selectedTab === tab;

  registerTab(tab);

  onMount(async () => {
    await tick();
    registerTabElement(tabEl);
  });
</script>

<style>
	.svelte-tabs__tab {
    cursor: pointer;
	}

	.svelte-tabs__selected {
		background-color: rgb(var(--color-primary-800));
	}
</style>

<li
  bind:this={tabEl}
  role="tab"
  id={tab.id}
  aria-controls={$controls[tab.id]}
  aria-selected={isSelected}
  tabindex="{isSelected ? 0 : -1}"
  class:svelte-tabs__selected={isSelected}
  class="svelte-tabs__tab inline-block p-4 px-12 mx-2 bg-primary-600 hover:bg-primary-700 rounded-t-lg text-base-50"
  on:click={() => selectTab(tab)}>
	<slot></slot>
</li>
