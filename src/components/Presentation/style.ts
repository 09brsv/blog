import styled from "styled-components"
import { device } from "styles"

export const ContainerPresentation = styled.div`
	position: relative;
	padding: 2rem;
	padding-bottom: 5rem;
	border: 3px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.container};
	text-align: center;

	.button {
		position: absolute;
		bottom: -6%;
		translate: -50%;
	}
	@media ${device.md} {
		.md-only-circle {
			display: block;
		}
	}
`

export const ContainerPresentationDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: self-start;
	gap: 1rem;
	padding-left: 3rem;
`

export const ContainerPresentationWrapper = styled.div`
	@media ${device.md} {
		width: 55%;
		p.description {
			max-width: 500px;
		}
	}
`
