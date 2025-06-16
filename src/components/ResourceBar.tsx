"use client";

import {
	$food,
	$fuel,
	$materials,
	$medicine,
	$scrap,
	$water,
} from "@/state/HavenSlice";
import { useStore } from "@nanostores/react";
import type { PropsWithChildren } from "react";

export const Bar: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex gap-5 flex-nowrap overflow-hidden">{children}</div>
);

const Resource: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex gap-1">{children}</div>
);

const Label: React.FC<PropsWithChildren> = ({ children }) => (
	<span>{children}</span>
);

const Food: React.FC<PropsWithChildren> = () => {
	const food = useStore($food);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Food</Label> <b>{food}</b>
			</div>
		</Resource>
	);
};

const Water: React.FC<PropsWithChildren> = () => {
	const water = useStore($water);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Water</Label> <b>{water}</b>
			</div>
		</Resource>
	);
};

const Medicine: React.FC<PropsWithChildren> = () => {
	const medicine = useStore($medicine);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Medicine</Label> <b>{medicine}</b>
			</div>
		</Resource>
	);
};

const Materials: React.FC<PropsWithChildren> = () => {
	const materials = useStore($materials);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Materials</Label> <b>{materials}</b>
			</div>
		</Resource>
	);
};

const Scrap: React.FC<PropsWithChildren> = () => {
	const scrap = useStore($scrap);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Scrap</Label> <b>{scrap}</b>
			</div>
		</Resource>
	);
};

const Fuel: React.FC<PropsWithChildren> = () => {
	const fuel = useStore($fuel);

	return (
		<Resource>
			<div className="flex gap-1">
				<Label>Fuel</Label> <b>{fuel}</b>
			</div>
		</Resource>
	);
};

const ResourceBar = () => {
	return (
		<Bar>
			<Food />
			<Water />
			<Medicine />
			<Materials />
			<Scrap />
			<Fuel />
		</Bar>
	);
};

export default ResourceBar;
