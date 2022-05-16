<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
  import SkillTreePoint from "$lib/components/SkillTreePoint.svelte";
  import SkillTreeArrow from "$lib/components/SkillTreeArrow.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("classes.mage.name")}</h2>
<p class="pb-4">
  {$_("classes.mage.p0")}
</p>
<ol class="list-disc pb-4">
  <li>
    {$_("classes.mage.p1")}
  </li>
  <li>
    {$_("classes.mage.p2")}
  </li>
  <li>
    {$_("classes.mage.p3")}
  </li>
  <li>
    {$_("classes.mage.p4")}
  </li>
</ol>
<CardGuideClass
  src="/img/guide/classes/fire_mage/icon.png"
  weapons={["Wand", "Staff", "Dagger", "WarHammer"]}
  armors={["Cloth", "Feather", "Light"]}
  health={4}
  mana={7}
  damage={9}
  defense={4}
  crit_chance={2}
  crit_damage={4}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable startY={400}>
  <SkillTreePoint
    src="/img/guide/skills/27.png"
    top={640}
    left={40}
    name="Fireball"
    type="Normal"
    description="Shoot a fireball that deals damage to enemies in area if it hits a target."
  />
  <SkillTreeArrow top={655} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/48.png"
    top={800}
    left={40}
    name="Frostball"
    type="Normal"
    description="Shoot a frostball that deals damage and slows enemies in area if it hits a target."
  />
  <SkillTreeArrow top={815} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/28.png"
    top={640}
    left={180}
    name="Dragon Breath"
    type="Normal"
    description="Deal damage to enemies in front of you, cone area."
  />
  <SkillTreeArrow top={655} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/50.png"
    top={800}
    left={180}
    name="Ice Meteor"
    type="Normal"
    description="Summon a small ice meteor from the sky that deals damage and slows enemies in area."
  />
  <SkillTreeArrow top={815} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/62.png"
    top={640}
    left={320}
    name="Blasting Warp"
    type="Normal"
    description="Warp forward in location you are facing. After a small delay cause a explosion in your old location, dealing damage to enemies."
  />
  <SkillTreeArrow top={655} left={410} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/65.png"
    top={520}
    left={320}
    name="Unlock Warhammer"
    type="Passive"
    description="Unlock wielding war-hammers."
  />
  <SkillTreeArrow top={535} left={410} direction="left" />
  <SkillTreePoint
    src="/img/guide/skills/7.png"
    top={520}
    left={460}
    name="Mecha Armor"
    type="Passive"
    description="After using a skill, gain barrier. A barrier absorbs a damage completely."
  />
  <SkillTreeArrow top={535} left={550} direction="right" />
  <SkillTreeArrow top={480} left={485} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/19.png"
    top={400}
    left={460}
    name="Bomb"
    type="Normal"
    description="Launch a bomb that deals damage and pushes enemies. Bonus effect: it also pushes you but you don't take damage."
  />
  <SkillTreeArrow top={415} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/62.png"
    top={400}
    left={600}
    name="Missile"
    type="Normal"
    description="Launch a missile that follows the target. Deals area damage and stuns the enemies o hit."
  />
  <SkillTreePoint
    src="/img/guide/skills/18.png"
    top={520}
    left={600}
    name="Turret"
    type="Ultimate"
    description="Summon a turret that fires arrows. Turret changes it's head rotation to nearest target."
  />
  <SkillTreeArrow top={535} left={690} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/22.png"
    top={520}
    left={740}
    name="Oil"
    type="Ultimate"
    description="Throw oil in to the ground. Enemies in the oil are slowed and silenced."
  />
  <SkillTreePoint
    src="/img/guide/skills/24.png"
    top={800}
    left={320}
    name="Frozen Meditation"
    type="Normal"
    description="Freeze yourself and become invincible. Restore health overtime."
  />
  <SkillTreeArrow top={815} left={410} direction="right" />
  <SkillTreeArrow top={880} left={345} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/42.png"
    top={930}
    left={320}
    name="Summon"
    type="Normal"
    description="Summon skeletons. Skeletons lose %10 of their health per 5 seconds."
  />
  <SkillTreeArrow top={1010} left={345} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/39.png"
    top={1060}
    left={320}
    name="Skullshot"
    type="Normal"
    description="Shoot a skull that deals damage and slows enemies in area if it hits a target. And your summons changes their focus to the target and gains bonus movement speed."
  />
  <SkillTreeArrow top={1075} left={275} direction="left" />
  <SkillTreeArrow top={1075} left={410} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/47.png"
    top={1060}
    left={180}
    name="Bone Armor"
    type="Passive"
    description="Gain bonus element defense for each summon."
  />
  <SkillTreePoint
    src="/img/guide/skills/38.png"
    top={1060}
    left={460}
    name="Life Drain"
    type="Normal"
    description="Deal damage to all of your summons, heal yourself for each damaged summon."
  />
  <SkillTreeArrow top={1075} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/45.png"
    top={1060}
    left={600}
    name="Frozen Golem"
    type="Ultimate"
    description="First cast: Summon Frozen Colossuses which cast Freeze on summon. Second cast: If at least one Frozen Colossus is active, make them cast Freeze. Freeze: Stuns nearby enemies"
  />
  <SkillTreePoint
    src="/img/guide/skills/51.png"
    top={800}
    left={460}
    name="Ice Spirit"
    type="Passive"
    description="Every time you cast a spell gain a stack. If you have 4 stacks your next skill that deals damage to targets will also freeze them."
  />
  <SkillTreeArrow top={815} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/31.png"
    top={640}
    left={460}
    name="Fire Spirit"
    type="Passive"
    description="Every time you cast a spell gain a stack. If you have 4 stacks your next skill that deals damage to targets will also burn them."
  />
  <SkillTreeArrow top={655} left={550} direction="right" />
  <SkillTreeArrow top={600} left={485} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/49.png"
    top={800}
    left={600}
    name="Blizzard"
    type="Ultimate"
    description="Summon a blizzard that deals damage to nearby enemies and slows them every second."
  />
  <SkillTreePoint
    src="/img/guide/skills/30.png"
    top={640}
    left={600}
    name="Chaos Meteor"
    type="Ultimate"
    description="Summon a meteor from sky that damages and launches enemies upwards."
  />
</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/795582339786473472/unknown.png",
      alt: "A Frozen Enemy",
    },
    {
      src: "https://media.giphy.com/media/bMZwOUeocIxMXZ934o/giphy.gif",
      alt: "Turret",
    },
    {
      src: "https://media.giphy.com/media/VpgG19d7GYvXNSLhEd/giphy.gif",
      alt: "Bomb",
    },
    {
      src: "https://media.giphy.com/media/Ap3Lfh2nJZ2l2ywuay/giphy.gif",
      alt: "Missile",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/795268511130714152/unknown.png",
      alt: "Skeleton Army",
    },
  ]}
/>
