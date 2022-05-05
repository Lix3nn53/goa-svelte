<script lang="ts">
  export let iconClass = "fa-solid fa-angle-down ml-2";
  export let text = "Click";
  export let btnCustomClass = "";

  let btnClass = `btn btn-ghost ${btnCustomClass}`;
</script>

<div class="dropdown">
  <button tabindex="0" class={btnClass}>{text}<i class={iconClass} /></button>
  <ul
    tabindex="0"
    class="dropdown-content menu menu-compact mt-2 p-2 shadow bg-base-200 rounded-box w-52"
  >
    <slot />
  </ul>
</div>
