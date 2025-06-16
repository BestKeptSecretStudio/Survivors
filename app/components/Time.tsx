"use client";

import { $formattedDate, $formattedTime } from "@/state/TimeSlice";
import { useStore } from "@nanostores/react";
import type { PropsWithChildren } from "react";

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="flex justify-around flex-wrap gap-3 bg-white">{children}</div>
);

export default function Time() {
	const formattedTime = useStore($formattedTime);
	const formattedDate = useStore($formattedDate);

	return (
		<Wrapper>
			<time dateTime={formattedTime}>{formattedTime}</time>
			<time dateTime={formattedDate}>{formattedDate}</time>
		</Wrapper>
	);
}
