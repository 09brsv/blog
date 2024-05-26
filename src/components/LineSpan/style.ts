import styled from "styled-components"

export const LineSpan = styled.span<{ width?: string; bgColor?: string }>`
	width: ${({ width }) => width ?? "0px"};
	height: 2px;
	background: ${({ theme, bgColor }) => bgColor ?? theme.colors.spanColor};
`

export const CircleSpan = styled.span<{ bgColor?: string }>`
	background-color: ${({ theme, bgColor }) => bgColor ?? theme.colors.spanColor};
	width: 6px;
	height: 6px;
	border-radius: 3px;
`
