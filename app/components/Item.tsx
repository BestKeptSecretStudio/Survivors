import { type PropsWithChildren } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
	display: grid;
	grid-template:
		"icon title" auto
		"icon description" auto
		/ 3rem 1fr;
	justify-content: center;
	align-items: center;

	padding: 1rem;

	user-select: none;

	&:hover {
		background-color: #eee;

		cursor: pointer;
	}

	& :nth-child(1) {
		grid-area: icon;
	}
	& :nth-child(2) {
		grid-area: title;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: bold;
	}
	& :nth-child(3) {
		grid-area: description;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export function MenuItem({ children }: PropsWithChildren) {
	return <StyledItem>{children}</StyledItem>;
}
