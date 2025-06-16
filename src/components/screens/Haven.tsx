import Actions, { Action, Heading } from "@components/ActionsMenu";
import { ResourcesOverview as Resources } from "@components/Home/ResourcesOverview";
import { setHavenName } from "@state/HavenSlice";

const HavenScreen = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<p>Your haven is secure.</p>
				<p>The weather is currently clear. It's going to rain lightly soon.</p>
				<p>The surroundings are quiet.</p>
				<Resources />
			</div>
			<Actions>
				<Actions.Section>
					<Heading>Manage</Heading>
					<Actions.List>
						<Action action={() => setHavenName("Haven")}>Rename haven</Action>
					</Actions.List>
				</Actions.Section>
				<Actions.Section>
					<Heading>People</Heading>
					<Actions.List>
						<Action>View list</Action>
						<Action>Statistics</Action>
					</Actions.List>
				</Actions.Section>
				<Actions.Section>
					<Heading>Resources</Heading>
					<Actions.List>
						<Action>Review usage</Action>
					</Actions.List>
				</Actions.Section>
			</Actions>
		</div>
	);
};

export default HavenScreen;
