<script lang="ts">
  import ButtonBelt from "$lib/components/button/ButtonBelt.svelte";

  export let customClass: string = "";

  let className = `flex flex-col lg:flex-row gap-4 bg-base-100 p-4 rounded-lg ${customClass}`;
</script>

<div class={className}>
  <div class="m-auto">
    <img src="/img/store/crate_cosmetic.png" alt="crate" class="w-1/2 m-auto" />
  </div>
  <div class="w-full">
    <h2 class="text-2xl font-bold">Cosmetic Crate</h2>
    <p class="py-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat
      condimentum lacus in maximus.
    </p>
    <div class="flex flex-col items-center">
      <div class="py-4 md:px-4 flex flex-wrap">
        <ButtonBelt customClass="w-1/2 lg:w-1/4 xl:w-1/4">
          <div class="px-7 py-4">
            <p class="text-3xl font-bold pb-2">20x</p>
            <p class="line-through italic text-sm">$60.00</p>
            <p class="italic text-sm">$30.00</p>
            <p class="text-xl font-bold pt-2 whitespace-nowrap">
              Buy Now<i class="fas fa-shopping-cart pl-2" />
            </p>
          </div>
        </ButtonBelt>
        <ButtonBelt customClass="w-1/2 lg:w-1/4 xl:w-1/4">
          <div class="px-7 py-4">
            <p class="text-3xl font-bold pb-2">10x</p>
            <p class="line-through italic text-sm">$30.00</p>
            <p class="italic text-sm">$20.00</p>
            <p class="text-xl font-bold pt-2 whitespace-nowrap">
              Buy Now<i class="fas fa-shopping-cart pl-2" />
            </p>
          </div>
        </ButtonBelt>
        <ButtonBelt customClass="w-1/2 lg:w-1/4 xl:w-1/4">
          <div class="px-7 py-4">
            <p class="text-3xl font-bold pb-2">5x</p>
            <p class="line-through italic text-sm">$15.00</p>
            <p class="italic text-sm">$12.00</p>
            <p class="text-xl font-bold pt-2 whitespace-nowrap">
              Buy Now<i class="fas fa-shopping-cart pl-2" />
            </p>
          </div>
        </ButtonBelt>
        <ButtonBelt customClass="w-1/2 lg:w-1/4 xl:w-1/4">
          <div class="px-7 py-4">
            <p class="text-3xl font-bold pb-2">1x</p>
            <p class="line-through italic text-sm">-</p>
            <p class="italic text-sm">$3.00</p>
            <p class="text-xl font-bold pt-2 whitespace-nowrap">
              Buy Now<i class="fas fa-shopping-cart pl-2" />
            </p>
          </div>
        </ButtonBelt>
      </div>
    </div>
  </div>
</div>
