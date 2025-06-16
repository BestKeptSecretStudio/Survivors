import { atom, computed } from "nanostores";

const RESOURCES = [
	"food",
	"water",
	"medicine",
	"materials",
	"scrap",
	"fuel",
] as const;
export type Resource = (typeof RESOURCES)[number];

// Individual atomic stores for each resource - more granular reactivity
export const $food = atom(8);
export const $water = atom(8);
export const $medicine = atom(8);
export const $materials = atom(8);
export const $scrap = atom(8);
export const $fuel = atom(8);

// Haven name as separate atom
export const $havenName = atom("Haven");

// Computed store that combines all resources - reactive composition
export const $resources = computed(
	[$food, $water, $medicine, $materials, $scrap, $fuel],
	(food, water, medicine, materials, scrap, fuel) => ({
		food,
		water,
		medicine,
		materials,
		scrap,
		fuel,
	}),
);

// Computed store for total resource count - derived state
export const $totalResources = computed($resources, (resources) =>
	Object.values(resources).reduce((sum, amount) => sum + amount, 0),
);

// Resource store map for easier access
const resourceStores: Record<Resource, typeof $food> = {
	food: $food,
	water: $water,
	medicine: $medicine,
	materials: $materials,
	scrap: $scrap,
	fuel: $fuel,
};

// Direct resource manipulation - more nanostores-like
export const setResource = (type: Resource, amount: number) => {
	resourceStores[type].set(Math.max(0, amount));
};

export const addResource = (type: Resource, amount: number) => {
	const current = resourceStores[type].get();
	setResource(type, current + amount);
};

export const subtractResource = (type: Resource, amount: number) => {
	const current = resourceStores[type].get();
	setResource(type, current - amount);
};

// Haven name manipulation
export const setHavenName = (name: string) => {
	if (!name.length) throw new Error("Haven name cannot be empty");
	$havenName.set(name);
};
