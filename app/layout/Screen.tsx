"use client";

import { $currentScreenComponent } from "@/state/UISlice";
import { useStore } from "@nanostores/react";

const Screen = () => {
	const ScreenComponent = useStore($currentScreenComponent);

	return <ScreenComponent />;
};

export default Screen;
