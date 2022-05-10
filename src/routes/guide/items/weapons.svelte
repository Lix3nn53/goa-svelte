<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Table from "$lib/components/table/Table.svelte";

  const tableData = [
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.sword.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.sword.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.sword.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.sword.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.sword.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.sword.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.dagger.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.dagger.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.dagger.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.dagger.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.dagger.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.dagger.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.battle_axe.h"),
      [$_("item.guide.weapon.damage")]: $_(
        "item.guide.weapon.battle_axe.damage"
      ),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.battle_axe.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.battle_axe.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.battle_axe.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.battle_axe.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.war_hammer.h"),
      [$_("item.guide.weapon.damage")]: $_(
        "item.guide.weapon.war_hammer.damage"
      ),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.war_hammer.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.war_hammer.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.war_hammer.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.war_hammer.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.great_sword.h"),
      [$_("item.guide.weapon.damage")]: $_(
        "item.guide.weapon.great_sword.damage"
      ),
      [$_("item.guide.weapon.speed")]: $_(
        "item.guide.weapon.great_sword.speed"
      ),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.great_sword.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_(
        "item.guide.weapon.great_sword.range"
      ),
      [$_("item.guide.weapon.bonus")]: $_(
        "item.guide.weapon.great_sword.bonus"
      ),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.spear.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.spear.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.spear.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.spear.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.spear.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.spear.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.bow.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.bow.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.bow.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.bow.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.bow.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.bow.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.crossbow.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.crossbow.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.crossbow.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.crossbow.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.crossbow.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.crossbow.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.wand.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.wand.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.wand.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.wand.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.wand.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.wand.bonus"),
    },
    {
      [$_("item.guide.weapon.type")]: $_("item.guide.weapon.staff.h"),
      [$_("item.guide.weapon.damage")]: $_("item.guide.weapon.staff.damage"),
      [$_("item.guide.weapon.speed")]: $_("item.guide.weapon.staff.speed"),
      [$_("item.guide.weapon.crit_chance")]: $_(
        "item.guide.weapon.staff.crit_chance"
      ),
      [$_("item.guide.weapon.range")]: $_("item.guide.weapon.staff.range"),
      [$_("item.guide.weapon.bonus")]: $_("item.guide.weapon.staff.bonus"),
    },
  ];
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("item.weapons")}</h2>
<p>{$_("item.guide.weapon.p0")}</p>
<h2 class="text-xl font-semibold pb-4 pt-8">{$_("item.guide.weapon.h1")}</h2>
<Table {tableData} />
