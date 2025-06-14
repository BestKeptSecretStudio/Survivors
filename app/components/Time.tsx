"use client";

import { $formattedDate, $formattedTime } from "@/state/TimeSlice";
import { useStore } from "@nanostores/react";
import type { PropsWithChildren } from "react";

const TimeWrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex justify-around flex-wrap gap-3">{children}</div>
);

export default function Time() {
	const formattedTime = useStore($formattedTime);
	const formattedDate = useStore($formattedDate);

	return (
		<TimeWrapper>
			<time>{formattedTime}</time>
			<time>{formattedDate}</time>
		</TimeWrapper>
	);
}
