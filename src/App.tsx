import { Route, Switch } from "wouter";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
	return (
		<div className="min-h-screen bg-background">
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route>
					<div className="p-8 text-center">
						<h1 className="text-2xl font-bold">404 - Page Not Found</h1>
					</div>
				</Route>
			</Switch>
		</div>
	);
}
