import styled from "@emotion/styled";
import { useAppSelector } from "../hooks";

const TimeWrapper = styled.div`
	display: flex;
	column-gap: 0.5rem;
`;

export default function Time() {
	const time = useAppSelector((state) => state.time.current);

	return (
		<TimeWrapper>
			<time dateTime={time.format("HH:mm:ss")}>{time.format("h:mm A")}</time>
			<time dateTime={time.format("YYYY-MM-DD")}>{time.format("MMM D")}</time>
		</TimeWrapper>
	);
}
