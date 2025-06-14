"use client";

import { addResource, subtractResource } from "@state/HavenSlice";
import { setCurrentScreen } from "@state/UISlice";
import { useMemo, type ComponentProps, type PropsWithChildren } from "react";

export const Menu = ({ children }: { children: React.ReactNode }) => (
	<div className="flex flex-col gap-2">{children}</div>
);

const Action: React.FC<PropsWithChildren<ComponentProps<"button">>> = ({
	children,
	onClick,
}) => (
	<button
		onClick={onClick}
		className="overflow-hidden p-2 border border-gray-300 rounded cursor-pointer select-none text-center whitespace-nowrap text-ellipsis hover:border-gray-400 hover:bg-orange-50"
	>
		{children}
	</button>
);

const Heading: React.FC<PropsWithChildren> = ({ children }) => (
	<h1 className="mb-3 text-xl font-bold text-center">{children}</h1>
);

const Section: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex flex-col gap-2">{children}</div>
);

const ActionsBar = () => {
	const ACTIONS = useMemo(
		() => [
			{
				heading: "Haven",
				actions: [
					{
						label: "Overview",
						action: () => setCurrentScreen("home"),
					},
					{
						label: "Infirmary",
						action: () => setCurrentScreen("infirmary"),
					},
					{
						label: "Crafting",
						action: () => setCurrentScreen("crafting"),
					},
				],
			},
			{
				heading: "Outside",
				actions: [
					{
						label: "Recon",
						action: () => setCurrentScreen("recon"),
					},
				],
			},
			{
				heading: "Cheats",
				actions: [
					{
						label: "Add 1 Food",
						action: () => addResource("food", 1),
					},
					{
						label: "Remove 1 Food",
						action: () => subtractResource("food", 1),
					},
				],
			},
		],
		[],
	);

	return (
		<Menu>
			{ACTIONS.map(({ heading, actions }) => (
				<Section key={heading}>
					<Heading>{heading}</Heading>
					{actions.map(({ action, label }) => (
						<Action key={label} onClick={action}>
							{label}
						</Action>
					))}
				</Section>
			))}
		</Menu>
	);
};

export default ActionsBar;
