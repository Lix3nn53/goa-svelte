<script lang="ts">
  export let href: string;
  export let style: "primary" | "secondary" | "base" = "primary";
  export let customClass = "";

  let className = `button ${style} ${customClass}`;
</script>

<a {href} class={className}>
  <div class="button-content"><slot /></div>
</a>

<style>
  .button {
    color: rgb(var(--color-base-900));
    border: none;
    padding: 0;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
    position: relative;
    display: inline-block;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }

  .button-content {
    display: block;
    transform: translate(6px, -6px);
    transition: all 0.2s ease;
    position: relative;
    z-index: 10;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    padding-top: 19px;
    padding-right: 34px;
    padding-bottom: 21px;
    padding-left: 34px;
  }

  .button:before,
  .button:after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    transition: all 0.2s ease;
  }

  .button:before {
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: rotate(-45deg) scale(1);
  }

  .button:after {
    right: 0;
    bottom: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(1);
  }

  .button:hover .button-content {
    transform: translate(4px, -4px);
  }

  .button:hover:before {
    transform: rotate(-45deg) scale(0.66);
  }

  .button:hover:after {
    transform: rotate(45deg) scale(0.66);
  }

  .button:active .button-content {
    transform: translate(0, 0);
  }

  .button:active:before {
    transform: rotate(-45deg) scale(0);
  }

  .button:active:after {
    transform: rotate(45deg) scale(0);
  }

  .primary,
  .primary:before,
  .primary:after {
    background-color: rgb(var(--color-primary-700));
  }

  .button:disabled,
  .button:disabled:before,
  .button:disabled:after {
    background-color: rgb(var(--color-base-200));
  }

  .secondary,
  .secondary:before,
  .secondary:after {
    background-color: rgb(var(--color-secondary-800));
  }

  .primary .button-content {
    background-color: rgb(var(--color-primary-500));
  }

  .button:disabled .button-content {
    background-color: rgb(var(--color-base-400));
  }

  .secondary .button-content {
    background: linear-gradient(
      45deg,
      rgb(var(--color-secondary-600)) 25%,
      rgb(var(--color-secondary-500)) 100%
    );
  }
</style>
