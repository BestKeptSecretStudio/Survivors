type Effect = {
	key: string;
	value: string | number | boolean;
};

export type Trait = {
	name: string;
	description: string;
	effects: Effect[];
};
