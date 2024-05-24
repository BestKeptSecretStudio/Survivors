import styled from "@emotion/styled";
import { useAppSelector } from "../hooks";

export const Bar = styled.div`
	display: flex;
	column-gap: 1.25rem;
	flex-wrap: nowrap;

	overflow: hidden;
`;

const Resource = styled.div`
	display: flex;
	column-gap: 0.25rem;
`;

const Label = styled.span``;

export default function ResourceBar() {
	const { food, water, medicine, materials, scrap, fuel } = useAppSelector(
		(state) => state.haven.resources
	);

	return (
		<Bar>
			<Resource>
				<Label>Food</Label> <b>{food}</b>
			</Resource>
			<Resource>
				<Label>Water</Label> <b>{water}</b>
			</Resource>
			<Resource>
				<Label>Medicine</Label> <b>{medicine}</b>
			</Resource>
			<Resource>
				<Label>Materials</Label> <b>{materials}</b>
			</Resource>
			<Resource>
				<Label>Scrap</Label> <b>{scrap}</b>
			</Resource>
			<Resource>
				<Label>Fuel</Label> <b>{fuel}</b>
			</Resource>
		</Bar>
	);
}
