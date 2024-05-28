import styled from "styled-components"

export const LineSpan = styled.span<{ width?: string; bgcolor?: string; height?: string }>`
	width: ${({ width }) => width ?? "0px"};
	height: ${({ height }) => height ?? "3px"};
	background: ${({ theme, bgcolor }) => bgcolor ?? theme.colors.spanColor};
`

export const CircleSpan = styled.span<{ bgcolor?: string }>`
	background-color: ${({ theme, bgcolor }) => bgcolor ?? theme.colors.spanColor};
	width: 10px;
	height: 10px;
	border-radius: 5px;
`
