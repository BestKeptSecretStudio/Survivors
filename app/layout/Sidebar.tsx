import styled from "styled-components";
import Explore from "../components/Explore";

const StyledSidebar = styled.header`
	display: flex;
	flex-direction: column;

	border-inline-end: 1px solid #ddd;

	& > * + * {
		border-block-start: 1px solid #ddd;
	}
	& > *:hover,
	& > *:hover + * {
		border-color: transparent;
	}
`;

export default function Sidebar() {
	return (
		<StyledSidebar>
			<Explore.MenuItem />
			<Explore.MenuItem />
		</StyledSidebar>
	);
}
