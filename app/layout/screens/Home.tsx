import Actions, { Action, Heading } from "@/components/ActionsMenu";

const HomeScreen = () => {
	return (
		<div className="flex flex-col">
			<p>Your haven is secure.</p>
			<p>The weather is currently clear. It's going to rain lightly soon.</p>
			<p>The surroundings are quiet.</p>
			<Actions>
				<Actions.Section>
					<Heading>Home</Heading>
					<Actions.List>
						<Action>Look around</Action>
					</Actions.List>
				</Actions.Section>
			</Actions>
		</div>
	);
};

export default HomeScreen;
