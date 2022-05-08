<script lang="ts">
  export let customClass: string = "";

  let className = `button-belt-button ${customClass}`;
</script>

<button on:click class={className} type="button">
  <slot />
</button>

<style>
  .button-belt-button {
    background-color: transparent;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid rgb(var(--color-base-400));
    border-top-width: 2px;
    border-bottom-width: 2px;
    transition: all 0.2s ease;
  }

  .button-belt-button:last-child {
    border-right-width: 2px;
  }

  .button-belt-button:first-child {
    border-left-width: 2px;
  }

  button.button-belt-button {
    text-decoration: none;
    color: rgb(var(--color-base-900));
    cursor: pointer;
  }

  button.button-belt-button:disabled {
    cursor: default;
    background-color: rgb(var(--color-base-200));
  }

  button.button-belt-button:hover {
    transform: translateY(-0.5rem);
    background: rgb(var(--color-primary-400));
    border-color: rgb(var(--color-primary-400));
    color: rgb(var(--color-primary-700));
  }

  button.button-belt-button:hover {
    background: rgb(var(--color-secondary-400));
    border-color: rgb(var(--color-secondary-400));
    color: rgb(var(--color-secondary-700));
  }
</style>
