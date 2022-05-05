<script lang="ts">
	export let value : string;
  export let type : 'text' | 'email' | 'textarea' = 'text';
  export let id : string;
  export let name : string;
  export let placeholder = '';

  let className = "bg-base-100 border border-base-400 text-base-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5";
</script>

<div class="mb-6 w-full">
  <label for={id} class="block mb-2 text-sm font-medium">{name}</label>
  {#if type === 'text'}
    <input bind:value={value} type="text" id={id} placeholder={placeholder} class={className} />
  {:else if type === 'email'}
    <input bind:value={value} type="email" id={id} placeholder={placeholder} class={className} />
  {:else if type === 'textarea'}
    <textarea bind:value={value} id={id} placeholder={placeholder} class={className} />
  {/if}
</div>