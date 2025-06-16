import { atom, computed, map } from "nanostores";

import CheatsScreen from "@layout/screens/Cheats";
import HomeScreen from "@layout/screens/Home";

type Label = string;
type Component = React.ComponentType;

export const $currentScreen = atom<Label>("home");

export const $screens = map<Record<Label, Component>>({
	home: HomeScreen,
	cheats: CheatsScreen,
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
