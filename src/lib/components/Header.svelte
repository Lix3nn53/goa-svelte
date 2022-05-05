<script lang="ts">
  import { onDestroy } from "svelte";

  import LinkButton from "./link/LinkButton.svelte";
  import Divider from "./Divider.svelte";
  import Button from "./button/Button.svelte";

  import { user } from "./../../stores";
  import Dropdown from "./Dropdown.svelte";
  import Link from "./link/Link.svelte";

  let user_value;

  const unsubscribe = user.subscribe((value) => {
    user_value = value;
  });

  onDestroy(unsubscribe);

  let collapse: HTMLElement;

  function toggleCollapse() {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  }
</script>

<nav class="navbar container">
  <div class="navbar-start">
    <Dropdown
      iconClass="fa-solid fa-align-left"
      text=""
      btnCustomClass="lg:hidden"
    >
      <li><Link href="#">Item 1</Link></li>
      <li><Link href="#">Item 2</Link></li>
      <li><Link href="#">Item 3</Link></li>
    </Dropdown>
    <div class="flex flex-row flex-nowrap gap-2 lg:gap-4">
      <Link href="/">
        <img src="/img/favicon.webp" class="h-14" alt="Logo" />
      </Link>
      <div>
        <Dropdown text="EN">
          <li><Link href="#">EN</Link></li>
          <li><Link href="#">TR</Link></li>
        </Dropdown>
      </div>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link href="#">Item 1</Link></li>
      <li><Link href="#">Item 2</Link></li>
      <li><Link href="#">Item 3</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <Link href="#" customClass="btn btn-primary">Login</Link>
  </div>
</nav>
