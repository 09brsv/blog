import * as S from "./style"

export const LineSpan = ({ bgColor, width }: { bgColor?: string; width?: string }) => {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			<S.CircleSpan bgColor={bgColor} />
			<S.LineSpan bgColor={bgColor} width={width} />
			<S.CircleSpan bgColor={bgColor} />
		</div>
	)
}
