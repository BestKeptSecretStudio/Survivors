"use client";
import styled from "@emotion/styled";
import { Provider } from "react-redux";
import { store } from "./store";

import Time from "@components/Time";
import ActionsBar from "@layout/ActionsMenu";
import ResourceBar from "@layout/ResourceBar";

const Wrapper = styled.main`
	min-height: 100%;

	display: grid;
	// 1.25rem ensures the next in the top bar is not cut off
	grid-template: 1.25rem auto / clamp(8em, 25vw, 16em) auto;
	gap: 1rem;

	padding: 0.5rem;
`;

export default function Home() {
	return (
		<Provider store={store}>
			<Wrapper>
				<Time />
				<ResourceBar />
				<ActionsBar />
				<div>Playfield</div>
			</Wrapper>
		</Provider>
	);
}
