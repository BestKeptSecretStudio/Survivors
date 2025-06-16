import { $currentScreenComponent } from "@state/UISlice";
import { useStore } from "@nanostores/react";

const Screen = () => {
	const ScreenComponent = useStore($currentScreenComponent);

	return ScreenComponent ? <ScreenComponent /> : null;
};

export default Screen;
