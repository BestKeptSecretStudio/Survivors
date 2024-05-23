"use client";
import { Provider } from "react-redux";
import TopBar from "./layout/TopBar";
import { store } from "./store";

export default function Home() {
	return (
		<Provider store={store}>
			<TopBar />
		</Provider>
	);
}
