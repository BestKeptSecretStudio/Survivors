import "@/styles/globals.css";
import Sidebar from "@/layout/Sidebar";
import Screen from "@layout/Screen";
import type { PropsWithChildren } from "react";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<main className="h-full grid grid-cols-[16rem_auto]">
		{children}
	</main>
);

const Home = () => (
	<Wrapper>
		<Sidebar />
		<Screen />
	</Wrapper>
);

export default Home;
