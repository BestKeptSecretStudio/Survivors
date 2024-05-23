import { Item } from "./items";
import { Trait } from "./traits";
import { Range } from "./utilities";

type Gender = "male" | "female";
type Attribute =
	| "strength"
	| "agility"
	| "endurance"
	| "intelligence"
	| "perception"
	| "instinct"
	| "charisma";
type Equipment = "weapon" | "upper" | "lower" | "footwear" | "gloves" | "belt";

type Survivor = {
	name: {
		first: string;
		last: string;
	};
	age: Range<16, 84>;
	gender: Gender;
	stats: {
		// * 1 to 20 inclusive
		[Key in Attribute]: Range<1, 20>;
	};
	skills: {
		// TODO
	};
	traits: Trait[];
	equipment: { [Key in Equipment]: Item | null } & { carried: Item[] };
};

export const Survivors: Survivor[] = [
	{
		name: {
			first: "John",
			last: "Lark",
		},
		age: 38,
		gender: "male",
		stats: {
			strength: 8,
			agility: 8,
			endurance: 8,
			intelligence: 8,
			perception: 8,
			instinct: 8,
			charisma: 8,
		},
		skills: {},
		traits: [],
		equipment: {
			weapon: null,
			upper: null,
			lower: null,
			footwear: null,
			gloves: null,
			belt: null,
			carried: [],
		},
	},
];
