import "@/styles/globals.css";
import Time from "@components/Time";
import ActionsBar from "@layout/ActionsMenu";
import ResourceBar from "@layout/ResourceBar";
import Screen from "@layout/Screen";
import type { PropsWithChildren } from "react";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<main className="min-h-full grid grid-cols-[clamp(8rem,25vw,16rem)_auto] grid-rows-[1.25rem_auto] gap-4 p-2">
		{children}
	</main>
);

const Home = () => {
	return (
		<Wrapper>
			<Time />
			<ResourceBar />
			<ActionsBar />
			<Screen />
		</Wrapper>
	);
};

export default Home;
