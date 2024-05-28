import * as S from "./style"

export const LineSpan = ({
	bgColor,
	width,
	height,
	className,
	direction = "row",
}: {
	bgColor?: string
	width?: string
	height?: string
	direction?: "row" | "column"
	className?: string
}) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: className === "column" || className === "row" ? className : direction,
			}}
			className="line">
			<S.CircleSpan bgColor={bgColor} className={className} />
			<S.LineSpan bgColor={bgColor} width={width} height={height} className={className} />
			<S.CircleSpan bgColor={bgColor} className={className} />
		</div>
	)
}
