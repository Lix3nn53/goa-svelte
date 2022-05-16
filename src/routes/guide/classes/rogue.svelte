<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
  import SkillTreePoint from "$lib/components/SkillTreePoint.svelte";
  import SkillTreeArrow from "$lib/components/SkillTreeArrow.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("classes.rogue.name")}</h2>
<p class="pb-4">
  {$_("classes.rogue.p0")}
</p>
<ol class="list-disc pb-4">
  <li>
    {$_("classes.rogue.p1")}
  </li>
  <li>
    {$_("classes.rogue.p2")}
  </li>
  <li>
    {$_("classes.rogue.p3")}
  </li>
  <li>
    {$_("classes.rogue.p4")}
  </li>
</ol>
<CardGuideClass
  src="/img/guide/classes/ranger/icon.png"
  weapons={["Bow", "Crossbow", "Dagger"]}
  armors={["Light", "Feather", "Cloth"]}
  health={4}
  mana={4}
  damage={6}
  defense={4}
  crit_chance={7}
  crit_damage={5}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable startY={400}>
  <SkillTreePoint
    src="/img/guide/skills/60.png"
    top={640}
    left={40}
    name="Bite"
    type="Normal"
    description="Leap forward and bite an enemy near your landing. Consumes soul stacks to increase leap range. Gain 2 souls on successful hit."
  />
  <SkillTreeArrow top={655} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/13.png"
    top={800}
    left={40}
    name="Poison Arrow"
    type="Normal"
    description="Shoot an arrow that poisons the target."
  />
  <SkillTreeArrow top={815} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/55.png"
    top={640}
    left={180}
    name="Soul Spike"
    type="Normal"
    description="Shoot a projectile that damages and roots target on hit. Consumes souls to increase amount of projectiles. Gain 2 soul stacks per hit."
  />
  <SkillTreeArrow top={655} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/44.png"
    top={800}
    left={180}
    name="Backflip"
    type="Normal"
    description="Jump backwards into the sky and gain resistance to fall damage."
  />
  <SkillTreeArrow top={815} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/45.png"
    top={640}
    left={320}
    name="Bat Form"
    type="Normal"
    description="Transform into a flying bat. Effect is canceled if you cast spell or attack an enemy. Consumes souls to increase effect duration."
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
    src="/img/guide/skills/24.png"
    top={520}
    left={460}
    name="Guardian Angel"
    type="Passive"
    description="After using a skill, gain barrier. A barrier absorbs a damage completely."
  />
  <SkillTreeArrow top={535} left={550} direction="right" />
  <SkillTreeArrow top={480} left={485} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/15.png"
    top={800}
    left={320}
    name="Volley"
    type="Normal"
    description="Fire multiple arrows in a cone"
  />
  <SkillTreeArrow top={815} left={410} direction="right" />
  <SkillTreeArrow top={880} left={345} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/18.png"
    top={930}
    left={320}
    name="Explosıve Arrow"
    type="Normal"
    description="Shoot an arrow that deals area damage and pushes targets away on hit."
  />
  <SkillTreeArrow top={945} left={275} direction="left" />
  <SkillTreeArrow top={945} left={410} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/46.png"
    top={930}
    left={180}
    name="Hookshot"
    type="Active"
    description="Fire a grapple particle projectile. If it collides with terrain dash towards it, if it hits a target pull the target."
  />
  <SkillTreePoint
    src="/img/guide/skills/14.png"
    top={930}
    left={460}
    name="Piercing Arrow"
    type="Passive"
    description="Your arrows pierces through targets. Level up this skill to increase piercing amount."
  />
  <SkillTreeArrow top={945} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/35.png"
    top={930}
    left={600}
    name="Bear Trap"
    type="Ultimate"
    description="Place a trap that triggers when an enemy steps on it. Stuns the target when triggered. You can place multiple traps at a time."
  />
  <SkillTreePoint
    src="/img/guide/skills/17.png"
    top={800}
    left={460}
    name="Sharpshooter"
    type="Passive"
    description="Your every 2nd successful normal attack gives you bonus critical chance. (This can exceed the critical chance cap)"
  />
  <SkillTreeArrow top={815} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/38.png"
    top={640}
    left={460}
    name="Soul Collector"
    type="Passive"
    description="Gain soul stack on normal attack to enemies. Some skills consumes souls for bonus effects. Level up this skill to increase soul capacity."
  />
  <SkillTreeArrow top={655} left={550} direction="right" />
  <SkillTreeArrow top={600} left={485} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/16.png"
    top={800}
    left={600}
    name="Make It Rain"
    type="Ultimate"
    description="Reveal an area with a flurry of arrows, dealing waves of damage to opponents."
  />
  <SkillTreePoint
    src="/img/guide/skills/58.png"
    top={640}
    left={600}
    name="Assassin's execution"
    type="Ultimate"
    description="Stun yourself and a single enemy. After the stun, deal damage to enemy. Consumes souls to increase damage."
  />
</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839433556718911528/unknown.png",
      alt: "Bear Trap",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/901783690995171328/unknown.png",
      alt: "Bat Form",
    },
    {
      src: "https://media.giphy.com/media/vVnIh1ZhwHmrasKKlE/giphy.gif",
      alt: "Assassin's Execution",
    },
  ]}
/>
