import styled from "styled-components"

export const LineSpan = styled.span<{ width?: string; bgColor?: string; height?: string }>`
	width: ${({ width }) => width ?? "0px"};
	height: ${({ height }) => height ?? "3px"};
	background: ${({ theme, bgColor }) => bgColor ?? theme.colors.spanColor};
`

export const CircleSpan = styled.span<{ bgColor?: string }>`
	background-color: ${({ theme, bgColor }) => bgColor ?? theme.colors.spanColor};
	width: 10px;
	height: 10px;
	border-radius: 5px;
`
