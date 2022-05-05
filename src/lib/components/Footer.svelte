<script>
  import SwitchTheme from "./switch/SwitchTheme.svelte";
  import Link from "$lib/components/link/Link.svelte";
</script>

<footer
  class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6"
>
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
    >© {new Date().getFullYear()}
    <Link href="/">GuardiansOfAdelia™</Link>. All Rights Reserved.
  </span>
  <ul
    class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <li class="mr-4 md:mr-6">
      <Link href="#">About</Link>
    </li>
    <li class="mr-4 md:mr-6">
      <Link href="#">Privacy Policy</Link>
    </li>
    <li class="mr-4 md:mr-6">
      <Link href="#">Terms of Service</Link>
    </li>
    <li class="mr-4 md:mr-6">
      <SwitchTheme />
    </li>
  </ul>
</footer>
