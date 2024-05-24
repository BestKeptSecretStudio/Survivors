import styled from "@emotion/styled";
import { useAppSelector } from "../hooks";

const TimeWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	column-gap: 0.75rem;
`;

export default function Time() {
	const time = useAppSelector((state) => state.time.current);

	return (
		<TimeWrapper>
			<time>{time.format("hh:mm A")}</time>
			<time>{time.format("MMM D")}</time>
		</TimeWrapper>
	);
}
