export const guideRoutes = [
  {
    name: "guide.introduction.subject",
    route: "/guide",
  },
  {
    name: "guide.how-to-play.subject",
    route: "/guide/how-to-play",
  },
  {
    name: "classes.subject",
    route: "/guide/classes",
    childRoutes: [
      {
        name: "Warrior",
        route: "/guide/classes/warrior",
      },
      {
        name: "Mage",
        route: "/guide/classes/mage",
      },
      {
        name: "Priest",
        route: "/guide/classes/priest",
      },
      {
        name: "Rogue",
        route: "/guide/classes/rogue",
      },
    ],
    collapseTree: true,
  },
  {
    name: "skill.subject",
    route: "/guide/skills",
    childRoutes: [
      {
        name: "Skill Tree",
        route: "/guide/skills/skill-tree",
      },
      {
        name: "Skill Bar",
        route: "/guide/skills/skill-bar",
      },
    ],
    collapseTree: true,
  },
  {
    name: "attribute.subject",
    route: "/guide/attributes",
  },
  {
    name: "item.subject",
    route: "/guide/items",
    childRoutes: [
      {
        name: "Weapons",
        route: "/guide/items/weapons",
      },
      {
        name: "Armors",
        route: "/guide/items/armors",
      },
      {
        name: "Accessories",
        route: "/guide/items/accessories",
      },
      {
        name: "Enchanting",
        route: "/guide/items/enchanting",
      },
    ],
    collapseTree: true,
  },
  {
    name: "quest.subject",
    route: "/guide/quests",
  },
  {
    name: "npc.subject",
    route: "/guide/npcs",
    childRoutes: [
      {
        name: "Merchants",
        route: "/guide/npcs/merchants",
      },
    ],
    collapseTree: true,
  },
  {
    name: "monster.subject",
    route: "/guide/monsters",
  },
  {
    name: "dungeon.subject",
    route: "/guide/dungeons",
  },
  {
    name: "crafting.subject",
    route: "/guide/crafting",
    childRoutes: [
      {
        name: "Crafting Types",
        route: "/guide/crafting/crafting-types",
      },
      {
        name: "Gathering",
        route: "/guide/crafting/gathering",
      },
    ],
    collapseTree: true,
  },
  {
    name: "economy.subject",
    route: "/guide/economy",
  },
  {
    name: "pet.subject",
    route: "/guide/pets",
  },
  {
    name: "social.subject",
    route: "/guide/social",
  },
  {
    name: "revive.subject",
    route: "/guide/revive",
  },
];

const routes = [...guideRoutes];

export default routes;
