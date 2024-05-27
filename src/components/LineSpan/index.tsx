import * as S from "./style"

export const LineSpan = ({
	bgColor,
	width,
	height,
	direction = "row",
}: { bgColor?: string; width?: string; height?: string; direction?: "row" | "column" }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: direction,
			}}>
			<S.CircleSpan bgColor={bgColor} />
			<S.LineSpan bgColor={bgColor} width={width} height={height} />
			<S.CircleSpan bgColor={bgColor} />
		</div>
	)
}
