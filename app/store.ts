import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./state/TimeSlice";
import havenReducer from "./state/HavenSlice";

export const store = configureStore({
	reducer: {
		time: timeReducer,
		haven: havenReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
