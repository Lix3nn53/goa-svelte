<div data-page="home" class="page-bg" />

<style>
  .page-bg,
  .page-bg::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .page-bg::after {
    content: "";
    bottom: 0;
  }

  .page-bg[data-page="home"] {
    min-height: 880px;
    height: 880px;
    z-index: -1;
    background: url("/img/poster2.jpg") bottom no-repeat;
    background-size: cover;
  }

  .page-bg[data-page="home"]::after {
    background: linear-gradient(
      180deg,
      rgb(var(--color-base-50)),
      rgba(33, 40, 59, 0.4) 33.33%,
      rgb(var(--color-base-50)) 98%
    );
  }
</style>
