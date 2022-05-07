<script lang="ts">
  import ClickOutside from "svelte-click-outside";

  export let iconClass = "fa-solid fa-angle-down ml-2";
  export let text = "Click";
  export let btnCustomClass = "";

  let btnClass = `btn btn-ghost flex-nowrap ${btnCustomClass}`;
  let dropdown;
  let triggerEl;

  export let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("absolute");
  }
</script>

<button
  id="dropdownDefault"
  data-dropdown-toggle="dropdown"
  class="focus:ring-2 focus:outline-none focus:ring-base-300/[.2] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-base-800/[.2]"
  type="button"
  bind:this={triggerEl}
  on:click={() => toggle()}
  >{text}<svg
    class="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    /></svg
  ></button
>
<!-- Dropdown menu -->
<ClickOutside
  on:clickoutside={() => {
    if (isOpen) {
      toggle();
    }
  }}
  exclude={[triggerEl]}
>
  <div
    id="dropdown"
    bind:this={dropdown}
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefault"
    >
      <slot />
    </ul>
  </div>
</ClickOutside>
