<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import CardGuideClass from "$lib/components/card/CardGuideClass.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";
  import Dragable from "$lib/components/Dragable.svelte";
  import SkillTreePoint from "$lib/components/SkillTreePoint.svelte";
  import SkillTreeArrow from "$lib/components/SkillTreeArrow.svelte";
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("classes.warrior.name")}</h2>
<p class="pb-4">
  {$_("classes.warrior.p0")}
</p>
<ol class="list-disc pb-4">
  <li>
    {$_("classes.warrior.p1")}
  </li>
  <li>
    {$_("classes.warrior.p2")}
  </li>
  <li>
    {$_("classes.warrior.p3")}
  </li>
  <li>
    {$_("classes.warrior.p4")}
  </li>
</ol>
<CardGuideClass
  src="/img/guide/classes/fighter/icon.png"
  weapons={["Battleaxe", "GreatSword", "Sword", "WarHammer", "Spear"]}
  armors={["Heavy", "Plate", "Light", "Shield"]}
  health={8}
  mana={2}
  damage={7}
  defense={7}
  crit_chance={2}
  crit_damage={4}
/>
<h2 class="text-xl font-semibold pb-2 pt-8">Skill Tree</h2>
<Dragable startY={480}>
  <SkillTreePoint
    src="/img/guide/skills/12.png"
    top={720}
    left={40}
    name="Jab"
    type="Normal"
    description="Dash forward and deal damage to a single enemy."
  />
  <SkillTreeArrow top={690} left={130} direction="topright" />
  <SkillTreeArrow top={790} left={130} direction="bottomright" />
  <SkillTreePoint
    src="/img/guide/skills/36.png"
    top={640}
    left={180}
    name="Uppercut"
    type="Normal"
    description="Damage and knock up an enemy."
  />
  <SkillTreeArrow top={655} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/4.png"
    top={800}
    left={180}
    name="Slice And Dice"
    type="Normal"
    description="Deal damage to enemies in front of you, cone area."
  />
  <SkillTreeArrow top={815} left={270} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/46.png"
    top={640}
    left={320}
    name="Death's Grasp"
    type="Normal"
    description="Shoot a projectile that pulls the target to you. If target gets close enough to you, also knock up."
  />
  <SkillTreeArrow top={655} left={410} direction="right" />
  <SkillTreeArrow top={600} left={345} direction="top" />
  <SkillTreePoint
    src="/img/guide/skills/24.png"
    top={520}
    left={320}
    name="Serenity"
    type="Normal"
    description="Stun yourself and gain damage resistance. Restore health as you stay stuned."
  />
  <SkillTreeArrow top={535} left={410} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/65.png"
    top={520}
    left={460}
    name="Unlock Spears"
    type="Passive"
    description="Unlock wielding spears."
  />
  <SkillTreeArrow top={535} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/54.png"
    top={520}
    left={600}
    name="Aqua Prison"
    type="Ultimate"
    description="Imprison nearby enemies in water bubble. Enemies in bubble are stunned and goes up into the sky slowly."
  />
  <SkillTreePoint
    src="/img/guide/skills/8.png"
    top={800}
    left={320}
    name="Power Slash"
    type="Normal"
    description="Deal damage to targets in cube area."
  />
  <SkillTreeArrow top={815} left={410} direction="right" />
  <SkillTreeArrow top={880} left={345} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/32.png"
    top={930}
    left={320}
    name="Rage"
    type="Passive"
    description="If you take damage that leaves you with less than 15% health, unleash your rage and gain movement speed and jump boost."
  />
  <SkillTreePoint
    src="/img/guide/skills/29.png"
    top={800}
    left={460}
    name="Warmth"
    type="Passive"
    description="If your area of target skills hit 3 or more targets at a time heal yourself."
  />
  <SkillTreeArrow top={815} left={550} direction="right" />
  <SkillTreeArrow top={880} left={485} direction="bottom" />
  <SkillTreePoint
    src="/img/guide/skills/65.png"
    top={930}
    left={460}
    name="Unlock Battleaxe"
    type="Passive"
    description="Unlock wielding battle-axes."
  />
  <SkillTreePoint
    src="/img/guide/skills/31.png"
    top={640}
    left={460}
    name="Dragon's Charge"
    type="Normal"
    description="Cover yourself with flames and start charging forwards. Deal damage and push enemies got close to you."
  />
  <SkillTreeArrow top={655} left={550} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/23.png"
    top={800}
    left={600}
    name="Grand Skyfall"
    type="Ultimate"
    description="Launch youreself into the air. When you land deal massive damage to large area."
  />
  <SkillTreePoint
    src="/img/guide/skills/66.png"
    top={640}
    left={600}
    name="Unlock Shield"
    type="Passive"
    description="Unlock wielding shields."
  />
  <SkillTreeArrow top={655} left={690} direction="right" />
  <SkillTreePoint
    src="/img/guide/skills/40.png"
    top={640}
    left={740}
    name="Leap of Doom"
    type="Ultimate"
    description="Start floating and gain fall damage resistance. When you land to the ground, deal damage to nearby enemies and stun them."
  />
</Dragable>
<h2 class="text-xl font-semibold pb-2 pt-8">Gallery</h2>
<Gallery
  images={[
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/833656796135686164/unknown.png",
      alt: "Power Slash",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/832086714927153152/unknown.png",
      alt: "Dragon's Charge",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839421166622998558/unknown.png",
      alt: "Leap of Doom",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839450395067285534/unknown.png",
      alt: "Aqua Prison",
    },
  ]}
/>
