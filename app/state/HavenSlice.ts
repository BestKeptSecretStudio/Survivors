import { createSlice } from "@reduxjs/toolkit";

const initialResources: { [key: string]: number } = {
	food: 8,
	water: 8,
	medicine: 8,
	materials: 8,
	scrap: 8,
	fuel: 8,
};

const havenSlice = createSlice({
	name: "haven",
	initialState: {
		name: "The Haven",
		resources: initialResources,
	},
	reducers: {
		setName: (state, action) => {
			const newName = action.payload;
			if (!newName.length) throw "Haven name cannot be empty";
			state.name = action.payload;
		},
		manageResource: (state, { payload: { action, type, amount } }) => {
			switch (action) {
				case "add":
					state.resources[type] += amount;
					break;
				case "subtract":
					state.resources[type] -= Math.min(state.resources[type], amount);
					break;
				case "set":
					state.resources[type] = Math.max(0, amount);
					break;
				default:
					break;
			}
		},
	},
});

export const { setName, manageResource } = havenSlice.actions;
export default havenSlice.reducer;
