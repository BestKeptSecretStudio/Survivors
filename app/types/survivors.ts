import { Item } from "./items";
import { Percentile } from "./utilities";

// * temporarily keep other options under an overly-inclusive "otherwise"
// TODO: research appropriate terms and classifications
type Gender = "male" | "female" | "otherwise";

type Survivor = {
	name: {
		first: string;
		middle?: string;
		last: string;
	};
	age: number;
	gender:
		| Gender
		| {
				type: Gender;
				isTransgender?: boolean;
				hasTransitioned?: boolean;
		  };
	sexuality: {
		preferences: { [Key in Gender]?: Percentile }[];
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
