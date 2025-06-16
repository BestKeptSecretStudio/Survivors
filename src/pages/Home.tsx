import Screen from "@layout/Screen";
import Sidebar from "@layout/Sidebar";

export default function Home() {
	return (
		<div className="grid grid-cols-[16rem_1fr] p-4">
			<Sidebar />
			<Screen />
		</div>
	);
}
