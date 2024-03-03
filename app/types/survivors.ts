import { Item } from "./items";
import { Percentile } from "./utilities";

type Genders = "male" | "female" | "otherwise";

type Survivor = {
	name: {
		first: string;
		middle?: string;
		last: string;
	};
	age: number;
	gender:
		| Genders
		| {
				type: Genders;
				isTransgender?: boolean;
				hasTransitioned?: boolean;
		  };
	sexuality: {
		preferences: { [Key in Genders]?: Percentile }[];
		intensity: Percentile;
	};
	stats: {};
	personality: {};
	equipment: Item[];
};

export const Survivors: Survivor[] = [
	{
		name: {
			first: "John",
			last: "Lark",
		},
		age: 38,
		gender: "male",
		sexuality: { preferences: [{ female: 100 }], intensity: 38 },
		stats: {},
		personality: {},
		equipment: [],
	},
];
