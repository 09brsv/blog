import styled from "styled-components"
import { device } from "styles"

export const HomeContainer = styled.div`
	width: 100vw;
	padding: 1rem;

	@media ${device.md} {
		.section-presentation {
			display: flex;
		}
	}
`

export const HomeLine = styled.div`
	width: 100%;
	height: 5px;
	background-color: #9eb5cf;
`
