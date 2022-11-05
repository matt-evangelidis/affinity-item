import { AmmoType, FiringMode, Range, SingleShotAttachment } from './types';
export const itemOptions: Affinity = {
  ammoTypes: [
    {
      name: 'AP Rounds',
      effect:
        'Attacks made with this weapon add your Dexterity modifier to the damage roll.',
    },
    {
      name: 'Smart Rounds',
      effect:
        'You have a +1 bonus to attack and damage rolls made with this weapon.',
    },
    {
      name: 'FEJ Rounds',
      effect:
        'Attacks with this weapon deal an additional 1d6 cold, fire, lightning, necrotic, or radiant damage on a hit (your choice when you hit).',
    },
  ],
  ranges: [
    {
      name: 'Short',
      damage: '2d10 piercing',
      properties:
        'Ammunition (range 30/120), heavy, reload (10), scatter (2d12), two-handed',
    },
    {
      name: 'Medium',
      damage: '2d8 piercing',
      properties: 'Ammunition (range 80/320), reload (20), two-handed',
    },
    {
      name: 'Long',
      damage: '3d6 piercing',
      properties:
        'Ammunition (range 150/560), heavy, reload (4), sighted, two-handed',
    },
  ],
  firingModes: [
    {
      name: 'Automatic',
      effect:
        'Adds the Automatic property. Once on each of your turns when you make an attack with this weapon, you can make another attack with it against a different creature that is within 5 feet of the original target and within range of the weapon.',
    },
    {
      name: 'Burst',
      effect:
        'When you take the Attack action to make an attack with this firearm, you can use your bonus action to make a single additional attack with it.',
    },
    {
      name: 'Semi-Auto',
      effect:
        'This weapon deals two additional dice of damage on a critical hit.',
    },
  ],
  singleShotAttachments: [
    {
      name: 'Grenade Launcher',
      effect:
        'As an action, you launch a grenade at a point within 120 feet. Each creature in a 20-foot-radius sphere centred on that point must make a DC 15 Dexterity saving throw, taking 4d6 fire damage and 4d6 piercing damage on a failed save, or half as much damage on a successful one.',
    },
    {
      name: 'Shredder',
      effect:
        'As an action, you loose a blast of shrapnel in a 30-foot cone. Each creature in the cone must make a DC 15 Dexterity saving throw, taking 8d8 piercing damage on a failed save, or half as much damage on a successful one.',
    },
    {
      name: 'Railgun',
      effect:
        'As an action, you shoot a magnetically accelerated slug at terrifying speed. Each creature in a line 100 feet long and 5 feet wide originating from you must make a DC 15 Dexterity saving throw, taking 8d6 piercing damage on a failed save, or half as much damage on a successful one.',
    },
  ],
};

export const defaultItemOptions: StoredConfig = {
  ammoType: itemOptions.ammoTypes[0],
  range: itemOptions.ranges[1],
  firingMode: itemOptions.firingModes[2],
  singleShotAttachment: itemOptions.singleShotAttachments[0],
};

export enum ITEM_FIELD_KEYS {
  AMMO_TYPE = 'ammoType',
  RANGE = 'range',
  FIRING_MODE = 'firingMode',
  SINGLE_SHOT_ATTACHMENT = 'singleShotAttachment',
}

export const itemFieldsArray: string[] = [
  ITEM_FIELD_KEYS.AMMO_TYPE,
  ITEM_FIELD_KEYS.RANGE,
  ITEM_FIELD_KEYS.FIRING_MODE,
  ITEM_FIELD_KEYS.SINGLE_SHOT_ATTACHMENT,
];

interface Affinity {
  ammoTypes: Array<ItemAmmoType>;
  ranges: Array<ItemRange>;
  firingModes: Array<ItemFiringMode>;
  singleShotAttachments: Array<ItemSingleShotAttachment>;
}

export type ItemField =
  | ItemAmmoType
  | ItemRange
  | ItemFiringMode
  | ItemSingleShotAttachment;

export interface StoredConfig {
  ammoType: ItemAmmoType;
  range: ItemRange;
  firingMode: ItemFiringMode;
  singleShotAttachment: ItemSingleShotAttachment;
}

export interface ItemAmmoType {
  name: AmmoType;
  effect: string;
}

export interface ItemRange {
  name: Range;
  damage: string;
  properties: string;
}

export interface ItemFiringMode {
  name: FiringMode;
  effect: string;
}

export interface ItemSingleShotAttachment {
  name: SingleShotAttachment;
  effect: string;
}
