import Actions, { Action, Heading } from "@/components/ActionsMenu";
import { addResource, subtractResource } from "@/state/HavenSlice";
import ResourceBar from "../ResourceBar";

function CheatsScreen() {
	return (
		<div className="flex flex-col gap-2">
			<ResourceBar />
			<Actions>
				<Actions.Section>
					<Heading>Food</Heading>
					<Actions.List>
						<Action action={() => addResource("food", 1)}>Add 1 food</Action>
						<Action action={() => addResource("food", 10)}>Add 10 food</Action>
						<Action action={() => subtractResource("food", 1)}>
							Remove 1 food
						</Action>
						<Action action={() => subtractResource("food", 10)}>
							Remove 10 food
						</Action>
					</Actions.List>
				</Actions.Section>

				<Actions.Section>
					<Heading>Water</Heading>
					<Actions.List>
						<Action action={() => addResource("water", 1)}>Add 1 water</Action>
						<Action action={() => addResource("water", 10)}>
							Add 10 water
						</Action>
						<Action action={() => subtractResource("water", 1)}>
							Remove 1 water
						</Action>
						<Action action={() => subtractResource("water", 10)}>
							Remove 10 water
						</Action>
					</Actions.List>
				</Actions.Section>

				<Actions.Section>
					<Heading>Medicine</Heading>
					<Actions.List>
						<Action action={() => addResource("medicine", 1)}>
							Add 1 medicine
						</Action>
						<Action action={() => addResource("medicine", 10)}>
							Add 10 medicine
						</Action>
						<Action action={() => subtractResource("medicine", 1)}>
							Remove 1 medicine
						</Action>
						<Action action={() => subtractResource("medicine", 10)}>
							Remove 10 medicine
						</Action>
					</Actions.List>
				</Actions.Section>

				<Actions.Section>
					<Heading>Materials</Heading>
					<Actions.List>
						<Action action={() => addResource("materials", 1)}>
							Add 1 materials
						</Action>
						<Action action={() => addResource("materials", 10)}>
							Add 10 materials
						</Action>
						<Action action={() => subtractResource("materials", 1)}>
							Remove 1 materials
						</Action>
						<Action action={() => subtractResource("materials", 10)}>
							Remove 10 materials
						</Action>
					</Actions.List>
				</Actions.Section>

				<Actions.Section>
					<Heading>Scrap</Heading>
					<Actions.List>
						<Action action={() => addResource("scrap", 1)}>Add 1 scrap</Action>
						<Action action={() => addResource("scrap", 10)}>
							Add 10 scrap
						</Action>
						<Action action={() => subtractResource("scrap", 1)}>
							Remove 1 scrap
						</Action>
						<Action action={() => subtractResource("scrap", 10)}>
							Remove 10 scrap
						</Action>
					</Actions.List>
				</Actions.Section>

				<Actions.Section>
					<Heading>Fuel</Heading>
					<Actions.List>
						<Action action={() => addResource("fuel", 1)}>Add 1 fuel</Action>
						<Action action={() => addResource("fuel", 10)}>Add 10 fuel</Action>
						<Action action={() => subtractResource("fuel", 1)}>
							Remove 1 fuel
						</Action>
						<Action action={() => subtractResource("fuel", 10)}>
							Remove 10 fuel
						</Action>
					</Actions.List>
				</Actions.Section>
			</Actions>
		</div>
	);
}

export default CheatsScreen;
