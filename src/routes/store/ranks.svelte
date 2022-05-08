<script context="module" lang="ts">
  import CardStoreRank from "$lib/components/card/CardStoreRank.svelte";
  import CardStoreRankLine from "$lib/components/card/CardStoreRankLine.svelte";
  import ButtonBlock from "$lib/components/button/ButtonBlock.svelte";
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";

  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Store - Ranks</title>
</svelte:head>

<div class="flex flex-row gap-8">
  <CardStoreRank price={4} name="HERO">
    <CardStoreRankLine>
      <div class="flex">
        Chat Tag: <img src="/img/store/rank_hero.png" alt="hero" class="ml-2" />
      </div>
    </CardStoreRankLine>
    <CardStoreRankLine>Character Slots: +2</CardStoreRankLine>
    <CardStoreRankLine yes={false}>Beta Access</CardStoreRankLine>
    <CardStoreRankLine yes={false}>Daily Crates</CardStoreRankLine>
    <ButtonBlock type="button" customClass="w-full" slot="button"
      >Buy Now <i class="fas fa-shopping-cart" /></ButtonBlock
    >
  </CardStoreRank>
  <CardStoreRank price={9} name="LEGEND">
    <CardStoreRankLine>
      <div class="flex">
        Chat Tag: <img src="/img/store/rank_hero.png" alt="hero" class="ml-2" />
      </div>
    </CardStoreRankLine>
    <CardStoreRankLine>Character Slots: +4</CardStoreRankLine>
    <CardStoreRankLine>Beta Access</CardStoreRankLine>
    <CardStoreRankLine yes={false}>Daily Crates</CardStoreRankLine>
    <ButtonBlock type="button" customClass="w-full" slot="button"
      >Buy Now <i class="fas fa-shopping-cart" /></ButtonBlock
    >
  </CardStoreRank>
  <CardStoreRank price={15} name="TITAN">
    <CardStoreRankLine>
      <div class="flex">
        Chat Tag: <img src="/img/store/rank_hero.png" alt="hero" class="ml-2" />
      </div>
    </CardStoreRankLine>
    <CardStoreRankLine>Character Slots: +6</CardStoreRankLine>
    <CardStoreRankLine>Beta Access</CardStoreRankLine>
    <CardStoreRankLine>Daily Crates</CardStoreRankLine>
    <ButtonBlock type="button" customClass="w-full" slot="button"
      >Buy Now <i class="fas fa-shopping-cart" /></ButtonBlock
    >
  </CardStoreRank>
</div>
