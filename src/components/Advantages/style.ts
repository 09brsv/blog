import styled from "styled-components"

export const AdvantagesContainer = styled.div`
	padding: 2rem 1rem 0 1rem;
	display: flex;
	flex-direction: column;
	border: ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.container};
	align-items: center;
	justify-content: center;
	gap: 1rem;
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
	left: 30%;
	top: 45%;
	transform-origin: 50% -30%;
	font-size: 14px;
	transform: rotate(calc(var(--i) * 100deg / var(--total)))
		translate(-80px, 60px)
		rotate(calc(280deg - var(--i) * 80deg / var(--total)));
	white-space: nowrap; /* Evita quebra de palavras */
`

export const AdvantagesWrapperArrow = styled.div`
	position: absolute;
	bottom: 70%;
	right: 10%;
	rotate: -45deg;
`

export const AdvantagesWrapper = styled.div`
	position: absolute;
	bottom: -15%;
	left: 37%;
	rotate: -45deg;
	width: 130%;
	padding: 1rem;
	padding-top: 4.5rem;
	z-index: -1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: ${({ theme }) => theme.radius.container};
	background-color: ${({ theme }) => theme.colors.blueBgLight};
`

export const AdvantagesWrapperList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	padding: 0;
	gap: 0.7rem;
`

export const AdvantagesWrapperListItem = styled.li`
	display: flex;
	gap: 0.2rem;
	align-items: center;
	span {
		font-family: "RammettoOne";
		font-size: 12px;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.white};
		text-transform: uppercase;
	}
`
