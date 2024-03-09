"use client";

import styled from "styled-components";
import Playfield from "./layout/Playfield";
import Sidebar from "./layout/Sidebar";

const HomeComponent = styled.div`
	display: grid;
	grid-template: 100vh / 16rem 1fr;
`;

export default function Home() {
	return (
		<HomeComponent>
			<Sidebar />
			<Playfield />
		</HomeComponent>
	);
}
