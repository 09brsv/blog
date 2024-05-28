import { CurvedArrowRightDownIcon } from "config/icons/icons"
import styled from "styled-components"
import { device } from "styles"

export const AdvantagesContainer = styled.div`
	position: relative;
	padding: 2rem 1rem 0 1rem;
	display: flex;
	flex-direction: column;
	border: 3px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.container};
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media ${device.md} {
		width: 45%;
		border-left: none;
		border-right: none;
		border-radius: 0;
		align-self: center;
	}
`

export const AdvantagesCircularTextContainer = styled.div`
	position: relative;
	border-radius: 50%;
	transform: rotate(45deg); /* Inicia a animação no topo */
	display: flex;
	align-items: center;
	justify-content: center;
`

export const AdvantagesCircularText = styled.span`
	position: absolute;
	left: 23%;
	top: 45%;
	transform-origin: 50% -30%;
	font-size: 14px;
	transform: rotate(calc(var(--i) * 100deg / var(--total)))
		translate(-80px, 60px)
		rotate(calc(280deg - var(--i) * 80deg / var(--total)));
	white-space: nowrap; /* Evita quebra de palavras */

	@media ${device.md} {
		top: 89%;
		left: -7rem;
		transform-origin: 134% 280%;
		transform: rotate(calc(var(--i) * 152deg / var(--total)))
			translate(-52px, -12px)
			rotate(calc(286deg - var(--i) * 62deg / var(--total)));
	}
`

export const AdvantagesWrapperCircle = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	margin-bottom: -8rem;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 1;

	@media ${device.md} {
		flex-direction: row;
    left: 0;
    bottom: 6rem;
    margin-left: 8rem;
	}
`

export const AdvantagesArrow = styled(CurvedArrowRightDownIcon)`
	position: absolute;
	right: 1rem;
	top: 15%;

	@media ${device.md} {
		bottom: 60%;
		right: 50%;
	}
`

export const AdvantagesWrapper = styled.div`
	padding: 4.5rem 1.5rem 1.5rem 1.5rem;
	z-index: -1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: -3rem;
	border-radius: ${({ theme }) => theme.radius.container};
	background-color: ${({ theme }) => theme.colors.blueBgLight};

	@media ${device.md} {
		padding: 1.5rem 5rem;
		margin: 0 0 -1em -4rem;
	}
`

export const AdvantagesWrapperList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	padding: 0;
	gap: 0.7rem;

	@media ${device.md} {
		align-items: flex-start;
	}
`

export const AdvantagesWrapperListItem = styled.li`
	display: flex;
	gap: 0.2rem;
	align-items: center;
	span {
		font-family: "RammettoOne";
		font-size: 12px;
		letter-spacing: 0.2em;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.white};
		text-transform: uppercase;
	}
`
