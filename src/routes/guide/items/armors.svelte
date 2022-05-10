<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Table from "$lib/components/table/Table.svelte";

  const tableData = [
    {
      [$_("item.guide.armor.type")]: $_("item.guide.armor.heavy.h"),
      [$_("item.guide.armor.health")]: $_("item.guide.armor.heavy.health"),
      [$_("item.guide.armor.defense")]: $_("item.guide.armor.heavy.defense"),
      [$_("item.guide.armor.material")]: $_("item.guide.armor.heavy.material"),
      [$_("item.guide.armor.weight")]: $_("item.guide.armor.heavy.weight"),
      [$_("item.guide.armor.set_effect")]: $_(
        "item.guide.armor.heavy.set_effect"
      ),
    },
    {
      [$_("item.guide.armor.type")]: $_("item.guide.armor.plate.h"),
      [$_("item.guide.armor.health")]: $_("item.guide.armor.plate.health"),
      [$_("item.guide.armor.defense")]: $_("item.guide.armor.plate.defense"),
      [$_("item.guide.armor.material")]: $_("item.guide.armor.plate.material"),
      [$_("item.guide.armor.weight")]: $_("item.guide.armor.plate.weight"),
      [$_("item.guide.armor.set_effect")]: $_(
        "item.guide.armor.plate.set_effect"
      ),
    },
    {
      [$_("item.guide.armor.type")]: $_("item.guide.armor.light.h"),
      [$_("item.guide.armor.health")]: $_("item.guide.armor.light.health"),
      [$_("item.guide.armor.defense")]: $_("item.guide.armor.light.defense"),
      [$_("item.guide.armor.material")]: $_("item.guide.armor.light.material"),
      [$_("item.guide.armor.weight")]: $_("item.guide.armor.light.weight"),
      [$_("item.guide.armor.set_effect")]: $_(
        "item.guide.armor.light.set_effect"
      ),
    },
    {
      [$_("item.guide.armor.type")]: $_("item.guide.armor.feather.h"),
      [$_("item.guide.armor.health")]: $_("item.guide.armor.feather.health"),
      [$_("item.guide.armor.defense")]: $_("item.guide.armor.feather.defense"),
      [$_("item.guide.armor.material")]: $_(
        "item.guide.armor.feather.material"
      ),
      [$_("item.guide.armor.weight")]: $_("item.guide.armor.feather.weight"),
      [$_("item.guide.armor.set_effect")]: $_(
        "item.guide.armor.feather.set_effect"
      ),
    },
    {
      [$_("item.guide.armor.type")]: $_("item.guide.armor.cloth.h"),
      [$_("item.guide.armor.health")]: $_("item.guide.armor.cloth.health"),
      [$_("item.guide.armor.defense")]: $_("item.guide.armor.cloth.defense"),
      [$_("item.guide.armor.material")]: $_("item.guide.armor.cloth.material"),
      [$_("item.guide.armor.weight")]: $_("item.guide.armor.cloth.weight"),
      [$_("item.guide.armor.set_effect")]: $_(
        "item.guide.armor.cloth.set_effect"
      ),
    },
  ];
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.armors")}</h2>
<p>{$_("item.guide.armor.p0")}</p>
<h2 class="text-xl font-semibold pb-4 pt-8">{$_("item.guide.armor.h1")}</h2>
<Table {tableData} />
