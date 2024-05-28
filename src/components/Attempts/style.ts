import styled from "styled-components"
import { device } from "styles"

export const AttemptsContainer = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media ${device.md} {
		justify-content: flex-start;
		gap: 5rem;
	}
`

export const AttemptsBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const AttemptsQuantity = styled.p`
	font-family: "RammettoOne";
	font-size: 1.5em;
	font-weight: 800;
	color: ${({ theme }) => theme.colors.titleText};
`
export const AttemptsDescription = styled.p`
	color: ${({ theme }) => theme.colors.primaryText};
	text-transform: uppercase;
	font-size: 0.5em;
`

export const AttemptsOperator = styled.span`
	font-size: 0.7em;
	font-family: ${({ theme }) => theme.fonts.roboto};
	color: ${({ theme }) => theme.colors.blueBgLight};
`
