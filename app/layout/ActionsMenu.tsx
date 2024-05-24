import styled from "@emotion/styled";

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
	return (
		<Menu>
			<Section>
				<Heading>Haven</Heading>

				<Action>Overview</Action>
				<Action>Infirmary</Action>
				<Action>Crafting</Action>
			</Section>
			<Section>
				<Heading>Outside</Heading>

				<Action>Recon</Action>
				<Action>Scavenge</Action>
				<Action>Clear Area</Action>
			</Section>
		</Menu>
	);
}
