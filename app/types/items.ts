type ID = string;
type Weight = "very light" | "light" | "medium" | "heavy";
type Volume = "tiny" | "small" | "medium" | "large";

export type Item = {
	id: ID;
	name: string;

	weight: Weight;
	volume: Volume;

	storedIn: ID | null;
};
