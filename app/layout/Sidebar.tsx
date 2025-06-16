"use client";

import Actions, { Action, Heading } from "@/components/ActionsMenu";
import { setCurrentScreen } from "@state/UISlice";
import { type PropsWithChildren } from "react";

export const Menu = ({ children }: { children: React.ReactNode }) => (
	<div className="flex flex-col gap-2 bg-white">{children}</div>
);

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex flex-col">{children}</div>
);

const ACTIONS = [
	{
		heading: "Haven",
		actions: [
			{
				label: "Overview",
				action: () => setCurrentScreen("home"),
			},
			{
				label: "Cheats",
				action: () => setCurrentScreen("cheats"),
			},
		],
	},
];

const Sidebar: React.FC = () => {
	return (
		<Wrapper>
			<Actions className="block">
				{ACTIONS.map(({ heading, actions }) => (
					<Actions.Section key={heading}>
						<Heading>{heading}</Heading>
						<Actions.List>
							{actions.map(({ action, label }) => (
								<Action key={label} action={action}>
									{label}
								</Action>
							))}
						</Actions.List>
					</Actions.Section>
				))}
			</Actions>
			{/* <Time /> */}
		</Wrapper>
	);
};

export default Sidebar;
