import { persistentAtom } from "@nanostores/persistent";
import dayjs, { type Dayjs } from "dayjs";
import { atom, computed } from "nanostores";
import timestring, { type Options } from "timestring";

// * module defaults to 365.25 days / year
const timestringOptions: Options = {
	daysPerYear: 365,
};

export const $startingDate = persistentAtom<string>(
	"startingDate",
	dayjs().format(),
	{
		encode: (value: string) => value,
		decode: (value: string) => value,
	},
);

export const $currentTime = atom(dayjs().format());

export const $currentDayjs = computed($currentTime, (timeStr) =>
	dayjs(timeStr),
);

export const $startingDayjs = computed($startingDate, (startingStr) =>
	dayjs(startingStr),
);

export const $timeDifference = computed(
	[$currentDayjs, $startingDayjs],
	(current, starting) => current.diff(starting),
);

export const $daysSurvived = computed($timeDifference, (diff) =>
	Math.floor(diff / (1000 * 60 * 60 * 24)),
);

export const $formattedTime = computed($currentDayjs, (dayjs) =>
	dayjs.format("hh:mm A"),
);

export const $formattedDate = computed($currentDayjs, (dayjs) =>
	dayjs.format("MMM D"),
);

export const setTime = (time: string | Dayjs) => {
	const formatted = dayjs(time).format();
	$currentTime.set(formatted);
};

export const advanceTime = (amount: string) => {
	const seconds = timestring(amount, undefined, timestringOptions);
	const newTime = dayjs($currentTime.get()).add(seconds, "seconds");
	$currentTime.set(newTime.format());
};

export const resetToStartingTime = () => {
	$currentTime.set($startingDate.get());
};

export const setNewStartingDate = (date?: string | Dayjs) => {
	const newDate = dayjs(date).format();
	$startingDate.set(newDate);
	$currentTime.set(newDate);
};
