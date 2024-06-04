import styled from "@emotion/styled";
import dayjs from "dayjs";
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
			<time>{dayjs(time).format("hh:mm A")}</time>
			<time>{dayjs(time).format("MMM D")}</time>
		</TimeWrapper>
	);
}
