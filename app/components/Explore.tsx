import { MenuItem as Item } from "@/app/components/Item";
import { IconMapSearch } from "@tabler/icons-react";

function MenuItem() {
	return (
		<Item>
			<IconMapSearch size={40} strokeWidth={1.25} />
			<span>Explore</span>
			<span>Danger: low</span>
		</Item>
	);
}

function Screen() {
	return <div></div>;
}

function Explore() {
	return <div></div>;
}

Explore.MenuItem = MenuItem;
Explore.Screen = Screen;

export default Explore;
