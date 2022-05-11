<script lang="ts">
  export let direction: "top" | "bottom" | "left" | "right" = "top";

  let className = `tooltip tooltip-${direction}`;
</script>

<div class="tooltip_content">
  <slot />
  <span class={className}><slot name="tooltip" /></span>
</div>

<style>
  .tooltip_content {
    position: relative;
    cursor: pointer;
  }

  .tooltip {
    opacity: 0;
    position: absolute;
    padding: 0.5rem 1rem;
    background-color: rgb(var(--color-secondary-500));
    color: rgb(var(--color-base-50));
    white-space: nowrap;
    font-weight: 700;
    border-radius: 0.5rem;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: rgb(var(--color-secondary-500));
    border-radius: 3px;
  }

  .tooltip_content,
  .tooltip,
  .social__icon {
    transition: 0.3s;
  }

  /*========== Tooltip left ==========*/
  .tooltip-left {
    left: 0;
    transform: translateX(-100%);
  }

  .tooltip-left::after {
    top: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    right: 1px;
  }

  .tooltip_content:hover .tooltip-left {
    opacity: 1;
    left: -1rem;
  }

  /*========== Tooltip top ==========*/
  .tooltip-top {
    top: -2.25rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .tooltip-top::after {
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    bottom: 1px;
  }

  .tooltip_content:hover .tooltip-top {
    opacity: 1;
    top: -3.25rem;
  }

  /*========== Tooltip bottom ==========*/
  .tooltip-bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
  }

  .tooltip-bottom::after {
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    top: 1px;
  }

  .tooltip_content:hover .tooltip-bottom {
    opacity: 1;
    bottom: -1rem;
  }

  /*========== Tooltip right  ==========*/
  .tooltip-right {
    right: 0;
    transform: translateX(100%);
  }

  .tooltip-right::after {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    left: 1px;
  }

  .tooltip_content:hover .tooltip-right {
    opacity: 1;
    right: -1rem;
  }
</style>
