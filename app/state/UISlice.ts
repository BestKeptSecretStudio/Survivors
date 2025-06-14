import { atom, computed, map } from "nanostores";

import CraftingScreen from "@layout/screens/Crafting";
import HomeScreen from "@layout/screens/Home";
import InfirmaryScreen from "@layout/screens/Infirmary";
import ReconScreen from "@layout/screens/Recon";

type Label = string;
type Component = React.ComponentType;

interface ScreenPayload {
	label: Label;
	component: Component;
}

export const $currentScreen = atom<Label>("home");

export const $screens = map<Record<Label, Component>>({
	home: HomeScreen,
	recon: ReconScreen,
	crafting: CraftingScreen,
	infirmary: InfirmaryScreen,
});

export const $currentScreenComponent = computed(
	[$currentScreen, $screens],
	(screenName, screens) => screens[screenName],
);

export const $availableScreens = computed($screens, (screens) =>
	Object.keys(screens),
);

export const createScreenExistsChecker = (screenName: string) =>
	computed($screens, (screens) => screenName in screens);

export const setCurrentScreen = (screen: string) => {
	if (!screen.length) throw new Error("Screen name cannot be empty");

	const screens = $screens.get();
	if (!(screen in screens)) {
		throw new Error(`Screen "${screen}" does not exist`);
	}

	$currentScreen.set(screen);
};

export const registerScreen = ({ label, component }: ScreenPayload) => {
	if ($screens.get()[label]) {
		throw new Error(`[UI] Screen ${label} already registered`);
	}

	$screens.setKey(label, component);
};

export const unregisterScreen = (label: string) => {
	const screens = $screens.get();
	if (!(label in screens)) {
		throw new Error(`[UI] Screen ${label} not found`);
	}
	
	if ($currentScreen.get() === label) {
		$currentScreen.set("home");
	}

	const newScreens = { ...screens };
	delete newScreens[label];
	$screens.set(newScreens);
};
