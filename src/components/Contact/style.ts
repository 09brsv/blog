import { RectangleMediumRightIcon } from "config/icons/icons"
import styled from "styled-components"

export const ContactContainer = styled.div`
  position: relative;
	margin-top: 5rem;
	padding: 3rem;
  border: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.container};
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
	border: ${({ theme }) => theme.colors.border};
	border-radius: 54px;
`

export const ContactCircle = styled.div`
	position: absolute;
	width: 95px;
	height: 90px;
	padding: 1rem 0.9rem;
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
  right: -2rem;
  width: 60px;
`

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	width: 100%;
	max-width: 500px;
`

export const ContactBoxInput = styled.div`
	display: flex;
	align-items: center;
  width: 110%;
  margin-left: -10%;

  span {
    width: 10px;
    height: 2px;
    background-color: #9EB5CF;
  }
`

export const ContactInput = styled.input`
	padding: .7rem 1rem;
	border: ${({ theme }) => theme.colors.border};
	border-radius: 10px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`
