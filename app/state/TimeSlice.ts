import { persistentAtom } from "@nanostores/persistent";
import dayjs from "dayjs";
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

export const $startingDayjs = computed($startingDate, (startingDayString) =>
	dayjs(startingDayString),
);

export const $timeDifference = computed(
	[$currentDayjs, $startingDayjs],
	(current, starting) => current.diff(starting),
);

export const $daysSurvived = computed($timeDifference, (diff) =>
	Math.floor(diff / 86_400_000 /* 1000 ms * 60 s * 60 m * 24 h */),
);

export const $formattedTime = computed($currentDayjs, (dayjs) =>
	dayjs.format("hh:mm A"),
);

export const $formattedDate = computed($currentDayjs, (dayjs) =>
	dayjs.format("MMM D"),
);

export const advanceTime = (amount: string) => {
	const currentTime = $currentTime.get();
	const seconds = timestring(amount, undefined, timestringOptions);
	const newTime = dayjs(currentTime).add(seconds, "seconds");
	$currentTime.set(newTime.format());
};
