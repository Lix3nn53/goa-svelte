<script context="module" lang="ts">
  import ButtonBlock from "$lib/components/button/ButtonBlock.svelte";

  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Login</title>
</svelte:head>

<div class="flex flex-col w-96 rounded-lg mx-auto card">
  <div class="px-0 sm:px-4 text-center">
    <div class="font-bold text-2xl py-6">Account Login</div>
    <p class="italic py-4">
      Login with microsoft account which owns minecraft to directly link your
      minecraft account.
    </p>
    <ButtonBlock type="button" style="primary"
      ><i class="fab fa-microsoft pr-2" />Login With Microsoft</ButtonBlock
    >
    <div class="divider py-4">OR</div>
    <p class="italic pb-4">
      Login with alternative Social Account. You will have to link your
      minecraft account manually with in-game command.
    </p>
    <div class="flex justify-center gap-2 pb-4">
      <button class="oauth-link facebook" type="button"
        ><i class="fab fa-facebook" /></button
      ><button class="oauth-link discord" type="button"
        ><i class="fab fa-discord" /></button
      ><button class="oauth-link twitch" type="button"
        ><i class="fab fa-twitch" /></button
      ><button class="oauth-link google" type="button"
        ><i class="fab fa-google" /></button
      >
    </div>
  </div>
</div>

<style>
  .card {
    background-color: rgba(15, 23, 42, 0.55);
  }
  button.oauth-link {
    text-decoration: none;
    color: rgb(var(--color-base-900));
    cursor: pointer;
  }
  .oauth-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
  }
  .oauth-link:hover {
    transform: translateY(-4px);
  }
  button.oauth-link:disabled {
    cursor: default;
    background-color: rgb(var(--color-base-200));
  }
  .oauth-link.facebook {
    background-color: #3763d2;
  }

  .oauth-link.twitter {
    background-color: #1abcff;
  }

  .oauth-link.twitch {
    background-color: #7b5dfa;
  }

  .oauth-link.google {
    background-color: #fd434f;
  }

  .oauth-link.minecraft {
    background-color: #00aa00;
  }

  .oauth-link.discord {
    background-color: #7289da;
  }
</style>
