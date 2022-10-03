<script context="module" lang="ts">
  import { _ } from "svelte-i18n";
  import Saos from "saos";
  import Button from "$lib/components/button/Button.svelte";
  import Link from "$lib/components/link/Link.svelte";
  import LinkButton from "$lib/components/link/LinkButton.svelte";
  import TooltipCopy from "$lib/components/TooltipCopy.svelte";

  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Dungeon driven Minecraft MMORPG</title>
</svelte:head>

<div class="w-full flex flex-col items-center">
  <!-- Section 1 -->
  <div class="container py-16">
    <div class="flex flex-col lg:flex-row">
      <div class="my-auto mx-4">
        <Saos
          once={true}
          animation={"from-left 1.2s cubic-bezier(0, 0.7, 0.4, 1) both"}
        >
          <h1 class="text-violet-400 text-4xl font-semibold pb-4">
            {$_("home.hero.h1")}<br />{$_("home.hero.h2")}
          </h1>
          <div class="flex flex-col gap-2 xl:flex-row">
            <TooltipCopy />

            <LinkButton
              href="https://discord.gg/WGfKxGSJmn"
              target="_blank"
              customClass="w-full"
            >
              {$_("home.hero.b2")}</LinkButton
            >
          </div>
        </Saos>
      </div>
      <div class="mx-auto order-first lg:order-1">
        <Saos
          once={true}
          animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}
        >
          <img src="/img/logo.webp" alt="logo" class="section-1-logo" />
        </Saos>
      </div>
    </div>
  </div>
  <section class="container py-4">
    <Saos animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}>
      <iframe
        class="mx-auto w-full xl:w-1/2 lg:w-3/4 h-96"
        src="https://www.youtube.com/embed/-dMbjAkhrBw"
        title="Trailer Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Saos>
  </section>
  <!-- Section 2 -->
  <section
    class="container mx-auto px-6 py-16 flex flex-col lg:flex-row lg:gap-8"
  >
    <div class="flex flex-col">
      <Saos animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full lg:w-2/3">
            <img
              class="rounded-lg"
              src="/img/home/twoh.webp"
              alt="use the force"
            />
          </div>
          <div
            class="w-full lg:w-1/3 pr-10 pt-4 lg:pt-0 order-1 lg:order-first"
          >
            <h4 class="text-3xl text-base-800 font-bold mb-3">
              {$_("home.h1")}
            </h4>
            <p class="text-base-600 mb-8">
              {$_("home.p1")}
            </p>
          </div>
        </div>
      </Saos>
      <Saos animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full lg:w-2/3">
            <img
              class="rounded-lg"
              src="/img/home/dungeon_gate.webp"
              alt="use the force"
            />
          </div>
          <div class="w-full lg:w-1/3 pl-10 pt-4 lg:pt-0">
            <h4 class="text-3xl text-base-800 font-bold mb-3">
              {$_("home.h2")}
            </h4>
            <p class="text-base-600 mb-8">
              {$_("home.p2")}
            </p>
          </div>
        </div>
      </Saos>
      <Saos animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}>
        <div class="flex items-center flex-wrap mb-20">
          <div class="w-full lg:w-2/3">
            <img
              class="rounded-lg"
              src="/img/home/campfire.webp"
              alt="use the force"
            />
          </div>
          <div
            class="w-full lg:w-1/3 pr-10 pt-4 lg:pt-0 order-1 lg:order-first"
          >
            <h4 class="text-3xl text-base-800 font-bold mb-3">
              {$_("home.h3")}
            </h4>
            <p class="text-base-600 mb-8">
              {$_("home.p3.text")}<Link
                href="/guide"
                customClass="font-bold text-primary-400"
                >{$_("home.p3.link")}</Link
              >
            </p>
          </div>
        </div>
      </Saos>
    </div>
    <Saos animation={"fade-in 1.6s cubic-bezier(0.5, 0.25, 0.8, 0.7) both"}>
      <iframe
        src="https://discord.com/widget?id=452631187010093066&theme=dark"
        width="350"
        height="500"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="discord-iframe"
        class="mx-auto"
      />
    </Saos>
  </section>
</div>

<style>
  .section-1-logo {
    width: auto;
    height: 420px;
    display: block;
    margin: 0 auto;
  }

  /* ----------------------------------------------
 * Animations below by Animista on 2020-7-11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes -global-rotate-in-center {
    0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-fwd-tr {
    0% {
      transform: translateZ(-1200px) translateY(-700px) translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
  @keyframes -global-roll-in-left {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes -global-roll-in-blurred-left {
    0% {
      transform: translateX(-1000px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes -global-tilt-in-fwd-tr {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes -global-swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes -global-puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* EXITS */
  @keyframes -global-scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes -global-rotate-out-center {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 0;
    }
  }
  @keyframes -global-rotate-out-2-cw {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes -global-swirl-out-bck {
    0% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
  }
  @keyframes -global-flip-out-hor-top {
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    100% {
      transform: rotateX(70deg);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
</style>
