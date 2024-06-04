import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
	name: "ui",
	initialState: {
		screen: "home",
	},
	reducers: {
		setScreen: (state, action) => {
			const newScreen = action.payload;
			if (!newScreen.length) throw "Screen name cannot be empty";
			state.screen = action.payload;
		},
	},
});

export const { setScreen } = UISlice.actions;
export default UISlice.reducer;
