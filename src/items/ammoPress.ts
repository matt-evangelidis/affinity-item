export const ammoPressDescription =
	"A modern take on a traditional tool, the universal ammo press is equipped with an extremely flexible transmutation unit capable of transmuting most basic metals, regardless of purity or alloy, into usable materials for most imaginable forms of physical ammunition. You can spend 10 minutes to transmute 10 credits (10gp) worth of raw materials into various forms of ammunition (as detailed in the table below), or you can transmute up to 60 credits (60gp) worth of ammunition during a short or long rest.";
export const ammunition: Ammunition[] = [
	{
		name: "Blunderbuss shot (10)",
		cost: "1 gp",
		weight: "2 lb.",
	},
	{
		name: "Bullets (10)",
		cost: "2 gp",
		weight: "2 lb.",
	},
	{
		name: "Dragon Bullet",
		cost: "1 gp",
		weight: "—",
	},
	{
		name: "Harpoon",
		cost: "5 gp",
		weight: "4 lb.",
	},
	{
		name: "Musket balls (10)",
		cost: "1 gp",
		weight: "2 lb.",
	},
	{
		name: "Grenade",
		cost: "5 gp",
		weight: "3 lb.",
	},
	{
		name: "Rocket",
		cost: "20 gp",
		weight: "6 lb.",
	},
	{
		name: "Shell (10)",
		cost: "5 gp",
		weight: "2 lb.",
	},
];

interface Ammunition {
	name: string;
	cost: string;
	weight: string;
}
