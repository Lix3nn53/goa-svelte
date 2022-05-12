<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
  import SkillTreePoint from "$lib/components/SkillTreePoint.svelte";
  import SkillTreeArrow from "$lib/components/SkillTreeArrow.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">Paladin</h2>
<p class="pb-4">
  {$_("classes.tier1.paladin.playstyle")}
</p>
<CardGuideClass
  src="/img/guide/classes/paladin/icon.png"
  weapons={["Wand", "Staff", "Sword", "GreatSword", "WarHammer"]}
  armors={["Heavy", "Plate", "Light", "Cloth", "Shield"]}
  health={7}
  mana={4}
  damage={5}
  defense={7}
  crit_chance={2}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable startY={400}>
  <SkillTreePoint
    src="/img/guide/skills/4.png"
    top={640}
    left={40}
    name="Swing"
    type="Normal"
    description="Deal damage to targets in front of you and push them away."
  />
  <SkillTreeArrow top={655} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/37.png"
    top={800}
    left={40}
    name="Poison Potion"
    type="Normal"
    description="Throw a potion that explodes on impact and create a cloud. The cloud deals damage to enemies every second."
  />
  <SkillTreeArrow top={815} left={130} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/57.png"
    top={640}
    left={180}
    name="Charge"
    type="Normal"
    description="Give bonus movement speed to yourself and nearby allies."
  />
  <SkillTreeArrow top={655} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/33.png"
    top={800}
    left={180}
    name="Heal Potion"
    type="Normal"
    description="Throw a potion that explodes on impact. The explosion heals and gives life steal to allies."
  />
  <SkillTreeArrow top={815} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/25.png"
    top={640}
    left={320}
    name="Absorption"
    type="Normal"
    description="Summon a projecticle from sky. When projectile lands give barrier to allies in area. A barrier absorbs a damage completely."
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
    src="/img/guide/skills/41.png"
    top={800}
    left={320}
    name="Buff Potion"
    type="Normal"
    description="Throw a potion that explodes on impact. The explosion gives defense buff to allies and defense debuff to enemies."
  />
  <SkillTreeArrow top={815} left={410} direction="right" />
  <SkillTreeArrow top={880} left={345} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/22.png"
    top={930}
    left={320}
    name="Totem"
    type="Ultimate"
    description="Summon a totem."
  />
  <SkillTreeArrow top={945} left={275} direction="left" />
  <SkillTreeArrow top={945} left={410} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/45.png"
    top={930}
    left={180}
    name="Polymorph"
    type="Active"
    description="Transform enemies nearby your totem to sheeps."
  />
  <SkillTreePoint
    src="/img/guide/skills/56.png"
    top={930}
    left={460}
    name="Thunderstorm"
    type="Normal"
    description="Create a storm around your totem that deals damage to nearby enemies every 2 seconds."
  />
  <SkillTreeArrow top={945} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/54.png"
    top={930}
    left={600}
    name="Surf"
    type="Ultimate"
    description="Push your totem if it is nearby. After a small delay push yourself and enemies around you to your totem."
  />
  <SkillTreePoint
    src="/img/guide/skills/52.png"
    top={800}
    left={460}
    name="Drink Potion"
    type="Passive"
    description="Every time you cast a spell gain a stack. If you have 4 stacks next time you cast a skill, drink a potion to gain bonus movement speed."
  />
  <SkillTreeArrow top={815} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/66.png"
    top={640}
    left={460}
    name="Unlock Shield"
    type="Passive"
    description="Unlock wielding shields."
  />
  <SkillTreeArrow top={655} left={550} direction="right" />
  <SkillTreeArrow top={600} left={485} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/62.png"
    top={800}
    left={600}
    name="Explosive Potion"
    type="Ultimate"
    description="Throw a potion that explodes on impact. The explosion deals damage, ignites and pushes enemies away."
  />
  <SkillTreePoint
    src="/img/guide/skills/10.png"
    top={640}
    left={600}
    name="Victory Flag"
    type="Ultimate"
    description="Summon a victory flag. Victory flag gives damage buff to nearby allies."
  />
</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/794042194674712586/unknown.png",
      alt: "Totem",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839424808550531072/unknown.png",
      alt: "Polymorph",
    },
    {
      src: "https://media.giphy.com/media/0vjorN1Lxi1m3PkIU6/giphy.gif",
      alt: "Surf",
    },
  ]}
/>
