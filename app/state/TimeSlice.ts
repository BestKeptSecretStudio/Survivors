import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import timestring from "timestring";

// * module defaults to 365.25 days / year
const timestringOptions = {
	daysPerYear: 365,
};

// & `null` is treated as invalid input by `dayjs()`
// >  https://day.js.org/docs/en/parse/now
const storedStartingDate =
	typeof localStorage !== "undefined"
		? localStorage.getItem("startingDate") || undefined
		: undefined;
const startingDate = dayjs(storedStartingDate);

if (!storedStartingDate && typeof localStorage !== "undefined")
	localStorage.setItem("startingDate", startingDate.format());

const timeSlice = createSlice({
	name: "time",
	initialState: {
		// & we must use `.format()` because the Day.js object is non-serializable
		// & this leads to issues with managing the state
		current: dayjs().format(),
	},
	reducers: {
		increment: (state, action) => {
			const amount = timestring(action.payload, undefined, timestringOptions);
			state.current = dayjs(state.current).add(amount, "seconds").format();
		},
	},
});

export const { increment } = timeSlice.actions;
export default timeSlice.reducer;
