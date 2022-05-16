<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Table from "$lib/components/table/Table.svelte";

  const commonData = [
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set1.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set1.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set1.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set1.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set1.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set2.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set2.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set2.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set2.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set2.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set3.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set3.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set3.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set3.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set3.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set4.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set4.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set4.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set4.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set4.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set5.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set5.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set5.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set5.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set5.effect5"
      ),
    },
  ];

  const rareData = [
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set9.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set9.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set9.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set9.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set9.effect5"
      ),
    },
  ];

  const mythicData = [
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set6.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set6.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set6.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set6.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set6.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set7.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set7.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set7.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set7.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set7.effect5"
      ),
    },
  ];

  const legendaryData = [
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set8.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set8.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set8.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set8.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set8.effect5"
      ),
    },
    {
      [$_("item.guide.gearset.name")]: $_("item.guide.gearset.set10.name"),
      [`2 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set10.effect2"
      ),
      [`3 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set10.effect3"
      ),
      [`4 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set10.effect4"
      ),
      [`5 ${$_("item.guide.gearset.piece")}`]: $_(
        "item.guide.gearset.set10.effect5"
      ),
    },
  ];
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.gearset")}</h2>
<p>{$_("item.guide.gearset.p0")}</p>
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.gearset.common")}
</h2>
<Table tableData={commonData} />
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.gearset.rare")}
</h2>
<Table tableData={rareData} />
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.gearset.mythic")}
</h2>
<Table tableData={mythicData} />
<h2 class="text-xl font-semibold pb-2 pt-8">
  {$_("item.guide.gearset.legendary")}
</h2>
<Table tableData={legendaryData} />
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/793447635016482816/unknown.png",
      alt: "Example gearset",
    },
  ]}
/>
