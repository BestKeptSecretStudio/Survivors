import styled from "@emotion/styled";
import Time from "../components/Time";

const Bar = styled.header`
	display: flex;
	column-gap: 2rem;

	padding: 0.25rem 0.5rem;

	border-bottom: 1px solid;
`;

export default function TopBar() {
	return (
		<Bar>
			<Time />
			<div>Resources</div>
		</Bar>
	);
}
