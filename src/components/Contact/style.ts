import { Button } from "components/Button"
import { RectangleMediumRightIcon } from "config/icons/icons"
import styled from "styled-components"
import { device } from "styles"

export const ContactContainer = styled.div`
	position: relative;
	margin-top: 5rem;
	padding: 3rem;
	width: 100%;
	border: 3px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.container};

	@media ${device.md} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0;
		padding: 0 5rem 3rem 5rem;
		align-items: center;
	}
`

export const ContactWrapperCircle = styled.div`
	@media ${device.md} {
		width: 50%;
		height: 50%;

		& > p {
			margin-bottom: 4rem;
			padding-bottom: 3rem;
		}
	}
`

export const ContactCircleContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem auto;
	padding: 0.3rem;
	height: 105px;
	width: 100%;
	border: 3px solid ${({ theme }) => theme.colors.border};
	border-radius: 54px;

	@media ${device.md} {
		height: 140px;
		width: 100%;
	}
`

export const ContactCircle = styled.div`
	position: absolute;
	padding: 1rem 0.9rem;
	width: 116px;
	height: 120px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blueBgDark};

	&:nth-child(1) {
		left: 5px;
	}
	&:nth-child(2) {
		right: 50%;
		transform: translateX(50%);
		border-left: 5px solid white;
	}
	&:nth-child(3) {
		right: 5px;
		border-left: 5px solid white;
	}

	@media ${device.md} {
		padding: 1.5rem;
		& p {
			font-size: 26px;
		}
	}
`

export const ContactCircleText = styled.p`
	font-family: ${({ theme }) => theme.fonts.rammettoOne};
	font-size: 18px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.white};
	text-align: left;
`

export const ContactRectangleIcon = styled(RectangleMediumRightIcon)`
	position: absolute;
	top: 20%;
	right: -1rem;
	width: 60px;

	@media ${device.md} {
		top: 10%;
		right: 5rem;
	}
`

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	width: 100%;
	max-width: 500px;

	@media ${device.md} {
		& > button {
			margin-left: 5%;
		}
	}
`

export const ContactBoxInput = styled.div`
	display: flex;
	align-items: center;
	width: 110%;
	margin-left: -10%;

	span {
		width: 10px;
		height: 2px;
		background-color: #9eb5cf;
	}

	@media ${device.md} {
		width: 60%;
		margin-left: 0;

		span {
			width: 3rem;
			height: 3px;
		}
	}
`

export const ContactInput = styled.input`
	padding: 0.7rem 1rem;
	border: 3px solid ${({ theme }) => theme.colors.border};
	border-radius: 10px;
	width: 100%;
	outline: nome;

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondaryText};
	}
`

export const ContactButton = styled(Button)`
	margin-top: 1rem;
	width: 100%;
	max-width: 240px;

	@media ${device.md} {
		margin-left: 3rem;
	}
`
