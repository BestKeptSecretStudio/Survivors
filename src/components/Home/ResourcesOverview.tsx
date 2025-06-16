import {
	$food,
	$fuel,
	$materials,
	$medicine,
	$scrap,
	$water,
} from "@/state/HavenSlice";
import { useStore } from "@nanostores/react";

const FoodOverview = () => {
	const food = useStore($food);

	return <span>You have {food} food.</span>;
};

const WaterOverview = () => {
	const water = useStore($water);

	return <span>You have {water} water.</span>;
};

const MedicineOverview = () => {
	const medicine = useStore($medicine);

	return <span>You have {medicine} medicine.</span>;
};

const MaterialsOverview = () => {
	const materials = useStore($materials);

	return <span>You have {materials} materials.</span>;
};

const ScrapOverview = () => {
	const scrap = useStore($scrap);

	return <span>You have {scrap} scrap.</span>;
};

const FuelOverview = () => {
	const fuel = useStore($fuel);

	return <span>You have {fuel} fuel.</span>;
};

export const ResourcesOverview = () => {
	return (
		<p>
			<FoodOverview />{" "}
			<WaterOverview />{" "}
			<MedicineOverview />{" "}
			<MaterialsOverview />{" "}
			<ScrapOverview />{" "}
			<FuelOverview />
		</p>
	);
};
