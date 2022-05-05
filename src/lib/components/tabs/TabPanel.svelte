<script>
  import { getContext } from 'svelte';

  import getId from './id';
  import { TABS } from './Tabs.svelte';

  const panel = {
    id: getId()
  };
  const { registerPanel, selectedPanel, labeledBy } = getContext(TABS);

  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
<div 
  id={panel.id}
  aria-labelledby={$labeledBy[panel.id]}
  class="bg-base-50 p-9 rounded-lg shadow"
  role="tabpanel">
    <slot></slot>
</div>
{/if}
