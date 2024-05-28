import * as S from "./style"

export const LineSpan = ({
	bgcolor,
	width,
	height,
	className,
	direction = "row",
}: {
	bgcolor?: string
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
			<S.CircleSpan bgcolor={bgcolor} className={className} />
			<S.LineSpan bgcolor={bgcolor} width={width} height={height} className={className} />
			<S.CircleSpan bgcolor={bgcolor} className={className} />
		</div>
	)
}
