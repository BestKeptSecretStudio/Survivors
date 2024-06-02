import styled from "@emotion/styled";
import { useAppDispatch } from "../hooks";
import { useMemo } from "react";
import { manageResource } from "@state/HavenSlice";

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
`;

const Action = styled.div`
	overflow: hidden;

	padding: 0.5rem;
	border: 1px solid #ddd;
	border-radius: 0.25rem;

	text-align: center;
	white-space: nowrap;
	text-overflow: ellipsis;

	cursor: pointer;
	user-select: none;

	&:hover {
		border-color: #aaa;
		background-color: floralwhite;
	}
`;

const Heading = styled.h1`
	margin-block-end: 0.75rem;

	font-size: 1.5em;
	font-weight: bold;
	text-align: center;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
`;

export default function ActionsBar() {
	const dispatch = useAppDispatch();

	const ACTIONS = useMemo(
		() => [
			{
				heading: "Haven",
				actions: [
					{ label: "Overview", action: () => {} },
					{ label: "Infirmary", action: () => {} },
					{ label: "Crafting", action: () => {} },
				],
			},
			{
				heading: "Outside",
				actions: [
					{ label: "Recon", action: () => {} },
					{ label: "Scavenge", action: () => {} },
					{ label: "Clear Area", action: () => {} },
				],
			},
			{
				heading: "Cheats",
				actions: [
					{
						label: "Add 1 Food",
						action: () =>
							dispatch(
								manageResource({ action: "add", type: "food", amount: 1 })
							),
					},
					{
						label: "Remove 1 Food",
						action: () =>
							dispatch(
								manageResource({ action: "subtract", type: "food", amount: 1 })
							),
					},
				],
			},
		],
		[dispatch]
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
}
