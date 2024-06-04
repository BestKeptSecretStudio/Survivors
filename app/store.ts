import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./state/TimeSlice";
import havenReducer from "./state/HavenSlice";
import UIReducer from "./state/UISlice";

export const store = configureStore({
	reducer: {
		time: timeReducer,
		haven: havenReducer,
		ui: UIReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
