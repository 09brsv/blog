import styled from "styled-components"
import { device } from "styles"

export const OvalCircle = styled.div<{
	rotate?: number
	border?: string
	oneSizeShow?: string
}>`
	width: 193px;
	height: 272px;
	border-radius: 46%;
	border: 6px solid ${({ theme, border }) => border ?? theme.colors.blueBgDark};
	background-color: ${({ theme }) => theme.colors.bgCircle};
	transform: rotate(${({ rotate }) => rotate ?? 0}deg);

	${({ oneSizeShow }) =>
		!!oneSizeShow &&
		`  
    @media ${device.md} {
      display: none;
    }

    `}
`
